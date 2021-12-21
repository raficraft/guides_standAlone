require("./index.css");
var $iwYpZ$swchelpers = require("@swc/helpers");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}


var $08a7d5afccd80df8$export$adc6d72e517d4e6a = function(htmlString) {
    var div = document.createElement("div");
    div.innerHTML = htmlString.trim();
    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild;
};
var $08a7d5afccd80df8$export$61fc7d43ac8f84b0 = function(callback, delay) {
    var timer;
    return function $08a7d5afccd80df8$export$61fc7d43ac8f84b0() {
        var args = arguments;
        var context = this;
        clearTimeout(timer);
        timer = setTimeout(function() {
            callback.apply(context, args);
        }, delay);
    };
};
function $08a7d5afccd80df8$export$f8777a72970d840a(array) {
    var style = "";
    for(var key in array)if (Object.hasOwnProperty.call(array, key)) {
        var element = array[key];
        style += "".concat(key, " : ").concat(element, "; ");
    }
    return style;
}
var $08a7d5afccd80df8$export$84a19d80a0fc97e6 = function(selector) {
    var removeThis = document.querySelector(selector);
    if (removeThis) removeThis.remove();
};
var $08a7d5afccd80df8$export$871b5a9be678db21 = function(args) {
    var initialCss = getComputedStyle(args.el).cssText;
    var ref = $iwYpZ$swchelpers.objectSpread({
    }, args), el = ref.el, action = ref.action, css = ref.css, _preventDefault = ref.preventDefault, preventDefault = _preventDefault === void 0 ? true : _preventDefault, next = ref.next;
    var fired = "";
    var reset = "";
    if (action && action === "hover") {
        fired = "mouseover";
        reset = "mouseout";
    }
    if (action && action === "focus") {
        fired = "focus";
        reset = "focusout";
    }
    if (action && action === "active") {
        fired = "mousedown";
        reset = "mouseup";
    }
    el.addEventListener(fired, function(e) {
        if (preventDefault) e.preventDefault();
        console.log("????");
        for(var key in css)if (Object.hasOwnProperty.call(css, key)) {
            var element = css[key];
            //define new styles
            el.style[key] = element;
        }
    });
    el.addEventListener(reset, function(e) {
        if (preventDefault) e.preventDefault();
        // replace all initial css properties
        el.style.cssText = initialCss;
        if (next) {
            for(var key in next)if (Object.hasOwnProperty.call(next, key)) {
                var element = next[key];
                //define new styles if element is hover
                el.style[key] = element;
            }
        }
    });
};



var $baf7081dc7041035$export$6dbaf1fff660fe95 = /*#__PURE__*/ function() {
    "use strict";
    function $baf7081dc7041035$export$6dbaf1fff660fe95() {
        $iwYpZ$swchelpers.classCallCheck(this, $baf7081dc7041035$export$6dbaf1fff660fe95);
        this.dragPosition = {
            start: {
                x: 0,
                y: 0
            },
            end: {
                x: 0,
                y: 0
            }
        };
    }
    $iwYpZ$swchelpers.createClass($baf7081dc7041035$export$6dbaf1fff660fe95, [
        {
            key: "dragStart",
            value: function dragStart(e) {
                this.dragPosition.start.x = e.screenX;
                this.dragPosition.start.y = e.screenY;
            }
        },
        {
            key: "dragEnd",
            value: function dragEnd(e, el) {
                this.dragPosition.end.x = e.screenX;
                this.dragPosition.end.y = e.screenY;
                var origin = {
                    x: parseInt(getComputedStyle(el, null).getPropertyValue("left").split("px")[0]),
                    y: parseInt(getComputedStyle(el, null).getPropertyValue("top").split("px")[0])
                };
                var moveTo = {
                    x: this.dragPosition.end.x - this.dragPosition.start.x,
                    y: this.dragPosition.end.y - this.dragPosition.start.y
                };
                el.style.left = origin.x + moveTo.x + "px";
                el.style.top = origin.y + moveTo.y + "px";
                el.style.opacity = 1;
            }
        }
    ]);
    return $baf7081dc7041035$export$6dbaf1fff660fe95;
}();




var $553c72c17236c2cd$exports = {};

$parcel$export($553c72c17236c2cd$exports, "UI_body", function () { return $553c72c17236c2cd$export$c8e8069ed9c86e3d; }, function (v) { return $553c72c17236c2cd$export$c8e8069ed9c86e3d = v; });
$parcel$export($553c72c17236c2cd$exports, "container", function () { return $553c72c17236c2cd$export$34e0f9847d4c02dd; }, function (v) { return $553c72c17236c2cd$export$34e0f9847d4c02dd = v; });
$parcel$export($553c72c17236c2cd$exports, "active", function () { return $553c72c17236c2cd$export$89da14300d534261; }, function (v) { return $553c72c17236c2cd$export$89da14300d534261 = v; });
var $553c72c17236c2cd$export$c8e8069ed9c86e3d;
var $553c72c17236c2cd$export$34e0f9847d4c02dd;
var $553c72c17236c2cd$export$89da14300d534261;
$553c72c17236c2cd$export$c8e8069ed9c86e3d = "_UI_body_640a62";
$553c72c17236c2cd$export$34e0f9847d4c02dd = "_container_640a62";
$553c72c17236c2cd$export$89da14300d534261 = "_active_640a62";


