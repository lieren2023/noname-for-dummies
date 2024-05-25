// apk每次安装后第一次启动加载Service Worker会失败
// 所以每次导入这个ts判断是否会成功，失败的话重启一次

export const text: string = "ts文件导入成功";
