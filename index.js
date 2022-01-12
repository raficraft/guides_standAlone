require("./index.css");
var $iwYpZ$swchelpers = require("@swc/helpers");

var $d9e945ab9c3f9853$export$c8e8069ed9c86e3d;
$d9e945ab9c3f9853$export$c8e8069ed9c86e3d = "_UI_body_66627d";



var $553c72c17236c2cd$export$c8e8069ed9c86e3d;
var $553c72c17236c2cd$export$34e0f9847d4c02dd;
var $553c72c17236c2cd$export$5e412469363e377d;
var $553c72c17236c2cd$export$89da14300d534261;
$553c72c17236c2cd$export$c8e8069ed9c86e3d = "_UI_body_640a62";
$553c72c17236c2cd$export$34e0f9847d4c02dd = "_container_640a62";
$553c72c17236c2cd$export$5e412469363e377d = "_menu_content_640a62";
$553c72c17236c2cd$export$89da14300d534261 = "_active_640a62";



var $08a7d5afccd80df8$export$adc6d72e517d4e6a = function(htmlString) {
    var div = document.createElement("div");
    div.innerHTML = htmlString.trim(); // Change this to div.childNodes to support multiple top-level nodes
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
        for(var key in css)if (Object.hasOwnProperty.call(css, key)) {
            var element = css[key]; //define new styles
            el.style[key] = element;
        }
    });
    el.addEventListener(reset, function(e) {
        if (preventDefault) e.preventDefault();
         // replace all initial css properties
        el.style.cssText = initialCss;
        if (next) {
            for(var key in next)if (Object.hasOwnProperty.call(next, key)) {
                var element = next[key]; //define new styles if element is hover
                el.style[key] = element;
            }
        }
    });
};


