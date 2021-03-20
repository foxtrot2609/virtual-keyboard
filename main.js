const Keyboard = {
    elements: {
        main: null,
        keysContainer: null,
        keys: []
    },
    
    eventHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: false
    },

    init() {
        // create main elements
        this.elements.main = document.createElement("div");
        this.elements.keysContainer = document.createElement("div");

        // setup main classes
        this.elements.main.classList.add("keyboard", "1keyboard--hidden");
        this.elements.keysContainer.classList.add("keyboard__keys");

        // add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);
    },

    _createKeys() {
        const fragment = document.createDocumentFragment();
        const keyLayout = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
            "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
            "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
            "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
            "space"
        ];

        // create HTML for an icon
        const createIconHTML = (icon_name) => {
            return `<span class="material-icons">${icon_name}</span>`;
        }

        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;
            
            // add attributes and classes
            keyElement.addAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            switch () {
                case "backspace": 
                keyElement.classList.add("keyboard__key--wide");
                keyElement.innerHTML = createIconHTML("backspace");

                keyElement.addEventListener("click", () => {
                    this.properties.value = this.properties.value.slice(0, -1);
                    this._triggerEvent("oninput") 
                });
                break;

                case "caps": 
                keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatible");
                keyElement.innerHTML = createIconHTML("backeyboard_capslock");

                keyElement.addEventListener("click", () => {
                    this._toggleCapsLock();
                    keyElement.classList.toggle("keyboard__key--active"/*, this.properties.capsLock*/); 
                });
                break;
            }

        });

    },

    _triggerEvent(handlerName) {

    },

    _toggleCapsLock() {

    },

    open() {

    },

    close() {

    }
};

window.addEventListener("DOMContentLoaded", () => {
    Keyboard.init();
});