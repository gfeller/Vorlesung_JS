"use strict";

function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof = function _typeof(obj) {
            return typeof obj;
        };
    } else {
        _typeof = function _typeof(obj) {
            return obj &&
            typeof Symbol === "function" &&
            obj.constructor === Symbol &&
            obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
        };
    }
    return _typeof(obj);
}

function set(target, property, value, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.set) {
        set = Reflect.set;
    } else {
        set = function set(target, property, value, receiver) {
            var base = _superPropBase(target, property);
            var desc;
            if (base) {
                desc = Object.getOwnPropertyDescriptor(base, property);
                if (desc.set) {
                    desc.set.call(receiver, value);
                    return true;
                } else if (!desc.writable) {
                    return false;
                }
            }
            desc = Object.getOwnPropertyDescriptor(receiver, property);
            if (desc) {
                if (!desc.writable) {
                    return false;
                }
                desc.value = value;
                Object.defineProperty(receiver, property, desc);
            } else {
                _defineProperty(receiver, property, value);
            }
            return true;
        };
    }
    return set(target, property, value, receiver);
}

function _set(target, property, value, receiver, isStrict) {
    var s = set(target, property, value, receiver || target);
    if (!s && isStrict) {
        throw new Error("failed to set property");
    }
    return value;
}

function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: { value: subClass, writable: true, configurable: true }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
    _setPrototypeOf =
        Object.setPrototypeOf ||
        function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
        };
    return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived),
            result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}

function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
        );
    }
    return self;
}

function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
        );
        return true;
    } catch (e) {
        return false;
    }
}

function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
        };
    return _getPrototypeOf(o);
}

function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}

function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = privateMap.get(receiver);
    if (!descriptor) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    if (descriptor.get) {
        return descriptor.get.call(receiver);
    }
    return descriptor.value;
}

function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = privateMap.get(receiver);
    if (!descriptor) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    if (descriptor.set) {
        descriptor.set.call(receiver, value);
    } else {
        if (!descriptor.writable) {
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
    return value;
}

var _timer = new WeakMap();

var Clock = /*#__PURE__*/ (function () {
    // define class
    //  real private -> current poor support / rarely seen in javascript
    // optional
    function Clock() {
        var currenTime =
            arguments.length > 0 && arguments[0] !== undefined
                ? arguments[0]
                : new Date();

        _classCallCheck(this, Clock);

        _timer.set(this, {
            writable: true,
            value: void 0
        });

        _defineProperty(this, "currentTime", void 0);

        this.currentTime = currenTime; // create a public property

        this.start();
    }

    _createClass(Clock, [
        {
            key: "start",
            value: function start() {
                var _this = this;

                _classPrivateFieldSet(
                    this,
                    _timer,
                    setTimeout(function () {
                        _this.currentTime = new Date();
                    }, 1000)
                );
            } // ...
        },
        {
            key: "stop",
            value: function stop() {
                clearInterval(_classPrivateFieldGet(this, _timer));

                _classPrivateFieldSet(this, _timer, null);
            }
        },
        {
            key: "time",
            get: function get() {
                // getter
                return this.currentTime;
            },
            set: function set(newTime) {
                // setters
                return (this.currentTime = newTime);
            }
        }
    ]);

    return Clock;
})();

var clock = new Clock();
console.log(clock.currentTime);
console.log(clock.time); // console.log(clock.#time); -> error

var _timer2 = new WeakMap();

var _clearTimer = new WeakSet();

var AlarmClock = /*#__PURE__*/ (function (_Clock) {
    _inherits(AlarmClock, _Clock);

    var _super = _createSuper(AlarmClock);

    //  inheritance
    function AlarmClock() {
        var _this2;

        _classCallCheck(this, AlarmClock);

        _this2 = _super.call(this); // super call

        _clearTimer.add(_assertThisInitialized(_this2));

        _timer2.set(_assertThisInitialized(_this2), {
            writable: true,
            value: void 0
        });

        return _this2;
    }

    _createClass(AlarmClock, [
        {
            key: "registerAlarm",
            value: function registerAlarm(time, callback) {
                var _this3 = this;

                // method
                if (+time > +this.currentTime && _classPrivateFieldGet(this, _timer2)) {
                    _classPrivateFieldSet(
                        this,
                        _timer2,
                        setTimeout(function () {
                            callback();

                            _classPrivateMethodGet(_this3, _clearTimer, _clearTimer2).call(
                                _this3
                            );
                        }, time - this.currentTime)
                    );
                }
            }
        },
        {
            key: "time",
            set: function set(value) {
                _classPrivateMethodGet(this, _clearTimer, _clearTimer2).call(this);

                _set(_getPrototypeOf(AlarmClock.prototype), "time", value, this, true); // super call
            }
        }
    ]);

    return AlarmClock;
})(Clock);

var _clearTimer2 = function _clearTimer2() {
    if (_classPrivateFieldGet(this, _timer2)) {
        clearTimeout(_classPrivateFieldGet(this, _timer2));

        _classPrivateFieldSet(this, _timer2, null);
    }
};

var alarmClock = new AlarmClock();
var alarmTime = new Date(+new Date() + 2000); // 2 sec in future;

alarmClock.registerAlarm(alarmTime, function () {
    return console.log("ring, ring!");
});
alarmClock.time = new Date();
console.log(alarmClock instanceof AlarmClock);
console.log(alarmClock instanceof Clock);
console.log(clock instanceof AlarmClock);
console.log(clock instanceof Clock);
