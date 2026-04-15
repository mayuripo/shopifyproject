/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		6: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([47,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var window_handle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var window_handle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(window_handle__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(handlebars__WEBPACK_IMPORTED_MODULE_2__);
/**
 * Jenkins JS Modules common utility functions
 */



var debug = false;
var jenkins = {}; // gets the base Jenkins URL including context path

jenkins.baseUrl = function () {
  var u = jquery__WEBPACK_IMPORTED_MODULE_0___default()('head').attr('data-rooturl');

  if (!u) {
    u = '';
  }

  return u;
}; // awful hack to get around JSONifying things with Prototype taking over wrong. ugh. Prototype is the worst.


jenkins.stringify = function (o) {
  if (Array.prototype.toJSON) {
    // Prototype f's this up something bad
    var protoJSON = {
      a: Array.prototype.toJSON,
      o: Object.prototype.toJSON,
      h: Hash.prototype.toJSON,
      s: String.prototype.toJSON
    };

    try {
      delete Array.prototype.toJSON;
      delete Object.prototype.toJSON;
      delete Hash.prototype.toJSON;
      delete String.prototype.toJSON;
      return JSON.stringify(o);
    } finally {
      if (protoJSON.a) {
        Array.prototype.toJSON = protoJSON.a;
      }

      if (protoJSON.o) {
        Object.prototype.toJSON = protoJSON.o;
      }

      if (protoJSON.h) {
        Hash.prototype.toJSON = protoJSON.h;
      }

      if (protoJSON.s) {
        String.prototype.toJSON = protoJSON.s;
      }
    }
  } else {
    return JSON.stringify(o);
  }
};
/**
 * redirect
 */


jenkins.goTo = function (url) {
  window_handle__WEBPACK_IMPORTED_MODULE_1___default.a.getWindow().location.replace(jenkins.baseUrl() + url);
};
/**
 * Jenkins AJAX GET callback.
 * If last parameter is an object, will be extended to jQuery options (e.g. pass { error: function() ... } to handle errors)
 */


jenkins.get = function (url, success, options) {
  if (debug) {
    console.log('get: ' + url);
  }

  var args = {
    url: jenkins.baseUrl() + url,
    type: 'GET',
    cache: false,
    dataType: 'json',
    success: success
  };

  if (options instanceof Object) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(args, options);
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax(args);
};
/**
 * Jenkins AJAX POST callback, formats data as a JSON object post (note: works around prototype.js ugliness using stringify() above)
 * If last parameter is an object, will be extended to jQuery options (e.g. pass { error: function() ... } to handle errors)
 */


jenkins.post = function (url, data, success, options) {
  if (debug) {
    console.log('post: ' + url);
  } // handle crumbs


  var headers = {};
  var wnd = window_handle__WEBPACK_IMPORTED_MODULE_1___default.a.getWindow();
  var crumb;

  if ('crumb' in options) {
    crumb = options.crumb;
  } else if ('crumb' in wnd) {
    crumb = wnd.crumb;
  }

  if (crumb) {
    headers[crumb.fieldName] = crumb.value;
  }

  var formBody = data;

  if (formBody instanceof Object) {
    if (crumb) {
      formBody = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({}, formBody);
      formBody[crumb.fieldName] = crumb.value;
    }

    formBody = jenkins.stringify(formBody);
  }

  var args = {
    url: jenkins.baseUrl() + url,
    type: 'POST',
    cache: false,
    dataType: 'json',
    data: formBody,
    contentType: "application/json",
    success: success,
    headers: headers
  };

  if (options instanceof Object) {
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend(args, options);
  }

  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax(args);
};
/**
 *  handlebars setup, done for backwards compatibility because some plugins depend on it
 */


jenkins.initHandlebars = function () {
  return handlebars__WEBPACK_IMPORTED_MODULE_2___default.a;
};
/**
 * Load translations for the given bundle ID, provide the message object to the handler.
 * Optional error handler as the last argument.
 */


jenkins.loadTranslations = function (bundleName, handler, onError) {
  jenkins.get('/i18n/resourceBundle?baseName=' + bundleName, function (res) {
    if (res.status !== 'ok') {
      if (onError) {
        onError(res.message);
      }

      throw 'Unable to load localization data: ' + res.message;
    }

    var translations = res.data;
    /* globals Proxy: true */

    if ('undefined' !== typeof Proxy) {
      translations = new Proxy(translations, {
        get: function get(target, property) {
          if (property in target) {
            return target[property];
          }

          if (debug) {
            console.log('"' + property + '" not found in translation bundle.');
          }

          return property;
        }
      });
    }

    handler(translations);
  });
};
/**
 * Runs a connectivity test, calls handler with a boolean whether there is sufficient connectivity to the internet
 */


jenkins.testConnectivity = function (siteId, handler) {
  // check the connectivity api
  var testConnectivity = function testConnectivity() {
    jenkins.get('/updateCenter/connectionStatus?siteId=' + siteId, function (response) {
      if (response.status !== 'ok') {
        handler(false, true, response.message);
      } // Define statuses, which need additional check iteration via async job on the Jenkins master
      // Statuses like "OK" or "SKIPPED" are considered as fine.


      var uncheckedStatuses = ['PRECHECK', 'CHECKING', 'UNCHECKED'];

      if (uncheckedStatuses.indexOf(response.data.updatesite) >= 0 || uncheckedStatuses.indexOf(response.data.internet) >= 0) {
        setTimeout(testConnectivity, 100);
      } else {
        // Update site should be always reachable, but we do not require the internet connection
        // if it's explicitly skipped by the update center
        if (response.status !== 'ok' || response.data.updatesite !== 'OK' || response.data.internet !== 'OK' && response.data.internet !== 'SKIPPED') {
          // no connectivity, but not fatal
          handler(false, false);
        } else {
          handler(true);
        }
      }
    }, {
      error: function error(xhr, textStatus, errorThrown) {
        if (xhr.status === 403) {
          jenkins.goTo('/login');
        } else {
          handler.call({
            isError: true,
            errorMessage: errorThrown
          });
        }
      }
    });
  };

  testConnectivity();
};
/**
 * gets the window containing a form, taking in to account top-level iframes
 */


jenkins.getWindow = function ($form) {
  $form = jquery__WEBPACK_IMPORTED_MODULE_0___default()($form);
  var wnd = window_handle__WEBPACK_IMPORTED_MODULE_1___default.a.getWindow();
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(top.document).find('iframe').each(function () {
    var windowFrame = this.contentWindow;
    var $f = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).contents().find('form');
    $f.each(function () {
      if ($form[0] === this) {
        wnd = windowFrame;
      }
    });
  });
  return wnd;
};
/**
 * Builds a stapler form post
 */


jenkins.buildFormPost = function ($form) {
  $form = jquery__WEBPACK_IMPORTED_MODULE_0___default()($form);
  var wnd = jenkins.getWindow($form);
  var form = $form[0];

  if (wnd.buildFormTree(form)) {
    return $form.serialize() + "&" + jquery__WEBPACK_IMPORTED_MODULE_0___default.a.param({
      'core:apply': '',
      'Submit': 'Save',
      'json': $form.find('input[name=json]').val()
    });
  }

  return '';
};
/**
 * Gets the crumb, if crumbs are enabled
 */


jenkins.getFormCrumb = function ($form) {
  $form = jquery__WEBPACK_IMPORTED_MODULE_0___default()($form);
  var wnd = jenkins.getWindow($form);
  return wnd.crumb;
};
/**
 * Jenkins Stapler JSON POST callback
 * If last parameter is an object, will be extended to jQuery options (e.g. pass { error: function() ... } to handle errors)
 */


jenkins.staplerPost = function (url, $form, success, options) {
  $form = jquery__WEBPACK_IMPORTED_MODULE_0___default()($form);
  var postBody = jenkins.buildFormPost($form);
  var crumb = jenkins.getFormCrumb($form);
  jenkins.post(url, postBody, success, jquery__WEBPACK_IMPORTED_MODULE_0___default.a.extend({
    processData: false,
    contentType: 'application/x-www-form-urlencoded',
    crumb: crumb
  }, options));
};

/* harmony default export */ __webpack_exports__["a"] = (jenkins);

/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(3);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "    <tr data-plugin-id=\""
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "\" data-plugin-version=\""
    + alias2(alias1((depth0 != null ? depth0.version : depth0), depth0))
    + "\">\n"
    + ((stack1 = helpers["if"].call(depth0,((stack1 = (data && data.root)) && stack1.admin),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        <td>\n            <div>\n                <a href=\""
    + alias2(alias1((depth0 != null ? depth0.wiki : depth0), depth0))
    + "\" class=\"jenkins-table__link\" target=\"_blank\" rel=\"noopener noreferrer\">\n                    "
    + alias2(alias1((depth0 != null ? depth0.displayName : depth0), depth0))
    + "\n                    <span class=\"jenkins-visually-hidden\">Version</span>\n                    <span class=\"jenkins-label jenkins-label--tertiary\" style=\"margin-left: 1ch;\">"
    + alias2(alias1((depth0 != null ? depth0.version : depth0), depth0))
    + "</span>\n                </a>\n            </div>\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.categories : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.excerpt : depth0),{"name":"if","hash":{},"fn":this.program(7, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.newerCoreRequired : depth0),{"name":"if","hash":{},"fn":this.program(9, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.unresolvedSecurityWarnings : depth0),{"name":"if","hash":{},"fn":this.program(11, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.deprecated : depth0),{"name":"if","hash":{},"fn":this.program(14, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.adoptMe : depth0),{"name":"if","hash":{},"fn":this.program(16, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.newerVersionAvailableNotOffered : depth0),{"name":"if","hash":{},"fn":this.program(18, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </td>\n        <td width=\"25%\">\n"
    + ((stack1 = helpers["if"].call(depth0,(depth0 != null ? depth0.releaseTimestamp : depth0),{"name":"if","hash":{},"fn":this.program(20, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "        </td>\n    </tr>\n";
},"2":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "            <td class=\"jenkins-table__cell--checkbox\">\n                <span class=\"jenkins-checkbox\">\n                    <input type=\"checkbox\" name=\"plugin."
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "."
    + alias2(alias1((depth0 != null ? depth0.sourceId : depth0), depth0))
    + "\" id=\"plugin."
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "."
    + alias2(alias1((depth0 != null ? depth0.sourceId : depth0), depth0))
    + "\">\n                    <label for=\"plugin."
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "."
    + alias2(alias1((depth0 != null ? depth0.sourceId : depth0), depth0))
    + "\"></label>\n                </span>\n            </td>\n";
},"4":function(depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"app-plugin-manager__categories\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":this.program(5, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                </div>\n";
},"5":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "                        <a href=\"?filter="
    + alias2(alias1(depth0, depth0))
    + "\" class=\"jenkins-table__link jenkins-table__badge\">\n                        "
    + alias2(alias1(depth0, depth0))
    + "\n                        </a>\n";
},"7":function(depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"except\">\n                    "
    + ((stack1 = this.lambda((depth0 != null ? depth0.excerpt : depth0), depth0)) != null ? stack1 : "")
    + "\n                </div>\n";
},"9":function(depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"alert alert-danger\">\n                    "
    + ((stack1 = this.lambda((depth0 != null ? depth0.newerCoreRequired : depth0), depth0)) != null ? stack1 : "")
    + "\n                </div>\n";
},"11":function(depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"alert alert-danger\">\n                    "
    + this.escapeExpression(this.lambda(((stack1 = (depth0 != null ? depth0.unresolvedSecurityWarnings : depth0)) != null ? stack1.text : stack1), depth0))
    + "\n                    <ul>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = (depth0 != null ? depth0.unresolvedSecurityWarnings : depth0)) != null ? stack1.warnings : stack1),{"name":"each","hash":{},"fn":this.program(12, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "                    </ul>\n                </div>\n";
},"12":function(depth0,helpers,partials,data) {
    var alias1=this.lambda, alias2=this.escapeExpression;

  return "                            <li>\n                                <a href=\""
    + alias2(alias1((depth0 != null ? depth0.url : depth0), depth0))
    + "\" target=\"_blank\" rel=\"noopener noreferrer\">\n                                    "
    + alias2(alias1((depth0 != null ? depth0.message : depth0), depth0))
    + "\n                                </a>\n                            </li>\n";
},"14":function(depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"alert alert-warning\">\n                    "
    + ((stack1 = this.lambda((depth0 != null ? depth0.deprecated : depth0), depth0)) != null ? stack1 : "")
    + "\n                </div>\n";
},"16":function(depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"alert alert-warning\">\n                    "
    + ((stack1 = this.lambda((depth0 != null ? depth0.adoptMe : depth0), depth0)) != null ? stack1 : "")
    + "\n                </div>\n";
},"18":function(depth0,helpers,partials,data) {
    var stack1;

  return "                <div class=\"alert alert-info\">\n                    "
    + ((stack1 = this.lambda((depth0 != null ? depth0.newerVersionAvailableNotOffered : depth0), depth0)) != null ? stack1 : "")
    + "\n                </div>\n";
},"20":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "                <time datetime=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.releaseTimestamp : depth0)) != null ? stack1.iso8601 : stack1), depth0))
    + "\">\n                    "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.releaseTimestamp : depth0)) != null ? stack1.displayValue : stack1), depth0))
    + "\n                </time>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.plugins : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(48);


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _templates_plugin_manager_available_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony import */ var _templates_plugin_manager_available_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_templates_plugin_manager_available_hbs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_pluginManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);




function applyFilter(searchQuery) {
  // debounce reduces number of server side calls while typing
  _api_pluginManager__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].availablePluginsSearch(searchQuery.toLowerCase().trim(), 50, function (plugins) {
    var pluginsTable = document.getElementById('plugins');
    var tbody = pluginsTable.querySelector('tbody');
    var admin = pluginsTable.dataset.hasadmin === 'true';
    var selectedPlugins = [];
    var filterInput = document.getElementById('filter-box');
    filterInput.parentElement.classList.remove("jenkins-search--loading");

    function clearOldResults() {
      if (!admin) {
        tbody.innerHTML = '';
      } else {
        var rows = tbody.querySelectorAll('tr');

        if (rows) {
          selectedPlugins = [];
          rows.forEach(function (row) {
            var input = row.querySelector('input');

            if (input.checked === true) {
              var pluginName = input.name.split('.')[1];
              selectedPlugins.push(pluginName);
            } else {
              row.remove();
            }
          });
        }
      }
    }

    clearOldResults();
    var rows = _templates_plugin_manager_available_hbs__WEBPACK_IMPORTED_MODULE_1___default()({
      plugins: plugins.filter(function (plugin) {
        return selectedPlugins.indexOf(plugin.name) === -1;
      }),
      admin: admin
    });
    tbody.insertAdjacentHTML('beforeend', rows);
  });
}

var handleFilter = function handleFilter(e) {
  applyFilter(e.target.value);
};

var debouncedFilter = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(handleFilter, 150);
document.addEventListener("DOMContentLoaded", function () {
  var filterInput = document.getElementById('filter-box');
  filterInput.addEventListener('input', function (e) {
    debouncedFilter(e);
    filterInput.parentElement.classList.add("jenkins-search--loading");
  });
  filterInput.focus();
  applyFilter(filterInput.value);
  setTimeout(function () {
    layoutUpdateCallback.call();
  }, 350);
});

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _util_jenkins__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/**
 * Provides a wrapper to interact with the plugin manager & update center
 */
 //Get plugin info (plugins + recommended plugin list) from update centers.

var plugins;
var pluginManager = {};

pluginManager.initialPluginList = function (handler) {
  _util_jenkins__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get('/setupWizard/platformPluginList', function (response) {
    if (response.status !== 'ok') {
      handler.call({
        isError: true,
        data: response.data
      });
      return;
    }

    handler.call({
      isError: false
    }, response.data);
  }, {
    timeout: pluginManagerErrorTimeoutMillis,
    error: function error(xhr, textStatus, errorThrown) {
      handler.call({
        isError: true,
        errorMessage: errorThrown
      });
    }
  });
}; // Call this to initialize the plugin list


pluginManager.init = function (handler) {
  pluginManager.initialPluginList(function (initialPluginCategories) {
    plugins = {};
    plugins.names = [];
    plugins.recommendedPlugins = [];
    plugins.availablePlugins = initialPluginCategories;

    for (var i = 0; i < initialPluginCategories.length; i++) {
      var pluginCategory = initialPluginCategories[i];
      var categoryPlugins = pluginCategory.plugins;

      for (var ii = 0; ii < categoryPlugins.length; ii++) {
        var plugin = categoryPlugins[ii];
        var pluginName = plugin.name;

        if (plugins.names.indexOf(pluginName) === -1) {
          plugins.names.push(pluginName);

          if (plugin.suggested) {
            plugins.recommendedPlugins.push(pluginName);
          } else if (pluginCategory.category === "Languages") {
            var language = window.navigator.userLanguage || window.navigator.language;
            var code = language.toLocaleLowerCase();

            if (pluginName === "localization-" + code) {
              plugins.recommendedPlugins.push(pluginName);
            }
          }
        }
      }
    }

    handler();
  });
}; // default 10 seconds for AJAX responses to return before triggering an error condition


var pluginManagerErrorTimeoutMillis = 10 * 1000;
/**
 * Get the curated list of plugins to be offered in the wizard.
 * @returns The curated list of plugins to be offered in the wizard.
 */

pluginManager.plugins = function () {
  return plugins.availablePlugins;
};
/**
 * Get the curated list of plugins to be offered in the wizard by name only.
 * @returns The curated list of plugins to be offered in the wizard by name only.
 */


pluginManager.pluginNames = function () {
  return plugins.names;
};
/**
 * Get the subset of plugins (subset of the plugin list) that are recommended by default.
 * <p>
 * The user can easily change this selection.
 * @returns The subset of plugins (subset of the plugin list) that are recommended by default.
 */


pluginManager.recommendedPluginNames = function () {
  return plugins.recommendedPlugins.slice(); // copy this
};
/**
 * Call this function to install plugins, will pass a correlationId to the complete callback which
 * may be used to restrict further calls getting plugin lists. Note: do not use the correlation id.
 * If handler is called with this.isError, there will be a corresponding this.errorMessage indicating
 * the failure reason
 */


pluginManager.installPlugins = function (plugins, handler) {
  _util_jenkins__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/pluginManager/installPlugins', {
    dynamicLoad: true,
    plugins: plugins
  }, function (response) {
    if (response.status !== 'ok') {
      handler.call({
        isError: true,
        errorMessage: response.message
      });
      return;
    }

    handler.call({
      isError: false
    }, response.data.correlationId);
  }, {
    timeout: pluginManagerErrorTimeoutMillis,
    error: function error(xhr, textStatus, errorThrown) {
      handler.call({
        isError: true,
        errorMessage: errorThrown
      });
    }
  });
};
/**
 * Accepts 1 or 2 arguments, if argument 2 is not provided all installing plugins will be passed
 * to the handler function. If argument 2 is non-null, it will be treated as a correlationId, which
 * must be retrieved from a prior installPlugins call.
 */


