interface CordovaPlugins {
	notification: {
		badge: Object;
		local: LocalNotification;
	};
}

type Callback = (bool: boolean) => void;

interface LocalNotification {
	/**
	 * Check permission to show notifications.
	 *
	 * @param callback The function to be exec as the callback.
	 * @param scope    The callback function's scope.
	 */
	hasPermission: (callback?: Callback, scope?: any) => void;

	/**
	 * Request permission to show notifications.
	 *
	 * @param callback The function to be exec as the callback.
	 * @param scope    The callback function's scope.
	 */
	requestPermission: (callback?: Callback, scope?: any) => void;

	/**
	 * Schedule notifications.
	 *
	 * @param msgs     The notifications to schedule.
	 * @param callback The function to be exec as the callback.
	 * @param scope    The callback function's scope.
	 * @param args     Optional flags how to schedule.
	 */
	schedule: (msgs: Object | Object[], callback?: Callback, scope?: any, args?: Object) => void;

	/**
	 * Schedule notifications.
	 *
	 * @param notifications The notifications to schedule.
	 * @param callback      The function to be exec as the callback.
	 * @param scope         The callback function's scope.
	 * @param args          Optional flags how to schedule.
	 */
	update: (msgs: Object | Object[], callback?: Callback, scope?: any, args?: Object) => void;

	/**
	 * Clear the specified notifications by id.
	 *
	 * @param ids      The IDs of the notifications.
	 * @param callback The function to be exec as the callback.
	 * @param scope    The callback function's scope.
	 */
	clear: (ids: number | number[], callback?: Callback, scope?: any) => void;

	/**
	 * Clear all triggered notifications.
	 *
	 * @param callback The function to be exec as the callback.
	 * @param scope    The callback function's scope.
	 */
	clearAll: (callback?: Callback, scope?: any) => void;

	/**
	 * Clear the specified notifications by id.
	 *
	 * @param ids      The IDs of the notifications.
	 * @param callback The function to be exec as the callback.
	 * @param scope    The callback function's scope.
	 */
	cancel: (ids: number | number[], callback?: Callback, scope?: any) => void;

	/**
	 * Cancel all scheduled notifications.
	 *
	 * @param callback The function to be exec as the callback.
	 * @param scope    The callback function's scope.
	 */
	cancelAll: (callback?: Callback, scope?: any) => void;

	/**
	 * Check if a notification is present.
	 *
	 * @param id       The ID of the notification.
	 * @param callback The function to be exec as the callback.
	 * @param scope    The callback function's scope.
	 */
	isPresent: (id: number, callback?: Callback, scope?: any) => void;

	/**
	 * Check if a notification is scheduled.
	 *
	 * @param id       The ID of the notification.
	 * @param callback The function to be exec as the callback.
	 * @param scope    The callback function's scope.
	 */
	isScheduled: (id: number, callback?: Callback, scope?: any) => void;

	/**
	 * Check if a notification was triggered.
	 *
	 * @param id       The ID of the notification.
	 * @param callback The function to be exec as the callback.
	 * @param scope    The callback function's scope.
	 */
	isTriggered: (id: number, callback?: Callback, scope?: any) => void;

	/**
	 * Check if a notification has a given type.
	 *
	 * @param id       The ID of the notification.
	 * @param type     The type of the notification.
	 * @param callback The function to be exec as the callback.
	 * @param scope    The callback function's scope.
	 */
	hasType: (id: number, type: string, callback?: Callback, scope?: any) => void;

	/**
	 * Get the type (triggered, scheduled) for the notification.
	 *
	 * @param id       The ID of the notification.
	 * @param callback The function to be exec as the callback.
	 * @param scope    The callback function's scope.
	 */
	getType: (id: number, callback?: Callback, scope?: any) => void;

	/**
	 * List of all notification ids.
	 *
	 * @param callback The function to be exec as the callback.
	 * @param scope    The callback function's scope.
	 */
	getIds: (callback: (ids: number[]) => void, scope?: any) => void;

	/**
	 * List of all scheduled notification IDs.
	 *
	 * @param callback The function to be exec as the callback.
	 * @param scope    The callback function's scope.
	 */
	getScheduledIds: (callback: (ids: number[]) => void, scope?: any) => void;

	/**
	 * List of all triggered notification IDs.
	 *
	 * @param callback The function to be exec as the callback.
	 * @param scope    The callback function's scope.
	 */
	getTriggeredIds: (callback: (ids: number[]) => void, scope?: any) => void;

	/**
	 * List of local notifications specified by id.
	 * If called without IDs, all notification will be returned.
	 *
	 * @param ids      The IDs of the notifications.
	 * @param callback The function to be exec as the callback.
	 * @param scope    The callback function's scope.
	 */

	get(ids: number[], callback: (notifications: Object[]) => void, scope?: any): void;

	/**
	 * List of local notifications specified by id.
	 * If called without IDs, all notification will be returned.
	 */
	get(callback: (notifications: Object[]) => void, scope?: any): void;

	/**
	 * List for all notifications.
	 *
	 * @param callback The function to be exec as the callback.
	 * @param scope    The callback function's scope.
	 */
	getAll: (callback: (notifications: Object[]) => void, scope?: any) => void;

