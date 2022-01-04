import "./index.css";



var $15b8801333d4c6bd$export$c8e8069ed9c86e3d;
var $15b8801333d4c6bd$export$34e0f9847d4c02dd;
var $15b8801333d4c6bd$export$5e412469363e377d;
var $15b8801333d4c6bd$export$89da14300d534261;
$15b8801333d4c6bd$export$c8e8069ed9c86e3d = "_UI_body_640a62";
$15b8801333d4c6bd$export$34e0f9847d4c02dd = "_container_640a62";
$15b8801333d4c6bd$export$5e412469363e377d = "_menu_content_640a62";
$15b8801333d4c6bd$export$89da14300d534261 = "_active_640a62";


const $9b26f7b4737a23ee$export$adc6d72e517d4e6a = (htmlString)=>{
    const div = document.createElement("div");
    div.innerHTML = htmlString.trim(); // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild;
};
const $9b26f7b4737a23ee$export$61fc7d43ac8f84b0 = (callback, delay)=>{
    let timer;
    return function() {
        let args = arguments;
        let context = this;
        clearTimeout(timer);
        timer = setTimeout(function() {
            callback.apply(context, args);
        }, delay);
    };
};
function $9b26f7b4737a23ee$export$f8777a72970d840a(array) {
    let style = "";
    for(const key in array)if (Object.hasOwnProperty.call(array, key)) {
        const element = array[key];
        style += `${key} : ${element}; `;
    }
    return style;
}
const $9b26f7b4737a23ee$export$84a19d80a0fc97e6 = (selector)=>{
    const removeThis = document.querySelector(selector);
    if (removeThis) removeThis.remove();
};
const $9b26f7b4737a23ee$export$871b5a9be678db21 = (args)=>{
    const initialCss = getComputedStyle(args.el).cssText;
    const { el: el , action: action , css: css , preventDefault: preventDefault = true , next: next  } = {
        ...args
    };
    let fired = "";
    let reset = "";
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
    el.addEventListener(fired, (e)=>{
        if (preventDefault) e.preventDefault();
        for(const key in css)if (Object.hasOwnProperty.call(css, key)) {
            const element = css[key]; //define new styles
            el.style[key] = element;
        }
    });
    el.addEventListener(reset, (e)=>{
        if (preventDefault) e.preventDefault();
         // replace all initial css properties
        el.style.cssText = initialCss;
        if (next) {
            for(const key in next)if (Object.hasOwnProperty.call(next, key)) {
                const element = next[key]; //define new styles if element is hover
                el.style[key] = element;
            }
        }
    });
};


const $6d4806093792670e$var$icon = `<svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
viewBox="0 0 1000 1000" style="enable-background:new 0 0 1000 1000;" xml:space="preserve">
<g>
<path d="M500,240.6c-76.1,0-138.4,62.3-138.4,138.4S423.9,517.4,500,517.4S638.4,455.1,638.4,379
 C638.4,302.8,576.1,240.6,500,240.6z M500,471.2c-50.7,0-92.2-41.5-92.2-92.2s41.5-92.2,92.2-92.2s92.2,41.5,92.2,92.2
 S550.7,471.2,500,471.2z M868.9,378.9C868.9,176,702.9,10,500,10S131.1,176,131.1,378.9c0,87.6,30,168.3,80.7,230.6l0,0l249,359.7
 C470,983,483.9,990,497.7,990s27.7-6.9,36.9-20.8l253.6-359.7l0,0C839,547.3,868.9,466.6,868.9,378.9z M746.7,586.5L500,943.9
 L253.3,586.5c-2.3-2.3-2.3-4.6-4.6-6.9C202.6,522,177.2,452.8,177.2,379c0-177.6,145.3-322.8,322.8-322.8
 c177.6,0,322.8,145.3,322.8,322.8c0,73.8-25.4,143-71.5,200.6C749,581.9,749,584.2,746.7,586.5z"/>
</g>
</svg>`;
class $6d4806093792670e$export$4b08aed5f1ec6952 {
    UI_body() {
        // Add Terminal view, for inject all HTML element for the project.
        this.UI = $9b26f7b4737a23ee$export$adc6d72e517d4e6a(`<section id="UI_body" class="${$15b8801333d4c6bd$export$c8e8069ed9c86e3d}"></section>`);
        document.body.insertAdjacentElement("beforeBegin", this.UI);
    }
    constructor(){
        this.UI_body();
    }
}



