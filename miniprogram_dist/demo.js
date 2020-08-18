module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _component_wrapper = __webpack_require__(2);

(0, _component_wrapper.ComponentWrapper)({
  relation: {},
  props: {
    type: {
      type: null,
      value: ''
    }
  },
  methods: {
    onClick: function onClick() {
      console.log('获取列表数据');
    }
  },
  name: 'demo'
}); /* eslint-disable */

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ComponentWrapper = undefined;

var _basic = __webpack_require__(3);

var relationFunctions = {
    ancestor: {
        linked: function linked(parent) {
            this.parent = parent;
        },
        unlinked: function unlinked() {
            this.parent = null;
        }
    },
    descendant: {
        linked: function linked(child) {
            this.children = this.children || [];
            this.children.push(child);
        },
        unlinked: function unlinked(child) {
            this.children = (this.children || []).filter(function (it) {
                return it !== child;
            });
        }
    }
}; /* eslint-disable */

function mapKeys(source, target, map) {
    Object.keys(map).forEach(function (key) {
        if (source[key]) {
            target[map[key]] = source[key];
        }
    });
}
function makeRelation(options, componentOptions, relation) {
    var _Object$assign;

    var type = relation.type,
        name = relation.name,
        _linked = relation.linked,
        _unlinked = relation.unlinked,
        _linkChanged = relation.linkChanged;
    var beforeCreate = componentOptions.beforeCreate,
        destroyed = componentOptions.destroyed;

    if (type === 'descendant') {
        options.created = function () {
            beforeCreate && beforeCreate.bind(this)();
            this.children = this.children || [];
        };
        options.detached = function () {
            this.children = [];
            destroyed && destroyed.bind(this)();
        };
    }
    options.relations = Object.assign(options.relations || {}, (_Object$assign = {}, _Object$assign['../' + name + '/index'] = {
        type: type,
        linked: function linked(node) {
            relationFunctions[type].linked.bind(this)(node);
            _linked && _linked.bind(this)(node);
        },
        linkChanged: function linkChanged(node) {
            _linkChanged && _linkChanged.bind(this)(node);
        },
        unlinked: function unlinked(node) {
            relationFunctions[type].unlinked.bind(this)(node);
            _unlinked && _unlinked.bind(this)(node);
        }
    }, _Object$assign));
}
function ComponentWrapper() {
    var componentOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var options = {};
    mapKeys(componentOptions, options, {
        data: 'data',
        props: 'properties',
        mixins: 'behaviors',
        methods: 'methods',
        beforeCreate: 'created',
        created: 'attached',
        mounted: 'ready',
        relations: 'relations',
        destroyed: 'detached',
        classes: 'externalClasses'
    });
    var relation = componentOptions.relation;

    if (relation) {
        makeRelation(options, componentOptions, relation);
    }
    // add default externalClasses
    options.externalClasses = options.externalClasses || [];
    options.externalClasses.push('custom-class');
    // add default behaviors
    options.behaviors = options.behaviors || [];
    options.behaviors.push(_basic.basic);
    // map field to form-field behavior
    if (componentOptions.field) {
        options.behaviors.push('wx://form-field');
    }
    if (options.properties) {
        Object.keys(options.properties).forEach(function (name) {
            if (Array.isArray(options.properties[name])) {
                // miniprogram do not allow multi type
                options.properties[name] = null;
            }
        });
    }
    // add default options
    options.options = {
        multipleSlots: true,
        addGlobalClass: true
    };
    Component(options);
}
exports.ComponentWrapper = ComponentWrapper;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/* eslint-disable */
var basic = exports.basic = Behavior({
    methods: {
        $emit: function $emit() {
            this.triggerEvent.apply(this, arguments);
        },
        set: function set(data, callback) {
            this.setData(data, callback);
            return new Promise(function (resolve) {
                return wx.nextTick(resolve);
            });
        },
        getRect: function getRect(selector, all) {
            var _this = this;

            return new Promise(function (resolve) {
                wx.createSelectorQuery().in(_this)[all ? 'selectAll' : 'select'](selector).boundingClientRect(function (rect) {
                    if (all && Array.isArray(rect) && rect.length) {
                        resolve(rect);
                    }
                    if (!all && rect) {
                        resolve(rect);
                    }
                }).exec();
            });
        }
    }
});

/***/ })
/******/ ]);
//# sourceMappingURL=demo.js.map