var $f3f86e883dc3cb37$export$4b08aed5f1ec6952 = /*#__PURE__*/ function() {
    "use strict";
    function $f3f86e883dc3cb37$export$4b08aed5f1ec6952() {
        $iwYpZ$swchelpers.classCallCheck(this, $f3f86e883dc3cb37$export$4b08aed5f1ec6952);
        console.log("init_UI");
        this.UI_body();
        //This menu is unactive in stand alone version.
        //this.UI_menu();
        this.dragEvent = new $baf7081dc7041035$export$6dbaf1fff660fe95();
    }
    $iwYpZ$swchelpers.createClass($f3f86e883dc3cb37$export$4b08aed5f1ec6952, [
        {
            key: "UI_body",
            value: function UI_body() {
                // Add Terminal view, for inject all HTML element for the project.
                this.UI = $08a7d5afccd80df8$export$adc6d72e517d4e6a("<section id=\"UI_body\" class=\"".concat((/*@__PURE__*/$parcel$interopDefault($553c72c17236c2cd$exports)).UI_body, "\"></section>"));
                document.body.insertAdjacentElement("beforeBegin", this.UI);
            }
        }
    ]);
    return $f3f86e883dc3cb37$export$4b08aed5f1ec6952;
}();






var $069ff03ea42df4f6$export$bcbbd831497ce88 = {
    span_axis_X: function(position, color, param) {
        var thickness = param === void 0 ? 1 : param;
        return $08a7d5afccd80df8$export$f8777a72970d840a({
            background: "linear-gradient(to bottom,\n        transparent 3px,\n        ".concat(color, " 3px,\n        ").concat(color, " ").concat(parseInt(thickness) + 3, "px,\n        transparent ").concat(parseInt(thickness) + 3, "px ,\n        transparent ").concat(parseInt(thickness) + 5, "px\n        )"),
            height: "".concat(parseInt(thickness) + 4, "px"),
            width: "100%",
            top: "".concat(position, "px"),
            position: "absolute"
        });
    },
    span_axis_Y: function(position, color, param) {
        var thickness = param === void 0 ? 1 : param;
        return $08a7d5afccd80df8$export$f8777a72970d840a({
            background: "linear-gradient(to left, \n        transparent 3px,\n        ".concat(color, " 3px,\n        ").concat(color, " ").concat(parseInt(thickness) + 3, "px,\n        transparent ").concat(parseInt(thickness) + 3, "px ,\n        transparent ").concat(parseInt(thickness) + 5, "px\n        )"),
            height: "100%",
            width: "".concat(parseInt(thickness) + 4, "px"),
            left: "".concat(position, "px"),
            position: "fixed"
        });
    },
    span_pseudoEl_X_before: function(color) {
        return $08a7d5afccd80df8$export$f8777a72970d840a({
            top: "-5px",
            left: "0px",
            "border-top": "8px solid transparent",
            "border-bottom": "8px solid transparent",
            "border-left": "8px solid ".concat(color)
        });
    },
    span_pseudoEl_X_after: function(color) {
        return $08a7d5afccd80df8$export$f8777a72970d840a({
            top: "-5px",
            right: "0",
            "border-top": "8px solid transparent",
            "border-right": "8px solid ".concat(color),
            "border-bottom": "8px solid transparent"
        });
    },
    span_pseudoEl_Y_before: function(color) {
        return $08a7d5afccd80df8$export$f8777a72970d840a({
            top: "0",
            right: "-3px",
            "border-top": "8px solid ".concat(color),
            "border-right": "8px solid transparent",
            "border-left": "8px solid transparent"
        });
    },
    span_pseudoEl_Y_after: function(color) {
        return $08a7d5afccd80df8$export$f8777a72970d840a({
            bottom: "0",
            right: "-3px",
            "border-right": "8px solid transparent",
            "border-bottom": "8px solid ".concat(color),
            "border-left": "8px solid transparent"
        });
    },
    contextMenu: function(X, Y) {
        return $08a7d5afccd80df8$export$f8777a72970d840a({
            left: X,
            top: Y
        });
    }
};




var $93509171e9f96b5d$exports = {};

