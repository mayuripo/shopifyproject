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
/******/ 		4: 0
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
/******/ 	deferredModules.push([73,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(74);


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);

var buildHistoryContainer = document.getElementById("buildHistory");
var pageSearchInputContainer = buildHistoryContainer.querySelector('.build-search-row .jenkins-search');
var pageSearchInput = buildHistoryContainer.querySelector('.build-search-row input');
var buildHistoryPage = document.getElementById("buildHistoryPage");
var properties = document.getElementById("properties");
var ajaxUrl = buildHistoryPage.getAttribute("page-ajax");
var nextBuild = properties.getAttribute("page-next-build");
var noBuildsBanner = document.getElementById("no-builds");
var sidePanel = document.getElementById('side-panel');
var buildHistoryPageNav = document.getElementById('buildHistoryPageNav');
var pageOne = buildHistoryPageNav.querySelectorAll('.pageOne')[0];
var pageUp = buildHistoryPageNav.querySelectorAll('.pageUp')[0];
var pageDown = buildHistoryPageNav.querySelectorAll('.pageDown')[0];
var leftRightPadding = 4;
var updateBuildsRefreshInterval = 5000;

function updateBuilds() {
  if (isPageVisible()) {
    new Ajax.Request(ajaxUrl, {
      requestHeaders: buildHistoryContainer.headers,
      onSuccess: function onSuccess(rsp) {
        var dataTable = getDataTable(buildHistoryContainer);
        var rows = dataTable.rows; // Check there are no existing rows (except the search bar) before showing the no builds banner

        if (rows.length <= 1 && rsp.responseText === "<table class=\"pane\"></table>") {
          noBuildsBanner.style.display = "block";
        } else {
          noBuildsBanner.style.display = "none";
        } //delete rows with transitive data


        var firstBuildRow = 0;

        if (rows[firstBuildRow].classList.contains('build-search-row')) {
          firstBuildRow++;
        }

        while (rows.length > 1 && rows[firstBuildRow].classList.contains('transitive')) {
          Element.remove(rows[firstBuildRow]);
        } // insert new rows


        var div = document.createElement('div');
        div.innerHTML = rsp.responseText;
        Behaviour.applySubtree(div);
        var pivot = rows[firstBuildRow];
        var newDataTable = getDataTable(div);
        var newRows = newDataTable.rows;

        while (newRows.length > 0) {
          if (pivot !== undefined) {
            // The data table has rows.  Insert before a "pivot" row (first row).
            pivot.parentNode.insertBefore(newRows[0], pivot);
          } else {
            // The data table has no rows.  In this case, we just add all new rows directly to the
            // table, one after the other i.e. we don't insert before a "pivot" row (first row).
            dataTable.getElementsByTagName("tbody")[0].appendChild(newRows[0]);
          }
        }

        if (newDataTable.classList.contains('hasPageData')) {
          buildHistoryPage.setAttribute('page-entry-newest', newDataTable.getAttribute('page-entry-newest'));
        } // next update


        buildHistoryContainer.headers = ["n", rsp.getResponseHeader("n")];
        checkAllRowCellOverflows();
        createRefreshTimeout();
      }
    });
  } else {
    createRefreshTimeout();
  }
}

var buildRefreshTimeout;

function createRefreshTimeout() {
  cancelRefreshTimeout();
  buildRefreshTimeout = window.setTimeout(updateBuilds, updateBuildsRefreshInterval);
}

function cancelRefreshTimeout() {
  if (buildRefreshTimeout) {
    window.clearTimeout(buildRefreshTimeout);
    buildRefreshTimeout = undefined;
  }
}

function hasPageUp() {
  return buildHistoryPage.getAttribute('page-has-up') === 'true';
}

function hasPageDown() {
  return buildHistoryPage.getAttribute('page-has-down') === 'true';
}

function getNewestEntryId() {
  return buildHistoryPage.getAttribute('page-entry-newest');
}

function getOldestEntryId() {
  return buildHistoryPage.getAttribute('page-entry-oldest');
}

function getDataTable(buildHistoryDiv) {
  return $(buildHistoryDiv).getElementsBySelector('table.pane')[0];
}

function updatePageParams(dataTable) {
  buildHistoryPage.setAttribute('page-has-up', dataTable.getAttribute('page-has-up'));
  buildHistoryPage.setAttribute('page-has-down', dataTable.getAttribute('page-has-down'));
  buildHistoryPage.setAttribute('page-entry-newest', dataTable.getAttribute('page-entry-newest'));
  buildHistoryPage.setAttribute('page-entry-oldest', dataTable.getAttribute('page-entry-oldest'));
}

function togglePageUpDown() {
  buildHistoryPageNav.classList.remove('hasUpPage');
  buildHistoryPageNav.classList.remove('hasDownPage');

  if (hasPageUp()) {
    buildHistoryPageNav.classList.add('hasUpPage');
  }

  if (hasPageDown()) {
    buildHistoryPageNav.classList.add('hasDownPage');
  }
}

function checkRowCellOverflows(row) {
  if (!row) {
    return;
  }

  if (row.classList.contains('overflow-checked')) {
    // already done.
    return;
  }

  function markSingleline() {
    row.classList.add('single-line');
    row.classList.remove('multi-line');
  }

  function markMultiline() {
    row.classList.remove('single-line');
    row.classList.add('multi-line');
  }

  function indentMultiline(element) {
    element.classList.add('indent-multiline');
  }

  function blockWrap(el1, el2) {
    var div = document.createElement('div');
    div.classList.add('block');
    div.classList.add('wrap');
    el1.classList.add('wrapped');
    el2.classList.add('wrapped');
    el1.parentNode.insertBefore(div, el1);
    el1.parentNode.removeChild(el1);
    el2.parentNode.removeChild(el2);
    div.appendChild(el1);
    div.appendChild(el2);
    return div;
  }

  function blockUnwrap(element) {
    var wrapped = $(element).getElementsBySelector('.wrapped');

    for (var i = 0; i < wrapped.length; i++) {
      var wrappedEl = wrapped[i];
      wrappedEl.parentNode.removeChild(wrappedEl);
      element.parentNode.insertBefore(wrappedEl, element);
      wrappedEl.classList.remove('wrapped');
    }

    element.parentNode.removeChild(element);
  }

  var buildName = $(row).getElementsBySelector('.build-name')[0];
  var buildDetails = $(row).getElementsBySelector('.build-details')[0];

  if (!buildName || !buildDetails) {
    return;
  }

  var buildControls = $(row).getElementsBySelector('.build-controls')[0];
  var desc;
  var descElements = $(row).getElementsBySelector('.desc');

  if (descElements.length > 0) {
    desc = descElements[0];
  }

  function resetCellOverflows() {
    markSingleline(); // undo block wraps

    var blockWraps = $(row).getElementsBySelector('.block.wrap');

    for (var i = 0; i < blockWraps.length; i++) {
      blockUnwrap(blockWraps[i]);
    }

    buildName.classList.remove('block');
    buildName.removeAttribute('style');
    buildDetails.classList.remove('block');
    buildDetails.removeAttribute('style');

    if (buildControls) {
      buildControls.classList.remove('block');
      buildDetails.removeAttribute('style');
    }
  } // Undo everything from the previous poll.


  resetCellOverflows(); // Mark the text as multiline, if it has more than one line

  if (desc) {
    markMultiline();
  }

  var rowWidth = buildHistoryContainer.clientWidth;
  var usableRowWidth = rowWidth - leftRightPadding * 2;
  var nameOverflowParams = getElementOverflowParams(buildName);
  var detailsOverflowParams = getElementOverflowParams(buildDetails);
  var controlsOverflowParams;

  if (buildControls) {
    controlsOverflowParams = getElementOverflowParams(buildControls);
  }

  function fitToControlsHeight(element) {
    if (buildControls) {
      if (element.clientHeight < buildControls.clientHeight) {
        $(element).setStyle({
          height: buildControls.clientHeight.toString() + 'px'
        });
      }
    }
  }

  function setBuildControlWidths() {
    if (buildControls) {
      var buildBadge = $(buildControls).getElementsBySelector('.build-badge')[0];

      if (buildBadge) {
        var buildControlsWidth = buildControls.clientWidth;
        var buildBadgeWidth;
        var buildStop = $(buildControls).getElementsBySelector('.build-stop')[0];

        if (buildStop) {
          $(buildStop).setStyle({
            width: '24px'
          }); // Minus 24 for the buildStop width,
          // minus 4 for left+right padding in the controls container

          buildBadgeWidth = buildControlsWidth - 24 - leftRightPadding;

          if (buildControls.classList.contains('indent-multiline')) {
            buildBadgeWidth = buildBadgeWidth - 20;
          }

          $(buildBadge).setStyle({
            width: buildBadgeWidth + 'px'
          });
        } else {
          $(buildBadge).setStyle({
            width: '100%'
          });
        }
      }

      controlsOverflowParams = getElementOverflowParams(buildControls);
    }
  }

  setBuildControlWidths();
  var controlsRepositioned = false;

  if (nameOverflowParams.isOverflowed || detailsOverflowParams.isOverflowed) {
    // At least one of the cells (name or details) needs to move to a row of its own.
    markMultiline();

    if (buildControls) {
      var expandLeftWithRight = function expandLeftWithRight(leftCellOverFlowParams, rightCellOverflowParams) {
        // Float them left and right...
        $(leftCellOverFlowParams.element).setStyle({
          "float": 'left'
        });
        $(rightCellOverflowParams.element).setStyle({
          "float": 'right'
        });

        if (!leftCellOverFlowParams.isOverflowed && !rightCellOverflowParams.isOverflowed) {
          // If neither left nor right are overflowed, just leave as is and let them float left and right.
          return;
        }

        if (leftCellOverFlowParams.isOverflowed && !rightCellOverflowParams.isOverflowed) {
          $(leftCellOverFlowParams.element).setStyle({
            width: leftCellOverFlowParams.scrollWidth + 'px'
          });
          return;
        }

        if (!leftCellOverFlowParams.isOverflowed && rightCellOverflowParams.isOverflowed) {
          $(rightCellOverflowParams.element).setStyle({
            width: rightCellOverflowParams.scrollWidth + 'px'
          });
          return;
        }
      };

      // We have build controls. Lets see can we find a combination that allows the build controls
      // to sit beside either the build name or the build details.
      var badgesOverflowing = false;
      var nameLessThanHalf = true;
      var detailsLessThanHalf = true;
      var buildBadge = $(buildControls).getElementsBySelector('.build-badge')[0];

      if (buildBadge) {
        var badgeOverflowParams = getElementOverflowParams(buildBadge);

        if (badgeOverflowParams.isOverflowed) {
          // The badges are also overflowing. In this case, we will only attempt to
          // put the controls on the same line as the name or details (see below)
          // if the name or details is using less than half the width of the build history
          // widget.
          badgesOverflowing = true;
          nameLessThanHalf = nameOverflowParams.scrollWidth < usableRowWidth / 2;
          detailsLessThanHalf = detailsOverflowParams.scrollWidth < usableRowWidth / 2;
        }
      }

      if ((!badgesOverflowing || nameLessThanHalf) && nameOverflowParams.scrollWidth + controlsOverflowParams.scrollWidth <= usableRowWidth) {
        // Build name and controls can go on one row (first row). Need to move build details down
        // to a row of its own (second row) by making it a block element, forcing it to wrap. If there
        // are controls, we move them up to position them after the build name by inserting before the
        // build details.
        buildDetails.classList.add('block');
        buildControls.parentNode.removeChild(buildControls);
        buildDetails.parentNode.insertBefore(buildControls, buildDetails);
        var wrap = blockWrap(buildName, buildControls);
        wrap.classList.add('build-name-controls');
        indentMultiline(buildDetails);
        nameOverflowParams = getElementOverflowParams(buildName); // recalculate

        expandLeftWithRight(nameOverflowParams, controlsOverflowParams);
        setBuildControlWidths();
        fitToControlsHeight(buildName);
      } else if ((!badgesOverflowing || detailsLessThanHalf) && detailsOverflowParams.scrollWidth + controlsOverflowParams.scrollWidth <= usableRowWidth) {
        // Build details and controls can go on one row. Need to make the
        // build name (first field) a block element, forcing the details and controls to wrap
        // onto the next row (creating a second row).
        buildName.classList.add('block');
        var wrap = blockWrap(buildDetails, buildControls);
        indentMultiline(wrap);
        wrap.classList.add('build-details-controls');
        detailsOverflowParams = getElementOverflowParams(buildDetails); // recalculate

        expandLeftWithRight(detailsOverflowParams, controlsOverflowParams);
        setBuildControlWidths();
        fitToControlsHeight(buildDetails);
      } else {
        // No suitable combo fits on a row. All need to go on rows of their own.
        buildName.classList.add('block');
        buildDetails.classList.add('block');
        buildControls.classList.add('block');
        indentMultiline(buildDetails);
        indentMultiline(buildControls);
        nameOverflowParams = getElementOverflowParams(buildName); // recalculate

        detailsOverflowParams = getElementOverflowParams(buildDetails); // recalculate

        setBuildControlWidths();
      }

      controlsRepositioned = true;
    } else {
      buildName.classList.add('block');
      buildDetails.classList.add('block');
      indentMultiline(buildDetails);
    }
  }

  if (buildControls && !controlsRepositioned) {
    var buildBadge = $(buildControls).getElementsBySelector('.build-badge')[0];

    if (buildBadge) {
      var badgeOverflowParams = getElementOverflowParams(buildBadge);

      if (badgeOverflowParams.isOverflowed) {
        markMultiline();
        indentMultiline(buildControls);
        buildControls.classList.add('block');
        controlsRepositioned = true;
        setBuildControlWidths();
      }
    }
  }

  if (!nameOverflowParams.isOverflowed && !detailsOverflowParams.isOverflowed && !controlsRepositioned) {
    fitToControlsHeight(buildName);
    fitToControlsHeight(buildDetails);
  }

  row.classList.add('overflow-checked');
}

function checkAllRowCellOverflows() {
  if (isRunAsTest) {
    return;
  }

  var dataTable = getDataTable(buildHistoryContainer);
  var rows = dataTable.rows;

  for (var i = 0; i < rows.length; i++) {
    var row = rows[i];
    checkRowCellOverflows(row);
  }
}

function loadPage(params, focusOnSearch) {
  var searchString = pageSearchInput.value;

  if (searchString !== '') {
    if (params === undefined) {
      params = {};
    }

    params.search = searchString;
  }

  new Ajax.Request(ajaxUrl + toQueryString(params), {
    onSuccess: function onSuccess(rsp) {
      pageSearchInputContainer.classList.remove("jenkins-search--loading");
      buildHistoryContainer.classList.remove("jenkins-pane--loading");

      if (rsp.responseText === "<table class=\"pane\"></table>") {
        noBuildsBanner.style.display = "block";
      } else {
        noBuildsBanner.style.display = "none";
      }

      var dataTable = getDataTable(buildHistoryContainer);
      var tbody = dataTable.getElementsByTagName("tbody")[0];
      var rows = tbody.getElementsByClassName("build-row"); // Delete all build rows

      while (rows.length > 0) {
        Element.remove(rows[0]);
      } // insert new rows


      var div = document.createElement('div');
      div.innerHTML = rsp.responseText;
      Behaviour.applySubtree(div);
      var newDataTable = getDataTable(div);
      var newRows = newDataTable.rows;

      while (newRows.length > 0) {
        tbody.appendChild(newRows[0]);
      }

      checkAllRowCellOverflows();
      updatePageParams(newDataTable);
      togglePageUpDown();

      if (!hasPageUp()) {
        createRefreshTimeout();
      }

      if (focusOnSearch) {
        pageSearchInput.focus();
      }
    }
  });
}

var handleFilter = function handleFilter() {
  loadPage({}, true);
};

var debouncedFilter = lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(handleFilter, 300);
document.addEventListener("DOMContentLoaded", function () {
  // Apply correct styling upon filter bar text change, call API after wait
  pageSearchInput.addEventListener('input', function () {
    pageSearchInputContainer.classList.add("jenkins-search--loading");
    buildHistoryContainer.classList.add("jenkins-pane--loading");
    noBuildsBanner.style.display = "none";
    debouncedFilter();
  });
  if (isRunAsTest) return; // If the build history pane is collapsed, just return immediately and don't set up
  // the build history refresh.

  if (buildHistoryContainer.hasClassName('collapsed')) {
    return;
  }

  buildHistoryContainer.headers = ["n", nextBuild];
  createRefreshTimeout();
  checkAllRowCellOverflows(); // Show/hide the nav as the mouse moves into the sidepanel and build history.

  sidePanel.observe('mouseover', function () {
    buildHistoryPageNav.classList.add('mouseOverSidePanel');
  });
  sidePanel.observe('mouseout', function () {
    buildHistoryPageNav.classList.remove('mouseOverSidePanel');
  });
  buildHistoryContainer.observe('mouseover', function () {
    buildHistoryPageNav.classList.add('mouseOverSidePanelBuildHistory');
  });
  buildHistoryContainer.observe('mouseout', function () {
    buildHistoryPageNav.classList.remove('mouseOverSidePanelBuildHistory');
  });
  pageOne.observe('click', function () {
    loadPage();
  });
  pageUp.observe('click', function () {
    loadPage({
      'newer-than': getNewestEntryId()
    });
  });
  pageDown.observe('click', function () {
    if (hasPageDown()) {
      cancelRefreshTimeout();
      loadPage({
        'older-than': getOldestEntryId()
      });
    } else {
      // wrap back around to the top
      loadPage();
    }
  });
  togglePageUpDown();
});

/***/ })

/******/ });
//# sourceMappingURL=filter-build-history.js.map