const $0b1328cf225e4578$export$bcbbd831497ce88 = {
    span_axis_X: (position, color, thickness = 1)=>{
        return $9b26f7b4737a23ee$export$f8777a72970d840a({
            background: `linear-gradient(to bottom,
        transparent 3px,
        ${color} 3px,
        ${color} ${parseInt(thickness) + 3}px,
        transparent ${parseInt(thickness) + 3}px ,
        transparent ${parseInt(thickness) + 5}px
        )`,
            height: `${parseInt(thickness) + 4}px`,
            width: "100%",
            top: `${position}px`,
            position: "absolute"
        });
    },
    span_axis_Y: (position, color, thickness = 1)=>{
        return $9b26f7b4737a23ee$export$f8777a72970d840a({
            background: `linear-gradient(to left, 
        transparent 3px,
        ${color} 3px,
        ${color} ${parseInt(thickness) + 3}px,
        transparent ${parseInt(thickness) + 3}px ,
        transparent ${parseInt(thickness) + 5}px
        )`,
            height: "100%",
            width: `${parseInt(thickness) + 4}px`,
            left: `${position}px`,
            position: "fixed"
        });
    },
    span_pseudoEl_X_before: (color)=>{
        return $9b26f7b4737a23ee$export$f8777a72970d840a({
            top: "-5px",
            left: "0px",
            "border-top": "8px solid transparent",
            "border-bottom": "8px solid transparent",
            "border-left": `8px solid ${color}`
        });
    },
    span_pseudoEl_X_after: (color)=>{
        return $9b26f7b4737a23ee$export$f8777a72970d840a({
            top: "-5px",
            right: "0",
            "border-top": "8px solid transparent",
            "border-right": `8px solid ${color}`,
            "border-bottom": "8px solid transparent"
        });
    },
    span_pseudoEl_Y_before: (color)=>{
        return $9b26f7b4737a23ee$export$f8777a72970d840a({
            top: "0",
            right: "-3px",
            "border-top": `8px solid ${color}`,
            "border-right": "8px solid transparent",
            "border-left": "8px solid transparent"
        });
    },
    span_pseudoEl_Y_after: (color)=>{
        return $9b26f7b4737a23ee$export$f8777a72970d840a({
            bottom: "0",
            right: "-3px",
            "border-right": "8px solid transparent",
            "border-bottom": `8px solid ${color}`,
            "border-left": "8px solid transparent"
        });
    },
    contextMenu: (X, Y)=>{
        return $9b26f7b4737a23ee$export$f8777a72970d840a({
            left: X,
            top: Y
        });
    }
};


var $e0e8cc12b16392dc$export$6bd0430c083ef3cf;
var $e0e8cc12b16392dc$export$80cd3f47130f5b35;
var $e0e8cc12b16392dc$export$306af2bd63798f3d;
var $e0e8cc12b16392dc$export$218b899e1d476006;
var $e0e8cc12b16392dc$export$b82da7a6a828be37;
var $e0e8cc12b16392dc$export$bb646b20bb93d339;
var $e0e8cc12b16392dc$export$545187d680fb3bce;
var $e0e8cc12b16392dc$export$611455ef14a12093;
$e0e8cc12b16392dc$export$6bd0430c083ef3cf = "_guides_2ee2f9";
$e0e8cc12b16392dc$export$80cd3f47130f5b35 = "_guides_pseudoEL_2ee2f9";
$e0e8cc12b16392dc$export$306af2bd63798f3d = "_UI_guides__container_2ee2f9";
$e0e8cc12b16392dc$export$218b899e1d476006 = "_contextMenu_2ee2f9";
$e0e8cc12b16392dc$export$b82da7a6a828be37 = "_close_contextMenu_2ee2f9";
$e0e8cc12b16392dc$export$bb646b20bb93d339 = "_cross_2ee2f9";
$e0e8cc12b16392dc$export$545187d680fb3bce = "_contextMenu_content_2ee2f9";
$e0e8cc12b16392dc$export$611455ef14a12093 = "_contextMenu_blocInput_2ee2f9";



