/**
 * 
 *
 * @super Object
 * @constructor
 * @return {W3CWidget}
 */
function W3CWidget() {};
W3CWidget.prototype = new Object();

/**
 * W3C Widget.
 * <p>
The Widget Interface &lt;a href="http://www.w3.ohttp://127.0.0.1:34603/help/topic/widgets-apis/"&gt;http://www.w3.ohttp://127.0.0.1:34603/help/topic/widgets-apis/&lt;/a&gt;.
            </p>
 *
 * @type W3CWidget
 */
WindowWidget.prototype.widget = new W3CWidget();

/**
 * Author of widget.
 *
 * @type String
 */
W3CWidget.prototype.author = new String();

/**
 * Author e-mail.
 *
 * @type String
 */
W3CWidget.prototype.authorEmail = new String();

/**
 * Author web site.
 *
 * @type String
 */
W3CWidget.prototype.authorHref = new String();

/**
 * Description of widget.
 *
 * @type String
 */
W3CWidget.prototype.description = new String();

/**
 * Identifier of widget.
 *
 * @type String
 */
W3CWidget.prototype.id = new String();

/**
 * Name of widget.
 *
 * @type String
 */
W3CWidget.prototype.name = new String();

/**
 * Short name of widget.
 *
 * @type String
 */
W3CWidget.prototype.shortName = new String();

/**
 * Preferences.
 *
 * @type Storage
 */
W3CWidget.prototype.preferences = new Storage();

/**
 * Version of widget.
 *
 * @type String
 */
W3CWidget.prototype.version = new String();

/**
 * Height of widget.
 *
 * @type Number
 */
W3CWidget.prototype.height = new Number();

/**
 * Width of widget.
 *
 * @type Number
 */
W3CWidget.prototype.width = new Number();

/**
 * W3C Widget.
 * <p>
The Widget Interface &lt;a href="http://www.w3.ohttp://127.0.0.1:34603/help/topic/widgets-apis/"&gt;http://www.w3.ohttp://127.0.0.1:34603/help/topic/widgets-apis/&lt;/a&gt;.
            </p>
 *
 * @type W3CWidget
 */
Window.prototype.widget = new W3CWidget();

/**
 * 
 *
 * @super Object
 * @constructor
 * @return {Console}
 */
function Console() {};
Console.prototype = new Object();

/**
 * 
 *
 * @super Object
 * @constructor
 * @return {ConsoleObject}
 */
function ConsoleObject() {};
ConsoleObject.prototype = new Object();

/**
 * 
 *
 * @param {Object} expression
 * @param {Object} data
 * @type void
 * @memberOf Console
 * @returns {void}
 */
Console.prototype.assert = function(expression, data){ return; };

/**
 * 
 *
 * @type void
 * @memberOf Console
 * @returns {void}
 */
Console.prototype.clear = function(){ return; };

/**
 * 
 *
 * @param {Object} label
 * @type void
 * @memberOf Console
 * @returns {void}
 */
Console.prototype.count = function(label){ return; };

/**
 * 
 *
 * @param {Object} data
 * @type void
 * @memberOf Console
 * @returns {void}
 */
Console.prototype.debug = function(data){ return; };

/**
 * 
 *
 * @param {Object} data
 * @type void
 * @memberOf Console
 * @returns {void}
 */
Console.prototype.dir = function(data){ return; };

/**
 * 
 *
 * @param {Object} data
 * @type void
 * @memberOf Console
 * @returns {void}
 */
Console.prototype.dirxml = function(data){ return; };

/**
 * 
 *
 * @param {Object} data
 * @type void
 * @memberOf Console
 * @returns {void}
 */
Console.prototype.error = function(data){ return; };

/**
 * 
 *
 * @param {Object} data
 * @type void
 * @memberOf Console
 * @returns {void}
 */
Console.prototype.group = function(data){ return; };

/**
 * 
 *
 * @param {Object} data
 * @type void
 * @memberOf Console
 * @returns {void}
 */
Console.prototype.groupCollapsed = function(data){ return; };

/**
 * 
 *
 * @type void
 * @memberOf Console
 * @returns {void}
 */
Console.prototype.groupEnd = function(){ return; };

/**
 * 
 *
 * @param {Object} data
 * @type void
 * @memberOf Console
 * @returns {void}
 */
Console.prototype.info = function(data){ return; };

/**
 * 
 *
 * @param {Object} data
 * @type void
 * @memberOf Console
 * @returns {void}
 */
Console.prototype.log = function(data){ return; };

/**
 * 
 *
 * @param {Object} label
 * @type void
 * @memberOf Console
 * @returns {void}
 */
Console.prototype.profile = function(label){ return; };

/**
 * 
 *
 * @type void
 * @memberOf Console
 * @returns {void}
 */
Console.prototype.profileEnd = function(){ return; };

/**
 * 
 *
 * @param {Object} label
 * @type void
 * @memberOf Console
 * @returns {void}
 */
Console.prototype.time = function(label){ return; };

/**
 * 
 *
 * @param {Object} label
 * @type void
 * @memberOf Console
 * @returns {void}
 */
Console.prototype.timeline = function(label){ return; };

/**
 * 
 *
 * @param {Object} label
 * @type void
 * @memberOf Console
 * @returns {void}
 */
Console.prototype.timeEnd = function(label){ return; };

/**
 * 
 *
 * @param {Object} label
 * @type void
 * @memberOf Console
 * @returns {void}
 */
Console.prototype.timeStamp = function(label){ return; };

/**
 * 
 *
 * @param {Object} data
 * @type void
 * @memberOf Console
 * @returns {void}
 */
Console.prototype.trace = function(data){ return; };

/**
 * 
 *
 * @param {Object} data
 * @type void
 * @memberOf Console
 * @returns {void}
 */
Console.prototype.warn = function(data){ return; };

/**
 * 
 *
 * @type Console
 */
ConsoleObject.prototype.console = new Console();

/**
 * 
 *
 * @type Console
 */
Window.prototype.console = new Console();