$parcel$export($93509171e9f96b5d$exports, "UI_body", function () { return $93509171e9f96b5d$export$c8e8069ed9c86e3d; }, function (v) { return $93509171e9f96b5d$export$c8e8069ed9c86e3d = v; });
$parcel$export($93509171e9f96b5d$exports, "guides", function () { return $93509171e9f96b5d$export$6bd0430c083ef3cf; }, function (v) { return $93509171e9f96b5d$export$6bd0430c083ef3cf = v; });
$parcel$export($93509171e9f96b5d$exports, "guides_pseudoEL", function () { return $93509171e9f96b5d$export$80cd3f47130f5b35; }, function (v) { return $93509171e9f96b5d$export$80cd3f47130f5b35 = v; });
$parcel$export($93509171e9f96b5d$exports, "UI_guides__container", function () { return $93509171e9f96b5d$export$306af2bd63798f3d; }, function (v) { return $93509171e9f96b5d$export$306af2bd63798f3d = v; });
$parcel$export($93509171e9f96b5d$exports, "contextMenu", function () { return $93509171e9f96b5d$export$218b899e1d476006; }, function (v) { return $93509171e9f96b5d$export$218b899e1d476006 = v; });
$parcel$export($93509171e9f96b5d$exports, "close_contextMenu", function () { return $93509171e9f96b5d$export$b82da7a6a828be37; }, function (v) { return $93509171e9f96b5d$export$b82da7a6a828be37 = v; });
$parcel$export($93509171e9f96b5d$exports, "cross", function () { return $93509171e9f96b5d$export$bb646b20bb93d339; }, function (v) { return $93509171e9f96b5d$export$bb646b20bb93d339 = v; });
$parcel$export($93509171e9f96b5d$exports, "contextMenu_content", function () { return $93509171e9f96b5d$export$545187d680fb3bce; }, function (v) { return $93509171e9f96b5d$export$545187d680fb3bce = v; });
$parcel$export($93509171e9f96b5d$exports, "contextMenu_blocInput", function () { return $93509171e9f96b5d$export$611455ef14a12093; }, function (v) { return $93509171e9f96b5d$export$611455ef14a12093 = v; });
var $93509171e9f96b5d$export$c8e8069ed9c86e3d;
var $93509171e9f96b5d$export$6bd0430c083ef3cf;
var $93509171e9f96b5d$export$80cd3f47130f5b35;
var $93509171e9f96b5d$export$306af2bd63798f3d;
var $93509171e9f96b5d$export$218b899e1d476006;
var $93509171e9f96b5d$export$b82da7a6a828be37;
var $93509171e9f96b5d$export$bb646b20bb93d339;
var $93509171e9f96b5d$export$545187d680fb3bce;
var $93509171e9f96b5d$export$611455ef14a12093;
$93509171e9f96b5d$export$c8e8069ed9c86e3d = "_UI_body_2ee2f9";
$93509171e9f96b5d$export$6bd0430c083ef3cf = "_guides_2ee2f9";
$93509171e9f96b5d$export$80cd3f47130f5b35 = "_guides_pseudoEL_2ee2f9";
$93509171e9f96b5d$export$306af2bd63798f3d = "_UI_guides__container_2ee2f9";
$93509171e9f96b5d$export$218b899e1d476006 = "_contextMenu_2ee2f9";
$93509171e9f96b5d$export$b82da7a6a828be37 = "_close_contextMenu_2ee2f9";
$93509171e9f96b5d$export$bb646b20bb93d339 = "_cross_2ee2f9";
$93509171e9f96b5d$export$545187d680fb3bce = "_contextMenu_content_2ee2f9";
$93509171e9f96b5d$export$611455ef14a12093 = "_contextMenu_blocInput_2ee2f9";


