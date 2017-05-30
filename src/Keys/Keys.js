/**
 * All the keys used in the application should be here
 */
const KEYS = {
    '8': 'backspace',
    '13': 'enter',
    '38': 'up',
    '40': 'down',
    '46': 'delete',
    '188': 'comma',
}

const STRING_KEYS = {
    'comma': ','
}

class Key {
    /**
     * Get the key code from the Javascript event object
     * @param {object} event javascript event object
     */
    constructor(event) {
        this._key = event.which || event.keyCode || event.charCode
    }

    get() {
        return this._key
    }

    /**
     * Check if the keycode is relative to the name passed
     * @param {string} keyName key name based in the const KEYS
     * @return {bool}
     */
    is(keyName) {
        return KEYS[this.get()] === keyName
    }

    /**
     * Check if the key is any of the keys passed
     * @param {string[]} keys list of keys
     * @return {bool}
     */
    isAny(keys) {
        return keys.some(key => this.is(key))
    }
    
    /**
     * Get keyCode based in key name
     * 
     * @static
     * @param {string} keyName 
     * @return {string}
     */
    static getCharacter(keyName) {
        return STRING_KEYS[keyName]
    }
    

}

/**
 * Wraps the default export function to create the Key function without the new keyword
 * @param {object} event javascript event object
 */
export default function(event) {
    return event ? new Key(event) : Key
}