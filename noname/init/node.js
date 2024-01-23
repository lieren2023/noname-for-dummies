// @ts-nocheck
import { Get as get } from '../get/index.js';
import { Library as lib } from '../library/index.js';
import { Game as game } from '../game/index.js';
import { status as _status } from '../status/index.js';
import { UI as ui } from '../ui/index.js';

export function nodeReady() {
	const versions = window.process.versions;
	// @ts-ignore
	const electronVersion = parseFloat(versions.electron);
	lib.node = {
		fs: require('fs'),
		path: require("path"),
		debug() {
			let remote;
			if (electronVersion >= 14) {
				// @ts-ignore
				remote = require('@electron/remote');
			} else {
				// @ts-ignore
				remote = require('electron').remote;
			}
			remote.getCurrentWindow().toggleDevTools();
		}
	};
	lib.path = lib.node.path;
	game.download = function (url, folder, onsuccess, onerror, dev, onprogress) {
		if (!url.startsWith('http')) {
			url = get.url(dev) + url;
		}
		game.ensureDirectory(folder, function () {
			try {
				var file = lib.node.fs.createWriteStream(__dirname + '/' + folder);
			}
			catch (e) {
				onerror();
			}
			lib.config.brokenFile.add(folder);
			game.saveConfigValue('brokenFile');
			if (!lib.node.http) lib.node.http = require('http');
			if (!lib.node.https) lib.node.https = require('https');
			var opts = require('url').parse(encodeURI(url));
			opts.headers = { 'User-Agent': 'AppleWebkit' };
			(url.startsWith('https') ? lib.node.https : lib.node.http).get(opts, function (response) {
				var stream = response.pipe(file);
				stream.on('finish', function () {
					lib.config.brokenFile.remove(folder);
					game.saveConfigValue('brokenFile');
					if (onsuccess) {
						onsuccess();
					}
				});
				stream.on('error', onerror);
				if (onprogress) {
					var streamInterval = setInterval(function () {
						if (stream.closed) {
							clearInterval(streamInterval);
						}
						else {
							onprogress(stream.bytesWritten);
						}
					}, 200);
				}
			});
		}, true);
	};
	game.readFile = function (filename, callback, onerror) {
		lib.node.fs.readFile(__dirname + '/' + filename, function (err, data) {
			if (err) {
				onerror(err);
			}
			else {
				callback(data);
			}
		});
	};
	game.readFileAsText = function (filename, callback, onerror) {
		lib.node.fs.readFile(__dirname + '/' + filename, 'utf-8', function (err, data) {
			if (err) {
				onerror(err);
			}
			else {
				callback(data);
			}
		});
	};
	game.writeFile = function (data, path, name, callback) {
		game.ensureDirectory(path, function () {
			if (Object.prototype.toString.call(data) == '[object File]') {
				var fileReader = new FileReader();
				fileReader.onload = function (e) {
					game.writeFile(e.target.result, path, name, callback);
				};
				fileReader.readAsArrayBuffer(data, "UTF-8");
			}
			else {
				get.zip(function (zip) {
					zip.file('i', data);
					lib.node.fs.writeFile(__dirname + '/' + path + '/' + name, zip.files.i.asNodeBuffer(), null, callback);
				});
			}
		});
	};
	game.removeFile = function (filename, callback) {
		lib.node.fs.unlink(__dirname + '/' + filename, callback || function () { });
	};
	game.getFileList = (dir, success, failure) => {
		var files = [], folders = [];
		dir = __dirname + '/' + dir;
		if (typeof failure == "undefined") {
			failure = err => {
				throw err;
			};
		}
		else if (failure == null) {
			failure = () => { };
		}
		try {
			lib.node.fs.readdir(dir, (err, filelist) => {
				if (err) {
					failure(err);
					return;
				}
				for (var i = 0; i < filelist.length; i++) {
					if (filelist[i][0] != '.' && filelist[i][0] != '_') {
						if (lib.node.fs.statSync(dir + '/' + filelist[i]).isDirectory()) {
							folders.push(filelist[i]);
						}
						else {
							files.push(filelist[i]);
						}
					}
				}
				success(folders, files);
			});
		}
		catch (e) {
			failure(e);
		}
	};
	game.ensureDirectory = (list, callback, file) => {
		const directoryList = typeof list == 'string' ? [list] : list.slice().reverse(), number = file ? 1 : 0, access = (path, directory, createDirectory) => {
			if (directory.length <= number) {
				createDirectory();
				return;
			}
			path += `/${directory.pop()}`;
			const fullPath = `${__dirname}${path}`;
			return new Promise((resolve, reject) => lib.node.fs.access(fullPath, errnoException => {
				if (errnoException) reject();
				else resolve();
			})).catch(() => new Promise((resolve, reject) => lib.node.fs.mkdir(fullPath, errnoException => {
				if (errnoException) reject(errnoException);
				else resolve();
			}))).then(() => access(path, directory, createDirectory), console.log);
		};
		return new Promise(resolve => {
			const createDirectory = () => {
				if (directoryList.length) access('', directoryList.pop().split('/').reverse(), createDirectory);
				else {
					if (typeof callback == 'function') callback();
					resolve();
				}
			};
			createDirectory();
		});
	};
	if (ui.updateUpdate) {
		ui.updateUpdate();
	}
}