var $1e812745baee1e97$export$69e780ca9f7a6d74 = /*#__PURE__*/ function() {
    "use strict";
    function $1e812745baee1e97$export$69e780ca9f7a6d74() {
        $iwYpZ$swchelpers.classCallCheck(this, $1e812745baee1e97$export$69e780ca9f7a6d74);
        this.dragEvent = new $baf7081dc7041035$export$6dbaf1fff660fe95();
    }
    $iwYpZ$swchelpers.createClass($1e812745baee1e97$export$69e780ca9f7a6d74, [
        {
            key: "get_guides",
            value: function get_guides(e, direction, color, thickness) {
                var nbGuides = 0;
                !document.querySelectorAll('[data-type="guides"]').length ? nbGuides = 0 : nbGuides = document.querySelectorAll('[data-type="guides"]').length;
                var offsetBy = "";
                var position = 0;
                var stylesSpan_Axis = {
                };
                direction === "X" ? offsetBy = "top" : offsetBy = "left";
                direction === "X" ? position = e.pageY : position = e.pageX;
                direction === "X" ? stylesSpan_Axis = $069ff03ea42df4f6$export$bcbbd831497ce88.span_axis_X(e.pageY, color, 1) : stylesSpan_Axis = $069ff03ea42df4f6$export$bcbbd831497ce88.span_axis_Y(e.pageX, color, 1);
                var el_STRING = "<span\n        class=\"".concat((/*@__PURE__*/$parcel$interopDefault($93509171e9f96b5d$exports)).guides, "\"\n        style=\"").concat(stylesSpan_Axis, "\"\n        data-type=\"guides\"\n        data-direction=\"").concat(direction, "\"\n        data-offsetby=\"").concat(offsetBy, "\"\n        data-count=\"").concat(nbGuides++, "\"\n        data-position=\"").concat(position, "\"\n        data-current=\"true\"\n        data-height=\"1\"></span>\n      >");
                return el_STRING;
            }
        },
        {
            key: "addTerminal",
            value: function addTerminal(item, color) {
                var axis = item.dataset.direction;
                var styles_PseudoEl_Axis = {
                    before: "",
                    after: ""
                };
                if (axis === "X") {
                    styles_PseudoEl_Axis.before = $069ff03ea42df4f6$export$bcbbd831497ce88.span_pseudoEl_X_before(color);
                    styles_PseudoEl_Axis.after = $069ff03ea42df4f6$export$bcbbd831497ce88.span_pseudoEl_X_after(color);
                } else {
                    styles_PseudoEl_Axis.before = $069ff03ea42df4f6$export$bcbbd831497ce88.span_pseudoEl_Y_before(color);
                    styles_PseudoEl_Axis.after = $069ff03ea42df4f6$export$bcbbd831497ce88.span_pseudoEl_Y_after(color);
                }
                var pseudoEl = {
                    before: $08a7d5afccd80df8$export$adc6d72e517d4e6a("<span\n          class=\"".concat((/*@__PURE__*/$parcel$interopDefault($93509171e9f96b5d$exports)).guides_pseudoEL, "\"\n          data-type=\"terminal\" \n          data-direction=\"").concat(axis, "\" \n          data-el=\"before\"\n          style=\"").concat(styles_PseudoEl_Axis.before, "\">\n        </span>")),
                    after: $08a7d5afccd80df8$export$adc6d72e517d4e6a("<span \n          class=\"".concat((/*@__PURE__*/$parcel$interopDefault($93509171e9f96b5d$exports)).guides_pseudoEL, "\"\n          data-type=\"terminal\"\n          data-direction=\"").concat(axis, "\"\n          data-el=\"after\"\n          style=\"").concat(styles_PseudoEl_Axis.after, "\">\n        </span>"))
                };
                return pseudoEl;
            }
        },
        {
            key: "get_UI",
            value: function get_UI() {
                var UI = $08a7d5afccd80df8$export$adc6d72e517d4e6a("<div class=\"".concat((/*@__PURE__*/$parcel$interopDefault($93509171e9f96b5d$exports)).UI_guides__container, "\" data-type=\"UI\">\n      <label>X || Y</label>\n      <input id=\"log_guides\" value=\"0\" />\n    </div>"));
                var inputChange = UI.querySelector("input");
                return [
                    UI,
                    inputChange
                ];
            }
        },
        {
            key: "get_contextMenu",
            value: function get_contextMenu(e1) {
                var _this = this, _this1 = this;
                $08a7d5afccd80df8$export$84a19d80a0fc97e6('[data-type="contextmenu"]');
                var X = e1.pageX > window.innerWidth - 100 ? "".concat(e1.pageX - 150, "px") : "".concat(e1.pageX, "px");
                var Y = e1.pageY > window.innerHeight - 80 ? "".concat(e1.pageY - 80, "px") : "".concat(e1.pageY, "px");
                var el_STRING = $08a7d5afccd80df8$export$adc6d72e517d4e6a("<section class=\"".concat((/*@__PURE__*/$parcel$interopDefault($93509171e9f96b5d$exports)).contextMenu, "\"\n        style=\"").concat($069ff03ea42df4f6$export$bcbbd831497ce88.contextMenu(X, Y), "\"  \n        data-type=\"contextmenu\"\n        draggable=\"true\"\n        >\n        <header>\n          <label>Guides</label>\n          <div class=\"").concat((/*@__PURE__*/$parcel$interopDefault($93509171e9f96b5d$exports)).close_contextMenu, "\"\n            data-action=\"close_context_menu\">\n            <span class=\"").concat((/*@__PURE__*/$parcel$interopDefault($93509171e9f96b5d$exports)).cross, "\"></span> \n            <span class=\"").concat((/*@__PURE__*/$parcel$interopDefault($93509171e9f96b5d$exports)).cross, "\"></span> \n          </div>\n        </header>\n        <div class=\"").concat((/*@__PURE__*/$parcel$interopDefault($93509171e9f96b5d$exports)).contextMenu_content, "\">\n          <div class=\"").concat((/*@__PURE__*/$parcel$interopDefault($93509171e9f96b5d$exports)).contextMenu_blocInput, "\">\n            <input type=\"button\" id=\"del_guides\" value=\"delete\" data-action=\"delete_guides\"/>\n            <label for=\"del_guides\">\n              <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" viewBox=\"0 0 1000 1000\" enable-background=\"new 0 0 1000 1000\" xml:space=\"preserve\">\n                <g><path d=\"M723.9,976H276c-61.8,0-112-50.1-112-111.8V276c0-15.5,12.6-28,28-28s28,12.5,28,28v588.2c0,30.7,25.1,55.8,56,55.8h447.9c30.9,0,56.1-25,56.1-55.8V276c0-15.5,12.6-28,28-28c15.4,0,28,12.5,28,28v588.2C836,925.9,785.7,976,723.9,976z\"/><path d=\"M640,808c-15.4,0-28-12.5-28-28V388c0-15.5,12.6-28,28-28c15.5,0,28,12.5,28,28v392C668,795.5,655.4,808,640,808z M500,808c-15.4,0-28-12.5-28-28V388c0-15.5,12.6-28,28-28c15.4,0,28,12.5,28,28v392C528,795.5,515.4,808,500,808z M360,808c-15.5,0-28-12.5-28-28V388c0-15.5,12.5-28,28-28s28,12.5,28,28v392C388,795.5,375.4,808,360,808z M962,220H38c-15.4,0-28-12.5-28-28c0-15.5,12.5-28,28-28h266v-55.9c0-46.4,37.8-84.1,84.2-84.1h223.5c46.5,0,84.2,37.7,84.2,84.1V164h266c15.4,0,28,12.5,28,28C990,207.5,977.4,220,962,220z M360,164h280v-55.9c0-15.5-12.7-28.1-28.2-28.1H388.2c-15.6,0-28.2,12.6-28.2,28.1V164z\"/></g>\n              </svg>\n            </label> \n          </div>\n          <hr>\n          <div class=\"").concat((/*@__PURE__*/$parcel$interopDefault($93509171e9f96b5d$exports)).contextMenu_blocInput, "\">\n            <input type=\"number\" min=\"1\" max=\"500\" max=\"500\" value=\"1\" data-action=\"change_thickness\">\n            <label style=\"").concat($069ff03ea42df4f6$export$bcbbd831497ce88.trash_icon, "\" for=\"del_guides\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 68.96 75.21\"><defs><style>.cls-1{fill:#231f20;}.cls-2{fill:#088c44;}</style></defs><title>icon_thickness</title><g id=\"Calque_2\" data-name=\"Calque 2\"><g id=\"Calque_1-2\" data-name=\"Calque 1\"><path class=\"cls-1\" d=\"M66.54,26.3,2.49,26c-3.22,0-3.22,5,0,5l64.05.26c3.22,0,3.22-5,0-5Z\"/><path class=\"cls-1\" d=\"M66.47,44.9,2.41,44.64c-3.21,0-3.22,5,0,5l64.06.26c3.22,0,3.22-5,0-5Z\"/><path class=\"cls-1\" d=\"M32.78,2.41l-.07,17.1c0,3.22,5,3.22,5,0l.07-17.1c0-3.21-5-3.22-5,0Z\"/><path class=\"cls-2\" d=\"M39.77,16.34l-4.56,3.17\"/><path class=\"cls-1\" d=\"M38.51,14.18,34,17.35a2.56,2.56,0,0,0-.9,3.42,2.53,2.53,0,0,0,3.42.9L41,18.5a2.56,2.56,0,0,0,.9-3.42,2.52,2.52,0,0,0-3.42-.9Z\"/><path class=\"cls-1\" d=\"M37,17.74l-4.27-3.55a2.57,2.57,0,0,0-3.53,0,2.52,2.52,0,0,0,0,3.54l4.26,3.55a2.58,2.58,0,0,0,3.54,0,2.53,2.53,0,0,0,0-3.54Z\"/><path class=\"cls-1\" d=\"M37.42,72.8l.33-17.09c.06-3.22-4.94-3.22-5,0L32.42,72.8c-.06,3.22,4.94,3.22,5,0Z\"/><path class=\"cls-2\" d=\"M30.64,58.8l4.61-3.09\"/><path class=\"cls-1\" d=\"M31.91,61l4.6-3.09a2.56,2.56,0,0,0,.9-3.42,2.52,2.52,0,0,0-3.42-.9l-4.61,3.1a2.55,2.55,0,0,0-.89,3.42,2.52,2.52,0,0,0,3.42.89Z\"/><path class=\"cls-1\" d=\"M33.48,57.48l4.22,3.61a2.56,2.56,0,0,0,3.53,0,2.53,2.53,0,0,0,0-3.54L37,53.94a2.56,2.56,0,0,0-3.54,0,2.53,2.53,0,0,0,0,3.54Z\"/></g></g></svg>\n           </label> \n          </div>\n          <hr>\n          <div class=\"").concat((/*@__PURE__*/$parcel$interopDefault($93509171e9f96b5d$exports)).contextMenu_blocInput, "\">\n            <input      \n              type=\"color\" data-action=\"changeColor_guides\" value=\"#ff0000\"\n            />          \n          </div>\n        </div>\n      </section>"));
                var interactionElement = {
                    close_contextMenu: el_STRING.querySelector('[data-action="close_context_menu"]'),
                    change_thickness: el_STRING.querySelector('[data-action="change_thickness"]'),
                    deleteBtn: el_STRING.querySelector('[data-action="delete_guides"]'),
                    changeColor: el_STRING.querySelector('[data-action="changeColor_guides"]')
                };
                el_STRING.addEventListener("dragstart", function(e) {
                    _this.dragEvent.dragStart(e);
                });
                el_STRING.addEventListener("dragend", function(e) {
                    _this1.dragEvent.dragEnd(e, el_STRING);
                });
                return [
                    el_STRING,
                    interactionElement
                ];
            }
        },
        {
            //Show All Guides in localStorage
            key: "deployStorage",
            value: function deployStorage(items, color) {
                if (items) {
                    var el_STRING = [];
                    var nbGuides = 0;
                    items.forEach(function(item) {
                        var stylesSpan_Axis = {
                        };
                        item.direction === "X" ? item.offsetBy = "top" : item.offsetBy = "left";
                        item.direction === "X" ? stylesSpan_Axis = $069ff03ea42df4f6$export$bcbbd831497ce88.span_axis_X(item.position, color, item.height) : stylesSpan_Axis = $069ff03ea42df4f6$export$bcbbd831497ce88.span_axis_Y(item.position, color, item.height);
                        el_STRING.push("<span\n            class=\"".concat((/*@__PURE__*/$parcel$interopDefault($93509171e9f96b5d$exports)).guides, "\"\n            style=\"").concat(stylesSpan_Axis, "\"\n            data-type=\"guides\"\n            data-direction=\"").concat(item.direction, "\"\n            data-offsetBy=\"").concat(item.offsetBy, "\"\n            data-count=\"").concat(nbGuides++, "\"\n            data-position=\"").concat(item.position, "\"\n            data-height=\"").concat(item.height, "\"\n          >\n          </span>"));
                    });
                    return el_STRING;
                }
            }
        }
    ]);
    return $1e812745baee1e97$export$69e780ca9f7a6d74;
}();




