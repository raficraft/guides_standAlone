import "./index.css";

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $15b8801333d4c6bd$export$c8e8069ed9c86e3d;
var $15b8801333d4c6bd$export$34e0f9847d4c02dd;
var $15b8801333d4c6bd$export$89da14300d534261;
$15b8801333d4c6bd$export$c8e8069ed9c86e3d = "_UI_body_640a62";
$15b8801333d4c6bd$export$34e0f9847d4c02dd = "_container_640a62";
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
        console.log("????");
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


var $9275fa834f8536a8$exports = {};


class $6d4806093792670e$export$4b08aed5f1ec6952 {
    UI_body() {
        // Add Terminal view, for inject all HTML element for the project.
        this.UI = $9b26f7b4737a23ee$export$adc6d72e517d4e6a(`<section id="${$15b8801333d4c6bd$export$c8e8069ed9c86e3d}" class="UI_body"></section>`);
        document.body.insertAdjacentElement("beforeBegin", this.UI);
    }
    UI_menu() {
        const menu_STRING = `<nav class="${$15b8801333d4c6bd$export$34e0f9847d4c02dd}" draggable="true"><header></header><ul class="menu_content"><li id="guides_icon" class="${S.active}"><img src="${(/*@__PURE__*/$parcel$interopDefault($9275fa834f8536a8$exports))}"/></li><li>2</li><li>3</li><li>4</li></ul></nav>`;
        const menu = $9b26f7b4737a23ee$export$adc6d72e517d4e6a(menu_STRING); //Add drag event
        menu.addEventListener("dragstart", (e)=>{
            this.dragEvent.dragStart(e);
        });
        menu.addEventListener("dragend", (e)=>{
            this.dragEvent.dragEnd(e, menu);
        }); //Inject menu
        this.UI.insertAdjacentElement("afterbegin", menu);
    }
    constructor(){
        console.log("init_UI");
        this.UI_body();
        this.UI_menu();
        this.dragEvent = new $60470c96b7efe180$export$6dbaf1fff660fe95();
    }
}