class $60470c96b7efe180$export$6dbaf1fff660fe95 {
    dragStart(e) {
        this.dragPosition.start.x = e.screenX;
        this.dragPosition.start.y = e.screenY;
    }
    dragEnd(e1, el) {
        this.dragPosition.end.x = e1.screenX;
        this.dragPosition.end.y = e1.screenY;
        const origin = {
            x: parseInt(getComputedStyle(el, null).getPropertyValue("left").split("px")[0]),
            y: parseInt(getComputedStyle(el, null).getPropertyValue("top").split("px")[0])
        };
        const moveTo = {
            x: this.dragPosition.end.x - this.dragPosition.start.x,
            y: this.dragPosition.end.y - this.dragPosition.start.y
        };
        el.style.left = origin.x + moveTo.x + "px";
        el.style.top = origin.y + moveTo.y + "px";
        el.style.opacity = 1;
    }
    constructor(){
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
}


class $4e3a677398d46132$export$69e780ca9f7a6d74 {
    get_guides(e2, direction, color, thickness) {
        let nbGuides = 0;
        !document.querySelectorAll('[data-type="guides"]').length ? nbGuides = 0 : nbGuides = document.querySelectorAll('[data-type="guides"]').length;
        let offsetBy = "";
        let position = 0;
        let stylesSpan_Axis = {
        };
        direction === "X" ? offsetBy = "top" : offsetBy = "left";
        direction === "X" ? position = e2.pageY : position = e2.pageX;
        direction === "X" ? stylesSpan_Axis = $0b1328cf225e4578$export$bcbbd831497ce88.span_axis_X(e2.pageY, color, 1) : stylesSpan_Axis = $0b1328cf225e4578$export$bcbbd831497ce88.span_axis_Y(e2.pageX, color, 1);
        const el_STRING = `<span
        class="${$e0e8cc12b16392dc$export$6bd0430c083ef3cf}"
        style="${stylesSpan_Axis}"
        data-type="guides"
        data-direction="${direction}"
        data-offsetby="${offsetBy}"
        data-count="${nbGuides++}"
        data-position="${position}"
        data-current="true"
        data-height="1"></span>
      >`;
        return el_STRING;
    }
    addTerminal(item1, color1) {
        const axis = item1.dataset.direction;
        let styles_PseudoEl_Axis = {
            before: "",
            after: ""
        };
        if (axis === "X") {
            styles_PseudoEl_Axis.before = $0b1328cf225e4578$export$bcbbd831497ce88.span_pseudoEl_X_before(color1);
            styles_PseudoEl_Axis.after = $0b1328cf225e4578$export$bcbbd831497ce88.span_pseudoEl_X_after(color1);
        } else {
            styles_PseudoEl_Axis.before = $0b1328cf225e4578$export$bcbbd831497ce88.span_pseudoEl_Y_before(color1);
            styles_PseudoEl_Axis.after = $0b1328cf225e4578$export$bcbbd831497ce88.span_pseudoEl_Y_after(color1);
        }
        const pseudoEl = {
            before: $9b26f7b4737a23ee$export$adc6d72e517d4e6a(`<span
          class="${$e0e8cc12b16392dc$export$80cd3f47130f5b35}"
          data-type="terminal" 
          data-direction="${axis}" 
          data-el="before"
          style="${styles_PseudoEl_Axis.before}">
        </span>`),
            after: $9b26f7b4737a23ee$export$adc6d72e517d4e6a(`<span 
          class="${$e0e8cc12b16392dc$export$80cd3f47130f5b35}"
          data-type="terminal"
          data-direction="${axis}"
          data-el="after"
          style="${styles_PseudoEl_Axis.after}">
        </span>`)
        };
        return pseudoEl;
    }
    get_contextMenu(e1) {
        $9b26f7b4737a23ee$export$84a19d80a0fc97e6('[data-type="contextmenu"]');
        const X = e1.pageX > window.innerWidth - 100 ? `${e1.pageX - 150}px` : `${e1.pageX}px`;
        const Y = e1.pageY > window.innerHeight - 200 ? `${e1.pageY - 200}px` : `${e1.pageY}px`;
        const el_STRING = $9b26f7b4737a23ee$export$adc6d72e517d4e6a(`<section class="${$e0e8cc12b16392dc$export$218b899e1d476006}"
        style="${$0b1328cf225e4578$export$bcbbd831497ce88.contextMenu(X, Y)}"  
        data-type="contextmenu"
        draggable="true"
        >
        <header>
          <label>Guides</label>
          <div class="${$e0e8cc12b16392dc$export$b82da7a6a828be37}"
            data-action="close_context_menu">
            <span class="${$e0e8cc12b16392dc$export$bb646b20bb93d339}"></span> 
            <span class="${$e0e8cc12b16392dc$export$bb646b20bb93d339}"></span> 
          </div>
        </header>
        <div class="${$e0e8cc12b16392dc$export$545187d680fb3bce}">
          <div class="${$e0e8cc12b16392dc$export$611455ef14a12093}">
            <input type="number" id="position_guides" name="position_guides" value="0" data-action="position_guides" min="0" max="4000"/>
            <label for="position_guides">
              X
            </label> 
          </div>
          <hr>
          <div class="${$e0e8cc12b16392dc$export$611455ef14a12093}">
            <input type="button" id="del_guides" name="del_guides" value="delete" data-action="delete_guides"/>
            <label for="del_guides">
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              width="1000.000000pt" height="1040.000000pt" viewBox="0 0 1000.000000 1040.000000"
              preserveAspectRatio="xMidYMid meet">
            
              <g transform="translate(0.000000,1040.000000) scale(0.100000,-0.100000)"
              fill="#000000" stroke="none">
              <path d="M4465 10090 c-191 -21 -451 -190 -635 -415 -200 -244 -335 -543 -412
              -907 l-33 -158 -90 0 c-653 -2 -2357 -22 -2454 -30 -184 -14 -223 -28 -297
              -106 -124 -130 -173 -278 -140 -425 30 -135 121 -256 244 -322 70 -38 152 -45
              614 -55 207 -4 380 -11 384 -15 4 -4 40 -469 80 -1034 196 -2759 353 -4796
              404 -5243 24 -209 46 -297 105 -407 137 -260 378 -446 721 -559 297 -98 359
              -102 1639 -110 948 -7 1929 6 2095 26 413 51 792 246 992 510 60 79 132 223
              153 305 50 196 139 1318 434 5418 43 598 81 1090 85 1094 4 4 175 11 379 15
              447 9 540 17 614 54 173 84 283 287 254 470 -13 87 -65 191 -132 267 -60 68
              -100 90 -189 106 -82 15 -730 30 -1316 31 -248 0 -654 3 -902 7 -392 5 -452 8
              -452 21 0 36 -75 346 -107 442 -94 281 -258 547 -455 736 -105 101 -176 149
              -338 230 l-129 64 -523 -1 c-288 -1 -554 -5 -593 -9z m989 -926 c92 -23 201
              -245 220 -451 l7 -73 -675 0 -676 0 0 69 c0 80 36 215 81 306 53 106 101 146
              189 157 72 8 816 2 854 -8z m1956 -1557 c0 -210 -368 -5161 -450 -6057 -15
              -155 -31 -210 -75 -248 -19 -17 -51 -36 -72 -42 -66 -20 -585 -29 -1678 -29
              -1133 0 -1885 11 -1948 29 -51 15 -101 61 -115 107 -21 71 -32 177 -87 843
              -102 1243 -371 4900 -391 5318 l-7 142 2411 0 2412 0 0 -63z"/>
              <path d="M4869 7322 c-73 -37 -86 -68 -99 -218 -13 -153 -13 -1114 0 -3034 11
              -1596 22 -2285 40 -2430 16 -119 29 -143 98 -171 105 -43 209 -22 280 55 39
              43 40 45 47 142 16 211 -15 5113 -34 5422 -8 131 -11 146 -35 176 -64 84 -197
              110 -297 58z"/>
              <path d="M3622 7319 c-55 -10 -105 -41 -140 -87 l-27 -36 2 -584 c0 -322 6
              -826 12 -1121 6 -295 20 -979 31 -1521 37 -1865 50 -2285 71 -2362 31 -118
              190 -181 305 -121 49 26 101 83 110 120 9 33 -2 1457 -16 2143 -40 2001 -69
              3138 -86 3368 -8 100 -27 133 -99 172 -58 32 -103 40 -163 29z"/>
              <path d="M6278 7299 c-46 -11 -114 -52 -127 -78 -47 -87 -54 -264 -101 -2626
              -16 -820 -35 -1722 -41 -2005 -6 -283 -9 -621 -7 -750 3 -222 4 -238 26 -280
              58 -115 203 -148 327 -75 49 28 71 58 79 106 13 76 40 1068 71 2574 8 402 20
              973 26 1270 7 297 12 808 13 1136 l1 596 -28 40 c-49 71 -156 112 -239 92z"/>
              </g>
              </svg>
            </label> 
          </div>
          <hr>
          <div class="${$e0e8cc12b16392dc$export$611455ef14a12093}">
            <input type="number" min="1" max="500" id="thickness_guides" name="thickness_guides" value="1" data-action="change_thickness">
            <label for="thickness_guides">
              <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              width="225.000000pt" height="225.000000pt" viewBox="0 0 225.000000 225.000000"
              preserveAspectRatio="xMidYMid meet">

              <g transform="translate(0.000000,225.000000) scale(0.100000,-0.100000)"
              fill="#000000" stroke="none">
              <path d="M1088 2111 c-22 -11 -35 -26 -40 -48 -5 -18 -7 -449 -6 -957 3 -911
              3 -926 23 -945 11 -11 34 -23 52 -27 27 -5 37 -1 63 24 l30 30 0 940 c0 921 0
              940 -20 964 -25 33 -62 39 -102 19z"/>
              <path d="M475 1440 l-59 -60 87 -81 c48 -44 87 -85 87 -90 0 -5 -76 -9 -176
              -9 l-176 0 -29 -29 c-31 -31 -36 -59 -17 -94 23 -44 35 -46 221 -47 97 0 177
              -3 177 -7 0 -4 -38 -46 -85 -93 l-85 -86 58 -57 57 -57 193 193 192 192 -193
              193 -192 192 -60 -60z"/>
              <path d="M1502 1307 l-192 -192 193 -193 192 -192 58 58 57 58 -85 84 c-47 47
              -85 88 -85 92 0 5 78 8 174 8 170 0 176 1 202 24 39 33 39 89 0 122 -26 23
              -32 24 -202 24 -96 0 -174 3 -174 7 0 4 38 46 85 93 l85 86 -58 57 -57 57
              -193 -193z"/>
              </g>
              </svg>   
            </label> 
          </div>
          <hr>
          <div class="${$e0e8cc12b16392dc$export$611455ef14a12093}">
            <input      
              type="color" id="change_color" name="change_color" data-action="changeColor_guides" value="#ff0000"
            />      
            <label for="change_color">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              width="239.000000pt" height="211.000000pt" viewBox="0 0 239.000000 211.000000"
              preserveAspectRatio="xMidYMid meet">

              <g transform="translate(0.000000,211.000000) scale(0.100000,-0.100000)"
              fill="#000000" stroke="none">
              <path d="M805 2100 c-336 -24 -581 -144 -671 -326 -26 -53 -29 -69 -29 -154 0
              -83 3 -102 27 -150 15 -31 44 -75 64 -98 l36 -43 -81 -83 c-119 -123 -163
              -236 -141 -369 20 -127 35 -146 377 -489 342 -343 364 -360 488 -380 44 -8 81
              -7 126 1 128 22 146 36 509 397 228 227 342 334 357 334 11 0 50 -9 86 -20
              155 -48 256 -214 257 -425 1 -157 31 -280 67 -273 49 10 87 141 104 361 23
              313 -17 498 -152 699 -55 82 -195 225 -289 296 -98 75 -268 171 -365 208 -76
              29 -80 32 -322 269 -134 132 -252 243 -261 247 -20 8 -53 7 -187 -2z m-168
              -368 l-179 -179 79 -26 c134 -44 111 -54 303 138 l170 170 415 -415 415 -415
              -387 -387 c-426 -426 -439 -436 -535 -425 -26 3 -58 12 -72 19 -36 19 -591
              563 -617 604 -32 52 -40 101 -28 163 10 50 19 63 104 150 l92 95 79 -27 c142
              -46 391 -87 536 -87 39 0 57 -6 80 -25 65 -55 153 -57 212 -5 44 39 60 79 53
              136 -13 119 -146 177 -249 109 -41 -27 -44 -28 -152 -21 -336 19 -586 110
              -652 237 -18 36 -18 122 0 158 53 102 278 201 476 210 34 1 30 -3 -143 -177z"/>
              </g>
              </svg>
            </label>    
          </div>
        </div>
      </section>`);
        const interactionElement = {
            close_contextMenu: el_STRING.querySelector('[data-action="close_context_menu"]'),
            change_position: el_STRING.querySelector('[data-action="position_guides"]'),
            change_thickness: el_STRING.querySelector('[data-action="change_thickness"]'),
            deleteBtn: el_STRING.querySelector('[data-action="delete_guides"]'),
            changeColor: el_STRING.querySelector('[data-action="changeColor_guides"]')
        };
        el_STRING.addEventListener("dragstart", (e)=>{
            this.dragEvent.dragStart(e);
        });
        el_STRING.addEventListener("dragend", (e)=>{
            this.dragEvent.dragEnd(e, el_STRING);
        });
        return [
            el_STRING,
            interactionElement
        ];
    }
    deployStorage(items, color2) {
        if (items) {
            let el_STRING = [];
            let nbGuides = 0;
            items.forEach((item)=>{
                let stylesSpan_Axis = {
                };
                item.direction === "X" ? item.offsetBy = "top" : item.offsetBy = "left";
                item.direction === "X" ? stylesSpan_Axis = $0b1328cf225e4578$export$bcbbd831497ce88.span_axis_X(item.position, color2, item.height) : stylesSpan_Axis = $0b1328cf225e4578$export$bcbbd831497ce88.span_axis_Y(item.position, color2, item.height);
                el_STRING.push(`<span
            class="${$e0e8cc12b16392dc$export$6bd0430c083ef3cf}"
            style="${stylesSpan_Axis}"
            data-type="guides"
            data-direction="${item.direction}"
            data-offsetBy="${item.offsetBy}"
            data-count="${nbGuides++}"
            data-position="${item.position}"
            data-height="${item.height}"
          >
          </span>`);
            });
            return el_STRING;
        }
    }
    constructor(){
        this.dragEvent = new $60470c96b7efe180$export$6dbaf1fff660fe95();
    }
}



class $33287d735753817d$export$191e63b17214d70d {
    manage(target) {
        // debugger
        switch(target){
            case "guides":
                if (localStorage.getItem("guides")) localStorage.clear();
                const allGuides = this.UI_body.querySelectorAll('[data-type="guides"]');
                this.currentStorage = [];
                allGuides.forEach((item)=>{
                    this.currentStorage.push(item.dataset);
                });
                localStorage.setItem("guides", JSON.stringify(this.currentStorage));
                break;
        }
    }
    constructor(){
        this.currentStorage = [];
        this.UI_body = document.getElementById("UI_body");
    }
}


class $0821797f8ef150f0$export$79bc953678f776f7 {
    /****************************************/ /****************************************/ /*****       GUIDES  METHOD         *****/ /****************************************/ /****************************************/ /**
   * @param {*} e
   * @param {string} direction
   */ add_guides(e1, direction) {
        if (direction === "X" || direction === "Y") {
            const elHtml = $9b26f7b4737a23ee$export$adc6d72e517d4e6a(this.create.get_guides(e1, direction, this.currentColor, 1));
            this.UI_body.insertAdjacentElement("afterBegin", elHtml);
            this.addGuidesEvent(elHtml);
            this.currentItem = elHtml; //storage
            this.manageStorage.manage("guides");
            this.defineTerminal(this.currentItem);
        }
    }
    /**
   * @param {HTML_element} item
   */ addGuidesEvent(item1) {
        // Mouse grab
        item1.addEventListener("mouseover", (e)=>{
            item1.style.cursor = "pointer";
            this.controlUser.grab = true;
            this.controlUser.hover = true;
        }); // Mouse Down
        item1.addEventListener("mousedown", (e)=>{
            e.preventDefault();
            this.currentItem = item1;
            if (this.showContextMenu) {
                this.interactiveElement.change_thickness.value = item1.dataset.height;
                this.interactiveElement.change_position.value = item1.dataset.position;
                this.UI_body.querySelector('label[for="position_guides"]').textContent = item1.dataset.direction === "X" ? "Y" : "X";
            }
            if (this.controlUser.grab) {
                this.controlUser.move = true;
                this.currentItem = item1;
                this.defineTerminal(item1);
            }
        }); //Mouse Out
        item1.addEventListener("mouseout", (e)=>{
            this.controlUser.hover = null;
            if (this.controlUser.grab && this.controlUser.move) this.controlUser.move = true;
        }); //Mouse up , cancel mouvement of guides
        item1.addEventListener("mouseup", $9b26f7b4737a23ee$export$61fc7d43ac8f84b0((e)=>{
            this.controlUser.grab = null;
            this.controlUser.move = null;
            this.manageStorage.manage("guides");
        }), 300);
    }
    injectGuidesInStorage() {
        if (localStorage.getItem("guides")) {
            const res = JSON.parse(localStorage.getItem("guides"));
            this.currentStorage = [];
            res.forEach((item)=>{
                this.currentStorage.push(item);
            });
            const guidesCollection = this.create.deployStorage(this.currentStorage, this.currentColor);
            let injectEl = "";
            guidesCollection.forEach((item, key)=>{
                injectEl = $9b26f7b4737a23ee$export$adc6d72e517d4e6a(item);
                this.addGuidesEvent(injectEl);
                this.UI_body.insertAdjacentElement("afterBegin", injectEl);
                injectEl.style.background = this.makeGradient(injectEl.dataset.direction, this.currentColor, injectEl.dataset.height);
            });
            const currentIndex = guidesCollection.length - 1;
            this.currentItem = $9b26f7b4737a23ee$export$adc6d72e517d4e6a(guidesCollection[currentIndex]);
            const allGuides = document.querySelectorAll('[data-type="guides"]');
            const lastIndex = allGuides.length - 1;
            this.defineTerminal(allGuides[lastIndex]);
        }
    }
    /****************************************/ /****************************************/ /****       GUIDES UI Method         ****/ /****************************************/ /****************************************/ //Changes guides position by mouse move
    changeGuidesPosition(e5) {
        let initialValue = parseInt(e5.target.value);
        const direction = this.currentItem.dataset.direction;
        this.currentItem.dataset.position = initialValue;
        this.inputEl.value = initialValue;
        direction === "X" ? this.currentItem.style.top = initialValue + "px" : this.currentItem.style.left = initialValue + "px";
        this.manageStorage.manage("guides");
    }
    changeGuidesPositionByKeys(e2) {
        let intValue = parseInt(e2.target.value);
        const direction = this.currentItem.dataset.direction;
        if (e2.key === "ArrowUp") {
            intValue++;
            this.inputEl.value = intValue;
        }
        if (e2.key === "ArrowDown") {
            intValue--;
            this.inputEl.value = intValue;
        }
        this.currentItem.dataset.position = intValue;
        direction === "X" ? this.currentItem.style.top = intValue + "px" : this.currentItem.style.left = intValue + "px";
        this.manageStorage.manage("guides");
    }
    /****************************************/ /****************************************/ /****       TERMINAL METHOD         *****/ /****************************************/ /****************************************/ /**
   * @param {HTML_element} item
   */ defineTerminal(item2) {
        this.showContextMenu;
        this.removeTerminal();
        const el = this.create.addTerminal(item2, this.currentColor);
        item2.insertAdjacentElement("afterBegin", el.after);
        item2.insertAdjacentElement("afterBegin", el.before);
    }
    removeTerminal() {
        const terminals = document.querySelectorAll('[data-type="terminal"]');
        terminals.forEach((item)=>{
            item.remove();
        });
    }
    /****************************************/ /****************************************/ /****      CONTEXT MENU METHOD      *****/ /****************************************/ /****************************************/ deleteGuides() {
        this.controlUser.grab && this.currentItem.remove();
        this.currentItem.remove();
        this.manageStorage.manage("guides");
        if (document.querySelectorAll("[data-type='guides']").length) {
            const allGuides = document.querySelectorAll('[data-type="guides"]');
            const lastIndex = allGuides.length - 1;
            this.currentItem = allGuides[lastIndex];
            this.defineTerminal(this.currentItem);
        } //If the last guides as delete
        if (!document.querySelectorAll('[data-type="guides"]').length) {
            //Remove storage
            const UI = document.querySelector('[data-type="UI"]');
            UI.remove();
            localStorage.removeItem("guides");
            if (this.showContextMenu) {
                this.showContextMenu = false;
                $9b26f7b4737a23ee$export$84a19d80a0fc97e6(".contextMenu");
            }
        } //Check if user exprience is good
    //this.contextMenu.remove();
    }
    changeThickness(e3) {
        const direction = this.currentItem.dataset.offsetby;
        const newVal = e3.target.value;
        const newThickness = 4 + parseInt(e3.target.value);
        const newGradient = `linear-gradient(
    to ${direction},
    transparent 3px, 
    ${this.currentColor} 3px,
    ${this.currentColor} ${parseInt(newVal) + 3}px,
    transparent ${parseInt(newVal) + 3}px ,
    transparent ${parseInt(newVal) + 5}px)`;
        this.currentItem.dataset.height = newVal;
        this.currentItem.style.background = newGradient;
        direction === "top" ? this.currentItem.style.height = `${parseInt(newThickness)}px` : this.currentItem.style.width = `${newThickness}px`;
        this.manageStorage.manage("guides");
    }
    changeColor_guides(e4) {
        const guidesCollection = document.querySelectorAll('[data-type="guides"]');
        this.currentColor = e4.target.value;
        guidesCollection.forEach((item)=>{
            item.style.background = this.makeGradient(item.dataset.offsetby, this.currentColor, item.dataset.height);
        });
        const terminals = document.querySelectorAll('[data-type="terminal"]');
        terminals.forEach((item)=>{
            let borderType = "";
            if (item.dataset.direction === "X") {
                if (item.dataset.el === "before") borderType = "left";
                else if (item.dataset.el === "after") borderType = "right";
            } else if (item.dataset.direction === "Y") {
                if (item.dataset.el === "before") borderType = "top";
                else if (item.dataset.el === "after") borderType = "bottom";
            }
            const constructRules = `border-${borderType}`;
            item.style[constructRules] = `8px solid ${this.currentColor}`;
        });
    }
    /****************************************/ /****************************************/ /****      UTILS METHOD             *****/ /****************************************/ /****************************************/ makeGradient(direction1, color, thickness) {
        const gradient = `transparent 3px, 
  ${color} 3px,
  ${color} ${parseInt(thickness) + 3}px,
  transparent ${parseInt(thickness) + 3}px ,
  transparent ${parseInt(thickness) + 5}px`;
        return `linear-gradient(to ${direction1}, ${gradient})`;
    }
    switch_UI(action) {
        if (action === "hidden") {
            this.showGuides = false;
            this.UI_body.style.display = "none";
        } else if (action === "show") {
            this.showGuides = true;
            this.UI_body.style.display = "flex";
        }
    }
    constructor(){
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
        this.create = new $4e3a677398d46132$export$69e780ca9f7a6d74();
        this.manageStorage = new $33287d735753817d$export$191e63b17214d70d(); //Catch event press key
        document.addEventListener("keydown", (e)=>{
            e.ctrlKey && (this.ctrlKey = true);
            e.shiftKey && (this.shiftKey = true);
            if (this.ctrlKey === true && this.shiftKey === true) {
                if (this.showGuides) this.switch_UI("hidden");
                else this.switch_UI("show");
            }
        });
        /** When keyControlas null , can't add guides */ document.addEventListener("keyup", (e)=>{
            this.ctrlKey = false;
            this.shiftKey = false;
            this.deleteKey = false;
        });
        /**
     * Trigger addGuides if shift or ctrl as pressed
     * Define the current direction X OR Y
     */ document.addEventListener("mousedown", (e)=>{
            //this.showGuides = true;
            this.ctrlKey && this.add_guides(e, "X");
            this.shiftKey && this.add_guides(e, "Y");
            if (document.querySelectorAll('[data-type="guides"]').length && this.showGuides) this.switch_UI("show");
            this.ctrlKey = false;
            this.shiftKey = false;
        });
        document.addEventListener("mouseup", (e)=>{
        });
        /** this event is only triggered when the user maintains
     *  the right click on a mark and performs a movement with the mouse */ document.addEventListener("mousemove", $9b26f7b4737a23ee$export$61fc7d43ac8f84b0((e)=>{
            e.preventDefault();
            if (this.controlUser.grab && this.controlUser.move) {
                if (this.currentItem.dataset.direction === "X") {
                    this.currentItem.style.top = e.pageY + "px";
                    this.currentItem.dataset.position = e.pageY;
                } else if (this.currentItem.dataset.direction === "Y") {
                    this.currentItem.style.left = e.pageX + "px";
                    this.currentItem.dataset.position = e.pageX;
                }
            }
        }), 300);
        this.UI_body.addEventListener("contextmenu", (e6)=>{
            if (this.controlUser.hover) {
                e6.preventDefault();
                this.getContextMenu = this.create.get_contextMenu(e6);
                this.showContextMenu = true;
                this.contextMenu = this.getContextMenu[0];
                this.interactiveElement = this.getContextMenu[1];
                this.UI_body.insertAdjacentElement("afterBegin", this.contextMenu);
                this.inputEl = this.interactiveElement.change_position;
                this.interactiveElement.change_thickness.value = this.currentItem.dataset.height; //add event for interactive of contextMenu
                this.inputEl.value = this.currentItem.dataset.position;
                this.inputEl.focus();
                this.UI_body.querySelector('label[for="position_guides"]').textContent = this.currentItem.dataset.direction === "X" ? "Y" : "X";
                this.inputEl.addEventListener("keyup", (e)=>{
                    this.changeGuidesPositionByKeys(e);
                });
                this.inputEl.addEventListener("change", (e)=>{
                    this.changeGuidesPosition(e);
                });
                this.interactiveElement.deleteBtn.addEventListener("click", (e)=>{
                    this.deleteGuides();
                });
                this.interactiveElement.change_thickness.addEventListener("change", (e)=>{
                    this.changeThickness(e);
                });
                this.interactiveElement.changeColor.addEventListener("change", (e)=>{
                    this.changeColor_guides(e);
                });
                this.interactiveElement.close_contextMenu.addEventListener("click", (e)=>{
                    this.contextMenu.remove();
                });
            }
        }); //localStorage.clear()
        this.injectGuidesInStorage();
    }
}


if (null) null.accept(function() {
    window.location.reload();
});
new $6d4806093792670e$export$4b08aed5f1ec6952();
new $0821797f8ef150f0$export$79bc953678f776f7();


//# sourceMappingURL=module.js.map