pluginManager.installStatus = function (handler, correlationId) {
  var url = '/updateCenter/installStatus';

  if (correlationId !== undefined) {
    url += '?correlationId=' + correlationId;
  }

  _util_jenkins__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get(url, function (response) {
    if (response.status !== 'ok') {
      handler.call({
        isError: true,
        errorMessage: response.message
      });
      return;
    }

    handler.call({
      isError: false
    }, response.data);
  }, {
    timeout: pluginManagerErrorTimeoutMillis,
    error: function error(xhr, textStatus, errorThrown) {
      handler.call({
        isError: true,
        errorMessage: errorThrown
      });
    }
  });
};
/**
 * Provides a list of the available plugins, some useful properties is:
 * [
 * 	{ name, title, excerpt, dependencies[], ... },
 *  ...
 * ]
 */


pluginManager.availablePlugins = function (handler) {
  _util_jenkins__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get('/pluginManager/plugins', function (response) {
    if (response.status !== 'ok') {
      handler.call({
        isError: true,
        errorMessage: response.message
      });
      return;
    }

    handler.call({
      isError: false
    }, response.data);
  }, {
    timeout: pluginManagerErrorTimeoutMillis,
    error: function error(xhr, textStatus, errorThrown) {
      handler.call({
        isError: true,
        errorMessage: errorThrown
      });
    }
  });
};