var $7759ad9a051faebd$export$191e63b17214d70d = /*#__PURE__*/ function() {
    "use strict";
    function $7759ad9a051faebd$export$191e63b17214d70d() {
        $iwYpZ$swchelpers.classCallCheck(this, $7759ad9a051faebd$export$191e63b17214d70d);
        this.currentStorage = [];
        this.UI_body = document.getElementById("UI_body");
    }
    $iwYpZ$swchelpers.createClass($7759ad9a051faebd$export$191e63b17214d70d, [
        {
            key: "manage",
            value: function manage(target) {
                // debugger
                switch(target){
                    case "guides":
                        var _this = this;
                        if (localStorage.getItem("guides")) localStorage.clear();
                        var allGuides = this.UI_body.querySelectorAll('[data-type="guides"]');
                        this.currentStorage = [];
                        allGuides.forEach(function(item) {
                            _this.currentStorage.push(item.dataset);
                        });
                        localStorage.setItem("guides", JSON.stringify(this.currentStorage));
                        break;
                }
            }
        }
    ]);
    return $7759ad9a051faebd$export$191e63b17214d70d;
}();


var $8c4157cb11a74ad2$export$79bc953678f776f7 = /*#__PURE__*/ function() {
    "use strict";
    function $8c4157cb11a74ad2$export$79bc953678f776f7() {
        var _this8 = this, _this1 = this, _this2 = this, _this3 = this, _this4 = this;
        $iwYpZ$swchelpers.classCallCheck(this, $8c4157cb11a74ad2$export$79bc953678f776f7);
        this.ctrlKey = null;
        this.shiftKey = null;
        this.controlUser = {
            grab: null,
            move: null,
            hover: null
        };
        this.currentItem = "";
        this.currentStorage = [];
        this.currentColor = "#FF0000";
        this.showGuides = false;
        this.showContextMenu = false;
        this.UI_body = document.getElementById("UI_body");
        this.create = new $1e812745baee1e97$export$69e780ca9f7a6d74();
        this.manageStorage = new $7759ad9a051faebd$export$191e63b17214d70d();
        //Catch event press key
        document.addEventListener("keydown", function(e) {
            e.ctrlKey && (_this8.ctrlKey = true);
            e.shiftKey && (_this8.shiftKey = true);
            if (_this8.ctrlKey === true && _this8.shiftKey === true) {
                if (_this8.showGuides) _this8.switch_UI("hidden");
                else _this8.switch_UI("show");
            }
        });
        /** When keyControlas null , can't add guides */ document.addEventListener("keyup", function(e) {
            _this1.ctrlKey = false;
            _this1.shiftKey = false;
            _this1.deleteKey = false;
        });
        /**
     * Trigger addGuides if shift or ctrl as pressed
     * Define the current direction X OR Y
     */ document.addEventListener("mousedown", function(e) {
            //this.showGuides = true;
            _this2.ctrlKey && _this2.add_guides(e, "X");
            _this2.shiftKey && _this2.add_guides(e, "Y");
            if (document.querySelectorAll('[data-type="guides"]').length) _this2.switch_UI("show");
            _this2.ctrlKey = false;
            _this2.shiftKey = false;
        });
        document.addEventListener("mouseup", function(e) {
        });
        /** this event is only triggered when the user maintains
     *  the right click on a mark and performs a movement with the mouse */ document.addEventListener("mousemove", $08a7d5afccd80df8$export$61fc7d43ac8f84b0(function(e) {
            e.preventDefault();
            if (_this3.controlUser.grab && _this3.controlUser.move) {
                if (_this3.currentItem.dataset.direction === "X") {
                    _this3.currentItem.style.top = e.pageY + "px";
                    _this3.currentItem.dataset.position = e.pageY;
                    _this3.inputEl.value = e.pageY;
                } else if (_this3.currentItem.dataset.direction === "Y") {
                    _this3.currentItem.style.left = e.pageX + "px";
                    _this3.currentItem.dataset.position = e.pageX;
                    _this3.inputEl.value = e.pageX;
                }
            }
        }), 300);
        this.UI_body.addEventListener("contextmenu", function(e1) {
            if (_this4.controlUser.hover) {
                var _this = _this4, _this5 = _this4, _this6 = _this4, _this7 = _this4;
                e1.preventDefault();
                _this4.getContextMenu = _this4.create.get_contextMenu(e1);
                _this4.showContextMenu = true;
                _this4.contextMenu = _this4.getContextMenu[0];
                _this4.interactiveElement = _this4.getContextMenu[1];
                _this4.UI_body.insertAdjacentElement("afterBegin", _this4.contextMenu);
                _this4.interactiveElement.change_thickness.value = _this4.currentItem.dataset.height;
                //add event for interactive of contextMenu
                _this4.interactiveElement.deleteBtn.addEventListener("click", function(e) {
                    _this.deleteGuides();
                });
                _this4.interactiveElement.change_thickness.addEventListener("change", function(e) {
                    _this5.changeThickness(e);
                });
                _this4.interactiveElement.changeColor.addEventListener("change", function(e) {
                    _this6.changeColor_guides(e);
                });
                _this4.interactiveElement.close_contextMenu.addEventListener("click", function(e) {
                    _this7.contextMenu.remove();
                });
            }
        });
        //localStorage.clear()
        this.injectGuidesInStorage();
    }
    $iwYpZ$swchelpers.createClass($8c4157cb11a74ad2$export$79bc953678f776f7, [
        {
            /****************************************/ /****************************************/ /*****       GUIDES  METHOD         *****/ /****************************************/ /****************************************/ /**
   * @param {*} e
   * @param {string} direction
   */ key: "add_guides",
            value: function add_guides(e, direction) {
                if (direction === "X" || direction === "Y") {
                    var elHtml = $08a7d5afccd80df8$export$adc6d72e517d4e6a(this.create.get_guides(e, direction, this.currentColor, 1));
                    this.UI_body.insertAdjacentElement("afterBegin", elHtml);
                    this.addGuidesEvent(elHtml);
                    this.currentItem = elHtml;
                    document.querySelectorAll('[data-type="guides"]').length === 1 && this.addUI();
                    this.inputEl.value = this.currentItem.dataset.position;
                    //storage
                    this.manageStorage.manage("guides");
                    this.defineTerminal(this.currentItem);
                }
            }
        },
        {
            /**
   * @param {HTML_element} item
   */ key: "addGuidesEvent",
            value: function addGuidesEvent(item) {
                var _this = this, _this9 = this, _this10 = this, _this11 = this;
                // Mouse grab
                item.addEventListener("mouseover", function(e) {
                    item.style.cursor = "pointer";
                    _this.controlUser.grab = true;
                    _this.controlUser.hover = true;
                });
                // Mouse Down
                item.addEventListener("mousedown", function(e) {
                    e.preventDefault();
                    _this9.currentItem = item;
                    _this9.inputEl.value = item.dataset.position;
                    _this9.inputEl.focus();
                    if (_this9.showContextMenu) _this9.interactiveElement.change_thickness.value = item.dataset.height;
                    if (_this9.controlUser.grab) {
                        _this9.controlUser.move = true;
                        _this9.currentItem = item;
                        _this9.defineTerminal(item);
                    }
                });
                //Mouse Out
                item.addEventListener("mouseout", function(e) {
                    _this10.controlUser.hover = null;
                    if (_this10.controlUser.grab && _this10.controlUser.move) _this10.controlUser.move = true;
                });
                //Mouse up , cancel mouvement of guides
                item.addEventListener("mouseup", $08a7d5afccd80df8$export$61fc7d43ac8f84b0(function(e) {
                    _this11.controlUser.grab = null;
                    _this11.controlUser.move = null;
                    _this11.manageStorage.manage("guides");
                }), 300);
            }
        },
        {
            key: "changeGuidesPosition",
            value: //Event for User Interface
            //Changes guides position by mouse move
            function changeGuidesPosition(e) {
                var initialValue = parseInt(e.target.value);
                var direction = this.currentItem.dataset.direction;
                this.currentItem.dataset.position = initialValue;
                this.inputEl.value = initialValue + "px";
                direction === "X" ? this.currentItem.style.top = initialValue + "px" : this.currentItem.style.left = initialValue + "px";
            }
        },
        {
            key: "injectGuidesInStorage",
            value: function injectGuidesInStorage() {
                if (localStorage.getItem("guides")) {
                    var _this = this, _this12 = this;
                    var res = JSON.parse(localStorage.getItem("guides"));
                    this.currentStorage = [];
                    res.forEach(function(item) {
                        _this.currentStorage.push(item);
                    });
                    var guidesCollection = this.create.deployStorage(this.currentStorage, this.currentColor);
                    var injectEl = "";
                    guidesCollection.forEach(function(item, key) {
                        injectEl = $08a7d5afccd80df8$export$adc6d72e517d4e6a(item);
                        _this12.addGuidesEvent(injectEl);
                        _this12.UI_body.insertAdjacentElement("afterBegin", injectEl);
                        injectEl.style.background = _this12.makeGradient(injectEl.dataset.direction, _this12.currentColor, injectEl.dataset.height);
                    });
                    var currentIndex = guidesCollection.length - 1;
                    this.currentItem = $08a7d5afccd80df8$export$adc6d72e517d4e6a(guidesCollection[currentIndex]);
                    this.addUI();
                    var allGuides = document.querySelectorAll('[data-type="guides"]');
                    var lastIndex = allGuides.length - 1;
                    this.defineTerminal(allGuides[lastIndex]);
                }
            }
        },
        {
            /****************************************/ /****************************************/ /****       GUIDES UI Method         ****/ /****************************************/ /****************************************/ key: "addUI",
            value: function addUI() {
                var getUI = this.create.get_UI();
                this.UI_body.insertAdjacentElement("afterBegin", getUI[0]);
                this.initUI_event(getUI[1]);
                if (this.currentItem !== "") this.inputEl.value = this.currentItem.dataset.position;
            }
        },
        {
            key: "initUI_event",
            value: function initUI_event(item) {
                var _this = this, _this13 = this;
                //Cursor position, display in UI
                this.inputEl = item;
                this.inputEl.addEventListener("change", function(e) {
                    _this.changeGuidesPosition(e);
                });
                this.inputEl.addEventListener("keydown", function(e) {
                    _this13.changeGuidesPositionByKeys(e);
                });
            }
        },
        {
            //Changes guides position with keyboard arrow
            key: "changeGuidesPositionByKeys",
            value: function changeGuidesPositionByKeys(e) {
                var intValue = parseInt(e.target.value);
                var direction = this.currentItem.dataset.direction;
                if (e.key === "ArrowUp") {
                    intValue++;
                    this.inputEl.value = intValue;
                }
                if (e.key === "ArrowDown") {
                    intValue--;
                    this.inputEl.value = intValue;
                }
                this.currentItem.dataset.position = intValue;
                direction === "X" ? this.currentItem.style.top = intValue + "px" : this.currentItem.style.left = intValue + "px";
            }
        },
        {
            /****************************************/ /****************************************/ /****       TERMINAL METHOD         *****/ /****************************************/ /****************************************/ /**
   * @param {HTML_element} item
   */ key: "defineTerminal",
            value: function defineTerminal(item) {
                this.showContextMenu;
                this.removeTerminal();
                var el = this.create.addTerminal(item, this.currentColor);
                item.insertAdjacentElement("afterBegin", el.after);
                item.insertAdjacentElement("afterBegin", el.before);
            }
        },
        {
            key: "removeTerminal",
            value: function removeTerminal() {
                var terminals = document.querySelectorAll('[data-type="terminal"]');
                terminals.forEach(function(item) {
                    item.remove();
                });
            }
        },
        {
            /****************************************/ /****************************************/ /****      CONTEXT MENU METHOD      *****/ /****************************************/ /****************************************/ key: "deleteGuides",
            value: function deleteGuides() {
                this.controlUser.grab && this.currentItem.remove();
                this.currentItem.remove();
                this.manageStorage.manage("guides");
                if (document.querySelectorAll("[data-type='guides']").length) {
                    var allGuides = document.querySelectorAll('[data-type="guides"]');
                    var lastIndex = allGuides.length - 1;
                    this.currentItem = allGuides[lastIndex];
                    this.defineTerminal(this.currentItem);
                }
                //If the last guides as delete
                if (!document.querySelectorAll('[data-type="guides"]').length) {
                    //Remove storage
                    var UI = document.querySelector('[data-type="UI"]');
                    UI.remove();
                    localStorage.removeItem("guides");
                }
            //Check if user exprience is good
            //this.contextMenu.remove();
            }
        },
        {
            key: "changeThickness",
            value: function changeThickness(e) {
                var direction = this.currentItem.dataset.offsetby;
                var newVal = e.target.value;
                var newThickness = 4 + parseInt(e.target.value);
                var newGradient = "linear-gradient(\n    to ".concat(direction, ",\n    transparent 3px, \n    ").concat(this.currentColor, " 3px,\n    ").concat(this.currentColor, " ").concat(parseInt(newVal) + 3, "px,\n    transparent ").concat(parseInt(newVal) + 3, "px ,\n    transparent ").concat(parseInt(newVal) + 5, "px)");
                this.currentItem.dataset.height = newVal;
                this.currentItem.style.background = newGradient;
                direction === "top" ? this.currentItem.style.height = "".concat(parseInt(newThickness), "px") : this.currentItem.style.width = "".concat(newThickness, "px");
                this.manageStorage.manage("guides");
            }
        },
        {
            key: "changeColor_guides",
            value: function changeColor_guides(e) {
                var _this = this, _this14 = this;
                var guidesCollection = document.querySelectorAll('[data-type="guides"]');
                this.currentColor = e.target.value;
                guidesCollection.forEach(function(item) {
                    item.style.background = _this.makeGradient(item.dataset.offsetby, _this.currentColor, item.dataset.height);
                });
                var terminals = document.querySelectorAll('[data-type="terminal"]');
                terminals.forEach(function(item) {
                    var borderType = "";
                    if (item.dataset.direction === "X") {
                        if (item.dataset.el === "before") borderType = "left";
                        else if (item.dataset.el === "after") borderType = "right";
                    } else if (item.dataset.direction === "Y") {
                        if (item.dataset.el === "before") borderType = "top";
                        else if (item.dataset.el === "after") borderType = "bottom";
                    }
                    var constructRules = "border-".concat(borderType);
                    item.style[constructRules] = "8px solid ".concat(_this14.currentColor);
                });
            }
        },
        {
            /****************************************/ /****************************************/ /****      UTILS METHOD             *****/ /****************************************/ /****************************************/ key: "makeGradient",
            value: function makeGradient(direction, color, thickness) {
                var gradient = "transparent 3px, \n  ".concat(color, " 3px,\n  ").concat(color, " ").concat(parseInt(thickness) + 3, "px,\n  transparent ").concat(parseInt(thickness) + 3, "px ,\n  transparent ").concat(parseInt(thickness) + 5, "px");
                return "linear-gradient(to ".concat(direction, ", ").concat(gradient, ")");
            }
        },
        {
            key: "switch_UI",
            value: function switch_UI(action) {
                if (action === "hidden") {
                    this.showGuides = false;
                    this.UI_body.style.display = "none";
                } else if (action === "show") {
                    this.showGuides = true;
                    this.UI_body.style.display = "flex";
                }
            }
        }
    ]);
    return $8c4157cb11a74ad2$export$79bc953678f776f7;
}();


var $d9e945ab9c3f9853$export$c8e8069ed9c86e3d;
$d9e945ab9c3f9853$export$c8e8069ed9c86e3d = "_UI_body_66627d";


if (null) null.accept(function() {
    window.location.reload();
});
new $f3f86e883dc3cb37$export$4b08aed5f1ec6952();
new $8c4157cb11a74ad2$export$79bc953678f776f7();


//# sourceMappingURL=index.js.map