var $e0e8cc12b16392dc$export$c8e8069ed9c86e3d;
var $e0e8cc12b16392dc$export$6bd0430c083ef3cf;
var $e0e8cc12b16392dc$export$80cd3f47130f5b35;
var $e0e8cc12b16392dc$export$306af2bd63798f3d;
var $e0e8cc12b16392dc$export$218b899e1d476006;
var $e0e8cc12b16392dc$export$b82da7a6a828be37;
var $e0e8cc12b16392dc$export$bb646b20bb93d339;
var $e0e8cc12b16392dc$export$545187d680fb3bce;
var $e0e8cc12b16392dc$export$611455ef14a12093;
$e0e8cc12b16392dc$export$c8e8069ed9c86e3d = "_UI_body_2ee2f9";
$e0e8cc12b16392dc$export$6bd0430c083ef3cf = "_guides_2ee2f9";
$e0e8cc12b16392dc$export$80cd3f47130f5b35 = "_guides_pseudoEL_2ee2f9";
$e0e8cc12b16392dc$export$306af2bd63798f3d = "_UI_guides__container_2ee2f9";
$e0e8cc12b16392dc$export$218b899e1d476006 = "_contextMenu_2ee2f9";
$e0e8cc12b16392dc$export$b82da7a6a828be37 = "_close_contextMenu_2ee2f9";
$e0e8cc12b16392dc$export$bb646b20bb93d339 = "_cross_2ee2f9";
$e0e8cc12b16392dc$export$545187d680fb3bce = "_contextMenu_content_2ee2f9";
$e0e8cc12b16392dc$export$611455ef14a12093 = "_contextMenu_blocInput_2ee2f9";



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
    get_UI() {
        const UI = $9b26f7b4737a23ee$export$adc6d72e517d4e6a(`<div class="${$e0e8cc12b16392dc$export$306af2bd63798f3d}" data-type="UI">
      <label>X || Y</label>
      <input id="log_guides" value="0" />
    </div>`);
        const inputChange = UI.querySelector("input");
        return [
            UI,
            inputChange
        ];
    }
    get_contextMenu(e1) {
        $9b26f7b4737a23ee$export$84a19d80a0fc97e6('[data-type="contextmenu"]');
        const X = e1.pageX > window.innerWidth - 100 ? `${e1.pageX - 150}px` : `${e1.pageX}px`;
        const Y = e1.pageY > window.innerHeight - 80 ? `${e1.pageY - 80}px` : `${e1.pageY}px`;
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
          <div class="contextMenu_blocInput">
            <input type="button" id="del_guides" value="delete" data-action="delete_guides"/>
            <label for="del_guides">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                <g><path d="M723.9,976H276c-61.8,0-112-50.1-112-111.8V276c0-15.5,12.6-28,28-28s28,12.5,28,28v588.2c0,30.7,25.1,55.8,56,55.8h447.9c30.9,0,56.1-25,56.1-55.8V276c0-15.5,12.6-28,28-28c15.4,0,28,12.5,28,28v588.2C836,925.9,785.7,976,723.9,976z"/><path d="M640,808c-15.4,0-28-12.5-28-28V388c0-15.5,12.6-28,28-28c15.5,0,28,12.5,28,28v392C668,795.5,655.4,808,640,808z M500,808c-15.4,0-28-12.5-28-28V388c0-15.5,12.6-28,28-28c15.4,0,28,12.5,28,28v392C528,795.5,515.4,808,500,808z M360,808c-15.5,0-28-12.5-28-28V388c0-15.5,12.5-28,28-28s28,12.5,28,28v392C388,795.5,375.4,808,360,808z M962,220H38c-15.4,0-28-12.5-28-28c0-15.5,12.5-28,28-28h266v-55.9c0-46.4,37.8-84.1,84.2-84.1h223.5c46.5,0,84.2,37.7,84.2,84.1V164h266c15.4,0,28,12.5,28,28C990,207.5,977.4,220,962,220z M360,164h280v-55.9c0-15.5-12.7-28.1-28.2-28.1H388.2c-15.6,0-28.2,12.6-28.2,28.1V164z"/></g>
              </svg>
            </label> 
          </div>
          <hr>
          <div class="${$e0e8cc12b16392dc$export$611455ef14a12093}">
            <input type="number" min="1" max="500" max="500" value="1" data-action="change_thickness">
            <label style="${$0b1328cf225e4578$export$bcbbd831497ce88.trash_icon}" for="del_guides">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 68.96 75.21"><defs><style>.cls-1{fill:#231f20;}.cls-2{fill:#088c44;}</style></defs><title>icon_thickness</title><g id="Calque_2" data-name="Calque 2"><g id="Calque_1-2" data-name="Calque 1"><path class="cls-1" d="M66.54,26.3,2.49,26c-3.22,0-3.22,5,0,5l64.05.26c3.22,0,3.22-5,0-5Z"/><path class="cls-1" d="M66.47,44.9,2.41,44.64c-3.21,0-3.22,5,0,5l64.06.26c3.22,0,3.22-5,0-5Z"/><path class="cls-1" d="M32.78,2.41l-.07,17.1c0,3.22,5,3.22,5,0l.07-17.1c0-3.21-5-3.22-5,0Z"/><path class="cls-2" d="M39.77,16.34l-4.56,3.17"/><path class="cls-1" d="M38.51,14.18,34,17.35a2.56,2.56,0,0,0-.9,3.42,2.53,2.53,0,0,0,3.42.9L41,18.5a2.56,2.56,0,0,0,.9-3.42,2.52,2.52,0,0,0-3.42-.9Z"/><path class="cls-1" d="M37,17.74l-4.27-3.55a2.57,2.57,0,0,0-3.53,0,2.52,2.52,0,0,0,0,3.54l4.26,3.55a2.58,2.58,0,0,0,3.54,0,2.53,2.53,0,0,0,0-3.54Z"/><path class="cls-1" d="M37.42,72.8l.33-17.09c.06-3.22-4.94-3.22-5,0L32.42,72.8c-.06,3.22,4.94,3.22,5,0Z"/><path class="cls-2" d="M30.64,58.8l4.61-3.09"/><path class="cls-1" d="M31.91,61l4.6-3.09a2.56,2.56,0,0,0,.9-3.42,2.52,2.52,0,0,0-3.42-.9l-4.61,3.1a2.55,2.55,0,0,0-.89,3.42,2.52,2.52,0,0,0,3.42.89Z"/><path class="cls-1" d="M33.48,57.48l4.22,3.61a2.56,2.56,0,0,0,3.53,0,2.53,2.53,0,0,0,0-3.54L37,53.94a2.56,2.56,0,0,0-3.54,0,2.53,2.53,0,0,0,0,3.54Z"/></g></g></svg>
           </label> 
          </div>
          <hr>
          <div class="${$e0e8cc12b16392dc$export$611455ef14a12093}">
            <input      
              type="color" data-action="changeColor_guides" value="#ff0000"
            />          
          </div>
        </div>
      </section>`);
        const interactionElement = {
            close_contextMenu: el_STRING.querySelector('[data-action="close_context_menu"]'),
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
            this.currentItem = elHtml;
            document.querySelectorAll('[data-type="guides"]').length === 1 && this.addUI();
            this.inputEl.value = this.currentItem.dataset.position; //storage
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
            this.inputEl.value = item1.dataset.position;
            this.inputEl.focus();
            if (this.showContextMenu) this.interactiveElement.change_thickness.value = item1.dataset.height;
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
    changeGuidesPosition(e2) {
        let intValue = parseInt(e2.target.value);
        const direction = this.currentItem.dataset.direction;
        this.currentItem.dataset.position = intValue;
        this.inputEl.value = intValue + "px";
        direction === "X" ? this.currentItem.style.top = intValue + "px" : this.currentItem.style.left = intValue + "px";
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
            this.addUI();
            const allGuides = document.querySelectorAll('[data-type="guides"]');
            const lastIndex = allGuides.length - 1;
            this.defineTerminal(allGuides[lastIndex]);
        }
    }
    /****************************************/ /****************************************/ /****       GUIDES UI Method         ****/ /****************************************/ /****************************************/ addUI() {
        const getUI = this.create.get_UI();
        this.UI_body.insertAdjacentElement("afterBegin", getUI[0]);
        this.initUI_event(getUI[1]);
        if (this.currentItem !== "") this.inputEl.value = this.currentItem.dataset.position;
    }
    initUI_event(item3) {
        //Cursor position, display in UI
        this.inputEl = item3;
        this.inputEl.addEventListener("change", (e)=>{
            this.changeGuidesPosition(e);
        });
        this.inputEl.addEventListener("keydown", (e)=>{
            this.changeGuidesPositionByKeys(e);
        });
    }
    //Changes guides position by mouse move
    changeGuidesPosition(e6) {
        let initialValue = parseInt(e6.target.value);
        const direction = this.currentItem.dataset.direction;
        this.currentItem.dataset.position = initialValue;
        this.inputEl.value = initialValue + "px";
        direction === "X" ? this.currentItem.style.top = initialValue + "px" : this.currentItem.style.left = initialValue + "px";
    }
    changeGuidesPositionByKeys(e3) {
        let intValue = parseInt(e3.target.value);
        const direction = this.currentItem.dataset.direction;
        if (e3.key === "ArrowUp") {
            intValue++;
            this.inputEl.value = intValue;
        }
        if (e3.key === "ArrowDown") {
            intValue--;
            this.inputEl.value = intValue;
        }
        this.currentItem.dataset.position = intValue;
        direction === "X" ? this.currentItem.style.top = intValue + "px" : this.currentItem.style.left = intValue + "px";
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
    changeThickness(e4) {
        const direction = this.currentItem.dataset.offsetby;
        const newVal = e4.target.value;
        const newThickness = 4 + parseInt(e4.target.value);
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
    changeColor_guides(e5) {
        const guidesCollection = document.querySelectorAll('[data-type="guides"]');
        this.currentColor = e5.target.value;
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
            console.log('down'); //this.showGuides = true;
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
                    this.inputEl.value = e.pageY;
                } else if (this.currentItem.dataset.direction === "Y") {
                    this.currentItem.style.left = e.pageX + "px";
                    this.currentItem.dataset.position = e.pageX;
                    this.inputEl.value = e.pageX;
                }
            }
        }), 300);
        this.UI_body.addEventListener("contextmenu", (e7)=>{
            if (this.controlUser.hover) {
                e7.preventDefault();
                this.getContextMenu = this.create.get_contextMenu(e7);
                this.showContextMenu = true;
                this.contextMenu = this.getContextMenu[0];
                this.interactiveElement = this.getContextMenu[1];
                this.UI_body.insertAdjacentElement("afterBegin", this.contextMenu);
                this.interactiveElement.change_thickness.value = this.currentItem.dataset.height; //add event for interactive of contextMenu
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


var $508b3e705df3eb40$export$c8e8069ed9c86e3d;
$508b3e705df3eb40$export$c8e8069ed9c86e3d = "_UI_body_66627d";


if (null) null.accept(function() {
    window.location.reload();
});
console.log("????");
new $6d4806093792670e$export$4b08aed5f1ec6952();
new $0821797f8ef150f0$export$79bc953678f776f7();


//# sourceMappingURL=module.js.map