	/**
	 * List of all scheduled notifications.
	 *
	 * @param callback The function to be exec as the callback.
	 * @param scope    The callback function's scope.
	 */
	getScheduled: (callback: (notifications: Object[]) => void, scope?: any) => void;

	/**
	 * List of all triggered notifications.
	 *
	 * @param callback The function to be exec as the callback.
	 * @param scope    The callback function's scope.
	 */
	getTriggered: (callback: (notifications: Object[]) => void, scope?: any) => void;

	/**
	 * Add an group of actions by id.
	 *
	 * @param id       The Id of the group.
	 * @param actions  The action config settings.
	 * @param callback The function to be exec as the callback.
	 * @param scope    The callback function's scope.
	 */
	addActions: (id: string, actions: any[], callback?: Function, scope?: any) => void;

	/**
	 * Remove an group of actions by id.
	 *
	 * @param id       The Id of the group.
	 * @param callback The function to be exec as the callback.
	 * @param scope    The callback function's scope.
	 */
	removeActions: (id: string, callback?: Function, scope?: any) => void;

	/**
	 * Check if a group of actions is defined.
	 *
	 * @param id       The Id of the group.
	 * @param callback The function to be exec as the callback.
	 * @param scope    The callback function's scope.
	 */
	hasActions: (id: string, callback?: Function, scope?: any) => void;

	/**
	 * The (platform specific) default settings.
	 */
	getDefaults: () => ({
		actions: any[],
		attachments: any[],
		autoClear: boolean,
		badge: any, // null
		channel: any, // null
		clock: boolean,
		color: any, // null
		data: any, // null
		defaults: number,
		foreground: any, // null
		group: any, // null
		groupSummary: boolean,
		icon: any, // null,
		iconType: any, // null,
		id: number,
		launch: boolean,
		led: boolean,
		lockscreen: boolean,
		mediaSession: any, // null
		number: number,
		priority: number,
		progressBar: boolean,
		silent: boolean,
		smallIcon: string,
		sound: boolean,
		sticky: boolean,
		summary: any, // null,
		text: string,
		timeoutAfter: boolean,
		title: string,
		trigger: Object,
		vibrate: boolean,
		wakeup: boolean
	});

	/**
	 * Overwrite default settings.
	 *
	 * @param newDefaults New default values.
	 */
	setDefaults: (newDefaults: object) => void;

	/**
	 * Register callback for given event.
	 *
	 * @param event    The name of the event.
	 * @param callback The function to be exec as callback.
	 * @param scope    The callback function's scope.
	 */
	on: (event: string, callback: Function, scope?: any) => void;

	/**
	 * Unregister callback for given event.
	 *
	 * @param event    The name of the event.
	 * @param callback The function to be exec as callback.
	 */
	un: (event: string, callback: Function) => void;

	/**
	 * Fire the event with given arguments.
	 *
	 * @param event The event's name.
	 * @param args  The callback's arguments.
	 */
	fireEvent: (event: string, ...args: any[]) => void;

	/**
	 * Fire queued events once the device is ready and all listeners are registered.
	 */
	fireQueuedEvents: VoidFunction;
}

interface privateFunction {
	/**
	 * Merge custom properties with the default values.
	 *
	 * @param options Set of custom values.
	 */
	_mergeWithDefaults: (options: object) => object;

	/**
	 * Convert the passed values to their required type.
	 *
	 * @param options Properties to convert for.
	 */
	_convertProperties: (options: object) => object;

	/**
	 * Convert the passed values for the priority to their required type.
	 *
	 * @param options Set of custom values.
	 *
	 * @return Interaction object with trigger spec.
	 */
	_convertPriority: (options: object) => object;

	/**
	 * Convert the passed values to their required type, modifying them
	 * directly for Android and passing the converted list back for iOS.
	 *
	 * @param options Set of custom values.
	 *
	 * @return Interaction object with category & actions.
	 */
	_convertActions: (options: object) => object;

	/**
	 * Convert the passed values for the trigger to their required type.
	 *
	 * @param options Set of custom values.
	 *
	 * @return Interaction object with trigger spec.
	 */
	_convertTrigger: (options: object) => object;

	/**
	 * Create a callback function to get executed within a specific scope.
	 *
	 * @param [ Function ] fn    The function to be exec as the callback.
	 * @param [ Object ]   scope The callback function's scope.
	 *
	 * @return [ Function ]
	 */
	_createCallbackFn: (fn: Function, scope?: any) => (...args: any[]) => void;

	/**
	 * Convert the IDs to numbers.
	 *
	 * @param ids
	 */
	_convertIds: (ids: (number | string)[]) => number[];

	/**
	 * First found value for the given keys.
	 *
	 * @param options Object with key-value properties.
	 * @param keys    List of keys.
	 */
	_getValueFor: (options: object, ...keys: any[]) => object | null;

	/**
	 * Convert a value to an array.
	 *
	 * @param obj Any kind of object.
	 *
	 * @return An array with the object as first item.
	 */
	_toArray: (obj: any) => any[];

	/**
	 * Execute the native counterpart.
	 *
	 * @param action   The name of the action.
	 * @param args     Array of arguments.
	 * @param callback The callback function.
	 * @param scope    The scope for the function.
	 */
	_exec: (action: string, args: any[], callback: Function, scope?: any) => void;


	/**
	 * Set the launch details if the app was launched by clicking on a toast.
	 */
	_setLaunchDetails: VoidFunction;

}