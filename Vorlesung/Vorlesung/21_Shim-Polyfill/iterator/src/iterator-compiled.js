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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIml0ZXJhdG9yLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBRUEsU0FBUyxnQkFBVCxHQUEyQjtBQUFBOztBQUN2QixRQUFJLE9BQU8sRUFBWDtBQUNBLDRDQUNLLE9BQU8sUUFEWiwwQkFDd0I7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBQ0csSUFESDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNSLCtCQURRO0FBQUE7QUFBQSwrQkFFTixPQUZNOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FEeEIsaUNBTVUsYUFBUyxJQUFULEVBQWM7QUFBQyxhQUFLLElBQUwsQ0FBVSxJQUFWO0FBQWdCLEtBTnpDO0FBUUg7O0FBRUQsSUFBSSxPQUFPLGtCQUFYO0FBQ0EsS0FBSyxHQUFMLENBQVMsU0FBVDtBQUNBLEtBQUssR0FBTCxDQUFTLFFBQVQ7QUFDQSxLQUFLLEdBQUwsQ0FBUyxRQUFUOzs7Ozs7O0FBRUEsMEJBQWMsSUFBZCxtSUFBb0I7QUFBQSxZQUFaLEVBQVk7O0FBQ2hCLGdCQUFRLEdBQVIsQ0FBWSxFQUFaO0FBQ0giLCJmaWxlIjoiaXRlcmF0b3ItY29tcGlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW1iZXJMaXN0KCl7XHJcbiAgICB2YXIgbGlzdCA9IFtdO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBbU3ltYm9sLml0ZXJhdG9yXSA6IGZ1bmN0aW9uKigpIHtcclxuICAgICAgICAgICAgZm9yKGxldCBlbGVtZW50IG9mIGxpc3Qpe1xyXG4gICAgICAgICAgICAgICAgeWllbGQgZWxlbWVudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYWRkIDogZnVuY3Rpb24obmFtZSl7bGlzdC5wdXNoKG5hbWUpfVxyXG4gICAgfVxyXG59XHJcblxyXG52YXIgbGlzdCA9IGNyZWF0ZU1lbWJlckxpc3QoKTtcclxubGlzdC5hZGQoXCJNaWNoYWVsXCIpO1xyXG5saXN0LmFkZChcIlNpbHZhblwiKTtcclxubGlzdC5hZGQoXCJNYXJrdXNcIik7XHJcblxyXG5mb3IobGV0IGVsIG9mIGxpc3QpIHtcclxuICAgIGNvbnNvbGUubG9nKGVsKTtcclxufSJdfQ==