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
/******/ 		1: 0
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
/******/ 	deferredModules.push([57,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
module.exports = __webpack_require__(59);


/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


var getItems = function getItems() {
  var d = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.Deferred();
  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.get('itemCategories?depth=3&iconStyle=icon-xlg').done(function (data) {
    d.resolve(data);
  });
  return d.promise();
};

var jRoot = jquery__WEBPACK_IMPORTED_MODULE_0___default()('head').attr('data-rooturl');
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.when(getItems()).done(function (data) {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
    //////////////////////////
    // helper functions...
    function parseResponseFromCheckJobName(data) {
      var html = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.parseHTML(data);
      var element = html[0];

      if (element !== undefined) {
        return jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).text();
      }

      return undefined;
    }

    function cleanClassName(className) {
      return className.replace(/\./g, '_');
    }

    function checkForLink(desc) {
      if (desc.indexOf('&lt;a href="') === -1) {
        return desc;
      } // eslint-disable-next-line


      var newDesc = desc.replace(/\&lt;/g, '<').replace(/\&gt;/g, '>');
      return newDesc;
    }

    function getCopyFromValue() {
      return jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[type="text"][name="from"]', '#createItem').val();
    }

    function isItemNameEmpty() {
      var itemName = jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="name"]', '#createItem').val();
      return itemName === '' ? true : false;
    }

    function getFieldValidationStatus(fieldId) {
      return jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + fieldId).data('valid');
    }

    function setFieldValidationStatus(fieldId, status) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + fieldId).data('valid', status);
    }

    function activateValidationMessage(messageId, context, message) {
      if (message !== undefined && message !== '') {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(messageId, context).text('» ' + message);
      }

      cleanValidationMessages(context);
      hideInputHelp(context);
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(messageId).removeClass('input-message-disabled');
    }

    function cleanValidationMessages(context) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(context).find('.input-validation-message').addClass('input-message-disabled');
    }

    function hideInputHelp(context) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.input-help', context).addClass('input-message-disabled');
    }

    function showInputHelp(context) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.input-help', context).removeClass('input-message-disabled');
    } // About Scroll-linked effect: https://developer.mozilla.org/en-US/docs/Mozilla/Performance/Scroll-linked_effects


    function doSticky() {
      var decorator = jquery__WEBPACK_IMPORTED_MODULE_0___default()('form .footer .btn-decorator');
      var pos = decorator.offset();
      var vpH = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height();

      if (pos.top >= vpH) {
        decorator.css({
          position: 'fixed'
        });
      }

      jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scroll(function () {
        var footer = jquery__WEBPACK_IMPORTED_MODULE_0___default()('form .footer');
        var ref1 = decorator.offset().top + decorator.outerHeight();
        var ref2 = footer.offset().top + footer.outerHeight();
        var vpH = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).height();

        if (ref2 > vpH + jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop()) {
          decorator.css({
            position: 'fixed'
          });
        } else if (ref2 - 1 <= ref1) {
          decorator.css({
            position: 'absolute'
          });
        }
      });
    }

    function enableSubmit(status) {
      var btn = jquery__WEBPACK_IMPORTED_MODULE_0___default()('form .footer .btn-decorator button[type=submit]');

      if (status === true) {
        if (btn.hasClass('disabled')) {
          btn.removeClass('disabled');
          btn.prop('disabled', false);
        }
      } else {
        if (!btn.hasClass('disabled')) {
          btn.addClass('disabled');
          btn.prop('disabled', true);
        }
      }
    }

    function getFormValidationStatus() {
      if (getFieldValidationStatus('name') && (getFieldValidationStatus('items') || getFieldValidationStatus('from'))) {
        return true;
      }

      return false;
    }

    function cleanItemSelection() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.categories').find('li[role="radio"]').attr("aria-checked", "false");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#createItem').find('input[type="radio"][name="mode"]').removeAttr('checked');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.categories').find('.active').removeClass('active');
      setFieldValidationStatus('items', false);
    }

    function cleanCopyFromOption() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('#createItem').find('input[type="radio"][value="copy"]').removeAttr('checked');
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[type="text"][name="from"]', '#createItem').val('');
      setFieldValidationStatus('from', false);
    } //////////////////////////////////
    // Draw functions


    function drawCategory(category) {
      var $category = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div/>').addClass('category').attr('id', 'j-add-item-type-' + cleanClassName(category.id));
      var $items = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<ul/>').addClass('j-item-options');
      var $catHeader = jquery__WEBPACK_IMPORTED_MODULE_0___default()('<div class="header" />');
      var title = '<h2>' + category.name + '</h2>';
      var description = '<p>' + category.description + '</p>'; // Add items

      jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(category.items, function (i, elem) {
        $items.append(drawItem(elem));
      });
      $catHeader.append(title);
      $catHeader.append(description);
      $category.append($catHeader);
      $category.append($items);
      return $category;
    }

    function drawItem(elem) {
      var item = document.createElement('li');
      item.tabIndex = 0;
      item.className = cleanClassName(elem["class"]);
      item.setAttribute('role', 'radio');
      item.setAttribute('aria-checked', 'false');
      var label = item.appendChild(document.createElement('label'));
      var radio = label.appendChild(document.createElement('input'));
      radio.type = 'radio';
      radio.name = 'mode';
      radio.value = elem["class"];
      var displayName = label.appendChild(document.createElement('span'));
      displayName.className = 'label';
      displayName.appendChild(document.createTextNode(elem.displayName));
      var desc = item.appendChild(document.createElement('div'));
      desc.className = 'desc';
      desc.innerHTML = checkForLink(elem.description);
      var iconDiv = drawIcon(elem);
      item.appendChild(iconDiv);

      function select(e) {
        e.preventDefault();
        cleanCopyFromOption();
        cleanItemSelection();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr("aria-checked", "true");
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('input[type="radio"][name="mode"]').prop('checked', true);
        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('active');
        setFieldValidationStatus('items', true);

        if (!getFieldValidationStatus('name')) {
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="name"][type="text"]', '#createItem').focus();
        } else {
          if (getFormValidationStatus()) {
            enableSubmit(true);
          }
        }
      }

      item.addEventListener('click', select);
      item.addEventListener('keydown', function (evt) {
        if (evt.code === 'Space' || evt.code === 'Enter') {
          this.click();
          evt.stopPropagation();
        }
      });
      return item;
    }

    function drawIcon(elem) {
      var iconDiv = document.createElement('div');

      if (elem.iconClassName && elem.iconQualifiedUrl) {
        iconDiv.className = 'icon';
        var img1 = document.createElement('img');
        img1.className = elem.iconClassName + ' icon-xlg';
        img1.src = elem.iconQualifiedUrl;
        iconDiv.appendChild(img1); // Example for Freestyle project
        // <div class="icon"><img class="icon-freestyle-project icon-xlg" src="/jenkins/static/108b2346/images/48x48/freestyleproject.png"></div>
      } else if (elem.iconFilePathPattern) {
        iconDiv.className = 'icon';
        var iconFilePath = jRoot + '/' + elem.iconFilePathPattern.replace(":size", "48x48");
        var img2 = document.createElement('img');
        img2.src = iconFilePath;
        iconDiv.appendChild(img2); // Example for Maven project
        // <div class="icon"><img src="/jenkins/plugin/maven-plugin/images/48x48/mavenmoduleset.png"></div>
      } else {
        var colors = ['c-49728B', 'c-335061', 'c-D33833', 'c-6D6B6D', 'c-6699CC'];
        var desc = elem.description || '';
        var name = elem.displayName;
        var colorClass = colors[desc.length % 4];
        var aName = name.split(' ');
        var a = name.substring(0, 1);
        var b = aName.length === 1 ? name.substring(1, 2) : aName[1].substring(0, 1);
        var spanFakeImgA = document.createElement('span');
        spanFakeImgA.className = "a";
        spanFakeImgA.innerText = a;
        iconDiv.appendChild(spanFakeImgA);
        var spanFakeImgB = document.createElement('span');
        spanFakeImgB.className = "b";
        spanFakeImgB.innerText = b;
        iconDiv.appendChild(spanFakeImgB);
        iconDiv.className = colorClass + ' default-icon'; // Example for MockFolder
        // <div class="default-icon c-49728B"><span class="a">M</span><span class="b">o</span></div>
      }

      return iconDiv;
    } // The main panel content is hidden by default via an inline style. We're ready to remove that now.


    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#add-item-panel').removeAttr('style'); // Render all categories

    var $categories = jquery__WEBPACK_IMPORTED_MODULE_0___default()('div.categories');
    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(data.categories, function (i, elem) {
      drawCategory(elem).appendTo($categories);
    }); // Focus

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#add-item-panel").find("#name").focus(); // Init NameField

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="name"]', '#createItem').on("blur input", function () {
      if (!isItemNameEmpty()) {
        var itemName = jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="name"]', '#createItem').val();
        jquery__WEBPACK_IMPORTED_MODULE_0___default.a.get("checkJobName", {
          value: itemName
        }).done(function (data) {
          var message = parseResponseFromCheckJobName(data);

          if (message !== '') {
            activateValidationMessage('#itemname-invalid', '.add-item-name', message);
          } else {
            cleanValidationMessages('.add-item-name');
            showInputHelp('.add-item-name');
            setFieldValidationStatus('name', true);

            if (getFormValidationStatus()) {
              enableSubmit(true);
            }
          }
        });
      } else {
        enableSubmit(false);
        setFieldValidationStatus('name', false);
        cleanValidationMessages('.add-item-name');
        activateValidationMessage('#itemname-required', '.add-item-name');
      }
    }); // Init CopyFromField

    jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="from"]', '#createItem').on("blur input", function () {
      if (getCopyFromValue() === '') {
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#createItem').find('input[type="radio"][value="copy"]').removeAttr('checked');
      } else {
        cleanItemSelection();
        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#createItem').find('input[type="radio"][value="copy"]').prop('checked', true);
        setFieldValidationStatus('from', true);

        if (!getFieldValidationStatus('name')) {
          activateValidationMessage('#itemname-required', '.add-item-name');
          setTimeout(function () {
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="name"][type="text"]', '#createItem').focus();
          }, 400);
        } else {
          if (getFormValidationStatus()) {
            enableSubmit(true);
          }
        }
      }
    }); // Client-side validation

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#createItem").submit(function (event) {
      if (!getFormValidationStatus()) {
        event.preventDefault();

        if (!getFieldValidationStatus('name')) {
          activateValidationMessage('#itemname-required', '.add-item-name');
          jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="name"][type="text"]', '#createItem').focus();
        } else {
          if (!getFieldValidationStatus('items') && !getFieldValidationStatus('from')) {
            activateValidationMessage('#itemtype-required', '.add-item-name');
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="name"][type="text"]', '#createItem').focus();
          }
        }
      }
    }); // Disable the submit button

    enableSubmit(false); // Do sticky the form buttons

    doSticky();
  });
});

/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(60);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=add-item.js.map