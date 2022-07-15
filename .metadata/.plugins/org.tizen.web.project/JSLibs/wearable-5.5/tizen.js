/**
 * The AlarmRelative interface provides the relative alarm, which occurs at a fixed interval in future.
          <p>
This alarm triggers after a duration mentioned in the <em>delay</em> attribute from the moment the alarm is added.
If a <em>period</em> is provided, the alarm keeps triggering for the given interval.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AlarmRelative}
 */
function AlarmRelative() {};
AlarmRelative.prototype = new Alarm();

/**
 * The AlarmAbsolute interface provides an absolute alarm, which triggers at a specified absolute date.
          <p>
If a <em>period</em> is provided, the alarm keeps triggering for the given interval. If the <em>daysOfTheWeek</em> array is not empty, the alarm triggers every week, for the given days, at the time defined by the <em>date</em> attribute.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AlarmAbsolute}
 */
function AlarmAbsolute() {};
AlarmAbsolute.prototype = new Alarm();

/**
 * The Alarm interface is an abstract interface for alarm types.
 *
 * @super Object
 * @constructor
 * @return {Alarm}
 */
function Alarm() {};
Alarm.prototype = new Object();

/**
 * The AlarmManager interface provides methods to manage alarms.
 *
 * @super Object
 * @constructor
 * @return {AlarmManager}
 */
function AlarmManager() {};
AlarmManager.prototype = new Object();

/**
 * The AlarmManagerObject interface defines what is instantiated by the object from the Tizen Platform. The object allows access to the functionality of the Alarm API.
 *
 * @super Object
 * @constructor
 * @return {AlarmManagerObject}
 */
function AlarmManagerObject() {};
AlarmManagerObject.prototype = new Object();

/**
 * An attribute to store the difference in time (in seconds) between when an alarm is added and when it is triggered.
 *
 * @type Number
 */
AlarmRelative.prototype.delay = new Number();

/**
 * An attribute to store the duration in seconds between each trigger of an alarm. By default, this attribute is set to , indicating that this alarm does not repeat.
 *
 * @type Number
 */
AlarmRelative.prototype.period = new Number();

/**
 * Returns the duration in seconds before the next alarm is triggered.
            <p>
If the alarm has expired, this method returns <var>null</var>.
            </p>
           
 *
 * @type Number
 * @memberOf AlarmRelative
 * @returns {Number}
 */
AlarmRelative.prototype.getRemainingSeconds = function(){ var ret = new Number(); return ret; };

/**
 * An attribute to store the absolute date/time when the alarm is initially triggered.
 * <p>
This attribute is precise to the second. Milliseconds will be ignored.
            </p>
 *
 * @type Date
 */
AlarmAbsolute.prototype.date = new Date();

/**
 * An attribute to store the duration in seconds between each trigger of the alarm.
 * <p>
By default, this attribute is set to <var>null</var>, indicating that this alarm does not repeat.
The <em>period</em> and <em>daysOfTheWeek</em> attributes are mutually exclusive.
            </p>
 *
 * @type Number
 */
AlarmAbsolute.prototype.period = new Number();

/**
 * An attribute to store the days of the week associated with the recurrence rule.
 * <p>
By default, this attribute is set to an empty array.
The <em>period</em> and <em>daysOfTheWeek</em> attributes are mutually exclusive.
            </p>
 *
 * @type array
 */
AlarmAbsolute.prototype.daysOfTheWeek = new array();

/**
 * Returns the date / time of the next alarm trigger.
            <p>
If the alarm has expired, this method returns <var>null</var>. The returned date is precise to the second.
            </p>
           
 *
 * @type Date
 * @memberOf AlarmAbsolute
 * @returns {Date}
 */
AlarmAbsolute.prototype.getNextScheduledDate = function(){ var ret = new Date(); return ret; };

/**
 * The alarm identifier.
 *
 * @type AlarmId
 */
Alarm.prototype.id = new AlarmId();

/**
 * The period of a minute. It defines the number of seconds per minute.
 *
 * @type Number
 */
AlarmManager.PERIOD_MINUTE = new Number();

/**
 * The period of an hour. It defines the number of seconds per hour.
 *
 * @type Number
 */
AlarmManager.PERIOD_HOUR = new Number();

/**
 * The period of a day. It defines the number of seconds per day.
 *
 * @type Number
 */
AlarmManager.PERIOD_DAY = new Number();

/**
 * The period of a week. It defines the number of seconds in a week.
 *
 * @type Number
 */
AlarmManager.PERIOD_WEEK = new Number();

/**
 * Adds an alarm to the storage.
            <p>
Sets an alarm with the application ID to be run. You should definitely provide the application ID to run
and the <a href=" http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/app_guide/application_service.htm">application control </a>information if it is necessary. 
For more information about the application control, see <a href="application.html">The Application API</a>.
            </p>
           
 *
 * @param {Alarm} alarm
 * @param {ApplicationId} applicationId
 * @param {ApplicationControl} appControl
 * @type void
 * @memberOf AlarmManager
 * @returns {void}
 */
AlarmManager.prototype.add = function(alarm, applicationId, appControl){ return; };

/**
 * Removes an alarm from the storage.
            <p>
If an alarm goes off, it will be removed from the storage automatically.
            </p>
           
 *
 * @param {AlarmId} id
 * @type void
 * @memberOf AlarmManager
 * @returns {void}
 */
AlarmManager.prototype.remove = function(id){ return; };

/**
 * Removes all alarms added by an application.
            <p>
Because each application has its own alarm storage, this method removes alarms only added by the calling application.
            </p>
           
 *
 * @type void
 * @memberOf AlarmManager
 * @returns {void}
 */
AlarmManager.prototype.removeAll = function(){ return; };

/**
 * Returns an alarm as per the specified identifier.
 *
 * @param {AlarmId} id
 * @type Alarm
 * @memberOf AlarmManager
 * @returns {Alarm}
 */
AlarmManager.prototype.get = function(id){ var ret = new Alarm(); return ret; };

/**
 * Retrieves all alarms in an application storage.
            <p>
Alarms that have already been triggered are removed automatically from the storage.
            </p>
           
 *
 * @type array
 * @memberOf AlarmManager
 * @returns {array}
 */
AlarmManager.prototype.getAll = function(){ var ret = new array(); return ret; };

/**
 * The Alarm API provides functionality for scheduling the system alarm. It allows you to run other applications and have them perform operations at a specific time. You can schedule an alarm to go off once or to repeat at specific intervals.
 * <p>
Each application has its own individual alarm storage, that is, applications cannot view or edit alarms set by other applications.
        </p>
 * <p>
Once an alarm goes off, it will be removed from the alarm storage automatically.
<em>AlarmManager</em> provides methods to manage alarms such as adding and removing.
For more information on the Alarm features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/app_guide/alarm.htm">Alarm Guide</a>.
        </p>
 *
 * @type AlarmManager
 */
AlarmManagerObject.prototype.alarm = new AlarmManager();

/**
 * The Alarm API provides functionality for scheduling the system alarm. It allows you to run other applications and have them perform operations at a specific time. You can schedule an alarm to go off once or to repeat at specific intervals.
 * <p>
Each application has its own individual alarm storage, that is, applications cannot view or edit alarms set by other applications.
        </p>
 * <p>
Once an alarm goes off, it will be removed from the alarm storage automatically.
<em>AlarmManager</em> provides methods to manage alarms such as adding and removing.
For more information on the Alarm features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/app_guide/alarm.htm">Alarm Guide</a>.
        </p>
 *
 * @type AlarmManager
 */
Tizen.prototype.alarm = new AlarmManager();

/**
 * This interface defines the current application's information and the basic operations (such as exit or hide) for the current application.
 *
 * @super Object
 * @constructor
 * @return {Application}
 */
function Application() {};
Application.prototype = new Object();

/**
 * This interface defines the certificate information of an installed application.
 *
 * @super Object
 * @constructor
 * @return {ApplicationCertificate}
 */
function ApplicationCertificate() {};
ApplicationCertificate.prototype = new Object();

/**
 * This callback interface specifies a success callback that is invoked when the system has finished searching applications that match a specific application control .
          <p>
This callback interface specifies a success method with an array of
<em>ApplicationInformation </em>objects and application control as an input parameter.
It is used in <em>ApplicationManager.findAppControl()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FindAppControlSuccessCallback}
 */
function FindAppControlSuccessCallback() {};
FindAppControlSuccessCallback.prototype = new Object();

/**
 * This callback interface specifies a success callback that is invoked when the installed application list is retrieved.
          <p>
This callback interface specifies a success method with an array of
<em>ApplicationInformation </em>objects as an input parameter. It is used in <em>ApplicationManager.getAppsInfo()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ApplicationInformationArraySuccessCallback}
 */
function ApplicationInformationArraySuccessCallback() {};
ApplicationInformationArraySuccessCallback.prototype = new Object();

/**
 * The ApplicationControlDataArrayReplyCallback callback specifies success callbacks that are invoked as a reply from the requested application control within the application control requester.
          <p>
This callback interface specifies two methods:
          </p>
          <ul>
            <li>
 <em>onsuccess()</em> - Invoked if the callee application calls <em>RequestedApplicationControl.replyResult()</em>.            </li>
            <li>
 <em>onfailure()</em> - Invoked if the callee application calls <em>RequestedApplicationControl.replyFailure()</em>.            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {ApplicationControlDataArrayReplyCallback}
 */
function ApplicationControlDataArrayReplyCallback() {};
ApplicationControlDataArrayReplyCallback.prototype = new Object();

/**
 * This interface defines a key/value pair used to pass data between applications through the interface.
 *
 * @super Object
 * @constructor
 * @return {ApplicationControlData}
 */
function ApplicationControlData() {};
ApplicationControlData.prototype = new Object();

/**
 * This interface defines the general information available to an installed application.
 *
 * @super Object
 * @constructor
 * @return {ApplicationInformation}
 */
function ApplicationInformation() {};
ApplicationInformation.prototype = new Object();

/**
 * This callback interface specifies a success callback that is invoked when the list of running applications is retrieved.
          <p>
This callback interface specifies a success method with
an array of <em>ApplicationContext </em>objects as an input parameter. It is used in <em>ApplicationManager.getAppsContext()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ApplicationContextArraySuccessCallback}
 */
function ApplicationContextArraySuccessCallback() {};
ApplicationContextArraySuccessCallback.prototype = new Object();

/**
 * This interface defines the information available about a running application.
 *
 * @super Object
 * @constructor
 * @return {ApplicationContext}
 */
function ApplicationContext() {};
ApplicationContext.prototype = new Object();

/**
 * The EventCallback interface specifies a callback for getting notified when a specified event occurs.
 *
 * @super Object
 * @constructor
 * @return {EventCallback}
 */
function EventCallback() {};
EventCallback.prototype = new Object();

/**
 * The SystemEventData interface defines what is retrieved from the event listener.
          <p>
Platform modules will be able to broadcast system events in a future Tizen release.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemEventData}
 */
function SystemEventData() {};
SystemEventData.prototype = new Object();

/**
 * This interface defines what is instantiated by the object on the Tizen Platform.
          <p>
The <em>tizen.application </em>object allows access to the Application API's functionality.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ApplicationManagerObject}
 */
function ApplicationManagerObject() {};
ApplicationManagerObject.prototype = new Object();

/**
 * The ApplicationManager interface provides methods to retrieve application information, launch, install application, etc.
 *
 * @super Object
 * @constructor
 * @return {ApplicationManager}
 */
function ApplicationManager() {};
ApplicationManager.prototype = new Object();

/**
 * This interface consists of an operation, URI, MIME type, and data. It describes an action to be performed by other applications and is passed to launch other applications. If the system gets the application control request, it finds the corresponding application to be launched with the delivered application control and launches the selected application.
 *
 * @super Object
 * @constructor
 * @return {ApplicationControl}
 */
function ApplicationControl() {};
ApplicationControl.prototype = new Object();

/**
 * The ApplicationInformationEventCallback specifies listener for subscribing for notifications of changes in the list of installed applications on a device.
          <p>
This callback interface specifies methods that are invoked when
an application is installed, updated, or uninstalled.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ApplicationInformationEventCallback}
 */
function ApplicationInformationEventCallback() {};
ApplicationInformationEventCallback.prototype = new Object();

/**
 * This interface defines the meta data of an installed application
 *
 * @super Object
 * @constructor
 * @return {ApplicationMetaData}
 */
function ApplicationMetaData() {};
ApplicationMetaData.prototype = new Object();

/**
 * This interface has an application control information requested and passed from another application and is passed to launch other applications. The newly launched application can get the requested application control through the method, and send the results to the calling application through the method after performing the required action requested by the calling application.
 *
 * @super Object
 * @constructor
 * @return {RequestedApplicationControl}
 */
function RequestedApplicationControl() {};
RequestedApplicationControl.prototype = new Object();

/**
 * An attribute to store the application information for the current application.
 *
 * @type ApplicationInformation
 */
Application.prototype.appInfo = new ApplicationInformation();

/**
 * An attribute to store the ID of a running application.
 *
 * @type ApplicationContextId
 */
Application.prototype.contextId = new ApplicationContextId();

/**
 * Exits the current application.
 *
 * @type void
 * @memberOf Application
 * @returns {void}
 */
Application.prototype.exit = function(){ return; };

/**
 * Hides the current application.
 *
 * @type void
 * @memberOf Application
 * @returns {void}
 */
Application.prototype.hide = function(){ return; };

/**
 * Gets the requested application control passed to the current application.
            <p>
Gets the requested application control that contains the application control
passed by the <em>launchAppControl()</em> method from the calling application.
The requested application control contains the reason the application
is launched and what it has to perform. For example, an application
might be launched to display an image on a page by another
application's request. In all of these cases, the application is
responsible for checking the contents of the application control and responding
appropriately when it is launched.
            </p>
           
 *
 * @type RequestedApplicationControl
 * @memberOf Application
 * @returns {RequestedApplicationControl}
 */
Application.prototype.getRequestedAppControl = function(){ var ret = new RequestedApplicationControl(); return ret; };

/**
 * Adds a listener which will invoke a callback function when an event occurs.
            <p>
System events do not require an application identifier to be specified. Therefore, the <var>appId</var> attribute of the <a href="#EventInfo">EventInfo</a> dictionary should not be specified when listening for system events. If it is specified, the event to listen for will be interpreted as an user event.
            </p>
           
 *
 * @param {EventInfo} event
 * @param {EventCallback} callback
 * @type Number
 * @memberOf Application
 * @returns {Number}
 */
Application.prototype.addEventListener = function(event, callback){ var ret = new Number(); return ret; };

/**
 * Removes an event listener with a specified listener identifier.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf Application
 * @returns {void}
 */
Application.prototype.removeEventListener = function(watchId){ return; };

/**
 * Broadcasts a user defined event to all the listeners which are listening for this event.
            <p>
An application can listen to events from other applications. However, it can only broadcast it's own events. Therefore, the <var>appId</var> attribute of the <a href="#EventInfo">EventInfo</a> dictionary must be the identifier of the application which calls this method.
            </p>
           
 *
 * @param {EventInfo} event
 * @param {UserEventData} data
 * @type void
 * @memberOf Application
 * @returns {void}
 */
Application.prototype.broadcastEvent = function(event, data){ return; };

/**
 * Broadcasts a user defined event to all the trusted listeners which are listening for this event. Applications which have the same certificate as the sending application can receive the event.
            <p>
An application can listen to events from other applications. However, it can only broadcast it's own events. Therefore, the <var>appId</var> attribute of the <a href="#EventInfo">EventInfo</a> dictionary must be the identifier of the application which calls this method.
            </p>
           
 *
 * @param {EventInfo} event
 * @param {UserEventData} data
 * @type void
 * @memberOf Application
 * @returns {void}
 */
Application.prototype.broadcastTrustedEvent = function(event, data){ return; };

/**
 * An attribute to store the type of the application certificate
 *
 * @type String
 */
ApplicationCertificate.prototype.type = new String();

/**
 * An attribute to store the value of the application certificate
 *
 * @type String
 */
ApplicationCertificate.prototype.value = new String();

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} informationArray
 * @param {ApplicationControl} appControl
 * @type void
 * @memberOf FindAppControlSuccessCallback
 * @returns {void}
 */
FindAppControlSuccessCallback.prototype.onsuccess = function(informationArray, appControl){ return; };

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} informationArray
 * @type void
 * @memberOf ApplicationInformationArraySuccessCallback
 * @returns {void}
 */
ApplicationInformationArraySuccessCallback.prototype.onsuccess = function(informationArray){ return; };

/**
 * Called when the callee application calls .
 *
 * @param {array} data
 * @type void
 * @memberOf ApplicationControlDataArrayReplyCallback
 * @returns {void}
 */
ApplicationControlDataArrayReplyCallback.prototype.onsuccess = function(data){ return; };

/**
 * Called when the callee application calls .
 *
 * @type void
 * @memberOf ApplicationControlDataArrayReplyCallback
 * @returns {void}
 */
ApplicationControlDataArrayReplyCallback.prototype.onfailure = function(){ return; };

/**
 * An attribute to store the name of a key.
 *
 * @type String
 */
ApplicationControlData.prototype.key = new String();

/**
 * An attribute to store the value associated with a key.
 *
 * @type array
 */
ApplicationControlData.prototype.value = new array();

/**
 * An attribute to store the identifier of an application for application management.
 *
 * @type ApplicationId
 */
ApplicationInformation.prototype.id = new ApplicationId();

/**
 * An attribute to store the name of an application.
 *
 * @type String
 */
ApplicationInformation.prototype.name = new String();

/**
 * An attribute to store the icon path of an application.
 *
 * @type String
 */
ApplicationInformation.prototype.iconPath = new String();

/**
 * An attribute to store the version of an application.
 *
 * @type String
 */
ApplicationInformation.prototype.version = new String();

/**
 * An attribute that determines whether the application information should be shown (such as in menus).
 *
 * @type Boolean
 */
ApplicationInformation.prototype.show = new Boolean();

/**
 * An array of attributes to store the categories that the app belongs to.
 *
 * @type array
 */
ApplicationInformation.prototype.categories = new array();

/**
 * An attribute to store the application install/update time.
 *
 * @type Date
 */
ApplicationInformation.prototype.installDate = new Date();

/**
 * An attribute to store the application size (installed space).
 *
 * @type Number
 */
ApplicationInformation.prototype.size = new Number();

/**
 * An attribute to store the package ID of an application.
 *
 * @type PackageId
 */
ApplicationInformation.prototype.packageId = new PackageId();

/**
 * Called when completes successfully.
 *
 * @param {array} contexts
 * @type void
 * @memberOf ApplicationContextArraySuccessCallback
 * @returns {void}
 */
ApplicationContextArraySuccessCallback.prototype.onsuccess = function(contexts){ return; };

/**
 * An attribute to store the ID of a running application.
 *
 * @type ApplicationContextId
 */
ApplicationContext.prototype.id = new ApplicationContextId();

/**
 * An attribute to store the ID of an installed application.
 *
 * @type ApplicationId
 */
ApplicationContext.prototype.appId = new ApplicationId();

/**
 * Called when the event occurs.
 *
 * @param {EventInfo} event
 * @param {EventData} data
 * @type void
 * @memberOf EventCallback
 * @returns {void}
 */
EventCallback.prototype.onevent = function(event, data){ return; };

/**
 * This API provides a way to launch other applications and access application management.
 * <p>
The <em>ApplicationManager</em> interface also provides methods to launch other applications
explicitly and implicitly through the <em>ApplicationControl</em> interface.
The <em>ApplicationControl</em> interface consists of an operation, URI, and MIME type
and also describes an action to be performed by other
applications and can carry the result from the subsequent application.
The <em>ApplicationManager</em> interface also provides methods to handle the application
lifecycle, to access the installed applications on the device, and to let
an application be notified of a change in the application list.
        </p>
 * <p>
The <em>Application</em> interface defines the current application's information and
the basic operations for the current application such as exit or hide.
        </p>
 * <p>
Since Tizen 3.0 the <em>Application</em> interface provides application event broadcasting and listening features. An application can broadcast user events to other listening applications and listen to broadcasted user events from other applications. In a future Tizen release, applications will also be able to receive pre-defined system events from the platform.
For more information on the Application features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/app_guide/application.htm">Application Guide</a>.
        </p>
 *
 * @type String
 */
SystemEventData.prototype.value = new String();

/**
 * This API provides a way to launch other applications and access application management.
 * <p>
The <em>ApplicationManager</em> interface also provides methods to launch other applications
explicitly and implicitly through the <em>ApplicationControl</em> interface.
The <em>ApplicationControl</em> interface consists of an operation, URI, and MIME type
and also describes an action to be performed by other
applications and can carry the result from the subsequent application.
The <em>ApplicationManager</em> interface also provides methods to handle the application
lifecycle, to access the installed applications on the device, and to let
an application be notified of a change in the application list.
        </p>
 * <p>
The <em>Application</em> interface defines the current application's information and
the basic operations for the current application such as exit or hide.
        </p>
 * <p>
Since Tizen 3.0 the <em>Application</em> interface provides application event broadcasting and listening features. An application can broadcast user events to other listening applications and listen to broadcasted user events from other applications. In a future Tizen release, applications will also be able to receive pre-defined system events from the platform.
For more information on the Application features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/app_guide/application.htm">Application Guide</a>.
        </p>
 *
 * @type String
 */
SystemEventData.prototype.type = new String();

/**
 * This API provides a way to launch other applications and access application management.
 * <p>
The <em>ApplicationManager</em> interface also provides methods to launch other applications
explicitly and implicitly through the <em>ApplicationControl</em> interface.
The <em>ApplicationControl</em> interface consists of an operation, URI, and MIME type
and also describes an action to be performed by other
applications and can carry the result from the subsequent application.
The <em>ApplicationManager</em> interface also provides methods to handle the application
lifecycle, to access the installed applications on the device, and to let
an application be notified of a change in the application list.
        </p>
 * <p>
The <em>Application</em> interface defines the current application's information and
the basic operations for the current application such as exit or hide.
        </p>
 * <p>
Since Tizen 3.0 the <em>Application</em> interface provides application event broadcasting and listening features. An application can broadcast user events to other listening applications and listen to broadcasted user events from other applications. In a future Tizen release, applications will also be able to receive pre-defined system events from the platform.
For more information on the Application features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/app_guide/application.htm">Application Guide</a>.
        </p>
 *
 * @type ApplicationManager
 */
ApplicationManagerObject.prototype.application = new ApplicationManager();

/**
 * Gets the object defining the current application.
 *
 * @type Application
 * @memberOf ApplicationManager
 * @returns {Application}
 */
ApplicationManager.prototype.getCurrentApplication = function(){ var ret = new Application(); return ret; };

/**
 * Kills an application with the specified application context ID.
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the context is not found with the specified context ID.              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value
or if the specified context ID matches the context ID of the calling application.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationContextId} contextId
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.kill = function(contextId, successCallback, errorCallback){ return; };

/**
 * Launches an application with the given application ID.
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the application is not found with the specified ID.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationId} id
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.launch = function(id, successCallback, errorCallback){ return; };

/**
 * Launches an application with the specified application control.
            <p>
An application can launch other applications with the application control,
and get back the results from the launched applications.
            </p>
            <p>
The application control consists of an operation, URI, and MIME type, and describes
the request to be performed by the newly launched application. The
application control is passed to the <em>launchAppControl()</em> method to launch an
application. The system tries to find the proper application
to perform the requested application control, then launches the selected application.
            </p>
            <p>
The application control request is passed to the newly launched application
and it can be accessed by the <em>getRequestedAppControl() </em>method. The passed
application control contains the reason the application has been launched and
information about what the application is doing. The launched application
can send a result to the caller application with the <em>replyResult() </em>method of the
<em>RequestedApplicationControl</em> interface.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the system cannot find the application that matches the specified application control.              </li>
              <li>
SecurityError - If the application does not have the privilege to call the specified application control operation.              </li>
              <li>
UnknownError: If any other error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationControl} appControl
 * @param {ApplicationId} id
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {ApplicationControlDataArrayReplyCallback} replyCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.launchAppControl = function(appControl, id, successCallback, errorCallback, replyCallback){ return; };

/**
 * Finds which applications can be launched with the given application control.
            <p>
An application can get a list of other applications that can be launched with the application control.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the application is not found with the given Appcontrol.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationControl} appControl
 * @param {FindAppControlSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.findAppControl = function(appControl, successCallback, errorCallback){ return; };

/**
 * Gets a list of application contexts for applications that are currently running on a device. The information contained for each application corresponds to the application state at the time when the list had been generated.
            <p>
The <em>ErrorCallback</em> method is launched with this error type:
            </p>
            <ul>
              <li>
UnknownError - If an unknown error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationContextArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.getAppsContext = function(successCallback, errorCallback){ return; };

/**
 * Gets the application context for the specified application context ID. If the ID is set to or is not set at all, the method returns the application context of the current application. The list of running applications and their application IDs is obtained with .
 *
 * @param {ApplicationContextId} contextId
 * @type ApplicationContext
 * @memberOf ApplicationManager
 * @returns {ApplicationContext}
 */
ApplicationManager.prototype.getAppContext = function(contextId){ var ret = new ApplicationContext(); return ret; };

/**
 * Gets the list of installed applications' information on a device. The information contained on each application corresponds to the application state at the time when the list had been generated.
            <p>
The <em>ErrorCallback</em> method is launched with this error type:
            </p>
            <ul>
              <li>
UnknownError - If an unknown error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationInformationArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.getAppsInfo = function(successCallback, errorCallback){ return; };

/**
 * Gets application information for a specified application ID.
            <p>
If the ID is set to <var>null</var> or not set at all, it returns application information for the current application.
The list of installed applications and their application IDs is obtained with <em>getAppsInfo()</em>.
            </p>
           
 *
 * @param {ApplicationId} id
 * @type ApplicationInformation
 * @memberOf ApplicationManager
 * @returns {ApplicationInformation}
 */
ApplicationManager.prototype.getAppInfo = function(id){ var ret = new ApplicationInformation(); return ret; };

/**
 * Gets application certificates for a specified application ID.
            <p>
If the ID is set to <var>null</var> or not set at all, it returns application certificates for the current application.
            </p>
            <p>
The certificate types are listed below:
            </p>
            <ul>
              <li>
 AUTHOR_ROOT - Author Root Certificate               </li>
              <li>
 AUTHOR_INTERMEDIATE - Author Intermediate Certificate               </li>
              <li>
 AUTHOR_SIGNER - Author Signer Certificate               </li>
              <li>
 DISTRIBUTOR_ROOT - Distributor Root Certificate               </li>
              <li>
 DISTRIBUTOR_INTERMEDIATE - Distributor Intermediate Certificate               </li>
              <li>
 DISTRIBUTOR_SIGNER - Distributor Signer Certificate               </li>
              <li>
 DISTRIBUTOR2_ROOT - Distributor2 Root Certificate               </li>
              <li>
 DISTRIBUTOR2_INTERMEDIATE - Distributor2 Intermediate Certificate               </li>
              <li>
 DISTRIBUTOR2_SIGNER - Distributor2 Signer Certificate               </li>
            </ul>
           
 *
 * @param {ApplicationId} id
 * @type array
 * @memberOf ApplicationManager
 * @returns {array}
 */
ApplicationManager.prototype.getAppCerts = function(id){ var ret = new array(); return ret; };

/**
 * Gets the URI of the read-only shared directory of an application for a specified application ID.
            <p>
The shared directory is used to export data to other applications.
If the ID is set to <var>null</var> or not set at all, it returns the shared directory URI for the current application.
            </p>
           
 *
 * @param {ApplicationId} id
 * @type String
 * @memberOf ApplicationManager
 * @returns {String}
 */
ApplicationManager.prototype.getAppSharedURI = function(id){ var ret = new String(); return ret; };

/**
 * Gets the application meta data array for a specified application ID.
            <p>
If the ID is set to <var>null</var> or not set at all, it returns the application meta data array for the current application.
            </p>
           
 *
 * @param {ApplicationId} id
 * @type array
 * @memberOf ApplicationManager
 * @returns {array}
 */
ApplicationManager.prototype.getAppMetaData = function(id){ var ret = new array(); return ret; };

/**
 * Adds a listener for receiving any notification for changes in the list of installed applications on a device.
            <p>
It installs a callback that is triggered every time a change occurs on
the list of installed applications on a device. This change may
occur due to a new installation, uninstallation, or update of an application.
            </p>
            <p>
When executed, the implementation must immediately return a listener
ID that identifies the listener. After returning the ID, the change
detection operation is started asynchronously.
            </p>
            <p>
The <em>ApplicationInformationEventCallback </em>must be invoked every time a new
application is installed, removed, or updated.
            </p>
            <p>
The change detection must continue until the <em>removeAppInfoEventListener()</em> method is called
with the corresponding listener identifier.
            </p>
           
 *
 * @param {ApplicationInformationEventCallback} eventCallback
 * @type Number
 * @memberOf ApplicationManager
 * @returns {Number}
 */
ApplicationManager.prototype.addAppInfoEventListener = function(eventCallback){ var ret = new Number(); return ret; };

/**
 * Removes the listener to stop receiving notifications for changes on the list of installed applications on a device.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf ApplicationManager
 * @returns {void}
 */
ApplicationManager.prototype.removeAppInfoEventListener = function(watchId){ return; };

/**
 * An attribute to store the string that defines the action to be performed by an application control.
 *
 * @type String
 */
ApplicationControl.prototype.operation = new String();

/**
 * An attribute to store the URI needed by an application control.
 *
 * @type String
 */
ApplicationControl.prototype.uri = new String();

/**
 * An attribute to store the MIME type of content.
 *
 * @type String
 */
ApplicationControl.prototype.mime = new String();

/**
 * An attribute to store the category of the application to be launched.
 *
 * @type String
 */
ApplicationControl.prototype.category = new String();

/**
 * An array of attributes to store the data needed for an application control.
 *
 * @type array
 */
ApplicationControl.prototype.data = new array();

/**
 * An attribute to specify launch mode. Default application launch mode is .
 *
 * @type ApplicationControlLaunchMode
 */
ApplicationControl.prototype.launchMode = new ApplicationControlLaunchMode();

/**
 * Called when an application is installed.
 *
 * @param {ApplicationInformation} info
 * @type void
 * @memberOf ApplicationInformationEventCallback
 * @returns {void}
 */
ApplicationInformationEventCallback.prototype.oninstalled = function(info){ return; };

/**
 * Called when an application is updated.
 *
 * @param {ApplicationInformation} info
 * @type void
 * @memberOf ApplicationInformationEventCallback
 * @returns {void}
 */
ApplicationInformationEventCallback.prototype.onupdated = function(info){ return; };

/**
 * Called when an application is uninstalled.
 *
 * @param {ApplicationId} id
 * @type void
 * @memberOf ApplicationInformationEventCallback
 * @returns {void}
 */
ApplicationInformationEventCallback.prototype.onuninstalled = function(id){ return; };

/**
 * An attribute to store the key of the application meta data
 *
 * @type String
 */
ApplicationMetaData.prototype.key = new String();

/**
 * An attribute to store the value of the application meta data
 *
 * @type String
 */
ApplicationMetaData.prototype.value = new String();

/**
 * An attribute to store the application control object that describes the caller application's request. It contains the information that the calling application passed to .
 *
 * @type ApplicationControl
 */
RequestedApplicationControl.prototype.appControl = new ApplicationControl();

/**
 * An attribute to store the caller application's ID.
 *
 * @type ApplicationId
 */
RequestedApplicationControl.prototype.callerAppId = new ApplicationId();

/**
 * Sends the results to the caller application.
 *
 * @param {array} data
 * @type void
 * @memberOf RequestedApplicationControl
 * @returns {void}
 */
RequestedApplicationControl.prototype.replyResult = function(data){ return; };

/**
 * Notifies the calling application that the application failed to perform the requested action.
 *
 * @type void
 * @memberOf RequestedApplicationControl
 * @returns {void}
 */
RequestedApplicationControl.prototype.replyFailure = function(){ return; };

/**
 * This API provides a way to launch other applications and access application management.
 * <p>
The <em>ApplicationManager</em> interface also provides methods to launch other applications
explicitly and implicitly through the <em>ApplicationControl</em> interface.
The <em>ApplicationControl</em> interface consists of an operation, URI, and MIME type
and also describes an action to be performed by other
applications and can carry the result from the subsequent application.
The <em>ApplicationManager</em> interface also provides methods to handle the application
lifecycle, to access the installed applications on the device, and to let
an application be notified of a change in the application list.
        </p>
 * <p>
The <em>Application</em> interface defines the current application's information and
the basic operations for the current application such as exit or hide.
        </p>
 * <p>
Since Tizen 3.0 the <em>Application</em> interface provides application event broadcasting and listening features. An application can broadcast user events to other listening applications and listen to broadcasted user events from other applications. In a future Tizen release, applications will also be able to receive pre-defined system events from the platform.
For more information on the Application features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/app_guide/application.htm">Application Guide</a>.
        </p>
 *
 * @type ApplicationManager
 */
Tizen.prototype.application = new ApplicationManager();

/**
 * The ArchiveManagerObject interface defines what is instantiated in the object.
          <p>
The <em>tizen.archive</em> object allows access to the Archive API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ArchiveManagerObject}
 */
function ArchiveManagerObject() {};
ArchiveManagerObject.prototype = new Object();

/**
 * The ArchiveFile interface provides access to member files of the archive file.
 *
 * @super Object
 * @constructor
 * @return {ArchiveFile}
 */
function ArchiveFile() {};
ArchiveFile.prototype = new Object();

/**
 * The ArchiveFileEntryArraySuccessCallback interface provides a SuccessCallback for the ArchiveFile::getEntries() method.
 *
 * @super Object
 * @constructor
 * @return {ArchiveFileEntryArraySuccessCallback}
 */
function ArchiveFileEntryArraySuccessCallback() {};
ArchiveFileEntryArraySuccessCallback.prototype = new Object();

/**
 * The ArchiveFileSuccessCallback interface provides a SuccessCallback for the ArchiveManager::open() method.
 *
 * @super Object
 * @constructor
 * @return {ArchiveFileSuccessCallback}
 */
function ArchiveFileSuccessCallback() {};
ArchiveFileSuccessCallback.prototype = new Object();

/**
 * The ArchiveFileEntrySuccessCallback interface provides a SuccessCallback for the ArchiveFile::getEntryByName() method.
 *
 * @super Object
 * @constructor
 * @return {ArchiveFileEntrySuccessCallback}
 */
function ArchiveFileEntrySuccessCallback() {};
ArchiveFileEntrySuccessCallback.prototype = new Object();

/**
 * The ArchiveManager interface provides methods for global operations related to ArchiveFile.
 *
 * @super Object
 * @constructor
 * @return {ArchiveManager}
 */
function ArchiveManager() {};
ArchiveManager.prototype = new Object();

/**
 * The ArchiveFileEntry interface provides access to ArchiveFile member information and file data.
 *
 * @super Object
 * @constructor
 * @return {ArchiveFileEntry}
 */
function ArchiveFileEntry() {};
ArchiveFileEntry.prototype = new Object();

/**
 * The ArchiveFileProgressCallback interface provides a ProgressCallback for ArchiveFile and ArchiveFileEntry methods.
 *
 * @super Object
 * @constructor
 * @return {ArchiveFileProgressCallback}
 */
function ArchiveFileProgressCallback() {};
ArchiveFileProgressCallback.prototype = new Object();

/**
 * The Archive API provides functions to create and manage archive files. You can extract files, add a file to an archive file, and so on.
 * <p>
For more information about how to use Archive API, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/io_guide/archive.htm">Archive Guide</a>.
        </p>
 *
 * @type ArchiveManager
 */
ArchiveManagerObject.prototype.archive = new ArchiveManager();

/**
 * attribute File mode when it is opened.
 *
 * @type FileMode
 */
ArchiveFile.prototype.mode = new FileMode();

/**
 * Size of all the files included in the archive after decompression.
 * <p>
The size is <var>null</var> until the archive is opened.
            </p>
 *
 * @type Number
 */
ArchiveFile.prototype.decompressedSize = new Number();

/**
 * Adds a new member file to .
            <p>
If <em>sourceFile</em> refers to a directory,
the directory and its content will be added to ArchiveFile.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError: If the given <em>sourceFile</em> does not exist              </li>
              <li>
IOError: If archiveFile can not be written due the lack of access permission              </li>
              <li>
InvalidModificationError: If the operation results in a name conflict in the archive<br/>i.e. two entries in the archive with the same name (including directory names).              </li>
              <li>
UnknownError: In any case of any other error              </li>
            </ul>
            <p>
Name stored for new entries is constructed from <em>sourceFile</em> according to the
<a href="#ArchiveFileEntryOptions::stripSourceDirectory">stripSourceDirectory</a> and <a href="#ArchiveFileEntryOptions::destination">destination</a> options. Names are constructed as follows:
            </p>
            <table>
              <tr>
                <th>
source file                </th>
                <th>
destination                </th>
                <th>
stripSourceDirectory                </th>
                <th>
resulting entry name                </th>
              </tr>
              <tr>
                <td>
documents/subdir/second/justName.ext                </td>
                <td>
<em>(empty)</em>                </td>
                <td>
<var>false</var>                </td>
                <td>
subdir/second/justName.ext                </td>
              </tr>
              <tr>
                <td>
documents/subdir/second/justName.ext                </td>
                <td>
<em>(empty)</em>                </td>
                <td>
<var>true</var>                </td>
                <td>
justName.ext                </td>
              </tr>
              <tr>
                <td>
documents/subdir/justName.ext                </td>
                <td>
"report3"                </td>
                <td>
<var>false</var>                </td>
                <td>
report3/subdir/justName.ext                </td>
              </tr>
              <tr>
                <td>
documents/subdir/justName.ext                </td>
                <td>
"report3"                </td>
                <td>
<var>true</var>                </td>
                <td>
report3/justName.ext                </td>
              </tr>
            </table>
           
 *
 * @param {FileReference} sourceFile
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {ArchiveFileProgressCallback} onprogress
 * @param {ArchiveFileEntryOptions} options
 * @type Number
 * @memberOf ArchiveFile
 * @returns {Number}
 */
ArchiveFile.prototype.add = function(sourceFile, onsuccess, onerror, onprogress, options){ var ret = new Number(); return ret; };

/**
 * Extracts every file from this to a given directory.
            <p>
All extracted files will be located in the given directory.
            </p>
            <p>
The <var>overwrite</var> attribute determines whether extracted files can overwrite existing files.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError: If the given <em>destinationDirectory</em> does not exist              </li>
              <li>
IOError: If destinationDirectory can not be written to (e.g due to insufficient permissions)              </li>
              <li>
InvalidModificationError: If during extracting it is detected that an existing file would
have to be overwritten and the <em>overwrite</em> argument is <var>false</var>              </li>
              <li>
UnknownError: In any other error case              </li>
            </ul>
           
 *
 * @param {FileReference} destinationDirectory
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {ArchiveFileProgressCallback} onprogress
 * @param {Boolean} overwrite
 * @type Number
 * @memberOf ArchiveFile
 * @returns {Number}
 */
ArchiveFile.prototype.extractAll = function(destinationDirectory, onsuccess, onerror, onprogress, overwrite){ var ret = new Number(); return ret; };

/**
 * Retrieves information about the member files in .
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError: In case of any error              </li>
            </ul>
           
 *
 * @param {ArchiveFileEntryArraySuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type Number
 * @memberOf ArchiveFile
 * @returns {Number}
 */
ArchiveFile.prototype.getEntries = function(onsuccess, onerror){ var ret = new Number(); return ret; };

/**
 * Retrieves information about with the specified name in .
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError: If <em>ArchiveFileEntry</em> with the specific name does not exist              </li>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
           
 *
 * @param {String} name
 * @param {ArchiveFileEntrySuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type Number
 * @memberOf ArchiveFile
 * @returns {Number}
 */
ArchiveFile.prototype.getEntryByName = function(name, onsuccess, onerror){ var ret = new Number(); return ret; };

/**
 * Closes the .
            <p>
Call this method when the archive file is not used any more. Once you call this method, the archive file object will not be available and any further operation attempt results in an <em>InvalidStateError</em>.<br/>Calling <em>close()</em> on an archive file object which is already closed does not raise any exception.
            </p>
           
 *
 * @type void
 * @memberOf ArchiveFile
 * @returns {void}
 */
ArchiveFile.prototype.close = function(){ return; };

/**
 * Called when all file entries in the archive file are retrieved successfully.
 *
 * @param {array} entries
 * @type void
 * @memberOf ArchiveFileEntryArraySuccessCallback
 * @returns {void}
 */
ArchiveFileEntryArraySuccessCallback.prototype.onsuccess = function(entries){ return; };

/**
 * Called when the archive file with the given name is ready to use.
 *
 * @param {ArchiveFile} archive
 * @type void
 * @memberOf ArchiveFileSuccessCallback
 * @returns {void}
 */
ArchiveFileSuccessCallback.prototype.onsuccess = function(archive){ return; };

/**
 * Called when the file with the given name through getEntryByName() is found successfully.
 *
 * @param {ArchiveFileEntry} entry
 * @type void
 * @memberOf ArchiveFileEntrySuccessCallback
 * @returns {void}
 */
ArchiveFileEntrySuccessCallback.prototype.onsuccess = function(entry){ return; };

/**
 * Opens the archive file. After this operation, it is possible to add or get files to and from the archive.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If archiveFile format is not recognized              </li>
              <li>
NotFoundError: If the <em>mode</em> is "r" and the <em>file</em> does not exist, or the <em>mode</em> is not "r" and the <em>file</em> cannot be created because the path of the file after excluding its file name does not exist              </li>
              <li>
IOError: If the access is denied due to insufficient permissions              </li>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
            <p>
Use <em>mode</em> depending on which operation are intended:
            </p>
            <table>
              <tr>
                <th>
Mode                </th>
                <th>
Description                </th>
              </tr>
              <tr>
                <td>
r                </td>
                <td>
Use this mode for extracting or getting information about the contents of an archive file. <br/><em>file</em> must exist. If the <em>file</em> does not exist, <em>onerror</em> will be invoked (<em>NotFoundError</em>).<br/>When an archive file is opened in this mode, <em>add()</em> will not be available. (<em>IOError</em> will be thrown.)                 </td>
              </tr>
              <tr>
                <td>
w                </td>
                <td>
Use this mode to create an archive file and add files to the archive file. <br/>If <em>file</em> does not exist, it will be created. <br/>If <em>file</em> exists and the <em>overwrite</em> option is <var>true</var>, the existing file will be overwritten with empty archive. <br/>If <em>file</em> exists and the <em>overwrite</em> option is <var>false</var>, <em>onerror</em> callback will be invoked (<em>InvalidModificationError</em>). <br/>When an archive file is opened in this mode, <em>getEntries()</em>, <em>getEntryByName()</em>, and <em>extractAll()</em> are not available. (<em>IOError</em> will be thrown.)
                </td>
              </tr>
              <tr>
                <td>
rw                </td>
                <td>
Use this mode for archive zipping/unzipping. <br/>If <em>file</em> does not exist, it will be created. <br/>If <em>file</em> exists and the <em>overwrite</em> option is <var>true</var>, the existing file will be overwritten with an empty archive. <br/>If <em>file</em> exists and the <em>overwrite</em> option is <var>false</var>, the existing contents are preserved.
Both adding and extracting will be available. <br/>                </td>
              </tr>
              <tr>
                <td>
a                </td>
                <td>
Use this mode to add new files to an archive file. <br/>If <em>file</em> does not exist, it will be created. <br/>If <em>file</em> exists, then the previous contents of the archive file are preserved and new files can be added to the archive file.
In this mode, <em>getEntries()</em>, <em>getEntryByName()</em>, and <em>extractAll()</em> are not available. (<em>IOError</em> will be thrown.)
                </td>
              </tr>
            </table>
           
 *
 * @param {FileReference} file
 * @param {FileMode} mode
 * @param {ArchiveFileSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {ArchiveFileOptions} options
 * @type Number
 * @memberOf ArchiveManager
 * @returns {Number}
 */
ArchiveManager.prototype.open = function(file, mode, onsuccess, onerror, options){ var ret = new Number(); return ret; };

/**
 * Cancels an operation with the given identifier.
 *
 * @param {Number} operationIdentifier
 * @type void
 * @memberOf ArchiveManager
 * @returns {void}
 */
ArchiveManager.prototype.abort = function(operationIdentifier){ return; };

/**
 * Path identifying the member file of ArchiveFile. This is a full path with the directory and base name of the entry.
 *
 * @type String
 */
ArchiveFileEntry.prototype.name = new String();

/**
 * Original size of the member file [bytes].
 * <p>
If the ArchiveFileEntry member is a folder, the attribute value will be the sum of sizes of all files in this directory.
            </p>
 *
 * @type Number
 */
ArchiveFileEntry.prototype.size = new Number();

/**
 * Amount of storage space used by the member file, which may be compressed, in ArchiveFile [bytes].
 * <p>
If ArchiveFileEntry member is a folder, the attribute will be sum of the sizes of all files in this directory.
            </p>
 * <p>
Until a new entry is added to the archive, the compressedSize is <var>null</var>            </p>
 *
 * @type Number
 */
ArchiveFileEntry.prototype.compressedSize = new Number();

/**
 * Date and time stored with the member file. This is usually the modification date of the file.
 *
 * @type Date
 */
ArchiveFileEntry.prototype.modified = new Date();

/**
 * Extracts ArchiveFileEntry to the given location.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError: If the given <em>destinationDirectory</em> does not exist              </li>
              <li>
InvalidModificationError: If the file already exists and overwriting is not allowed              </li>
              <li>
IOError: If destinationDirectory can not be written to              </li>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
           
 *
 * @param {FileReference} destinationDirectory
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {ArchiveFileProgressCallback} onprogress
 * @param {Boolean} stripName
 * @param {Boolean} overwrite
 * @type Number
 * @memberOf ArchiveFileEntry
 * @returns {Number}
 */
ArchiveFileEntry.prototype.extract = function(destinationDirectory, onsuccess, onerror, onprogress, stripName, overwrite){ var ret = new Number(); return ret; };

/**
 * Called to signal compressing or extracting operation progress.
 *
 * @param {Number} operationIdentifier
 * @param {Number} value
 * @param {String} filename
 * @type void
 * @memberOf ArchiveFileProgressCallback
 * @returns {void}
 */
ArchiveFileProgressCallback.prototype.onprogress = function(operationIdentifier, value, filename){ return; };

/**
 * The Archive API provides functions to create and manage archive files. You can extract files, add a file to an archive file, and so on.
 * <p>
For more information about how to use Archive API, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/io_guide/archive.htm">Archive Guide</a>.
        </p>
 *
 * @type ArchiveManager
 */
Tizen.prototype.archive = new ArchiveManager();

/**
 * The BadgeManagerObject interface defines what is instantiated in the tizen object.
          <p>
There is a tizen.badge object that allows accessing the functionality of the Badge API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {BadgeManagerObject}
 */
function BadgeManagerObject() {};
BadgeManagerObject.prototype = new Object();

/**
 * The BadgeChangeCallback interface specifies a set of methods that are invoked every time a badge number change occurs.
 *
 * @super Object
 * @constructor
 * @return {BadgeChangeCallback}
 */
function BadgeChangeCallback() {};
BadgeChangeCallback.prototype = new Object();

/**
 * The BadgeManager interface manages Badge functionality. It provides functions for creating and updating a badge, and registering for badge change events.
 *
 * @super Object
 * @constructor
 * @return {BadgeManager}
 */
function BadgeManager() {};
BadgeManager.prototype = new Object();

/**
 * The Badge API provides Badge management functionality. It provides functions for creating and updating a badge. The application with new unread information has a number in the upper right hand corner of the app icon. This number is called a badge. For example, when a new message is received the badge count appears on the app icon. The badge remains until the message is read by the user.
 * <p>
For more information about how to use Badge API, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/ui_guide/badge.htm">Badge Guide</a>.
        </p>
 *
 * @type BadgeManager
 */
BadgeManagerObject.prototype.badge = new BadgeManager();

/**
 * Called when the badge number of a specified application is updated.
 *
 * @param {ApplicationId} appId
 * @param {Number} count
 * @type void
 * @memberOf BadgeChangeCallback
 * @returns {void}
 */
BadgeChangeCallback.prototype.onsuccess = function(appId, count){ return; };

/**
 * Maximum length of a badge number.
 *
 * @type Number
 */
BadgeManager.prototype.maxBadgeCount = new Number();

/**
 * Sets the badge count for the designated application. Only applications with the same author signature can have their badge count modified.
 *
 * @param {ApplicationId} appId
 * @param {Number} count
 * @type void
 * @memberOf BadgeManager
 * @returns {void}
 */
BadgeManager.prototype.setBadgeCount = function(appId, count){ return; };

/**
 * Gets the badge count for the designated application.
 *
 * @param {ApplicationId} appId
 * @type Number
 * @memberOf BadgeManager
 * @returns {Number}
 */
BadgeManager.prototype.getBadgeCount = function(appId){ var ret = new Number(); return ret; };

/**
 * Adds a listener to receive a notification when the badge number for the designated application changes.
 *
 * @param {array} appIdList
 * @param {BadgeChangeCallback} successCallback
 * @type void
 * @memberOf BadgeManager
 * @returns {void}
 */
BadgeManager.prototype.addChangeListener = function(appIdList, successCallback){ return; };

/**
 * Unsubscribes from receiving notifications for badge number changes.
 *
 * @param {array} appIdList
 * @type void
 * @memberOf BadgeManager
 * @returns {void}
 */
BadgeManager.prototype.removeChangeListener = function(appIdList){ return; };

/**
 * The Badge API provides Badge management functionality. It provides functions for creating and updating a badge. The application with new unread information has a number in the upper right hand corner of the app icon. This number is called a badge. For example, when a new message is received the badge count appears on the app icon. The badge remains until the message is read by the user.
 * <p>
For more information about how to use Badge API, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/ui_guide/badge.htm">Badge Guide</a>.
        </p>
 *
 * @type BadgeManager
 */
Tizen.prototype.badge = new BadgeManager();

/**
 * The BluetoothHealthChannel interface represents the Bluetooth health channel.
 *
 * @super Object
 * @constructor
 * @return {BluetoothHealthChannel}
 */
function BluetoothHealthChannel() {};
BluetoothHealthChannel.prototype = new Object();

/**
 * The BluetoothServiceSuccessCallback interface implements the success callback for .
 *
 * @super Object
 * @constructor
 * @return {BluetoothServiceSuccessCallback}
 */
function BluetoothServiceSuccessCallback() {};
BluetoothServiceSuccessCallback.prototype = new Object();

/**
 * The BluetoothDeviceArraySuccessCallback interface that defines the success callback for .
 *
 * @super Object
 * @constructor
 * @return {BluetoothDeviceArraySuccessCallback}
 */
function BluetoothDeviceArraySuccessCallback() {};
BluetoothDeviceArraySuccessCallback.prototype = new Object();

/**
 * The BluetoothClass interface represents Bluetooth Class of Device/Service(CoD).
          <p>
Bluetooth device class describes the characteristics and capabilities of a device.
          </p>
          <p>
Bluetooth CoD is a 24 bit integer created by the union of three components:
          </p>
          <ul>
            <li>
Exactly one <b>Major Device Class</b>(bits 8-12 of CoD) - This is the highest level of granularity for defining a Bluetooth Device.            </li>
            <li>
Exactly one <b>Minor Device Class</b>(bits 2-7 of CoD) - This is to be interpreted only in the context of the Major Device Class. Thus, the meaning of these bits may change, depending on the value of 'Major Device Class'.             </li>
            <li>
Zero or more <b>Major Service Classes</b>(bits 13-23) - Represents the services supported by the device.            </li>
          </ul>
          <p>
The Major and Minor classes are intended to define a general family of devices with which any particular implementation wishes to be associated.
No assumptions should be made about specific functionality or characteristics of any application, based solely on the assignment of a Major or minor device class.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {BluetoothClass}
 */
function BluetoothClass() {};
BluetoothClass.prototype = new Object();

/**
 * The BluetoothAdapterChangeCallback interface specifies a set of methods to be invoked when the changes of Bluetooth adapter occur.
 *
 * @super Object
 * @constructor
 * @return {BluetoothAdapterChangeCallback}
 */
function BluetoothAdapterChangeCallback() {};
BluetoothAdapterChangeCallback.prototype = new Object();

/**
 * The BluetoothLEAdapter interface provides access to control the device's Bluetooth Low Energy adapter.
          <p>
This interface offers methods to control local Bluetooth Low Energy behavior, such as:
          </p>
          <ul>
            <li>
Scanning and Advertising for remote devices            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {BluetoothLEAdapter}
 */
function BluetoothLEAdapter() {};
BluetoothLEAdapter.prototype = new Object();

/**
 * Bluetooth Low Energy Descriptor.
 *
 * @super Object
 * @constructor
 * @return {BluetoothGATTDescriptor}
 */
function BluetoothGATTDescriptor() {};
BluetoothGATTDescriptor.prototype = new Object();

/**
 * The BluetoothLEAdvertiseData interface is an advertise or scan response data container for Bluetooth advertising.
          <p>
The BluetoothLEAdvertiseData container for Bluetooth LE advertising.
This represents the data to be advertised as well as the scan response data for active scans.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {BluetoothLEAdvertiseData}
 */
function BluetoothLEAdvertiseData() {};
BluetoothLEAdvertiseData.prototype = new Object();

/**
 * Bluetooth Low Energy Service. The service can be retrieved with BluetoothLEDevice.getService().
 *
 * @super Object
 * @constructor
 * @return {BluetoothGATTService}
 */
function BluetoothGATTService() {};
BluetoothGATTService.prototype = new Object();

/**
 * Bluetooth LE connecting process interface that defines callbacks for getting notified about changes of connect to a specific LE based service on a remote Bluetooth LE device.
 *
 * @super Object
 * @constructor
 * @return {BluetoothLEConnectChangeCallback}
 */
function BluetoothLEConnectChangeCallback() {};
BluetoothLEConnectChangeCallback.prototype = new Object();

/**
 * The ReadValueSuccessCallback interface implements the callback for and methods.
 *
 * @super Object
 * @constructor
 * @return {ReadValueSuccessCallback}
 */
function ReadValueSuccessCallback() {};
ReadValueSuccessCallback.prototype = new Object();

/**
 * The BluetoothSocket interface represents the Bluetooth socket.
          <p>
The socket object is created by <em>BluetoothDevice.connectToServiceByUUID()</em> or <em>BluetoothAdapter.registerRFCOMMServiceByUUID()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {BluetoothSocket}
 */
function BluetoothSocket() {};
BluetoothSocket.prototype = new Object();

/**
 * The BluetoothDiscoverDevicesSuccessCallback interface that defines the success callback for .
 *
 * @super Object
 * @constructor
 * @return {BluetoothDiscoverDevicesSuccessCallback}
 */
function BluetoothDiscoverDevicesSuccessCallback() {};
BluetoothDiscoverDevicesSuccessCallback.prototype = new Object();

/**
 * The BluetoothManagerObject interface defines what is instantiated by the object from the Tizen platform.
          <p>
The <em>tizen.bluetooth</em> object allows access to the Bluetooth API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {BluetoothManagerObject}
 */
function BluetoothManagerObject() {};
BluetoothManagerObject.prototype = new Object();

/**
 * The BluetoothManager interface provides access to the object.
 *
 * @super Object
 * @constructor
 * @return {BluetoothManager}
 */
function BluetoothManager() {};
BluetoothManager.prototype = new Object();

/**
 * Bluetooth scanning process interface that defines the success callback for
 *
 * @super Object
 * @constructor
 * @return {BluetoothLEScanCallback}
 */
function BluetoothLEScanCallback() {};
BluetoothLEScanCallback.prototype = new Object();

/**
 * The BluetoothClassDeviceMajor interface holds the identifiers for major device classes of Bluetooth CoD.
 *
 * @super Object
 * @constructor
 * @return {BluetoothClassDeviceMajor}
 */
function BluetoothClassDeviceMajor() {};
BluetoothClassDeviceMajor.prototype = new Object();

/**
 * The BluetoothHealthChannelChangeCallback interface specifies a set of methods to be invoked when the changes of heath channel occur.
 *
 * @super Object
 * @constructor
 * @return {BluetoothHealthChannelChangeCallback}
 */
function BluetoothHealthChannelChangeCallback() {};
BluetoothHealthChannelChangeCallback.prototype = new Object();

/**
 * The BluetoothLEDevice interface represents a remote Bluetooth LE device.
          <p>
A <em>BluetoothLEDevice</em> object can be retrieved by using one of the following APIs:
          </p>
          <ul>
            <li>
 BluetoothLEAdapter.startScan()            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {BluetoothLEDevice}
 */
function BluetoothLEDevice() {};
BluetoothLEDevice.prototype = new Object();

/**
 * The BluetoothAdapter interface provides access to control the device's Bluetooth adapter.
          <p>
This interface offers methods to control local Bluetooth behavior, such as:
          </p>
          <ul>
            <li>
Turning on/off Bluetooth radio            </li>
            <li>
Changing device visibility            </li>
            <li>
Scanning for remote devices            </li>
            <li>
Accessing known devices            </li>
            <li>
Registering a service in the device service database            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {BluetoothAdapter}
 */
function BluetoothAdapter() {};
BluetoothAdapter.prototype = new Object();

/**
 * The BluetoothHealthApplicationSuccessCallback interface that defines the success method for .
 *
 * @super Object
 * @constructor
 * @return {BluetoothHealthApplicationSuccessCallback}
 */
function BluetoothHealthApplicationSuccessCallback() {};
BluetoothHealthApplicationSuccessCallback.prototype = new Object();

/**
 * The BluetoothServiceHandler interface provides methods to handle Bluetooth service.
 *
 * @super Object
 * @constructor
 * @return {BluetoothServiceHandler}
 */
function BluetoothServiceHandler() {};
BluetoothServiceHandler.prototype = new Object();

/**
 * Bluetooth advertising process interface that defines the success callback for
 *
 * @super Object
 * @constructor
 * @return {BluetoothLEAdvertiseCallback}
 */
function BluetoothLEAdvertiseCallback() {};
BluetoothLEAdvertiseCallback.prototype = new Object();

/**
 * The BluetoothClassDeviceService interface holds identifiers for the major service classes of Bluetooth CoD.
 *
 * @super Object
 * @constructor
 * @return {BluetoothClassDeviceService}
 */
function BluetoothClassDeviceService() {};
BluetoothClassDeviceService.prototype = new Object();

/**
 * The BluetoothDevice interface represents a remote Bluetooth device.
          <p>
A <em>BluetoothDevice</em> object can be retrieved using one of the following APIs:
          </p>
          <ul>
            <li>
 BluetoothAdapter.getDevice()            </li>
            <li>
 BluetoothAdapter.getKnownDevices()             </li>
            <li>
 BluetoothAdapter.discoverDevices()             </li>
            <li>
 BluetoothAdapter.createBonding()             </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {BluetoothDevice}
 */
function BluetoothDevice() {};
BluetoothDevice.prototype = new Object();

/**
 * A characteristic provided by Bluetooth Low Energy service.
 *
 * @super Object
 * @constructor
 * @return {BluetoothGATTCharacteristic}
 */
function BluetoothGATTCharacteristic() {};
BluetoothGATTCharacteristic.prototype = new Object();

/**
 * The BluetoothHealthApplication interface represents the Bluetooth health application.
 *
 * @super Object
 * @constructor
 * @return {BluetoothHealthApplication}
 */
function BluetoothHealthApplication() {};
BluetoothHealthApplication.prototype = new Object();

/**
 * The BluetoothDeviceSuccessCallback interface implements the success callback and .
 *
 * @super Object
 * @constructor
 * @return {BluetoothDeviceSuccessCallback}
 */
function BluetoothDeviceSuccessCallback() {};
BluetoothDeviceSuccessCallback.prototype = new Object();

/**
 * The BluetoothProfileHandler interface represents the Bluetooth profile handler.
 *
 * @super Object
 * @constructor
 * @return {BluetoothProfileHandler}
 */
function BluetoothProfileHandler() {};
BluetoothProfileHandler.prototype = new Object();

/**
 * The BluetoothLEServiceData interface is a service specific data container of Bluetooth LE device.
 *
 * @super Object
 * @constructor
 * @return {BluetoothLEServiceData}
 */
function BluetoothLEServiceData() {};
BluetoothLEServiceData.prototype = new Object();

/**
 * This interface represents the handler of Bluetooth health device profile. The BluetoothHealthProfileHandler object is created by .
 *
 * @super Object
 * @constructor
 * @return {BluetoothHealthProfileHandler}
 */
function BluetoothHealthProfileHandler() {};
BluetoothHealthProfileHandler.prototype = new BluetoothProfileHandler();

/**
 * The BluetoothLEManufacturerData interface is a manufacturer specific data container for an advertise or scan response data.
 *
 * @super Object
 * @constructor
 * @return {BluetoothLEManufacturerData}
 */
function BluetoothLEManufacturerData() {};
BluetoothLEManufacturerData.prototype = new Object();

/**
 * The BluetoothClassDeviceMinor interface holds the identifiers for minor device classes of Bluetooth CoD.
 *
 * @super Object
 * @constructor
 * @return {BluetoothClassDeviceMinor}
 */
function BluetoothClassDeviceMinor() {};
BluetoothClassDeviceMinor.prototype = new Object();

/**
 * The BluetoothHealthChannelSuccessCallback interface that defines the success method for and the event callback for .
 *
 * @super Object
 * @constructor
 * @return {BluetoothHealthChannelSuccessCallback}
 */
function BluetoothHealthChannelSuccessCallback() {};
BluetoothHealthChannelSuccessCallback.prototype = new Object();

/**
 * The BluetoothSocketSuccessCallback interface that defines the success method for .
 *
 * @super Object
 * @constructor
 * @return {BluetoothSocketSuccessCallback}
 */
function BluetoothSocketSuccessCallback() {};
BluetoothSocketSuccessCallback.prototype = new Object();

/**
 * The remote device to which this channel is connected. See .
 *
 * @type BluetoothDevice
 */
BluetoothHealthChannel.prototype.peer = new BluetoothDevice();

/**
 * The type of this channel. See .
 *
 * @type BluetoothHealthChannelType
 */
BluetoothHealthChannel.prototype.channelType = new BluetoothHealthChannelType();

/**
 * The health application which is used to communicate with the remote device. See .
 *
 * @type BluetoothHealthApplication
 */
BluetoothHealthChannel.prototype.application = new BluetoothHealthApplication();

/**
 * The flag indicating whether any remote device is connected.
 *
 * @type Boolean
 */
BluetoothHealthChannel.prototype.isConnected = new Boolean();

/**
 * Closes the connected channel. is changed to and is invoked when this channel is closed successfully.
 *
 * @type void
 * @memberOf BluetoothHealthChannel
 * @returns {void}
 */
BluetoothHealthChannel.prototype.close = function(){ return; };

/**
 * Sends data and returns the number of bytes actually written.
 *
 * @param {array} data
 * @type Number
 * @memberOf BluetoothHealthChannel
 * @returns {Number}
 */
BluetoothHealthChannel.prototype.sendData = function(data){ var ret = new Number(); return ret; };

/**
 * Sets the listener to receive notifications.
 *
 * @param {BluetoothHealthChannelChangeCallback} listener
 * @type void
 * @memberOf BluetoothHealthChannel
 * @returns {void}
 */
BluetoothHealthChannel.prototype.setListener = function(listener){ return; };

/**
 * Unsets the listener. This stops receiving notifications.
 *
 * @type void
 * @memberOf BluetoothHealthChannel
 * @returns {void}
 */
BluetoothHealthChannel.prototype.unsetListener = function(){ return; };

/**
 * Called when registering a service with the local device is successful.
 *
 * @param {BluetoothServiceHandler} handler
 * @type void
 * @memberOf BluetoothServiceSuccessCallback
 * @returns {void}
 */
BluetoothServiceSuccessCallback.prototype.onsuccess = function(handler){ return; };

/**
 * Called when device information is ready.
 *
 * @param {array} devices
 * @type void
 * @memberOf BluetoothDeviceArraySuccessCallback
 * @returns {void}
 */
BluetoothDeviceArraySuccessCallback.prototype.onsuccess = function(devices){ return; };

/**
 * The major device class.
 * <p>
The <em>BluetoothClassDeviceMajor</em> interface contains the list of known values.
            </p>
 *
 * @type octet
 */
BluetoothClass.prototype.major = new octet();

/**
 * The minor device class.
 * <p>
The <em>BluetoothClassDeviceMinor</em> interface contains the list of known values.
            </p>
 *
 * @type octet
 */
BluetoothClass.prototype.minor = new octet();

/**
 * The services provided by this device and it refers to the interface for the list of possible values.
 *
 * @type array
 */
BluetoothClass.prototype.services = new array();

/**
 * Checks whether the given service exists in the .
 *
 * @param {Number} service
 * @type Boolean
 * @memberOf BluetoothClass
 * @returns {Boolean}
 */
BluetoothClass.prototype.hasService = function(service){ var ret = new Boolean(); return ret; };

/**
 * Called when the power state is changed.
 *
 * @param {Boolean} powered
 * @type void
 * @memberOf BluetoothAdapterChangeCallback
 * @returns {void}
 */
BluetoothAdapterChangeCallback.prototype.onstatechanged = function(powered){ return; };

/**
 * Called when the name is changed.
 *
 * @param {String} name
 * @type void
 * @memberOf BluetoothAdapterChangeCallback
 * @returns {void}
 */
BluetoothAdapterChangeCallback.prototype.onnamechanged = function(name){ return; };

/**
 * Called when the visibility is changed.
 *
 * @param {Boolean} visible
 * @type void
 * @memberOf BluetoothAdapterChangeCallback
 * @returns {void}
 */
BluetoothAdapterChangeCallback.prototype.onvisibilitychanged = function(visible){ return; };

/**
 * Starts scanning for Low Energy advertisement.
            <p>
The scanning process can be canceled anytime, by calling the <em>stopScan() </em> method in the <em>BluetoothLEAdapter</em> interface.
            </p>
            <p>
The <em>ErrorCallback</em> will be launched in the following situations:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {BluetoothLEScanCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothLEAdapter
 * @returns {void}
 */
BluetoothLEAdapter.prototype.startScan = function(successCallback, errorCallback){ return; };

/**
 * Stops scanning for Low Energy advertisement.
 *
 * @type void
 * @memberOf BluetoothLEAdapter
 * @returns {void}
 */
BluetoothLEAdapter.prototype.stopScan = function(){ return; };

/**
 * Starts advertising for Low Energy Devices.
            <p>
A advertising process can be canceled anytime, by calling <em>stopAdvertise() </em>on the <em>BluetoothLEAdapter</em>.
            </p>
            <p>
The <em>ErrorCallback</em> will be launched in the following situations:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {BluetoothLEAdvertiseData} advertiseData
 * @param {BluetoothAdvertisePacketType} packetType
 * @param {BluetoothLEAdvertiseCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {BluetoothAdvertisingMode} mode
 * @param {Boolean} connectable
 * @type void
 * @memberOf BluetoothLEAdapter
 * @returns {void}
 */
BluetoothLEAdapter.prototype.startAdvertise = function(advertiseData, packetType, successCallback, errorCallback, mode, connectable){ return; };

/**
 * Stops advertising for Low Energy Devices.
 *
 * @type void
 * @memberOf BluetoothLEAdapter
 * @returns {void}
 */
BluetoothLEAdapter.prototype.stopAdvertise = function(){ return; };

/**
 * Reads descriptor value from remote device. Updates descriptor value attribute.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {ReadValueSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothGATTDescriptor
 * @returns {void}
 */
BluetoothGATTDescriptor.prototype.readValue = function(successCallback, errorCallback){ return; };

/**
 * Writes the descriptor value to the remote device.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {array} value
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothGATTDescriptor
 * @returns {void}
 */
BluetoothGATTDescriptor.prototype.writeValue = function(value, successCallback, errorCallback){ return; };

/**
 * The flag indicating whether the device name should be included in advertise or scan response data. If attribute is set to null, The default value is set to a false.
 *
 * @type Boolean
 */
BluetoothLEAdvertiseData.prototype.includeName = new Boolean();

/**
 * The service UUID for advertise or scan response data.
 *
 * @type array
 */
BluetoothLEAdvertiseData.prototype.uuids = new array();

/**
 * The service solicitation UUID for advertise or scan response data.
 *
 * @type array
 */
BluetoothLEAdvertiseData.prototype.solicitationuuids = new array();

/**
 * The external appearance of this device for advertise or scan response data.
 * <p>
See the <a href="https://developer.bluetooth.org/gatt/characteristics/Pages/CharacteristicViewer.aspx?u=org.bluetooth.characteristic.gap.appearance.xml">list of appearance codes</a> for sample values.
            </p>
 *
 * @type Number
 */
BluetoothLEAdvertiseData.prototype.appearance = new Number();

/**
 * The transmission power level should be included in advertise or scan response data. If attribute is set to null, The default value is set to a false.
 *
 * @type Boolean
 */
BluetoothLEAdvertiseData.prototype.includeTxPowerLevel = new Boolean();

/**
 * The service data for advertise or scan response data.
 *
 * @type BluetoothLEServiceData
 */
BluetoothLEAdvertiseData.prototype.serviceData = new BluetoothLEServiceData();

/**
 * The manufacturer specific data for advertise or scan response data.
 *
 * @type BluetoothLEManufacturerData
 */
BluetoothLEAdvertiseData.prototype.manufacturerData = new BluetoothLEManufacturerData();

/**
 * UUID of the service.
 *
 * @type BluetoothUUID
 */
BluetoothGATTService.prototype.uuid = new BluetoothUUID();

/**
 * A list of services included in this service.
 *
 * @type array
 */
BluetoothGATTService.prototype.services = new array();

/**
 * A list of characteristics in this service.
 *
 * @type array
 */
BluetoothGATTService.prototype.characteristics = new array();

/**
 * Called at the beginning of connect to a specific LE based service on a remote Bluetooth LE device.
 *
 * @param {BluetoothLEDevice} device
 * @type void
 * @memberOf BluetoothLEConnectChangeCallback
 * @returns {void}
 */
BluetoothLEConnectChangeCallback.prototype.onconnected = function(device){ return; };

/**
 * Called at the beginning of disconnect to a specific LE based service on a remote Bluetooth LE device.
 *
 * @param {BluetoothLEDevice} device
 * @type void
 * @memberOf BluetoothLEConnectChangeCallback
 * @returns {void}
 */
BluetoothLEConnectChangeCallback.prototype.ondisconnected = function(device){ return; };

/**
 * Called when a characteristic value has been read.
 *
 * @param {array} value
 * @type void
 * @memberOf ReadValueSuccessCallback
 * @returns {void}
 */
ReadValueSuccessCallback.prototype.onread = function(value){ return; };

/**
 * The service UUID to which this socket is connected.
 *
 * @type BluetoothUUID
 */
BluetoothSocket.prototype.uuid = new BluetoothUUID();

/**
 * The socket state.
 *
 * @type BluetoothSocketState
 */
BluetoothSocket.prototype.state = new BluetoothSocketState();

/**
 * The peer device to which this socket is connected.
 *
 * @type BluetoothDevice
 */
BluetoothSocket.prototype.peer = new BluetoothDevice();

/**
 * Called when an incoming message is received successfully from the peer. By default, this attribute is set to null.
 *
 * @type SuccessCallback
 */
BluetoothSocket.prototype.onmessage = new SuccessCallback();

/**
 * Called when the socket is closed successfully. By default, this attribute is set to null.
 *
 * @type SuccessCallback
 */
BluetoothSocket.prototype.onclose = new SuccessCallback();

/**
 * Writes data as a sequence of bytes onto the socket and returns the number of bytes actually written.
 *
 * @param {array} data
 * @type Number
 * @memberOf BluetoothSocket
 * @returns {Number}
 */
BluetoothSocket.prototype.writeData = function(data){ var ret = new Number(); return ret; };

/**
 * Reads data from the socket.
            <p>
This method should be called only in the <em>BluetoothSocket.onmessage</em> handler, that is, when data is ready on the socket.
            </p>
           
 *
 * @type array
 * @memberOf BluetoothSocket
 * @returns {array}
 */
BluetoothSocket.prototype.readData = function(){ var ret = new array(); return ret; };

/**
 * Closes the socket.
            <p>
<b>BluetoothSocket.state</b> changes to <var>CLOSED</var>, and <em>BluetoothSocket.onclose()</em> is invoked on success.
            </p>
           
 *
 * @type void
 * @memberOf BluetoothSocket
 * @returns {void}
 */
BluetoothSocket.prototype.close = function(){ return; };

/**
 * Called at the beginning of a device discovery process for finding the nearby Bluetooth device.
 *
 * @type void
 * @memberOf BluetoothDiscoverDevicesSuccessCallback
 * @returns {void}
 */
BluetoothDiscoverDevicesSuccessCallback.prototype.onstarted = function(){ return; };

/**
 * Called when a new device is discovered in the process of inquiry/discovery.
 *
 * @param {BluetoothDevice} device
 * @type void
 * @memberOf BluetoothDiscoverDevicesSuccessCallback
 * @returns {void}
 */
BluetoothDiscoverDevicesSuccessCallback.prototype.ondevicefound = function(device){ return; };

/**
 * Called when a device is lost from proximity. After that, this device is no longer visible.
 *
 * @param {BluetoothAddress} address
 * @type void
 * @memberOf BluetoothDiscoverDevicesSuccessCallback
 * @returns {void}
 */
BluetoothDiscoverDevicesSuccessCallback.prototype.ondevicedisappeared = function(address){ return; };

/**
 * Called when the device discovery process has finished.
 *
 * @param {array} foundDevices
 * @type void
 * @memberOf BluetoothDiscoverDevicesSuccessCallback
 * @returns {void}
 */
BluetoothDiscoverDevicesSuccessCallback.prototype.onfinished = function(foundDevices){ return; };

/**
 * The Bluetooth API defines interfaces and methods to manage Bluetooth.
 * <p>
The following Bluetooth functionalities are provided:
        </p>
 * <ul>
 * <li>Controls local Bluetooth device, that is, turn Bluetooth on/off, etc.
 * <li>Sets visibility
 * <li>Discovers nearby Bluetooth devices (Device discovery, including Bluetooth LE devices)
 * <li>Gets bonded devices information
 * <li>Controls bonding
 * <li>Connects to a service on a remote device and exchanges data
 * <li>Registers a service (RFCOMM) on a local device, which can be consumed by remote devices to exchange data
 * <li>Advertise for remote devices (including Bluetooth LE devices)
 * <li>Act as a GATT client (Generic Attribute Profile client)
 * </ul>
 * <p>
For more information on the Bluetooth features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/communication_guide/bluetooth.htm">Bluetooth Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/network.bluetooth
 * @type BluetoothManager
 */
BluetoothManagerObject.prototype.bluetooth = new BluetoothManager();

/**
 * The major device class identifier of Bluetooth class of device (CoD).
 *
 * @type BluetoothClassDeviceMajor
 */
BluetoothManager.prototype.deviceMajor = new BluetoothClassDeviceMajor();

/**
 * The minor device class identifier of Bluetooth class of device (CoD).
 *
 * @type BluetoothClassDeviceMinor
 */
BluetoothManager.prototype.deviceMinor = new BluetoothClassDeviceMinor();

/**
 * The major service class identifier of Bluetooth class of device (CoD).
 *
 * @type BluetoothClassDeviceService
 */
BluetoothManager.prototype.deviceService = new BluetoothClassDeviceService();

/**
 * Gets the default local Bluetooth adapter.
 *
 * @type BluetoothAdapter
 * @memberOf BluetoothManager
 * @returns {BluetoothAdapter}
 */
BluetoothManager.prototype.getDefaultAdapter = function(){ var ret = new BluetoothAdapter(); return ret; };

/**
 * Gets the default Low Energy Bluetooth adapter.
 *
 * @type BluetoothLEAdapter
 * @memberOf BluetoothManager
 * @returns {BluetoothLEAdapter}
 */
BluetoothManager.prototype.getLEAdapter = function(){ var ret = new BluetoothLEAdapter(); return ret; };

/**
 * Called when a new device is successfully discovered in the process of scanning.
 *
 * @param {BluetoothLEDevice} device
 * @type void
 * @memberOf BluetoothLEScanCallback
 * @returns {void}
 */
BluetoothLEScanCallback.prototype.onsuccess = function(device){ return; };

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.MISC = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.COMPUTER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.PHONE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.NETWORK = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.AUDIO_VIDEO = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.PERIPHERAL = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.IMAGING = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.WEARABLE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.TOY = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.HEALTH = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMajor.UNCATEGORIZED = new Number();

/**
 * Called when the message is received.
 *
 * @param {array} data
 * @type void
 * @memberOf BluetoothHealthChannelChangeCallback
 * @returns {void}
 */
BluetoothHealthChannelChangeCallback.prototype.onmessage = function(data){ return; };

/**
 * Called when the health channel is closed.
 *
 * @type void
 * @memberOf BluetoothHealthChannelChangeCallback
 * @returns {void}
 */
BluetoothHealthChannelChangeCallback.prototype.onclose = function(){ return; };

/**
 * The address of the Bluetooth LE device from the scan result information.
 *
 * @type BluetoothAddress
 */
BluetoothLEDevice.prototype.address = new BluetoothAddress();

/**
 * The name of the Bluetooth LE device from the scan result information.
 *
 * @type String
 */
BluetoothLEDevice.prototype.name = new String();

/**
 * The transmission power level of the Bluetooth LE device from the scan result information.
 *
 * @type Number
 */
BluetoothLEDevice.prototype.txpowerlevel = new Number();

/**
 * The appearance of the Bluetooth LE device from the scan result information.
 *
 * @type Number
 */
BluetoothLEDevice.prototype.appearance = new Number();

/**
 * The list of service UUIDs from scan result.
 *
 * @type array
 */
BluetoothLEDevice.prototype.uuids = new array();

/**
 * The list of service solicitation UUIDs available on Bluetooth LE device from the scan result information.
 *
 * @type array
 */
BluetoothLEDevice.prototype.solicitationuuids = new array();

/**
 * The list of service data available on Bluetooth LE device from the scan result information.
 *
 * @type array
 */
BluetoothLEDevice.prototype.serviceData = new array();

/**
 * The manufacturer data from the scan result information.
 *
 * @type BluetoothLEManufacturerData
 */
BluetoothLEDevice.prototype.manufacturerData = new BluetoothLEManufacturerData();

/**
 * The received signal strength indicator in dBm (decibel-milliwatts) units.
 * <p>
The signal strength depends on distance (between the device and the beacon) and broadcasting power value.
            </p>
 *
 * @type Number
 */
BluetoothLEDevice.prototype.rssi = new Number();

/**
 * Establishes Low Energy connection to the device.
            <p>
Connection is required to <em>readValue()</em> and <em>writeValue()</em> from the remote device.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothLEDevice
 * @returns {void}
 */
BluetoothLEDevice.prototype.connect = function(successCallback, errorCallback){ return; };

/**
 * Disconnects from the device.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothLEDevice
 * @returns {void}
 */
BluetoothLEDevice.prototype.disconnect = function(successCallback, errorCallback){ return; };

/**
 * Retrieves a service from the device for the given UUID.
 *
 * @param {BluetoothUUID} uuid
 * @type BluetoothGATTService
 * @memberOf BluetoothLEDevice
 * @returns {BluetoothGATTService}
 */
BluetoothLEDevice.prototype.getService = function(uuid){ var ret = new BluetoothGATTService(); return ret; };

/**
 * Retrieves list of all service UUIDs from connected GATT server.
 *
 * @type array
 * @memberOf BluetoothLEDevice
 * @returns {array}
 */
BluetoothLEDevice.prototype.getServiceAllUuids = function(){ var ret = new array(); return ret; };

/**
 * Registers a listener to be called when the device connects or disconnects.
 *
 * @param {BluetoothLEConnectChangeCallback} listener
 * @type Number
 * @memberOf BluetoothLEDevice
 * @returns {Number}
 */
BluetoothLEDevice.prototype.addConnectStateChangeListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Unregisters a Bluetooth device connection listener
 *
 * @param {Number} watchID
 * @type void
 * @memberOf BluetoothLEDevice
 * @returns {void}
 */
BluetoothLEDevice.prototype.removeConnectStateChangeListener = function(watchID){ return; };

/**
 * The readable name of the Bluetooth adapter.
 *
 * @type String
 */
BluetoothAdapter.prototype.name = new String();

/**
 * The unique hardware address of the Bluetooth adapter, also known as the MAC address.
 *
 * @type BluetoothAddress
 */
BluetoothAdapter.prototype.address = new BluetoothAddress();

/**
 * The current state of the Bluetooth adapter.
 * <p>
This attribute holds one of the following 2 values:
            </p>
 * <ul>
 * <li>- If Bluetooth adapter is currently on
 * <li>- If Bluetooth adapter is currently off
 * </ul>
 *
 * @type Boolean
 */
BluetoothAdapter.prototype.powered = new Boolean();

/**
 * The current visibility state of the Bluetooth adapter, that is, whether the local device is discoverable by remote devices.
 *
 * @type Boolean
 */
BluetoothAdapter.prototype.visible = new Boolean();

/**
 * Sets the local Bluetooth adapter name.
            <p>
Sends a request to Bluetooth hardware to change the name of the local Bluetooth adapter to <em>name</em>.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError: If any of the input parameters contain an invalid value.              </li>
              <li>
 ServiceNotAvailableError: If a Bluetooth device is turned off.               </li>
              <li>
 UnknownError: In any other error case.               </li>
              <li>
 NotSupportedError: If a device doesn't allow a Tizen Web application to change the name of the local Bluetooth adapter.               </li>
            </ul>
           
 *
 * @param {String} name
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.setName = function(name, successCallback, errorCallback){ return; };

/**
 * Sets the state of a Bluetooth adapter to on or off by sending a request to Bluetooth hardware to change the power state. For most Bluetooth actions, the Bluetooth adapter must be powered on.
            <p>
The ErrorCallback is launched with these error names:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is busy              </li>
              <li>
 NotSupportedError: If a device does not allow a Tizen Web application to turn on or off the Bluetooth service on a device.
<br/>   Bluetooth must be enabled on the device which the remote Bluetooth devices always work with              </li>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {Boolean} state
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.setPowered = function(state, successCallback, errorCallback){ return; };

/**
 * Sets the listener to receive notifications about changes of Bluetooth adapter.
 *
 * @param {BluetoothAdapterChangeCallback} listener
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.setChangeListener = function(listener){ return; };

/**
 * Unsets the listener, so stop receiving notifications about changes of Bluetooth adapter.
 *
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.unsetChangeListener = function(){ return; };

/**
 * Discovers nearby Bluetooth devices if any, that is, devices within proximity to the local device.
            <p>
This method initiates the device discovery process. Depending on the progress of this process the following methods are invoked:
            </p>
            <ul>
              <li>
<em>BluetoothDiscoverDevicesSuccessCallback.onstarted()</em> - when a discovery process starts successfully.              </li>
              <li>
<em>BluetoothDiscoverDevicesSuccessCallback.ondevicefound() </em>- when any device is found in the process and this method is invoked with the device information. If no device is found, this method will never be invoked.              </li>
              <li>
<em>BluetoothDiscoverDevicesSuccessCallback.ondevicedisappeared()</em> - when a device goes out of proximity and this method is invoked with the address of the device.              </li>
              <li>
<em>BluetoothDiscoverDevicesSuccessCallback.onfinished()</em> - when a discovery process is completed.              </li>
            </ul>
            <p>
A discovery process can be canceled anytime, by calling <em>stopDiscovery() </em>on the <em>BluetoothAdapter</em>.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {BluetoothDiscoverDevicesSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.discoverDevices = function(successCallback, errorCallback){ return; };

/**
 * Stops an active device discovery session.
            <p>
Device discovery is a heavyweight procedure, hence we recommend stopping discovery as soon as the required device is found. This method cancels an active discovery session.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.stopDiscovery = function(successCallback, errorCallback){ return; };

/**
 * Gets all the known devices that have information stored in the local Bluetooth adapter.
            <p>
A known device is one of the following:
            </p>
            <ul>
              <li>
a bonded device              </li>
              <li>
a device found in last inquiry process              </li>
            </ul>
            <p>
On success, it returns the list of currently known devices through <em>BluetoothDeviceArraySuccessCallback</em>.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {BluetoothDeviceArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.getKnownDevices = function(successCallback, errorCallback){ return; };

/**
 * Gets the object for a given device hardware address.
            <p>
This method returns device information stored in the local Bluetooth adapter for the specified device <em>address</em> through
BluetoothDeviceSuccessCallback.
A valid hardware address must be passed, such as "35:F4:59:D1:7A:03".
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 NotFoundError - If there is no device with the given address              </li>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {BluetoothAddress} address
 * @param {BluetoothDeviceSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.getDevice = function(address, successCallback, errorCallback){ return; };

/**
 * Creates a bond with a remote device by initiating the bonding process with peer device, using the given MAC address. The remote device must be bonded with the local device in order to connect to services of the remote device and then exchange data with each other.
            <p>
If the bonding process is successful, the device information is sent in <em>successCallback</em>.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 NotFoundError - If there is no device with the given address              </li>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {BluetoothAddress} address
 * @param {BluetoothDeviceSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.createBonding = function(address, successCallback, errorCallback){ return; };

/**
 * Destroys the bond with a remote device.
            <p>
This method initiates the process of removing the specified <em>address</em> from the list of bonded devices.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 NotFoundError - If there is no device with the given address              </li>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {BluetoothAddress} address
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.destroyBonding = function(address, successCallback, errorCallback){ return; };

/**
 * Registers a service record in the device service record database with the specified , .
            <p>
On success of the service registration, it returns a <em>BluetoothServiceHandler</em> object as the first parameter of <em>successCallback</em>, and listens for client connections.
The service handler can be used to be notified on client connections or to unregister the service.
User interaction is mandatory to connect to a registered service.
            </p>
            <p>
If any client(remote device) connects to this service, then <em>BluetoothServiceHandler.onconnect()</em> is invoked with <em>BluetoothSocket</em> object.
            </p>
            <p>
<em>BluetoothServiceHandler.unregister()</em> can be used to unregister the service record from the device service database and stop listening for client connections.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError - If any of the input parameters contain an invalid value              </li>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {BluetoothUUID} uuid
 * @param {String} name
 * @param {BluetoothServiceSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothAdapter
 * @returns {void}
 */
BluetoothAdapter.prototype.registerRFCOMMServiceByUUID = function(uuid, name, successCallback, errorCallback){ return; };

/**
 * Gets the profile handler for the given type.
 *
 * @param {BluetoothProfileType} profileType
 * @type BluetoothProfileHandler
 * @memberOf BluetoothAdapter
 * @returns {BluetoothProfileHandler}
 */
BluetoothAdapter.prototype.getBluetoothProfileHandler = function(profileType){ var ret = new BluetoothProfileHandler(); return ret; };

/**
 * Called when the application is registered successfully.
 *
 * @param {BluetoothHealthApplication} application
 * @type void
 * @memberOf BluetoothHealthApplicationSuccessCallback
 * @returns {void}
 */
BluetoothHealthApplicationSuccessCallback.prototype.onsuccess = function(application){ return; };

/**
 * The UUID of the service. See .
 *
 * @type BluetoothUUID
 */
BluetoothServiceHandler.prototype.uuid = new BluetoothUUID();

/**
 * The name of the service. See .
 *
 * @type String
 */
BluetoothServiceHandler.prototype.name = new String();

/**
 * The flag indicating whether any remote devices is using this service. See .
 *
 * @type Boolean
 */
BluetoothServiceHandler.prototype.isConnected = new Boolean();

/**
 * Called when a remote device is connected successfully to this service. By default, this attribute is set to null.
 *
 * @type BluetoothSocketSuccessCallback
 */
BluetoothServiceHandler.prototype.onconnect = new BluetoothSocketSuccessCallback();

/**
 * Unregisters a service record from the Bluetooth services record database and stops listening for new connections to this service.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothServiceHandler
 * @returns {void}
 */
BluetoothServiceHandler.prototype.unregister = function(successCallback, errorCallback){ return; };

/**
 * Called when the advertising state is changed.
 *
 * @param {BluetoothAdvertisingState} state
 * @type void
 * @memberOf BluetoothLEAdvertiseCallback
 * @returns {void}
 */
BluetoothLEAdvertiseCallback.prototype.onstate = function(state){ return; };

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.LIMITED_DISCOVERABILITY = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.POSITIONING = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.NETWORKING = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.RENDERING = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.CAPTURING = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.OBJECT_TRANSFER = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.AUDIO = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.TELEPHONY = new Number();

/**
 * 
 *
 * @type Number
 */
BluetoothClassDeviceService.INFORMATION = new Number();

/**
 * The readable name of this remote device.
 *
 * @type String
 */
BluetoothDevice.prototype.name = new String();

/**
 * The hardware address of this remote device.
 *
 * @type BluetoothAddress
 */
BluetoothDevice.prototype.address = new BluetoothAddress();

/**
 * The device class, which represents the type of the device and the services it provides.
 *
 * @type BluetoothClass
 */
BluetoothDevice.prototype.deviceClass = new BluetoothClass();

/**
 * The bond state of this remote device with the local device.
 *
 * @type Boolean
 */
BluetoothDevice.prototype.isBonded = new Boolean();

/**
 * The flag indicating whether the local device recognizes this remote device as a trusted device or not.
 *
 * @type Boolean
 */
BluetoothDevice.prototype.isTrusted = new Boolean();

/**
 * The flag indicating whether the connection state of this remote device with the local device.
 *
 * @type Boolean
 */
BluetoothDevice.prototype.isConnected = new Boolean();

/**
 * The list of 128 bit service UUIDs available on this remote device.
 *
 * @type array
 */
BluetoothDevice.prototype.uuids = new array();

/**
 * Connects to a specified service identified by on this remote device.
            <p>
If opening a connection is successful, then a <em>BluetoothSocket</em> object with open state is sent using <em>successCallback</em>, through which data can be exchanged by both devices.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 NotFoundError - If there is no service with the specified <em>uuid</em>              </li>
              <li>
 InvalidValuesError - If any of the input parameters contain an invalid value              </li>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {BluetoothUUID} uuid
 * @param {BluetoothSocketSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothDevice
 * @returns {void}
 */
BluetoothDevice.prototype.connectToServiceByUUID = function(uuid, successCallback, errorCallback){ return; };

/**
 * A list of descriptors in this characteristic.
 *
 * @type array
 */
BluetoothGATTCharacteristic.prototype.descriptors = new array();

/**
 * Indicates if the characteristic is broadcastable.
 *
 * @type Boolean
 */
BluetoothGATTCharacteristic.prototype.isBroadcast = new Boolean();

/**
 * Indicates if the characteristic has extended properties.
 *
 * @type Boolean
 */
BluetoothGATTCharacteristic.prototype.hasExtendedProperties = new Boolean();

/**
 * Indicates if the characteristic supports notification.
 *
 * @type Boolean
 */
BluetoothGATTCharacteristic.prototype.isNotify = new Boolean();

/**
 * Indicates if the characteristic supports indication.
 *
 * @type Boolean
 */
BluetoothGATTCharacteristic.prototype.isIndication = new Boolean();

/**
 * Indicates if the characteristic is readable.
 *
 * @type Boolean
 */
BluetoothGATTCharacteristic.prototype.isReadable = new Boolean();

/**
 * Indicates if the characteristic supports write with the signature.
 *
 * @type Boolean
 */
BluetoothGATTCharacteristic.prototype.isSignedWrite = new Boolean();

/**
 * Indicates if the characteristic is writable.
 *
 * @type Boolean
 */
BluetoothGATTCharacteristic.prototype.isWritable = new Boolean();

/**
 * Indicates if the characteristic supports writing without response.
 *
 * @type Boolean
 */
BluetoothGATTCharacteristic.prototype.isWriteNoResponse = new Boolean();

/**
 * Reads the characteristic value from the remote device. Updates characteristic value attribute.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {ReadValueSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothGATTCharacteristic
 * @returns {void}
 */
BluetoothGATTCharacteristic.prototype.readValue = function(successCallback, errorCallback){ return; };

/**
 * Writes the characteristic value to the remote device.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {array} value
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothGATTCharacteristic
 * @returns {void}
 */
BluetoothGATTCharacteristic.prototype.writeValue = function(value, successCallback, errorCallback){ return; };

/**
 * Registers a callback to be called when characteristic value of the characteristic changes.
 *
 * @param {ReadValueSuccessCallback} callback
 * @type Number
 * @memberOf BluetoothGATTCharacteristic
 * @returns {Number}
 */
BluetoothGATTCharacteristic.prototype.addValueChangeListener = function(callback){ var ret = new Number(); return ret; };

/**
 * Unregisters a characteristic value change listener
 *
 * @param {Number} watchID
 * @type void
 * @memberOf BluetoothGATTCharacteristic
 * @returns {void}
 */
BluetoothGATTCharacteristic.prototype.removeValueChangeListener = function(watchID){ return; };

/**
 * The MDEP data type used for communication, which is referenced in the ISO/IEEE 11073-20601 spec.
 * <p>
For example, pulse oximeter is 4100 and blood pressure monitor is 4103.  See <a href="#BluetoothHealthApplication::onconnect">example</a>.
            </p>
 *
 * @type Number
 */
BluetoothHealthApplication.prototype.dataType = new Number();

/**
 * The friendly name associated with sink application. See .
 *
 * @type String
 */
BluetoothHealthApplication.prototype.name = new String();

/**
 * Called when a health device is connected successfully through this application.
 * <p>
By default, this attribute is set to null.
            </p>
 *
 * @type BluetoothHealthChannelSuccessCallback
 */
BluetoothHealthApplication.prototype.onconnect = new BluetoothHealthChannelSuccessCallback();

/**
 * Unregisters this application.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothHealthApplication
 * @returns {void}
 */
BluetoothHealthApplication.prototype.unregister = function(successCallback, errorCallback){ return; };

/**
 * Called on success.
 *
 * @param {BluetoothDevice} device
 * @type void
 * @memberOf BluetoothDeviceSuccessCallback
 * @returns {void}
 */
BluetoothDeviceSuccessCallback.prototype.onsuccess = function(device){ return; };

/**
 * The Bluetooth profile type.
 *
 * @type BluetoothProfileType
 */
BluetoothProfileHandler.prototype.profileType = new BluetoothProfileType();

/**
 * The 16 bit UUID of service data
 *
 * @type BluetoothUUID
 */
BluetoothLEServiceData.prototype.uuid = new BluetoothUUID();

/**
 * The service data of the Bluetooth LE device
 *
 * @type String
 */
BluetoothLEServiceData.prototype.data = new String();

/**
 * Registers an application for the Sink role.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {Number} dataType
 * @param {String} name
 * @param {BluetoothHealthApplicationSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothHealthProfileHandler
 * @returns {void}
 */
BluetoothHealthProfileHandler.prototype.registerSinkApplication = function(dataType, name, successCallback, errorCallback){ return; };

/**
 * Connects to the health device which acts as the Source role.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If a Bluetooth device is turned off              </li>
              <li>
 InvalidValuesError - If any of the input parameters contain an invalid value              </li>
              <li>
 UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {BluetoothDevice} peer
 * @param {BluetoothHealthApplication} application
 * @param {BluetoothHealthChannelSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf BluetoothHealthProfileHandler
 * @returns {void}
 */
BluetoothHealthProfileHandler.prototype.connectToSource = function(peer, application, successCallback, errorCallback){ return; };

/**
 * The manufacturer assigned ID
 *
 * @type String
 */
BluetoothLEManufacturerData.prototype.id = new String();

/**
 * The manufacturer data content
 *
 * @type String
 */
BluetoothLEManufacturerData.prototype.data = new String();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.COMPUTER_UNCATEGORIZED = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.COMPUTER_DESKTOP = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.COMPUTER_SERVER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.COMPUTER_LAPTOP = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.COMPUTER_HANDHELD_PC_OR_PDA = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.COMPUTER_PALM_PC_OR_PDA = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.COMPUTER_WEARABLE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PHONE_UNCATEGORIZED = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PHONE_CELLULAR = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PHONE_CORDLESS = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PHONE_SMARTPHONE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PHONE_MODEM_OR_GATEWAY = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PHONE_ISDN = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_UNRECOGNIZED = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_WEARABLE_HEADSET = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_HANDSFREE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_MICROPHONE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_LOUDSPEAKER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_HEADPHONES = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_PORTABLE_AUDIO = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_CAR_AUDIO = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_SETTOP_BOX = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_HIFI = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_VCR = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_VIDEO_CAMERA = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_CAMCORDER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_MONITOR = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_DISPLAY_AND_LOUDSPEAKER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_VIDEO_CONFERENCING = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.AV_GAMING_TOY = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_UNCATEGORIZED = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_KEYBOARD = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_POINTING_DEVICE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_KEYBOARD_AND_POINTING_DEVICE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_JOYSTICK = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_GAMEPAD = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_REMOTE_CONTROL = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_SENSING_DEVICE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_DEGITIZER_TABLET = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_CARD_READER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_DIGITAL_PEN = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_HANDHELD_SCANNER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.PERIPHERAL_HANDHELD_INPUT_DEVICE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.IMAGING_UNCATEGORIZED = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.IMAGING_DISPLAY = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.IMAGING_CAMERA = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.IMAGING_SCANNER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.IMAGING_PRINTER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.WEARABLE_WRITST_WATCH = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.WEARABLE_PAGER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.WEARABLE_JACKET = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.WEARABLE_HELMET = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.WEARABLE_GLASSES = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.TOY_ROBOT = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.TOY_VEHICLE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.TOY_DOLL = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.TOY_CONTROLLER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.TOY_GAME = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_UNDEFINED = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_BLOOD_PRESSURE_MONITOR = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_THERMOMETER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_WEIGHING_SCALE = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_GLUCOSE_METER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_PULSE_OXIMETER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_PULSE_RATE_MONITOR = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_DATA_DISPLAY = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_STEP_COUNTER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_BODY_COMPOSITION_ANALYZER = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_PEAK_FLOW_MONITOR = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_MEDICATION_MONITOR = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_KNEE_PROSTHESIS = new Number();

/**
 * 
 *
 * @type octet
 */
BluetoothClassDeviceMinor.HEALTH_ANKLE_PROSTHESIS = new Number();

/**
 * Called when a connection is established.
 *
 * @param {BluetoothHealthChannel} channel
 * @type void
 * @memberOf BluetoothHealthChannelSuccessCallback
 * @returns {void}
 */
BluetoothHealthChannelSuccessCallback.prototype.onsuccess = function(channel){ return; };

/**
 * Called when the connection to a service is ready.
 *
 * @param {BluetoothSocket} socket
 * @type void
 * @memberOf BluetoothSocketSuccessCallback
 * @returns {void}
 */
BluetoothSocketSuccessCallback.prototype.onsuccess = function(socket){ return; };

/**
 * The Bluetooth API defines interfaces and methods to manage Bluetooth.
 * <p>
The following Bluetooth functionalities are provided:
        </p>
 * <ul>
 * <li>Controls local Bluetooth device, that is, turn Bluetooth on/off, etc.
 * <li>Sets visibility
 * <li>Discovers nearby Bluetooth devices (Device discovery, including Bluetooth LE devices)
 * <li>Gets bonded devices information
 * <li>Controls bonding
 * <li>Connects to a service on a remote device and exchanges data
 * <li>Registers a service (RFCOMM) on a local device, which can be consumed by remote devices to exchange data
 * <li>Advertise for remote devices (including Bluetooth LE devices)
 * <li>Act as a GATT client (Generic Attribute Profile client)
 * </ul>
 * <p>
For more information on the Bluetooth features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/communication_guide/bluetooth.htm">Bluetooth Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/network.bluetooth
 * @type BluetoothManager
 */
Tizen.prototype.bluetooth = new BluetoothManager();

/**
 * The ThumbnailSuccessCallback interface specifies a success callback that is invoked when a content's thumbnail is successfully created.
 *
 * @super Object
 * @constructor
 * @return {ThumbnailSuccessCallback}
 */
function ThumbnailSuccessCallback() {};
ThumbnailSuccessCallback.prototype = new Object();

/**
 * This interface specifies a set of methods that are invoked every time a content change occurs.
 *
 * @super Object
 * @constructor
 * @return {ContentChangeCallback}
 */
function ContentChangeCallback() {};
ContentChangeCallback.prototype = new Object();

/**
 * The ImageContent interface extends a basic object with image-specific attributes.
 *
 * @super Object
 * @constructor
 * @return {ImageContent}
 */
function ImageContent() {};
ImageContent.prototype = new Content();

/**
 * The callback function used to return a list of content objects.
 *
 * @super Object
 * @constructor
 * @return {ContentArraySuccessCallback}
 */
function ContentArraySuccessCallback() {};
ContentArraySuccessCallback.prototype = new Object();

/**
 * The ContentDirectory interface provides access to properties of a content directory.
 *
 * @super Object
 * @constructor
 * @return {ContentDirectory}
 */
function ContentDirectory() {};
ContentDirectory.prototype = new Object();

/**
 * The callback function used to return a list of ContentDirectory objects.
 *
 * @super Object
 * @constructor
 * @return {ContentDirectoryArraySuccessCallback}
 */
function ContentDirectoryArraySuccessCallback() {};
ContentDirectoryArraySuccessCallback.prototype = new Object();

/**
 * The Content interface provides access to the properties of a content item.
 *
 * @super Object
 * @constructor
 * @return {Content}
 */
function Content() {};
Content.prototype = new Object();

/**
 * Defines what is instantiated by the Tizen object.
          <p>
The <em>tizen.content </em>object allows accessing the functionality of the Content module.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ContentManagerObject}
 */
function ContentManagerObject() {};
ContentManagerObject.prototype = new Object();

/**
 * The PlaylistSuccessCallback interface specifies a success callback that is invoked when a new playlist is successfully created.
          <p>
It is used in <em>tizen.content.createPlaylist()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PlaylistSuccessCallback}
 */
function PlaylistSuccessCallback() {};
PlaylistSuccessCallback.prototype = new Object();

/**
 * The ContentManager interface provides operations to retrieve and manipulate content.
 *
 * @super Object
 * @constructor
 * @return {ContentManager}
 */
function ContentManager() {};
ContentManager.prototype = new Object();

/**
 * The PlaylistItemArraySuccessCallback interface specifies a success callback that is invoked when a list of playlist items are successfully retrieved.
 *
 * @super Object
 * @constructor
 * @return {PlaylistItemArraySuccessCallback}
 */
function PlaylistItemArraySuccessCallback() {};
PlaylistItemArraySuccessCallback.prototype = new Object();

/**
 * The VideoContent interface extends a basic object with video-specific attributes.
 *
 * @super Object
 * @constructor
 * @return {VideoContent}
 */
function VideoContent() {};
VideoContent.prototype = new Content();

/**
 * The PlaylistArraySuccessCallback interface specifies a success callback that is invoked when all existing playlists are retrieved successfully.
          <p>
It is used in <em>tizen.content.getPlaylists()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PlaylistArraySuccessCallback}
 */
function PlaylistArraySuccessCallback() {};
PlaylistArraySuccessCallback.prototype = new Object();

/**
 * The callback function used to return content or content directory to scan.
 *
 * @super Object
 * @constructor
 * @return {ContentScanSuccessCallback}
 */
function ContentScanSuccessCallback() {};
ContentScanSuccessCallback.prototype = new Object();

/**
 * The AudioContentLyrics interface provides lyrics for music.
 *
 * @super Object
 * @constructor
 * @return {AudioContentLyrics}
 */
function AudioContentLyrics() {};
AudioContentLyrics.prototype = new Object();

/**
 * The Playlist interface represents a playlist.
 *
 * @super Object
 * @constructor
 * @return {Playlist}
 */
function Playlist() {};
Playlist.prototype = new Object();

/**
 * The AudioContent interface extends a basic object with audio-specific attributes.
 *
 * @super Object
 * @constructor
 * @return {AudioContent}
 */
function AudioContent() {};
AudioContent.prototype = new Content();

/**
 * The PlaylistItem interface represents a playlist item.
 *
 * @super Object
 * @constructor
 * @return {PlaylistItem}
 */
function PlaylistItem() {};
PlaylistItem.prototype = new Object();

/**
 * Called when the method completes successfully.
 *
 * @param {String} path
 * @type void
 * @memberOf ThumbnailSuccessCallback
 * @returns {void}
 */
ThumbnailSuccessCallback.prototype.onsuccess = function(path){ return; };

/**
 * Called when content is added.
 *
 * @param {Content} content
 * @type void
 * @memberOf ContentChangeCallback
 * @returns {void}
 */
ContentChangeCallback.prototype.oncontentadded = function(content){ return; };

/**
 * Called when content is updated.
 *
 * @param {Content} content
 * @type void
 * @memberOf ContentChangeCallback
 * @returns {void}
 */
ContentChangeCallback.prototype.oncontentupdated = function(content){ return; };

/**
 * Called when content is removed.
 *
 * @param {ContentId} id
 * @type void
 * @memberOf ContentChangeCallback
 * @returns {void}
 */
ContentChangeCallback.prototype.oncontentremoved = function(id){ return; };

/**
 * Called when a content directory is added.
 *
 * @param {ContentDirectory} contentDir
 * @type void
 * @memberOf ContentChangeCallback
 * @returns {void}
 */
ContentChangeCallback.prototype.oncontentdiradded = function(contentDir){ return; };

/**
 * Called when a content directory is updated.
 *
 * @param {ContentDirectory} contentDir
 * @type void
 * @memberOf ContentChangeCallback
 * @returns {void}
 */
ContentChangeCallback.prototype.oncontentdirupdated = function(contentDir){ return; };

/**
 * Called when a content directory is removed.
 *
 * @param {ContentDirectoryId} id
 * @type void
 * @memberOf ContentChangeCallback
 * @returns {void}
 */
ContentChangeCallback.prototype.oncontentdirremoved = function(id){ return; };

/**
 * The geographical location where the image has been made.
 *
 * @type SimpleCoordinates
 */
ImageContent.prototype.geolocation = new SimpleCoordinates();

/**
 * The width of an image in pixels.
 *
 * @type Number
 */
ImageContent.prototype.width = new Number();

/**
 * The height of an image in pixels.
 *
 * @type Number
 */
ImageContent.prototype.height = new Number();

/**
 * The image orientation.
 *
 * @type ImageContentOrientation
 */
ImageContent.prototype.orientation = new ImageContentOrientation();

/**
 * Called when the list of content is retrieved successfully.
 *
 * @param {array} contents
 * @type void
 * @memberOf ContentArraySuccessCallback
 * @returns {void}
 */
ContentArraySuccessCallback.prototype.onsuccess = function(contents){ return; };

/**
 * The opaque content directory identifier.
 *
 * @type ContentDirectoryId
 */
ContentDirectory.prototype.id = new ContentDirectoryId();

/**
 * The directory path on the device.
 *
 * @type String
 */
ContentDirectory.prototype.directoryURI = new String();

/**
 * The directory name.
 *
 * @type String
 */
ContentDirectory.prototype.title = new String();

/**
 * The type of device storage.
 *
 * @type ContentDirectoryStorageType
 */
ContentDirectory.prototype.storageType = new ContentDirectoryStorageType();

/**
 * The last modified date for a directory.
 *
 * @type Date
 */
ContentDirectory.prototype.modifiedDate = new Date();

/**
 * Called when the directory list is retrieved successfully.
 *
 * @param {array} directories
 * @type void
 * @memberOf ContentDirectoryArraySuccessCallback
 * @returns {void}
 */
ContentDirectoryArraySuccessCallback.prototype.onsuccess = function(directories){ return; };

/**
 * The list of attributes that are editable to the local backend using the update() or updateBatch() method.
 *
 * @type array
 */
Content.prototype.editableAttributes = new array();

/**
 * The opaque content identifier.
 *
 * @type ContentId
 */
Content.prototype.id = new ContentId();

/**
 * The content name. The initial value is the file name of the content.
 *
 * @type String
 */
Content.prototype.name = new String();

/**
 * The content type.
 *
 * @type ContentType
 */
Content.prototype.type = new ContentType();

/**
 * The content MIME type.
 *
 * @type String
 */
Content.prototype.mimeType = new String();

/**
 * The content title.
 *
 * @type String
 */
Content.prototype.title = new String();

/**
 * The URI to access the content.
 *
 * @type String
 */
Content.prototype.contentURI = new String();

/**
 * The array of content thumbnail URIs.
 *
 * @type array
 */
Content.prototype.thumbnailURIs = new array();

/**
 * The date when content has been released publicly. If only the release year is known, then the month and date are set to January and 1st respectively.
 *
 * @type Date
 */
Content.prototype.releaseDate = new Date();

/**
 * The last modified date for a content item.
 *
 * @type Date
 */
Content.prototype.modifiedDate = new Date();

/**
 * The file size of the content in bytes.
 *
 * @type Number
 */
Content.prototype.size = new Number();

/**
 * The content description.
 *
 * @type String
 */
Content.prototype.description = new String();

/**
 * The content rating. This value can range from to .
 *
 * @type Number
 */
Content.prototype.rating = new Number();

/**
 * Boolean value that indicates whether a content item is marked as a favorite.
 *
 * @type Boolean
 */
Content.prototype.isFavorite = new Boolean();

/**
 * The Content API provides functionality to discover content such as images, videos, music, or others.
 * <p>
It is possible to search for specific content using filters.
The API also supports setting the attributes of specific content.
        </p>
 * <p>
For more information on the Content features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/content_guide/mediacontent.htm">Content Guide</a>.
        </p>
 * <p>
For more information about how to use the playlist feature of the Content API, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/content_guide/playlist.htm">Playlist Guide</a>.
        </p>
 * <p>
Playlist functionality has been added in Tizen 2.3.
        </p>
 *
 * @type ContentManager
 */
ContentManagerObject.prototype.content = new ContentManager();

/**
 * Called when the method completes successfully.
 *
 * @param {Playlist} playlist
 * @type void
 * @memberOf PlaylistSuccessCallback
 * @returns {void}
 */
PlaylistSuccessCallback.prototype.onsuccess = function(playlist){ return; };

/**
 * Updates attributes of content in the content database synchronously.
            <p>
When an application has changed some attributes of the content, this method allows
writing it back to the content database.
            </p>
           
 *
 * @param {Content} content
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.update = function(content){ return; };

/**
 * Updates a batch of content attributes in the content database asynchronously.
            <p>
When an application has changed any attributes in the array of content, this method allows writing them
back to the content database.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError: In any other error case.              </li>
            </ul>
           
 *
 * @param {array} contents
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.updateBatch = function(contents, successCallback, errorCallback){ return; };

/**
 * Gets a list of content directories.
            <p>
This method returns (via callback) a list of content directory objects. To obtain a list of contents
in a specific directory, use the find() method with the directory ID.
            </p>
            <p>
The errorCallback is launched with this error type:
            </p>
            <ul>
              <li>
UnknownError: In any other error case.              </li>
            </ul>
           
 *
 * @param {ContentDirectoryArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.getDirectories = function(successCallback, errorCallback){ return; };

/**
 * Finds contents that satisfy the conditions set by a filter.
            <p>
This method allows searching based on a supplied filter. For more details on AbstractFilter, see the
<a href="tizen.html#::Tizen::AbstractFilter">Tizen</a> module. The filter allows precise searching such
as "return all songs by artist U2, ordered by name".
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError: In any other error case.              </li>
            </ul>
           
 *
 * @param {ContentArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {ContentDirectoryId} directoryId
 * @param {AbstractFilter} filter
 * @param {SortMode} sortMode
 * @param {Number} count
 * @param {Number} offset
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.find = function(successCallback, errorCallback, directoryId, filter, sortMode, count, offset){ return; };

/**
 * Scans a file to create or update content in the content database.
            <p>
When an application creates or updates content, this method allows to scan it
and then insert or update the content in the content database.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError: In case of any error detected asynchronously              </li>
            </ul>
           
 *
 * @param {String} contentURI
 * @param {ContentScanSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.scanFile = function(contentURI, successCallback, errorCallback){ return; };

/**
 * Scans a content directory to create or update content in the content database.
            <p>
When an application creates or updates content in a directory, this method allows
to scan it and then insert or update the content in the content database.
If a directory must not be scanned, the file <em>.scan_ignore</em> has to be created in it.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError: In case of any error detected asynchronously              </li>
            </ul>
           
 *
 * @param {String} contentDirURI
 * @param {Boolean} recursive
 * @param {ContentScanSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.scanDirectory = function(contentDirURI, recursive, successCallback, errorCallback){ return; };

/**
 * Cancels a scan process of a content directory.
            <p>
When a scan of a given directory is running it may be canceled by this function.
            </p>
           
 *
 * @param {String} contentDirURI
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.cancelScanDirectory = function(contentDirURI){ return; };

/**
 * Adds a listener which receives notifications when content changes.
 *
 * @param {ContentChangeCallback} changeCallback
 * @type Number
 * @memberOf ContentManager
 * @returns {Number}
 */
ContentManager.prototype.addChangeListener = function(changeCallback){ var ret = new Number(); return ret; };

/**
 * Removes a listener which receives notifications about content changes.
 *
 * @param {Number} listenerId
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.removeChangeListener = function(listenerId){ return; };

/**
 * Sets a listener to receive notifications of content changes.
 *
 * @param {ContentChangeCallback} changeCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.setChangeListener = function(changeCallback){ return; };

/**
 * Unsets the listener to unsubscribe from receiving notifications for content changes.
 *
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.unsetChangeListener = function(){ return; };

/**
 * Gets all playlists.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError: In case of any error              </li>
            </ul>
           
 *
 * @param {PlaylistArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.getPlaylists = function(successCallback, errorCallback){ return; };

/**
 * Creates a new playlist.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If <var>name</var> is empty or is same as the name of an existing playlist              </li>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
           
 *
 * @param {String} name
 * @param {PlaylistSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {Playlist} sourcePlaylist
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.createPlaylist = function(name, successCallback, errorCallback, sourcePlaylist){ return; };

/**
 * Removes a playlist.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError: In case of any error              </li>
            </ul>
           
 *
 * @param {PlaylistId} id
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.removePlaylist = function(id, successCallback, errorCallback){ return; };

/**
 * Creates a content's thumbnail.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: In case of invalid content object.              </li>
              <li>
AbortError: In case of any error.              </li>
            </ul>
           
 *
 * @param {Content} content
 * @param {ThumbnailSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ContentManager
 * @returns {void}
 */
ContentManager.prototype.createThumbnail = function(content, successCallback, errorCallback){ return; };

/**
 * Called when the method completes successfully.
 *
 * @param {array} items
 * @type void
 * @memberOf PlaylistItemArraySuccessCallback
 * @returns {void}
 */
PlaylistItemArraySuccessCallback.prototype.onsuccess = function(items){ return; };

/**
 * The geographical location where the video has been made.
 *
 * @type SimpleCoordinates
 */
VideoContent.prototype.geolocation = new SimpleCoordinates();

/**
 * The album name to which the video belongs.
 *
 * @type String
 */
VideoContent.prototype.album = new String();

/**
 * The list of artists who created the video.
 *
 * @type array
 */
VideoContent.prototype.artists = new array();

/**
 * The video duration in milliseconds.
 *
 * @type Number
 */
VideoContent.prototype.duration = new Number();

/**
 * The width of a video in pixels.
 *
 * @type Number
 */
VideoContent.prototype.width = new Number();

/**
 * The height of the video in pixels.
 *
 * @type Number
 */
VideoContent.prototype.height = new Number();

/**
 * Called when the method completes successfully.
 *
 * @param {array} playlists
 * @type void
 * @memberOf PlaylistArraySuccessCallback
 * @returns {void}
 */
PlaylistArraySuccessCallback.prototype.onsuccess = function(playlists){ return; };

/**
 * Called when the scanning has been completed.
 *
 * @param {String} uri
 * @type void
 * @memberOf ContentScanSuccessCallback
 * @returns {void}
 */
ContentScanSuccessCallback.prototype.onsuccess = function(uri){ return; };

/**
 * The type of lyrics, that is, whether they are synchronized with the music.
 *
 * @type AudioContentLyricsType
 */
AudioContentLyrics.prototype.type = new AudioContentLyricsType();

/**
 * The array of timestamps in milliseconds for lyrics.
 * <p>
If the lyrics are not synchronized (if there is no time information for the lyrics) the array is undefined.
            </p>
 *
 * @type array
 */
AudioContentLyrics.prototype.timestamps = new array();

/**
 * The array of lyrics snippets.
 * <p>
If the lyrics are not synchronized, the array has only one member with full lyrics.
            </p>
 *
 * @type array
 */
AudioContentLyrics.prototype.texts = new array();

/**
 * Identifier of a playlist.
 *
 * @type PlaylistId
 */
Playlist.prototype.id = new PlaylistId();

/**
 * Name of a playlist (case sensitive and unique).
 * <p>
When <var>name</var> is set, the change is recorded in the database.
            </p>
 *
 * @type String
 */
Playlist.prototype.name = new String();

/**
 * Number of playlist items in the playlist.
 *
 * @type Number
 */
Playlist.prototype.numberOfTracks = new Number();

/**
 * Thumbnail URI of a playlist.
 * <p>
By default, this attribute is set to <var>null</var>. <br/>When <var>thumbnailURI</var> is set, the change is recorded in the database.
            </p>
 *
 * @type String
 */
Playlist.prototype.thumbnailURI = new String();

/**
 * Adds a content item to a playlist.
            <p>
See code example for the <em>createPlaylist()</em> method.
            </p>
           
 *
 * @param {Content} item
 * @type void
 * @memberOf Playlist
 * @returns {void}
 */
Playlist.prototype.add = function(item){ return; };

/**
 * Adds tracks to a playlist as a batch, asynchronously.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError: In case of any error              </li>
            </ul>
           
 *
 * @param {array} items
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Playlist
 * @returns {void}
 */
Playlist.prototype.addBatch = function(items, successCallback, errorCallback){ return; };

/**
 * Removes a track from a playlist.
 *
 * @param {PlaylistItem} item
 * @type void
 * @memberOf Playlist
 * @returns {void}
 */
Playlist.prototype.remove = function(item){ return; };

/**
 * Removes tracks from a playlist as a batch, asynchronously.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
           
 *
 * @param {array} items
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Playlist
 * @returns {void}
 */
Playlist.prototype.removeBatch = function(items, successCallback, errorCallback){ return; };

/**
 * Gets playlist items from a playlist.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the input parameters contain an invalid value (e.g <em>count</em> or <em>offset</em> is a negative number)              </li>
              <li>
UnknownError: In case of any error              </li>
            </ul>
           
 *
 * @param {PlaylistItemArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {Number} count
 * @param {Number} offset
 * @type void
 * @memberOf Playlist
 * @returns {void}
 */
Playlist.prototype.get = function(successCallback, errorCallback, count, offset){ return; };

/**
 * Changes the play order of all playlist items in the playlist.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: In case the item in the passed <em>items</em> array is not inside this playlist, or the <em>items</em> array does not contain all items from the playlist              </li>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
           
 *
 * @param {array} items
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Playlist
 * @returns {void}
 */
Playlist.prototype.setOrder = function(items, successCallback, errorCallback){ return; };

/**
 * Moves the specified item up or down a specified amount in the play order.
            <p>
If <var>current index + delta</var> is:
            </p>
            <ul>
              <li>
<var>&lt; 0</var> then the item is moved to the first position in the playlist              </li>
              <li>
<var>≥ number of tracks</var> then the item is moved to the last position in the playlist              </li>
            </ul>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError: In case the item in the passed <em>items</em> array is not inside this playlist or some item of this playlist is not included in <em>items</em>              </li>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
           
 *
 * @param {PlaylistItem} item
 * @param {Number} delta
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Playlist
 * @returns {void}
 */
Playlist.prototype.move = function(item, delta, successCallback, errorCallback){ return; };

/**
 * The album name to which the audio belongs.
 *
 * @type String
 */
AudioContent.prototype.album = new String();

/**
 * The list of genres to which the audio belongs.
 *
 * @type array
 */
AudioContent.prototype.genres = new array();

/**
 * The list of artists who created the audio.
 *
 * @type array
 */
AudioContent.prototype.artists = new array();

/**
 * The list of composers for the music.
 *
 * @type array
 */
AudioContent.prototype.composers = new array();

/**
 * The lyrics of a song in an audio file.
 *
 * @type AudioContentLyrics
 */
AudioContent.prototype.lyrics = new AudioContentLyrics();

/**
 * The copyright information.
 *
 * @type String
 */
AudioContent.prototype.copyright = new String();

/**
 * The audio bitrate in bits per second. By default, this value is 0.
 *
 * @type Number
 */
AudioContent.prototype.bitrate = new Number();

/**
 * The track number if the audio belongs to an album.
 *
 * @type Number
 */
AudioContent.prototype.trackNumber = new Number();

/**
 * The audio duration in milliseconds.
 *
 * @type Number
 */
AudioContent.prototype.duration = new Number();

/**
 * Content contained in this playlist item.
 *
 * @type Content
 */
PlaylistItem.prototype.content = new Content();

/**
 * The Content API provides functionality to discover content such as images, videos, music, or others.
 * <p>
It is possible to search for specific content using filters.
The API also supports setting the attributes of specific content.
        </p>
 * <p>
For more information on the Content features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/content_guide/mediacontent.htm">Content Guide</a>.
        </p>
 * <p>
For more information about how to use the playlist feature of the Content API, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/content_guide/playlist.htm">Playlist Guide</a>.
        </p>
 * <p>
Playlist functionality has been added in Tizen 2.3.
        </p>
 *
 * @type ContentManager
 */
Tizen.prototype.content = new ContentManager();

/**
 * The interface defines the method to be invoked when requested a list of clients, connected to the specified channel of the application communication service.
          <p>
The callback of this type is invoked in
<a href="convergence.html#AppCommunicationService::getClientList">getClientList()</a> method.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AppCommunicationClientListCallback}
 */
function AppCommunicationClientListCallback() {};
AppCommunicationClientListCallback.prototype = new Object();

/**
 * The RemoteAppControlCallback specifies callbacks that are invoked as a reply from the requested application control within the application control requester.
          <p>
The callback of this type is invoked in
<a href="convergence.html#RemoteAppControlService::launchAppControl">launchAppControl()</a> method.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {RemoteAppControlCallback}
 */
function RemoteAppControlCallback() {};
RemoteAppControlCallback.prototype = new Object();

/**
 * The interface provides access to the object.
          <p>
The device-to-device convergence manager allows discovering available
nearby devices, which support device-to-device services.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ConvergenceManager}
 */
function ConvergenceManager() {};
ConvergenceManager.prototype = new Object();

/**
 * The interface defines the success method to be invoked when a start service operation is successful.
          <p>
The callback of this type is invoked in
<a href="convergence.html#AppCommunicationService::start">start()</a> of AppCommunicationService method.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AppCommunicationStartCallback}
 */
function AppCommunicationStartCallback() {};
AppCommunicationStartCallback.prototype = new Object();

/**
 * The interface provides access to the remote device's properties.
          <p>
This interface offers access to remote device information, such as the unique
identifier, name, profile type and list of provided services.
          </p>
          <p>
<br/>Note, device ID and device type are defined in the platform, and the developer cannot change it.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {Device}
 */
function Device() {};
Device.prototype = new Object();

/**
 * The interface defines the method to be invoked when a service notification is received from the application communication service.
          <p>
The callback of this type can be assigned to the service using the
<a href="convergence.html#AppCommunicationService::setListener">setListener()</a> method.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AppCommunicationListenerCallback}
 */
function AppCommunicationListenerCallback() {};
AppCommunicationListenerCallback.prototype = new Object();

/**
 * The interface defines the success method to be invoked when a RemoteAppControlService is started.
          <p>
The callback of this type is invoked in
<a href="convergence.html#RemoteAppControlService::start">start()</a> of RemoteAppControlService methods.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {RemoteAppControlStartCallback}
 */
function RemoteAppControlStartCallback() {};
RemoteAppControlStartCallback.prototype = new Object();

/**
 * The channel info interface that specifies the server application which a client application wants to connect with.
          <p>
The channelinfo is composed of a URI and a channel ID which is used in <a href="convergence.html#AppCommunicationService">App Communication</a> services.
The channelinfo URI is a URI for an application on the server side.
The channelinfo ID value is defined by the developer.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ConvergenceChannelInfo}
 */
function ConvergenceChannelInfo() {};
ConvergenceChannelInfo.prototype = new Object();

/**
 * The interface defines the base interface of both application communication and services and specifies common service features, such as start, stop, send, listener etc.
          <p>
App Communication Service allows transferring data between apps on local and remote devices.
The App Communication Service relies on a Remote Server. The initialization and execution of a server app
(the app on the side with the Remote Server, e.g. TV) and a client app (e.g. an app on a mobile or wearable device)
are slightly different. Furthermore, the client app can remotely launch an app on the server side or connect to an
already running server app, but the reverse way is impossible. More than one client can be connected to a server app.
For example, multiple players on mobile devices can connect to a game application on a TV which takes a role of a server.
Both client and server side apps can send payloads and listen to each other.
          </p>
          <p>
<br/>Note there are <a href="convergence.html#AppCommunicationClientService">client</a> and
<a href="convergence.html#AppCommunicationServerService">server</a> implementations
of this service for both local and remote devices. For better flexibility, the data transfer occurs in a user-defined
<a href="convergence.html#ConvergenceChannelInfo">ConvergenceChannelInfo</a>.
          </p>
          <p>
These interfaces offer the following service features:
          </p>
          <ul>
            <li>
Starting and stopping the service            </li>
            <li>
Sending payloads to the service            </li>
            <li>
Listening to remote service notifications            </li>
            <li>
Getting the list of clients that are connected to the service            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {AppCommunicationService}
 */
function AppCommunicationService() {};
AppCommunicationService.prototype = new Service();

/**
 * The interface provides access to remote application control service features.
          <p>
This interface offers following device-to-device service features:
          </p>
          <ul>
            <li>
Connecting and disconnecting the service            </li>
            <li>
Sending app control data to the service            </li>
            <li>
Receiving app control results            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {RemoteAppControlService}
 */
function RemoteAppControlService() {};
RemoteAppControlService.prototype = new Service();

/**
 * The interface is a base interface for all device-to-device services.
          <p>
This interface defines common property for all device-to-device services
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {Service}
 */
function Service() {};
Service.prototype = new Object();

/**
 * The interface defines the success method for .
          <p>
Specifies the type of function passed to <em>ConvergenceManager.startDiscovery()</em>.
Called when device providing device-to-device service is discovered nearby.
          </p>
          <p>
A usage example can be found in the
<a href="convergence.html#ConvergenceManager::startDiscovery">startDiscovery()</a> code example.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {DiscoverySuccessCallback}
 */
function DiscoverySuccessCallback() {};
DiscoverySuccessCallback.prototype = new Object();

/**
 * The interface defines the success method to be invoked when a service is connected.
          <p>
The callback of this type is invoked in
<a href="convergence.html#AppCommunicationClientService::connect">connect()</a> of AppCommunicationClientService and
<a href="convergence.html#RemoteAppControlService::connect">connect()</a> of RemoteAppControlService methods.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ConnectSuccessCallback}
 */
function ConnectSuccessCallback() {};
ConnectSuccessCallback.prototype = new Object();

/**
 * The interface defines the success method to be invoked when a service operation, such as stop or send is successful.
          <p>
The callback of this type is invoked in
<a href="convergence.html#AppCommunicationService::stop">stop()</a> of AppCommunicationService or
<a href="convergence.html#AppCommunicationService::send">send()</a> methods.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AppCommunicationSuccessCallback}
 */
function AppCommunicationSuccessCallback() {};
AppCommunicationSuccessCallback.prototype = new Object();

/**
 * The interface specifies client information.
 *
 * @super Object
 * @constructor
 * @return {ClientInfo}
 */
function ClientInfo() {};
ClientInfo.prototype = new Object();

/**
 * The interface defines what is instantiated by the object from the Tizen platform.
          <p>
The <em>tizen.convergence</em> object allows access to
Tizen device-to-device convergence API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ConvergenceObject}
 */
function ConvergenceObject() {};
ConvergenceObject.prototype = new Object();

/**
 * The interface provides access to application communication server service features.
          <p>
This interface offers following service features:
          </p>
          <ul>
            <li>
Instantiating the service            </li>
            <li>
Reading immediate data of the service            </li>
            <li>
Listening to service update notifications            </li>
            <li>
Sending data for the service            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {AppCommunicationServerService}
 */
function AppCommunicationServerService() {};
AppCommunicationServerService.prototype = new AppCommunicationService();

/**
 * The interface provides access to application communication client service features.
          <p>
This interface offers following service features:
          </p>
          <ul>
            <li>
Connecting and disconnecting the remote service            </li>
            <li>
Reading immediate data of the remote service            </li>
            <li>
Listening to remote service update notifications            </li>
            <li>
Sending data to the remote service            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {AppCommunicationClientService}
 */
function AppCommunicationClientService() {};
AppCommunicationClientService.prototype = new AppCommunicationService();

/**
 * Called when the list of connected clients is requested.
 *
 * @param {array} clients
 * @type void
 * @memberOf AppCommunicationClientListCallback
 * @returns {void}
 */
AppCommunicationClientListCallback.prototype.onsuccess = function(clients){ return; };

/**
 * Called when the received reply from the requested application on the remote device has no errors.
 *
 * @param {array} data
 * @type void
 * @memberOf RemoteAppControlCallback
 * @returns {void}
 */
RemoteAppControlCallback.prototype.onsuccess = function(data){ return; };

/**
 * Called when the received reply from the requested application on the remote device contains any error.
 *
 * @type void
 * @memberOf RemoteAppControlCallback
 * @returns {void}
 */
RemoteAppControlCallback.prototype.onfailure = function(){ return; };

/**
 * Starts discovery of nearby devices.
            <p>
This method initiates the device discovery procedure.
Depending on the progress of this procedure the following methods
are invoked:
            </p>
            <ul>
              <li>
<a href="convergence.html#DiscoverySuccessCallback::onfound">onfound()</a> - when a device is found.
This method is invoked with the device
information of
<a href="convergence.html#Device">Device</a> type.
If no device is found, this method will never be invoked.              </li>
              <li>
<a href="convergence.html#DiscoverySuccessCallback::onfinished">onfinished()</a> - when a discovery procedure is finished.
This method is invoked
with the list of discovered device information.              </li>
            </ul>
            <p>
The discovery procedure can be canceled anytime, by calling
<a href="convergence.html#ConvergenceManager::stopDiscovery">stopDiscovery()</a> in
the <em>ConvergenceManager</em>.
<br/>Note the <a href="convergence.html#DiscoverySuccessCallback::onfinished">onfinished()</a> discovery
callback will be invoked.
            </p>
           
 *
 * @param {DiscoverySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {Number} timeout
 * @type void
 * @memberOf ConvergenceManager
 * @returns {void}
 */
ConvergenceManager.prototype.startDiscovery = function(successCallback, errorCallback, timeout){ return; };

/**
 * Stops discovery of nearby devices.
            <p>
This method stops an ongoing discovery procedure.
            </p>
           
 *
 * @type void
 * @memberOf ConvergenceManager
 * @returns {void}
 */
ConvergenceManager.prototype.stopDiscovery = function(){ return; };

/**
 * Called when the start service operation is successful.
 *
 * @param {ConvergenceChannelInfo} channelInfo
 * @param {ClientInfo} clientInfo
 * @type void
 * @memberOf AppCommunicationStartCallback
 * @returns {void}
 */
AppCommunicationStartCallback.prototype.onsuccess = function(channelInfo, clientInfo){ return; };

/**
 * The unique device ID. Note the device ID is a unique identifier string, generated with following rule. If the Remote Server is installed on the device (e.g. TV), then the device ID is assigned by application communication server service. Usually it has a format of service name and version. Otherwise (e.g. mobile or wearable), the device ID is device MAC address.
 *
 * @type DeviceId
 */
Device.prototype.id = new DeviceId();

/**
 * The device name. Note device name is one that is set in the Settings app (Settings>About Devices>Device Name).
 *
 * @type String
 */
Device.prototype.name = new String();

/**
 * The device profile type. Note Device type represents the , such as “TV”, “Mobile” or “Wearable”.
 *
 * @type DeviceProfile
 */
Device.prototype.type = new DeviceProfile();

/**
 * The list of services, available on the device.
 *
 * @type array
 */
Device.prototype.services = new array();

/**
 * Called when the service channel notification is received.
 *
 * @param {ConvergenceChannelInfo} channelInfo
 * @param {array} payload
 * @param {String} senderClientId
 * @type void
 * @memberOf AppCommunicationListenerCallback
 * @returns {void}
 */
AppCommunicationListenerCallback.prototype.onnotify = function(channelInfo, payload, senderClientId){ return; };

/**
 * Called when the service connection is established.
 *
 * @param {Service} service
 * @type void
 * @memberOf RemoteAppControlStartCallback
 * @returns {void}
 */
RemoteAppControlStartCallback.prototype.onsuccess = function(service){ return; };

/**
 * The uri of the channel.
 *
 * @type String
 */
ConvergenceChannelInfo.prototype.uri = new String();

/**
 * The identifier of the channel.
 *
 * @type String
 */
ConvergenceChannelInfo.prototype.id = new String();

/**
 * Starts the service.
            <p>
This method starts the channel of the service.
            </p>
           
 *
 * @param {ConvergenceChannelInfo} channelInfo
 * @param {AppCommunicationStartCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf AppCommunicationService
 * @returns {void}
 */
AppCommunicationService.prototype.start = function(channelInfo, successCallback, errorCallback){ return; };

/**
 * Get the client lists connected to the channel
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 AbortError: If any system error occurred              </li>
              <li>
 InvalidValuesError: If any of the input parameters contain an invalid value              </li>
              <li>
 InvalidStateError: If the service has not started the channel              </li>
            </ul>
           
 *
 * @param {ConvergenceChannelInfo} channelInfo
 * @param {AppCommunicationClientListCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf AppCommunicationService
 * @returns {void}
 */
AppCommunicationService.prototype.getClientList = function(channelInfo, successCallback, errorCallback){ return; };

/**
 * Sends a payload to the service.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 AbortError: If any system error occurred              </li>
              <li>
 InvalidValuesError: If any of the input parameters contain an invalid value              </li>
              <li>
 InvalidStateError: If the service has not started the channel              </li>
            </ul>
           
 *
 * @param {ConvergenceChannelInfo} channelInfo
 * @param {array} payload
 * @param {AppCommunicationSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf AppCommunicationService
 * @returns {void}
 */
AppCommunicationService.prototype.send = function(channelInfo, payload, successCallback, errorCallback){ return; };

/**
 * Stops the service.
            <p>
This method stops the specified channel of the service.
<br/>Note When all clients have stopped using the service channel, the server side automatically terminates the application.
            </p>
           
 *
 * @param {ConvergenceChannelInfo} channelInfo
 * @param {AppCommunicationSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf AppCommunicationService
 * @returns {void}
 */
AppCommunicationService.prototype.stop = function(channelInfo, successCallback, errorCallback){ return; };

/**
 * Registers the service listener.
 *
 * @param {AppCommunicationListenerCallback} listenerCallback
 * @type void
 * @memberOf AppCommunicationService
 * @returns {void}
 */
AppCommunicationService.prototype.setListener = function(listenerCallback){ return; };

/**
 * Unregisters the service listener.
 *
 * @type void
 * @memberOf AppCommunicationService
 * @returns {void}
 */
AppCommunicationService.prototype.unsetListener = function(){ return; };

/**
 * Starts and initiates remote service.
            <p>
This method starts the remote app control service.
            </p>
           
 *
 * @param {RemoteAppControlStartCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf RemoteAppControlService
 * @returns {void}
 */
RemoteAppControlService.prototype.start = function(successCallback, errorCallback){ return; };

/**
 * Stops remote service.
            <p>
This method stops and release internally allocated resources for remote service.
            </p>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf RemoteAppControlService
 * @returns {void}
 */
RemoteAppControlService.prototype.stop = function(successCallback, errorCallback){ return; };

/**
 * Connects to the service.
            <p>
Makes physical connection such as Bluetooth to remote device-to-device service.
            </p>
           
 *
 * @param {ConnectSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf RemoteAppControlService
 * @returns {void}
 */
RemoteAppControlService.prototype.connect = function(successCallback, errorCallback){ return; };

/**
 * Disconnects the connected service.
            <p>
Disconnect physical connection with device-to-device service.
            </p>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf RemoteAppControlService
 * @returns {void}
 */
RemoteAppControlService.prototype.disconnect = function(successCallback, errorCallback){ return; };

/**
 * Sends the given application ID to launch an application on the remote device.
            <p>
This method sends an application ID to the remote service.
            </p>
           
 *
 * @param {ApplicationId} appId
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf RemoteAppControlService
 * @returns {void}
 */
RemoteAppControlService.prototype.launch = function(appId, successCallback, errorCallback){ return; };

/**
 * Sends an app control to launch an application on the remote device.
            <p>
This method sends an app control to the remote service.
            </p>
           
 *
 * @param {ApplicationControl} appControl
 * @param {ApplicationId} appId
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {RemoteAppControlCallback} replyCallback
 * @type void
 * @memberOf RemoteAppControlService
 * @returns {void}
 */
RemoteAppControlService.prototype.launchAppControl = function(appControl, appId, successCallback, errorCallback, replyCallback){ return; };

/**
 * The service connection state.
 *
 * @type ConnectionState
 */
Service.prototype.connectionState = new ConnectionState();

/**
 * The service type.
 *
 * @type ServiceType
 */
Service.prototype.type = new ServiceType();

/**
 * Called when device is discovered during the discovery procedure.
 *
 * @param {Device} device
 * @type void
 * @memberOf DiscoverySuccessCallback
 * @returns {void}
 */
DiscoverySuccessCallback.prototype.onfound = function(device){ return; };

/**
 * Called when the device discovery procedure has finished.
 *
 * @param {array} foundDevices
 * @type void
 * @memberOf DiscoverySuccessCallback
 * @returns {void}
 */
DiscoverySuccessCallback.prototype.onfinished = function(foundDevices){ return; };

/**
 * Called when the service connection is established.
 *
 * @param {Service} service
 * @type void
 * @memberOf ConnectSuccessCallback
 * @returns {void}
 */
ConnectSuccessCallback.prototype.onsuccess = function(service){ return; };

/**
 * Called when the service operation is successful.
 *
 * @param {ConvergenceChannelInfo} channelInfo
 * @type void
 * @memberOf AppCommunicationSuccessCallback
 * @returns {void}
 */
AppCommunicationSuccessCallback.prototype.onsuccess = function(channelInfo){ return; };

/**
 * The value indicating if the service is local (true) or remote (false).
 *
 * @type Boolean
 */
ClientInfo.prototype.isHost = new Boolean();

/**
 * The unique client id.
 *
 * @type String
 */
ClientInfo.prototype.clientId = new String();

/**
 * The connection time in milliseconds.
 *
 * @type Number
 */
ClientInfo.prototype.connectionTime = new Number();

/**
 * The Convergence API defines interfaces and methods for using Tizen device-to-device convergence services.
 * <p>
The following functionality is provided:
        </p>
 * <ul>
 * <li>Discovering of nearby devices which support device-to-device services
 * <li>Getting device and service information
 * <li>Connecting and disconnecting services
 * <li>Starting and stopping services
 * <li>Sending data to services
 * <li>Listening to notifications from the service
 * </ul>
 * <p>
The collection of supported device-to-device services includes:
        </p>
 * <ul>
 * <li>- Allows launching an application on a remote device.
 * <li>- Allows transferring data between applications on local and remote devices. Note that there are 'client' and 'server' implementations of this service which allows easy setting-up and convenient handling of the data exchange process on both local and remote devices. For better flexibility, the data transfer occurs in named user-defined communication channels.
 * </ul>
 * <p>
For more information on the device-to-device Convergence features,
see the <a href="http://127.0.0.1:34603/help/topic/org.tizen.mobile.web.appprogramming/html/guide/communication_guide/convergence.htm">Convergence API Guide</a>.
        </p>
 * <p>
Tizen 3.0 only supports WiFi, More connectivity, such as BT/BLE and WiFi Direct, is to be supported in further versions.
        </p>
 * <p>
Limitation : wireless access point supporting multicast function is needed to use RemoteAppControlService API
        </p>
 *
 * @feature http://tizen.org/feature/convergence.d2d
 * @type ConvergenceManager
 */
ConvergenceObject.prototype.convergence = new ConvergenceManager();

/**
 * Connects to the service.
            <p>
Makes physical connection such as Bluetooth to the service.
            </p>
           
 *
 * @param {ConnectSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf AppCommunicationClientService
 * @returns {void}
 */
AppCommunicationClientService.prototype.connect = function(successCallback, errorCallback){ return; };

/**
 * Disconnects the connected service.
            <p>
Disconnect physical connection with device-to-device service.
            </p>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf AppCommunicationClientService
 * @returns {void}
 */
AppCommunicationClientService.prototype.disconnect = function(successCallback, errorCallback){ return; };

/**
 * The Convergence API defines interfaces and methods for using Tizen device-to-device convergence services.
 * <p>
The following functionality is provided:
        </p>
 * <ul>
 * <li>Discovering of nearby devices which support device-to-device services
 * <li>Getting device and service information
 * <li>Connecting and disconnecting services
 * <li>Starting and stopping services
 * <li>Sending data to services
 * <li>Listening to notifications from the service
 * </ul>
 * <p>
The collection of supported device-to-device services includes:
        </p>
 * <ul>
 * <li>- Allows launching an application on a remote device.
 * <li>- Allows transferring data between applications on local and remote devices. Note that there are 'client' and 'server' implementations of this service which allows easy setting-up and convenient handling of the data exchange process on both local and remote devices. For better flexibility, the data transfer occurs in named user-defined communication channels.
 * </ul>
 * <p>
For more information on the device-to-device Convergence features,
see the <a href="http://127.0.0.1:34603/help/topic/org.tizen.mobile.web.appprogramming/html/guide/communication_guide/convergence.htm">Convergence API Guide</a>.
        </p>
 * <p>
Tizen 3.0 only supports WiFi, More connectivity, such as BT/BLE and WiFi Direct, is to be supported in further versions.
        </p>
 * <p>
Limitation : wireless access point supporting multicast function is needed to use RemoteAppControlService API
        </p>
 *
 * @feature http://tizen.org/feature/convergence.d2d
 * @type ConvergenceManager
 */
Tizen.prototype.convergence = new ConvergenceManager();

/**
 * This interface provides access to the object.
 *
 * @super Object
 * @constructor
 * @return {DataControlManager}
 */
function DataControlManager() {};
DataControlManager.prototype = new Object();

/**
 * This interface defines MAP data type operators.
 *
 * @super Object
 * @constructor
 * @return {MappedDataControlConsumer}
 */
function MappedDataControlConsumer() {};
MappedDataControlConsumer.prototype = new DataControlConsumerObject();

/**
 * This interface defines SQL data type operators.
 *
 * @super Object
 * @constructor
 * @return {SQLDataControlConsumer}
 */
function SQLDataControlConsumer() {};
SQLDataControlConsumer.prototype = new DataControlConsumerObject();

/**
 * This interface provides a SuccessCallback for SQLDataControlConsumer.select().
 *
 * @super Object
 * @constructor
 * @return {DataControlSelectSuccessCallback}
 */
function DataControlSelectSuccessCallback() {};
DataControlSelectSuccessCallback.prototype = new Object();

/**
 * This interface provides a SuccessCallback for DataControlConsumerObject.
 *
 * @super Object
 * @constructor
 * @return {DataControlSuccessCallback}
 */
function DataControlSuccessCallback() {};
DataControlSuccessCallback.prototype = new Object();

/**
 * This interface provides an ErrorCallback for DataControlConsumerObject.
 *
 * @super Object
 * @constructor
 * @return {DataControlErrorCallback}
 */
function DataControlErrorCallback() {};
DataControlErrorCallback.prototype = new Object();

/**
 * This interface provides a SuccessCallback for MapDataControlConsumer.getValue().
 *
 * @super Object
 * @constructor
 * @return {DataControlGetValueSuccessCallback}
 */
function DataControlGetValueSuccessCallback() {};
DataControlGetValueSuccessCallback.prototype = new Object();

/**
 * This interface provides a SuccessCallback for SQLDataControlConsumer.insert().
 *
 * @super Object
 * @constructor
 * @return {DataControlInsertSuccessCallback}
 */
function DataControlInsertSuccessCallback() {};
DataControlInsertSuccessCallback.prototype = new Object();

/**
 * Defines what is instantiated in the object.
          <p>
The <em>tizen.datacontrol</em> object allows access to the
DataControl API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {DataControlManagerObject}
 */
function DataControlManagerObject() {};
DataControlManagerObject.prototype = new Object();

/**
 * This interface provides common attributes for other derived DataControlConsumerObject.
 *
 * @super Object
 * @constructor
 * @return {DataControlConsumerObject}
 */
function DataControlConsumerObject() {};
DataControlConsumerObject.prototype = new Object();

/**
 * Gets with a given DataType.
 *
 * @param {String} providerId
 * @param {String} dataId
 * @param {DataType} type
 * @type DataControlConsumerObject
 * @memberOf DataControlManager
 * @returns {DataControlConsumerObject}
 */
DataControlManager.prototype.getDataControlConsumer = function(providerId, dataId, type){ var ret = new DataControlConsumerObject(); return ret; };

/**
 * Adds the value associated with the specified key to a key-values map owned by a MAP-type data control provider.
 *
 * @param {Number} reqId
 * @param {String} key
 * @param {String} value
 * @param {DataControlSuccessCallback} successCallback
 * @param {DataControlErrorCallback} errorCallback
 * @type void
 * @memberOf MappedDataControlConsumer
 * @returns {void}
 */
MappedDataControlConsumer.prototype.addValue = function(reqId, key, value, successCallback, errorCallback){ return; };

/**
 * Removes the value associated with the specified key from a key-values map owned by a MAP-type data control provider.
 *
 * @param {Number} reqId
 * @param {String} key
 * @param {String} value
 * @param {DataControlSuccessCallback} successCallback
 * @param {DataControlErrorCallback} errorCallback
 * @type void
 * @memberOf MappedDataControlConsumer
 * @returns {void}
 */
MappedDataControlConsumer.prototype.removeValue = function(reqId, key, value, successCallback, errorCallback){ return; };

/**
 * Gets the value associated with the specified key, from a key-values map owned by a MAP-type data control provider.
 *
 * @param {Number} reqId
 * @param {String} key
 * @param {DataControlGetValueSuccessCallback} successCallback
 * @param {DataControlErrorCallback} errorCallback
 * @type void
 * @memberOf MappedDataControlConsumer
 * @returns {void}
 */
MappedDataControlConsumer.prototype.getValue = function(reqId, key, successCallback, errorCallback){ return; };

/**
 * Sets the value associated with the specified key to a new value.
 *
 * @param {Number} reqId
 * @param {String} key
 * @param {String} oldValue
 * @param {String} newValue
 * @param {DataControlSuccessCallback} successCallback
 * @param {DataControlErrorCallback} errorCallback
 * @type void
 * @memberOf MappedDataControlConsumer
 * @returns {void}
 */
MappedDataControlConsumer.prototype.updateValue = function(reqId, key, oldValue, newValue, successCallback, errorCallback){ return; };

/**
 * Inserts new rows into a table owned by an SQL-type data control provider.
 *
 * @param {Number} reqId
 * @param {RowData} insertionData
 * @param {DataControlInsertSuccessCallback} successCallback
 * @param {DataControlErrorCallback} errorCallback
 * @type void
 * @memberOf SQLDataControlConsumer
 * @returns {void}
 */
SQLDataControlConsumer.prototype.insert = function(reqId, insertionData, successCallback, errorCallback){ return; };

/**
 * Updates values of a table owned by an SQL-type data control provider.
 *
 * @param {Number} reqId
 * @param {RowData} updateData
 * @param {String} where
 * @param {DataControlSuccessCallback} successCallback
 * @param {DataControlErrorCallback} errorCallback
 * @type void
 * @memberOf SQLDataControlConsumer
 * @returns {void}
 */
SQLDataControlConsumer.prototype.update = function(reqId, updateData, where, successCallback, errorCallback){ return; };

/**
 * Delete rows from a table that is owned by an SQL-type data control provider.
 *
 * @param {Number} reqId
 * @param {String} where
 * @param {DataControlSuccessCallback} successCallback
 * @param {DataControlErrorCallback} errorCallback
 * @type void
 * @memberOf SQLDataControlConsumer
 * @returns {void}
 */
SQLDataControlConsumer.prototype.remove = function(reqId, where, successCallback, errorCallback){ return; };

/**
 * Selects the specified columns to be queried. The result set of the specified columns is retrieved from a table owned by an SQL-type data control provider. If and parameters are not specified and result set contains more than 20 rows, only first 20 rows are included in the result.
 *
 * @param {Number} reqId
 * @param {array} columns
 * @param {String} where
 * @param {DataControlSelectSuccessCallback} successCallback
 * @param {DataControlErrorCallback} errorCallback
 * @param {Number} page
 * @param {Number} maxNumberPerPage
 * @param {String} order
 * @type void
 * @memberOf SQLDataControlConsumer
 * @returns {void}
 */
SQLDataControlConsumer.prototype.select = function(reqId, columns, where, successCallback, errorCallback, page, maxNumberPerPage, order){ return; };

/**
 * Called on success.
 *
 * @param {array} rows
 * @param {Number} reqId
 * @type void
 * @memberOf DataControlSelectSuccessCallback
 * @returns {void}
 */
DataControlSelectSuccessCallback.prototype.onsuccess = function(rows, reqId){ return; };

/**
 * Called on success.
 *
 * @param {Number} reqId
 * @type void
 * @memberOf DataControlSuccessCallback
 * @returns {void}
 */
DataControlSuccessCallback.prototype.onsuccess = function(reqId){ return; };

/**
 * Called on error.
 *
 * @param {Number} reqId
 * @param {WebAPIError} error
 * @type void
 * @memberOf DataControlErrorCallback
 * @returns {void}
 */
DataControlErrorCallback.prototype.onerror = function(reqId, error){ return; };

/**
 * Called on success.
 *
 * @param {array} values
 * @param {Number} reqid
 * @type void
 * @memberOf DataControlGetValueSuccessCallback
 * @returns {void}
 */
DataControlGetValueSuccessCallback.prototype.onsuccess = function(values, reqid){ return; };

/**
 * Called on success.
 *
 * @param {Number} reqId
 * @param {Number} insertRowId
 * @type void
 * @memberOf DataControlInsertSuccessCallback
 * @returns {void}
 */
DataControlInsertSuccessCallback.prototype.onsuccess = function(reqId, insertRowId){ return; };

/**
 * This specification defines a DataControl API for applications.
 * <p>
The DataControl functionality provides a way to access specific data that is exported by other applications.
        </p>
 * <p>
Please read the <a href="http://127.0.0.1:34603/help/topic/org.tizen.mobile.native.appprogramming/html/guide/app/data_controls.htm">Native DataControl API</a> to know how to share own application data with other applications.
        </p>
 *
 * @type DataControlManager
 */
DataControlManagerObject.prototype.datacontrol = new DataControlManager();

/**
 * An attribute to store the DataType.
 *
 * @type DataType
 */
DataControlConsumerObject.prototype.type = new DataType();

/**
 * An attribute to hold a provider identifier of the application with whom it shares the DataControl. This attribute should be known to users who want to interact with the application.
 *
 * @type String
 */
DataControlConsumerObject.prototype.providerId = new String();

/**
 * The dataId identifies specific data, usually a database table to process(insert, delete, update). The string consists of one or more components, separated by a slash('/').
 *
 * @type String
 */
DataControlConsumerObject.prototype.dataId = new String();

/**
 * This specification defines a DataControl API for applications.
 * <p>
The DataControl functionality provides a way to access specific data that is exported by other applications.
        </p>
 * <p>
Please read the <a href="http://127.0.0.1:34603/help/topic/org.tizen.mobile.native.appprogramming/html/guide/app/data_controls.htm">Native DataControl API</a> to know how to share own application data with other applications.
        </p>
 *
 * @type DataControlManager
 */
Tizen.prototype.datacontrol = new DataControlManager();

/**
 * The DownloadManager interface handles requests for downloading. Each step of a download operation is informed through callbacks.
 *
 * @super Object
 * @constructor
 * @return {DownloadManager}
 */
function DownloadManager() {};
DownloadManager.prototype = new Object();

/**
 * This interface defines the default download manager that is instantiated by the object. The object allows access to the functionality of the Download API.
 *
 * @super Object
 * @constructor
 * @return {DownloadManagerObject}
 */
function DownloadManagerObject() {};
DownloadManagerObject.prototype = new Object();

/**
 * The DownloadRequest interface defines the download request object.
 *
 * @super Object
 * @constructor
 * @return {DownloadRequest}
 */
function DownloadRequest() {};
DownloadRequest.prototype = new Object();

/**
 * The DownloadCallback defines notification callbacks for a download state change or progress.
 *
 * @super Object
 * @constructor
 * @return {DownloadCallback}
 */
function DownloadCallback() {};
DownloadCallback.prototype = new Object();

/**
 * Starts a download operation with the specified URL information.
 *
 * @param {DownloadRequest} downloadRequest
 * @param {DownloadCallback} downloadCallback
 * @type Number
 * @memberOf DownloadManager
 * @returns {Number}
 */
DownloadManager.prototype.start = function(downloadRequest, downloadCallback){ var ret = new Number(); return ret; };

/**
 * Cancels an ongoing download operation that is specified by the parameter.
 *
 * @param {Number} downloadId
 * @type void
 * @memberOf DownloadManager
 * @returns {void}
 */
DownloadManager.prototype.cancel = function(downloadId){ return; };

/**
 * Pauses an ongoing download operation that is specified by the parameter. The paused download operation can be resumed later by the method.
 *
 * @param {Number} downloadId
 * @type void
 * @memberOf DownloadManager
 * @returns {void}
 */
DownloadManager.prototype.pause = function(downloadId){ return; };

/**
 * Resumes a paused download operation that is specified by the parameter.
 *
 * @param {Number} downloadId
 * @type void
 * @memberOf DownloadManager
 * @returns {void}
 */
DownloadManager.prototype.resume = function(downloadId){ return; };

/**
 * Gets the download state of an operation synchronously with the specified ID.
 *
 * @param {Number} downloadId
 * @type DownloadState
 * @memberOf DownloadManager
 * @returns {DownloadState}
 */
DownloadManager.prototype.getState = function(downloadId){ var ret = new DownloadState(); return ret; };

/**
 * Gets the DownloadRequest object from a given ID.
 *
 * @param {Number} downloadId
 * @type DownloadRequest
 * @memberOf DownloadManager
 * @returns {DownloadRequest}
 */
DownloadManager.prototype.getDownloadRequest = function(downloadId){ var ret = new DownloadRequest(); return ret; };

/**
 * Gets the MIME type of the downloaded file.
 *
 * @param {Number} downloadId
 * @type String
 * @memberOf DownloadManager
 * @returns {String}
 */
DownloadManager.prototype.getMIMEType = function(downloadId){ var ret = new String(); return ret; };

/**
 * Sets the download callback to the download operation of the given ID. It's possible to change or register the listener of the download operation using the saved ID.
 *
 * @param {Number} downloadId
 * @param {DownloadCallback} downloadCallback
 * @type void
 * @memberOf DownloadManager
 * @returns {void}
 */
DownloadManager.prototype.setListener = function(downloadId, downloadCallback){ return; };

/**
 * This API provides methods to asynchronously download the contents of a URL to a storage.
 * <p>
For more information on the Download features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/content_guide/download.htm">Download Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/download
 * @type DownloadManager
 */
DownloadManagerObject.prototype.download = new DownloadManager();

/**
 * An attribute to store the URL of the object to download.
 *
 * @type String
 */
DownloadRequest.prototype.url = new String();

/**
 * An attribute to store the folder path of the destination folder to which a requested file object will be downloaded.
 * <p>
If the destination is not specified or is an empty string, the file will be downloaded to the default storage: "Downloads". For more information, see <a href="filesystem.html">Filesystem API</a>.
            </p>
 * <p>
The default value is an empty string.
            </p>
 *
 * @type String
 */
DownloadRequest.prototype.destination = new String();

/**
 * An attribute to store the file name for the specified URL.
 * <p>
If the file name is not given or is an empty string, the original file name from the URL is used.
            </p>
 * <p>
The default value is an empty string.
            </p>
 *
 * @type String
 */
DownloadRequest.prototype.fileName = new String();

/**
 * An attribute to store the allowed network type.
 * <p>
If the network type is not given, all network types are allowed.
            </p>
 * <p>
The default value is <var>ALL</var>.
            </p>
 *
 * @type DownloadNetworkType
 */
DownloadRequest.prototype.networkType = new DownloadNetworkType();

/**
 * An attribute to store extra HTTP header fields.
 * <p>
For more information about HTTP header fields, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec4.html#sec4.2">RFC-2616</a>            </p>
 * <p>
The default value is an empty object.
            </p>
 *
 * @type DownloadHTTPHeaderFields
 */
DownloadRequest.prototype.httpHeader = new DownloadHTTPHeaderFields();

/**
 * Called when a download is successful and it is called multiple times as the download progresses. The interval between the callback is platform-dependent. When the download is started, the can be .
 *
 * @param {Number} downloadId
 * @param {Number} receivedSize
 * @param {Number} totalSize
 * @type void
 * @memberOf DownloadCallback
 * @returns {void}
 */
DownloadCallback.prototype.onprogress = function(downloadId, receivedSize, totalSize){ return; };

/**
 * Called when the download operation is paused by the method.
 *
 * @param {Number} downloadId
 * @type void
 * @memberOf DownloadCallback
 * @returns {void}
 */
DownloadCallback.prototype.onpaused = function(downloadId){ return; };

/**
 * Called when the download operation is canceled by the method.
 *
 * @param {Number} downloadId
 * @type void
 * @memberOf DownloadCallback
 * @returns {void}
 */
DownloadCallback.prototype.oncanceled = function(downloadId){ return; };

/**
 * Called when the download operation is completed with the final full path or virtual path. If the same file name already exists in the destination, it is changed according to the platform policy and delivered in this callback.
 *
 * @param {Number} downloadId
 * @param {String} path
 * @type void
 * @memberOf DownloadCallback
 * @returns {void}
 */
DownloadCallback.prototype.oncompleted = function(downloadId, path){ return; };

/**
 * Called when the download operation fails.
 *
 * @param {Number} downloadId
 * @param {WebAPIError} error
 * @type void
 * @memberOf DownloadCallback
 * @returns {void}
 */
DownloadCallback.prototype.onfailed = function(downloadId, error){ return; };

/**
 * This API provides methods to asynchronously download the contents of a URL to a storage.
 * <p>
For more information on the Download features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/content_guide/download.htm">Download Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/download
 * @type DownloadManager
 */
Tizen.prototype.download = new DownloadManager();

/**
 * The ExifThumbnailSuccessCallback interface provides a success callback that is invoked when the Exif thumbnail has been retrieved. This callback interface specifies a success method with the URI for the thumbnail as an input parameter. It is used in exif.getThumbnail().
 *
 * @super Object
 * @constructor
 * @return {ExifThumbnailSuccessCallback}
 */
function ExifThumbnailSuccessCallback() {};
ExifThumbnailSuccessCallback.prototype = new Object();

/**
 * The ExifInformation interface implements the object.
          <p>
When the format of a value is given in the attribute description then this format should be followed when updating values.
          </p>
          <p>
Every Exif related attribute is nullable - null means that this information is missing in the file.
By setting an attribute to null and saving <em>ExifInformation</em> one can remove that Exif tag from the file.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ExifInformation}
 */
function ExifInformation() {};
ExifInformation.prototype = new Object();

/**
 * The ExifManagerObject interface defines what is instantiated by the object from the Tizen Platform. The object allows access to the Exif data of a JPEG file.
 *
 * @super Object
 * @constructor
 * @return {ExifManagerObject}
 */
function ExifManagerObject() {};
ExifManagerObject.prototype = new Object();

/**
 * The ExifInformationSuccessCallback interface provides a success callback that is invoked when the Exif information object has been retrieved. This callback interface specifies a success method with an object as an input parameter. It is used in exif.getExifInfo().
 *
 * @super Object
 * @constructor
 * @return {ExifInformationSuccessCallback}
 */
function ExifInformationSuccessCallback() {};
ExifInformationSuccessCallback.prototype = new Object();

/**
 * The ExifManager interface provides methods to retrieve the object and save the Exif data of the object in a JPEG file.
          <p>
It provides access to the API functionalities through the <em>tizen.exif</em> interface.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ExifManager}
 */
function ExifManager() {};
ExifManager.prototype = new Object();

/**
 * Called when the thumbnail of the JPEG file has been successfully retrieved.
 *
 * @param {String} uri
 * @type void
 * @memberOf ExifThumbnailSuccessCallback
 * @returns {void}
 */
ExifThumbnailSuccessCallback.prototype.onsuccess = function(uri){ return; };

/**
 * URI of the image.
 * <p>
The path to the file from which <em>ExifInformation</em> data is collected.
            </p>
 *
 * @type String
 */
ExifInformation.prototype.uri = new String();

/**
 * Width of the image i.e. the number of points (pixels) per image line.
 * <p>
Note if the value of this attribute is changed, the new value is not verified against the actual size of the image.
            </p>
 *
 * @type Number
 */
ExifInformation.prototype.width = new Number();

/**
 * Height of the image i.e. the number of lines in the image.
 * <p>
Note if the value of this attribute is changed, the new value is not verified against the actual size of the image.
            </p>
 *
 * @type Number
 */
ExifInformation.prototype.height = new Number();

/**
 * Name of the camera manufacturer.
 *
 * @type String
 */
ExifInformation.prototype.deviceMaker = new String();

/**
 * Model name or model number of the camera or input device.
 *
 * @type String
 */
ExifInformation.prototype.deviceModel = new String();

/**
 * Date and time when the picture was taken.
 *
 * @type Date
 */
ExifInformation.prototype.originalTime = new Date();

/**
 * Orientation of the image when displayed.
 * <p>
This attribute shows the relation between the stored image data and the visual content orientation.
In other words - how a stored image should be oriented when presented to the user.
            </p>
 *
 * @type ImageContentOrientation
 */
ExifInformation.prototype.orientation = new ImageContentOrientation();

/**
 * The f-number when the image was taken.
 * <p>
Exif specification: "Conversion is not made to the focal length of a 35 mm film".
            </p>
 * <p>
The <a href="http://en.wikipedia.org/wiki/F-number">f-number</a> is the ratio of the lens' focal length to the diameter of the entrance pupil.
F-number is also called focal ratio, f-ratio, f-stop, or relative aperture.
Example values: 1.4, 2, 2.8, 4, 5.6, 8, 11 ...
            </p>
 *
 * @type Number
 */
ExifInformation.prototype.fNumber = new Number();

/**
 * Photo sensitivity (also called ISO speed and ISO latitude) of the camera or input device.
 * <p>
Example values: 80, 100, 200, 400, 800, 1600, 3200 ..
            </p>
 *
 * @type array
 */
ExifInformation.prototype.isoSpeedRatings = new array();

/**
 * Exposure time, given in seconds.
 * <p>
If exposure time is below one second it is expressed as 1/x.
For example: 1 second exposure is "1", 0.25s is "1/4".
            </p>
 *
 * @type String
 */
ExifInformation.prototype.exposureTime = new String();

/**
 * Exposure balance program used by the camera to set exposure when the picture was taken.
 *
 * @type ExposureProgram
 */
ExifInformation.prototype.exposureProgram = new ExposureProgram();

/**
 * Boolean value that indicates whether flash was fired when the picture was taken (true: flash fired).
 *
 * @type Boolean
 */
ExifInformation.prototype.flash = new Boolean();

/**
 * Focal length of the lens, given in mm.
 *
 * @type Number
 */
ExifInformation.prototype.focalLength = new Number();

/**
 * White balance mode set when the picture was taken.
 *
 * @type WhiteBalanceMode
 */
ExifInformation.prototype.whiteBalance = new WhiteBalanceMode();

/**
 * Latitude and longitude of the camera (from GPS) when the picture was taken.
 *
 * @type SimpleCoordinates
 */
ExifInformation.prototype.gpsLocation = new SimpleCoordinates();

/**
 * Altitude (from GPS) of the camera when the picture was taken.
 * <p>
This value is expressed in meters above sea level (can be negative).
            </p>
 *
 * @type Number
 */
ExifInformation.prototype.gpsAltitude = new Number();

/**
 * Name of the method used for finding the location.
 *
 * @type String
 */
ExifInformation.prototype.gpsProcessingMethod = new String();

/**
 * Date and time information relative to UTC (Universal Time Coordinated) provided by GPS when the photo was taken.
 *
 * @type TZDate
 */
ExifInformation.prototype.gpsTime = new TZDate();

/**
 * User comment.
 *
 * @type String
 */
ExifInformation.prototype.userComment = new String();

/**
 * The Exif API provides interfaces and methods for manipulating data from a JPEG file. The object provides methods to retrieve the object from a JPEG file and save the Exif data from the object in the JPEG file. The object provides functionality to get and set the Exif attributes corresponding to the Exif tag. Changing the value of the attribute in the object stores the Exif data in the object. It does not change data in the JPEG file. For applying the modified Exif data to the JPEG file, the saveExifInfo() method of the object should be called with the object that has the modified Exif data.
 * <p>
For more information about how to use Exif API, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/content_guide/exif.htm">Exif Guide</a>.
        </p>
 *
 * @type ExifManager
 */
ExifManagerObject.prototype.exif = new ExifManager();

/**
 * Called when the Exif information object has been successfully retrieved.
 *
 * @param {ExifInformation} exifInfo
 * @type void
 * @memberOf ExifInformationSuccessCallback
 * @returns {void}
 */
ExifInformationSuccessCallback.prototype.onsuccess = function(exifInfo){ return; };

/**
 * Gets the object to manipulate the Exif data in a JPEG file.
            <p>
This function returns (via callback) the <em>ExifInformation</em> object that contains the Exif data in the JPEG file.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError: If the file of the input parameters is not found or the file does not contain Exif data              </li>
              <li>
IOError: If access to the image file is denied due to insufficient permissions              </li>
              <li>
InvalidValuesError: If any input parameter contains invalid values              </li>
              <li>
UnknownError: In any other error case              </li>
            </ul>
           
 *
 * @param {String} uri
 * @param {ExifInformationSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ExifManager
 * @returns {void}
 */
ExifManager.prototype.getExifInfo = function(uri, successCallback, errorCallback){ return; };

/**
 * Saves the Exif data of the object into the JPEG file.
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError: If the file of the input parameters is not found              </li>
              <li>
InvalidValuesError: If any input parameter contains invalid values              </li>
              <li>
UnknownError: In any other error case              </li>
            </ul>
           
 *
 * @param {ExifInformation} exifInfo
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ExifManager
 * @returns {void}
 */
ExifManager.prototype.saveExifInfo = function(exifInfo, successCallback, errorCallback){ return; };

/**
 * Gets the thumbnail of the specified JPEG file. If there is no thumbnail in the JPEG file, is returned.
            <p>
<em>successCallback</em> is invoked with a URI as the first argument.
This URI is a <a href="http://en.wikipedia.org/wiki/Data_URI_scheme">data URI</a>.
It can be used as an src attribute value of the img element.
            </p>
            <p>
The errorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError: If the file of the input parameters is not found              </li>
              <li>
IOError: If access to the thumbnail file is denied due to insufficient permissions              </li>
              <li>
InvalidValuesError: If any of the input parameters contains an invalid value              </li>
              <li>
UnknownError: In any other error case              </li>
            </ul>
           
 *
 * @param {String} uri
 * @param {ExifThumbnailSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ExifManager
 * @returns {void}
 */
ExifManager.prototype.getThumbnail = function(uri, successCallback, errorCallback){ return; };

/**
 * The Exif API provides interfaces and methods for manipulating data from a JPEG file. The object provides methods to retrieve the object from a JPEG file and save the Exif data from the object in the JPEG file. The object provides functionality to get and set the Exif attributes corresponding to the Exif tag. Changing the value of the attribute in the object stores the Exif data in the object. It does not change data in the JPEG file. For applying the modified Exif data to the JPEG file, the saveExifInfo() method of the object should be called with the object that has the modified Exif data.
 * <p>
For more information about how to use Exif API, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/content_guide/exif.htm">Exif Guide</a>.
        </p>
 *
 * @type ExifManager
 */
Tizen.prototype.exif = new ExifManager();

/**
 * This interface provides access to the object.
 *
 * @super Object
 * @constructor
 * @return {FeedbackManager}
 */
function FeedbackManager() {};
FeedbackManager.prototype = new Object();

/**
 * This interface defines what is instantiated by the object from the Tizen platform.
          <p>
There is a <em>tizen.feedback</em> object that allows access to the Feedback API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FeedbackManagerObject}
 */
function FeedbackManagerObject() {};
FeedbackManagerObject.prototype = new Object();

/**
 * Plays various types of reactions that are pre-defined.
            <p>
This functon can be used to react to pre-defined actions. It play various types of system pre-defined media or vibration patterns.
Currently, there are two types of reactions: sound and vibration. Depending on the settings, some types cannot operate.
For example, when set to silent mode, the device does not produce any sound.
If this method is called without the <em>type</em> value, <em>patterns</em> are played specific feedback type depend on the device settings.
            </p>
           
 *
 * @param {FeedbackPattern} pattern
 * @param {FeedbackType} type
 * @type void
 * @memberOf FeedbackManager
 * @returns {void}
 */
FeedbackManager.prototype.play = function(pattern, type){ return; };

/**
 * Stop various of vibration patterns.
            <p>
This function can be used to stop various types of vibration reactions that are pre-defined.
            </p>
           
 *
 * @type void
 * @memberOf FeedbackManager
 * @returns {void}
 */
FeedbackManager.prototype.stop = function(){ return; };

/**
 * Checks if a pattern is supported.
 *
 * @param {FeedbackPattern} pattern
 * @param {FeedbackType} type
 * @type Boolean
 * @memberOf FeedbackManager
 * @returns {Boolean}
 */
FeedbackManager.prototype.isPatternSupported = function(pattern, type){ var ret = new Boolean(); return ret; };

/**
 * The Feedback API provides functions to play sound or vibration associated with action.
 * <p>
It's responsible for playing simple sound and vibration
        </p>
 *
 * @type FeedbackManager
 */
FeedbackManagerObject.prototype.feedback = new FeedbackManager();

/**
 * The Feedback API provides functions to play sound or vibration associated with action.
 * <p>
It's responsible for playing simple sound and vibration
        </p>
 *
 * @type FeedbackManager
 */
Tizen.prototype.feedback = new FeedbackManager();

/**
 * The FileStringSuccessCallback callback interface specifies a success callback with a DOMString object as input argument.
          <p>
It is used in asynchronous operations, such as File.readAsText().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileStringSuccessCallback}
 */
function FileStringSuccessCallback() {};
FileStringSuccessCallback.prototype = new Object();

/**
 * The FileSystemStorageSuccessCallback callback interface specifies a success callback with a object as input argument.
          <p>
It is used in asynchronous operations, such as FileSystemManager.getStorage() and FileSystemManager.addStorageStateChangeListener().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemStorageSuccessCallback}
 */
function FileSystemStorageSuccessCallback() {};
FileSystemStorageSuccessCallback.prototype = new Object();

/**
 * The FileSystemManager interface provides access to the Filesystem API.
          <p>
This manager interface exposes the Filesystem base API, and provides functionalities, such
as determining root and default locations, resolving a given location into a file handle, and registering filesystem listeners for filesystem events.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemManager}
 */
function FileSystemManager() {};
FileSystemManager.prototype = new Object();

/**
 * The FileStream interface represents a handle to a File opened for read and/or write operations. Read and write operations are performed relative to a position attribute, which is a pointer that represents the current position in the file.
          <p>
A series of read/write methods are available that permit both binary and text to be processed.
          </p>
          <p>
Once a file stream is closed, any operation attempt made on this stream results in a standard JavaScript error.
          </p>
          <p>
The read/write operations in this interface do not throw any security exceptions as the access rights are expected to be granted through the initial resolve() method or through the openStream() method of the <em>File </em>interface. Therefore, all actions performed on a successfully resolved File and FileStream are expected to succeed. This avoids successive asynchronous calls and may potentially increase application for a user.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileStream}
 */
function FileStream() {};
FileStream.prototype = new Object();

/**
 * The FileSuccessCallback interface defines file system success callback with a object as input argument.
          <p>
It is used in asynchronous operations, such as FileSystemManager.resolve(), copying, moving, and deleting files.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSuccessCallback}
 */
function FileSuccessCallback() {};
FileSuccessCallback.prototype = new Object();

/**
 * The File interface represents the file abstraction in use. A file handle represents a file if the property is , and if the property is , the file handle represents a directory. If a file handle represents a directory, it can address files and directories.
          <p>
The file object permissions for the file object location and tree rooted
at that location depends upon the mode defined in the resolve method.
When a File object creates a child File object,
the new File object inherits its access rights from
the parent object without any reference to the security framework, as
noted in certain methods of File.
          </p>
          <p>
A file handle representing a file can be opened for I/O operations,
such as reading and writing.
          </p>
          <p>
A file handle representing a directory can be used for listing all
files and directories rooted as the file handle location.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {File}
 */
function File() {};
File.prototype = new Object();

/**
 * The FileSystemStorage interface gives additional information about a storage, such as if the device is mounted, if it is a removable drive or not, or the device's name.
          <p>
To retrieve the mount point, the resolve() method should be used using the label as argument.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemStorage}
 */
function FileSystemStorage() {};
FileSystemStorage.prototype = new Object();

/**
 * The FileSystemManagerObject interface defines what is instantiated by the Tizen object.
          <p>
There is a <em>tizen.filesystem </em>object that allows accessing the functionality of the Filesystem API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemManagerObject}
 */
function FileSystemManagerObject() {};
FileSystemManagerObject.prototype = new Object();

/**
 * The FileStreamSuccessCallback interface specifies a success callback with a object as input argument.
          <p>
It is used by asynchronous methods, such as File.openStream().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileStreamSuccessCallback}
 */
function FileStreamSuccessCallback() {};
FileStreamSuccessCallback.prototype = new Object();

/**
 * The FileSystemStorageArraySuccessCallback callback interface specifies a success callback with an array of FileSystemStorage objects as input argument.
          <p>
It is used in asynchronous operations, such as FileSystemManager.listStorages().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileSystemStorageArraySuccessCallback}
 */
function FileSystemStorageArraySuccessCallback() {};
FileSystemStorageArraySuccessCallback.prototype = new Object();

/**
 * The FileArraySuccessCallback interface defines file system specific success callback for listing methods.
          <p>
This callback interface specifies a success callback with a function taking an array of <em>File </em>objects as input argument. It is used in asynchronous methods, such as File.listFiles().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {FileArraySuccessCallback}
 */
function FileArraySuccessCallback() {};
FileArraySuccessCallback.prototype = new Object();

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {String} fileStr
 * @type void
 * @memberOf FileStringSuccessCallback
 * @returns {void}
 */
FileStringSuccessCallback.prototype.onsuccess = function(fileStr){ return; };

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {FileSystemStorage} storage
 * @type void
 * @memberOf FileSystemStorageSuccessCallback
 * @returns {void}
 */
FileSystemStorageSuccessCallback.prototype.onsuccess = function(storage){ return; };

/**
 * The maximum path length limit for the current platform.
 *
 * @type Number
 */
FileSystemManager.prototype.maxPathLength = new Number();

/**
 * Resolves a location to a file handle after validating it.
            <p>
A <em>location</em> can contain a virtual path like '<var>documents/some_file.txt</var>'
or a file URI like '<var>file:///my_strange_path/some_file.png</var>'.
A <em>location</em> is not allowed to contain the "." or ".." substrings in its value.
            </p>
            <p>
The list of root locations that must be supported by a compliant implementation are:
            </p>
            <ul>
              <li>
documents - The default folder in which text documents (such as pdf, doc...) are stored by default in a device. For example, in some platforms it corresponds to the "My Documents" folder.              </li>
              <li>
images - The default folder in which still images, like pictures (in formats including jpg, gif, png, etc.), are stored in the device by default. For example, in some platforms it corresponds to the "My Images" folder.              </li>
              <li>
music - The default folder in which sound clips (in formats including mp3, aac, etc.) are stored in the device by default. For example, in some platforms it corresponds to the "My Music" folder.              </li>
              <li>
videos - The default folder in which video clips (in formats including avi, mp4, etc.) are stored in the device by default. For example, in some platforms it corresponds to the "My Videos" folder.              </li>
              <li>
downloads - The default folder in which downloaded files (from sources including browser, e-mail client, etc.) are stored by default in the device. For example, in some platforms it corresponds to the "Downloads" folder.              </li>
              <li>
ringtones: The default folder in which ringtones (such as mp3, etc) are stored in the device.              </li>
              <li>
camera : The default folder in which pictures and videos taken by a device are stored.              </li>
              <li>
wgt-package - The read-only folder to which the content of a widget file is extracted.              </li>
              <li>
wgt-private - The private folder in which a widget stores its information. This folder must be accessible only to the same widget and other widgets or applications must not be able to access the stored information.              </li>
              <li>
wgt-private-tmp - Temporary, the private folder in which a widget can store data that is available during a widget execution cycle. Content of this folder can be removed from this directory when the widget is closed or the Web Runtime is restarted. This folder must be accessible only to the same widget and other widgets or applications must not be able to access it.              </li>
            </ul>
            <p>
The <em>mode </em>parameter specifies whether the resulting <em>File </em>object has read-only access ("r" access), read and write access ("rw" access), append access ("a" access), or write access ("w" access) to the root location containing directory tree.
Permission for the requested access is obtained from the security framework. Once the resulting <em>File </em>object has access, access is inherited by any other <em>File </em>objects that are derived from this instance without any further reference to the security framework, as noted in descriptions of certain methods of <em>File</em>.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.
For example, the mode is "w" for the read-only virtual roots (wgt-package and ringtones).              </li>
              <li>
NotFoundError - If the location input argument does not correspond to a valid location.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {String} location
 * @param {FileSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {FileMode} mode
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.resolve = function(location, onsuccess, onerror, mode){ return; };

/**
 * Gets information about a storage based on its label.For example: "MyThumbDrive", "InternalFlash".
            <p>
The <em>onsuccess </em>method receives the data structure as an input argument containing additional information about the drive.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If no drive was found with the given label.              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs.               </li>
            </ul>
           
 *
 * @param {String} label
 * @param {FileSystemStorageSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.getStorage = function(label, onsuccess, onerror){ return; };

/**
 * Lists the available storages (both internal and external) on a device. The onsuccess method receives a list of the data structures as input argument containing additional information about each drive found. It gets storages which are labeled as 'internal0', labeled after virtual roots ('images', 'documents', etc.) and labeled with prefix 'removable_' (for external storages). The vfat filesystem used to sdcard filesystem widely is not case-sensitive. If you want to handle the file on sdcard, you need to consider case-sensitive filenames are regarded as same name.
            <p>
Labels can differ depending on platform implementation.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {FileSystemStorageArraySuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.listStorages = function(onsuccess, onerror){ return; };

/**
 * Adds a listener to subscribe to notifications when a change in storage state occurs.
            <p>
The most common usage for this method is to watch for any additions and removals of external storages.
            </p>
            <p>
When executed, it returns a subscription identifier that identifies the watch operation. After returning the identifier, the watch operation is started asynchronously. The onsuccess method will be invoked every time a storage state changes. If the attempt fails, the onerror if present will be invoked with the relevant error type.
            </p>
            <p>
The watch operation must continue until the removeStorageStateChangeListener() method is called with the corresponding subscription identifier.
            </p>
           
 *
 * @param {FileSystemStorageSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type Number
 * @memberOf FileSystemManager
 * @returns {Number}
 */
FileSystemManager.prototype.addStorageStateChangeListener = function(onsuccess, onerror){ var ret = new Number(); return ret; };

/**
 * Removes a listener to unsubscribe from a storage watch operation.
            <p>
If the <em>watchId </em>argument is valid and corresponds to a subscription already in place, the watch process will be stopped and no further callbacks will be invoked.
Otherwise, the method call has no effect.
            </p>
           
 *
 * @param {Number} watchId
 * @type void
 * @memberOf FileSystemManager
 * @returns {void}
 */
FileSystemManager.prototype.removeStorageStateChangeListener = function(watchId){ return; };

/**
 * The flag indicating whether the current file pointer is at the end of the file.
 * <p>
If set to <var>true</var>, this attribute indicates that the file pointer is at the end of the file.
            </p>
 * <p>
If set to <var>false</var>, this attribute indicates that the file pointer is not at the end of the file and so it is anywhere within the file.
            </p>
 *
 * @type Boolean
 */
FileStream.prototype.eof = new Boolean();

/**
 * The flag indicating the stream position for reads/writes.
 * <p>
The stream position is an offset of bytes from the start of the file stream. When invoking an operation that reads or writes from the stream, the operation will take place from the byte defined by this <em>position </em>attribute. If the read or write operation is successful, the position of the stream is advanced by the number of bytes read or written. If the read/write operation is not successful, the position of the stream is unchanged.
            </p>
 *
 * @type Number
 */
FileStream.prototype.position = new Number();

/**
 * The number of bytes that are available for reading from the stream.
 * <p>
The number of bytes available for reading is the maximum amount of bytes that can be read in the next read operation.
It corresponds to the number of bytes available after the file pointer denoted by the <em>position </em>attribute.
            </p>
 * <p>
<var>-1 </var>if EOF is <var>true</var>.
            </p>
 *
 * @type Number
 */
FileStream.prototype.bytesAvailable = new Number();

/**
 * Closes this FileStream.
            <p>
Flushes any pending buffered writes and closes the File. Always succeeds.
Note that pending writes might not succeed.
            </p>
           
 *
 * @type void
 * @memberOf FileStream
 * @returns {void}
 */
FileStream.prototype.close = function(){ return; };

/**
 * Reads the specified number of characters from the position of the file pointer in a FileStream and returns the characters as a string. The resulting string length might be shorter than if EOF is .
 *
 * @param {Number} charCount
 * @type String
 * @memberOf FileStream
 * @returns {String}
 */
FileStream.prototype.read = function(charCount){ var ret = new String(); return ret; };

/**
 * Reads the specified number of bytes from a FileStream.
 *
 * @param {Number} byteCount
 * @type array
 * @memberOf FileStream
 * @returns {array}
 */
FileStream.prototype.readBytes = function(byteCount){ var ret = new array(); return ret; };

/**
 * Reads the specified number of bytes from this FileStream, encoding the result in base64.
 *
 * @param {Number} byteCount
 * @type String
 * @memberOf FileStream
 * @returns {String}
 */
FileStream.prototype.readBase64 = function(byteCount){ var ret = new String(); return ret; };

/**
 * Writes the specified DOMString to a FileStream.
 *
 * @param {String} stringData
 * @type void
 * @memberOf FileStream
 * @returns {void}
 */
FileStream.prototype.write = function(stringData){ return; };

/**
 * Writes the specified bytes to this FileStream.
 *
 * @param {array} byteData
 * @type void
 * @memberOf FileStream
 * @returns {void}
 */
FileStream.prototype.writeBytes = function(byteData){ return; };

/**
 * Writes the result to this FileStream after converting the specified base64 DOMString to bytes.
 *
 * @param {String} base64Data
 * @type void
 * @memberOf FileStream
 * @returns {void}
 */
FileStream.prototype.writeBase64 = function(base64Data){ return; };

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {File} file
 * @type void
 * @memberOf FileSuccessCallback
 * @returns {void}
 */
FileSuccessCallback.prototype.onsuccess = function(file){ return; };

/**
 * The parent directory handle.
 * <p>
This attribute is set to<var>null</var> if there is no parent directory. This also implies that this directory represents a root location.
            </p>
 *
 * @type File
 */
File.prototype.parent = new File();

/**
 * The file/directory access state in the filesystem.
 * <p>
This attribute is set to:
            </p>
 * <ul>
 * <li>- if object has read-only access at its location.
 * <li>- if object has write access at its location.
 * </ul>
 * <p>
This attribute represents the actual state of a file or directory in the filesystem. Its value is not affected by the mode used in FileSystemManager.resolve() that was used to create the <em>File </em>object from which this <em>File </em>object was obtained.
            </p>
 *
 * @type Boolean
 */
File.prototype.readOnly = new Boolean();

/**
 * The flag indicating whether it is a file.
 * <p>
This attribute can have the following values:
            </p>
 * <ul>
 * <li>if this handle is a file
 * <li>if this handle is a directory
 * </ul>
 *
 * @type Boolean
 */
File.prototype.isFile = new Boolean();

/**
 * The flag indicating whether it is a directory.
 * <p>
This attribute can have the following values:
            </p>
 * <ul>
 * <li>if this handle is a directory
 * <li>if this handle is a file
 * </ul>
 *
 * @type Boolean
 */
File.prototype.isDirectory = new Boolean();

/**
 * The timestamp when a file is first created in the filesystem.
 * <p>
This timestamp is equivalent to the timestamp when a call to createFile() succeeds.
            </p>
 * <p>
If the platform does not support this attribute, it will
be <var>null</var>.
            </p>
 * <p>
It is unspecified and platform-dependent if the creation
timestamp changes when a file is moved.
            </p>
 *
 * @type Date
 */
File.prototype.created = new Date();

/**
 * The timestamp when the most recent modification is made to a file, usually when the last write operation succeeds.
 * <p>
Opening a file for reading does not change the modification timestamp.
            </p>
 * <p>
If the platform does not support this attribute, it will be <em>null</em>.
            </p>
 * <p>
It is unspecified and platform-dependent if the modified
timestamp changes when a file is moved.
            </p>
 *
 * @type Date
 */
File.prototype.modified = new Date();

/**
 * The path of a file after excluding its file name.
 * <p>
It begins with the name of the root containing the file, followed by the path, including the directory containing the file, but excluding the file name.
            </p>
 * <p>
Except in some special cases of the File representing the root itself, the last
character is always '/'.
            </p>
 * <p>
For example, if a file is located at music/ramones/volume1/RockawayBeach.mp3,
the path is music/ramones/volume1/.
            </p>
 * <p>
For example, if a directory is located at music/ramones/volume1, the path is
music/ramones/.
            </p>
 * <p>
For the virtual roots, the path is same as the name of the virtual root.
For example, if the root is music, then the path is music. If the root is documents, then the path is documents.
            </p>
 *
 * @type String
 */
File.prototype.path = new String();

/**
 * The file name after excluding the root name and any path components.
 * <p>
This is the name of this file, excluding the root name and any other path components.
            </p>
 * <p>
For example, if a file is located at
music/ramones/volume1/RockawayBeach.mp3, the <em>name </em> is 'RockawayBeach.mp3'.
            </p>
 * <p>
For example, if a directory is located at music/ramones/volume1, the
<em>name </em> is be 'volume1'.
            </p>
 * <p>
For the special case of the root itself, the <em>name </em> is an empty string.
            </p>
 *
 * @type String
 */
File.prototype.name = new String();

/**
 * The full path of a file.
 * <p>
It begins with the name of the root containing the file,
and including the name of the file or directory itself.
            </p>
 * <p>
For instance, if the RockawayBeach.mp3 file is located at music/ramones/volume1/, then the <em>fullPath </em>is music/ramones/volume1/RockawayBeach.mp3.
            </p>
 * <p>
For a directory, if the volume1 directory is located at music/ramones/, then the <em>fullPath </em>is music/ramones/volume1.
            </p>
 * <p>
For the special case of the root itself, if the root is music, then the <em>fullPath </em>is music.
            </p>
 * <p>
The <em>fullPath </em>is always equal to path + name.
            </p>
 *
 * @type String
 */
File.prototype.fullPath = new String();

/**
 * The size of this file, in bytes.
 * <p>
If an attempt to read this attribute for a directory is made, <var>undefined</var> is returned. To retrieve the number of files and directories contained in the directory, use the <em>length </em>attribute.
            </p>
 *
 * @type Number
 */
File.prototype.fileSize = new Number();

/**
 * The number of files and directories contained in a file handle.
 * <p>
If an attempt to read this attribute for a file is made, <var>undefined</var> is returned. To retrieve the size of a file, use the <em>fileSize </em>attribute.
            </p>
 *
 * @type Number
 */
File.prototype.length = new Number();

/**
 * Returns a URI for a file to identify an entry (such as using it as the src attribute on an HTML img element). The URI has no specific expiration, it should be valid at least as long as the file exists.
            <p>
If that URI corresponds to any of the public virtual roots (that is
images, videos, music, documents, and downloads) the URI
must be globally unique and could be used by any widget.
            </p>
            <p>
If that URI corresponds to a file located in any a widget's private areas (such as wgt-package, wgt-private, wgt-private-tmp),
the generated URI must be unique for that file and for the widget making the request (such as including some derived from the widget ID in the URI).
These URIs must not be accessible to other widgets, apart from the one invoking this method.
            </p>
           
 *
 * @type String
 * @memberOf File
 * @returns {String}
 */
File.prototype.toURI = function(){ var ret = new String(); return ret; };

/**
 * Lists all files in a directory.
            <p>
The list of files is passed as a File[] in onsuccess() and contains directories and files. However, the directories "." and ".." must not be returned. Each <em>File </em>object that is part of the array must inherit all the access rights (that is, one of the values in FileMode) from the <em>File </em>object in which this method is invoked.
            </p>
            <p>
If the filter is passed and contains valid values, only those directories and files in the directory that match the filter criteria specified in the <em>FileFilter </em>interface must be returned in the onsuccess() method. If no filter is passed, the filter is <var>null </var>or <var>undefined</var>, or the filter contains invalid values, the implementation must return the full list of files in the directory.
            </p>
            <p>
If the directory does not contain any files or directories, or the filter criteria does not matched with any files or directories, the onsuccess() is invoked with an empty array.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
IOError - If the operation is launched on a file (not a directory).              </li>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {FileArraySuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {FileFilter} filter
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.listFiles = function(onsuccess, onerror, filter){ return; };

/**
 * Opens the file in the given mode supporting a specified encoding.
            <p>
This operation is performed asynchronously. If the file is opened successfully, the onsuccess() method is invoked with a <em>FileStream</em> that can be used for reading and writing the file, depending on the mode. The returned <em>FileStream </em>instance includes a file pointer, which represents the current position in the file. The file pointer, by default, is at the start of the file, except in the case of opening a file in append ("a") mode, in which case the file pointer points to the end of the file.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contains an invalid value.              </li>
              <li>
IOError - The operation is launched on a directory (not a file), the file is not valid or it does not exist.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {FileMode} mode
 * @param {FileStreamSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {String} encoding
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.openStream = function(mode, onsuccess, onerror, encoding){ return; };

/**
 * Reads the content of a file as a DOMString.
            <p>
If the operation is successfully executed, the onsuccess() method is invoked and a DOMString is passed as input parameter that represents the file content in the format determined by the <em>encoding </em>parameter.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
IOError - If the operation is launched on a directory (not a file), the file is not valid, or the file does not exist.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {FileStringSuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @param {String} encoding
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.readAsText = function(onsuccess, onerror, encoding){ return; };

/**
 * Copies (and overwrites if possible and specified) a file or a directory from a specified location to another specified location.
            <p>
The copy of the file or directory identified by the <em>originFilePath </em>parameter must be created in the path passed in the <em>destinationFilePath </em>parameter.
            </p>
            <p>
The file or directory to copy must be under the Directory from which the method is invoked, otherwise the operation must not be performed.
            </p>
            <p>
If the copy is performed successfully, the onsuccess() method is invoked.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
NotFoundError - If the <em>originFilePath </em>does not correspond to a valid file or <em>destinationPath </em>is not a valid path.              </li>
              <li>
IOError - If the file in which the copyTo() method is invoked is a file (and not a directory), <em>originFilePath </em>corresponds to a file or directory in use by another process, <em>overwrite </em>parameter is <var>false</var> and <em>destinationFilePath </em>corresponds to an existing file or directory.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {String} originFilePath
 * @param {String} destinationFilePath
 * @param {Boolean} overwrite
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.copyTo = function(originFilePath, destinationFilePath, overwrite, onsuccess, onerror){ return; };

/**
 * Moves (and overwrites if possible and specified) a file or a directory from a specified location to another. This operation is different from instantiating copyTo() and then deleting the original file, as on certain platforms, this operation does not require extra disk space.
            <p>
The file or directory identified by the <em>originFilePath </em>parameter is moved to the path passed in the <em>destinationFilePath </em>parameter.
            </p>
            <p>
The file to move must be under the directory from which the method is invoked, else the operation can not be performed.
            </p>
            <p>
If the file or directory is moved successfully, the onsuccess() method is invoked.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
NotFoundError - If <em>originFilePath </em>does not correspond to a valid file or <em>destinationPath </em>is not a valid path.              </li>
              <li>
IOError - If the <em>File </em>in which the moveTo() method is invoked is a file (not a directory), <em>originFilePath </em>corresponds to a file or directory in use by another process, overwrite parameter is <var>false</var> and <em>destinationFilePath </em>corresponds to an existing file or directory.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {String} originFilePath
 * @param {String} destinationFilePath
 * @param {Boolean} overwrite
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.moveTo = function(originFilePath, destinationFilePath, overwrite, onsuccess, onerror){ return; };

/**
 * Creates a new directory.
            <p>
A new directory will be created relative to the current
directory that this operation is performed on. The implementation will attempt to
create all necessary sub-directories specified in the dirPath, as well. The use of "."
or ".." in path components is not supported.
            </p>
            <p>
This operation can only be performed on file handlers that represent a directory (that is, <em>isDirectory</em> == <var>true</var>).
            </p>
            <p>
If the directory is successfully created, it will be returned.
            </p>
            <p>
In case the directory cannot be created, an error must be thrown with the appropriate error type.
            </p>
           
 *
 * @param {String} dirPath
 * @type File
 * @memberOf File
 * @returns {File}
 */
File.prototype.createDirectory = function(dirPath){ var ret = new File(); return ret; };

/**
 * Creates a empty new file in a specified location that is relative to the directory indicated by current object's attribute.
            <p>
The use of "." or ".." in path components is not supported. This operation can only be performed on file handlers that represent a directory (that is, <em>isDirectory </em>== <var>true</var>).
            </p>
            <p>
If the file is successfully created, a file handler must be returned by this method.
            </p>
            <p>
In case the file cannot be created, an error must be thrown with the appropriate error type.
            </p>
           
 *
 * @param {String} relativeFilePath
 * @type File
 * @memberOf File
 * @returns {File}
 */
File.prototype.createFile = function(relativeFilePath){ var ret = new File(); return ret; };

/**
 * Resolves an existing file or directory relative to the current directory this operation is performed on, and returns a file handle for it.
            <p>
The <em>filePath</em> is not allowed to contain the "." or ".." substrings in its value.
            </p>
            <p>
The encoding of file paths is <a href="http://www.ietf.org/rfc/rfc2279.txt">UTF-8</a>.
            </p>
           
 *
 * @param {String} filePath
 * @type File
 * @memberOf File
 * @returns {File}
 */
File.prototype.resolve = function(filePath){ var ret = new File(); return ret; };

/**
 * Deletes a specified directory and directory tree if specified.
            <p>
This method attempts to asynchronously delete a directory or directory tree under the current directory.
            </p>
            <p>
If the <em>recursive </em>parameter is set to <var>true</var>, all the directories and files under the specified directory must be deleted. If the <em>recursive </em>parameter is set to <var>false</var>, the directory is only deleted if it is empty, otherwise an IOError error type will be passed in onerror().
            </p>
            <p>
If the deletion is performed successfully, the onsuccess() is invoked.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
NotFoundError -If the passed directory does not correspond to a valid directory.              </li>
              <li>
IOError - If the <em>File </em>in which the delete method is invoked is a file (and not a directory), the directory is in use by another process or the directory is not empty and <em>recursive </em>argument is <var>false</var>.<br/>This code is also used if a recursive deletion partially fails and any data deleted so far cannot be recovered. This may occur due to the lack of filesystem permissions or if any directories or files are already opened by other processes.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {String} directoryPath
 * @param {Boolean} recursive
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.deleteDirectory = function(directoryPath, recursive, onsuccess, onerror){ return; };

/**
 * Deletes a specified file.This function attempts to asynchronously delete a file under the current directory.
            <p>
If the deletion is performed successfully, the onsuccess() is invoked.
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
NotFoundError - If the file does not correspond to a valid file.              </li>
              <li>
IOError - If the file in which the delete() method is invoked is a file (not a directory), the file is in use by another process, or there is no permission in the file system.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {String} filePath
 * @param {SuccessCallback} onsuccess
 * @param {ErrorCallback} onerror
 * @type void
 * @memberOf File
 * @returns {void}
 */
File.prototype.deleteFile = function(filePath, onsuccess, onerror){ return; };

/**
 * The storage name.
 * <p>
This attribute is used as an input for methods such as getStorage() and also used as <em>location</em> parameter for File.resolve() and FileSystemManager.resolve().
            </p>
 *
 * @type String
 */
FileSystemStorage.prototype.label = new String();

/**
 * The storage type as internal or external.
 *
 * @type FileSystemStorageType
 */
FileSystemStorage.prototype.type = new FileSystemStorageType();

/**
 * The storage state as mounted or not.
 *
 * @type FileSystemStorageState
 */
FileSystemStorage.prototype.state = new FileSystemStorageState();

/**
 * The Filesystem API provides access to a device's filesystem.
 * <p>
The filesystem is represented as an abstract collection of disjointed filesystem virtual
root locations, each corresponding to a specific location in the device
filesystem. The filesystem API exposes the hierarchies below these root
locations as a single virtual filesystem, but provides no access to other
parts of the device filesystem.
        </p>
 * <p>
Each virtual root has a string name. Each file or directory within the virtual
filesystem is addressed using a fully-qualified path of the form:
<em>&lt;root name&gt;/&lt;path&gt;</em> where <em>&lt;rootname&gt;</em> is
the name of the virtual root and <em>&lt;path&gt;</em> is the path to the file or
directory relative to that root.
        </p>
 * <p>
The following virtual roots must be supported:
        </p>
 * <ul>
 * <li>images - the location for images
 * <li>videos - the location for videos
 * <li>music - the location for sounds
 * <li>documents - the location for documents
 * <li>downloads - the location for downloaded items
 * <li>ringtones - the location for ringtones (read-only location)
 * <li>camera - the location for the pictures and videos taken by a device (supported since Tizen 2.3)
 * <li>wgt-package - the location for widget package which is read-only
 * <li>wgt-private - the location for a widget's private storage
 * <li>wgt-private-tmp - the location for a widget's private volatile storage
 * </ul>
 * <p>
The file URI path is also supported. To access other paths out of virtual root, for example 'file:///tmp' can be used as location parameter.
        </p>
 * <p>
To access specific locations apart from those specified above, a file handle must be retrieved using the <em>filesystem.resolve() </em>call.
        </p>
 * <p>
A file handle represents either a file or a directory:        </p>
 * <ul>
 * <li>For a file, the attribute is set to .
 * <li>For a directory, the attribute is set to .
 * </ul>
 * <p>
A file can be opened for both read and write operations, using a
FileStream handle. A list of files and sub-directories can be obtained from a
directory and a resolve method exists to resolve files or sub-directories
more conveniently than processing directory listings.
        </p>
 * <p>
The implementation must support the use of the following characters in file names:
        </p>
 * <ul>
 * <li>Letters (a-z, A-Z)
 * <li>Numbers (0-9)
 * <li>Blank space
 * <li>Underscore ("_")
 * <li>Hyphen ("-")
 * <li>Period (".")
 * </ul>
 * <p>
The implementation may support additional characters in file names, depending on platform support.
        </p>
 * <p>
The implementation may forbid the use of additional characters in file names, depending on the platform. The use of the path (component) separator "/" should not be allowed in file names.
        </p>
 * <p>
Some other file name and path characteristics are platform-dependent,
for example, maximum path length, file name length, case sensitivity, additional
character support, etc. Therefore, it is recommended to avoid any dependency
on aspects that cannot be supported across multiple platforms.
        </p>
 * <p>
When a path is used to interact with the underlying filesystem, the encoding used for the file path should be the platform default.
        </p>
 * <p>
For more information on the Filesystem features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/io_guide/filesystem.htm">File System Guide</a>.
        </p>
 *
 * @type FileSystemManager
 */
FileSystemManagerObject.prototype.filesystem = new FileSystemManager();

/**
 * Called when the File.openStream asynchronous call completes successfully.
 *
 * @param {FileStream} filestream
 * @type void
 * @memberOf FileStreamSuccessCallback
 * @returns {void}
 */
FileStreamSuccessCallback.prototype.onsuccess = function(filestream){ return; };

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} storages
 * @type void
 * @memberOf FileSystemStorageArraySuccessCallback
 * @returns {void}
 */
FileSystemStorageArraySuccessCallback.prototype.onsuccess = function(storages){ return; };

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} files
 * @type void
 * @memberOf FileArraySuccessCallback
 * @returns {void}
 */
FileArraySuccessCallback.prototype.onsuccess = function(files){ return; };

/**
 * The Filesystem API provides access to a device's filesystem.
 * <p>
The filesystem is represented as an abstract collection of disjointed filesystem virtual
root locations, each corresponding to a specific location in the device
filesystem. The filesystem API exposes the hierarchies below these root
locations as a single virtual filesystem, but provides no access to other
parts of the device filesystem.
        </p>
 * <p>
Each virtual root has a string name. Each file or directory within the virtual
filesystem is addressed using a fully-qualified path of the form:
<em>&lt;root name&gt;/&lt;path&gt;</em> where <em>&lt;rootname&gt;</em> is
the name of the virtual root and <em>&lt;path&gt;</em> is the path to the file or
directory relative to that root.
        </p>
 * <p>
The following virtual roots must be supported:
        </p>
 * <ul>
 * <li>images - the location for images
 * <li>videos - the location for videos
 * <li>music - the location for sounds
 * <li>documents - the location for documents
 * <li>downloads - the location for downloaded items
 * <li>ringtones - the location for ringtones (read-only location)
 * <li>camera - the location for the pictures and videos taken by a device (supported since Tizen 2.3)
 * <li>wgt-package - the location for widget package which is read-only
 * <li>wgt-private - the location for a widget's private storage
 * <li>wgt-private-tmp - the location for a widget's private volatile storage
 * </ul>
 * <p>
The file URI path is also supported. To access other paths out of virtual root, for example 'file:///tmp' can be used as location parameter.
        </p>
 * <p>
To access specific locations apart from those specified above, a file handle must be retrieved using the <em>filesystem.resolve() </em>call.
        </p>
 * <p>
A file handle represents either a file or a directory:        </p>
 * <ul>
 * <li>For a file, the attribute is set to .
 * <li>For a directory, the attribute is set to .
 * </ul>
 * <p>
A file can be opened for both read and write operations, using a
FileStream handle. A list of files and sub-directories can be obtained from a
directory and a resolve method exists to resolve files or sub-directories
more conveniently than processing directory listings.
        </p>
 * <p>
The implementation must support the use of the following characters in file names:
        </p>
 * <ul>
 * <li>Letters (a-z, A-Z)
 * <li>Numbers (0-9)
 * <li>Blank space
 * <li>Underscore ("_")
 * <li>Hyphen ("-")
 * <li>Period (".")
 * </ul>
 * <p>
The implementation may support additional characters in file names, depending on platform support.
        </p>
 * <p>
The implementation may forbid the use of additional characters in file names, depending on the platform. The use of the path (component) separator "/" should not be allowed in file names.
        </p>
 * <p>
Some other file name and path characteristics are platform-dependent,
for example, maximum path length, file name length, case sensitivity, additional
character support, etc. Therefore, it is recommended to avoid any dependency
on aspects that cannot be supported across multiple platforms.
        </p>
 * <p>
When a path is used to interact with the underlying filesystem, the encoding used for the file path should be the platform default.
        </p>
 * <p>
For more information on the Filesystem features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/io_guide/filesystem.htm">File System Guide</a>.
        </p>
 *
 * @type FileSystemManager
 */
Tizen.prototype.filesystem = new FileSystemManager();

/**
 * The HumanActivityGPSInfo interface represents GPS information.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityGPSInfo}
 */
function HumanActivityGPSInfo() {};
HumanActivityGPSInfo.prototype = new Object();

/**
 * The HumanActivityRecorderData interface is a common abstract interface used for the different types of human activity recorder data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityRecorderData}
 */
function HumanActivityRecorderData() {};
HumanActivityRecorderData.prototype = new Object();

/**
 * The HumanActivityRecorderSleepMonitorData interface represents a recorded SLEEP_MONITOR data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityRecorderSleepMonitorData}
 */
function HumanActivityRecorderSleepMonitorData() {};
HumanActivityRecorderSleepMonitorData.prototype = new HumanActivityRecorderData();

/**
 * The HumanActivityRecorderHRMData interface represents a recorded HRM data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityRecorderHRMData}
 */
function HumanActivityRecorderHRMData() {};
HumanActivityRecorderHRMData.prototype = new HumanActivityRecorderData();

/**
 * The HumanActivityPedometerData interface represents pedometer data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityPedometerData}
 */
function HumanActivityPedometerData() {};
HumanActivityPedometerData.prototype = new HumanActivityData();

/**
 * The HumanActivityMonitorSuccessCallback interface is a callback interface that is invoked when new human activity data is available.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityMonitorSuccessCallback}
 */
function HumanActivityMonitorSuccessCallback() {};
HumanActivityMonitorSuccessCallback.prototype = new Object();

/**
 * The StepDifference interface represents the count difference between steps and timestamp.
 *
 * @super Object
 * @constructor
 * @return {StepDifference}
 */
function StepDifference() {};
StepDifference.prototype = new Object();

/**
 * The HumanActivityGPSInfoArray interface represents GPS information array.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityGPSInfoArray}
 */
function HumanActivityGPSInfoArray() {};
HumanActivityGPSInfoArray.prototype = new HumanActivityData();

/**
 * The HumanActivityRecorderPedometerData interface represents recorded PEDOMETER data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityRecorderPedometerData}
 */
function HumanActivityRecorderPedometerData() {};
HumanActivityRecorderPedometerData.prototype = new HumanActivityRecorderData();

/**
 * The HumanActivityData interface is a common abstract interface used by the different types of human activity data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityData}
 */
function HumanActivityData() {};
HumanActivityData.prototype = new Object();

/**
 * The HumanActivityRecognitionData interface represents a activity recognition data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityRecognitionData}
 */
function HumanActivityRecognitionData() {};
HumanActivityRecognitionData.prototype = new HumanActivityData();

/**
 * The HumanActivityAccumulativePedometerData interface represents pedometer motion data since the device is booted.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityAccumulativePedometerData}
 */
function HumanActivityAccumulativePedometerData() {};
HumanActivityAccumulativePedometerData.prototype = new HumanActivityData();

/**
 * The HumanActivityHRMData interface represents Heart Rate Monitor(HRM) data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityHRMData}
 */
function HumanActivityHRMData() {};
HumanActivityHRMData.prototype = new HumanActivityData();

/**
 * The HumanActivityMonitorManagerObject interface defines what is instantiated by the object. The object allows access to the human activity data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityMonitorManagerObject}
 */
function HumanActivityMonitorManagerObject() {};
HumanActivityMonitorManagerObject.prototype = new Object();

/**
 * The HumanActivityMonitorManager interface provides methods to access human activity data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityMonitorManager}
 */
function HumanActivityMonitorManager() {};
HumanActivityMonitorManager.prototype = new Object();

/**
 * The HumanActivityReadRecorderSuccessCallback interface is a callback interface that is invoked when recorded human activity data is successfully read.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityReadRecorderSuccessCallback}
 */
function HumanActivityReadRecorderSuccessCallback() {};
HumanActivityReadRecorderSuccessCallback.prototype = new Object();

/**
 * The HumanActivitySleepMonitorData interface represents sleep monitor data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivitySleepMonitorData}
 */
function HumanActivitySleepMonitorData() {};
HumanActivitySleepMonitorData.prototype = new HumanActivityData();

/**
 * The HumanActivityRecorderPressureData interface represents a recorded PRESSURE data.
 *
 * @super Object
 * @constructor
 * @return {HumanActivityRecorderPressureData}
 */
function HumanActivityRecorderPressureData() {};
HumanActivityRecorderPressureData.prototype = new HumanActivityRecorderData();

/**
 * An attribute to indicate the user's latitude in degrees.
 *
 * @type Number
 */
HumanActivityGPSInfo.prototype.latitude = new Number();

/**
 * An attribute to indicate the user's longitude in degrees.
 *
 * @type Number
 */
HumanActivityGPSInfo.prototype.longitude = new Number();

/**
 * An attribute to indicate the user's altitude in meters.
 *
 * @type Number
 */
HumanActivityGPSInfo.prototype.altitude = new Number();

/**
 * An attribute to indicate the speed in km/h.
 *
 * @type Number
 */
HumanActivityGPSInfo.prototype.speed = new Number();

/**
 * An attribute to indicate the error range of the user's position in meters.
 *
 * @type Number
 */
HumanActivityGPSInfo.prototype.errorRange = new Number();

/**
 * An attribute to indicate timestamp in seconds.
 *
 * @type Number
 */
HumanActivityGPSInfo.prototype.timestamp = new Number();

/**
 * Recording start time of the data in this HumanActivityRecorderData object. Epoch time in seconds.
 *
 * @type Number
 */
HumanActivityRecorderData.prototype.startTime = new Number();

/**
 * Recording end time of the data in this HumanActivityRecorderData object. Epoch time in seconds.
 *
 * @type Number
 */
HumanActivityRecorderData.prototype.endTime = new Number();

/**
 * The sleep status.
 *
 * @type SleepStatus
 */
HumanActivityRecorderSleepMonitorData.prototype.status = new SleepStatus();

/**
 * Heart rate in beats per minute.
 *
 * @type Number
 */
HumanActivityRecorderHRMData.prototype.heartRate = new Number();

/**
 * The current movement type.
 *
 * @type PedometerStepStatus
 */
HumanActivityPedometerData.prototype.stepStatus = new PedometerStepStatus();

/**
 * Current speed in km/h.
 *
 * @type Number
 */
HumanActivityPedometerData.prototype.speed = new Number();

/**
 * Step count per second.
 *
 * @type Number
 */
HumanActivityPedometerData.prototype.walkingFrequency = new Number();

/**
 * Cumulative distance traveled since the last start() method call in meters.
 *
 * @type Number
 */
HumanActivityPedometerData.prototype.cumulativeDistance = new Number();

/**
 * Cumulative calories burned since the last start() method call in kcal.
 *
 * @type Number
 */
HumanActivityPedometerData.prototype.cumulativeCalorie = new Number();

/**
 * Cumulative walking and running step count since the last start() method call.
 * <p>
The value is the sum of <em>cumulativeWalkStepCount</em> and <em>cumulativeRunStepCount</em>.
            </p>
 *
 * @type Number
 */
HumanActivityPedometerData.prototype.cumulativeTotalStepCount = new Number();

/**
 * Cumulative walking step count since the last start() method call.
 *
 * @type Number
 */
HumanActivityPedometerData.prototype.cumulativeWalkStepCount = new Number();

/**
 * Cumulative running step count since the last start() method call.
 *
 * @type Number
 */
HumanActivityPedometerData.prototype.cumulativeRunStepCount = new Number();

/**
 * Array of the StepDifference.
 *
 * @type array
 */
HumanActivityPedometerData.prototype.stepCountDifferences = new array();

/**
 * Called when there is new human activity data available.
 *
 * @param {HumanActivityData} humanactivitydata
 * @type void
 * @memberOf HumanActivityMonitorSuccessCallback
 * @returns {void}
 */
HumanActivityMonitorSuccessCallback.prototype.onsuccess = function(humanactivitydata){ return; };

/**
 * Count difference between the steps.
 *
 * @type Number
 */
StepDifference.prototype.stepCountDifference = new Number();

/**
 * Timestamp in seconds.
 *
 * @type Number
 */
StepDifference.prototype.timestamp = new Number();

/**
 * An attribute to indicate the array of GPS information.
 *
 * @type array
 */
HumanActivityGPSInfoArray.prototype.gpsInfo = new array();

/**
 * Distance traveled from to in meters.
 *
 * @type Number
 */
HumanActivityRecorderPedometerData.prototype.distance = new Number();

/**
 * Calories burned from to in kCal.
 *
 * @type Number
 */
HumanActivityRecorderPedometerData.prototype.calorie = new Number();

/**
 * Walking and running step count from to . The value is the sum of and .
 *
 * @type Number
 */
HumanActivityRecorderPedometerData.prototype.totalStepCount = new Number();

/**
 * Walking step count from to .
 *
 * @type Number
 */
HumanActivityRecorderPedometerData.prototype.walkStepCount = new Number();

/**
 * Running step count from to .
 *
 * @type Number
 */
HumanActivityRecorderPedometerData.prototype.runStepCount = new Number();

/**
 * The type of activity.
 *
 * @type ActivityRecognitionType
 */
HumanActivityRecognitionData.prototype.type = new ActivityRecognitionType();

/**
 * The time when the activity is recognized. Epoch time in seconds.
 *
 * @type Number
 */
HumanActivityRecognitionData.prototype.timestamp = new Number();

/**
 * The degree of accuracy.
 *
 * @type ActivityAccuracy
 */
HumanActivityRecognitionData.prototype.accuracy = new ActivityAccuracy();

/**
 * Current movement type.
 *
 * @type PedometerStepStatus
 */
HumanActivityAccumulativePedometerData.prototype.stepStatus = new PedometerStepStatus();

/**
 * Current speed in km/h.
 *
 * @type Number
 */
HumanActivityAccumulativePedometerData.prototype.speed = new Number();

/**
 * Step count per second.
 *
 * @type Number
 */
HumanActivityAccumulativePedometerData.prototype.walkingFrequency = new Number();

/**
 * Accumulative distance traveled since the device is booted in meters.
 *
 * @type Number
 */
HumanActivityAccumulativePedometerData.prototype.accumulativeDistance = new Number();

/**
 * Accumulative calories burnt since the device is booted in kcal.
 *
 * @type Number
 */
HumanActivityAccumulativePedometerData.prototype.accumulativeCalorie = new Number();

/**
 * Accumulative walking and running step count since the device is booted.
 * <p>
The value is the sum of <em>accumulativeWalkStepCount</em> and <em>accumulativeRunStepCount</em>.
            </p>
 *
 * @type Number
 */
HumanActivityAccumulativePedometerData.prototype.accumulativeTotalStepCount = new Number();

/**
 * Accumulative walking step count since the device is booted.
 *
 * @type Number
 */
HumanActivityAccumulativePedometerData.prototype.accumulativeWalkStepCount = new Number();

/**
 * Accumulative running step count since the device is booted.
 *
 * @type Number
 */
HumanActivityAccumulativePedometerData.prototype.accumulativeRunStepCount = new Number();

/**
 * Array of the StepDifference.
 *
 * @type array
 */
HumanActivityAccumulativePedometerData.prototype.stepCountDifferences = new array();

/**
 * Heart rate in beats per minute. When a user takes off the watch device, the heartRate is set to -3. When a user shakes the watch, the heartRate is set to -2.
 *
 * @type Number
 */
HumanActivityHRMData.prototype.heartRate = new Number();

/**
 * Peak-to-peak interval in millisecond(s).
 *
 * @type Number
 */
HumanActivityHRMData.prototype.rRInterval = new Number();

/**
 * The HumanActivityMonitor API defines interfaces and methods to manage human activity data from various sensors on the device.
 * <p>
The following human activity monitor functionality is provided:
        </p>
 * <ul>
 * <li>Set up callbacks for data change notification
 * <li>Get current human activity monitor data
 * <li>Record and read human activity data
 * </ul>
 * <p>
For more information about how to use Human Activity Monitor API, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/sys_guide/ham.htm">HumanActivityMonitor Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/humanactivitymonitor
 * @type HumanActivityMonitorManager
 */
HumanActivityMonitorManagerObject.prototype.humanactivitymonitor = new HumanActivityMonitorManager();

/**
 * Gets the current human activity data for certain human activity types.
            <p>
The <em>start()</em> method should be called to turn on the sensor before calling the <em>getHumanActivityData()</em> method. If not, <var>ServiceNotAvailableError</var> occurs.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError : If the <em>getHumanActivityData()</em> method is called without previously calling the <em>start()</em> method              </li>
            </ul>
           
 *
 * @param {HumanActivityType} type
 * @param {HumanActivityMonitorSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf HumanActivityMonitorManager
 * @returns {void}
 */
HumanActivityMonitorManager.prototype.getHumanActivityData = function(type, successCallback, errorCallback){ return; };

/**
 * Starts a sensor and registers a change listener to be called when new human activity data for a given human activity type is available.
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If the human activity service is not available. For the GPS type, if the GPS function is disabled by the user in the location settings, it is not possible to receive notifications when the GPS value changes.              </li>
            </ul>
           
 *
 * @param {HumanActivityType} type
 * @param {HumanActivityMonitorSuccessCallback} changedCallback
 * @param {ErrorCallback} errorCallback
 * @param {HumanActivityMonitorOption} option
 * @type void
 * @memberOf HumanActivityMonitorManager
 * @returns {void}
 */
HumanActivityMonitorManager.prototype.start = function(type, changedCallback, errorCallback, option){ return; };

/**
 * Stops the sensor and unregisters a previously registered listener for available human activity data.
           
 *
 * @param {HumanActivityType} type
 * @type void
 * @memberOf HumanActivityMonitorManager
 * @returns {void}
 */
HumanActivityMonitorManager.prototype.stop = function(type){ return; };

/**
 * Starts the sensor and registers a listener to be called when new accumulative pedometer data is available.
            <p>
Note that the setAccumulativePedometerListener() method does not need to call the sensor's start() method.
            </p>
           
 *
 * @param {HumanActivityMonitorSuccessCallback} changeCallback
 * @type void
 * @memberOf HumanActivityMonitorManager
 * @returns {void}
 */
HumanActivityMonitorManager.prototype.setAccumulativePedometerListener = function(changeCallback){ return; };

/**
 * Stops the sensor and unregisters a previously registered listener for the accumulative pedometer data.
 *
 * @type void
 * @memberOf HumanActivityMonitorManager
 * @returns {void}
 */
HumanActivityMonitorManager.prototype.unsetAccumulativePedometerListener = function(){ return; };

/**
 * Registers a listener that is to be called when the activity is recognized.
            <p>
The <em>ErrorCallback</em> method is launched with this error type:
            </p>
            <ul>
              <li>
 AbortError : If the system operation was aborted.              </li>
            </ul>
           
 *
 * @param {ActivityRecognitionType} type
 * @param {HumanActivityMonitorSuccessCallback} listener
 * @param {ErrorCallback} errorCallback
 * @type Number
 * @memberOf HumanActivityMonitorManager
 * @returns {Number}
 */
HumanActivityMonitorManager.prototype.addActivityRecognitionListener = function(type, listener, errorCallback){ var ret = new Number(); return ret; };

/**
 * Unsubscribes from receiving notifications when the activity is recognized.
            <p>
The <em>ErrorCallback</em> method is launched with this error type:
            </p>
            <ul>
              <li>
 AbortError : If the system operation was aborted.              </li>
            </ul>
           
 *
 * @param {Number} listenerId
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf HumanActivityMonitorManager
 * @returns {void}
 */
HumanActivityMonitorManager.prototype.removeActivityRecognitionListener = function(listenerId, errorCallback){ return; };

/**
 * Starts recording human activity data for a given human activity type.
 *
 * @param {HumanActivityRecorderType} type
 * @param {HumanActivityRecorderOption} option
 * @type void
 * @memberOf HumanActivityMonitorManager
 * @returns {void}
 */
HumanActivityMonitorManager.prototype.startRecorder = function(type, option){ return; };

/**
 * Stops recording human activity data for a given human activity type.
 *
 * @param {HumanActivityRecorderType} type
 * @type void
 * @memberOf HumanActivityMonitorManager
 * @returns {void}
 */
HumanActivityMonitorManager.prototype.stopRecorder = function(type){ return; };

/**
 * Reads the recorded human activity data with some query.
            <p>
If another application has recorded data for a particular human activity type, your application can read that data.
Therefore, you can use this method to read without calling <em>startRecorder()</em>.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
AbortError: If the system operation was aborted while reading data asynchronously.              </li>
              <li>
NotFoundError: If no recorder data is available.              </li>
            </ul>
           
 *
 * @param {HumanActivityRecorderType} type
 * @param {HumanActivityRecorderQuery} query
 * @param {HumanActivityReadRecorderSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf HumanActivityMonitorManager
 * @returns {void}
 */
HumanActivityMonitorManager.prototype.readRecorderData = function(type, query, successCallback, errorCallback){ return; };

/**
 * Called when recorded human activity data is successfully read.
 *
 * @param {array} humanactivitydata
 * @type void
 * @memberOf HumanActivityReadRecorderSuccessCallback
 * @returns {void}
 */
HumanActivityReadRecorderSuccessCallback.prototype.onsuccess = function(humanactivitydata){ return; };

/**
 * The sleep status.
 *
 * @type SleepStatus
 */
HumanActivitySleepMonitorData.prototype.status = new SleepStatus();

/**
 * The time when the sleep status is recognized. Epoch time in milliseconds.
 *
 * @type Number
 */
HumanActivitySleepMonitorData.prototype.timestamp = new Number();

/**
 * Max pressure in hectopascal (hPa).
 *
 * @type Number
 */
HumanActivityRecorderPressureData.prototype.max = new Number();

/**
 * Min pressure in hectopascal (hPa).
 *
 * @type Number
 */
HumanActivityRecorderPressureData.prototype.min = new Number();

/**
 * Average pressure in hectopascal (hPa).
 *
 * @type Number
 */
HumanActivityRecorderPressureData.prototype.average = new Number();

/**
 * The HumanActivityMonitor API defines interfaces and methods to manage human activity data from various sensors on the device.
 * <p>
The following human activity monitor functionality is provided:
        </p>
 * <ul>
 * <li>Set up callbacks for data change notification
 * <li>Get current human activity monitor data
 * <li>Record and read human activity data
 * </ul>
 * <p>
For more information about how to use Human Activity Monitor API, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/sys_guide/ham.htm">HumanActivityMonitor Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/humanactivitymonitor
 * @type HumanActivityMonitorManager
 */
Tizen.prototype.humanactivitymonitor = new HumanActivityMonitorManager();

/**
 * The InputDeviceManager interface defines what is instantiated in the tizen object.
          <p>
There is a tizen.inputdevice object that allows accessing the functionality of the Input Device API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {InputDeviceManagerObject}
 */
function InputDeviceManagerObject() {};
InputDeviceManagerObject.prototype = new Object();

/**
 * The InputDeviceKey interface stores information about the key.
 *
 * @super Object
 * @constructor
 * @return {InputDeviceKey}
 */
function InputDeviceKey() {};
InputDeviceKey.prototype = new Object();

/**
 * The InputDeviceManager interface provides the features to check for availability and register for input device events.
 *
 * @super Object
 * @constructor
 * @return {InputDeviceManager}
 */
function InputDeviceManager() {};
InputDeviceManager.prototype = new Object();

/**
 * The Input Device API provides functions to subscribe key events of the input device.
 * <p>
The Tizen Device may provide depending on a particular input device.
An application can handle device dependent key events after registration.
        </p>
 *
 * @type InputDeviceManager
 */
InputDeviceManagerObject.prototype.inputdevice = new InputDeviceManager();

/**
 * The name of the key, for example or .
 * <p>
If the key is listed in the <a href="http://www.w3.ohttp://127.0.0.1:34603/help/topic/2014/WD-DOM-Level-3-Events-key-20140612">DOM Level 3 KeyboardEvent key Values</a> specification, the <em>name</em> attribute is equal to the <em>key value</em> specified there. (The <a href="http://www.w3.ohttp://127.0.0.1:34603/help/topic/2014/WD-DOM-Level-3-Events-key-20140612/#keys-media-controller">Media Controller Keys</a> section is the most relevant to the Input Device API)
            </p>
 * <p>
If the "DOM Level 3 KeyboardEvent key Value" does not contain appropriate entry for the key, then the Input Device provides a device specific <em>name</em>.
            </p>
 *
 * @type InputDeviceKeyName
 */
InputDeviceKey.prototype.name = new InputDeviceKeyName();

/**
 * The numeric code of the key, like or .
 * <p>
This is the <em>keyCode</em> attribute value of the Key Event generated by the key.
            </p>
 *
 * @type Number
 */
InputDeviceKey.prototype.code = new Number();

/**
 * Retrieves the list of keys can be registered with the method.
            <p>
Mandatory keys will not be retrieved by this method.
            </p>
           
 *
 * @type array
 * @memberOf InputDeviceManager
 * @returns {array}
 */
InputDeviceManager.prototype.getSupportedKeys = function(){ var ret = new array(); return ret; };

/**
 * Returns information about the key which has the given name.
 *
 * @param {InputDeviceKeyName} keyName
 * @type InputDeviceKey
 * @memberOf InputDeviceManager
 * @returns {InputDeviceKey}
 */
InputDeviceManager.prototype.getKey = function(keyName){ var ret = new InputDeviceKey(); return ret; };

/**
 * Registers an input device key to receive DOM keyboard event when it is pressed or released
            <p>
When an application wants to react to the Input Device keys being pressed, it should register this key.
            </p>
            <p>
An application can not register the mandatory keys (ArrowLeft, ArrowRight, ArrowUp, ArrowDown, Enter, Back).
            </p>
           
 *
 * @param {InputDeviceKeyName} keyName
 * @type void
 * @memberOf InputDeviceManager
 * @returns {void}
 */
InputDeviceManager.prototype.registerKey = function(keyName){ return; };

/**
 * Unregisters an input device key
 *
 * @param {InputDeviceKeyName} keyName
 * @type void
 * @memberOf InputDeviceManager
 * @returns {void}
 */
InputDeviceManager.prototype.unregisterKey = function(keyName){ return; };

/**
 * Registers a batch of input device keys to receive DOM keyboard event when any of them is pressed or released
            <p>
The errorCallback is launched with this error type:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the given keyNames is invalid or not supported              </li>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
            <p>
When an application wants to react to the input device keys being pressed, it should register those keys.
            </p>
            <p>
An application can not register the mandatory keys (ArrowLeft, ArrowRight, ArrowUp, ArrowDown, Enter, Back).
            </p>
           
 *
 * @param {array} keyNames
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf InputDeviceManager
 * @returns {void}
 */
InputDeviceManager.prototype.registerKeyBatch = function(keyNames, successCallback, errorCallback){ return; };

/**
 * Unregisters a batch of input device keys
            <p>
The errorCallback is launched with this error type:
            </p>
            <ul>
              <li>
InvalidValuesError: If any of the given keyNames is invalid or not supported              </li>
              <li>
UnknownError: In case of any other error              </li>
            </ul>
           
 *
 * @param {array} keyNames
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf InputDeviceManager
 * @returns {void}
 */
InputDeviceManager.prototype.unregisterKeyBatch = function(keyNames, successCallback, errorCallback){ return; };

/**
 * The Input Device API provides functions to subscribe key events of the input device.
 * <p>
The Tizen Device may provide depending on a particular input device.
An application can handle device dependent key events after registration.
        </p>
 *
 * @type InputDeviceManager
 */
Tizen.prototype.inputdevice = new InputDeviceManager();

/**
 * The Response Interface holds response from server for specified request of client. It is server-side object, Response on client-side is hold as object.
 *
 * @super Object
 * @constructor
 * @return {Response}
 */
function Response() {};
Response.prototype = new Object();

/**
 * This interface provides API to manage resource for server side.
 *
 * @super Object
 * @constructor
 * @return {Resource}
 */
function Resource() {};
Resource.prototype = new Object();

/**
 * The RemoteResponse Interface holds response from server for specified request of client, this is client-side version of object.
 *
 * @super Object
 * @constructor
 * @return {RemoteResponse}
 */
function RemoteResponse() {};
RemoteResponse.prototype = new Object();

/**
 * The PlatformInfo interface describes platform properties.
 *
 * @super Object
 * @constructor
 * @return {PlatformInfo}
 */
function PlatformInfo() {};
PlatformInfo.prototype = new Object();

/**
 * This interface provides API to manage remote resource for client side.
 *
 * @super Object
 * @constructor
 * @return {PresenceResponse}
 */
function PresenceResponse() {};
PresenceResponse.prototype = new Object();

/**
 * The CacheUpdatedCallback interface defines the success method to be invoked when remote resource is changed.
 *
 * @super Object
 * @constructor
 * @return {CacheUpdatedCallback}
 */
function CacheUpdatedCallback() {};
CacheUpdatedCallback.prototype = new Object();

/**
 * This interface provides API to manage remote resource for client side.
 *
 * @super Object
 * @constructor
 * @return {RemoteResource}
 */
function RemoteResource() {};
RemoteResource.prototype = new Object();

/**
 * The GeneratedPinCallback interface defines the success method to be invoked when random pin is generated.
 *
 * @super Object
 * @constructor
 * @return {GeneratedPinCallback}
 */
function GeneratedPinCallback() {};
GeneratedPinCallback.prototype = new Object();

/**
 * The FoundResourceSuccessCallback interface that defines the success method for .
 *
 * @super Object
 * @constructor
 * @return {FoundResourceSuccessCallback}
 */
function FoundResourceSuccessCallback() {};
FoundResourceSuccessCallback.prototype = new Object();

/**
 * The IotconOption Interface provides vendor specific options of COAP packet.
 *
 * @super Object
 * @constructor
 * @return {IotconOption}
 */
function IotconOption() {};
IotconOption.prototype = new Object();

/**
 * The ResourceStateChangeCallback interface defines the success method to be invoked when remote resource's state is changed.
 *
 * @super Object
 * @constructor
 * @return {ResourceStateChangeCallback}
 */
function ResourceStateChangeCallback() {};
ResourceStateChangeCallback.prototype = new Object();

/**
 * The Representation Interface contains information of a resource. It can be used to communicate between a client and a server.
 *
 * @super Object
 * @constructor
 * @return {Representation}
 */
function Representation() {};
Representation.prototype = new Object();

/**
 * The DeviceInfo interface describes device properties.
 *
 * @super Object
 * @constructor
 * @return {DeviceInfo}
 */
function DeviceInfo() {};
DeviceInfo.prototype = new Object();

/**
 * Provides functions for creating resource, registering a resource, handling request from client .
          <p>
A Resource is a component in a server that can be viewed and controlled by another client.
There are different resource types, for example a temperature sensor, a light controller etc.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {Server}
 */
function Server() {};
Server.prototype = new Object();

/**
 * The FoundPlatformInfoSuccessCallback interface defines the success method to be invoked when getting the platform information is successful.
 *
 * @super Object
 * @constructor
 * @return {FoundPlatformInfoSuccessCallback}
 */
function FoundPlatformInfoSuccessCallback() {};
FoundPlatformInfoSuccessCallback.prototype = new Object();

/**
 * The RequestCallback interface that defines the success method to be invoked when a client request is received.
 *
 * @super Object
 * @constructor
 * @return {RequestCallback}
 */
function RequestCallback() {};
RequestCallback.prototype = new Object();

/**
 * The Client provides API for client side.
 *
 * @super Object
 * @constructor
 * @return {Client}
 */
function Client() {};
Client.prototype = new Object();

/**
 * The FoundDeviceInfoSuccessCallback interface defines the success method to be invoked when getting the device information is successful.
 *
 * @super Object
 * @constructor
 * @return {FoundDeviceInfoSuccessCallback}
 */
function FoundDeviceInfoSuccessCallback() {};
FoundDeviceInfoSuccessCallback.prototype = new Object();

/**
 * The RemoteResourceResponseCallback interface defines the success method to be invoked when a client received response.
 *
 * @super Object
 * @constructor
 * @return {RemoteResourceResponseCallback}
 */
function RemoteResourceResponseCallback() {};
RemoteResourceResponseCallback.prototype = new Object();

/**
 * This interface provides access to the object.
 *
 * @super Object
 * @constructor
 * @return {Iotcon}
 */
function Iotcon() {};
Iotcon.prototype = new Object();

/**
 * The Request interface represents a details from client.
 *
 * @super Object
 * @constructor
 * @return {Request}
 */
function Request() {};
Request.prototype = new Object();

/**
 * This interface defines what is instantiated by the object from the Tizen platform.
          <p>
There is a <em>tizen.iotcon</em> object that allows access to the Iotcon API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {IotconObject}
 */
function IotconObject() {};
IotconObject.prototype = new Object();

/**
 * The PresenceEventCallback interface defines the success method to be invoked when client receive presence events from the server.
 *
 * @super Object
 * @constructor
 * @return {PresenceEventCallback}
 */
function PresenceEventCallback() {};
PresenceEventCallback.prototype = new Object();

/**
 * the request, that server responded.
 *
 * @type Request
 */
Response.prototype.request = new Request();

/**
 * the result indicates the detailed information about the result of the response to request.
 *
 * @type ResponseResult
 */
Response.prototype.result = new ResponseResult();

/**
 * the representation indicates the information of the resource.
 *
 * @type Representation
 */
Response.prototype.representation = new Representation();

/**
 * the options indicates the vendor specific options of COAP packet.
 *
 * @type array
 */
Response.prototype.options = new array();

/**
 * Sends the response.
 *
 * @type void
 * @memberOf Response
 * @returns {void}
 */
Response.prototype.send = function(){ return; };

/**
 * The resource URI.
 *
 * @type String
 */
Resource.prototype.uriPath = new String();

/**
 * A list of types in this resource.
 *
 * @type array
 */
Resource.prototype.resourceTypes = new array();

/**
 * A list of interfaces in the resource.
 *
 * @type array
 */
Resource.prototype.resourceInterfaces = new array();

/**
 * Indicates if the resource is observable or not
 *
 * @type Boolean
 */
Resource.prototype.isObservable = new Boolean();

/**
 * Indicates if the resource is discoverable or not
 *
 * @type Boolean
 */
Resource.prototype.isDiscoverable = new Boolean();

/**
 * Indicates if the resource is initialized and activated or not
 *
 * @type Boolean
 */
Resource.prototype.isActive = new Boolean();

/**
 * Indicates if the resource takes some delay to respond or not
 *
 * @type Boolean
 */
Resource.prototype.isSlow = new Boolean();

/**
 * Indicates if the resource is secure or not
 *
 * @type Boolean
 */
Resource.prototype.isSecure = new Boolean();

/**
 * Indicates if the resource is is allowed to be discovered only if discovery request contains an explicit querystring or not
 *
 * @type Boolean
 */
Resource.prototype.isExplicitDiscoverable = new Boolean();

/**
 * A list of childs of this resource.
 *
 * @type array
 */
Resource.prototype.resources = new array();

/**
 * A list of observation IDs of this resource.
 *
 * @type array
 */
Resource.prototype.observerIds = new array();

/**
 * A lists of attributes of this resource.
 *
 * @type object
 */
Resource.prototype.attributes = new object();

/**
 * Notifies specific clients that resource's attributes have been changed.
 *
 * @param {QosLevel} qosLevel
 * @param {array} observerIds
 * @type void
 * @memberOf Resource
 * @returns {void}
 */
Resource.prototype.notify = function(qosLevel, observerIds){ return; };

/**
 * Adds resource type to this resource.
 *
 * @param {array} types
 * @type void
 * @memberOf Resource
 * @returns {void}
 */
Resource.prototype.addResourceTypes = function(types){ return; };

/**
 * Adds resource interface to this resource.
 *
 * @param {ResourceInterface} interface
 * @type void
 * @memberOf Resource
 * @returns {void}
 */
Resource.prototype.addResourceInterface = function(interface){ return; };

/**
 * Adds child resource into the parent resource.
 *
 * @param {Resource} resource
 * @type void
 * @memberOf Resource
 * @returns {void}
 */
Resource.prototype.addChildResource = function(resource){ return; };

/**
 * Removes child resource from the parent resource.
 *
 * @param {Resource} resource
 * @type void
 * @memberOf Resource
 * @returns {void}
 */
Resource.prototype.removeChildResource = function(resource){ return; };

/**
 * Sets the listener for request from client.
 *
 * @param {RequestCallback} listener
 * @type void
 * @memberOf Resource
 * @returns {void}
 */
Resource.prototype.setRequestListener = function(listener){ return; };

/**
 * Remove the listener.
 *
 * @type void
 * @memberOf Resource
 * @returns {void}
 */
Resource.prototype.unsetRequestListener = function(){ return; };

/**
 * the result indicates the detailed information about the result of the response to request.
 *
 * @type ResponseResult
 */
RemoteResponse.prototype.result = new ResponseResult();

/**
 * the representation indicates the information of the resource.
 *
 * @type Representation
 */
RemoteResponse.prototype.representation = new Representation();

/**
 * the options indicates the vendor specific options of COAP packet.
 *
 * @type array
 */
RemoteResponse.prototype.options = new array();

/**
 * The platform identifier
 *
 * @type String
 */
PlatformInfo.prototype.platformId = new String();

/**
 * The name of manufacturer.
 *
 * @type String
 */
PlatformInfo.prototype.manufacturerName = new String();

/**
 * The URL of manufacturer.
 *
 * @type String
 */
PlatformInfo.prototype.manufacturerUrl = new String();

/**
 * The model number is designated by manufacturer.
 *
 * @type String
 */
PlatformInfo.prototype.modelNumber = new String();

/**
 * The manufacture date of device.
 *
 * @type String
 */
PlatformInfo.prototype.manufactureDate = new String();

/**
 * The platform version is defined by manufacturer.
 *
 * @type String
 */
PlatformInfo.prototype.platformVersion = new String();

/**
 * The operating system version.
 *
 * @type String
 */
PlatformInfo.prototype.operatingSystemVersion = new String();

/**
 * The hardware version.
 *
 * @type String
 */
PlatformInfo.prototype.hardwareVersion = new String();

/**
 * The firmware version.
 *
 * @type String
 */
PlatformInfo.prototype.firmwareVersion = new String();

/**
 * The URL that points to support information from manufacturer.
 *
 * @type String
 */
PlatformInfo.prototype.supportUrl = new String();

/**
 * The System time.
 *
 * @type String
 */
PlatformInfo.prototype.systemTime = new String();

/**
 * The host address of the presence.
 *
 * @type String
 */
PresenceResponse.prototype.hostAddress = new String();

/**
 * The connectivity type of the presence.
 *
 * @type ConnectivityType
 */
PresenceResponse.prototype.connectivityType = new ConnectivityType();

/**
 * The resource type of the presence.
 *
 * @type ResourceType
 */
PresenceResponse.prototype.resourceType = new ResourceType();

/**
 * The results type of presence.
 *
 * @type PresenceResponseResultType
 */
PresenceResponse.prototype.resultType = new PresenceResponseResultType();

/**
 * The trigger type of presence. It is set only if a response result type is "OK".
 *
 * @type PresenceTriggerType
 */
PresenceResponse.prototype.triggerType = new PresenceTriggerType();

/**
 * Called when caching is successfully started.
 *
 * @param {Representation} representation
 * @type void
 * @memberOf CacheUpdatedCallback
 * @returns {void}
 */
CacheUpdatedCallback.prototype.onupdated = function(representation){ return; };

/**
 * The resource URI.
 *
 * @type String
 */
RemoteResource.prototype.uriPath = new String();

/**
 * It is connectivity type.
 *
 * @type ConnectivityType
 */
RemoteResource.prototype.connectivityType = new ConnectivityType();

/**
 * The host address
 *
 * @type String
 */
RemoteResource.prototype.hostAddress = new String();

/**
 * A list of types in this resource
 *
 * @type array
 */
RemoteResource.prototype.resourceTypes = new array();

/**
 * A list of interfaces in the resource.
 *
 * @type array
 */
RemoteResource.prototype.resourceInterfaces = new array();

/**
 * Indicates if the resource is observable or not
 *
 * @type Boolean
 */
RemoteResource.prototype.isObservable = new Boolean();

/**
 * Indicates if the resource is discoverable or not
 *
 * @type Boolean
 */
RemoteResource.prototype.isDiscoverable = new Boolean();

/**
 * Indicates if the resource is initialized and activated or not
 *
 * @type Boolean
 */
RemoteResource.prototype.isActive = new Boolean();

/**
 * Indicates if the resource takes some delay to respond or not
 *
 * @type Boolean
 */
RemoteResource.prototype.isSlow = new Boolean();

/**
 * Indicates if the resource is secure or not
 *
 * @type Boolean
 */
RemoteResource.prototype.isSecure = new Boolean();

/**
 * Indicates if the resource is is allowed to be discovered only if discovery request contains an explicit querystring or not
 *
 * @type Boolean
 */
RemoteResource.prototype.isExplicitDiscoverable = new Boolean();

/**
 * The device unique id. this is unique per-server independent on how it was discovered.
 *
 * @type String
 */
RemoteResource.prototype.deviceId = new String();

/**
 * The device name of the remote resource.
 *
 * @type String
 */
RemoteResource.prototype.deviceName = new String();

/**
 * The option for managing vendor specific option of COAP packet.
 *
 * @type array
 */
RemoteResource.prototype.options = new array();

/**
 * The cached representation of remote resource.
 *
 * @type Representation
 */
RemoteResource.prototype.cachedRepresentation = new Representation();

/**
 * The time interval in seconds for monitoring state (registered with setResourceStateChangeListener() ) and caching (registered with startCaching() ). Provided value must be in range from 1 to 3600 inclusive. The default value is 10 seconds.
 *
 * @type Number
 */
RemoteResource.prototype.timeInterval = new Number();

/**
 * Gets the attributes of a resource.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 TimeoutError: If there is no resource or response within timeout value.              </li>
              <li>
 AbortError:  In any system error is invoked              </li>
            </ul>
           
 *
 * @param {RemoteResourceResponseCallback} responseCallback
 * @param {Query} query
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf RemoteResource
 * @returns {void}
 */
RemoteResource.prototype.methodGet = function(responseCallback, query, errorCallback){ return; };

/**
 * Puts the representation of a resource for update.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 TimeoutError: If there is no resource or response within timeout value.              </li>
              <li>
 AbortError:  In any system error is invoked              </li>
            </ul>
           
 *
 * @param {Representation} representation
 * @param {RemoteResourceResponseCallback} responseCallback
 * @param {Query} query
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf RemoteResource
 * @returns {void}
 */
RemoteResource.prototype.methodPut = function(representation, responseCallback, query, errorCallback){ return; };

/**
 * Posts the representation of a resource for create.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 TimeoutError: If there is no resource or response within timeout value.              </li>
              <li>
 AbortError:  In any system error is invoked              </li>
            </ul>
           
 *
 * @param {Representation} representation
 * @param {RemoteResourceResponseCallback} responseCallback
 * @param {Query} query
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf RemoteResource
 * @returns {void}
 */
RemoteResource.prototype.methodPost = function(representation, responseCallback, query, errorCallback){ return; };

/**
 * Deletes the remote resource.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 TimeoutError: If there is no resource or response within timeout value.              </li>
              <li>
 AbortError:  In any system error is invoked              </li>
            </ul>
           
 *
 * @param {RemoteResourceResponseCallback} responseCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf RemoteResource
 * @returns {void}
 */
RemoteResource.prototype.methodDelete = function(responseCallback, errorCallback){ return; };

/**
 * Sets the listener to receive notification about attribute change of remote resource. When server sends notification message, successCallback will be called.
 *
 * @param {ObservePolicy} observePolicy
 * @param {RemoteResourceResponseCallback} successCallback
 * @param {Query} query
 * @type void
 * @memberOf RemoteResource
 * @returns {void}
 */
RemoteResource.prototype.startObserving = function(observePolicy, successCallback, query){ return; };

/**
 * Unregisters the listener. so stop receiving notification about attribute change of remote resource.
 *
 * @type void
 * @memberOf RemoteResource
 * @returns {void}
 */
RemoteResource.prototype.stopObserving = function(){ return; };

/**
 * Starts caching of a remote resource. cached representation is updated when remote resource is changed.
 *
 * @param {CacheUpdatedCallback} updatedCallback
 * @type void
 * @memberOf RemoteResource
 * @returns {void}
 */
RemoteResource.prototype.startCaching = function(updatedCallback){ return; };

/**
 * Stops caching of a remote resource.
 *
 * @type void
 * @memberOf RemoteResource
 * @returns {void}
 */
RemoteResource.prototype.stopCaching = function(){ return; };

/**
 * Sets a listener to monitor the state of the remote resource.
 *
 * @param {ResourceStateChangeCallback} successCallback
 * @type void
 * @memberOf RemoteResource
 * @returns {void}
 */
RemoteResource.prototype.setResourceStateChangeListener = function(successCallback){ return; };

/**
 * Unsets the listener to stop monitoring the state of the remote resource.
 *
 * @type void
 * @memberOf RemoteResource
 * @returns {void}
 */
RemoteResource.prototype.unsetResourceStateChangeListener = function(){ return; };

/**
 * Called when random pin is successfully generated.
 *
 * @param {String} pin
 * @type void
 * @memberOf GeneratedPinCallback
 * @returns {void}
 */
GeneratedPinCallback.prototype.onsuccess = function(pin){ return; };

/**
 * Called when request was received.
 *
 * @param {RemoteResource} remoteResource
 * @type void
 * @memberOf FoundResourceSuccessCallback
 * @returns {void}
 */
FoundResourceSuccessCallback.prototype.onfound = function(remoteResource){ return; };

/**
 * The ID of the option. id is always situated between 2048 and 3000.
 *
 * @type Number
 */
IotconOption.prototype.id = new Number();

/**
 * The string data to add. Length of data is less than or equal to 15.
 *
 * @type String
 */
IotconOption.prototype.data = new String();

/**
 * Called when connection change appeared.
 *
 * @param {Boolean} isAlive
 * @type void
 * @memberOf ResourceStateChangeCallback
 * @returns {void}
 */
ResourceStateChangeCallback.prototype.onchanged = function(isAlive){ return; };

/**
 * The resource URI.
 *
 * @type String
 */
Representation.prototype.uriPath = new String();

/**
 * A list of types in this resource
 *
 * @type array
 */
Representation.prototype.resourceTypes = new array();

/**
 * A list of interfaces in the resource.
 *
 * @type array
 */
Representation.prototype.resourceInterfaces = new array();

/**
 * A lists of attribute in this resource.
 *
 * @type object
 */
Representation.prototype.attributes = new object();

/**
 * the representations belong to the representation as children.
 *
 * @type array
 */
Representation.prototype.children = new array();

/**
 * The device name
 *
 * @type String
 */
DeviceInfo.prototype.deviceName = new String();

/**
 * The version of core specification.
 *
 * @type String
 */
DeviceInfo.prototype.specVersion = new String();

/**
 * The unique identifier for OIC device.
 *
 * @type String
 */
DeviceInfo.prototype.oicDeviceId = new String();

/**
 * The version of specification which the device's data model is implemented
 *
 * @type String
 */
DeviceInfo.prototype.dataModelVersion = new String();

/**
 * Returns an array of resources which are registered on the server.
 *
 * @type array
 * @memberOf Server
 * @returns {array}
 */
Server.prototype.getResources = function(){ var ret = new array(); return ret; };

/**
 * Creates a resource and registers the resource on server.
 *
 * @param {String} uriPath
 * @param {array} resourceTypes
 * @param {array} resourceInterfaces
 * @param {RequestCallback} listener
 * @param {ResourcePolicy} policy
 * @type Resource
 * @memberOf Server
 * @returns {Resource}
 */
Server.prototype.createResource = function(uriPath, resourceTypes, resourceInterfaces, listener, policy){ var ret = new Resource(); return ret; };

/**
 * Removes the resource and unregisters it from server.
 *
 * @param {Resource} resource
 * @type void
 * @memberOf Server
 * @returns {void}
 */
Server.prototype.removeResource = function(resource){ return; };

/**
 * Starts sending presence event of server. Server can send presence event to client when become online for the first time or come back from offline to online.
 *
 * @param {Number} timeToLive
 * @type void
 * @memberOf Server
 * @returns {void}
 */
Server.prototype.startPresence = function(timeToLive){ return; };

/**
 * Stops sending presence announcement of a server.
 *
 * @type void
 * @memberOf Server
 * @returns {void}
 */
Server.prototype.stopPresence = function(){ return; };

/**
 * Called when the platform information is received.
 *
 * @param {PlatformInfo} info
 * @type void
 * @memberOf FoundPlatformInfoSuccessCallback
 * @returns {void}
 */
FoundPlatformInfoSuccessCallback.prototype.onsuccess = function(info){ return; };

/**
 * Called when GET request was received.
 *
 * @param {Request} request
 * @type void
 * @memberOf RequestCallback
 * @returns {void}
 */
RequestCallback.prototype.onget = function(request){ return; };

/**
 * Called when PUT request was received.
 *
 * @param {Request} request
 * @type void
 * @memberOf RequestCallback
 * @returns {void}
 */
RequestCallback.prototype.onput = function(request){ return; };

/**
 * Called when POST request was received.
 *
 * @param {Request} request
 * @type void
 * @memberOf RequestCallback
 * @returns {void}
 */
RequestCallback.prototype.onpost = function(request){ return; };

/**
 * Called when DELETE request was received.
 *
 * @param {Request} request
 * @type void
 * @memberOf RequestCallback
 * @returns {void}
 */
RequestCallback.prototype.ondelete = function(request){ return; };

/**
 * Called when OBSERVE request was received.
 *
 * @param {Request} request
 * @param {ObserveType} observeType
 * @param {Number} observeId
 * @type void
 * @memberOf RequestCallback
 * @returns {void}
 */
RequestCallback.prototype.onobserving = function(request, observeType, observeId){ return; };

/**
 * Finds resources using host address and resource type.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 TimeoutError: If there is no resource or response within timeout value.              </li>
              <li>
 AbortError:  If any system error is invoked              </li>
            </ul>
            <p>
remarks  hostAddress should be in the format coap://address:port. For example "coaps://[fe80::ae5a:14ff:fe24:b8fe]:12345" or "coaps://192.168.1.10:12345".
            </p>
           
 *
 * @param {String} hostAddress
 * @param {Query} query
 * @param {ConnectivityType} connectivityType
 * @param {FoundResourceSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Client
 * @returns {void}
 */
Client.prototype.findResource = function(hostAddress, query, connectivityType, successCallback, errorCallback){ return; };

/**
 * Adds a listener to receive a presence events from the server. A server sends presence events when starts or stops presence.
 *
 * @param {String} hostAddress
 * @param {ResourceType} resourceType
 * @param {ConnectivityType} connectivityType
 * @param {PresenceEventCallback} successCallback
 * @type Number
 * @memberOf Client
 * @returns {Number}
 */
Client.prototype.addPresenceEventListener = function(hostAddress, resourceType, connectivityType, successCallback){ var ret = new Number(); return ret; };

/**
 * Unregisters a presence event listener.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf Client
 * @returns {void}
 */
Client.prototype.removePresenceEventListener = function(watchId){ return; };

/**
 * Gets the device information of remote server.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 TimeoutError: If there is no resource or response within timeout value.              </li>
              <li>
 AbortError:  If any system error is invoked              </li>
            </ul>
            <p>
remarks  hostAddress should be in the format coap://address:port. For example "coaps://[fe80::ae5a:14ff:fe24:b8fe]:12345" or "coaps://192.168.1.10:12345".
            </p>
           
 *
 * @param {String} hostAddress
 * @param {Query} query
 * @param {ConnectivityType} connectivityType
 * @param {FoundDeviceInfoSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Client
 * @returns {void}
 */
Client.prototype.findDeviceInfo = function(hostAddress, query, connectivityType, successCallback, errorCallback){ return; };

/**
 * Gets the platform information of remote server.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 TimeoutError: If there is no resource or response within timeout value.              </li>
              <li>
 AbortError:  In any system error is invoked              </li>
            </ul>
            <p>
remarks  hostAddress should be in the format coap://address:port. For example "coaps://[fe80::ae5a:14ff:fe24:b8fe]:12345" or "coaps://192.168.1.10:12345".
            </p>
           
 *
 * @param {String} hostAddress
 * @param {Query} query
 * @param {ConnectivityType} connectivityType
 * @param {FoundPlatformInfoSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Client
 * @returns {void}
 */
Client.prototype.findPlatformInfo = function(hostAddress, query, connectivityType, successCallback, errorCallback){ return; };

/**
 * Called when the device information is received.
 *
 * @param {DeviceInfo} info
 * @type void
 * @memberOf FoundDeviceInfoSuccessCallback
 * @returns {void}
 */
FoundDeviceInfoSuccessCallback.prototype.onsuccess = function(info){ return; };

/**
 * Called when the response is received.
 *
 * @param {RemoteResponse} response
 * @type void
 * @memberOf RemoteResourceResponseCallback
 * @returns {void}
 */
RemoteResourceResponseCallback.prototype.onsuccess = function(response){ return; };

/**
 * The device name of this application.
 *
 * @type String
 */
Iotcon.prototype.deviceName = new String();

/**
 * Connects to the iotcon service. Call this function to start Iotcon.
 *
 * @param {String} filePath
 * @type void
 * @memberOf Iotcon
 * @returns {void}
 */
Iotcon.prototype.initialize = function(filePath){ return; };

/**
 * Returns object of singleton, which provides methods for working with remote resources.
 *
 * @type Client
 * @memberOf Iotcon
 * @returns {Client}
 */
Iotcon.prototype.getClient = function(){ var ret = new Client(); return ret; };

/**
 * Returns the object, which provides methods for managing resources on current device.
 *
 * @type Server
 * @memberOf Iotcon
 * @returns {Server}
 */
Iotcon.prototype.getServer = function(){ var ret = new Server(); return ret; };

/**
 * Returns the number of seconds set as the timeout threshold of asynchronous API.
            <p>
This method returns the common timeout value for methods: <br/><a href="iotcon.html#Client::findDeviceInfo">findDeviceInfo</a><br/><a href="iotcon.html#Client::findPlatformInfo">findPlatformInfo</a><br/><a href="iotcon.html#Client::findResource">findResource</a><br/><a href="iotcon.html#RemoteResource::methodGet">methodGet</a><br/><a href="iotcon.html#RemoteResource::methodPut">methodPut</a><br/><a href="iotcon.html#RemoteResource::methodPost">methodPost</a><br/><a href="iotcon.html#RemoteResource::methodDelete">methodDelete</a><br/>All asynchronous APIs have the same timeout value, there is no way to have different timeout values at each method.
Without a response after the specified time, the mentioned methods would trigger an error callback with <var>TimeoutError</var>.
            </p>
           
 *
 * @type Number
 * @memberOf Iotcon
 * @returns {Number}
 */
Iotcon.prototype.getTimeout = function(){ var ret = new Number(); return ret; };

/**
 * Sets the timeout value, in seconds, of asynchronous APIs.
            <p>
The timeout value is common for methods: <br/><a href="iotcon.html#Client::findDeviceInfo">findDeviceInfo</a><br/><a href="iotcon.html#Client::findPlatformInfo">findPlatformInfo</a><br/><a href="iotcon.html#Client::findResource">findResource</a><br/><a href="iotcon.html#RemoteResource::methodGet">methodGet</a><br/><a href="iotcon.html#RemoteResource::methodPut">methodPut</a><br/><a href="iotcon.html#RemoteResource::methodPost">methodPost</a><br/><a href="iotcon.html#RemoteResource::methodDelete">methodDelete</a><br/>All asynchronous APIs have the same timeout value, there is no way to have different timeout values at each method.
Without a response after the specified time, the mentioned methods would trigger an error callback with <var>TimeoutError</var>.
            </p>
           
 *
 * @param {Number} timeout
 * @type void
 * @memberOf Iotcon
 * @returns {void}
 */
Iotcon.prototype.setTimeout = function(timeout){ return; };

/**
 * Adds a listener to receive generated random pin from provisioning tool .
 *
 * @param {GeneratedPinCallback} successCallback
 * @type Number
 * @memberOf Iotcon
 * @returns {Number}
 */
Iotcon.prototype.addGeneratedPinListener = function(successCallback){ var ret = new Number(); return ret; };

/**
 * Unregisters the listener and stops receiving generated random pin.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf Iotcon
 * @returns {void}
 */
Iotcon.prototype.removeGeneratedPinListener = function(watchId){ return; };

/**
 * The address of host of the request.
 *
 * @type String
 */
Request.prototype.hostAddress = new String();

/**
 * Connectivities type of connection.
 *
 * @type ConnectivityType
 */
Request.prototype.connectivityType = new ConnectivityType();

/**
 * The request representation.
 *
 * @type Representation
 */
Request.prototype.representation = new Representation();

/**
 * The option which was sent from client.
 *
 * @type array
 */
Request.prototype.options = new array();

/**
 * The query parameters from the request.
 *
 * @type Query
 */
Request.prototype.query = new Query();

/**
 * The Iotcon API provides functions for IoT connectivity.
 * <p>
It allows to register, discover and access to resources via RESTful API.
        </p>
 *
 * @feature http://tizen.org/feature/iot.ocf
 * @type Iotcon
 */
IotconObject.prototype.iotcon = new Iotcon();

/**
 * Called when client receive presence events.
 *
 * @param {PresenceResponse} presenceResponse
 * @type void
 * @memberOf PresenceEventCallback
 * @returns {void}
 */
PresenceEventCallback.prototype.onreceived = function(presenceResponse){ return; };

/**
 * The Iotcon API provides functions for IoT connectivity.
 * <p>
It allows to register, discover and access to resources via RESTful API.
        </p>
 *
 * @feature http://tizen.org/feature/iot.ocf
 * @type Iotcon
 */
Tizen.prototype.iotcon = new Iotcon();

/**
 * The KeyManagerObject interface defines what is instantiated by the object from the Tizen Platform.
          <p>
The <em>tizen.keymanager </em>object allows access to the functionality of the KeyManager API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {KeyManagerObject}
 */
function KeyManagerObject() {};
KeyManagerObject.prototype = new Object();

/**
 * 
 *
 * @super Object
 * @constructor
 * @return {KeyManager}
 */
function KeyManager() {};
KeyManager.prototype = new Object();

/**
 * The KeyManager API provides a secure repository for storing, retrieving and removing the sensitive data of users and their applications. Users can protect the data with passwords.
 *
 * @type KeyManager
 */
KeyManagerObject.prototype.keymanager = new KeyManager();

/**
 * Saves and stores data as a inside the KeyManager.
            <p>
On success, this method will add a <a href="#KeyManagerAlias">KeyManagerAlias</a> into the KeyManager. The <em>name</em> attribute of that KeyManagerAlias will be set to be the value of the <em>name</em> parameter which is used in this method call. The <em>packageId</em> attribute of that KeyManagerAlias will automatically be set to be the package ID of the application which calls this method.
            </p>
            <p>
The <em>ErrorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError - If the method cannot be completed because of an unknown error.              </li>
            </ul>
           
 *
 * @param {String} name
 * @param {RawData} rawData
 * @param {String} password
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf KeyManager
 * @returns {void}
 */
KeyManager.prototype.saveData = function(name, rawData, password, successCallback, errorCallback){ return; };

/**
 * Removes data from the KeyManager.
            <p>
To remove data, an application must have permission to remove that data. By default, an application which saved data into the KeyManager has permission to remove the data. An application can also use the <a href="#KeyManager::setPermission">setPermission</a> method to allow another application to remove its data.
            </p>
            <p>
If an application calls this method to remove data which it saved into the KeyManager, the <em>dataAlias</em> parameter does not require the <em>packageId</em> attribute.
            </p>
           
 *
 * @param {KeyManagerAlias} dataAlias
 * @type void
 * @memberOf KeyManager
 * @returns {void}
 */
KeyManager.prototype.removeData = function(dataAlias){ return; };

/**
 * Gets raw data from the KeyManager.
            <p>
To get raw data, an application must have permission to get that raw data. By default, an application which saved raw data into the KeyManager has permission to get that raw data. An application can also use the <a href="#KeyManager::setPermission">setPermission</a> method to allow another application to get and read its raw data.
            </p>
            <p>
If an application calls this method to retrieve raw data which it saved into the KeyManager, the <em>dataAlias</em> parameter does not require the <em>packageId</em> attribute.
            </p>
           
 *
 * @param {KeyManagerAlias} dataAlias
 * @param {String} password
 * @type RawData
 * @memberOf KeyManager
 * @returns {RawData}
 */
KeyManager.prototype.getData = function(dataAlias, password){ var ret = new RawData(); return ret; };

/**
 * Gets all the aliases which an application can access.
 *
 * @type array
 * @memberOf KeyManager
 * @returns {array}
 */
KeyManager.prototype.getDataAliasList = function(){ var ret = new array(); return ret; };

/**
 * Sets permissions that another application has for accessing an application's data.
            <p>
An application can only set permissions for data which it saved into the KeyManager. Therefore, the <em>dataAlias</em> parameter does not require the <em>packageId</em> attribute.
            </p>
            <p>
The <em>ErrorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the dataAlias cannot be found.              </li>
              <li>
UnknownError - If the method cannot be completed because of an unknown error.              </li>
            </ul>
           
 *
 * @param {KeyManagerAlias} dataAlias
 * @param {PackageId} packageId
 * @param {PermissionType} permissionType
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf KeyManager
 * @returns {void}
 */
KeyManager.prototype.setPermission = function(dataAlias, packageId, permissionType, successCallback, errorCallback){ return; };

/**
 * The KeyManager API provides a secure repository for storing, retrieving and removing the sensitive data of users and their applications. Users can protect the data with passwords.
 *
 * @type KeyManager
 */
Tizen.prototype.keymanager = new KeyManager();

/**
 * The MediaControllerReceiveCommandCallback interface that defines the listener for custom commands from client in .
 *
 * @super Object
 * @constructor
 * @return {MediaControllerReceiveCommandCallback}
 */
function MediaControllerReceiveCommandCallback() {};
MediaControllerReceiveCommandCallback.prototype = new Object();

/**
 * Current playback info.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerPlaybackInfo}
 */
function MediaControllerPlaybackInfo() {};
MediaControllerPlaybackInfo.prototype = new Object();

/**
 * This interface provides access to the object.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerManager}
 */
function MediaControllerManager() {};
MediaControllerManager.prototype = new Object();

/**
 * The MediaControllerServerInfoArraySuccessCallback interface that defines the success method for .
 *
 * @super Object
 * @constructor
 * @return {MediaControllerServerInfoArraySuccessCallback}
 */
function MediaControllerServerInfoArraySuccessCallback() {};
MediaControllerServerInfoArraySuccessCallback.prototype = new Object();

/**
 * The MediaControllerServerStatusChangeCallback interface that defines the listener for media controller server status changes.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerServerStatusChangeCallback}
 */
function MediaControllerServerStatusChangeCallback() {};
MediaControllerServerStatusChangeCallback.prototype = new Object();

/**
 * Provides functions for sending the server information to the client.
          <p>
Allows the application to send the playback state and metadata to other application
and be controlled by other application(client) remotely.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {MediaControllerServer}
 */
function MediaControllerServer() {};
MediaControllerServer.prototype = new Object();

/**
 * The MediaControllerPlaybackInfoChangeCallback interface that defines the listeners object for receiving media controller playback info changes from server.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerPlaybackInfoChangeCallback}
 */
function MediaControllerPlaybackInfoChangeCallback() {};
MediaControllerPlaybackInfoChangeCallback.prototype = new Object();

/**
 * This interface defines what is instantiated by the object from the Tizen platform.
          <p>
There is a <em>tizen.mediacontroller</em> object that allows access to the MediaController API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {MediaControllerObject}
 */
function MediaControllerObject() {};
MediaControllerObject.prototype = new Object();

/**
 * Playback metadata.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerMetadata}
 */
function MediaControllerMetadata() {};
MediaControllerMetadata.prototype = new Object();

/**
 * The MediaControllerChangeRequestPlaybackInfoCallback interface that defines the listeners object for receiving playback info change requests from client.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerChangeRequestPlaybackInfoCallback}
 */
function MediaControllerChangeRequestPlaybackInfoCallback() {};
MediaControllerChangeRequestPlaybackInfoCallback.prototype = new Object();

/**
 * The MediaControllerSendCommandSuccessCallback interface that defines the success method for .
 *
 * @super Object
 * @constructor
 * @return {MediaControllerSendCommandSuccessCallback}
 */
function MediaControllerSendCommandSuccessCallback() {};
MediaControllerSendCommandSuccessCallback.prototype = new Object();

/**
 * The media controller client API and functions related with handling media control. Functions include operations to get the latest status of the media controller servers.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerClient}
 */
function MediaControllerClient() {};
MediaControllerClient.prototype = new Object();

/**
 * This interface provides media controller server state and playback info. Provides methods to send commands to server and listen for server status change.
 *
 * @super Object
 * @constructor
 * @return {MediaControllerServerInfo}
 */
function MediaControllerServerInfo() {};
MediaControllerServerInfo.prototype = new Object();

/**
 * Called when custom command received from client.
 *
 * @param {ApplicationId} clientName
 * @param {String} command
 * @param {object} data
 * @type object
 * @memberOf MediaControllerReceiveCommandCallback
 * @returns {object}
 */
MediaControllerReceiveCommandCallback.prototype.onsuccess = function(clientName, command, data){ var ret = new object(); return ret; };

/**
 * Current playback state.
 *
 * @type MediaControllerPlaybackState
 */
MediaControllerPlaybackInfo.prototype.state = new MediaControllerPlaybackState();

/**
 * Current playback position.
 *
 * @type Number
 */
MediaControllerPlaybackInfo.prototype.position = new Number();

/**
 * Current shuffle mode.
 *
 * @type Boolean
 */
MediaControllerPlaybackInfo.prototype.shuffleMode = new Boolean();

/**
 * Current repeat mode.
 *
 * @type Boolean
 */
MediaControllerPlaybackInfo.prototype.repeatMode = new Boolean();

/**
 * Current playback metadata.
 *
 * @type MediaControllerMetadata
 */
MediaControllerPlaybackInfo.prototype.metadata = new MediaControllerMetadata();

/**
 * Gets the client object. If not exist, client will be automatically created.
 *
 * @type MediaControllerClient
 * @memberOf MediaControllerManager
 * @returns {MediaControllerClient}
 */
MediaControllerManager.prototype.getClient = function(){ var ret = new MediaControllerClient(); return ret; };

/**
 * Creates the Server object which holds playback state, meta data and is controlled by Client.
 *
 * @type MediaControllerServer
 * @memberOf MediaControllerManager
 * @returns {MediaControllerServer}
 */
MediaControllerManager.prototype.createServer = function(){ var ret = new MediaControllerServer(); return ret; };

/**
 * Called when all registered media controller servers found.
 *
 * @param {array} servers
 * @type void
 * @memberOf MediaControllerServerInfoArraySuccessCallback
 * @returns {void}
 */
MediaControllerServerInfoArraySuccessCallback.prototype.onsuccess = function(servers){ return; };

/**
 * Called when server status changed.
 *
 * @param {MediaControllerServerState} status
 * @type void
 * @memberOf MediaControllerServerStatusChangeCallback
 * @returns {void}
 */
MediaControllerServerStatusChangeCallback.prototype.onsuccess = function(status){ return; };

/**
 * Current playback info.
 *
 * @type MediaControllerPlaybackInfo
 */
MediaControllerServer.prototype.playbackInfo = new MediaControllerPlaybackInfo();

/**
 * Update playback state and send notification to the listening clients. See to check how to receive playback info changes from server on client side.
 *
 * @param {MediaControllerPlaybackState} state
 * @type void
 * @memberOf MediaControllerServer
 * @returns {void}
 */
MediaControllerServer.prototype.updatePlaybackState = function(state){ return; };

/**
 * Update playback position and send notification to the listening clients.
 *
 * @param {Number} position
 * @type void
 * @memberOf MediaControllerServer
 * @returns {void}
 */
MediaControllerServer.prototype.updatePlaybackPosition = function(position){ return; };

/**
 * Update shuffle mode and send notification to the listening clients.
 *
 * @param {Boolean} mode
 * @type void
 * @memberOf MediaControllerServer
 * @returns {void}
 */
MediaControllerServer.prototype.updateShuffleMode = function(mode){ return; };

/**
 * Update repeat mode and send notification to the listening clients.
 *
 * @param {Boolean} mode
 * @type void
 * @memberOf MediaControllerServer
 * @returns {void}
 */
MediaControllerServer.prototype.updateRepeatMode = function(mode){ return; };

/**
 * Update repeat mode and send notification to the listening clients.
 *
 * @param {MediaControllerMetadata} metadata
 * @type void
 * @memberOf MediaControllerServer
 * @returns {void}
 */
MediaControllerServer.prototype.updateMetadata = function(metadata){ return; };

/**
 * Adds the listener for a media playback info requests from client. See to check how to send playback info change requests from client.
 *
 * @param {MediaControllerChangeRequestPlaybackInfoCallback} listener
 * @type Number
 * @memberOf MediaControllerServer
 * @returns {Number}
 */
MediaControllerServer.prototype.addChangeRequestPlaybackInfoListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Removes the listener, so stop receiving playback state requests from clients.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf MediaControllerServer
 * @returns {void}
 */
MediaControllerServer.prototype.removeChangeRequestPlaybackInfoListener = function(watchId){ return; };

/**
 * Adds the listener for receiving custom commands from client. See to check how to send custom commands from client.
 *
 * @param {MediaControllerReceiveCommandCallback} listener
 * @type Number
 * @memberOf MediaControllerServer
 * @returns {Number}
 */
MediaControllerServer.prototype.addCommandListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Removes the listener, so stop receiving custom commands from clients.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf MediaControllerServer
 * @returns {void}
 */
MediaControllerServer.prototype.removeCommandListener = function(watchId){ return; };

/**
 * Called when playback state or position changed.
 *
 * @param {MediaControllerPlaybackState} state
 * @param {Number} position
 * @type void
 * @memberOf MediaControllerPlaybackInfoChangeCallback
 * @returns {void}
 */
MediaControllerPlaybackInfoChangeCallback.prototype.onplaybackchanged = function(state, position){ return; };

/**
 * Called when shuffle mode changed.
 *
 * @param {Boolean} mode
 * @type void
 * @memberOf MediaControllerPlaybackInfoChangeCallback
 * @returns {void}
 */
MediaControllerPlaybackInfoChangeCallback.prototype.onshufflemodechanged = function(mode){ return; };

/**
 * Called when repeat mode changed.
 *
 * @param {Boolean} mode
 * @type void
 * @memberOf MediaControllerPlaybackInfoChangeCallback
 * @returns {void}
 */
MediaControllerPlaybackInfoChangeCallback.prototype.onrepeatmodechanged = function(mode){ return; };

/**
 * Called when playback metadata changed.
 *
 * @param {MediaControllerMetadata} metadata
 * @type void
 * @memberOf MediaControllerPlaybackInfoChangeCallback
 * @returns {void}
 */
MediaControllerPlaybackInfoChangeCallback.prototype.onmetadatachanged = function(metadata){ return; };

/**
 * The MediaController API provides functions for communication between the media controller server and the media controller client.
 * <p>
It helps to transfer the information like playback info, shuffle/repeat mode
and metadata from media controller server to client. Allows to control server state
by sending commands from client.
        </p>
 *
 * @type MediaControllerManager
 */
MediaControllerObject.prototype.mediacontroller = new MediaControllerManager();

/**
 * Media title.
 *
 * @type String
 */
MediaControllerMetadata.prototype.title = new String();

/**
 * Media artist.
 *
 * @type String
 */
MediaControllerMetadata.prototype.artist = new String();

/**
 * Media album.
 *
 * @type String
 */
MediaControllerMetadata.prototype.album = new String();

/**
 * Media author.
 *
 * @type String
 */
MediaControllerMetadata.prototype.author = new String();

/**
 * Media genre.
 *
 * @type String
 */
MediaControllerMetadata.prototype.genre = new String();

/**
 * Media duration.
 *
 * @type String
 */
MediaControllerMetadata.prototype.duration = new String();

/**
 * Media date.
 *
 * @type String
 */
MediaControllerMetadata.prototype.date = new String();

/**
 * Media copyright.
 *
 * @type String
 */
MediaControllerMetadata.prototype.copyright = new String();

/**
 * Media description.
 *
 * @type String
 */
MediaControllerMetadata.prototype.description = new String();

/**
 * Media track number.
 *
 * @type String
 */
MediaControllerMetadata.prototype.trackNum = new String();

/**
 * Media picture.
 *
 * @type String
 */
MediaControllerMetadata.prototype.picture = new String();

/**
 * Called when client requested playback state change.
 *
 * @param {MediaControllerPlaybackState} state
 * @type void
 * @memberOf MediaControllerChangeRequestPlaybackInfoCallback
 * @returns {void}
 */
MediaControllerChangeRequestPlaybackInfoCallback.prototype.onplaybackstaterequest = function(state){ return; };

/**
 * Called when client requested playback position change.
 *
 * @param {Number} position
 * @type void
 * @memberOf MediaControllerChangeRequestPlaybackInfoCallback
 * @returns {void}
 */
MediaControllerChangeRequestPlaybackInfoCallback.prototype.onplaybackpositionrequest = function(position){ return; };

/**
 * Called when client requested shuffle mode change.
 *
 * @param {Boolean} mode
 * @type void
 * @memberOf MediaControllerChangeRequestPlaybackInfoCallback
 * @returns {void}
 */
MediaControllerChangeRequestPlaybackInfoCallback.prototype.onshufflemoderequest = function(mode){ return; };

/**
 * Called when client requested repeat mode change.
 *
 * @param {Boolean} mode
 * @type void
 * @memberOf MediaControllerChangeRequestPlaybackInfoCallback
 * @returns {void}
 */
MediaControllerChangeRequestPlaybackInfoCallback.prototype.onrepeatmoderequest = function(mode){ return; };

/**
 * Called when server responded to received custom command.
 *
 * @param {object} data
 * @type void
 * @memberOf MediaControllerSendCommandSuccessCallback
 * @returns {void}
 */
MediaControllerSendCommandSuccessCallback.prototype.onsuccess = function(data){ return; };

/**
 * Retrieves all activated media controller servers.
 *
 * @param {MediaControllerServerInfoArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MediaControllerClient
 * @returns {void}
 */
MediaControllerClient.prototype.findServers = function(successCallback, errorCallback){ return; };

/**
 * Gets the latest media controller server info.
 *
 * @type MediaControllerServerInfo
 * @memberOf MediaControllerClient
 * @returns {MediaControllerServerInfo}
 */
MediaControllerClient.prototype.getLatestServerInfo = function(){ var ret = new MediaControllerServerInfo(); return ret; };

/**
 * The appId of the media controller server.
 *
 * @type ApplicationId
 */
MediaControllerServerInfo.prototype.name = new ApplicationId();

/**
 * State of the media controller server.
 *
 * @type MediaControllerServerState
 */
MediaControllerServerInfo.prototype.state = new MediaControllerServerState();

/**
 * Current playback info.
 *
 * @type MediaControllerPlaybackInfo
 */
MediaControllerServerInfo.prototype.playbackInfo = new MediaControllerPlaybackInfo();

/**
 * Allows to change playback state of media controller server.
 *
 * @param {MediaControllerPlaybackState} state
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MediaControllerServerInfo
 * @returns {void}
 */
MediaControllerServerInfo.prototype.sendPlaybackState = function(state, successCallback, errorCallback){ return; };

/**
 * Allows to change playback position of media controller server.
 *
 * @param {Number} position
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MediaControllerServerInfo
 * @returns {void}
 */
MediaControllerServerInfo.prototype.sendPlaybackPosition = function(position, successCallback, errorCallback){ return; };

/**
 * Allows to change shuffle mode of media controller server.
 *
 * @param {Boolean} mode
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MediaControllerServerInfo
 * @returns {void}
 */
MediaControllerServerInfo.prototype.sendShuffleMode = function(mode, successCallback, errorCallback){ return; };

/**
 * Allows to change repeat mode of media controller server.
 *
 * @param {Boolean} mode
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MediaControllerServerInfo
 * @returns {void}
 */
MediaControllerServerInfo.prototype.sendRepeatMode = function(mode, successCallback, errorCallback){ return; };

/**
 * Allows to send custom command to media controller server.
 *
 * @param {String} command
 * @param {object} data
 * @param {MediaControllerSendCommandSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MediaControllerServerInfo
 * @returns {void}
 */
MediaControllerServerInfo.prototype.sendCommand = function(command, data, successCallback, errorCallback){ return; };

/**
 * Adds the listener for a media controller server status change.
 *
 * @param {MediaControllerServerStatusChangeCallback} listener
 * @type Number
 * @memberOf MediaControllerServerInfo
 * @returns {Number}
 */
MediaControllerServerInfo.prototype.addServerStatusChangeListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Removes the listener, so stop receiving notifications about media controller server status.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf MediaControllerServerInfo
 * @returns {void}
 */
MediaControllerServerInfo.prototype.removeServerStatusChangeListener = function(watchId){ return; };

/**
 * Adds the listener for a media playback info changes.
 *
 * @param {MediaControllerPlaybackInfoChangeCallback} listener
 * @type Number
 * @memberOf MediaControllerServerInfo
 * @returns {Number}
 */
MediaControllerServerInfo.prototype.addPlaybackInfoChangeListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Removes the listener, so stop receiving notifications about media playback info changes.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf MediaControllerServerInfo
 * @returns {void}
 */
MediaControllerServerInfo.prototype.removePlaybackInfoChangeListener = function(watchId){ return; };

/**
 * The MediaController API provides functions for communication between the media controller server and the media controller client.
 * <p>
It helps to transfer the information like playback info, shuffle/repeat mode
and metadata from media controller server to client. Allows to control server state
by sending commands from client.
        </p>
 *
 * @type MediaControllerManager
 */
Tizen.prototype.mediacontroller = new MediaControllerManager();

/**
 * The MediaKeyManagerObject interface defines what is instantiated in the tizen object.
          <p>
There is a tizen.mediakey object that allows accessing the functionality of the MediaKey API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {MediaKeyManagerObject}
 */
function MediaKeyManagerObject() {};
MediaKeyManagerObject.prototype = new Object();

/**
 * The MediaKeyManager interface provides the functionalities to get information about media key events.
 *
 * @super Object
 * @constructor
 * @return {MediaKeyManager}
 */
function MediaKeyManager() {};
MediaKeyManager.prototype = new Object();

/**
 * The MediaKeyEventCallback interface specifies a media key event callback for getting notified information about the media key events.
 *
 * @super Object
 * @constructor
 * @return {MediaKeyEventCallback}
 */
function MediaKeyEventCallback() {};
MediaKeyEventCallback.prototype = new Object();

/**
 * The MediaKey API provides functions to get notified when a media key has been pressed or released.
 * <p>
Media keys are the keys of a Bluetooth headset which control multimedia playback.
        </p>
 * <p>
For more information on the MediaKey features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/media_guide/mediakey.htm">MediaKey Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/network.bluetooth.audio.media
 * @type MediaKeyManager
 */
MediaKeyManagerObject.prototype.mediakey = new MediaKeyManager();

/**
 * Registers a listener to be called when a media key is pressed or released.
 *
 * @param {MediaKeyEventCallback} callback
 * @type void
 * @memberOf MediaKeyManager
 * @returns {void}
 */
MediaKeyManager.prototype.setMediaKeyEventListener = function(callback){ return; };

/**
 * Unsubscribes from receiving notification for detecting the media key event.
 *
 * @type void
 * @memberOf MediaKeyManager
 * @returns {void}
 */
MediaKeyManager.prototype.unsetMediaKeyEventListener = function(){ return; };

/**
 * Called when a media key has been pressed.
 *
 * @param {MediaKeyType} type
 * @type void
 * @memberOf MediaKeyEventCallback
 * @returns {void}
 */
MediaKeyEventCallback.prototype.onpressed = function(type){ return; };

/**
 * Called when a media key has been released.
 *
 * @param {MediaKeyType} type
 * @type void
 * @memberOf MediaKeyEventCallback
 * @returns {void}
 */
MediaKeyEventCallback.prototype.onreleased = function(type){ return; };

/**
 * The MediaKey API provides functions to get notified when a media key has been pressed or released.
 * <p>
Media keys are the keys of a Bluetooth headset which control multimedia playback.
        </p>
 * <p>
For more information on the MediaKey features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/media_guide/mediakey.htm">MediaKey Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/network.bluetooth.audio.media
 * @type MediaKeyManager
 */
Tizen.prototype.mediakey = new MediaKeyManager();

/**
 * The interface defines what is instantiated by the Tizen object from the Tizen Platform.
          <p>
The <em>tizen.messageport</em> object allows access to the functionality of the Message Port API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {MessagePortManagerObject}
 */
function MessagePortManagerObject() {};
MessagePortManagerObject.prototype = new Object();

/**
 * The MessagePortCallback interface defines notification callbacks for receiving data from other applications.
 *
 * @super Object
 * @constructor
 * @return {MessagePortCallback}
 */
function MessagePortCallback() {};
MessagePortCallback.prototype = new Object();

/**
 * The interface provides methods to send messages.
 *
 * @super Object
 * @constructor
 * @return {RemoteMessagePort}
 */
function RemoteMessagePort() {};
RemoteMessagePort.prototype = new Object();

/**
 * The interface provides methods to receive data.
 *
 * @super Object
 * @constructor
 * @return {LocalMessagePort}
 */
function LocalMessagePort() {};
LocalMessagePort.prototype = new Object();

/**
 * The interface provides methods to request message port to communicate.
 *
 * @super Object
 * @constructor
 * @return {MessagePortManager}
 */
function MessagePortManager() {};
MessagePortManager.prototype = new Object();

/**
 * The MessagePort API provides the functionality for communicating with other applications.
 * <p>
For more information on the MessagePort features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/io_guide/messageport.htm">MessagePort Guide</a>.
        </p>
 *
 * @type MessagePortManager
 */
MessagePortManagerObject.prototype.messageport = new MessagePortManager();

/**
 * Called when data is received from other applications via the specified message port name.
 *
 * @param {array} data
 * @param {RemoteMessagePort} remoteMessagePort
 * @type void
 * @memberOf MessagePortCallback
 * @returns {void}
 */
MessagePortCallback.prototype.onreceived = function(data, remoteMessagePort){ return; };

/**
 * The message port name.
 *
 * @type String
 */
RemoteMessagePort.prototype.messagePortName = new String();

/**
 * The application ID to connect with.
 *
 * @type ApplicationId
 */
RemoteMessagePort.prototype.appId = new ApplicationId();

/**
 * The flag indicating whether the message port is trusted.
 *
 * @type Boolean
 */
RemoteMessagePort.prototype.isTrusted = new Boolean();

/**
 * Sends messages to the specified application.
            <p>
The sent messages will be ignored without any notice, unless the target application added one or more listeners to the target local message port.
            </p>
           
 *
 * @param {array} data
 * @param {LocalMessagePort} localMessagePort
 * @type void
 * @memberOf RemoteMessagePort
 * @returns {void}
 */
RemoteMessagePort.prototype.sendMessage = function(data, localMessagePort){ return; };

/**
 * The name of the message port name.
 *
 * @type String
 */
LocalMessagePort.prototype.messagePortName = new String();

/**
 * The flag indicating whether the message port is trusted.
 *
 * @type Boolean
 */
LocalMessagePort.prototype.isTrusted = new Boolean();

/**
 * Adds a message port listener to receive messages from other applications.
 *
 * @param {MessagePortCallback} listener
 * @type Number
 * @memberOf LocalMessagePort
 * @returns {Number}
 */
LocalMessagePort.prototype.addMessagePortListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Removes the message port listener.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf LocalMessagePort
 * @returns {void}
 */
LocalMessagePort.prototype.removeMessagePortListener = function(watchId){ return; };

/**
 * Requests a LocalMessage Port instance to start receiving message from another application.
 *
 * @param {String} localMessagePortName
 * @type LocalMessagePort
 * @memberOf MessagePortManager
 * @returns {LocalMessagePort}
 */
MessagePortManager.prototype.requestLocalMessagePort = function(localMessagePortName){ var ret = new LocalMessagePort(); return ret; };

/**
 * Requests a trusted LocalMessagePort instance to receive message from another application.
            <p>
Trusted local message port can communicate with applications that are signed with same certificate.
            </p>
           
 *
 * @param {String} localMessagePortName
 * @type LocalMessagePort
 * @memberOf MessagePortManager
 * @returns {LocalMessagePort}
 */
MessagePortManager.prototype.requestTrustedLocalMessagePort = function(localMessagePortName){ var ret = new LocalMessagePort(); return ret; };

/**
 * Requests a RemoteMessagePort instance to send message to another application.
            <p>
If the message port name and application ID are the same, the platform returns the same RemoteMessagePort instance.
            </p>
           
 *
 * @param {ApplicationId} appId
 * @param {String} remoteMessagePortName
 * @type RemoteMessagePort
 * @memberOf MessagePortManager
 * @returns {RemoteMessagePort}
 */
MessagePortManager.prototype.requestRemoteMessagePort = function(appId, remoteMessagePortName){ var ret = new RemoteMessagePort(); return ret; };

/**
 * Requests a trusted RemoteMessagePort instance to receive message from another application.
            <p>
If the message port name and application ID are the same, the platform returns the same RemoteMessagePort instance.
Trusted remote message port can communicate with applications that are signed with same certificate.
            </p>
           
 *
 * @param {ApplicationId} appId
 * @param {String} remoteMessagePortName
 * @type RemoteMessagePort
 * @memberOf MessagePortManager
 * @returns {RemoteMessagePort}
 */
MessagePortManager.prototype.requestTrustedRemoteMessagePort = function(appId, remoteMessagePortName){ var ret = new RemoteMessagePort(); return ret; };

/**
 * The MessagePort API provides the functionality for communicating with other applications.
 * <p>
For more information on the MessagePort features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/io_guide/messageport.htm">MessagePort Guide</a>.
        </p>
 *
 * @type MessagePortManager
 */
Tizen.prototype.messageport = new MessagePortManager();

/**
 * The NDEFRecord interface.
 *
 * @super Object
 * @constructor
 * @return {NDEFRecord}
 */
function NDEFRecord() {};
NDEFRecord.prototype = new Object();

/**
 * The NFCTagDetectCallback interface specifies a success callback to be invoked when an NFC tag is detected or lost.
          <p>
This callback interface specifies two methods:
          </p>
          <ul>
            <li>
 onattach: Invoked when an NFC tag is detected            </li>
            <li>
 ondetach: Invoked when an NFC tag is lost            </li>
          </ul>
          <p>
It is used in NFCAdapter.setTagListener().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {NFCTagDetectCallback}
 */
function NFCTagDetectCallback() {};
NFCTagDetectCallback.prototype = new Object();

/**
 * The NDEFMessage interface. An NDEFmessage is composed of multiple NDEFRecords. The NDEFMessage must have at least one NDEFRecord.
 *
 * @super Object
 * @constructor
 * @return {NDEFMessage}
 */
function NDEFMessage() {};
NDEFMessage.prototype = new Object();

/**
 * The ActiveSecureElementChangeCallback interface specifies a success callback to be invoked when an active secure element is changed.
 *
 * @super Object
 * @constructor
 * @return {ActiveSecureElementChangeCallback}
 */
function ActiveSecureElementChangeCallback() {};
ActiveSecureElementChangeCallback.prototype = new Object();

/**
 * The NDEFRecord that has text type payload.
 *
 * @super Object
 * @constructor
 * @return {NDEFRecordText}
 */
function NDEFRecordText() {};
NDEFRecordText.prototype = new NDEFRecord();

/**
 * The AIDArraySuccessCallback interface specifies a success callback to be invoked when an NFCAdaptor.getAIDsForCategory() completes successfully.
 *
 * @super Object
 * @constructor
 * @return {AIDArraySuccessCallback}
 */
function AIDArraySuccessCallback() {};
AIDArraySuccessCallback.prototype = new Object();

/**
 * The NFCPeer interface provides access to the NFC peer-to-peer target.
 *
 * @super Object
 * @constructor
 * @return {NFCPeer}
 */
function NFCPeer() {};
NFCPeer.prototype = new Object();

/**
 * The NDEFMessageReadCallback interface specifies a success callback to be invoked when data has been read successfully from the NFC tag or target.
          <p>
This callback interface specifies a success method with
an NDEF message as an input parameter.
It is used in asynchronous
operations, such as NFCTag.readNDEF() or NFCPeer.setReceiveNDEFListener().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {NDEFMessageReadCallback}
 */
function NDEFMessageReadCallback() {};
NDEFMessageReadCallback.prototype = new Object();

/**
 * The NFCManagerObject interface defines what is instantiated by the object from the Tizen Platform. The object allows access to the functionality of the NFC API.
 *
 * @super Object
 * @constructor
 * @return {NFCManagerObject}
 */
function NFCManagerObject() {};
NFCManagerObject.prototype = new Object();

/**
 * The HCEEventReceiveCallback interface specifies a success callback to be invoked when an HCE event is detected.
 *
 * @super Object
 * @constructor
 * @return {HCEEventReceiveCallback}
 */
function HCEEventReceiveCallback() {};
HCEEventReceiveCallback.prototype = new Object();

/**
 * The NFCManager interface provides access to the NFC tag/target.
          <p>
It provides access to the API functionalities through the tizen.nfc interface.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {NFCManager}
 */
function NFCManager() {};
NFCManager.prototype = new Object();

/**
 * The NDEFRecord that has URI type payload.
 *
 * @super Object
 * @constructor
 * @return {NDEFRecordURI}
 */
function NDEFRecordURI() {};
NDEFRecordURI.prototype = new NDEFRecord();

/**
 * The ByteArraySuccessCallback interface specifies a success callback to be invoked when NFCTag.transceive() completes successfully.
          <p>
This callback interface specifies a success method, with
raw data as an input parameter. It is used in NFCTag.transceive().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ByteArraySuccessCallback}
 */
function ByteArraySuccessCallback() {};
ByteArraySuccessCallback.prototype = new Object();

/**
 * The NFCAdapter interface provides access to control the adapter by offering methods to control local NFC behaviors, such as turning on/off an adapter.
 *
 * @super Object
 * @constructor
 * @return {NFCAdapter}
 */
function NFCAdapter() {};
NFCAdapter.prototype = new Object();

/**
 * The AID data interface represents registerd AID data
 *
 * @super Object
 * @constructor
 * @return {AIDData}
 */
function AIDData() {};
AIDData.prototype = new Object();

/**
 * The CardEmulationModeChangeCallback interface specifies a success callback to be invoked when the card emulation mode is changed.
 *
 * @super Object
 * @constructor
 * @return {CardEmulationModeChangeCallback}
 */
function CardEmulationModeChangeCallback() {};
CardEmulationModeChangeCallback.prototype = new Object();

/**
 * The NFCTag interface provides access to the NFC tag.
 *
 * @super Object
 * @constructor
 * @return {NFCTag}
 */
function NFCTag() {};
NFCTag.prototype = new Object();

/**
 * The HCEEventData interface represents HCE event data.
 *
 * @super Object
 * @constructor
 * @return {HCEEventData}
 */
function HCEEventData() {};
HCEEventData.prototype = new Object();

/**
 * The NDEFRecord that has mime type payload.
 *
 * @super Object
 * @constructor
 * @return {NDEFRecordMedia}
 */
function NDEFRecordMedia() {};
NDEFRecordMedia.prototype = new NDEFRecord();

/**
 * The NFCPeerDetectCallback interface specifies a success callback to be invoked when an NFC peer-to-peer target is detected or lost.
          <p>
This callback interface specifies two methods:
          </p>
          <ul>
            <li>
 onattach: Invoked when an NFC peer-to-peer target is detected            </li>
            <li>
 ondetach: Invoked when an NFC peer-to-peer target is lost            </li>
          </ul>
          <p>
It is used in NFCAdapter.setPeerListener().
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {NFCPeerDetectCallback}
 */
function NFCPeerDetectCallback() {};
NFCPeerDetectCallback.prototype = new Object();

/**
 * The TransactionEventCallback interface specifies a success callback to be invoked when an external reader tries to access a secure element.
 *
 * @super Object
 * @constructor
 * @return {TransactionEventCallback}
 */
function TransactionEventCallback() {};
TransactionEventCallback.prototype = new Object();

/**
 * The value of the record type (TNF value).
 * <p>
At least the following values must be supported:
            </p>
 * <ul>
 * <li>NFC_RECORD_TNF_EMPTY - The record type is empty
 * <li>NFC_RECORD_TNF_WELL_KNOWN - Record Type Definition (RTD) format [NFC RTD]
 * <li>NFC_RECORD_TNF_MIME_MEDIA - MIME media types in RFC 2046 [RFC 2046]
 * <li>NFC_RECORD_TNF_URI - Absolute URI as defined in RFC 3986 [RFC 3986]
 * <li>NFC_RECORD_TNF_EXTERNAL_RTD - NFC forum external type [NFC RTD]
 * <li>NFC_RECORD_TNF_UNKNOWN - The payload type is unknown
 * <li>NFC_RECORD_TNF_UNCHANGED - It means the payload is an intermediate or final chunk of a chunked NDEF record
 * </ul>
 *
 * @type Number
 */
NDEFRecord.prototype.tnf = new Number();

/**
 * The specified type in byte array.
 * <p>
The byte array contains <var>0</var> to <var>255</var> bytes.
            </p>
 *
 * @type array
 */
NDEFRecord.prototype.type = new array();

/**
 * The record ID.
 * <p>
The byte array contains <var>0</var> to <var>255</var> bytes.
            </p>
 * <p>
By default, this attribute is set to an empty array.
            </p>
 *
 * @type array
 */
NDEFRecord.prototype.id = new array();

/**
 * The record payload.
 * <p>
The byte array contains <var>0</var> to <var>(2 ** 32 - 1)</var> bytes.
            </p>
 *
 * @type array
 */
NDEFRecord.prototype.payload = new array();

/**
 * The method invoked when a tag is attached.
 *
 * @param {NFCTag} nfcTag
 * @type void
 * @memberOf NFCTagDetectCallback
 * @returns {void}
 */
NFCTagDetectCallback.prototype.onattach = function(nfcTag){ return; };

/**
 * The method invoked when the connected tag is detached.
 *
 * @type void
 * @memberOf NFCTagDetectCallback
 * @returns {void}
 */
NFCTagDetectCallback.prototype.ondetach = function(){ return; };

/**
 * The number of records in the NDEFMessage.
 *
 * @type Number
 */
NDEFMessage.prototype.recordCount = new Number();

/**
 * The array of NDEFRecord objects in the NDEFMessage.
 *
 * @type array
 */
NDEFMessage.prototype.records = new array();

/**
 * Gets the serial byte array of the NDEF message.
            <p>
If the operation completes successfully, it returns the serial byte array of the NDEF message.
            </p>
           
 *
 * @type array
 * @memberOf NDEFMessage
 * @returns {array}
 */
NDEFMessage.prototype.toByte = function(){ var ret = new array(); return ret; };

/**
 * Called when the type of an active secure element is changed.
 *
 * @param {SecureElementType} type
 * @type void
 * @memberOf ActiveSecureElementChangeCallback
 * @returns {void}
 */
ActiveSecureElementChangeCallback.prototype.onchanged = function(type){ return; };

/**
 * The encoded text.
 *
 * @type String
 */
NDEFRecordText.prototype.text = new String();

/**
 * The language code string value, followed by IANA[RFC 3066] (for example, en-US, ko-KR).
 *
 * @type String
 */
NDEFRecordText.prototype.languageCode = new String();

/**
 * The encoding type. By default, this attribute is set to UTF8.
 *
 * @type NDEFRecordTextEncoding
 */
NDEFRecordText.prototype.encoding = new NDEFRecordTextEncoding();

/**
 * The method invoked when the asynchronous call completes successfully.
 *
 * @param {array} aids
 * @type void
 * @memberOf AIDArraySuccessCallback
 * @returns {void}
 */
AIDArraySuccessCallback.prototype.onsuccess = function(aids){ return; };

/**
 * The value is necessary to check if this NFC peer-to-peer target is connected.
 *
 * @type Boolean
 */
NFCPeer.prototype.isConnected = new Boolean();

/**
 * Registers a callback function to be invoked when an NDEF message is received from the connected NFC peer-to-peer target.
 *
 * @param {NDEFMessageReadCallback} successCallback
 * @type void
 * @memberOf NFCPeer
 * @returns {void}
 */
NFCPeer.prototype.setReceiveNDEFListener = function(successCallback){ return; };

/**
 * Unregisters the listener for receiving NDEF messages from the NFC peer-to-peer target connected.
 *
 * @type void
 * @memberOf NFCPeer
 * @returns {void}
 */
NFCPeer.prototype.unsetReceiveNDEFListener = function(){ return; };

/**
 * Sends data to the NFC peer-to-peer target.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError: If any of the input parameters contain an invalid value.              </li>
              <li>
 ServiceNotAvailableError: If the NFC service is not available.               </li>
              <li>
 UnknownError: In any other error case.               </li>
            </ul>
           
 *
 * @param {NDEFMessage} ndefMessage
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf NFCPeer
 * @returns {void}
 */
NFCPeer.prototype.sendNDEF = function(ndefMessage, successCallback, errorCallback){ return; };

/**
 * The method invoked when the asynchronous call completes successfully.
 *
 * @param {NDEFMessage} ndefMessage
 * @type void
 * @memberOf NDEFMessageReadCallback
 * @returns {void}
 */
NDEFMessageReadCallback.prototype.onsuccess = function(ndefMessage){ return; };

/**
 * The NFC API provides a protocol for simple wireless interconnection of closely coupled devices operating at 13.56 MHz using Near Field Communication (NFC), which is an international standard (ISO/IEC 18092). To know more, see .
 * <p>
There are three groups of application scenarios for NFC:
        </p>
 * <ul>
 * <li>Exchanging some digital information or data by holding a device close to a wireless tag.
 * <li>Exchanging some information or data between two devices by holding them close to each other.
 * <li>Making payments by holding mobile phones close to point of sales terminals instead of swiping smart cards.
 * </ul>
 * <p>
For more information on the NFC features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/communication_guide/nfc.htm">NFC Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/network.nfc
 * @type NFCManager
 */
NFCManagerObject.prototype.nfc = new NFCManager();

/**
 * Called when HCE event is detected.
 *
 * @param {HCEEventData} data
 * @type void
 * @memberOf HCEEventReceiveCallback
 * @returns {void}
 */
HCEEventReceiveCallback.prototype.ondetected = function(data){ return; };

/**
 * A constant to indicate the empty format of an NDEF record's type field.
 *
 * @type Number
 */
NFCManager.NFC_RECORD_TNF_EMPTY = new Number();

/**
 * A constant to indicate the Record Type Definition (RTD) format of an NDEF record's type field.
 *
 * @type Number
 */
NFCManager.NFC_RECORD_TNF_WELL_KNOWN = new Number();

/**
 * A constant to indicate the MIME media types format in RFC 2046 [RFC 2046] of an NDEF record's type field.
 *
 * @type Number
 */
NFCManager.NFC_RECORD_TNF_MIME_MEDIA = new Number();

/**
 * A constant to indicate the absolute URI, as defined in the RFC 3986 [RFC 3986] format in RFC 2046 [RFC 2046] of an NDEF record's type field.
 *
 * @type Number
 */
NFCManager.NFC_RECORD_TNF_URI = new Number();

/**
 * A constant to indicate the NFC forum external type [NFC RTD] format in RFC 2046 [RFC 2046] of an NDEF record's type field.
 *
 * @type Number
 */
NFCManager.NFC_RECORD_TNF_EXTERNAL_RTD = new Number();

/**
 * A constant to indicate the unknown type format in RFC 2046 [RFC 2046] of an NDEF record's type field.
 *
 * @type Number
 */
NFCManager.NFC_RECORD_TNF_UNKNOWN = new Number();

/**
 * A constant to indicate whether the payload is an intermediate or final chunk of a chunked NDEF record.
 *
 * @type Number
 */
NFCManager.NFC_RECORD_TNF_UNCHANGED = new Number();

/**
 * Gets the default NFC adapter of the device.
 *
 * @type NFCAdapter
 * @memberOf NFCManager
 * @returns {NFCAdapter}
 */
NFCManager.prototype.getDefaultAdapter = function(){ var ret = new NFCAdapter(); return ret; };

/**
 * Gives priority to the current application for NFC operations.
            <p>
If the current application has priority, and is in the foreground, the system will not generate
application control requests to pick an application to handle NFC requests.
Such a request is usually generated, for example, when detecting an NFC tag or receiving an NDEF message
from a connected NFC peer-to-peer target.
            </p>
            <p>
When the current application moves to the background, it loses the priority.
            </p>
            <p>
The exclusive mode can only be set when NFC is on. If NFC is off, the mode is ignored.
            </p>
           
 *
 * @param {Boolean} mode
 * @type void
 * @memberOf NFCManager
 * @returns {void}
 */
NFCManager.prototype.setExclusiveMode = function(mode){ return; };

/**
 * The URI string that is stored in the payload.
 *
 * @type String
 */
NDEFRecordURI.prototype.uri = new String();

/**
 * The method invoked when the asynchronous call completes successfully.
 *
 * @param {array} data
 * @type void
 * @memberOf ByteArraySuccessCallback
 * @returns {void}
 */
ByteArraySuccessCallback.prototype.onsuccess = function(data){ return; };

/**
 * The state of the NFC adapter.
 *
 * @type Boolean
 */
NFCAdapter.prototype.powered = new Boolean();

/**
 * Card emulation mode of the NFC adapter.
 * <p>
To be allowed to change <var>cardEmulationMode</var>, the following privilege must be declared in the application's <em>config.xml</em> file.
            </p>
 * <ul>
 * <li>- NFC card emulation feature is enabled. NFC card emulation related methods are available for use.
 * <li>- NFC card emulation related methods cannot be used
 * </ul>
 *
 * @type CardEmulationMode
 */
NFCAdapter.prototype.cardEmulationMode = new CardEmulationMode();

/**
 * Active secure element type.
 * <p>
To be allowed to change <var>activeSecureElement</var>, the following privilege must be declared in the application's <em>config.xml</em> file.
            </p>
 * <p>
If the NFC service is not available, it returns <var>null</var>.
            </p>
 *
 * @type SecureElementType
 */
NFCAdapter.prototype.activeSecureElement = new SecureElementType();

/**
 * Sets the power of an NFC adapter to either an on state or an off state.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If the NFC device is busy.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {Boolean} state
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.setPowered = function(state, successCallback, errorCallback){ return; };

/**
 * Registers a callback function to invoke when an NFC tag is detected.
            <p>
If the registration completes successfully, detectCallback must be
invoked when the NFC tag is detected.
            </p>
            <p>
If no tagFilter is passed, it shall consider the default tagFilter, that is to set all tag types.
            </p>
           
 *
 * @param {NFCTagDetectCallback} detectCallback
 * @param {array} tagFilter
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.setTagListener = function(detectCallback, tagFilter){ return; };

/**
 * Registers a callback function to be invoked when an NFC peer-to-peer target is detected.
            <p>
If the registration completes successfully, the detectCallback must be
invoked when an NFC peer-to-peer target is detected.
            </p>
           
 *
 * @param {NFCPeerDetectCallback} detectCallback
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.setPeerListener = function(detectCallback){ return; };

/**
 * Unregisters the listener for detecting an NFC tag.
 *
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.unsetTagListener = function(){ return; };

/**
 * Unregisters the listener for detecting an NFC peer-to-peer target.
 *
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.unsetPeerListener = function(){ return; };

/**
 * Registers a callback function to invoke when the card emulation mode is changed.
 *
 * @param {CardEmulationModeChangeCallback} changeCallback
 * @type Number
 * @memberOf NFCAdapter
 * @returns {Number}
 */
NFCAdapter.prototype.addCardEmulationModeChangeListener = function(changeCallback){ var ret = new Number(); return ret; };

/**
 * Unsubscribes from receiving notification of card emulation mode changes.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.removeCardEmulationModeChangeListener = function(watchId){ return; };

/**
 * Registers a callback function to invoke when an external reader tries to access a secure element. Such an event may indicate initiating a financial transaction using the device.
 *
 * @param {SecureElementType} type
 * @param {TransactionEventCallback} eventCallback
 * @type Number
 * @memberOf NFCAdapter
 * @returns {Number}
 */
NFCAdapter.prototype.addTransactionEventListener = function(type, eventCallback){ var ret = new Number(); return ret; };

/**
 * Unsubscribes from receiving notification of transaction events.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.removeTransactionEventListener = function(watchId){ return; };

/**
 * Registers a callback function to invoke when an active secure element is changed.
 *
 * @param {ActiveSecureElementChangeCallback} changeCallback
 * @type Number
 * @memberOf NFCAdapter
 * @returns {Number}
 */
NFCAdapter.prototype.addActiveSecureElementChangeListener = function(changeCallback){ var ret = new Number(); return ret; };

/**
 * Unsubscribes from receiving notification of active secure element changes.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.removeActiveSecureElementChangeListener = function(watchId){ return; };

/**
 * Gets the NDEF message cached when the tag is detected.
            <p>
If the operation completes successfully, the NDEF Message that is last read
should be returned.
            </p>
           
 *
 * @type NDEFMessage
 * @memberOf NFCAdapter
 * @returns {NDEFMessage}
 */
NFCAdapter.prototype.getCachedMessage = function(){ var ret = new NDEFMessage(); return ret; };

/**
 * Gives priority to the current application for NFC transaction events.
            <p>
If the current application has priority, and is in the foreground, the system will not generate
application control requests to pick an application to handle a transaction event request.
            </p>
            <p>
When the current application moves to the background, it loses priority.
            </p>
            <p>
An application is allowed to get priority only when it is in the foreground.
Losing priority is always allowed regardless of an application's status.
            </p>
           
 *
 * @param {Boolean} mode
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.setExclusiveModeForTransaction = function(mode){ return; };

/**
 * Registers a callback function for receiving HCE event.
 *
 * @param {HCEEventReceiveCallback} eventCallback
 * @type Number
 * @memberOf NFCAdapter
 * @returns {Number}
 */
NFCAdapter.prototype.addHCEEventListener = function(eventCallback){ var ret = new Number(); return ret; };

/**
 * Unsubscribes from receiving notification of a HCE event.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.removeHCEEventListener = function(watchId){ return; };

/**
 * send host APDU response to CLF (Contactless Front-end).
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If the NFC service is not available.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {array} apdu
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.sendHostAPDUResponse = function(apdu, successCallback, errorCallback){ return; };

/**
 * Allows an application to query whether an application is currently the activated handler for a specific AID and secure element type.
 *
 * @param {SecureElementType} type
 * @param {AID} aid
 * @type Boolean
 * @memberOf NFCAdapter
 * @returns {Boolean}
 */
NFCAdapter.prototype.isActivatedHandlerForAID = function(type, aid){ var ret = new Boolean(); return ret; };

/**
 * Allows an application to query whether an application is currently the activated handler for a specific card emulation category and secure element type.
 *
 * @param {SecureElementType} type
 * @param {CardEmulationCategoryType} category
 * @type Boolean
 * @memberOf NFCAdapter
 * @returns {Boolean}
 */
NFCAdapter.prototype.isActivatedHandlerForCategory = function(type, category){ var ret = new Boolean(); return ret; };

/**
 * Registers an AID for a specific category and secure element type.
 *
 * @param {SecureElementType} type
 * @param {AID} aid
 * @param {CardEmulationCategoryType} category
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.registerAID = function(type, aid, category){ return; };

/**
 * Unregisters an AID that was previously registered for a specific card emulation category and secure element type. An application can only remove the AIDs which it registered.
 *
 * @param {SecureElementType} type
 * @param {AID} aid
 * @param {CardEmulationCategoryType} category
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.unregisterAID = function(type, aid, category){ return; };

/**
 * Retrieves AIDs that were previously registered for a specific card emulation category and secure element type. An application can only retrieve the AIDs which it registered.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If the NFC service is not available.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {SecureElementType} type
 * @param {CardEmulationCategoryType} category
 * @param {AIDArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf NFCAdapter
 * @returns {void}
 */
NFCAdapter.prototype.getAIDsForCategory = function(type, category, successCallback, errorCallback){ return; };

/**
 * Secure Element type.
 *
 * @type SecureElementType
 */
AIDData.prototype.type = new SecureElementType();

/**
 * The AID (Application ID) data, specified in ISO/IEC 7816-4
 *
 * @type AID
 */
AIDData.prototype.aid = new AID();

/**
 * An attribute to indicate whether the registered AID is read-only or not
 *
 * @type Boolean
 */
AIDData.prototype.readOnly = new Boolean();

/**
 * Called when the card emulation mode is changed.
 *
 * @param {CardEmulationMode} mode
 * @type void
 * @memberOf CardEmulationModeChangeCallback
 * @returns {void}
 */
CardEmulationModeChangeCallback.prototype.onchanged = function(mode){ return; };

/**
 * The type of the NFC tag.
 *
 * @type NFCTagType
 */
NFCTag.prototype.type = new NFCTagType();

/**
 * An attribute to check if the NFC Tag supports the NDEF format.
 *
 * @type Boolean
 */
NFCTag.prototype.isSupportedNDEF = new Boolean();

/**
 * The size of an NDEF message stored in the tag.
 *
 * @type Number
 */
NFCTag.prototype.ndefSize = new Number();

/**
 * The value is all tag information.
 * <p>
It is pairs of key and value.
The array's index is the pair's key and value is its value.
            </p>
 *
 * @type object
 */
NFCTag.prototype.properties = new object();

/**
 * The value is necessary to check if this tag is connected.
 *
 * @type Boolean
 */
NFCTag.prototype.isConnected = new Boolean();

/**
 * Reads the NDEF data from the NFC tag.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError - If the NFC service is not available.              </li>
              <li>
 InvalidValuesError - If the current Tag doesn't support the NDEF standard.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {NDEFMessageReadCallback} readCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf NFCTag
 * @returns {void}
 */
NFCTag.prototype.readNDEF = function(readCallback, errorCallback){ return; };

/**
 * Writes the NDEF data to the NFC tag.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError: If any of the input parameters contain an invalid value or the current Tag does not support the NDEF standard.              </li>
              <li>
 ServiceNotAvailableError: If the NFC service is not available.               </li>
              <li>
 UnknownError: In any other error case.               </li>
            </ul>
           
 *
 * @param {NDEFMessage} ndefMessage
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf NFCTag
 * @returns {void}
 */
NFCTag.prototype.writeNDEF = function(ndefMessage, successCallback, errorCallback){ return; };

/**
 * Accesses the raw format card. The transceive function is the only way to access the raw format card (not formatted). Each tag type requires its own command to access tags. This API provides low level access of the tag operation. (Note that you must know each tag technology.)
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
 ServiceNotAvailableError - If the NFC service is not available.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {array} data
 * @param {ByteArraySuccessCallback} dataCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf NFCTag
 * @returns {void}
 */
NFCTag.prototype.transceive = function(data, dataCallback, errorCallback){ return; };

/**
 * HCE event type.
 *
 * @type HCEEventType
 */
HCEEventData.prototype.eventType = new HCEEventType();

/**
 * The bytes array of APDU
 *
 * @type array
 */
HCEEventData.prototype.apdu = new array();

/**
 * The length of APDU
 *
 * @type Number
 */
HCEEventData.prototype.length = new Number();

/**
 * The mime type [RFC 2046] (for example, text/plain, image/jpeg ).
 *
 * @type String
 */
NDEFRecordMedia.prototype.mimeType = new String();

/**
 * The method invoked when the NFC peer-to-peer target is attached.
 *
 * @param {NFCPeer} nfcPeer
 * @type void
 * @memberOf NFCPeerDetectCallback
 * @returns {void}
 */
NFCPeerDetectCallback.prototype.onattach = function(nfcPeer){ return; };

/**
 * The method invoked when the connected NFC peer-to-peer target is detached.
 *
 * @type void
 * @memberOf NFCPeerDetectCallback
 * @returns {void}
 */
NFCPeerDetectCallback.prototype.ondetach = function(){ return; };

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} appletId
 * @param {array} data
 * @type void
 * @memberOf TransactionEventCallback
 * @returns {void}
 */
TransactionEventCallback.prototype.ondetected = function(appletId, data){ return; };

/**
 * The NFC API provides a protocol for simple wireless interconnection of closely coupled devices operating at 13.56 MHz using Near Field Communication (NFC), which is an international standard (ISO/IEC 18092). To know more, see .
 * <p>
There are three groups of application scenarios for NFC:
        </p>
 * <ul>
 * <li>Exchanging some digital information or data by holding a device close to a wireless tag.
 * <li>Exchanging some information or data between two devices by holding them close to each other.
 * <li>Making payments by holding mobile phones close to point of sales terminals instead of swiping smart cards.
 * </ul>
 * <p>
For more information on the NFC features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/communication_guide/nfc.htm">NFC Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/network.nfc
 * @type NFCManager
 */
Tizen.prototype.nfc = new NFCManager();

/**
 * Defines what is instantiated by the object.
          <p>
The <em>tizen.notification</em> object allows access to the
Notification API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {NotificationObject}
 */
function NotificationObject() {};
NotificationObject.prototype = new Object();

/**
 * Notification manager interface that provides access to the API.
          <p>
The NotificationManager interface provides access to the notification object.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {NotificationManager}
 */
function NotificationManager() {};
NotificationManager.prototype = new Object();

/**
 * The NotificationDetailInfo object that contains the detail information of the notification.
 *
 * @super Object
 * @constructor
 * @return {NotificationDetailInfo}
 */
function NotificationDetailInfo() {};
NotificationDetailInfo.prototype = new Object();

/**
 * The Notification interface offers common attributes to represent the object.
 *
 * @super Object
 * @constructor
 * @return {Notification}
 */
function Notification() {};
Notification.prototype = new Object();

/**
 * The StatusNotification interface represents a status notification and offers additional attributes to represent a notification displayed in the notification tray.
          <p>
All notifications must have a title attribute.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {StatusNotification}
 */
function StatusNotification() {};
StatusNotification.prototype = new Notification();

/**
 * The Notification API provides a way to notify users of events that happen in an application. In Tizen Wearable Profile, only icon, title, content, time are guaranteed to be displayed. Some other attributes can be supported additionally depending on the device.
 * <p>
For more information on the Notification features, see <a href="http://127.0.0.1:34603/help/topic/http://127.0.0.1:34603/help/topic/../org.tizen.guides/html/web/tizhttp://127.0.0.1:34603/help/topic/noti_w.htm">Notification Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/led
 * @type NotificationManager
 */
NotificationObject.prototype.notification = new NotificationManager();

/**
 * Posts a notification to display.
 *
 * @param {Notification} notification
 * @type void
 * @memberOf NotificationManager
 * @returns {void}
 */
NotificationManager.prototype.post = function(notification){ return; };

/**
 * Updates a previously posted notification.
 *
 * @param {Notification} notification
 * @type void
 * @memberOf NotificationManager
 * @returns {void}
 */
NotificationManager.prototype.update = function(notification){ return; };

/**
 * Removes a previously posted notification.
 *
 * @param {NotificationId} id
 * @type void
 * @memberOf NotificationManager
 * @returns {void}
 */
NotificationManager.prototype.remove = function(id){ return; };

/**
 * Removes all notifications that have been posted by the current application.
 *
 * @type void
 * @memberOf NotificationManager
 * @returns {void}
 */
NotificationManager.prototype.removeAll = function(){ return; };

/**
 * Gets a notification that has previously been posted by the current application. Note that the obtained notification's progressType is
 *
 * @param {NotificationId} id
 * @type Notification
 * @memberOf NotificationManager
 * @returns {Notification}
 */
NotificationManager.prototype.get = function(id){ var ret = new Notification(); return ret; };

/**
 * Gets all notifications that have previously been posted by the current application. Note that the obtained notification's progressType is
 *
 * @type array
 * @memberOf NotificationManager
 * @returns {array}
 */
NotificationManager.prototype.getAll = function(){ var ret = new array(); return ret; };

/**
 * Plays the custom effect of the service LED that is located to the front of a device.
            <p>
Given parameters consist of timeOn and timeOff in miliseconds, RGBA color and LEDCustomFlags combination.
For the color first three bytes are RGB values. The last byte is opacity. For example "#FFFF0080". There is also another possibility when the last byte
is not given (in this case alpha is assumed to have value 0xff). In this case only RGB values are given. For example: "#ff0000" that is equivalent of "#ff0000ff".
            </p>
           
 *
 * @param {Number} timeOn
 * @param {Number} timeOff
 * @param {String} color
 * @param {array} flags
 * @type void
 * @memberOf NotificationManager
 * @returns {void}
 */
NotificationManager.prototype.playLEDCustomEffect = function(timeOn, timeOff, color, flags){ return; };

/**
 * Stops the custom effect of the service LED that is located to the front of a device.
 *
 * @type void
 * @memberOf NotificationManager
 * @returns {void}
 */
NotificationManager.prototype.stopLEDCustomEffect = function(){ return; };

/**
 * The main content of the detail information. This attribute is available on simple status notifications.
 *
 * @type String
 */
NotificationDetailInfo.prototype.mainText = new String();

/**
 * The secondary content of the detail information.
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type String
 */
NotificationDetailInfo.prototype.subText = new String();

/**
 * The Notification identifier. Before the notification is posted, this value is undefined.
 *
 * @type NotificationId
 */
Notification.prototype.id = new NotificationId();

/**
 * The Notification type.
 *
 * @type NotificationType
 */
Notification.prototype.type = new NotificationType();

/**
 * The time when the notification is posted. Before the notification is posted, this value is undefined.
 *
 * @type Date
 */
Notification.prototype.postedTime = new Date();

/**
 * The title to display in a notification.
 *
 * @type String
 */
Notification.prototype.title = new String();

/**
 * The content to display in a notification.
 *
 * @type String
 */
Notification.prototype.content = new String();

/**
 * The status notification type.
 *
 * @type StatusNotificationType
 */
StatusNotification.prototype.statusType = new StatusNotificationType();

/**
 * The icon path to display in the notification.
 *
 * @type String
 */
StatusNotification.prototype.iconPath = new String();

/**
 * The sub icon path to display in the notification.
 *
 * @type String
 */
StatusNotification.prototype.subIconPath = new String();

/**
 * The number of events to display in the notification.
 *
 * @type Number
 */
StatusNotification.prototype.number = new Number();

/**
 * Appends lines of the detail information to the notification. This attribute is available in a simple status notification. By default, this attribute is initialized with an empty array. The maximum number of detail information elements in the array is 2.
 *
 * @type array
 */
StatusNotification.prototype.detailInfo = new array();

/**
 * Sets the notification LED indicator color property. The color is a numerical RGB value(#rrggbb). The format of an RGB value in hexadecimal notation is a "#" immediately followed by exactly six hexadecimal characters(0-9, A-F). The color format is case-insensitive. The LED indicator color will show that it's a close approximation. LED will only light on when the screen is off. To turn the LED off, set "#000000" or null to ledColor. This method has effects when the device has notification LED.
 *
 * @type String
 */
StatusNotification.prototype.ledColor = new String();

/**
 * The milliseconds for which the light is on. The light continuously toggles on (ledOnPeriod) and off (ledOffPeriod). By default, this attribute is set to 0
 *
 * @type Number
 */
StatusNotification.prototype.ledOnPeriod = new Number();

/**
 * The milliseconds for which the light is off. By default, this attribute is set to 0.
 *
 * @type Number
 */
StatusNotification.prototype.ledOffPeriod = new Number();

/**
 * The image path to use as the background of the notification. This attribute is available on simple or thumbnail status notifications.
 *
 * @type String
 */
StatusNotification.prototype.backgroundImagePath = new String();

/**
 * The image paths associated with the thumbnail status notification. By default, this attribute is initialized with an empty array. The maximum number of thumbnail path elements in the array is 4.
 *
 * @type array
 */
StatusNotification.prototype.thumbnails = new array();

/**
 * The path of a sound file to play when the notification is shown.
 *
 * @type String
 */
StatusNotification.prototype.soundPath = new String();

/**
 * Checks whether to vibrate when the notification is shown. By default, this attribute is set to false.
 *
 * @type Boolean
 */
StatusNotification.prototype.vibration = new Boolean();

/**
 * Holds the application control to launch an application when the notification is selected from the notification tray.
 *
 * @type ApplicationControl
 */
StatusNotification.prototype.appControl = new ApplicationControl();

/**
 * Holds the application ID to launch when the notification is selected from the notification tray.
 *
 * @type ApplicationId
 */
StatusNotification.prototype.appId = new ApplicationId();

/**
 * Defines the type for an ongoing notification's progress. By default, this attribute is set to PERCENTAGE.
 *
 * @type NotificationProgressType
 */
StatusNotification.prototype.progressType = new NotificationProgressType();

/**
 * Defines the current notification progress value ( or ), depending on the
 * <p>
If progressValue is set, the progressbar will be displayed in the notification. The progressValue can change the amount of progress as it moves forward or backward. It gets the progress value of the current notification.
If 0, the indeterminate progressbar will be shown.
This attribute is only available for StatusNotification of type <em>PROGRESS</em>.
            </p>
 * <p>
Applications should keep the progress value for its job because
the saved value in the notification status tray would be different from
the exact progress value.
            </p>
 * <p>
Range of <em>progressValue</em>: percent (0 to 100).
            </p>
 *
 * @type Number
 */
StatusNotification.prototype.progressValue = new Number();

/**
 * The Notification API provides a way to notify users of events that happen in an application. In Tizen Wearable Profile, only icon, title, content, time are guaranteed to be displayed. Some other attributes can be supported additionally depending on the device.
 * <p>
For more information on the Notification features, see <a href="http://127.0.0.1:34603/help/topic/http://127.0.0.1:34603/help/topic/../org.tizen.guides/html/web/tizhttp://127.0.0.1:34603/help/topic/noti_w.htm">Notification Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/led
 * @type NotificationManager
 */
Tizen.prototype.notification = new NotificationManager();

/**
 * This interface invokes the success callback with an array of objects as an input parameter when the installed package list is retrieved.
          <p>
It is used in <em>tizen.package.getPackagesInfo()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PackageInformationArraySuccessCallback}
 */
function PackageInformationArraySuccessCallback() {};
PackageInformationArraySuccessCallback.prototype = new Object();

/**
 * This interface defines what is instantiated by the object from the Tizen Platform.
          <p>
The <em>tizen.package </em>object allows access to Package API functionality.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PackageManagerObject}
 */
function PackageManagerObject() {};
PackageManagerObject.prototype = new Object();

/**
 * This callback interface specifies methods that are invoked when a package is installed, updated, or uninstalled.
 *
 * @super Object
 * @constructor
 * @return {PackageInformationEventCallback}
 */
function PackageInformationEventCallback() {};
PackageInformationEventCallback.prototype = new Object();

/**
 * This interface defines the general information available to an installed package.
 *
 * @super Object
 * @constructor
 * @return {PackageInformation}
 */
function PackageInformation() {};
PackageInformation.prototype = new Object();

/**
 * This interface defines the package manager.
 *
 * @super Object
 * @constructor
 * @return {PackageManager}
 */
function PackageManager() {};
PackageManager.prototype = new Object();

/**
 * This callback interface specifies subscriptions for any notification on the progress or completion of requests.
 *
 * @super Object
 * @constructor
 * @return {PackageProgressCallback}
 */
function PackageProgressCallback() {};
PackageProgressCallback.prototype = new Object();

/**
 * Called when the asynchronous call completes successfully.
 *
 * @param {array} informationArray
 * @type void
 * @memberOf PackageInformationArraySuccessCallback
 * @returns {void}
 */
PackageInformationArraySuccessCallback.prototype.onsuccess = function(informationArray){ return; };

/**
 * This API provides functionalities to install or uninstall packages, and retrieve information about installed packages.It also provides a listener method so that an application can be notified when there is a change on the installed packages. For more information on the Package features, see .
 *
 * @type PackageManager
 */
PackageManagerObject.prototype.package = new PackageManager();

/**
 * Called when a package is installed.
 *
 * @param {PackageInformation} info
 * @type void
 * @memberOf PackageInformationEventCallback
 * @returns {void}
 */
PackageInformationEventCallback.prototype.oninstalled = function(info){ return; };

/**
 * Called when a package is updated.
 *
 * @param {PackageInformation} info
 * @type void
 * @memberOf PackageInformationEventCallback
 * @returns {void}
 */
PackageInformationEventCallback.prototype.onupdated = function(info){ return; };

/**
 * Called when a package is uninstalled.
 *
 * @param {PackageId} id
 * @type void
 * @memberOf PackageInformationEventCallback
 * @returns {void}
 */
PackageInformationEventCallback.prototype.onuninstalled = function(id){ return; };

/**
 * An attribute to store the identifier of a package.
 *
 * @type PackageId
 */
PackageInformation.prototype.id = new PackageId();

/**
 * An attribute to store the package name.
 *
 * @type String
 */
PackageInformation.prototype.name = new String();

/**
 * An attribute to store the icon path of a package.
 * <p>
The icon path of the package is the same as the icon path of the relevant application
(see the <a href="application.html#ApplicationInformation::iconPath">iconPath</a> attribute of
the <a href="application.html#ApplicationInformation">ApplicationInformation</a> interface).
            </p>
 * <p>
The relevant application is the one with the same
<a href="application.html#ApplicationInformation::packageId">packageId</a> as the
<a href="#PackageInformation::id">id</a> of this package.
            </p>
 *
 * @type String
 */
PackageInformation.prototype.iconPath = new String();

/**
 * An attribute to store the package version.
 *
 * @type String
 */
PackageInformation.prototype.version = new String();

/**
 * An attribute to store the total installed size(package + data) of a package.
 *
 * @type Number
 */
PackageInformation.prototype.totalSize = new Number();

/**
 * An attribute to store the current data size of a package.
 *
 * @type Number
 */
PackageInformation.prototype.dataSize = new Number();

/**
 * An attribute to store the latest installed or updated time of a package.
 *
 * @type Date
 */
PackageInformation.prototype.lastModified = new Date();

/**
 * An attribute to store the author of a package.
 *
 * @type String
 */
PackageInformation.prototype.author = new String();

/**
 * An attribute to store the package description.
 *
 * @type String
 */
PackageInformation.prototype.description = new String();

/**
 * An attribute to store the application ID list of a package.
 *
 * @type array
 */
PackageInformation.prototype.appIds = new array();

/**
 * Installs a package with a specified file on a device.
            <p>
This API provides a way to notify the progress and completion of an installation request through PackageProgressCallback.
            </p>
            <p>
The <em>ErrorCallback() </em>is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the package is not found at the specified location.              </li>
              <li>
UnknownError - If it is not allowed to install the package by the platform or any other platform error occurs.              </li>
            </ul>
           
 *
 * @param {String} packageFileURI
 * @param {PackageProgressCallback} progressCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PackageManager
 * @returns {void}
 */
PackageManager.prototype.install = function(packageFileURI, progressCallback, errorCallback){ return; };

/**
 * Uninstalls the package with a specified package ID.
            <p>
This API provides a way to notify about the progress and completion of an uninstallation request through PackageProgressCallback.
            </p>
            <p>
The <em>ErrorCallback() </em>is launched with these error types:
            </p>
            <ul>
              <li>
NotFoundError - If the package is not found with the specified ID.              </li>
              <li>
UnknownError - If it is not allowed to uninstall the package from the platform or any other platform error occurs.              </li>
            </ul>
           
 *
 * @param {PackageId} id
 * @param {PackageProgressCallback} progressCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PackageManager
 * @returns {void}
 */
PackageManager.prototype.uninstall = function(id, progressCallback, errorCallback){ return; };

/**
 * Gets information of the installed packages.
            <p>
The result contains the snapshots of the installed packages information.
            </p>
            <p>
The <em>errorCallback()</em> is launched with this error type:
            </p>
            <ul>
              <li>
UnknownError - If any other platform error occurs.              </li>
            </ul>
           
 *
 * @param {PackageInformationArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PackageManager
 * @returns {void}
 */
PackageManager.prototype.getPackagesInfo = function(successCallback, errorCallback){ return; };

/**
 * Gets information of an installed package.
            <p>
If the ID is set to <var>null</var> or not set at all, it returns the package information of the current application.
The list of installed packages and their package IDs is obtained using <em>getPackagesInfo()</em>.
            </p>
           
 *
 * @param {PackageId} id
 * @type PackageInformation
 * @memberOf PackageManager
 * @returns {PackageInformation}
 */
PackageManager.prototype.getPackageInfo = function(id){ var ret = new PackageInformation(); return ret; };

/**
 * Sets a listener to receive notifications for any changes made to the list of installed packages.
            <p>
This method sets a <em>PackageInformationEventCallback</em> type callback that is triggered when a package is installed, removed, or updated.
            </p>
            <p>
The callback lasts until the <em>unsetPackageInfoEventListener()</em> method is called.
            </p>
           
 *
 * @param {PackageInformationEventCallback} eventCallback
 * @type void
 * @memberOf PackageManager
 * @returns {void}
 */
PackageManager.prototype.setPackageInfoEventListener = function(eventCallback){ return; };

/**
 * Unsets the listener to stop receiving package notifications.
 *
 * @type void
 * @memberOf PackageManager
 * @returns {void}
 */
PackageManager.prototype.unsetPackageInfoEventListener = function(){ return; };

/**
 * Called while the request is in progress.
 *
 * @param {PackageId} id
 * @param {Number} progress
 * @type void
 * @memberOf PackageProgressCallback
 * @returns {void}
 */
PackageProgressCallback.prototype.onprogress = function(id, progress){ return; };

/**
 * Called when the request is completed.
 *
 * @param {PackageId} id
 * @type void
 * @memberOf PackageProgressCallback
 * @returns {void}
 */
PackageProgressCallback.prototype.oncomplete = function(id){ return; };

/**
 * This API provides functionalities to install or uninstall packages, and retrieve information about installed packages.It also provides a listener method so that an application can be notified when there is a change on the installed packages. For more information on the Package features, see .
 *
 * @type PackageManager
 */
Tizen.prototype.package = new PackageManager();

/**
 * The PlayerUtilManagerObject interface defines what is instantiated by the object from the Tizen Platform. The object allows access to the functionality of the PlayerUtil API.
 *
 * @super Object
 * @constructor
 * @return {PlayerUtilManagerObject}
 */
function PlayerUtilManagerObject() {};
PlayerUtilManagerObject.prototype = new Object();

/**
 * The PlayerUtilManager interface provides methods to manage the W3C Player features.
 *
 * @super Object
 * @constructor
 * @return {PlayerUtilManager}
 */
function PlayerUtilManager() {};
PlayerUtilManager.prototype = new Object();

/**
 * The PlayerUtil API provides functionality for managing features related to the W3C Player.
 * <p>
You can change audio latency mode using this API.
        </p>
 * <p>
For more information on the PlayerUtil features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.mobile.web.appprogramming/html/guide/app_guide/playerutil.htm">PlayerUtil Guide</a>.
        </p>
 *
 * @type PlayerUtilManager
 */
PlayerUtilManagerObject.prototype.playerutil = new PlayerUtilManager();

/**
 * Gets the latency mode of the W3C Player.
 *
 * @type LatencyMode
 * @memberOf PlayerUtilManager
 * @returns {LatencyMode}
 */
PlayerUtilManager.prototype.getLatencyMode = function(){ var ret = new LatencyMode(); return ret; };

/**
 * Sets the latency mode of the W3C Player.
 *
 * @param {LatencyMode} mode
 * @type void
 * @memberOf PlayerUtilManager
 * @returns {void}
 */
PlayerUtilManager.prototype.setLatencyMode = function(mode){ return; };

/**
 * The PlayerUtil API provides functionality for managing features related to the W3C Player.
 * <p>
You can change audio latency mode using this API.
        </p>
 * <p>
For more information on the PlayerUtil features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.mobile.web.appprogramming/html/guide/app_guide/playerutil.htm">PlayerUtil Guide</a>.
        </p>
 *
 * @type PlayerUtilManager
 */
Tizen.prototype.playerutil = new PlayerUtilManager();

/**
 * The ScreenStateChangeCallback callback interface defines notification for the screen state changes.
 *
 * @super Object
 * @constructor
 * @return {ScreenStateChangeCallback}
 */
function ScreenStateChangeCallback() {};
ScreenStateChangeCallback.prototype = new Object();

/**
 * The PowerManager interface is used to request resource states.
          <p>
However, these requests can be overridden by the system. If the requests are overridden, the application is notified with the provided listener callback.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PowerManager}
 */
function PowerManager() {};
PowerManager.prototype = new Object();

/**
 * The PowerManagerObject interface defines what is instantiated by the object from the Tizen Platform.
          <p>
There will be a <em>tizen.power </em>object that allows accessing of a functionality of the Power API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PowerManagerObject}
 */
function PowerManagerObject() {};
PowerManagerObject.prototype = new Object();

/**
 * Called on screen state change.
 *
 * @param {PowerScreenState} previousState
 * @param {PowerScreenState} changedState
 * @type void
 * @memberOf ScreenStateChangeCallback
 * @returns {void}
 */
ScreenStateChangeCallback.prototype.onchanged = function(previousState, changedState){ return; };

/**
 * Requests the minimum-state for a power resource.
 *
 * @param {PowerResource} resource
 * @param {PowerState} state
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.request = function(resource, state){ return; };

/**
 * Releases the power state request for the given resource.
 *
 * @param {PowerResource} resource
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.release = function(resource){ return; };

/**
 * Sets the screen state change callback and monitors its state changes.
 *
 * @param {ScreenStateChangeCallback} listener
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.setScreenStateChangeListener = function(listener){ return; };

/**
 * Unsets the screen state change callback and stop monitoring it.
 *
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.unsetScreenStateChangeListener = function(){ return; };

/**
 * Gets the screen brightness level of an application, from 0 to 1.
 *
 * @type Number
 * @memberOf PowerManager
 * @returns {Number}
 */
PowerManager.prototype.getScreenBrightness = function(){ var ret = new Number(); return ret; };

/**
 * Sets the screen brightness level, from 0 to 1.
            <p>
An approximation is made for best effort when the given value is not exactly applicable by the hardware or system.
            </p>
           
 *
 * @param {Number} brightness
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.setScreenBrightness = function(brightness){ return; };

/**
 * Checks whether the screen is on.
 *
 * @type Boolean
 * @memberOf PowerManager
 * @returns {Boolean}
 */
PowerManager.prototype.isScreenOn = function(){ var ret = new Boolean(); return ret; };

/**
 * Restores the screen brightness to the system default setting value.
 *
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.restoreScreenBrightness = function(){ return; };

/**
 * Turns on the screen.
            <p>
This API triggers turn-on process and then updates the status when it completes. While the operation is on-going, the isScreenOn() method returns false.
            </p>
           
 *
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.turnScreenOn = function(){ return; };

/**
 * Turns off the screen.
            <p>
This API triggers turn-off process and then updates the status when it completes.
While the operation is on-going, the isScreenOn() method returns true.
            </p>
           
 *
 * @type void
 * @memberOf PowerManager
 * @returns {void}
 */
PowerManager.prototype.turnScreenOff = function(){ return; };

/**
 * The Power API provides support for requesting power management related resource states.
 * <p>
For more information on the Power features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/sys_guide/power.htm">Power Guide</a>.
        </p>
 *
 * @type PowerManager
 */
PowerManagerObject.prototype.power = new PowerManager();

/**
 * The Power API provides support for requesting power management related resource states.
 * <p>
For more information on the Power features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/sys_guide/power.htm">Power Guide</a>.
        </p>
 *
 * @type PowerManager
 */
Tizen.prototype.power = new PowerManager();

/**
 * This interface defines what is instantiated by the object on the Tizen Platform.
          <p>
The <em>tizen.preference</em> object provides access to the Preference service API's functionality.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PreferenceManagerObject}
 */
function PreferenceManagerObject() {};
PreferenceManagerObject.prototype = new Object();

/**
 * The callback function to be used as a change listener for a preference with the given key.
 *
 * @super Object
 * @constructor
 * @return {PreferenceChangeCallback}
 */
function PreferenceChangeCallback() {};
PreferenceChangeCallback.prototype = new Object();

/**
 * The Preference API provides functions to store and retrieve small pieces of data which can be for application preferences.
 *
 * @super Object
 * @constructor
 * @return {PreferenceManager}
 */
function PreferenceManager() {};
PreferenceManager.prototype = new Object();

/**
 * The callback function used to get data of the all preferences.
 *
 * @super Object
 * @constructor
 * @return {PreferenceGetAllCallback}
 */
function PreferenceGetAllCallback() {};
PreferenceGetAllCallback.prototype = new Object();

/**
 * The PreferenceData interface stores data of application preferences.
 *
 * @super Object
 * @constructor
 * @return {PreferenceData}
 */
function PreferenceData() {};
PreferenceData.prototype = new Object();

/**
 * The Preference API provides functions to store and retrieve small pieces of data which can be for application preferences.
 *
 * @type PreferenceManager
 */
PreferenceManagerObject.prototype.preference = new PreferenceManager();

/**
 * Called when the preference with the given key changed.
 *
 * @param {PreferenceData} data
 * @type void
 * @memberOf PreferenceChangeCallback
 * @returns {void}
 */
PreferenceChangeCallback.prototype.onsuccess = function(data){ return; };

/**
 * Gets all preferences data.
 *
 * @param {PreferenceGetAllCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PreferenceManager
 * @returns {void}
 */
PreferenceManager.prototype.getAll = function(successCallback, errorCallback){ return; };

/**
 * Sets the preference value.
 *
 * @param {String} key
 * @param {PreferenceValueType} value
 * @type void
 * @memberOf PreferenceManager
 * @returns {void}
 */
PreferenceManager.prototype.setValue = function(key, value){ return; };

/**
 * Gets a preference value.
 *
 * @param {String} key
 * @type PreferenceValueType
 * @memberOf PreferenceManager
 * @returns {PreferenceValueType}
 */
PreferenceManager.prototype.getValue = function(key){ var ret = new PreferenceValueType(); return ret; };

/**
 * Removes a value with the given key from the preferences.
 *
 * @param {String} key
 * @type void
 * @memberOf PreferenceManager
 * @returns {void}
 */
PreferenceManager.prototype.remove = function(key){ return; };

/**
 * Removes all key-value pairs from the preferences.
 *
 * @type void
 * @memberOf PreferenceManager
 * @returns {void}
 */
PreferenceManager.prototype.removeAll = function(){ return; };

/**
 * Checks whether the preference with given key exists.
 *
 * @param {String} key
 * @type Boolean
 * @memberOf PreferenceManager
 * @returns {Boolean}
 */
PreferenceManager.prototype.exists = function(key){ var ret = new Boolean(); return ret; };

/**
 * Sets the listener to receive notifications about changes of the preference value with the given key.
 *
 * @param {String} key
 * @param {PreferenceChangeCallback} listener
 * @type void
 * @memberOf PreferenceManager
 * @returns {void}
 */
PreferenceManager.prototype.setChangeListener = function(key, listener){ return; };

/**
 * Unsets the listener, so stop receiving notifications about changes of the preference with the given key.
 *
 * @param {String} key
 * @type void
 * @memberOf PreferenceManager
 * @returns {void}
 */
PreferenceManager.prototype.unsetChangeListener = function(key){ return; };

/**
 * Called with all preferences' data as an argument.
 *
 * @param {array} preferences
 * @type void
 * @memberOf PreferenceGetAllCallback
 * @returns {void}
 */
PreferenceGetAllCallback.prototype.onsuccess = function(preferences){ return; };

/**
 * The key name of the preferences data value.
 *
 * @type String
 */
PreferenceData.prototype.key = new String();

/**
 * The value associated with a given key.
 *
 * @type PreferenceValueType
 */
PreferenceData.prototype.value = new PreferenceValueType();

/**
 * The Preference API provides functions to store and retrieve small pieces of data which can be for application preferences.
 *
 * @type PreferenceManager
 */
Tizen.prototype.preference = new PreferenceManager();

/**
 * The PushManagerObject interface defines what is instantiated by the object from the Tizen Platform.
          <p>
The <em>tizen.push </em>object allows access to the functionality of the Push API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PushManagerObject}
 */
function PushManagerObject() {};
PushManagerObject.prototype = new Object();

/**
 * The PushRegisterSuccessCallback interface specifies the success callback for a push service registration request.
          <p>
This success callback is invoked when a push service registration request is successful.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PushRegisterSuccessCallback}
 */
function PushRegisterSuccessCallback() {};
PushRegisterSuccessCallback.prototype = new Object();

/**
 * The PushRegistrationStateChangeCallback interface specifies the state change callback for the state change event.
          <p>
This state change callback is invoked when the state of registration is changed.
Moreover PushRegistrationStateChangeCallback would be called at least once, just after connection is established.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PushRegistrationStateChangeCallback}
 */
function PushRegistrationStateChangeCallback() {};
PushRegistrationStateChangeCallback.prototype = new Object();

/**
 * The PushNotificationCallback interface specifies the notification callback for the received push notification message.
          <p>
This notification callback is invoked when the push notification message arrives.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {PushNotificationCallback}
 */
function PushNotificationCallback() {};
PushNotificationCallback.prototype = new Object();

/**
 * The PushManager interface provides methods to manage push registration and notification.
 *
 * @super Object
 * @constructor
 * @return {PushManager}
 */
function PushManager() {};
PushManager.prototype = new Object();

/**
 * The PushMessage interface specifies the push message that is delivered from the push service.
 *
 * @super Object
 * @constructor
 * @return {PushMessage}
 */
function PushMessage() {};
PushMessage.prototype = new Object();

/**
 * The Push API provides functionality for receiving push notifications from the Tizen push server. The push service is a client daemon that maintains a permanent connection between your device and the Tizen push server. Connection with push server is used to deliver push notifications to the application, and process the registration and deregistration requests.
 * <p>
To receive push notifications, follow the steps below:
        </p>
 * <ul>
 * <li>Connecting to the push service
 * <li>Registering your application, if the application has not been registered yet
 * <li>Getting notification data
 * </ul>
 * <p>
For more information on the Push features, see <a href="http://127.0.0.1:34603/help/topic/http://127.0.0.1:34603/help/topic/org.tizen.guides/html/web/tizen/messaging/push_w.htm">Push Guide</a>.
        </p>
 * <p>
To use Push features the application needs the permission to access the Tizen Push servers.
        </p>
 * <p>
<b>Service Limitation:</b>        </p>
 * <ul>
 * <li>Size of a push message is limited: up to 127 bytes, and (payload data) less than 1 KB.
 * <li>Push service does not guarantee delivery and order of push messages.
 * </ul>
 *
 * @feature http://tizen.org/feature/network.push
 * @type PushManager
 */
PushManagerObject.prototype.push = new PushManager();

/**
 * Called when a push service registration request is successful.
 *
 * @param {PushRegistrationId} id
 * @type void
 * @memberOf PushRegisterSuccessCallback
 * @returns {void}
 */
PushRegisterSuccessCallback.prototype.onsuccess = function(id){ return; };

/**
 * Called when the state of push registration is changed.
 *
 * @param {PushRegistrationState} state
 * @type void
 * @memberOf PushRegistrationStateChangeCallback
 * @returns {void}
 */
PushRegistrationStateChangeCallback.prototype.onsuccess = function(state){ return; };

/**
 * Called when the push notification message arrives.
 *
 * @param {PushMessage} message
 * @type void
 * @memberOf PushNotificationCallback
 * @returns {void}
 */
PushNotificationCallback.prototype.onsuccess = function(message){ return; };

/**
 * Registers an application to the Tizen push server.
            <p>
The <em>ErrorCallback()</em> is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value.              </li>
              <li>
UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {ApplicationControl} appControl
 * @param {PushRegisterSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PushManager
 * @returns {void}
 */
PushManager.prototype.registerService = function(appControl, successCallback, errorCallback){ return; };

/**
 * Registers an application to the Tizen push server.
            <p>
The <em>ErrorCallback()</em> is launched with these error types:
            </p>
            <ul>
              <li>
TimeoutError - If the operation timed out.              </li>
              <li>
AbortError - If the operation cannot be finished properly.              </li>
            </ul>
           
 *
 * @param {PushRegisterSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PushManager
 * @returns {void}
 */
PushManager.prototype.register = function(successCallback, errorCallback){ return; };

/**
 * Unregisters an application from the Tizen push server.
            <p>
The <em>ErrorCallback()</em> is launched with these error types:
            </p>
            <ul>
              <li>
UnknownError - If an unknown error occurs.              </li>
            </ul>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PushManager
 * @returns {void}
 */
PushManager.prototype.unregisterService = function(successCallback, errorCallback){ return; };

/**
 * Unregisters an application from the Tizen push server.
            <p>
The <em>ErrorCallback()</em> is launched with these error types:
            </p>
            <ul>
              <li>
TimeoutError - If the operation timed out.              </li>
              <li>
AbortError - If the operation cannot be finished properly.              </li>
            </ul>
           
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PushManager
 * @returns {void}
 */
PushManager.prototype.unregister = function(successCallback, errorCallback){ return; };

/**
 * Connects to the push service and receives push notifications.
 *
 * @param {PushNotificationCallback} notificationCallback
 * @type void
 * @memberOf PushManager
 * @returns {void}
 */
PushManager.prototype.connectService = function(notificationCallback){ return; };

/**
 * Connects to the push service and gets state change events and push notifications.
            <p>
The <em>ErrorCallback()</em> is launched with these error types:
            </p>
            <ul>
              <li>
AbortError - If the operation cannot be finished properly.              </li>
            </ul>
           
 *
 * @param {PushRegistrationStateChangeCallback} stateChangeCallback
 * @param {PushNotificationCallback} notificationCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PushManager
 * @returns {void}
 */
PushManager.prototype.connect = function(stateChangeCallback, notificationCallback, errorCallback){ return; };

/**
 * Disconnects the push service and stops receiving push notifications.
 *
 * @type void
 * @memberOf PushManager
 * @returns {void}
 */
PushManager.prototype.disconnectService = function(){ return; };

/**
 * Disconnects the push service and stops receiving push notifications.
 *
 * @type void
 * @memberOf PushManager
 * @returns {void}
 */
PushManager.prototype.disconnect = function(){ return; };

/**
 * Gets the push service registration ID for this application if the registration process is successful. is returned if the application has not been registered yet.
 *
 * @type PushRegistrationId
 * @memberOf PushManager
 * @returns {PushRegistrationId}
 */
PushManager.prototype.getRegistrationId = function(){ var ret = new PushRegistrationId(); return ret; };

/**
 * Requests to get unread push notifications. As a consequence, the PushNotificationCallback which was set using the connectService() method will be invoked to retrieve the notifications..
            <p>
The connectService() method must be called to connect to Tizen push server and receive push notifications before calling the getUnreadNotifications() method.
If connectService is not called, <var>ServiceNotAvailableError</var> occurs.<br/>If any unread message exists, you will get unread push notification message through <var>PushNotificationCallback</var> of connectService().
For instance, if there are 10 unread messages, the <var>PushNotificationCallback</var> will be invoked 10 times.<br/><br/>If an application receives unread messages, the messages are removed from the system.
            </p>
            <p>
When an application registers with the push server to receive push notifications,
the push server stores messages for the application until they are delivered.
While the application is not running, messages cannot be delivered.
This method allows retrieving such missed push messages.
Once a missed push notification is retrieved the server deletes it from its database.
            </p>
           
 *
 * @type void
 * @memberOf PushManager
 * @returns {void}
 */
PushManager.prototype.getUnreadNotifications = function(){ return; };

/**
 * Gets push messages when the application is launched by the push service.
            <p>
If the application is launched by the push service, the push service is connected when the application is launched.
Therefore, you can get push messages without calling the <a href="push.html#Push Manager::connect">connect()</a> function.
            </p>
            <p>
If the application was not launched by the push service, this method returns <em>null</em>.
            </p>
           
 *
 * @type PushMessage
 * @memberOf PushManager
 * @returns {PushMessage}
 */
PushManager.prototype.getPushMessage = function(){ var ret = new PushMessage(); return ret; };

/**
 * An attribute to store the push notification data.
 * <p>
This data is the message that the sender wants to send and its length must be less than 1 KB.
            </p>
 *
 * @type String
 */
PushMessage.prototype.appData = new String();

/**
 * An attribute to store the push notification message that may include an alert message to the user.
 *
 * @type String
 */
PushMessage.prototype.alertMessage = new String();

/**
 * An attribute to store the full push notification message.
 *
 * @type String
 */
PushMessage.prototype.message = new String();

/**
 * An attribute to store the date/time when a push notification message is received.
 *
 * @type Date
 */
PushMessage.prototype.date = new Date();

/**
 * The name of the sender of the notification.
 *
 * @type String
 */
PushMessage.prototype.sender = new String();

/**
 * The session information of the notification.
 *
 * @type String
 */
PushMessage.prototype.sessionInfo = new String();

/**
 * The request ID assigned by the sender.
 *
 * @type String
 */
PushMessage.prototype.requestId = new String();

/**
 * The Push API provides functionality for receiving push notifications from the Tizen push server. The push service is a client daemon that maintains a permanent connection between your device and the Tizen push server. Connection with push server is used to deliver push notifications to the application, and process the registration and deregistration requests.
 * <p>
To receive push notifications, follow the steps below:
        </p>
 * <ul>
 * <li>Connecting to the push service
 * <li>Registering your application, if the application has not been registered yet
 * <li>Getting notification data
 * </ul>
 * <p>
For more information on the Push features, see <a href="http://127.0.0.1:34603/help/topic/http://127.0.0.1:34603/help/topic/org.tizen.guides/html/web/tizen/messaging/push_w.htm">Push Guide</a>.
        </p>
 * <p>
To use Push features the application needs the permission to access the Tizen Push servers.
        </p>
 * <p>
<b>Service Limitation:</b>        </p>
 * <ul>
 * <li>Size of a push message is limited: up to 127 bytes, and (payload data) less than 1 KB.
 * <li>Push service does not guarantee delivery and order of push messages.
 * </ul>
 *
 * @feature http://tizen.org/feature/network.push
 * @type PushManager
 */
Tizen.prototype.push = new PushManager();

/**
 * The SensorLightData interface represents light sensor data.
 *
 * @super Object
 * @constructor
 * @return {SensorLightData}
 */
function SensorLightData() {};
SensorLightData.prototype = new SensorData();

/**
 * The LightSensor interface provides methods to access light sensor data.
 *
 * @super Object
 * @constructor
 * @return {LightSensor}
 */
function LightSensor() {};
LightSensor.prototype = new Sensor();

/**
 * The SensorPressureData interface represents pressure sensor data.
 *
 * @super Object
 * @constructor
 * @return {SensorPressureData}
 */
function SensorPressureData() {};
SensorPressureData.prototype = new SensorData();

/**
 * The SensorGyroscopeRotationVectorData interface represents gyroscope rotation vector sensor data. You can refer to to learn more about gyroscope sensor data.
          <p>
A gyroscope rotation vector sensor data represents the orientation of the device as a combination of an angle and an axis when the device has rotated through an angle about an axis (X, Y, or Z).
It is equal to the components of a unit quaternion (cos(θ/2), x * sin(θ/2), y * sin(θ/2), z * sin(θ/2)).
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SensorGyroscopeRotationVectorData}
 */
function SensorGyroscopeRotationVectorData() {};
SensorGyroscopeRotationVectorData.prototype = new SensorData();

/**
 * The LinearAccelerationSensor interface provides methods to access linear acceleration sensor data.
 *
 * @super Object
 * @constructor
 * @return {LinearAccelerationSensor}
 */
function LinearAccelerationSensor() {};
LinearAccelerationSensor.prototype = new Sensor();

/**
 * The GyroscopeSensor interface provides methods to access gyroscope sensor data.
 *
 * @super Object
 * @constructor
 * @return {GyroscopeSensor}
 */
function GyroscopeSensor() {};
GyroscopeSensor.prototype = new Sensor();

/**
 * The ProximitySensor interface provides methods to access proximity sensor data.
 *
 * @super Object
 * @constructor
 * @return {ProximitySensor}
 */
function ProximitySensor() {};
ProximitySensor.prototype = new Sensor();

/**
 * The GyroscopeRotationVectorSensor interface provides methods to access gyroscope rotation vector sensor data.
 *
 * @super Object
 * @constructor
 * @return {GyroscopeRotationVectorSensor}
 */
function GyroscopeRotationVectorSensor() {};
GyroscopeRotationVectorSensor.prototype = new Sensor();

/**
 * The SensorDataSuccessCallback interface is a callback interface that is invoked periodically. For example, see the Sensor interface.
 *
 * @super Object
 * @constructor
 * @return {SensorDataSuccessCallback}
 */
function SensorDataSuccessCallback() {};
SensorDataSuccessCallback.prototype = new Object();

/**
 * The SensorGyroscopeData interface represents gyroscope sensor data. You can refer to to learn more about gyroscope sensor data.
 *
 * @super Object
 * @constructor
 * @return {SensorGyroscopeData}
 */
function SensorGyroscopeData() {};
SensorGyroscopeData.prototype = new SensorData();

/**
 * The UltravioletSensor interface provides methods to access ultraviolet sensor data.
 *
 * @super Object
 * @constructor
 * @return {UltravioletSensor}
 */
function UltravioletSensor() {};
UltravioletSensor.prototype = new Sensor();

/**
 * The HRMRawSensor interface provides methods to access HRM sensor raw data.
 *
 * @super Object
 * @constructor
 * @return {HRMRawSensor}
 */
function HRMRawSensor() {};
HRMRawSensor.prototype = new Sensor();

/**
 * The GravitySensor interface provides methods to access gravity sensor data.
 *
 * @super Object
 * @constructor
 * @return {GravitySensor}
 */
function GravitySensor() {};
GravitySensor.prototype = new Sensor();

/**
 * The MagneticSensor interface provides methods to access magnetic sensor data.
 *
 * @super Object
 * @constructor
 * @return {MagneticSensor}
 */
function MagneticSensor() {};
MagneticSensor.prototype = new Sensor();

/**
 * The SensorUltravioletData interface represents ultraviolet sensor data.
 *
 * @super Object
 * @constructor
 * @return {SensorUltravioletData}
 */
function SensorUltravioletData() {};
SensorUltravioletData.prototype = new SensorData();

/**
 * The SensorHardwareInfoSuccessCallback callback interface specifies a success callback with SensorHardwareInfo object as an input argument.
 *
 * @super Object
 * @constructor
 * @return {SensorHardwareInfoSuccessCallback}
 */
function SensorHardwareInfoSuccessCallback() {};
SensorHardwareInfoSuccessCallback.prototype = new Object();

/**
 * The SensorService interface provides methods to access the sensor.
 *
 * @super Object
 * @constructor
 * @return {SensorService}
 */
function SensorService() {};
SensorService.prototype = new Object();

/**
 * The SensorMagneticData interface represents magnetic sensor data.
 *
 * @super Object
 * @constructor
 * @return {SensorMagneticData}
 */
function SensorMagneticData() {};
SensorMagneticData.prototype = new SensorData();

/**
 * The SensorHRMRawData interface represents HRM sensor raw data.
 *
 * @super Object
 * @constructor
 * @return {SensorHRMRawData}
 */
function SensorHRMRawData() {};
SensorHRMRawData.prototype = new SensorData();

/**
 * The Sensor interface is a base interface for specific sensor interfaces. It provides methods common to all sensor types.
 *
 * @super Object
 * @constructor
 * @return {Sensor}
 */
function Sensor() {};
Sensor.prototype = new Object();

/**
 * The SensorData interface is a common abstract interface used by different types of sensor data objects.
 *
 * @super Object
 * @constructor
 * @return {SensorData}
 */
function SensorData() {};
SensorData.prototype = new Object();

/**
 * The SensorGravityData interface represents gravity sensor data. You can refer to to learn more about gravity sensor data.
 *
 * @super Object
 * @constructor
 * @return {SensorGravityData}
 */
function SensorGravityData() {};
SensorGravityData.prototype = new SensorData();

/**
 * The PressureSensor interface provides methods to access pressure sensor data.
 *
 * @super Object
 * @constructor
 * @return {PressureSensor}
 */
function PressureSensor() {};
PressureSensor.prototype = new Sensor();

/**
 * The SensorProximityData interface represents proximity sensor data.
 *
 * @super Object
 * @constructor
 * @return {SensorProximityData}
 */
function SensorProximityData() {};
SensorProximityData.prototype = new SensorData();

/**
 * The SensorServiceManagerObject interface defines what is instantiated by the object. The object allows access to various sensors of the Tizen device.
 *
 * @super Object
 * @constructor
 * @return {SensorServiceManagerObject}
 */
function SensorServiceManagerObject() {};
SensorServiceManagerObject.prototype = new Object();

/**
 * The SensorLinearAccelerationData interface represents linear acceleration sensor data.
 *
 * @super Object
 * @constructor
 * @return {SensorLinearAccelerationData}
 */
function SensorLinearAccelerationData() {};
SensorLinearAccelerationData.prototype = new SensorData();

/**
 * The SensorHardwareInfo interface represents information about the sensor requested by the method
 *
 * @super Object
 * @constructor
 * @return {SensorHardwareInfo}
 */
function SensorHardwareInfo() {};
SensorHardwareInfo.prototype = new Object();

/**
 * Ambient light level in lux.
 *
 * @type Number
 */
SensorLightData.prototype.lightLevel = new Number();

/**
 * Gets the current sensor data.
            <p>
Note that before calling the getLightSensorData() method, the start() method should be called to turn on the sensor.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError : If the <em>getLightSensorData()</em> method is called without first calling the <em>start()</em> method              </li>
              <li>
 UnknownError  : An unknown error has occurred              </li>
            </ul>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf LightSensor
 * @returns {void}
 */
LightSensor.prototype.getLightSensorData = function(successCallback, errorCallback){ return; };

/**
 * Pressure in hectopascal (hPa).
 *
 * @type Number
 */
SensorPressureData.prototype.pressure = new Number();

/**
 * The X direction component of the rotation vector (x * sin(θ/2)).The value can be between -1 and 1 inclusive.
 *
 * @type Number
 */
SensorGyroscopeRotationVectorData.prototype.x = new Number();

/**
 * The Y direction component of the rotation vector (y * sin(θ/2)).The value can be between -1 and 1 inclusive.
 *
 * @type Number
 */
SensorGyroscopeRotationVectorData.prototype.y = new Number();

/**
 * The Z direction component of the rotation vector (z * sin(θ/2)).The value can be between -1 and 1 inclusive.
 *
 * @type Number
 */
SensorGyroscopeRotationVectorData.prototype.z = new Number();

/**
 * The scalar component of the rotation vector (cos(θ/2)).The value can be between -1 and 1 inclusive.
 *
 * @type Number
 */
SensorGyroscopeRotationVectorData.prototype.w = new Number();

/**
 * Gets the current sensor data.
            <p>
Note that before calling the getLinearAccelerationSensorData() method, the start() method should be called to turn on the sensor.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError : If the <em>getLinearAccelerationSensorData()</em> method is called without first calling the <em>start()</em> method              </li>
              <li>
 AbortError : If the system operation was aborted              </li>
            </ul>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf LinearAccelerationSensor
 * @returns {void}
 */
LinearAccelerationSensor.prototype.getLinearAccelerationSensorData = function(successCallback, errorCallback){ return; };

/**
 * Gets the current gyroscope sensor data. You can refer to the interface.
            <p>
Note that before calling the getGyroscopeSensorData() method, the start() method should be called to turn on the sensor.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError : If the <em>getGyroscopeSensorData()</em> method is called without first calling the <em>start()</em> method              </li>
              <li>
 AbortError : If the system operation was aborted              </li>
            </ul>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf GyroscopeSensor
 * @returns {void}
 */
GyroscopeSensor.prototype.getGyroscopeSensorData = function(successCallback, errorCallback){ return; };

/**
 * Gets the current sensor data.
            <p>
Note that before calling the getProximitySensorData() method, the start() method should be called to turn on the sensor.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError : If the <em>getProximitySensorData()</em> method is called without first calling the <em>start()</em> method              </li>
              <li>
 UnknownError  : An unknown error has occurred              </li>
            </ul>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf ProximitySensor
 * @returns {void}
 */
ProximitySensor.prototype.getProximitySensorData = function(successCallback, errorCallback){ return; };

/**
 * Gets the current gyroscope rotation vector sensor data. You can refer to the interface.
            <p>
Note that before calling the getGyroscopeRotationVectorSensorData() method, the start() method should be called to turn on the sensor.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError : If the <em>getGyroscopeRotationVectorSensorData()</em> method is called without first calling the <em>start()</em> method              </li>
              <li>
 AbortError : If the system operation was aborted              </li>
            </ul>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf GyroscopeRotationVectorSensor
 * @returns {void}
 */
GyroscopeRotationVectorSensor.prototype.getGyroscopeRotationVectorSensorData = function(successCallback, errorCallback){ return; };

/**
 * Called periodically.
 *
 * @param {SensorData} sensorData
 * @type void
 * @memberOf SensorDataSuccessCallback
 * @returns {void}
 */
SensorDataSuccessCallback.prototype.onsuccess = function(sensorData){ return; };

/**
 * The angular velocity about the device's X axis in °/s.The value can be between -573.0 and 573.0 inclusive.
 *
 * @type Number
 */
SensorGyroscopeData.prototype.x = new Number();

/**
 * The angular velocity about the device's Y axis in °/s.The value can be between -573.0 and 573.0 inclusive.
 *
 * @type Number
 */
SensorGyroscopeData.prototype.y = new Number();

/**
 * The angular velocity about the device's Z axis in °/s.The value can be between -573.0 and 573.0 inclusive.
 *
 * @type Number
 */
SensorGyroscopeData.prototype.z = new Number();

/**
 * Gets the current sensor data.
            <p>
Note that before calling the getUltravioletSensorData() method, the start() method should be called to turn on the sensor.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError : If the <em>getUltravioletSensorData()</em> method is called without first calling the <em>start()</em> method              </li>
              <li>
 UnknownError  : An unknown error has occurred              </li>
            </ul>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf UltravioletSensor
 * @returns {void}
 */
UltravioletSensor.prototype.getUltravioletSensorData = function(successCallback, errorCallback){ return; };

/**
 * Gets the current sensor data.
            <p>
Note that before calling the getHRMRawSensorData() method, the start() method should be called to turn on the sensor.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError : If the getHRMRawSensorData method is called without calling the start method.              </li>
              <li>
 UnknownError  : An unknown error has occurred.              </li>
            </ul>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf HRMRawSensor
 * @returns {void}
 */
HRMRawSensor.prototype.getHRMRawSensorData = function(successCallback, errorCallback){ return; };

/**
 * Gets the current gravity sensor data. You can refer to the interface.
            <p>
Note that before calling the getGravitySensorData() method, the start() method should be called to turn on the sensor.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError : If the <em>getGravitySensorData()</em> method is called without first calling the <em>start()</em> method              </li>
              <li>
 AbortError : If the system operation was aborted              </li>
            </ul>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf GravitySensor
 * @returns {void}
 */
GravitySensor.prototype.getGravitySensorData = function(successCallback, errorCallback){ return; };

/**
 * Gets the current sensor data.
            <p>
Note that before calling the getMagneticSensorData() method, the start() method should be called to turn on the sensor.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError : If the <em>getMagneticSensorData()</em> method is called without first calling the <em>start()</em> method              </li>
              <li>
 UnknownError  : An unknown error has occurred              </li>
            </ul>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf MagneticSensor
 * @returns {void}
 */
MagneticSensor.prototype.getMagneticSensorData = function(successCallback, errorCallback){ return; };

/**
 * Ultraviolet index.
 * <p>
The ultraviolet index is an international standard measurement of the strength of ultraviolet radiation from the sun. The <em>ultravioletLevel</em> ranges from 0 to 15.
            </p>
 *
 * @type Number
 */
SensorUltravioletData.prototype.ultravioletLevel = new Number();

/**
 * Called when sensor hardware infomation is successfully retrieved.
 *
 * @param {SensorHardwareInfo} hardwareInfo
 * @type void
 * @memberOf SensorHardwareInfoSuccessCallback
 * @returns {void}
 */
SensorHardwareInfoSuccessCallback.prototype.onsuccess = function(hardwareInfo){ return; };

/**
 * Gets the default sensor of the device for the given sensor type.
            <p>
The supported sensor types are hardware-dependent. <br/><br/>To check if the given <var>type</var> is supported or not, SystemInfo API can be used.
            </p>
            <ul>
              <li>
 LIGHT       - tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.photometer"</em>)               </li>
              <li>
 MAGNETIC    - tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.magnetometer"</em>)               </li>
              <li>
 PRESSURE    - tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.barometer"</em>)               </li>
              <li>
 PROXIMITY   - tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.proximity"</em>)               </li>
              <li>
 ULTRAVIOLET - tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.ultraviolet"</em>)               </li>
              <li>
 HRM_RAW     - tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.heart_rate_monitor"</em>)               </li>
              <li>
 GRAVITY     - tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.gravity"</em>)               </li>
              <li>
 GYROSCOPE   - tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.gyroscope"</em>)               </li>
              <li>
 GYROSCOPE_ROTATION_VECTOR - tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.gyroscope_rotation_vector"</em>)               </li>
              <li>
 LINEAR_ACCELERATION - tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/sensor.linear_acceleration"</em>)               </li>
            </ul>
           
 *
 * @param {SensorType} type
 * @type Sensor
 * @memberOf SensorService
 * @returns {Sensor}
 */
SensorService.prototype.getDefaultSensor = function(type){ var ret = new Sensor(); return ret; };

/**
 * Gets the available sensor types.
 *
 * @type array
 * @memberOf SensorService
 * @returns {array}
 */
SensorService.prototype.getAvailableSensors = function(){ var ret = new array(); return ret; };

/**
 * Ambient magnetic field of the X axis in micro-Tesla (µT).
 *
 * @type Number
 */
SensorMagneticData.prototype.x = new Number();

/**
 * Ambient magnetic field of the Y axis in micro-Tesla (µT).
 *
 * @type Number
 */
SensorMagneticData.prototype.y = new Number();

/**
 * Ambient magnetic field of the Z axis in micro-Tesla (µT).
 *
 * @type Number
 */
SensorMagneticData.prototype.z = new Number();

/**
 * Accuracy of magnetic sensor data.
 * <p>
For increasing the accuracy, wave the device around in the air in figure-eight patterns.
            </p>
 *
 * @type MagneticSensorAccuracy
 */
SensorMagneticData.prototype.accuracy = new MagneticSensorAccuracy();

/**
 * HRM sensor light type.
 * <p>
The following values are supported:
            </p>
 * <ul>
 * <li>LED_IR - The infrared spectrum
 * <li>LED_RED - The red light spectrum
 * <li>LED_GREEN - The green light spectrum
 * </ul>
 *
 * @type String
 */
SensorHRMRawData.prototype.lightType = new String();

/**
 * HRM sensor light intensity measures the light intensity that is reflected from a blood vessel. The changes in the reported value represent blood volume changes in the microvascular bed of the tissue, and can be used to estimate heart rate.
 *
 * @type Number
 */
SensorHRMRawData.prototype.lightIntensity = new Number();

/**
 * Sensor type to monitor the changes.
 *
 * @type SensorType
 */
Sensor.prototype.sensorType = new SensorType();

/**
 * Starts the sensor.
 *
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Sensor
 * @returns {void}
 */
Sensor.prototype.start = function(successCallback, errorCallback){ return; };

/**
 * Stops the sensor.
 *
 * @type void
 * @memberOf Sensor
 * @returns {void}
 */
Sensor.prototype.stop = function(){ return; };

/**
 * Registers a listener to retrieve sensor data periodically.
            <p>
Note that the setChangeListener() method only registers the listener.
The start() method must be called to turn on the sensor, or the sensor data will not change.
            </p>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {Number} interval
 * @param {Number} batchLatency
 * @type void
 * @memberOf Sensor
 * @returns {void}
 */
Sensor.prototype.setChangeListener = function(successCallback, interval, batchLatency){ return; };

/**
 * Unregisters the sensor data change listener.
 *
 * @type void
 * @memberOf Sensor
 * @returns {void}
 */
Sensor.prototype.unsetChangeListener = function(){ return; };

/**
 * Gets hardware information of the sensor.
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
AbortError - If operation failed.              </li>
              <li>
IOError - If the platform fails to internally prepare a socket for IPC communication.              </li>
            </ul>
           
 *
 * @param {SensorHardwareInfoSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Sensor
 * @returns {void}
 */
Sensor.prototype.getSensorHardwareInfo = function(successCallback, errorCallback){ return; };

/**
 * Value of the Earth's gravity in the device's X axis in m/s².The value can be between -9.8 and 9.8 inclusive.
 *
 * @type Number
 */
SensorGravityData.prototype.x = new Number();

/**
 * Value of the Earth's gravity in the device's Y axis in m/s².The value can be between -9.8 and 9.8 inclusive.
 *
 * @type Number
 */
SensorGravityData.prototype.y = new Number();

/**
 * Value of the Earth's gravity in the device's Z axis in m/s².The value can be between -9.8 and 9.8 inclusive.
 *
 * @type Number
 */
SensorGravityData.prototype.z = new Number();

/**
 * Gets the current sensor data.
            <p>
Note that the start() method should be called before calling the getPressureSensorData() method to turn on the sensor.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
 ServiceNotAvailableError : If the <em>getPressureSensorData()</em> method is called without first calling the <em>start()</em> method              </li>
              <li>
 UnknownError  : An unknown error has occurred              </li>
            </ul>
           
 *
 * @param {SensorDataSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf PressureSensor
 * @returns {void}
 */
PressureSensor.prototype.getPressureSensorData = function(successCallback, errorCallback){ return; };

/**
 * Proximity state.
 *
 * @type ProximityState
 */
SensorProximityData.prototype.proximityState = new ProximityState();

/**
 * The Sensor API defines interfaces and methods to manage sensor data from various sensors on the device.
 * <p>
The following sensor functionality is provided:
        </p>
 * <ul>
 * <li>Start and stop sensor
 * <li>Set and unset notification of the sensor data change
 * <li>Get current sensor data
 * </ul>
 * <p>
For more information about how to use Sensor API, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/sys_guide/sensor.htm">Sensor Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/sensor.photometer
 * @type SensorService
 */
SensorServiceManagerObject.prototype.sensorservice = new SensorService();

/**
 * Value of the linear acceleration in the device's X axis in m/s².The value can be between -19.6 and 19.6 inclusive.
 *
 * @type Number
 */
SensorLinearAccelerationData.prototype.x = new Number();

/**
 * Value of the linear acceleration in the device's Y axis in m/s².The value can be between -19.6 and 19.6 inclusive.
 *
 * @type Number
 */
SensorLinearAccelerationData.prototype.y = new Number();

/**
 * Value of the linear acceleration in the device's Z axis in m/s².The value can be between -19.6 and 19.6 inclusive.
 *
 * @type Number
 */
SensorLinearAccelerationData.prototype.z = new Number();

/**
 * Name of the sensor.
 *
 * @type String
 */
SensorHardwareInfo.prototype.name = new String();

/**
 * .
 *
 * @type SensorType
 */
SensorHardwareInfo.prototype.type = new SensorType();

/**
 * Vendor of the sensor.
 *
 * @type String
 */
SensorHardwareInfo.prototype.vendor = new String();

/**
 * Minimum reading value that can be received from the sensor.The units for the minimum value depends on the sensor type:
 * <ul>
 * <li>LIGHT - lux
 * <li>MAGNETIC - μT (micro Tesla)
 * <li>PRESSURE - hPa (hectopascal)
 * <li>PROXIMITY - None
 * <li>ULTRAVIOLET - UV index (ultraviolet index)
 * <li>HRM_RAW - None
 * <li>GRAVITY - m/s (meters per second squared)
 * <li>GYROSCOPE - °/s (Degrees/s)
 * <li>GYROSCOPE_ROTATION_VECTOR - None
 * <li>LINEAR_ACCELERATION - m/s (meters per second squared)
 * </ul>
 * <p>
For more information about sensor, see <a href="https://developer.tizen.org/dev-guide/latest/org.tizen.guides/html/native/system/sensors_n.htm">Sensor Guide</a>.
            </p>
 *
 * @type Number
 */
SensorHardwareInfo.prototype.minValue = new Number();

/**
 * Maximum reading value that can be received from the sensor.The units for the maximum value depends on the sensor type:
 * <ul>
 * <li>LIGHT - lux
 * <li>MAGNETIC - μT (micro Tesla)
 * <li>PRESSURE - hPa (hectopascal)
 * <li>PROXIMITY - None
 * <li>ULTRAVIOLET - UV index (ultraviolet index)
 * <li>HRM_RAW - None
 * <li>GRAVITY - m/s (meters per second squared)
 * <li>GYROSCOPE - °/s (Degrees/s)
 * <li>GYROSCOPE_ROTATION_VECTOR - None
 * <li>LINEAR_ACCELERATION - m/s (meters per second squared)
 * </ul>
 * <p>
For more information about sensor, see <a href="https://developer.tizen.org/dev-guide/latest/org.tizen.guides/html/native/system/sensors_n.htm">Sensor Guide</a>.
            </p>
 *
 * @type Number
 */
SensorHardwareInfo.prototype.maxValue = new Number();

/**
 * The smallest change which the sensor can detect.The units of the resolution depends on the sensor type:
 * <ul>
 * <li>LIGHT - lux
 * <li>MAGNETIC - μT (micro Tesla)
 * <li>PRESSURE - hPa (hectopascal)
 * <li>PROXIMITY - None
 * <li>ULTRAVIOLET - UV index (ultraviolet index)
 * <li>HRM_RAW - None
 * <li>GRAVITY - m/s (meters per second squared)
 * <li>GYROSCOPE - °/s (Degrees/s)
 * <li>GYROSCOPE_ROTATION_VECTOR - None
 * <li>LINEAR_ACCELERATION - m/s (meters per second squared)
 * </ul>
 *
 * @type Number
 */
SensorHardwareInfo.prototype.resolution = new Number();

/**
 * Minimum interval of the sensor which means a period between two events.
 *
 * @type Number
 */
SensorHardwareInfo.prototype.minInterval = new Number();

/**
 * Maximum batch count of sensor, batch means storing a sensors event in a hardware FIFO register when processor stay on sleep or suspend status.
 *
 * @type Number
 */
SensorHardwareInfo.prototype.maxBatchCount = new Number();

/**
 * The Sensor API defines interfaces and methods to manage sensor data from various sensors on the device.
 * <p>
The following sensor functionality is provided:
        </p>
 * <ul>
 * <li>Start and stop sensor
 * <li>Set and unset notification of the sensor data change
 * <li>Get current sensor data
 * </ul>
 * <p>
For more information about how to use Sensor API, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/sys_guide/sensor.htm">Sensor Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/sensor.photometer
 * @type SensorService
 */
Tizen.prototype.sensorservice = new SensorService();

/**
 * The TransmitSuccessCallback interface specifies the success callback that is invoked when completes successfully.
          <p>
This callback interface specifies a success method with an array of bytes as an input parameter. It is used in <em>Channel.transmit()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {TransmitSuccessCallback}
 */
function TransmitSuccessCallback() {};
TransmitSuccessCallback.prototype = new Object();

/**
 * The ChannelSuccessCallback interface specifies the success callback that is invoked when a channel is open to communicate with a specific applet.
          <p>
This callback interface specifies a success method with a <em>Channel</em> object as an input parameter.
It is used in asynchronous operations such as <em>Session.openBasicChannel() </em>or <em>Session.openLogicalChannel()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ChannelSuccessCallback}
 */
function ChannelSuccessCallback() {};
ChannelSuccessCallback.prototype = new Object();

/**
 * The Channel interface is open to a Secure Element and offers methods to send Application Protocol Data Units(APDU) to the Secure Element. The channel is defined in the ISO7816-4.
 *
 * @super Object
 * @constructor
 * @return {Channel}
 */
function Channel() {};
Channel.prototype = new Object();

/**
 * The Session interface is connected to one of the readers and offers methods to control channels in a session.
 *
 * @super Object
 * @constructor
 * @return {Session}
 */
function Session() {};
Session.prototype = new Object();

/**
 * The SEServiceManagerObject interface defines what is instantiated by the Tizen object from the Tizen Platform.
          <p>
The <em>tizen.seService</em> object allows access to the functionality of the SecureElement API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SEServiceManagerObject}
 */
function SEServiceManagerObject() {};
SEServiceManagerObject.prototype = new Object();

/**
 * The ReaderArraySuccessCallback callback interface provides a success callback that is invoked when a list of available Secure Element readers is retrieved.
          <p>
It specifies a success method with an array of <em>Reader</em> objects as an input parameter.
It is used in asynchronous operations such as <em>SEService.getReaders()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ReaderArraySuccessCallback}
 */
function ReaderArraySuccessCallback() {};
ReaderArraySuccessCallback.prototype = new Object();

/**
 * The SEChangeListener interface provides the success callback that is invoked when a Secure Element reader is detected or lost.
          <p>
It is used in <em>SEService.registerSEListener()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SEChangeListener}
 */
function SEChangeListener() {};
SEChangeListener.prototype = new Object();

/**
 * The SessionSuccessCallback interface specifies the success callback that is invoked when a session on a specific reader is open.
          <p>
This callback interface specifies a success method with a <em>Session</em> object as an input parameter.
It is used in asynchronous operations such as <em>Reader.openSession()</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SessionSuccessCallback}
 */
function SessionSuccessCallback() {};
SessionSuccessCallback.prototype = new Object();

/**
 * The SEService interface provides access to the available Secure Element readers.
          <p>
It provides access to the API functionalities through the <em>tizen.seService</em> interface.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SEService}
 */
function SEService() {};
SEService.prototype = new Object();

/**
 * The Reader interface that is connected to this device.
          <p>
This interface offers methods to control sessions on the reader.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {Reader}
 */
function Reader() {};
Reader.prototype = new Object();

/**
 * Called when an asynchronous call completes successfully.
 *
 * @param {array} response
 * @type void
 * @memberOf TransmitSuccessCallback
 * @returns {void}
 */
TransmitSuccessCallback.prototype.onsuccess = function(response){ return; };

/**
 * Called when an asynchronous call completes successfully.
 *
 * @param {Channel} channel
 * @type void
 * @memberOf ChannelSuccessCallback
 * @returns {void}
 */
ChannelSuccessCallback.prototype.onsuccess = function(channel){ return; };

/**
 * Boolean value that indicates whether it is a basic channel.
 *
 * @type Boolean
 */
Channel.prototype.isBasicChannel = new Boolean();

/**
 * Closes a channel.
 *
 * @type void
 * @memberOf Channel
 * @returns {void}
 */
Channel.prototype.close = function(){ return; };

/**
 * Transmits an APDU command to a Secure Element. The APDU command is defined in ISO7816-4.
            <p>
Some commands that are not allowed to be sent are:
            </p>
            <ul>
              <li>
 MANAGE_CHANNEL commands.               </li>
              <li>
 SELECT by DF Name (p1=04).               </li>
              <li>
 The commands that CLA bytes with channel numbers are de-masked.               </li>
            </ul>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 InvalidValuesError - If the command contain an invalid value.              </li>
              <li>
 IOError - An error occurred while communicating with the Secure Element in the reader.              </li>
              <li>
 SecurityError - If the command is not allowed.              </li>
              <li>
 InvalidStateError - If this channel is closed.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {array} command
 * @param {TransmitSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Channel
 * @returns {void}
 */
Channel.prototype.transmit = function(command, successCallback, errorCallback){ return; };

/**
 * Gets the data as received from the application select command including the status words.
            <p>
When opening a channel, when an applet ID of secure element is selected,
a response is generated to the select command. This method retrieves the response.
            </p>
            <p>
The return value is a byte array containing the data bytes in the following order:
            </p>
            <p>
[&lt;first data byte&gt;, ..., &lt;last data byte&gt;, &lt;status word1&gt;, &lt;status word2&gt;]
            </p>
            <ul>
              <li>
Only the status words are returned if the application select command has no returned data.              </li>
              <li>
Null if an application select command has not been performed or
the selection response can not be retrieved by the reader implementation.              </li>
            </ul>
           
 *
 * @type array
 * @memberOf Channel
 * @returns {array}
 */
Channel.prototype.getSelectResponse = function(){ var ret = new array(); return ret; };

/**
 * Boolean value that indicates whether a session is closed.
 *
 * @type Boolean
 */
Session.prototype.isClosed = new Boolean();

/**
 * Opens a basic channel in a session. The basic channel (defined in the ISO7816-4 specification) is opened by default and its channel ID is . Once this channel has been opened by an application, it is considered to be "locked" to other applications, and they cannot open any channel, until the basic channel is closed. Some Secure Elements might always deny opening a basic channel.
            <p>
The optional select response data of an applet can be retrieved with byte[] getSelectResponse().
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 IOError - If an error occurs while communicating with the Secure Element in the reader.              </li>
              <li>
 SecurityError - If access to this AID or the default application on this session is not allowed .              </li>
              <li>
 InvalidStateError - If this session is closed.               </li>
              <li>
 NotFoundError - If the application of the AID does not exist in the Secure Element.              </li>
              <li>
 NoChannelError - If basic channel is unavailable.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {array} aid
 * @param {ChannelSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Session
 * @returns {void}
 */
Session.prototype.openBasicChannel = function(aid, successCallback, errorCallback){ return; };

/**
 * Opens a logical channel in a session by the specified applet ID. The logical channel is defined in the ISO7816-4 specification.
            <p>
The optional select response data of an applet can be retrieved with byte[] getSelectResponse().
            </p>
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 IOError - If an error occurs while communicating with the Secure Element in the reader.              </li>
              <li>
 SecurityError - If access to this AID or the default application in this session is not allowed.              </li>
              <li>
 InvalidStateError - If this session is closed.              </li>
              <li>
 NotFoundError - If the application of the AID does not exist in the Secure Element.              </li>
              <li>
 NoChannelError - If logical channel is unavailable.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {array} aid
 * @param {ChannelSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Session
 * @returns {void}
 */
Session.prototype.openLogicalChannel = function(aid, successCallback, errorCallback){ return; };

/**
 * Gets the answer to reset(ATR) of a Secure Element.
 *
 * @type array
 * @memberOf Session
 * @returns {array}
 */
Session.prototype.getATR = function(){ var ret = new array(); return ret; };

/**
 * Closes a session.
 *
 * @type void
 * @memberOf Session
 * @returns {void}
 */
Session.prototype.close = function(){ return; };

/**
 * Closes all channels on this session.
 *
 * @type void
 * @memberOf Session
 * @returns {void}
 */
Session.prototype.closeChannels = function(){ return; };

/**
 * The SecureElement API provides functionality to communicate with applications in several Secure Elements. A Secure Element is a secure smart card chip. It can be a UICC/SIM, an embedded Secure Element, or a Secure SD card that is inserted in a device.
 *
 * @feature http://tizen.org/feature/network.secure_element
 * @type SEService
 */
SEServiceManagerObject.prototype.seService = new SEService();

/**
 * Called when an asynchronous call completes successfully.
 *
 * @param {array} readers
 * @type void
 * @memberOf ReaderArraySuccessCallback
 * @returns {void}
 */
ReaderArraySuccessCallback.prototype.onsuccess = function(readers){ return; };

/**
 * Called when a Secure Element reader is detected.
 *
 * @param {Reader} reader
 * @type void
 * @memberOf SEChangeListener
 * @returns {void}
 */
SEChangeListener.prototype.onSEReady = function(reader){ return; };

/**
 * Called when a Secure Element reader is lost.
 *
 * @param {Reader} reader
 * @type void
 * @memberOf SEChangeListener
 * @returns {void}
 */
SEChangeListener.prototype.onSENotReady = function(reader){ return; };

/**
 * Called when a Secure Element reader has an error.
 *
 * @param {Reader} reader
 * @param {WebAPIError} error
 * @type void
 * @memberOf SEChangeListener
 * @returns {void}
 */
SEChangeListener.prototype.onSEError = function(reader, error){ return; };

/**
 * Called when an asynchronous call completes successfully.
 *
 * @param {Session} session
 * @type void
 * @memberOf SessionSuccessCallback
 * @returns {void}
 */
SessionSuccessCallback.prototype.onsuccess = function(session){ return; };

/**
 * Gets all the available Secure Element readers.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 UnknownError - If any error occurs during retrieval.              </li>
            </ul>
           
 *
 * @param {ReaderArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf SEService
 * @returns {void}
 */
SEService.prototype.getReaders = function(successCallback, errorCallback){ return; };

/**
 * Registers a callback function that is invoked when an available Secure Element reader is detected.
 *
 * @param {SEChangeListener} listener
 * @type Number
 * @memberOf SEService
 * @returns {Number}
 */
SEService.prototype.registerSEListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Unregisters the listener from notifying any detection of an available Secure Element reader.
 *
 * @param {Number} id
 * @type void
 * @memberOf SEService
 * @returns {void}
 */
SEService.prototype.unregisterSEListener = function(id){ return; };

/**
 * Shuts down Secure Elements after releasing all resources.
 *
 * @type void
 * @memberOf SEService
 * @returns {void}
 */
SEService.prototype.shutdown = function(){ return; };

/**
 * Boolean value that indicates whether a Secure Element is present on a reader.
 *
 * @type Boolean
 */
Reader.prototype.isPresent = new Boolean();

/**
 * Gets the reader's name.
 *
 * @type String
 * @memberOf Reader
 * @returns {String}
 */
Reader.prototype.getName = function(){ var ret = new String(); return ret; };

/**
 * Opens a session on a reader.
            <p>
The ErrorCallback is launched with these error types:
            </p>
            <ul>
              <li>
 IOError - An error occurred in communication with the Secure Element in this reader.              </li>
              <li>
 InvalidStateError - If a Secure Element is not present on this reader.              </li>
              <li>
 UnknownError - If any other error occurs.              </li>
            </ul>
           
 *
 * @param {SessionSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Reader
 * @returns {void}
 */
Reader.prototype.openSession = function(successCallback, errorCallback){ return; };

/**
 * Closes all sessions opened on a reader.
 *
 * @type void
 * @memberOf Reader
 * @returns {void}
 */
Reader.prototype.closeSessions = function(){ return; };

/**
 * The SecureElement API provides functionality to communicate with applications in several Secure Elements. A Secure Element is a secure smart card chip. It can be a UICC/SIM, an embedded Secure Element, or a Secure SD card that is inserted in a device.
 *
 * @feature http://tizen.org/feature/network.secure_element
 * @type SEService
 */
Tizen.prototype.seService = new SEService();

/**
 * The SoundVolumeChangeCallback interface specifies a volume change callback for getting notified about the volume changes.
 *
 * @super Object
 * @constructor
 * @return {SoundVolumeChangeCallback}
 */
function SoundVolumeChangeCallback() {};
SoundVolumeChangeCallback.prototype = new Object();

/**
 * The SoundManagerObject interface defines what is instantiated in the tizen object.
          <p>
There is a tizen.sound object that allows accessing the functionality of the Sound API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SoundManagerObject}
 */
function SoundManagerObject() {};
SoundManagerObject.prototype = new Object();

/**
 * The SoundManager interface provides the functionalities to control the volume level.
 *
 * @super Object
 * @constructor
 * @return {SoundManager}
 */
function SoundManager() {};
SoundManager.prototype = new Object();

/**
 * The SoundDeviceInfo interface specifies the information about a sound device.
 *
 * @super Object
 * @constructor
 * @return {SoundDeviceInfo}
 */
function SoundDeviceInfo() {};
SoundDeviceInfo.prototype = new Object();

/**
 * The SoundDeviceStateChangeCallback interface specifies a sound device type change callback for getting notified when the sound device state changes.
 *
 * @super Object
 * @constructor
 * @return {SoundDeviceStateChangeCallback}
 */
function SoundDeviceStateChangeCallback() {};
SoundDeviceStateChangeCallback.prototype = new Object();

/**
 * The SoundModeChangeCallback interface specifies a mode change callback for getting notified about the sound mode changes.
 *
 * @super Object
 * @constructor
 * @return {SoundModeChangeCallback}
 */
function SoundModeChangeCallback() {};
SoundModeChangeCallback.prototype = new Object();

/**
 * Called when the volume level has changed.
 *
 * @param {SoundType} type
 * @param {Number} volume
 * @type void
 * @memberOf SoundVolumeChangeCallback
 * @returns {void}
 */
SoundVolumeChangeCallback.prototype.onsuccess = function(type, volume){ return; };

/**
 * The Sound API provides functions to control the volume level for several sound types and to check whether a specified sound device type is connected.
 * <p>
You can get the maximum volume level for system, notifications, alarm, media and so on.
Also, you can change or get the current volume level.
        </p>
 * <p>
For more information on the Sound features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/media_guide/sound.htm">Sound Guide</a>.
        </p>
 *
 * @type SoundManager
 */
SoundManagerObject.prototype.sound = new SoundManager();

/**
 * Gets the current sound mode.
 *
 * @type SoundModeType
 * @memberOf SoundManager
 * @returns {SoundModeType}
 */
SoundManager.prototype.getSoundMode = function(){ var ret = new SoundModeType(); return ret; };

/**
 * Sets the volume level for a specified sound type.
 *
 * @param {SoundType} type
 * @param {Number} volume
 * @type void
 * @memberOf SoundManager
 * @returns {void}
 */
SoundManager.prototype.setVolume = function(type, volume){ return; };

/**
 * Gets the current volume level for a specified sound type.
 *
 * @param {SoundType} type
 * @type Number
 * @memberOf SoundManager
 * @returns {Number}
 */
SoundManager.prototype.getVolume = function(type){ var ret = new Number(); return ret; };

/**
 * Registers a listener to be called when the sound mode is changed.
 *
 * @param {SoundModeChangeCallback} callback
 * @type void
 * @memberOf SoundManager
 * @returns {void}
 */
SoundManager.prototype.setSoundModeChangeListener = function(callback){ return; };

/**
 * Unsubscribes from receiving notification about the sound mode change.
 *
 * @type void
 * @memberOf SoundManager
 * @returns {void}
 */
SoundManager.prototype.unsetSoundModeChangeListener = function(){ return; };

/**
 * Registers a listener to be called when the volume level is changed.
 *
 * @param {SoundVolumeChangeCallback} callback
 * @type void
 * @memberOf SoundManager
 * @returns {void}
 */
SoundManager.prototype.setVolumeChangeListener = function(callback){ return; };

/**
 * Unsubscribes from receiving notification when the volume level is changed.
 *
 * @type void
 * @memberOf SoundManager
 * @returns {void}
 */
SoundManager.prototype.unsetVolumeChangeListener = function(){ return; };

/**
 * Gets a list of connected sound devices.
 *
 * @type array
 * @memberOf SoundManager
 * @returns {array}
 */
SoundManager.prototype.getConnectedDeviceList = function(){ var ret = new array(); return ret; };

/**
 * Gets a list of activated sound devices.
 *
 * @type array
 * @memberOf SoundManager
 * @returns {array}
 */
SoundManager.prototype.getActivatedDeviceList = function(){ var ret = new array(); return ret; };

/**
 * Registers a listener that is to be called when the sound device state is changed.
            <p>
There are two types of device state changes:
            </p>
            <ul>
              <li>
Connectivity: When a device changes from being connected to being disconnected or from being disconnected to being connected.              </li>
              <li>
Activation: When a device chages from being activated to being deactivated or from being deactivated to being activated.              </li>
            </ul>
           
 *
 * @param {SoundDeviceStateChangeCallback} callback
 * @type Number
 * @memberOf SoundManager
 * @returns {Number}
 */
SoundManager.prototype.addDeviceStateChangeListener = function(callback){ var ret = new Number(); return ret; };

/**
 * Unsubscribes from receiving notifications when the sound device state is changed.
 *
 * @param {Number} id
 * @type void
 * @memberOf SoundManager
 * @returns {void}
 */
SoundManager.prototype.removeDeviceStateChangeListener = function(id){ return; };

/**
 * The sound device ID
 *
 * @type Number
 */
SoundDeviceInfo.prototype.id = new Number();

/**
 * The sound device name
 *
 * @type String
 */
SoundDeviceInfo.prototype.name = new String();

/**
 * The sound device type
 *
 * @type SoundDeviceType
 */
SoundDeviceInfo.prototype.device = new SoundDeviceType();

/**
 * The sound device I/O type
 *
 * @type SoundIOType
 */
SoundDeviceInfo.prototype.direction = new SoundIOType();

/**
 * True if the sound device state is connected
 *
 * @type Boolean
 */
SoundDeviceInfo.prototype.isConnected = new Boolean();

/**
 * True if the sound device state is activated
 *
 * @type Boolean
 */
SoundDeviceInfo.prototype.isActivated = new Boolean();

/**
 * Method invoked when the sound device state changes.
 *
 * @param {SoundDeviceInfo} info
 * @type void
 * @memberOf SoundDeviceStateChangeCallback
 * @returns {void}
 */
SoundDeviceStateChangeCallback.prototype.onchanged = function(info){ return; };

/**
 * Called when the sound mode has changed.
 *
 * @param {SoundModeType} mode
 * @type void
 * @memberOf SoundModeChangeCallback
 * @returns {void}
 */
SoundModeChangeCallback.prototype.onsuccess = function(mode){ return; };

/**
 * The Sound API provides functions to control the volume level for several sound types and to check whether a specified sound device type is connected.
 * <p>
You can get the maximum volume level for system, notifications, alarm, media and so on.
Also, you can change or get the current volume level.
        </p>
 * <p>
For more information on the Sound features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/media_guide/sound.htm">Sound Guide</a>.
        </p>
 *
 * @type SoundManager
 */
Tizen.prototype.sound = new SoundManager();

/**
 * This property reflects the information of the device orientation in this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoDeviceOrientation}
 */
function SystemInfoDeviceOrientation() {};
SystemInfoDeviceOrientation.prototype = new SystemInfoProperty();

/**
 * This property reflects the locale information of the current device.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoLocale}
 */
function SystemInfoLocale() {};
SystemInfoLocale.prototype = new SystemInfoProperty();

/**
 * This property reflects the information of the current device.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoBuild}
 */
function SystemInfoBuild() {};
SystemInfoBuild.prototype = new SystemInfoProperty();

/**
 * This property reflects the state of the CPUs available to this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoCpu}
 */
function SystemInfoCpu() {};
SystemInfoCpu.prototype = new SystemInfoProperty();

/**
 * This property exposes the data storage devices connected to this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoStorage}
 */
function SystemInfoStorage() {};
SystemInfoStorage.prototype = new SystemInfoProperty();

/**
 * Defines what is instantiated by the object from the Tizen Platform.
          <p>
There will be a tizen.systeminfo object that allows accessing the
functionality of the SystemInfo API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemInfoObject}
 */
function SystemInfoObject() {};
SystemInfoObject.prototype = new Object();

/**
 * SystemInfoDeviceCapability object.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoDeviceCapability}
 */
function SystemInfoDeviceCapability() {};
SystemInfoDeviceCapability.prototype = new Object();

/**
 * This property reflects the general state of the system's battery
 *
 * @super Object
 * @constructor
 * @return {SystemInfoBattery}
 */
function SystemInfoBattery() {};
SystemInfoBattery.prototype = new SystemInfoProperty();

/**
 * This property reflects the information of the Wi-Fi network in this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoWifiNetwork}
 */
function SystemInfoWifiNetwork() {};
SystemInfoWifiNetwork.prototype = new SystemInfoProperty();

/**
 * This property reflects the peripheral information of the current device.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoPeripheral}
 */
function SystemInfoPeripheral() {};
SystemInfoPeripheral.prototype = new SystemInfoProperty();

/**
 * This property reflects the information of the net_proxy network in this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoNetProxyNetwork}
 */
function SystemInfoNetProxyNetwork() {};
SystemInfoNetProxyNetwork.prototype = new SystemInfoProperty();

/**
 * Systeminfo specific success callback.
          <p>
This callback interface specifies a success callback with SystemInfoProperty as input argument.
It is used in asynchronous operations, such as getPropertyValueArray() or addPropertyValueArrayChangeListener()
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemInfoPropertyArraySuccessCallback}
 */
function SystemInfoPropertyArraySuccessCallback() {};
SystemInfoPropertyArraySuccessCallback.prototype = new Object();

/**
 * Systeminfo specific success callback.
          <p>
This callback interface specifies a success callback with SystemInfoProperty as input argument.
It is used in asynchronous
operations, such as getPropertyValue() or addPropertyValueChangeListener()
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemInfoPropertySuccessCallback}
 */
function SystemInfoPropertySuccessCallback() {};
SystemInfoPropertySuccessCallback.prototype = new Object();

/**
 * This property reflects the information of the Display.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoDisplay}
 */
function SystemInfoDisplay() {};
SystemInfoDisplay.prototype = new SystemInfoProperty();

/**
 * The SystemInfoCameraFlash provides the way to control the attached the camera flash.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoCameraFlash}
 */
function SystemInfoCameraFlash() {};
SystemInfoCameraFlash.prototype = new SystemInfoProperty();

/**
 * This entry interface queries the information of a system.
          <p>
This API offers methods for retrieving system information
and for subscribing notifications of system information changes.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemInfo}
 */
function SystemInfo() {};
SystemInfo.prototype = new Object();

/**
 * This property reflects the information of the SIM card information.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoSIM}
 */
function SystemInfoSIM() {};
SystemInfoSIM.prototype = new SystemInfoProperty();

/**
 * This is a common abstract interface used by different types of system information objects.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoProperty}
 */
function SystemInfoProperty() {};
SystemInfoProperty.prototype = new Object();

/**
 * This property reflects the information of the Ethernet network in this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoEthernetNetwork}
 */
function SystemInfoEthernetNetwork() {};
SystemInfoEthernetNetwork.prototype = new SystemInfoProperty();

/**
 * This property represents information about the memory state on the device system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoMemory}
 */
function SystemInfoMemory() {};
SystemInfoMemory.prototype = new SystemInfoProperty();

/**
 * This property reflects the information of the Cellular network in this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoCellularNetwork}
 */
function SystemInfoCellularNetwork() {};
SystemInfoCellularNetwork.prototype = new SystemInfoProperty();

/**
 * This property reflects the information of the data network in this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoNetwork}
 */
function SystemInfoNetwork() {};
SystemInfoNetwork.prototype = new SystemInfoProperty();

/**
 * This property represents information about advertisement service - ADS.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoADS}
 */
function SystemInfoADS() {};
SystemInfoADS.prototype = new SystemInfoProperty();

/**
 * This property exposes a single storage device connected to this system.
 *
 * @super Object
 * @constructor
 * @return {SystemInfoStorageUnit}
 */
function SystemInfoStorageUnit() {};
SystemInfoStorageUnit.prototype = new SystemInfoProperty();

/**
 * Represents the status of the current device orientation.
 *
 * @type SystemInfoDeviceOrientationStatus
 */
SystemInfoDeviceOrientation.prototype.status = new SystemInfoDeviceOrientationStatus();

/**
 * whether the device is in autorotation.
 *
 * @type Boolean
 */
SystemInfoDeviceOrientation.prototype.isAutoRotation = new Boolean();

/**
 * Indicates the current language setting in the (LANGUAGE)_(REGION) syntax. The language setting is in the ISO 630-2 format and the region setting is in the ISO 3166-1 format. The language setting is case-sensitive.
 *
 * @type String
 */
SystemInfoLocale.prototype.language = new String();

/**
 * Indicates the current country setting in the (LANGUAGE)_(REGION) syntax. The language setting is in the ISO 630-2 format and the region setting is in the ISO 3166-1 format. The country setting is case-sensitive.
 *
 * @type String
 */
SystemInfoLocale.prototype.country = new String();

/**
 * Represents the model name of the current device.
 *
 * @type String
 */
SystemInfoBuild.prototype.model = new String();

/**
 * Represents the manufacturer of the device.
 *
 * @type String
 */
SystemInfoBuild.prototype.manufacturer = new String();

/**
 * Represents the build version information of the device.
 *
 * @type String
 */
SystemInfoBuild.prototype.buildVersion = new String();

/**
 * An attribute to indicate the current CPU load, as a number between and , representing the minimum and maximum values allowed on this system. Any threshold parameter used in a watch function to monitor this property applies to this attribute.
 *
 * @type Number
 */
SystemInfoCpu.prototype.load = new Number();

/**
 * The array of storage units connected to this device.
 *
 * @type array
 */
SystemInfoStorage.prototype.units = new array();

/**
 * This specification defines interfaces and methods that provide web applications with access to various properties of a system.
 * <p>
This API also provides interfaces and methods that can retrieve statuses of hardware devices, get the value of selected properties, and subscribe to asynchronous notifications of changes for selected values.
        </p>
 * <p>
Web applications can use this API to access the following system properties:
        </p>
 * <ul>
 * <li>BATTERY
 * <li>BUILD
 * <li>CAMERA_FLASH (: 3.0)
 * <li>CELLULAR_NETWORK
 * <li>CPU
 * <li>DEVICE_ORIENTATION
 * <li>DISPLAY
 * <li>ETHERNET_NETWORK (: 3.0)
 * <li>LOCALE (: 2.1)
 * <li>MEMORY (: 2.3)
 * <li>NETWORK
 * <li>PERIPHERAL (: 2.1)
 * <li>SIM
 * <li>STORAGE
 * <li>NET_PROXY_NETWORK (: 3.0)
 * <li>WIFI_NETWORK
 * </ul>
 * <p>
Not all above properties may be available on every Tizen device. For instance, a device may not support the telephony feature. In that case, <var>CELLULAR_NETWORK</var> and <var>SIM</var> are not available.<br/><br/>To check the available <var>SystemInfoPropertyId</var>, <em>tizen.systeminfo.getCapability()</em> can be used.
        </p>
 * <ul>
 * <li>BATTERY - tizen.systeminfo.getCapability()
 * <li>CAMERA_FLASH - tizen.systeminfo.getCapability()
 * <li>CELLULAR_NETWORK - tizen.systeminfo.getCapability()
 * <li>DISPLAY - tizen.systeminfo.getCapability()
 * <li>ETHERNET_NETWORK - tizen.systeminfo.getCapability()
 * <li>SIM - tizen.systeminfo.getCapability()
 * <li>NET_PROXY_NETWORK - tizen.systeminfo.getCapability()
 * <li>WIFI_NETWORK - tizen.systeminfo.getCapability()
 * </ul>
 * <p>
For more information on the SystemInfo features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/sys_guide/systeminfo.htm">System Information Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/camera.back.flash
 * @type SystemInfo
 */
SystemInfoObject.prototype.systeminfo = new SystemInfo();

/**
 * Indicates whether the device supports Bluetooth.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.bluetooth = new Boolean();

/**
 * Indicates whether the device supports NFC.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.nfc = new Boolean();

/**
 * Indicates whether the device supports NFC reserved push.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.nfcReservedPush = new Boolean();

/**
 * The number of point in Multi-point touch.
 *
 * @type Number
 */
SystemInfoDeviceCapability.prototype.multiTouchCount = new Number();

/**
 * Indicates whether the device supports the built-in Keyboard.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.inputKeyboard = new Boolean();

/**
 * Indicates whether the device supports the built-in keyboard layout.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.inputKeyboardLayout = new Boolean();

/**
 * Indicates whether the device supports Wi-Fi.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.wifi = new Boolean();

/**
 * Indicates whether the device supports Wi-Fi direct.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.wifiDirect = new Boolean();

/**
 * Indicates whether the device supports OpenGL-ES.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.opengles = new Boolean();

/**
 * The device 3DC texture format for OpenGL-ES. One example of possible output is as follows: "3dc/atc/etc/ptc/pvrtc/utc"
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.openglestextureFormat = new String();

/**
 * Indicates whether the device supports OpenGL-ES version 1.1.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.openglesVersion1_1 = new Boolean();

/**
 * Indicates whether the device supports OpenGL-ES version 2.0.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.openglesVersion2_0 = new Boolean();

/**
 * Indicates whether the device supports FM radio.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.fmRadio = new Boolean();

/**
 * The version of the platform in the format. For example, represents a platform version where the major version is and the minor and build versions are .
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.platformVersion = new String();

/**
 * The version of the Web API in the format. For example, represents a web api version where the major version is and the minor version is .
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.webApiVersion = new String();

/**
 * The version of the native API in the format.
 * <p>
For example, <var>1.0</var> represents a native api version where the major version is <var>1 </var>and the minor version is <var>0</var>.
If a device doesn't provide Tizen native API, nativeApiVersion will be a empty string.
            </p>
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.nativeApiVersion = new String();

/**
 * The name of the platform.
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.platformName = new String();

/**
 * Indicates whether the device supports camera.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.camera = new Boolean();

/**
 * Indicates whether the device supports front camera.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.cameraFront = new Boolean();

/**
 * Indicates whether the device supports flash on the front camera.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.cameraFrontFlash = new Boolean();

/**
 * Indicates whether the device supports back-side camera.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.cameraBack = new Boolean();

/**
 * Indicates whether the device supports flash on the back-side camera.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.cameraBackFlash = new Boolean();

/**
 * Indicates whether the device supports GPS or not.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.location = new Boolean();

/**
 * Indicates whether the device supports GPS based location feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.locationGps = new Boolean();

/**
 * Indicates whether the device supports WPS based location feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.locationWps = new Boolean();

/**
 * Indicates whether the device supports microphone.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.microphone = new Boolean();

/**
 * Indicates whether the device supports USB host.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.usbHost = new Boolean();

/**
 * Indicates whether the device supports USB accessory.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.usbAccessory = new Boolean();

/**
 * Indicates whether the device supports RCA output.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.screenOutputRca = new Boolean();

/**
 * Indicates whether the device supports HDMI output.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.screenOutputHdmi = new Boolean();

/**
 * The device CPU architecture. The possible values for this attribute are: armv6, armv7, x86.
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.platformCoreCpuArch = new String();

/**
 * The device FPU architecture. The possible values for this attribute are: vfpv3 / sse2 / sse3 / ssse3.
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.platformCoreFpuArch = new String();

/**
 * Indicates whether the device supports VOIP.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.sipVoip = new Boolean();

/**
 * Indicates the Tizen ID, not device's unique ID since Tizen 2.3.
 *
 * @type String
 */
SystemInfoDeviceCapability.prototype.duid = new String();

/**
 * Indicates whether the device supports speech recognition.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.speechRecognition = new Boolean();

/**
 * Indicates whether the device supports speech synthesis.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.speechSynthesis = new Boolean();

/**
 * Indicates whether the device supports Accelerometer sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.accelerometer = new Boolean();

/**
 * Indicates whether the device supports Accelerometer sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.accelerometerWakeup = new Boolean();

/**
 * Indicates whether the device supports Barometer sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.barometer = new Boolean();

/**
 * Indicates whether the device supports Barometer sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.barometerWakeup = new Boolean();

/**
 * Indicates whether the device supports Gyroscope sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.gyroscope = new Boolean();

/**
 * Indicates whether the device supports Gyroscope sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.gyroscopeWakeup = new Boolean();

/**
 * Indicates whether the device supports Magnetometer sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.magnetometer = new Boolean();

/**
 * Indicates whether the device supports Magnetometer sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.magnetometerWakeup = new Boolean();

/**
 * Indicates whether the device supports Photometer sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.photometer = new Boolean();

/**
 * Indicates whether the device supports Photometer sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.photometerWakeup = new Boolean();

/**
 * Indicates whether the device supports Proximity sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.proximity = new Boolean();

/**
 * Indicates whether the device supports Proximity sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.proximityWakeup = new Boolean();

/**
 * Indicates whether the device supports Tiltmeter sensor.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.tiltmeter = new Boolean();

/**
 * Indicates whether the device supports Tiltmeter sensor wake-up feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.tiltmeterWakeup = new Boolean();

/**
 * Indicates whether the device supports data encryption.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.dataEncryption = new Boolean();

/**
 * Indicates whether the device supports hardware acceleration for 2D/3D graphics.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.graphicsAcceleration = new Boolean();

/**
 * Indicates whether the device supports push service.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.push = new Boolean();

/**
 * Indicates whether the device supports the telephony feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.telephony = new Boolean();

/**
 * Indicates whether the device supports the mms feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.telephonyMms = new Boolean();

/**
 * Indicates whether the device supports the sms feature.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.telephonySms = new Boolean();

/**
 * Indicates whether the device supports the screen normal size.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.screenSizeNormal = new Boolean();

/**
 * Indicates whether the device supports the 480 * 800 screen size.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.screenSize480_800 = new Boolean();

/**
 * Indicates whether the device supports the 720 * 1280 screen size.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.screenSize720_1280 = new Boolean();

/**
 * Indicates whether the device supports auto rotation.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.autoRotation = new Boolean();

/**
 * Indicates whether the device supports shell app widget(dynamic box).
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.shellAppWidget = new Boolean();

/**
 * Indicates whether the device supports vision image recognition.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.visionImageRecognition = new Boolean();

/**
 * Indicates whether the device supports vision qrcode generation.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.visionQrcodeGeneration = new Boolean();

/**
 * Indicates whether the device supports vision qrcode recognition.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.visionQrcodeRecognition = new Boolean();

/**
 * Indicates whether the device supports vision face recognition.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.visionFaceRecognition = new Boolean();

/**
 * Indicates whether the device supports secure element.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.secureElement = new Boolean();

/**
 * Indicates whether the device supports native osp API.
 *
 * @type Boolean
 */
SystemInfoDeviceCapability.prototype.nativeOspCompatible = new Boolean();

/**
 * Represents the profile of the current device.
 *
 * @type SystemInfoProfile
 */
SystemInfoDeviceCapability.prototype.profile = new SystemInfoProfile();

/**
 * An attribute to specify the remaining level of an internal battery, scaled from to :
 * <ul>
 * <li>indicates that the battery level is the lowest and the system is about to enter shutdown mode.
 * <li>indicates that the system's charge is maximum.
 * </ul>
 * <p>
Any threshold parameter used in a watch operation to monitor this property applies to this attribute.
            </p>
 *
 * @type Number
 */
SystemInfoBattery.prototype.level = new Number();

/**
 * Indicates whether the battery source is currently charging.
 *
 * @type Boolean
 */
SystemInfoBattery.prototype.isCharging = new Boolean();

/**
 * Represents the status (ON or OFF) of the Wi-Fi interface.
 *
 * @type String
 */
SystemInfoWifiNetwork.prototype.status = new String();

/**
 * Represents the SSID of the Wi-Fi network.
 *
 * @type String
 */
SystemInfoWifiNetwork.prototype.ssid = new String();

/**
 * Represents the IPv4 address of the Wi-Fi network.
 *
 * @type String
 */
SystemInfoWifiNetwork.prototype.ipAddress = new String();

/**
 * Represents the IPv6 address of the Wi-Fi network.
 *
 * @type String
 */
SystemInfoWifiNetwork.prototype.ipv6Address = new String();

/**
 * Represents the MAC address of the Wi-Fi interface.
 * <p>
It is written in MM:MM:MM:SS:SS:SS format.
            </p>
 *
 * @type String
 */
SystemInfoWifiNetwork.prototype.macAddress = new String();

/**
 * This connection's signal strength, as a normalized value between 0 (no signal detected) and 1 (the level is at its maximum value).
 *
 * @type Number
 */
SystemInfoWifiNetwork.prototype.signalStrength = new Number();

/**
 * Represents the video out status.
 *
 * @type Boolean
 */
SystemInfoPeripheral.prototype.isVideoOutputOn = new Boolean();

/**
 * Represents the status (ON or OFF) of the net_proxy network.
 *
 * @type String
 */
SystemInfoNetProxyNetwork.prototype.status = new String();

/**
 * Method invoked when the asynchronous call completes successfully.
 *
 * @param {array} properties
 * @type void
 * @memberOf SystemInfoPropertyArraySuccessCallback
 * @returns {void}
 */
SystemInfoPropertyArraySuccessCallback.prototype.onsuccess = function(properties){ return; };

/**
 * Method invoked when the asynchronous call completes successfully.
 *
 * @param {SystemInfoProperty} property
 * @type void
 * @memberOf SystemInfoPropertySuccessCallback
 * @returns {void}
 */
SystemInfoPropertySuccessCallback.prototype.onsuccess = function(property){ return; };

/**
 * The total number of addressable pixels in the horizontal direction of a rectangular entity (such as Camera, Display, Image, Video, ...) when held in its default orientation.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.resolutionWidth = new Number();

/**
 * The total number of addressable pixels in the vertical direction of a rectangular element (such as Camera, Display, Image, Video, ...) when held in its default orientation.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.resolutionHeight = new Number();

/**
 * Resolution of this device, along its width, in dots per inch.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.dotsPerInchWidth = new Number();

/**
 * Resolution of this device, along its height, in dots per inch.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.dotsPerInchHeight = new Number();

/**
 * The display's physical width in millimeters.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.physicalWidth = new Number();

/**
 * The display's physical height in millimeters.
 *
 * @type Number
 */
SystemInfoDisplay.prototype.physicalHeight = new Number();

/**
 * The current brightness of a display ranging between to .
 *
 * @type Number
 */
SystemInfoDisplay.prototype.brightness = new Number();

/**
 * Brightness level of the camera flash (0~1)
 *
 * @type Number
 */
SystemInfoCameraFlash.prototype.brightness = new Number();

/**
 * Specifies camera to which this flash belongs
 * <ul>
 * <li>BACK - back camera flash
 * <li>FRONT - front camera flash
 * <li>EXTERNAL - external camera flash
 * <li>OTHER - a flash attached to any other camera
 * </ul>
 *
 * @type String
 */
SystemInfoCameraFlash.prototype.camera = new String();

/**
 * Number of brightness levels supported by the flash (other than 0 brightness)
 *
 * @type Number
 */
SystemInfoCameraFlash.prototype.levels = new Number();

/**
 * Sets the brightness value of the flash that is located next to the camera.
            <p>
If the specified brightness value is not supported by the device, the brightness is rounded down to the nearest supported brightness value.
            </p>
           
 *
 * @param {Number} brightness
 * @type void
 * @memberOf SystemInfoCameraFlash
 * @returns {void}
 */
SystemInfoCameraFlash.prototype.setBrightness = function(brightness){ return; };

/**
 * Gets the total amount of system memory (in bytes).
 *
 * @type Number
 * @memberOf SystemInfo
 * @returns {Number}
 */
SystemInfo.prototype.getTotalMemory = function(){ var ret = new Number(); return ret; };

/**
 * Gets the amount of memory that is not in use (in bytes).
 *
 * @type Number
 * @memberOf SystemInfo
 * @returns {Number}
 */
SystemInfo.prototype.getAvailableMemory = function(){ var ret = new Number(); return ret; };

/**
 * Gets the capabilities of the device.
            <p>
The function must synchronously acquire the capabilities of the device.
            </p>
           
 *
 * @type SystemInfoDeviceCapability
 * @memberOf SystemInfo
 * @returns {SystemInfoDeviceCapability}
 */
SystemInfo.prototype.getCapabilities = function(){ var ret = new SystemInfoDeviceCapability(); return ret; };

/**
 * Gets a device capability related to a given key.
            <p>
See the available <a href="./systeminfo_capability_keys.html">device capability keys</a>.
The additional keys for the custom device capability are specified by OEM's and vendors.
            </p>
           
 *
 * @param {String} key
 * @type any
 * @memberOf SystemInfo
 * @returns {any}
 */
SystemInfo.prototype.getCapability = function(key){ var ret = new any(); return ret; };

/**
 * Gets the number of system property information provided for a particular system property.
            <p>
That is the length of array retrieved by the getPropertyValueArray() method for the given property.
            </p>
           
 *
 * @param {SystemInfoPropertyId} property
 * @type Number
 * @memberOf SystemInfo
 * @returns {Number}
 */
SystemInfo.prototype.getCount = function(property){ var ret = new Number(); return ret; };

/**
 * Gets the current value of a specified system property.
            <p>
The function must asynchronously acquire the current value of the requested property. If it is successful,
the successCallback must be invoked with an object containing the information provided by the property.
            </p>
            <p>
The <em>ErrorCallback</em> method can be launched with these error types:
            </p>
            <ul>
              <li>
NotSupportedError - If the given <var>property</var> is not supported. (since Tizen 2.3)              </li>
            </ul>
           
 *
 * @param {SystemInfoPropertyId} property
 * @param {SystemInfoPropertySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf SystemInfo
 * @returns {void}
 */
SystemInfo.prototype.getPropertyValue = function(property, successCallback, errorCallback){ return; };

/**
 * Gets the current values of a specified system property.
            <p>
It is recommended that you check if a device provides one or more than one value for a particular system property via getCount().
            </p>
            <p>
If one particular system property is provided on a device, it returns an array containing one SystemInfoProperty object through <em>SystemInfoPropertyArraySuccessCallback</em> method.<br/>If more than one particular system property is provided, multiple SystemInfoProperty objects are returned.
            </p>
            <p>
The <em>ErrorCallback</em> method can be launched with these error types:
            </p>
            <ul>
              <li>
NotSupportedError - If the given <var>property</var> is not supported.              </li>
            </ul>
           
 *
 * @param {SystemInfoPropertyId} property
 * @param {SystemInfoPropertyArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf SystemInfo
 * @returns {void}
 */
SystemInfo.prototype.getPropertyValueArray = function(property, successCallback, errorCallback){ return; };

/**
 * Adds a listener to allow tracking of changes in one or more system properties.
            <p>
When called, it immediately returns and then asynchronously starts a watch process defined by the following steps:
            </p>
            <p>
1. Register the successCallback to receive system events that the status of the requested properties may have changed.
            </p>
            <p>
2. When a system event is successfully received invoke the associated successCallback with an object containing the property
values.
            </p>
            <p>
3. Repeat step 2 until removePropertyValueChangeListener function is called.
            </p>
            <p>
There are device properties which are never changed (e.g. "BUILD") and properties which are not changed on some devices
(e.g. "DEVICE_ORIENTATION" in Tizen TV device). The <em>addPropertyValueChangeListener()</em> method accepts
any identifier of these properties, but the listener added for them will not be invoked.
            </p>
           
 *
 * @param {SystemInfoPropertyId} property
 * @param {SystemInfoPropertySuccessCallback} successCallback
 * @param {SystemInfoOptions} options
 * @param {ErrorCallback} errorCallback
 * @type Number
 * @memberOf SystemInfo
 * @returns {Number}
 */
SystemInfo.prototype.addPropertyValueChangeListener = function(property, successCallback, options, errorCallback){ var ret = new Number(); return ret; };

/**
 * Adds a listener to allow tracking of changes in one or more values of a system property.
            <p>
The <em>ErrorCallback</em> method can be launched with these error types:
            </p>
            <ul>
              <li>
NotSupportedError - If the given <var>property</var> is not supported. (since Tizen 2.3)<br/>For example, monitoring <var>CELLULAR_NETWORK</var> changes is not supported on a device which does not support the telephony feature.
              </li>
            </ul>
            <p>
There are device properties which never change (for example "BUILD") and properties which do not change on the current platform
(for example "DEVICE_ORIENTATION" for some platforms). The <em>addPropertyValueChangeListener()</em> method accepts
any identifier of these properties, but the listener added for them will not be invoked.
            </p>
           
 *
 * @param {SystemInfoPropertyId} property
 * @param {SystemInfoPropertyArraySuccessCallback} successCallback
 * @param {SystemInfoOptions} options
 * @param {ErrorCallback} errorCallback
 * @type Number
 * @memberOf SystemInfo
 * @returns {Number}
 */
SystemInfo.prototype.addPropertyValueArrayChangeListener = function(property, successCallback, options, errorCallback){ var ret = new Number(); return ret; };

/**
 * Unsubscribes notifications for property changes.
            <p>
If a valid listenerId argument is passed that corresponds to a subscription
already place, then the watch process MUST immediately terminate and no further
callback is invoked. If the listenerId argument does not correspond to a valid subscription,
the method should return without any further action.
            </p>
           
 *
 * @param {Number} listenerId
 * @type void
 * @memberOf SystemInfo
 * @returns {void}
 */
SystemInfo.prototype.removePropertyValueChangeListener = function(listenerId){ return; };

/**
 * Represents the SIM card state.
 *
 * @type SystemInfoSimState
 */
SystemInfoSIM.prototype.state = new SystemInfoSimState();

/**
 * Represents the Operator Name String (ONS) of Common PCN Handset Specification (CPHS) in SIM card.
 *
 * @type String
 */
SystemInfoSIM.prototype.operatorName = new String();

/**
 * Represents the SIM card subscriber number.
 *
 * @type String
 */
SystemInfoSIM.prototype.msisdn = new String();

/**
 * Represents the Integrated Circuit Card ID.
 *
 * @type String
 */
SystemInfoSIM.prototype.iccid = new String();

/**
 * Represents the Mobile Country Code (MCC) of SIM provider.
 *
 * @type Number
 */
SystemInfoSIM.prototype.mcc = new Number();

/**
 * Represents the Mobile Network Code (MNC) of SIM provider.
 *
 * @type Number
 */
SystemInfoSIM.prototype.mnc = new Number();

/**
 * Represents the Mobile Subscription Identification Number (MSIN) of SIM provider.
 *
 * @type String
 */
SystemInfoSIM.prototype.msin = new String();

/**
 * Represents the Service Provider Name (SPN) of SIM card.
 *
 * @type String
 */
SystemInfoSIM.prototype.spn = new String();

/**
 * Represents the cable status (ATTACHED or DETACHED) of the ethernet interface.
 *
 * @type String
 */
SystemInfoEthernetNetwork.prototype.cable = new String();

/**
 * Represents the status (DEACTIVATED, DISCONNECTED or CONNECTED) of the ethernet interface.
 *
 * @type String
 */
SystemInfoEthernetNetwork.prototype.status = new String();

/**
 * Represents the IPv4 address of the ethernet network.
 *
 * @type String
 */
SystemInfoEthernetNetwork.prototype.ipAddress = new String();

/**
 * Represents the IPv6 address of the ethernet network.
 *
 * @type String
 */
SystemInfoEthernetNetwork.prototype.ipv6Address = new String();

/**
 * Represents the MAC address of the ethernet interface.
 * <p>
It is written in MM:MM:MM:SS:SS:SS format.
            </p>
 *
 * @type String
 */
SystemInfoEthernetNetwork.prototype.macAddress = new String();

/**
 * Represents the low memory state.
 *
 * @type SystemInfoLowMemoryStatus
 */
SystemInfoMemory.prototype.status = new SystemInfoLowMemoryStatus();

/**
 * Represents the status (ON or OFF) of the cellular network.
 *
 * @type String
 */
SystemInfoCellularNetwork.prototype.status = new String();

/**
 * Represents an Access Point Name of the cellular network.
 *
 * @type String
 */
SystemInfoCellularNetwork.prototype.apn = new String();

/**
 * Represents the IPv4 address of the cellular network.
 *
 * @type String
 */
SystemInfoCellularNetwork.prototype.ipAddress = new String();

/**
 * Represents the IPv6 address of the cellular network.
 *
 * @type String
 */
SystemInfoCellularNetwork.prototype.ipv6Address = new String();

/**
 * Represents Mobile Country Code (MCC) of the cellular network.
 *
 * @type Number
 */
SystemInfoCellularNetwork.prototype.mcc = new Number();

/**
 * Represents Mobile Network Code (MNC) of the cellular network. MNC is used in combination with MCC (also known as a "MCC / MNC tuple") to uniquely identify a mobile phone operator/carrier using the GSM, CDMA, iDEN, TETRA and UMTS public land mobile networks and some satellite mobile networks.
 *
 * @type Number
 */
SystemInfoCellularNetwork.prototype.mnc = new Number();

/**
 * Represents Cell Id.
 *
 * @type Number
 */
SystemInfoCellularNetwork.prototype.cellId = new Number();

/**
 * Represents Location Area Code.
 *
 * @type Number
 */
SystemInfoCellularNetwork.prototype.lac = new Number();

/**
 * Whether the connection is set up while the device is roaming.
 *
 * @type Boolean
 */
SystemInfoCellularNetwork.prototype.isRoaming = new Boolean();

/**
 * Indicates whether the device is in flight mode.
 *
 * @type Boolean
 */
SystemInfoCellularNetwork.prototype.isFlightMode = new Boolean();

/**
 * Represents the International Mobile Equipment Identity (IMEI).
 *
 * @type String
 */
SystemInfoCellularNetwork.prototype.imei = new String();

/**
 * Represents the network type of the current data network.
 *
 * @type SystemInfoNetworkType
 */
SystemInfoNetwork.prototype.networkType = new SystemInfoNetworkType();

/**
 * Represents the unique id of advertisement service. It is used to distinguish each device.
 *
 * @type String
 */
SystemInfoADS.prototype.id = new String();

/**
 * The type of a storage device. The value is one of the constants defined for this type.
 * <p>
The supported storage unit types are:
            </p>
 * <ul>
 * <li>UNKNOWN
 * <li>INTERNAL
 * <li>USB_DEVICE
 * <li>USB_HOST
 * <li>MMC
 * </ul>
 *
 * @type String
 */
SystemInfoStorageUnit.prototype.type = new String();

/**
 * The amount of data that this device can hold, in bytes.
 *
 * @type Number
 */
SystemInfoStorageUnit.prototype.capacity = new Number();

/**
 * The amount of available data that this device can hold, in bytes.
 *
 * @type Number
 */
SystemInfoStorageUnit.prototype.availableCapacity = new Number();

/**
 * An attribute to indicate whether a device can be removed or not.
 * <p>
The following values are supported:
            </p>
 * <ul>
 * <li>- If this storage unit can be removed from the system (such as an sdcard unplugged)
 * <li>- If this storage unit cannot be removed from the system
 * </ul>
 *
 * @type Boolean
 */
SystemInfoStorageUnit.prototype.isRemovable = new Boolean();

/**
 * true if this unit can be removed from the system (such as an sdcard unplugged), false otherwise.
 *
 * @type Boolean
 */
SystemInfoStorageUnit.prototype.isRemoveable = new Boolean();

/**
 * This specification defines interfaces and methods that provide web applications with access to various properties of a system.
 * <p>
This API also provides interfaces and methods that can retrieve statuses of hardware devices, get the value of selected properties, and subscribe to asynchronous notifications of changes for selected values.
        </p>
 * <p>
Web applications can use this API to access the following system properties:
        </p>
 * <ul>
 * <li>BATTERY
 * <li>BUILD
 * <li>CAMERA_FLASH (: 3.0)
 * <li>CELLULAR_NETWORK
 * <li>CPU
 * <li>DEVICE_ORIENTATION
 * <li>DISPLAY
 * <li>ETHERNET_NETWORK (: 3.0)
 * <li>LOCALE (: 2.1)
 * <li>MEMORY (: 2.3)
 * <li>NETWORK
 * <li>PERIPHERAL (: 2.1)
 * <li>SIM
 * <li>STORAGE
 * <li>NET_PROXY_NETWORK (: 3.0)
 * <li>WIFI_NETWORK
 * </ul>
 * <p>
Not all above properties may be available on every Tizen device. For instance, a device may not support the telephony feature. In that case, <var>CELLULAR_NETWORK</var> and <var>SIM</var> are not available.<br/><br/>To check the available <var>SystemInfoPropertyId</var>, <em>tizen.systeminfo.getCapability()</em> can be used.
        </p>
 * <ul>
 * <li>BATTERY - tizen.systeminfo.getCapability()
 * <li>CAMERA_FLASH - tizen.systeminfo.getCapability()
 * <li>CELLULAR_NETWORK - tizen.systeminfo.getCapability()
 * <li>DISPLAY - tizen.systeminfo.getCapability()
 * <li>ETHERNET_NETWORK - tizen.systeminfo.getCapability()
 * <li>SIM - tizen.systeminfo.getCapability()
 * <li>NET_PROXY_NETWORK - tizen.systeminfo.getCapability()
 * <li>WIFI_NETWORK - tizen.systeminfo.getCapability()
 * </ul>
 * <p>
For more information on the SystemInfo features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/sys_guide/systeminfo.htm">System Information Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/camera.back.flash
 * @type SystemInfo
 */
Tizen.prototype.systeminfo = new SystemInfo();

/**
 * The SystemSettingManager interface is the top-level interface for the SystemSetting API that provides access to the module functionalities.
 *
 * @super Object
 * @constructor
 * @return {SystemSettingManager}
 */
function SystemSettingManager() {};
SystemSettingManager.prototype = new Object();

/**
 * The SystemSettingSuccessCallback interface defines the success callback for getProperty().
 *
 * @super Object
 * @constructor
 * @return {SystemSettingSuccessCallback}
 */
function SystemSettingSuccessCallback() {};
SystemSettingSuccessCallback.prototype = new Object();

/**
 * The SystemSettingObject interface defines what is instantiated by the object from the Tizen Platform.
          <p>
There will be a <em>tizen.systemsetting </em>object that allows accessing the functionality of the SystemSetting API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SystemSettingObject}
 */
function SystemSettingObject() {};
SystemSettingObject.prototype = new Object();

/**
 * Sets the property of a device.
            <p>
This method allows the user to set the image or sound file specified as an input parameter as the wallpaper or ringtone of a device.
            </p>
            <p>
The <em>ErrorCallback</em> method is launched with these error types:
            </p>
            <ul>
              <li>
InvalidValuesError - If any of the input parameters contain an invalid value              </li>
              <li>
NotSupportedError - If the given <var>type</var> is not supported on the device               </li>
              <li>
UnknownError - If any other error occurs              </li>
            </ul>
           
 *
 * @param {SystemSettingType} type
 * @param {String} value
 * @param {SuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf SystemSettingManager
 * @returns {void}
 */
SystemSettingManager.prototype.setProperty = function(type, value, successCallback, errorCallback){ return; };

/**
 * Gets the value of the property of a device.
            <p>
This method allows the user to get the value of the specified system property as wallpaper or ringtone of a device.
            </p>
           
 *
 * @param {SystemSettingType} type
 * @param {SystemSettingSuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf SystemSettingManager
 * @returns {void}
 */
SystemSettingManager.prototype.getProperty = function(type, successCallback, errorCallback){ return; };

/**
 * Called when the value of the system setting property is successfully retrieved.
 *
 * @param {String} value
 * @type void
 * @memberOf SystemSettingSuccessCallback
 * @returns {void}
 */
SystemSettingSuccessCallback.prototype.onsuccess = function(value){ return; };

/**
 * The SystemSetting API provides interfaces and methods providing web applications with access to various values of the system.
 * <p>
This API provides an interface and methods through features such as:
        </p>
 * <ul>
 * <li>HOME_SCREEN
 * <li>LOCK_SCREEN
 * <li>INCOMING_CALL
 * <li>NOTIFICATION_EMAIL
 * </ul>
 * <p>
SystemSetting API may not be provided in some devices.
The API capability can be checked by tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/systemsetting"</em>).
        </p>
 * <p>
In addition, not all the above properties may be available even though a device supports SystemSetting API. For instance, a watch device may provide the home screen image but may not support the lock screen wallpaper. <br/><br/>To check if <var>SystemSettingType</var>(e.g. HOME_SCREEN, LOCK_SCREEN and so on) is supported or not, use SystemInformation API.
        </p>
 * <ul>
 * <li>HOME_SCREEN - tizen.systeminfo.getCapability()
 * <li>LOCK_SCREEN - tizen.systeminfo.getCapability()
 * <li>INCOMING_CALL - tizen.systeminfo.getCapability()
 * <li>NOTIFICATION_EMAIL - tizen.systeminfo.getCapability()
 * </ul>
 * <p>
For more information on the SystemSetting features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/sys_guide/systemsetting.htm">System Setting Guide</a>.
        </p>
 *
 * @type SystemSettingManager
 */
SystemSettingObject.prototype.systemsetting = new SystemSettingManager();

/**
 * The SystemSetting API provides interfaces and methods providing web applications with access to various values of the system.
 * <p>
This API provides an interface and methods through features such as:
        </p>
 * <ul>
 * <li>HOME_SCREEN
 * <li>LOCK_SCREEN
 * <li>INCOMING_CALL
 * <li>NOTIFICATION_EMAIL
 * </ul>
 * <p>
SystemSetting API may not be provided in some devices.
The API capability can be checked by tizen.systeminfo.getCapability(<em>"http://tizen.org/feature/systemsetting"</em>).
        </p>
 * <p>
In addition, not all the above properties may be available even though a device supports SystemSetting API. For instance, a watch device may provide the home screen image but may not support the lock screen wallpaper. <br/><br/>To check if <var>SystemSettingType</var>(e.g. HOME_SCREEN, LOCK_SCREEN and so on) is supported or not, use SystemInformation API.
        </p>
 * <ul>
 * <li>HOME_SCREEN - tizen.systeminfo.getCapability()
 * <li>LOCK_SCREEN - tizen.systeminfo.getCapability()
 * <li>INCOMING_CALL - tizen.systeminfo.getCapability()
 * <li>NOTIFICATION_EMAIL - tizen.systeminfo.getCapability()
 * </ul>
 * <p>
For more information on the SystemSetting features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/sys_guide/systemsetting.htm">System Setting Guide</a>.
        </p>
 *
 * @type SystemSettingManager
 */
Tizen.prototype.systemsetting = new SystemSettingManager();

/**
 * The TimeManagerObject interface defines what is instantiated in the tizen object by the Tizen Platform.
          <p>
There will be a <em>tizen.time</em> object that allows accessing the
functionality of the Time API.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {TimeManagerObject}
 */
function TimeManagerObject() {};
TimeManagerObject.prototype = new Object();

/**
 * The TimeUtil interface that provides access to the time API.
          <p>
This interface offers methods to manage date/time as well as timezones such as:
          </p>
          <ul>
            <li>
Get the current date/time using getCurrentDateTime().            </li>
            <li>
Get timezones using getLocalTimezone() and getAvailableTimezones().            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {TimeUtil}
 */
function TimeUtil() {};
TimeUtil.prototype = new Object();

/**
 * The TZDate interface represents information regarding a given date/time in a predefined timezone. If its date/time exceeds the platform limit, TZDate will be invalid.
 *
 * @super Object
 * @constructor
 * @return {TZDate}
 */
function TZDate() {};
TZDate.prototype = new Object();

/**
 * The TimeDuration interface that contains the length and its associated time unit.
 *
 * @super Object
 * @constructor
 * @return {TimeDuration}
 */
function TimeDuration() {};
TimeDuration.prototype = new Object();

/**
 * The Time API provides information regarding date/time and time zones.
 * <p>
The JavaScript Date object does not have full timezone support.
Date objects allow only simple representations to denote a particular location's
offset from Universal Coordinated Time (UTC). This is typically provided as a +/-
offset from UTC-0 (also known as Greenwich Mean Time, or GMT) for example, +05:30 denotes
that a location is 5 hours and 30 minutes ahead of UTC +00:00.
The issue with this method is not getting the correct
local time for a given date. The existing methods are sufficient for this purpose.
The issue is correctly converting to and from local time and UTC for all points in
time - in any of the past, present, and future - based on an initial time provided.
This is important for defining relative dates, where a time in a given location may
observe different UTC offsets, according to any Daylight Savings Rules (DST) in effect
or any other changes that may occur to a location's time zone over time.
Without the communication of the explicit time zone rules governing a given date and
time, the ability to effectively calculate the offset of the local time to UTC or to
any other time zone at any point in the past or future is lost.
        </p>
 * <p>
This API can be used to get TZDate objects with full time zone support, convert them
between timezones, retrieve available timezones.
        </p>
 * <p>
For more information on the Time features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/sys_guide/time.htm">Time Guide</a>.
        </p>
 *
 * @type TimeUtil
 */
TimeManagerObject.prototype.time = new TimeUtil();

/**
 * Gets the current date/time.
 *
 * @type TZDate
 * @memberOf TimeUtil
 * @returns {TZDate}
 */
TimeUtil.prototype.getCurrentDateTime = function(){ var ret = new TZDate(); return ret; };

/**
 * Gets the identifier of the local system timezone.
 *
 * @type String
 * @memberOf TimeUtil
 * @returns {String}
 */
TimeUtil.prototype.getLocalTimezone = function(){ var ret = new String(); return ret; };

/**
 * Gets synchronously the identifiers of the timezones supported by the device.
            <p>
Zero or more slashes separate different components of a timezone identifier,
with the most general descriptor first and the most specific one last. For example,
'Europe/Berlin', 'America/Argentina/Buenos_Aires'.
            </p>
           
 *
 * @type array
 * @memberOf TimeUtil
 * @returns {array}
 */
TimeUtil.prototype.getAvailableTimezones = function(){ var ret = new array(); return ret; };

/**
 * 
            <p>
Gets the date format according to the system's locale settings.
            </p>
            <p>
These expressions may be used in the returned string:
            </p>
            <ul>
              <li>
"d" = day number (1 to 31)              </li>
              <li>
"D" = day name              </li>
              <li>
"m" = month number (1 to 12)              </li>
              <li>
"M" = month name              </li>
              <li>
"y" = year              </li>
            </ul>
            <p>
Examples of string formats include: "d/m/y", "y-d-m", "D, M d y".
            </p>
           
 *
 * @param {Boolean} shortformat
 * @type String
 * @memberOf TimeUtil
 * @returns {String}
 */
TimeUtil.prototype.getDateFormat = function(shortformat){ var ret = new String(); return ret; };

/**
 * 
            <p>
Gets the time format according to the system's locale settings.
            </p>
            <p>
These expressions may be used in the returned string:
            </p>
            <ul>
              <li>
"h" = hours (0 to 23 or 1 to 12 if AM/PM display)              </li>
              <li>
"m" = minutes (0 to 59)              </li>
              <li>
"s" = seconds (0 to 59)              </li>
              <li>
"ap" = AM/PM display              </li>
            </ul>
            <p>
Examples of string formats include: "h:m:s ap", "h:m:s".
            </p>
           
 *
 * @type String
 * @memberOf TimeUtil
 * @returns {String}
 */
TimeUtil.prototype.getTimeFormat = function(){ var ret = new String(); return ret; };

/**
 * Checks whether the given year is a leap year.
 *
 * @param {Number} year
 * @type Boolean
 * @memberOf TimeUtil
 * @returns {Boolean}
 */
TimeUtil.prototype.isLeapYear = function(year){ var ret = new Boolean(); return ret; };

/**
 * Sets a listener to receive notification of changes to the time/date on a device.
            <p>
Listener set with <em>setTimezoneChangeListener()</em> method is called when device time was set by the user. <br/>            </p>
           
 *
 * @param {SuccessCallback} changeCallback
 * @type void
 * @memberOf TimeUtil
 * @returns {void}
 */
TimeUtil.prototype.setDateTimeChangeListener = function(changeCallback){ return; };

/**
 * Unsets the listener to stop receiving notification of changes to the time/date on a device.
 *
 * @type void
 * @memberOf TimeUtil
 * @returns {void}
 */
TimeUtil.prototype.unsetDateTimeChangeListener = function(){ return; };

/**
 * Sets a listener to receive notification of changes to the time zone on a device.
            <p>
Listener set with <em>setTimezoneChangeListener()</em> method is called when device time zone has changed.
            </p>
           
 *
 * @param {SuccessCallback} changeCallback
 * @type void
 * @memberOf TimeUtil
 * @returns {void}
 */
TimeUtil.prototype.setTimezoneChangeListener = function(changeCallback){ return; };

/**
 * Unsets the listener to stop receiving notification of changes to the time zone on a device.
 *
 * @type void
 * @memberOf TimeUtil
 * @returns {void}
 */
TimeUtil.prototype.unsetTimezoneChangeListener = function(){ return; };

/**
 * Gets the day of the month (from 1-31).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getDate = function(){ var ret = new Number(); return ret; };

/**
 * Sets the day of the month (from 1-31).
            <p>
If it tries to set the day bigger than the last day of the month or smaller than 1, it will be calculated automatically.
For example, if TZDate's month is May and parameter is 32, it will be June 1.
            </p>
           
 *
 * @param {Number} date
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setDate = function(date){ return; };

/**
 * Gets the day of the week (from 0-6). 0 denotes Sunday, 1 denotes Monday and so on.
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getDay = function(){ var ret = new Number(); return ret; };

/**
 * Gets the year.
            <p>
Positive values indicate AD(Anno Domini) years. 0 and negative values indicate BC(Before Christ) years.
For example, 1 = AD 1, 0 = BC 1, -1 = BC 2.
            </p>
           
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getFullYear = function(){ var ret = new Number(); return ret; };

/**
 * Sets the year.
 *
 * @param {Number} year
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setFullYear = function(year){ return; };

/**
 * Gets the hour (0-23).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getHours = function(){ var ret = new Number(); return ret; };

/**
 * Sets the hour (0-23).
            <p>
If it tries to set the hour bigger than 23 or smaller than 0, it will be calculated automatically.
For example, if <em>hours</em> is 24, it will set the hour to 0 and increment the date by one.
            </p>
           
 *
 * @param {Number} hours
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setHours = function(hours){ return; };

/**
 * Gets the milliseconds (from 0-999).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getMilliseconds = function(){ var ret = new Number(); return ret; };

/**
 * Sets the milliseconds (from 0-999).
            <p>
If it tries to set the millisecond bigger than 999 or smaller than 0, it will be calculated automatically.
For example, if <em>ms</em> is 1000, it will set the milliseconds to 0 and add a second.
            </p>
           
 *
 * @param {Number} ms
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setMilliseconds = function(ms){ return; };

/**
 * Gets the minutes (from 0-59).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getMinutes = function(){ var ret = new Number(); return ret; };

/**
 * Sets the minutes.
            <p>
If it tries to set the minute bigger than 59 or smaller than 0, it will be calculated automatically.
For example, if <em>minutes</em> is 60, it will set the minutes to 0 and add an hour.
            </p>
           
 *
 * @param {Number} minutes
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setMinutes = function(minutes){ return; };

/**
 * Gets the month (from 0-11). Note: January is denoted as 0, February as 1, and so on till December, which is denoted as 11.
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getMonth = function(){ var ret = new Number(); return ret; };

/**
 * Sets the month (from 0-11).
            <p>
If it tries to set the month bigger than 11 or smaller than 0, it will be calculated automatically.
For example, if <em>month</em> is 12, it will set the month to 0 and add a year.
            </p>
           
 *
 * @param {Number} month
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setMonth = function(month){ return; };

/**
 * Gets the seconds (from 0-59).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getSeconds = function(){ var ret = new Number(); return ret; };

/**
 * Sets the seconds (from 0-59).
            <p>
If it tries to set the second bigger than 59 or smaller than 0, it will be calculated automatically.
For example, if <em>seconds</em> is 60, it will set the seconds to 0 and add a minute.
            </p>
           
 *
 * @param {Number} seconds
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setSeconds = function(seconds){ return; };

/**
 * Gets the day of the month, according to universal time (from 1-31).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCDate = function(){ var ret = new Number(); return ret; };

/**
 * Sets the day of the month, according to universal time (from 1-31).
            <p>
If it tries to set the day bigger than the last day of the month or smaller than 1, it will be calculated automatically.
For example, if TZDate's month is May and date is 32, it will be June 1.
            </p>
           
 *
 * @param {Number} date
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCDate = function(date){ return; };

/**
 * Gets the day of the week, according to universal time (from 0-6).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCDay = function(){ var ret = new Number(); return ret; };

/**
 * Gets the year, according to universal time.
            <p>
Positive values indicate AD(Anno Domini) years. 0 and negative values indicate BC(Before Christ) years.
For example, 1 = AD 1, 0 = BC 1, -1 = BC 2.
            </p>
           
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCFullYear = function(){ var ret = new Number(); return ret; };

/**
 * Sets the year, according to universal time.
 *
 * @param {Number} year
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCFullYear = function(year){ return; };

/**
 * Gets the hour, according to universal time (0-23).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCHours = function(){ var ret = new Number(); return ret; };

/**
 * Sets the hour, according to universal time (0-23).
            <p>
If it tries to set the hour bigger than 23 or smaller than 0, it will be calculated automatically.
For example, if <em>hours</em> is 24, it will set the hour to 0 and increment the date by one.
            </p>
           
 *
 * @param {Number} hours
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCHours = function(hours){ return; };

/**
 * Gets the milliseconds, according to universal time (from 0-999).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCMilliseconds = function(){ var ret = new Number(); return ret; };

/**
 * Sets the milliseconds, according to universal time (from 0-999).
            <p>
If it tries to set the millisecond bigger than 999 or smaller than 0, it will be calculated automatically.
For example, if <em>ms</em> is 1000, it will set the milliseconds to 0 and add a second.
            </p>
           
 *
 * @param {Number} ms
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCMilliseconds = function(ms){ return; };

/**
 * Gets the minutes, according to universal time (from 0-59).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCMinutes = function(){ var ret = new Number(); return ret; };

/**
 * Sets the minutes, according to universal time (from 0-59).
            <p>
If it tries to set the minute bigger than 59 or smaller than 0, it will be calculated automatically.
For example, if <em>minutes</em> is 60, it will set the minutes to 0 and add an hour.
            </p>
           
 *
 * @param {Number} minutes
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCMinutes = function(minutes){ return; };

/**
 * Gets the month, according to universal time (from 0-11). Note: January is denoted as 0, February as 1 and so on till December, which is denoted as 11.
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCMonth = function(){ var ret = new Number(); return ret; };

/**
 * Sets the month, according to universal time (from 0-11).
            <p>
If it tries to set the month bigger than 11 or smaller than 0, it will be calculated automatically.
For example, if <em>month</em> is 12, it will set the month to 0 and add a year.
            </p>
           
 *
 * @param {Number} month
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCMonth = function(month){ return; };

/**
 * Gets the seconds, according to universal time (from 0-59).
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.getUTCSeconds = function(){ var ret = new Number(); return ret; };

/**
 * Sets the seconds, according to universal time (from 0-59).
            <p>
If it tries to set the second bigger than 59 or smaller than 0, it will be calculated automatically.
For example, if <em>seconds</em> is 60, it will set the seconds to 0 and add a minute.
            </p>
           
 *
 * @param {Number} seconds
 * @type void
 * @memberOf TZDate
 * @returns {void}
 */
TZDate.prototype.setUTCSeconds = function(seconds){ return; };

/**
 * Gets the timezone identifier.
            <p>
Zero or more slashes separate different components, with the most general
descriptor first and the most specific one last. For example,
'Europe/Berlin', 'America/Argentina/Buenos_Aires'.
            </p>
            <p>
This attribute uniquely identifies the timezone.
            </p>
           
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.getTimezone = function(){ var ret = new String(); return ret; };

/**
 * Gets a copy of the TZDate converted to a given time zone.
 *
 * @param {String} tzid
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.toTimezone = function(tzid){ var ret = new TZDate(); return ret; };

/**
 * Gets a copy of the TZDate converted to the local time zone.
 *
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.toLocalTimezone = function(){ var ret = new TZDate(); return ret; };

/**
 * Gets a copy of the TZDate converted to Coordinated Universal Time (UTC).
 *
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.toUTC = function(){ var ret = new TZDate(); return ret; };

/**
 * Calculates the difference with another TZDate object.
            <p>
Calculates the difference in time between <em>this</em> and the other object.
This comparison method takes timezones into consideration for the comparison.
            </p>
            <p>
The TimeDuration that is returned is effectively <em>this</em> - other.
The return value is a duration in milliseconds both TZDate objects have a time component, in days, otherwise.
The result value will be:
            </p>
            <ul>
              <li>
Negative, if other is in the future              </li>
              <li>
0 if the two date/times are equal              </li>
              <li>
Positive, if other is in the past              </li>
            </ul>
           
 *
 * @param {TZDate} other
 * @type TimeDuration
 * @memberOf TZDate
 * @returns {TimeDuration}
 */
TZDate.prototype.difference = function(other){ var ret = new TimeDuration(); return ret; };

/**
 * Checks whether the TZDate is equal to another.
            <p>
This method takes the timezones into consideration and will return <em>true</em>if the two TZDate objects represent the same instant in different timezones.
            </p>
           
 *
 * @param {TZDate} other
 * @type Boolean
 * @memberOf TZDate
 * @returns {Boolean}
 */
TZDate.prototype.equalsTo = function(other){ var ret = new Boolean(); return ret; };

/**
 * Checks whether the TZDate is earlier than another.
            <p>
This method takes the timezones into consideration.
            </p>
           
 *
 * @param {TZDate} other
 * @type Boolean
 * @memberOf TZDate
 * @returns {Boolean}
 */
TZDate.prototype.earlierThan = function(other){ var ret = new Boolean(); return ret; };

/**
 * Checks whether the TZDate is later than another.
            <p>
This method takes the timezones into consideration.
            </p>
           
 *
 * @param {TZDate} other
 * @type Boolean
 * @memberOf TZDate
 * @returns {Boolean}
 */
TZDate.prototype.laterThan = function(other){ var ret = new Boolean(); return ret; };

/**
 * Gets a new date by adding a duration to the current TZDate object.
            <p>
If the length of duration is negative, the new date/time will be
earlier than it used to.
            </p>
            <p>
Note that calling this method does not alter the current object.
            </p>
           
 *
 * @param {TimeDuration} duration
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.addDuration = function(duration){ var ret = new TZDate(); return ret; };

/**
 * Gets the date portion of a TZDate object as a string, using locale conventions.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toLocaleDateString = function(){ var ret = new String(); return ret; };

/**
 * Gets the time portion of a TZDate object as a string, using locale conventions.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toLocaleTimeString = function(){ var ret = new String(); return ret; };

/**
 * Converts a TZDate object to a string, using locale conventions.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toLocaleString = function(){ var ret = new String(); return ret; };

/**
 * Gets the date portion of a TZDate object as a string.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toDateString = function(){ var ret = new String(); return ret; };

/**
 * Gets the time portion of a TZDate object as a string.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toTimeString = function(){ var ret = new String(); return ret; };

/**
 * Converts a TZDate object to a string.
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.toString = function(){ var ret = new String(); return ret; };

/**
 * Determines the time zone abbreviation to be used at a particular date in the time zone.
            <p>
For example, in Toronto this is currently "EST" during the winter months and "EDT" during the
summer months when daylight savings time is in effect.
            </p>
           
 *
 * @type String
 * @memberOf TZDate
 * @returns {String}
 */
TZDate.prototype.getTimezoneAbbreviation = function(){ var ret = new String(); return ret; };

/**
 * Gets the number of seconds from Coordinated Universal Time (UTC) offset for the timezone.
            <p>
Returns the offset (in seconds) from UTC of the timezone, accounting for daylight
savings if it is in the timezone. For example, if time zone is GMT+8, it will return -32,400.
            </p>
           
 *
 * @type Number
 * @memberOf TZDate
 * @returns {Number}
 */
TZDate.prototype.secondsFromUTC = function(){ var ret = new Number(); return ret; };

/**
 * Checks whether Daylight Saving Time(DST) is active for this TZDate.
            <p>
Indicates if daylight savings are in effect for the time zone and instant
identified by the TZDate object.
            </p>
           
 *
 * @type Boolean
 * @memberOf TZDate
 * @returns {Boolean}
 */
TZDate.prototype.isDST = function(){ var ret = new Boolean(); return ret; };

/**
 * Gets the date of the previous daylight saving time transition for the timezone.
 *
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.getPreviousDSTTransition = function(){ var ret = new TZDate(); return ret; };

/**
 * Gets the date of the next daylight saving time transition for the timezone.
 *
 * @type TZDate
 * @memberOf TZDate
 * @returns {TZDate}
 */
TZDate.prototype.getNextDSTTransition = function(){ var ret = new TZDate(); return ret; };

/**
 * The duration length.
 * <p>
The unit of the duration length (milliseconds, seconds, minutes, hours, or days)
is determined by the duration unit attribute.
            </p>
 *
 * @type Number
 */
TimeDuration.prototype.length = new Number();

/**
 * The duration unit (milliseconds, seconds, minutes, hours, or days).
 * <p>
The default value is "MSECS" (milliseconds unit).
            </p>
 *
 * @type TimeDurationUnit
 */
TimeDuration.prototype.unit = new TimeDurationUnit();

/**
 * Calculates the difference between two TimeDuration objects.
            <p>
Calculates the difference in time between <em>this</em> and <em>other</em>.
The TimeDuration that is returned is effectively <em>first</em> - <em>other</em> (that is: positive if the first parameter is larger).
            </p>
            <p>
The returned TimeDuration is the biggest possible unit without losing the precision.
            </p>
           
 *
 * @param {TimeDuration} other
 * @type TimeDuration
 * @memberOf TimeDuration
 * @returns {TimeDuration}
 */
TimeDuration.prototype.difference = function(other){ var ret = new TimeDuration(); return ret; };

/**
 * Checks whether the TimeDuration is equal to another.
            <p>
This method takes the units into consideration and will return true
if the two TimeDuration objects represent the same duration in different units.
            </p>
           
 *
 * @param {TimeDuration} other
 * @type Boolean
 * @memberOf TimeDuration
 * @returns {Boolean}
 */
TimeDuration.prototype.equalsTo = function(other){ var ret = new Boolean(); return ret; };

/**
 * Checks whether the TimeDuration is lower than another.
            <p>
This method takes the units into consideration when doing the comparison.
            </p>
           
 *
 * @param {TimeDuration} other
 * @type Boolean
 * @memberOf TimeDuration
 * @returns {Boolean}
 */
TimeDuration.prototype.lessThan = function(other){ var ret = new Boolean(); return ret; };

/**
 * Checks whether the TimeDuration is greater than another.
            <p>
This method takes the units into consideration when doing the comparison.
            </p>
           
 *
 * @param {TimeDuration} other
 * @type Boolean
 * @memberOf TimeDuration
 * @returns {Boolean}
 */
TimeDuration.prototype.greaterThan = function(other){ var ret = new Boolean(); return ret; };

/**
 * The Time API provides information regarding date/time and time zones.
 * <p>
The JavaScript Date object does not have full timezone support.
Date objects allow only simple representations to denote a particular location's
offset from Universal Coordinated Time (UTC). This is typically provided as a +/-
offset from UTC-0 (also known as Greenwich Mean Time, or GMT) for example, +05:30 denotes
that a location is 5 hours and 30 minutes ahead of UTC +00:00.
The issue with this method is not getting the correct
local time for a given date. The existing methods are sufficient for this purpose.
The issue is correctly converting to and from local time and UTC for all points in
time - in any of the past, present, and future - based on an initial time provided.
This is important for defining relative dates, where a time in a given location may
observe different UTC offsets, according to any Daylight Savings Rules (DST) in effect
or any other changes that may occur to a location's time zone over time.
Without the communication of the explicit time zone rules governing a given date and
time, the ability to effectively calculate the offset of the local time to UTC or to
any other time zone at any point in the past or future is lost.
        </p>
 * <p>
This API can be used to get TZDate objects with full time zone support, convert them
between timezones, retrieve available timezones.
        </p>
 * <p>
For more information on the Time features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/sys_guide/time.htm">Time Guide</a>.
        </p>
 *
 * @type TimeUtil
 */
Tizen.prototype.time = new TimeUtil();

/**
 * represents a set of filters.
          <p>
The composite filters can be one of the following 2 types:
          </p>
          <ul>
            <li>
The union - used to filter objects that match any of the filters it includes.            </li>
            <li>
The intersection - used to filter objects that match all the filters it includes.            </li>
          </ul>
         
 *
 * @super Object
 * @constructor
 * @return {CompositeFilter}
 */
function CompositeFilter() {};
CompositeFilter.prototype = new AbstractFilter();

/**
 * This interface is used in methods that require only an error as an input parameter in the error callback.
          <p>
If an invalid function (such as null) is passed to the API that accepts ErrorCallback,
it silently fails and there is no further action.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {ErrorCallback}
 */
function ErrorCallback() {};
ErrorCallback.prototype = new Object();

/**
 * Generic exception interface.
          <p>
This interface will be used by the APIs to throw errors synchronously.
          </p>
          <p>
The attempt to set an attribute value may or may not raise WebAPIException synchronously with error type TypeMismatchError or InvalidValuesError.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {WebAPIException}
 */
function WebAPIException() {};
WebAPIException.prototype = new Object();

/**
 * represents a filter based on an object attribute which has values that are within a particular range.
          <p>
Range filters, where only one boundary is set, are available.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AttributeRangeFilter}
 */
function AttributeRangeFilter() {};
AttributeRangeFilter.prototype = new AbstractFilter();

/**
 * represents a point (latitude and longitude) in the map coordinate system.
          <p>
Latitude and longitude are of the WGS84 datum.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SimpleCoordinates}
 */
function SimpleCoordinates() {};
SimpleCoordinates.prototype = new Object();

/**
 * This interface represents a set of filters.
          <p>
It represents the query statement for the specified value of <em>matchValue</em> by the rule of <em>matchFlag</em>.
          </p>
          <p>
If no <em>matchValue</em> is defined, the filter matches all objects that have the attribute
defined (same as the "EXISTS" filter works), otherwise, it only matches objects which have an attribute that match
the specified value.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AttributeFilter}
 */
function AttributeFilter() {};
AttributeFilter.prototype = new AbstractFilter();

/**
 * Generic error interface.
          <p>
This interface will be used by the APIs in order to return them in the error callback of asynchronous methods.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {WebAPIError}
 */
function WebAPIError() {};
WebAPIError.prototype = new Object();

/**
 * This interface is used in methods that do not require any return value in the success callback.
          <p>
In case of successful execution of an asynchronous call, <em>SuccessCallback</em> or an API defined callback must be called immediately to notify the user.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SuccessCallback}
 */
function SuccessCallback() {};
SuccessCallback.prototype = new Object();

/**
 * Defines the tizen interface as a part of the window global object.
          <p>
The <em>Tizen</em> interface is always available within the <em>Window </em>object in the ECMAScript hierarchy.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {TizenObject}
 */
function TizenObject() {};
TizenObject.prototype = new Object();

/**
 * The root of the Tizen Web Device API.
          <p>
This is the Tizen root interface.
It is a property of the ECMAScript global object, as specified by the <em>TizenObject</em> interface.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {Tizen}
 */
function Tizen() {};
Tizen.prototype = new Object();

/**
 * This is a common interface used by different types of object filters.
          <p>
Never use this base interface directly, instead use <em>AbstractFilter</em> subtypes,
such as <em>AttributeFilter</em>, <em>AttributeRangeFilter</em>, and <em>CompositeFilter</em>.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {AbstractFilter}
 */
function AbstractFilter() {};
AbstractFilter.prototype = new Object();

/**
 * is a common interface used for sorting of queried data.
          <p>
Note that the sorting result of list type attributes is not determined.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {SortMode}
 */
function SortMode() {};
SortMode.prototype = new Object();

/**
 * The composite filter type.
 *
 * @type CompositeFilterType
 */
CompositeFilter.prototype.type = new CompositeFilterType();

/**
 * The list of filters in the composite filter.
 *
 * @type array
 */
CompositeFilter.prototype.filters = new array();

/**
 * Method that is invoked when an error occurs.
 *
 * @param {WebAPIError} error
 * @type void
 * @memberOf ErrorCallback
 * @returns {void}
 */
ErrorCallback.prototype.onerror = function(error){ return; };

/**
 * The index is not in the allowed range.
 *
 * @type Number
 */
WebAPIException.INDEX_SIZE_ERR = new Number();

/**
 * The specified range of text is too large.
 *
 * @type Number
 */
WebAPIException.DOMSTRING_SIZE_ERR = new Number();

/**
 * The operation would yield an incorrect node tree.
 *
 * @type Number
 */
WebAPIException.HIERARCHY_REQUEST_ERR = new Number();

/**
 * The object is in the wrong document.
 *
 * @type Number
 */
WebAPIException.WRONG_DOCUMENT_ERR = new Number();

/**
 * The string contains invalid characters.
 *
 * @type Number
 */
WebAPIException.INVALID_CHARACTER_ERR = new Number();

/**
 * Data is specified for a node that does not support data.
 *
 * @type Number
 */
WebAPIException.NO_DATA_ALLOWED_ERR = new Number();

/**
 * The object cannot be modified.
 *
 * @type Number
 */
WebAPIException.NO_MODIFICATION_ALLOWED_ERR = new Number();

/**
 * The object cannot be found here.
 *
 * @type Number
 */
WebAPIException.NOT_FOUND_ERR = new Number();

/**
 * The operation is not supported.
 *
 * @type Number
 */
WebAPIException.NOT_SUPPORTED_ERR = new Number();

/**
 * The specified attribute is already in use elsewhere.
 *
 * @type Number
 */
WebAPIException.INUSE_ATTRIBUTE_ERR = new Number();

/**
 * The object is in an invalid state.
 *
 * @type Number
 */
WebAPIException.INVALID_STATE_ERR = new Number();

/**
 * The string did not match the expected pattern.
 *
 * @type Number
 */
WebAPIException.SYNTAX_ERR = new Number();

/**
 * The object cannot be modified in this way.
 *
 * @type Number
 */
WebAPIException.INVALID_MODIFICATION_ERR = new Number();

/**
 * The operation is not allowed by Namespaces in XML.
 *
 * @type Number
 */
WebAPIException.NAMESPACE_ERR = new Number();

/**
 * The object does not support the operation or argument.
 *
 * @type Number
 */
WebAPIException.INVALID_ACCESS_ERR = new Number();

/**
 * The operation would cause the node to fail validation.
 *
 * @type Number
 */
WebAPIException.VALIDATION_ERR = new Number();

/**
 * The type of the object does not match the expected type.
 *
 * @type Number
 */
WebAPIException.TYPE_MISMATCH_ERR = new Number();

/**
 * The operation is insecure.
 *
 * @type Number
 */
WebAPIException.SECURITY_ERR = new Number();

/**
 * A network error occurred.
 *
 * @type Number
 */
WebAPIException.NETWORK_ERR = new Number();

/**
 * The operation has been aborted.
 *
 * @type Number
 */
WebAPIException.ABORT_ERR = new Number();

/**
 * The given URL does not match another URL.
 *
 * @type Number
 */
WebAPIException.URL_MISMATCH_ERR = new Number();

/**
 * The quota has been exceeded.
 *
 * @type Number
 */
WebAPIException.QUOTA_EXCEEDED_ERR = new Number();

/**
 * The operation has timed out.
 *
 * @type Number
 */
WebAPIException.TIMEOUT_ERR = new Number();

/**
 * The supplied node is incorrect or has an incorrect ancestor for this operation.
 *
 * @type Number
 */
WebAPIException.INVALID_NODE_TYPE_ERR = new Number();

/**
 * The object cannot be cloned.
 *
 * @type Number
 */
WebAPIException.DATA_CLONE_ERR = new Number();

/**
 * 16-bit error code.
 * <p>
For the possible values of this attribute, see <a href="http://www.w3.ohttp://127.0.0.1:34603/help/topic/dom/#domexception">DOMException</a>.
            </p>
 *
 * @type Number
 */
WebAPIException.prototype.code = new Number();

/**
 * An error type. The name attribute must return the value it had been initialized with.
 * <p>
This attribute can have one of the following values:
            </p>
 * <ul>
 * <li>UnknownError - An unknown error has occurred.
 * <li>InvalidValuesError - The content of an object does not contain valid values.
 * <li>IOError - An error occurred in communication with the underlying implementation and so the requested method cannot be completed.
 * <li>ServiceNotAvailableError - The requested service is not available.
 * <li>VerificationError - An error occurred in authentication and so the requested method cannot be completed.
 * </ul>
 * <p>
For other possible values of this attribute, see the values defined in <a href="http://www.w3.ohttp://127.0.0.1:34603/help/topic/dom/#error-names-0">DOM error names</a>            </p>
 *
 * @type String
 */
WebAPIException.prototype.name = new String();

/**
 * An error message that describes the details of an encountered error.
 * <p>
This attribute is mainly intended to be used for developers rather than end users, so it should not be used directly in the user interfaces as it is.
            </p>
 *
 * @type String
 */
WebAPIException.prototype.message = new String();

/**
 * The name of the object attribute used for filtering.
 * <p>
The value of this attribute is exactly as it is defined in the object's interface. For attributes of complex type, use fully-qualified names
(such as 'geolocation.latitude' to filter a video or image content's latitude in a geolocation).
            </p>
 * <p>
For attributes of array type, the filter will match if any value in the array
matches.
            </p>
 *
 * @type String
 */
AttributeRangeFilter.prototype.attributeName = new String();

/**
 * Objects with an attribute that is greater than or equal to will match.
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type any
 */
AttributeRangeFilter.prototype.initialValue = new any();

/**
 * Objects with an attribute that is strictly lower than or equal to will match.
 * <p>
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type any
 */
AttributeRangeFilter.prototype.endValue = new any();

/**
 * Latitude.
 *
 * @type Number
 */
SimpleCoordinates.prototype.latitude = new Number();

/**
 * Longitude.
 *
 * @type Number
 */
SimpleCoordinates.prototype.longitude = new Number();

/**
 * The name of the object attribute used for filtering.
 * <p>
This is the name of the object attribute exactly as it is defined in
the object's interface. For attributes of complex type, use fully-qualified names
(such as 'geolocation.latitude' to filter a video or image content's latitude in a geolocation).
            </p>
 * <p>
For attributes of an array type, the filter will match if any value in the array
matches.
            </p>
 *
 * @type String
 */
AttributeFilter.prototype.attributeName = new String();

/**
 * The match flag used for attribute-based filtering.
 * <p>
By default, this attribute is set to "EXACTLY".
            </p>
 *
 * @type FilterMatchFlag
 */
AttributeFilter.prototype.matchFlag = new FilterMatchFlag();

/**
 * The value used for matching.
 * <p>
The filter will match if the attribute value matches the given matchValue.
            </p>
 * <p>
This value is not used if the <em>matchFlag</em> is set to "EXISTS".
By default, this attribute is set to <var>null</var>.
            </p>
 *
 * @type any
 */
AttributeFilter.prototype.matchValue = new any();

/**
 * 16-bit error code.
 * <p>
Possible values are defined in <a href="http://www.w3.ohttp://127.0.0.1:34603/help/topic/dom/#domexception">DOMException</a>.
            </p>
 *
 * @type Number
 */
WebAPIError.prototype.code = new Number();

/**
 * An error type. The name attribute must return the value it had been initialized with.
 * <p>
This attribute can have one of the following values:
            </p>
 * <ul>
 * <li>UnknownError - An unknown error has occurred.
 * <li>InvalidValuesError - The content of an object does not contain valid values.
 * <li>IOError - An error occurred in communication with the underlying implementation and so the requested method cannot be completed.
 * <li>ServiceNotAvailableError - The requested service is not available.
 * <li>VerificationError - An error occurred in authentication and so the requested method cannot be completed.
 * </ul>
 * <p>
For other possible values of this attribute, see the values defined in <a href="http://www.w3.ohttp://127.0.0.1:34603/help/topic/dom/#error-names-0">DOM error names</a>            </p>
 *
 * @type String
 */
WebAPIError.prototype.name = new String();

/**
 * An error message that describes the details of the error encountered.
 * <p>
This attribute is not intended to be used directly in the user interfaces
as it is mainly intended to be useful for developers rather than end users.
            </p>
 *
 * @type String
 */
WebAPIError.prototype.message = new String();

/**
 * Method invoked when the asynchronous call completes successfully.
 *
 * @type void
 * @memberOf SuccessCallback
 * @returns {void}
 */
SuccessCallback.prototype.onsuccess = function(){ return; };

/**
 * This API provides common Tizen functionality.
 * <p>
The API provides the basic definitions that are used in the Tizen Web Device API.
These include generic callbacks that are invoked when the operations succeed or fail,
WebAPIError and WebAPIException that give information of the platform's error and
filter interfaces that are used to make query statements for searching.
        </p>
 * <p>
Additionally, this API specifies the location in the ECMAScript hierarchy in which
the Tizen Web Device API is instantiated (<em>window.tizen</em>).
        </p>
 * <p>
For more information on the Tizen features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/tizen_guide/tizen.htm">Tizen Guide</a>.  
        </p>
 *
 * @type Tizen
 */
TizenObject.prototype.tizen = new Tizen();

/**
 * The name of the object attribute used for sorting.
 *
 * @type String
 */
SortMode.prototype.attributeName = new String();

/**
 * The type of the sorting.
 * <p>
By default, this attribute is set to <var>ASC</var>.
            </p>
 *
 * @type SortModeOrder
 */
SortMode.prototype.order = new SortModeOrder();

/**
 * This API provides common Tizen functionality.
 * <p>
The API provides the basic definitions that are used in the Tizen Web Device API.
These include generic callbacks that are invoked when the operations succeed or fail,
WebAPIError and WebAPIException that give information of the platform's error and
filter interfaces that are used to make query statements for searching.
        </p>
 * <p>
Additionally, this API specifies the location in the ECMAScript hierarchy in which
the Tizen Web Device API is instantiated (<em>window.tizen</em>).
        </p>
 * <p>
For more information on the Tizen features, see <a href="http://127.0.0.1:34603/help/topic/org.tizen.wearable.web.appprogramming/html/guide/tizen_guide/tizen.htm">Tizen Guide</a>.  
        </p>
 *
 * @type Tizen
 */
Window.prototype.tizen = new Tizen();

/**
 * The WidgetInstance interface provides access to a single instance of the Widget.
          <p>
Every visual widget element added to the home screen is a single instance of some Widget.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {WidgetInstance}
 */
function WidgetInstance() {};
WidgetInstance.prototype = new Object();

/**
 * The WidgetArraySuccessCallback interface implements the success callback used in the asynchronous operation to get a list of widgets using the getWidgets() method.
 *
 * @super Object
 * @constructor
 * @return {WidgetArraySuccessCallback}
 */
function WidgetArraySuccessCallback() {};
WidgetArraySuccessCallback.prototype = new Object();

/**
 * The WidgetChangeCallback describes a callback for the addStateChangeListener() method.
 *
 * @super Object
 * @constructor
 * @return {WidgetChangeCallback}
 */
function WidgetChangeCallback() {};
WidgetChangeCallback.prototype = new Object();

/**
 * 
 *
 * @super Object
 * @constructor
 * @return {WidgetContentCallback}
 */
function WidgetContentCallback() {};
WidgetContentCallback.prototype = new Object();

/**
 * The WidgetSize interface contains width and height of a widget area.
 *
 * @super Object
 * @constructor
 * @return {WidgetSize}
 */
function WidgetSize() {};
WidgetSize.prototype = new Object();

/**
 * The WidgetVariant interface provides Widget information related to specific sizeType.
 *
 * @super Object
 * @constructor
 * @return {WidgetVariant}
 */
function WidgetVariant() {};
WidgetVariant.prototype = new Object();

/**
 * The WidgetServiceManager interface provides methods for accessing information about widgets.
 *
 * @super Object
 * @constructor
 * @return {WidgetServiceManager}
 */
function WidgetServiceManager() {};
WidgetServiceManager.prototype = new Object();

/**
 * This interface defines what is instantiated by the object on the Tizen Platform.
          <p>
The <em>tizen.widgetservice</em> object provides access to the Widget service API's functionality.
          </p>
         
 *
 * @super Object
 * @constructor
 * @return {WidgetServiceManagerObject}
 */
function WidgetServiceManagerObject() {};
WidgetServiceManagerObject.prototype = new Object();

/**
 * The Widget interface provides access to a single Widget installed on the system.
 *
 * @super Object
 * @constructor
 * @return {Widget}
 */
function Widget() {};
Widget.prototype = new Object();

/**
 * The WidgetInstancesCallback interface implements the success callback used in the asynchronous operation to get a list of widget instances using the getInstances() method.
 *
 * @super Object
 * @constructor
 * @return {WidgetInstancesCallback}
 */
function WidgetInstancesCallback() {};
WidgetInstancesCallback.prototype = new Object();

/**
 * The WidgetVariantsCallback interface implements the success callback used in the asynchronous operation to get a list of widget variant using the getVariants() method.
 *
 * @super Object
 * @constructor
 * @return {WidgetVariantsCallback}
 */
function WidgetVariantsCallback() {};
WidgetVariantsCallback.prototype = new Object();

/**
 * The Widget this instance belongs to.
 *
 * @type Widget
 */
WidgetInstance.prototype.widget = new Widget();

/**
 * The unique ID of the widget instance.
 *
 * @type WidgetInstanceId
 */
WidgetInstance.prototype.id = new WidgetInstanceId();

/**
 * Changes the interval between automatic update of the widget instance data. Minimum value is 1 second.
 *
 * @param {Number} seconds
 * @type void
 * @memberOf WidgetInstance
 * @returns {void}
 */
WidgetInstance.prototype.changeUpdatePeriod = function(seconds){ return; };

/**
 * Sends a new content data to the Widget Instance.
            <p>
This function does not wait for a confirmation that the data was updated.
            </p>
           
 *
 * @param {Object} data
 * @param {Boolean} updateIfPaused
 * @type void
 * @memberOf WidgetInstance
 * @returns {void}
 */
WidgetInstance.prototype.sendContent = function(data, updateIfPaused){ return; };

/**
 * Retrieves content data from the Widget Instance.
            <p>
The <em>errorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
IOError - If a DB operation has failed              </li>
              <li>
AbortError - If the operation cannot be finished properly.              </li>
            </ul>
           
 *
 * @param {WidgetContentCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf WidgetInstance
 * @returns {void}
 */
WidgetInstance.prototype.getContent = function(successCallback, errorCallback){ return; };

/**
 * Called when the array of objects is retrieved successfully.
 *
 * @param {array} widgets
 * @type void
 * @memberOf WidgetArraySuccessCallback
 * @returns {void}
 */
WidgetArraySuccessCallback.prototype.onsuccess = function(widgets){ return; };

/**
 * Called when the instance state was changed.
 *
 * @param {WidgetInstance} instance
 * @param {WidgetStateType} event
 * @type void
 * @memberOf WidgetChangeCallback
 * @returns {void}
 */
WidgetChangeCallback.prototype.onchange = function(instance, event){ return; };

/**
 * Called when the content of the widget instance is retrieved successfully.
 *
 * @param {Object} data
 * @type void
 * @memberOf WidgetContentCallback
 * @returns {void}
 */
WidgetContentCallback.prototype.onsuccess = function(data){ return; };

/**
 * The horizontal dimension of the area in pixels.
 *
 * @type Number
 */
WidgetSize.prototype.width = new Number();

/**
 * The vertical dimension of the area in pixels.
 *
 * @type Number
 */
WidgetSize.prototype.height = new Number();

/**
 * The WidgetSizeType this WidgetVariant describes.
 *
 * @type WidgetSizeType
 */
WidgetVariant.prototype.sizeType = new WidgetSizeType();

/**
 * Pixel width.
 *
 * @type Number
 */
WidgetVariant.prototype.width = new Number();

/**
 * Pixel height.
 *
 * @type Number
 */
WidgetVariant.prototype.height = new Number();

/**
 * The preview image path.
 *
 * @type String
 */
WidgetVariant.prototype.previewImagePath = new String();

/**
 * if the widget was designed to receive mouse events.
 *
 * @type Boolean
 */
WidgetVariant.prototype.needsMouseEvents = new Boolean();

/**
 * if the widget expects the system to show touch effect.
 *
 * @type Boolean
 */
WidgetVariant.prototype.needsTouchEffect = new Boolean();

/**
 * if the widget expects the system to draw a frame.
 *
 * @type Boolean
 */
WidgetVariant.prototype.needsFrame = new Boolean();

/**
 * Retrieves a Widget object with a given .
 *
 * @param {WidgetId} widgetId
 * @type Widget
 * @memberOf WidgetServiceManager
 * @returns {Widget}
 */
WidgetServiceManager.prototype.getWidget = function(widgetId){ var ret = new Widget(); return ret; };

/**
 * Retrieves a list of all widgets. If package id is provided returned list contains widgets included in a given package only.
            <p>
The <em>errorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
IOError - If a DB operation has failed.              </li>
              <li>
AbortError - If the operation cannot be finished properly.              </li>
              <li>
NotFoundError - If the device has no widgets or if a widget with the given id does not exist              </li>
            </ul>
           
 *
 * @param {WidgetArraySuccessCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @param {PackageId} packageId
 * @type void
 * @memberOf WidgetServiceManager
 * @returns {void}
 */
WidgetServiceManager.prototype.getWidgets = function(successCallback, errorCallback, packageId){ return; };

/**
 * Returns the primary widget ID of the specified package or application.
 *
 * @param {union} id
 * @type WidgetId
 * @memberOf WidgetServiceManager
 * @returns {WidgetId}
 */
WidgetServiceManager.prototype.getPrimaryWidgetId = function(id){ var ret = new WidgetId(); return ret; };

/**
 * Returns the size coresponding to the given sizeType.
 *
 * @param {WidgetSizeType} sizeType
 * @type WidgetSize
 * @memberOf WidgetServiceManager
 * @returns {WidgetSize}
 */
WidgetServiceManager.prototype.getSize = function(sizeType){ var ret = new WidgetSize(); return ret; };

/**
 * The WidgetService API provides information about installed widgets.
 * <p>
For more information on the Widget service features, see the <a href="http://127.0.0.1:34603/help/topic/http://127.0.0.1:34603/help/topic/../org.tizen.guides/html/web/tizen/application/widget_w.htm">Widget Service Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/shell.appwidget
 * @type WidgetServiceManager
 */
WidgetServiceManagerObject.prototype.widget = new WidgetServiceManager();

/**
 * Widget ID.
 *
 * @type WidgetId
 */
Widget.prototype.id = new WidgetId();

/**
 * Main application ID.
 *
 * @type ApplicationId
 */
Widget.prototype.applicationId = new ApplicationId();

/**
 * Setup application ID.
 *
 * @type ApplicationId
 */
Widget.prototype.setupApplicationId = new ApplicationId();

/**
 * The ID of the package this widget was installed with.
 *
 * @type PackageId
 */
Widget.prototype.packageId = new PackageId();

/**
 * if the widget should be hidden in the list of widgets.
 * <p>
Precondition: Widget tag in the config.xml file includes the "nodisplay" attribute.
            </p>
 *
 * @type Boolean
 */
Widget.prototype.noDisplay = new Boolean();

/**
 * Returns a name of the widget in a given locale.
 *
 * @param {String} locale
 * @type String
 * @memberOf Widget
 * @returns {String}
 */
Widget.prototype.getName = function(locale){ var ret = new String(); return ret; };

/**
 * Retrieves Widget instances (elements that have been added to the screen). Widget instance as opposed to the widget interface (which is abstarct of application), is a specified application.
            <p>
The <em>errorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
AbortError - If the operation cannot be finished properly.              </li>
              <li>
NotFoundError - If the Web application which is calling this method did not add any widgets to the screen.              </li>
              <li>
SecurityError - If the widget does not belong to the package of the web application which is calling this method.              </li>
            </ul>
           
 *
 * @param {WidgetInstancesCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Widget
 * @returns {void}
 */
Widget.prototype.getInstances = function(successCallback, errorCallback){ return; };

/**
 * Returns object representing widget information related to a given sizeType.
 *
 * @param {WidgetSizeType} sizeType
 * @type WidgetVariant
 * @memberOf Widget
 * @returns {WidgetVariant}
 */
Widget.prototype.getVariant = function(sizeType){ var ret = new WidgetVariant(); return ret; };

/**
 * Retrieves Wiget Variants representing all of the supported widget size types.
            <p>
The <em>errorCallback</em> is launched with these error types:
            </p>
            <ul>
              <li>
AbortError - If the operation cannot be finished properly.              </li>
            </ul>
           
 *
 * @param {WidgetVariantsCallback} successCallback
 * @param {ErrorCallback} errorCallback
 * @type void
 * @memberOf Widget
 * @returns {void}
 */
Widget.prototype.getVariants = function(successCallback, errorCallback){ return; };

/**
 * Registers a callback which will be called whenever any of this widget instances state changes.
 *
 * @param {WidgetChangeCallback} listener
 * @type Number
 * @memberOf Widget
 * @returns {Number}
 */
Widget.prototype.addStateChangeListener = function(listener){ var ret = new Number(); return ret; };

/**
 * Unregisters a callback registered under the given watchId.
 *
 * @param {Number} watchId
 * @type void
 * @memberOf Widget
 * @returns {void}
 */
Widget.prototype.removeStateChangeListener = function(watchId){ return; };

/**
 * Called when the array of objects is retrieved successfully.
 *
 * @param {array} instances
 * @type void
 * @memberOf WidgetInstancesCallback
 * @returns {void}
 */
WidgetInstancesCallback.prototype.onsuccess = function(instances){ return; };

/**
 * Called when the array of objects is retrieved successfully.
 *
 * @param {array} instances
 * @type void
 * @memberOf WidgetVariantsCallback
 * @returns {void}
 */
WidgetVariantsCallback.prototype.onsuccess = function(instances){ return; };

/**
 * The WidgetService API provides information about installed widgets.
 * <p>
For more information on the Widget service features, see the <a href="http://127.0.0.1:34603/help/topic/http://127.0.0.1:34603/help/topic/../org.tizen.guides/html/web/tizen/application/widget_w.htm">Widget Service Guide</a>.
        </p>
 *
 * @feature http://tizen.org/feature/shell.appwidget
 * @type WidgetServiceManager
 */
Tizen.prototype.widget = new WidgetServiceManager();

