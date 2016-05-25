'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function createMemberList() {
    var _ref;

    var list = [];
    return _ref = {}, _defineProperty(_ref, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
        var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, element;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _iteratorNormalCompletion = true;
                        _didIteratorError = false;
                        _iteratorError = undefined;
                        _context.prev = 3;
                        _iterator = list[Symbol.iterator]();

                    case 5:
                        if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                            _context.next = 12;
                            break;
                        }

                        element = _step.value;
                        _context.next = 9;
                        return element;

                    case 9:
                        _iteratorNormalCompletion = true;
                        _context.next = 5;
                        break;

                    case 12:
                        _context.next = 18;
                        break;

                    case 14:
                        _context.prev = 14;
                        _context.t0 = _context["catch"](3);
                        _didIteratorError = true;
                        _iteratorError = _context.t0;

                    case 18:
                        _context.prev = 18;
                        _context.prev = 19;

                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }

                    case 21:
                        _context.prev = 21;

                        if (!_didIteratorError) {
                            _context.next = 24;
                            break;
                        }

                        throw _iteratorError;

                    case 24:
                        return _context.finish(21);

                    case 25:
                        return _context.finish(18);

                    case 26:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, this, [[3, 14, 18, 26], [19,, 21, 25]]);
    })), _defineProperty(_ref, "add", function add(name) {
        list.push(name);
    }), _ref;
}

var list = createMemberList();
list.add("Michael");
list.add("Silvan");
list.add("Markus");

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
    for (var _iterator2 = list[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var el = _step2.value;

        console.log(el);
    }
} catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
} finally {
    try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
        }
    } finally {
        if (_didIteratorError2) {
            throw _iteratorError2;
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZXJhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBQ0EsU0FBUyxnQkFBVCxHQUEyQjtBQUFBOztBQUN2QixRQUFJLE9BQU8sRUFBWDtBQUNBLDRDQUNLLE9BQU8sUUFEWiwwQkFDd0I7QUFBQSw0RkFDUixPQURROztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FDRyxJQURIOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ1IsK0JBRFE7QUFBQTtBQUFBLCtCQUVOLE9BRk07O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUR4QixpQ0FNVSxhQUFTLElBQVQsRUFBYztBQUFDLGFBQUssSUFBTCxDQUFVLElBQVY7QUFBZ0IsS0FOekM7QUFRSDs7QUFHRCxJQUFJLE9BQU8sa0JBQVg7QUFDQSxLQUFLLEdBQUwsQ0FBUyxTQUFUO0FBQ0EsS0FBSyxHQUFMLENBQVMsUUFBVDtBQUNBLEtBQUssR0FBTCxDQUFTLFFBQVQ7Ozs7Ozs7QUFFQSwwQkFBYyxJQUFkLG1JQUFvQjtBQUFBLFlBQVosRUFBWTs7QUFDaEIsZ0JBQVEsR0FBUixDQUFZLEVBQVo7QUFDSCIsImZpbGUiOiJpdGVyYXRvci1jb21waWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuZnVuY3Rpb24gY3JlYXRlTWVtYmVyTGlzdCgpe1xyXG4gICAgdmFyIGxpc3QgPSBbXTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgW1N5bWJvbC5pdGVyYXRvcl0gOiBmdW5jdGlvbiooKSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgZWxlbWVudCBvZiBsaXN0KXtcclxuICAgICAgICAgICAgICAgIHlpZWxkIGVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGFkZCA6IGZ1bmN0aW9uKG5hbWUpe2xpc3QucHVzaChuYW1lKX1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbnZhciBsaXN0ID0gY3JlYXRlTWVtYmVyTGlzdCgpO1xyXG5saXN0LmFkZChcIk1pY2hhZWxcIik7XHJcbmxpc3QuYWRkKFwiU2lsdmFuXCIpO1xyXG5saXN0LmFkZChcIk1hcmt1c1wiKTtcclxuXHJcbmZvcihsZXQgZWwgb2YgbGlzdCkge1xyXG4gICAgY29uc29sZS5sb2coZWwpO1xyXG59Il19