pluginManager.availablePluginsSearch = function (query, limit, handler) {
  _util_jenkins__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get('/pluginManager/pluginsSearch?query=' + query + '&limit=' + limit, function (response) {
    if (response.status !== 'ok') {
      handler.call({
        isError: true,
        errorMessage: response.message
      });
      return;
    }

    handler.call({
      isError: false
    }, response.data);
  }, {
    timeout: pluginManagerErrorTimeoutMillis,
    error: function error(xhr, textStatus, errorThrown) {
      handler.call({
        isError: true,
        errorMessage: errorThrown
      });
    }
  });
};
/**
 * Accepts 1 or 2 arguments, if argument 2 is not provided all installing plugins will be passed
 * to the handler function. If argument 2 is non-null, it will be treated as a correlationId, which
 * must be retrieved from a prior installPlugins call.
 */


pluginManager.incompleteInstallStatus = function (handler, correlationId) {
  var url = '/updateCenter/incompleteInstallStatus';

  if (correlationId !== undefined) {
    url += '?correlationId=' + correlationId;
  }

  _util_jenkins__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get(url, function (response) {
    if (response.status !== 'ok') {
      handler.call({
        isError: true,
        errorMessage: response.message
      });
      return;
    }

    handler.call({
      isError: false
    }, response.data);
  }, {
    timeout: pluginManagerErrorTimeoutMillis,
    error: function error(xhr, textStatus, errorThrown) {
      handler.call({
        isError: true,
        errorMessage: errorThrown
      });
    }
  });
};
/**
 * Call this to complete the installation without installing anything
 */