var $f3f86e883dc3cb37$var$icon = "<svg version=\"1.1\" id=\"Calque_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\nviewBox=\"0 0 1000 1000\" style=\"enable-background:new 0 0 1000 1000;\" xml:space=\"preserve\">\n<g>\n<path d=\"M500,240.6c-76.1,0-138.4,62.3-138.4,138.4S423.9,517.4,500,517.4S638.4,455.1,638.4,379\n C638.4,302.8,576.1,240.6,500,240.6z M500,471.2c-50.7,0-92.2-41.5-92.2-92.2s41.5-92.2,92.2-92.2s92.2,41.5,92.2,92.2\n S550.7,471.2,500,471.2z M868.9,378.9C868.9,176,702.9,10,500,10S131.1,176,131.1,378.9c0,87.6,30,168.3,80.7,230.6l0,0l249,359.7\n C470,983,483.9,990,497.7,990s27.7-6.9,36.9-20.8l253.6-359.7l0,0C839,547.3,868.9,466.6,868.9,378.9z M746.7,586.5L500,943.9\n L253.3,586.5c-2.3-2.3-2.3-4.6-4.6-6.9C202.6,522,177.2,452.8,177.2,379c0-177.6,145.3-322.8,322.8-322.8\n c177.6,0,322.8,145.3,322.8,322.8c0,73.8-25.4,143-71.5,200.6C749,581.9,749,584.2,746.7,586.5z\"/>\n</g>\n</svg>";
var $f3f86e883dc3cb37$export$4b08aed5f1ec6952 = /*#__PURE__*/ function() {
    "use strict";
    function $f3f86e883dc3cb37$export$4b08aed5f1ec6952() {
        $iwYpZ$swchelpers.classCallCheck(this, $f3f86e883dc3cb37$export$4b08aed5f1ec6952);
        this.UI_body();
    }
    $iwYpZ$swchelpers.createClass($f3f86e883dc3cb37$export$4b08aed5f1ec6952, [
        {
            key: "UI_body",
            value: function UI_body() {
                // Add Terminal view, for inject all HTML element for the project.
                this.UI = $08a7d5afccd80df8$export$adc6d72e517d4e6a("<section id=\"UI_body\" class=\"".concat($553c72c17236c2cd$export$c8e8069ed9c86e3d, "\"></section>"));
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


var $93509171e9f96b5d$export$6bd0430c083ef3cf;
var $93509171e9f96b5d$export$80cd3f47130f5b35;
var $93509171e9f96b5d$export$306af2bd63798f3d;
var $93509171e9f96b5d$export$218b899e1d476006;
var $93509171e9f96b5d$export$b82da7a6a828be37;
var $93509171e9f96b5d$export$bb646b20bb93d339;
var $93509171e9f96b5d$export$545187d680fb3bce;
var $93509171e9f96b5d$export$611455ef14a12093;
$93509171e9f96b5d$export$6bd0430c083ef3cf = "_guides_2ee2f9";
$93509171e9f96b5d$export$80cd3f47130f5b35 = "_guides_pseudoEL_2ee2f9";
$93509171e9f96b5d$export$306af2bd63798f3d = "_UI_guides__container_2ee2f9";
$93509171e9f96b5d$export$218b899e1d476006 = "_contextMenu_2ee2f9";
$93509171e9f96b5d$export$b82da7a6a828be37 = "_close_contextMenu_2ee2f9";
$93509171e9f96b5d$export$bb646b20bb93d339 = "_cross_2ee2f9";
$93509171e9f96b5d$export$545187d680fb3bce = "_contextMenu_content_2ee2f9";
$93509171e9f96b5d$export$611455ef14a12093 = "_contextMenu_blocInput_2ee2f9";




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
                var el_STRING = "<span\n        class=\"".concat($93509171e9f96b5d$export$6bd0430c083ef3cf, "\"\n        style=\"").concat(stylesSpan_Axis, "\"\n        data-type=\"guides\"\n        data-direction=\"").concat(direction, "\"\n        data-offsetby=\"").concat(offsetBy, "\"\n        data-count=\"").concat(nbGuides++, "\"\n        data-position=\"").concat(position, "\"\n        data-current=\"true\"\n        data-height=\"1\"></span>\n      >");
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
                    before: $08a7d5afccd80df8$export$adc6d72e517d4e6a("<span\n          class=\"".concat($93509171e9f96b5d$export$80cd3f47130f5b35, "\"\n          data-type=\"terminal\" \n          data-direction=\"").concat(axis, "\" \n          data-el=\"before\"\n          style=\"").concat(styles_PseudoEl_Axis.before, "\">\n        </span>")),
                    after: $08a7d5afccd80df8$export$adc6d72e517d4e6a("<span \n          class=\"".concat($93509171e9f96b5d$export$80cd3f47130f5b35, "\"\n          data-type=\"terminal\"\n          data-direction=\"").concat(axis, "\"\n          data-el=\"after\"\n          style=\"").concat(styles_PseudoEl_Axis.after, "\">\n        </span>"))
                };
                return pseudoEl;
            }
        },
        {
            key: "get_contextMenu",
            value: function get_contextMenu(e1) {
                var _this = this, _this1 = this;
                $08a7d5afccd80df8$export$84a19d80a0fc97e6('[data-type="contextmenu"]');
                var X = e1.pageX > window.innerWidth - 100 ? "".concat(e1.pageX - 150, "px") : "".concat(e1.pageX, "px");
                var Y = e1.pageY > window.innerHeight - 200 ? "".concat(e1.pageY - 200, "px") : "".concat(e1.pageY, "px");
                var el_STRING = $08a7d5afccd80df8$export$adc6d72e517d4e6a("<section \n        id=\"contextMenu\"\n        class=\"".concat($93509171e9f96b5d$export$218b899e1d476006, "\"\n        style=\"").concat($069ff03ea42df4f6$export$bcbbd831497ce88.contextMenu(X, Y), "\"  \n        data-type=\"contextmenu\"\n        draggable=\"true\"\n        >\n        <header>\n          <label>Guides</label>\n          <div class=\"").concat($93509171e9f96b5d$export$b82da7a6a828be37, "\"\n            data-action=\"close_context_menu\">\n            <span class=\"").concat($93509171e9f96b5d$export$bb646b20bb93d339, "\"></span> \n            <span class=\"").concat($93509171e9f96b5d$export$bb646b20bb93d339, "\"></span> \n          </div>\n        </header>\n        <div class=\"").concat($93509171e9f96b5d$export$545187d680fb3bce, "\">\n          <div class=\"").concat($93509171e9f96b5d$export$611455ef14a12093, "\">\n            <input type=\"number\" id=\"position_guides\" name=\"position_guides\" value=\"0\" data-action=\"position_guides\" min=\"0\" max=\"4000\"/>\n            <label for=\"position_guides\">\n              X\n            </label> \n          </div>\n          <hr>\n          <div class=\"").concat($93509171e9f96b5d$export$611455ef14a12093, "\">\n            <input type=\"button\" id=\"del_guides\" name=\"del_guides\" value=\"delete\" data-action=\"delete_guides\"/>\n            <label for=\"del_guides\">\n              <svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\"\n              width=\"1000.000000pt\" height=\"1040.000000pt\" viewBox=\"0 0 1000.000000 1040.000000\"\n              preserveAspectRatio=\"xMidYMid meet\">\n            \n              <g transform=\"translate(0.000000,1040.000000) scale(0.100000,-0.100000)\"\n              fill=\"#000000\" stroke=\"none\">\n              <path d=\"M4465 10090 c-191 -21 -451 -190 -635 -415 -200 -244 -335 -543 -412\n              -907 l-33 -158 -90 0 c-653 -2 -2357 -22 -2454 -30 -184 -14 -223 -28 -297\n              -106 -124 -130 -173 -278 -140 -425 30 -135 121 -256 244 -322 70 -38 152 -45\n              614 -55 207 -4 380 -11 384 -15 4 -4 40 -469 80 -1034 196 -2759 353 -4796\n              404 -5243 24 -209 46 -297 105 -407 137 -260 378 -446 721 -559 297 -98 359\n              -102 1639 -110 948 -7 1929 6 2095 26 413 51 792 246 992 510 60 79 132 223\n              153 305 50 196 139 1318 434 5418 43 598 81 1090 85 1094 4 4 175 11 379 15\n              447 9 540 17 614 54 173 84 283 287 254 470 -13 87 -65 191 -132 267 -60 68\n              -100 90 -189 106 -82 15 -730 30 -1316 31 -248 0 -654 3 -902 7 -392 5 -452 8\n              -452 21 0 36 -75 346 -107 442 -94 281 -258 547 -455 736 -105 101 -176 149\n              -338 230 l-129 64 -523 -1 c-288 -1 -554 -5 -593 -9z m989 -926 c92 -23 201\n              -245 220 -451 l7 -73 -675 0 -676 0 0 69 c0 80 36 215 81 306 53 106 101 146\n              189 157 72 8 816 2 854 -8z m1956 -1557 c0 -210 -368 -5161 -450 -6057 -15\n              -155 -31 -210 -75 -248 -19 -17 -51 -36 -72 -42 -66 -20 -585 -29 -1678 -29\n              -1133 0 -1885 11 -1948 29 -51 15 -101 61 -115 107 -21 71 -32 177 -87 843\n              -102 1243 -371 4900 -391 5318 l-7 142 2411 0 2412 0 0 -63z\"/>\n              <path d=\"M4869 7322 c-73 -37 -86 -68 -99 -218 -13 -153 -13 -1114 0 -3034 11\n              -1596 22 -2285 40 -2430 16 -119 29 -143 98 -171 105 -43 209 -22 280 55 39\n              43 40 45 47 142 16 211 -15 5113 -34 5422 -8 131 -11 146 -35 176 -64 84 -197\n              110 -297 58z\"/>\n              <path d=\"M3622 7319 c-55 -10 -105 -41 -140 -87 l-27 -36 2 -584 c0 -322 6\n              -826 12 -1121 6 -295 20 -979 31 -1521 37 -1865 50 -2285 71 -2362 31 -118\n              190 -181 305 -121 49 26 101 83 110 120 9 33 -2 1457 -16 2143 -40 2001 -69\n              3138 -86 3368 -8 100 -27 133 -99 172 -58 32 -103 40 -163 29z\"/>\n              <path d=\"M6278 7299 c-46 -11 -114 -52 -127 -78 -47 -87 -54 -264 -101 -2626\n              -16 -820 -35 -1722 -41 -2005 -6 -283 -9 -621 -7 -750 3 -222 4 -238 26 -280\n              58 -115 203 -148 327 -75 49 28 71 58 79 106 13 76 40 1068 71 2574 8 402 20\n              973 26 1270 7 297 12 808 13 1136 l1 596 -28 40 c-49 71 -156 112 -239 92z\"/>\n              </g>\n              </svg>\n            </label> \n          </div>\n          <hr>\n          <div class=\"").concat($93509171e9f96b5d$export$611455ef14a12093, "\">\n            <input type=\"number\" min=\"1\" max=\"500\" id=\"thickness_guides\" name=\"thickness_guides\" value=\"1\" data-action=\"change_thickness\">\n            <label for=\"thickness_guides\">\n              <svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\"\n              width=\"225.000000pt\" height=\"225.000000pt\" viewBox=\"0 0 225.000000 225.000000\"\n              preserveAspectRatio=\"xMidYMid meet\">\n\n              <g transform=\"translate(0.000000,225.000000) scale(0.100000,-0.100000)\"\n              fill=\"#000000\" stroke=\"none\">\n              <path d=\"M1088 2111 c-22 -11 -35 -26 -40 -48 -5 -18 -7 -449 -6 -957 3 -911\n              3 -926 23 -945 11 -11 34 -23 52 -27 27 -5 37 -1 63 24 l30 30 0 940 c0 921 0\n              940 -20 964 -25 33 -62 39 -102 19z\"/>\n              <path d=\"M475 1440 l-59 -60 87 -81 c48 -44 87 -85 87 -90 0 -5 -76 -9 -176\n              -9 l-176 0 -29 -29 c-31 -31 -36 -59 -17 -94 23 -44 35 -46 221 -47 97 0 177\n              -3 177 -7 0 -4 -38 -46 -85 -93 l-85 -86 58 -57 57 -57 193 193 192 192 -193\n              193 -192 192 -60 -60z\"/>\n              <path d=\"M1502 1307 l-192 -192 193 -193 192 -192 58 58 57 58 -85 84 c-47 47\n              -85 88 -85 92 0 5 78 8 174 8 170 0 176 1 202 24 39 33 39 89 0 122 -26 23\n              -32 24 -202 24 -96 0 -174 3 -174 7 0 4 38 46 85 93 l85 86 -58 57 -57 57\n              -193 -193z\"/>\n              </g>\n              </svg>   \n            </label> \n          </div>\n          <hr>\n          <div class=\"").concat($93509171e9f96b5d$export$611455ef14a12093, "\">\n            <input      \n              type=\"color\" id=\"change_color\" name=\"change_color\" data-action=\"changeColor_guides\" value=\"#ff0000\"\n            />      \n            <label for=\"change_color\">\n            <svg version=\"1.0\" xmlns=\"http://www.w3.org/2000/svg\"\n              width=\"239.000000pt\" height=\"211.000000pt\" viewBox=\"0 0 239.000000 211.000000\"\n              preserveAspectRatio=\"xMidYMid meet\">\n\n              <g transform=\"translate(0.000000,211.000000) scale(0.100000,-0.100000)\"\n              fill=\"#000000\" stroke=\"none\">\n              <path d=\"M805 2100 c-336 -24 -581 -144 -671 -326 -26 -53 -29 -69 -29 -154 0\n              -83 3 -102 27 -150 15 -31 44 -75 64 -98 l36 -43 -81 -83 c-119 -123 -163\n              -236 -141 -369 20 -127 35 -146 377 -489 342 -343 364 -360 488 -380 44 -8 81\n              -7 126 1 128 22 146 36 509 397 228 227 342 334 357 334 11 0 50 -9 86 -20\n              155 -48 256 -214 257 -425 1 -157 31 -280 67 -273 49 10 87 141 104 361 23\n              313 -17 498 -152 699 -55 82 -195 225 -289 296 -98 75 -268 171 -365 208 -76\n              29 -80 32 -322 269 -134 132 -252 243 -261 247 -20 8 -53 7 -187 -2z m-168\n              -368 l-179 -179 79 -26 c134 -44 111 -54 303 138 l170 170 415 -415 415 -415\n              -387 -387 c-426 -426 -439 -436 -535 -425 -26 3 -58 12 -72 19 -36 19 -591\n              563 -617 604 -32 52 -40 101 -28 163 10 50 19 63 104 150 l92 95 79 -27 c142\n              -46 391 -87 536 -87 39 0 57 -6 80 -25 65 -55 153 -57 212 -5 44 39 60 79 53\n              136 -13 119 -146 177 -249 109 -41 -27 -44 -28 -152 -21 -336 19 -586 110\n              -652 237 -18 36 -18 122 0 158 53 102 278 201 476 210 34 1 30 -3 -143 -177z\"/>\n              </g>\n              </svg>\n            </label>    \n          </div>\n        </div>\n      </section>"));
                var interactionElement = {
                    close_contextMenu: el_STRING.querySelector('[data-action="close_context_menu"]'),
                    change_position: el_STRING.querySelector('[data-action="position_guides"]'),
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
            } //Show All Guides in localStorage
        },
        {
            key: "deployStorage",
            value: function deployStorage(items, color) {
                if (items && localStorage.getItem("guides")) {
                    var el_STRING = [];
                    var nbGuides = 0;
                    items.forEach(function(item) {
                        var stylesSpan_Axis = {
                        };
                        item.direction === "X" ? item.offsetBy = "top" : item.offsetBy = "left";
                        item.direction === "X" ? stylesSpan_Axis = $069ff03ea42df4f6$export$bcbbd831497ce88.span_axis_X(item.position, color, item.height) : stylesSpan_Axis = $069ff03ea42df4f6$export$bcbbd831497ce88.span_axis_Y(item.position, color, item.height);
                        el_STRING.push("<span\n            class=\"".concat($93509171e9f96b5d$export$6bd0430c083ef3cf, "\"\n            style=\"").concat(stylesSpan_Axis, "\"\n            data-type=\"guides\"\n            data-direction=\"").concat(item.direction, "\"\n            data-offsetBy=\"").concat(item.offsetBy, "\"\n            data-count=\"").concat(nbGuides++, "\"\n            data-position=\"").concat(item.position, "\"\n            data-height=\"").concat(item.height, "\"\n          >\n          </span>"));
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
        var _this10 = this, _this1 = this, _this2 = this, _this3 = this, _this4 = this;
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
        this.manageStorage = new $7759ad9a051faebd$export$191e63b17214d70d(); //Catch event press key
        document.addEventListener("keydown", function(e) {
            e.ctrlKey && (_this10.ctrlKey = true);
            e.shiftKey && (_this10.shiftKey = true);
            if (_this10.ctrlKey === true && _this10.shiftKey === true) {
                if (_this10.showGuides) _this10.switch_UI("hidden");
                else _this10.switch_UI("show");
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
            if (document.querySelectorAll('[data-type="guides"]').length && _this2.showGuides) _this2.switch_UI("show");
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
                    if (_this3.showContextMenu) _this3.inputEl.value = e.pageY;
                } else if (_this3.currentItem.dataset.direction === "Y") {
                    _this3.currentItem.style.left = e.pageX + "px";
                    _this3.currentItem.dataset.position = e.pageX;
                    if (_this3.showContextMenu) _this3.inputEl.value = e.pageX;
                }
            }
        }), 300);
        this.UI_body.addEventListener("contextmenu", function(e1) {
            if (_this4.controlUser.hover) {
                var _this = _this4, _this5 = _this4, _this6 = _this4, _this7 = _this4, _this8 = _this4, _this9 = _this4;
                e1.preventDefault();
                _this4.getContextMenu = _this4.create.get_contextMenu(e1);
                _this4.showContextMenu = true;
                _this4.contextMenu = _this4.getContextMenu[0];
                _this4.interactiveElement = _this4.getContextMenu[1];
                _this4.UI_body.insertAdjacentElement("afterBegin", _this4.contextMenu);
                _this4.interactiveElement.change_thickness.value = _this4.currentItem.dataset.height; //add event for interactive of contextMenu
                if (_this4.showContextMenu) {
                    _this4.inputEl = _this4.interactiveElement.change_position;
                    _this4.inputEl.value = _this4.currentItem.dataset.position;
                    _this4.inputEl.focus();
                    _this4.UI_body.querySelector('label[for="position_guides"]').textContent = _this4.currentItem.dataset.direction === "X" ? "Y" : "X";
                }
                _this4.inputEl.addEventListener("keyup", function(e) {
                    _this.changeGuidesPositionByKeys(e);
                });
                _this4.inputEl.addEventListener("change", function(e) {
                    _this5.changeGuidesPosition(e);
                });
                _this4.interactiveElement.deleteBtn.addEventListener("click", function(e) {
                    _this6.deleteGuides();
                });
                _this4.interactiveElement.change_thickness.addEventListener("change", function(e) {
                    _this7.changeThickness(e);
                });
                _this4.interactiveElement.changeColor.addEventListener("change", function(e) {
                    _this8.changeColor_guides(e);
                });
                _this4.interactiveElement.close_contextMenu.addEventListener("click", function(e) {
                    _this9.contextMenu.remove();
                });
            }
        }); //localStorage.clear()
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
                    this.currentItem = elHtml; //storage
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
                var _this = this, _this11 = this, _this12 = this, _this13 = this;
                // Mouse grab
                item.addEventListener("mouseover", function(e) {
                    item.style.cursor = "pointer";
                    _this.controlUser.grab = true;
                    _this.controlUser.hover = true;
                }); // Mouse Down
                item.addEventListener("mousedown", function(e) {
                    e.preventDefault();
                    _this11.currentItem = item;
                    if (_this11.showContextMenu) {
                        _this11.interactiveElement.change_thickness.value = item.dataset.height;
                        _this11.interactiveElement.change_position.value = item.dataset.position;
                        _this11.UI_body.querySelector('label[for="position_guides"]').textContent = item.dataset.direction === "X" ? "Y" : "X";
                    }
                    if (_this11.controlUser.grab) {
                        _this11.controlUser.move = true;
                        _this11.currentItem = item;
                        _this11.defineTerminal(item);
                    }
                }); //Mouse Out
                item.addEventListener("mouseout", function(e) {
                    _this12.controlUser.hover = null;
                    if (_this12.controlUser.grab && _this12.controlUser.move) _this12.controlUser.move = true;
                }); //Mouse up , cancel mouvement of guides
                item.addEventListener("mouseup", $08a7d5afccd80df8$export$61fc7d43ac8f84b0(function(e) {
                    _this13.controlUser.grab = null;
                    _this13.controlUser.move = null;
                    _this13.manageStorage.manage("guides");
                }), 300);
            }
        },
        {
            key: "injectGuidesInStorage",
            value: function injectGuidesInStorage() {
                if (localStorage.getItem("guides")) {
                    var _this = this, _this14 = this;
                    var res = JSON.parse(localStorage.getItem("guides"));
                    this.currentStorage = [];
                    res.forEach(function(item) {
                        _this.currentStorage.push(item);
                    });
                    var guidesCollection = this.create.deployStorage(this.currentStorage, this.currentColor);
                    var injectEl = "";
                    guidesCollection.forEach(function(item, key) {
                        injectEl = $08a7d5afccd80df8$export$adc6d72e517d4e6a(item);
                        _this14.addGuidesEvent(injectEl);
                        _this14.UI_body.insertAdjacentElement("afterBegin", injectEl);
                        injectEl.style.background = _this14.makeGradient(injectEl.dataset.direction, _this14.currentColor, injectEl.dataset.height);
                    });
                    var currentIndex = guidesCollection.length - 1;
                    this.currentItem = $08a7d5afccd80df8$export$adc6d72e517d4e6a(guidesCollection[currentIndex]);
                    var allGuides = document.querySelectorAll('[data-type="guides"]');
                    var lastIndex = allGuides.length - 1;
                    this.defineTerminal(allGuides[lastIndex]);
                }
            }
        },
        {
            /****************************************/ /****************************************/ /****       GUIDES UI Method         ****/ /****************************************/ /****************************************/ //Changes guides position by mouse move
            key: "changeGuidesPosition",
            value: function changeGuidesPosition(e) {
                var initialValue = parseInt(e.target.value);
                var direction = this.currentItem.dataset.direction;
                this.currentItem.dataset.position = initialValue;
                this.inputEl.value = initialValue;
                direction === "X" ? this.currentItem.style.top = initialValue + "px" : this.currentItem.style.left = initialValue + "px";
                this.manageStorage.manage("guides");
            } //Changes guides position with keyboard arrow
        },
        {
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
                this.manageStorage.manage("guides");
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
                } //If the last guides as delete
                if (!document.querySelectorAll('[data-type="guides"]').length) {
                    //Remove storage
                    localStorage.removeItem("guides");
                    if (this.showContextMenu) {
                        this.showContextMenu = false;
                        var contextMenu = document.getElementById("contextMenu");
                        contextMenu.remove();
                    }
                } //Check if user exprience is good
            //this.contextMenu.remove();
            }
        },
        {
            key: "changeThickness",
            value: function changeThickness(e) {
                var direction = this.currentItem.dataset.offsetby;
                var newVal = e.target.value; //
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
                var _this = this, _this15 = this;
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
                    item.style[constructRules] = "8px solid ".concat(_this15.currentColor);
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


new $f3f86e883dc3cb37$export$4b08aed5f1ec6952();
new $8c4157cb11a74ad2$export$79bc953678f776f7();


//# sourceMappingURL=index.js.map