pluginManager.completeInstall = function (handler) {
  _util_jenkins__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/setupWizard/completeInstall', {}, function () {
    handler.call({
      isError: false
    });
  }, {
    timeout: pluginManagerErrorTimeoutMillis,
    error: function error(xhr, textStatus, errorThrown) {
      handler.call({
        isError: true,
        message: errorThrown
      });
    }
  });
};
/**
 * Indicates there is a restart required to complete plugin installations
 */


pluginManager.getRestartStatus = function (handler) {
  _util_jenkins__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].get('/setupWizard/restartStatus', function (response) {
    handler.call({
      isError: false
    }, response.data);
  }, {
    timeout: pluginManagerErrorTimeoutMillis,
    error: function error(xhr, textStatus, errorThrown) {
      handler.call({
        isError: true,
        message: errorThrown
      });
    }
  });
};
/**
 * Skip failed plugins, continue
 */


pluginManager.installPluginsDone = function (handler) {
  _util_jenkins__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/pluginManager/installPluginsDone', {}, function () {
    handler();
  }, {
    timeout: pluginManagerErrorTimeoutMillis,
    error: function error(xhr, textStatus, errorThrown) {
      handler.call({
        isError: true,
        message: errorThrown
      });
    }
  });
};
/**
 * Restart Jenkins
 */


pluginManager.restartJenkins = function (handler) {
  _util_jenkins__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].post('/updateCenter/safeRestart', {}, function () {
    handler.call({
      isError: false
    });
  }, {
    timeout: pluginManagerErrorTimeoutMillis,
    error: function error(xhr, textStatus, errorThrown) {
      handler.call({
        isError: true,
        message: errorThrown
      });
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (pluginManager);

/***/ })

/******/ });
//# sourceMappingURL=plugin-manager-ui.js.map