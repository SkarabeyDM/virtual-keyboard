/**
 * @param {string} tag
 * @param {object} options
 * @param {object} data
 * @param {HTMLElement[]} children
 * @returns {HTMLElement}
 */
export default function createElement(tag, options = {}, data = {}, children = []) {
  const elem = Object.assign(document.createElement(tag), options);
  Object.entries(data).forEach(([name, value]) => {
    elem.dataset[name] = value;
  });

  children.forEach((child) => elem.appendChild(child));
  return elem;
}

export const KEY_DICTIONARY = {
  /**
   * @param {string} key
   * @param {string} language
   */
  getKey(key, language) {
    let output;
    if (key in this[language]) {
      output = this[language][key];
    } else {
      output = this[key];
    }
    output.code = key;
    return output;
  },
  english: {
    Digit1: { key: 1, altKey: '!' },
    Digit2: { key: 2, altKey: '@' },
    Digit3: { key: 3, altKey: '#' },
    Digit4: { key: 4, altKey: '$' },
    Digit5: { key: 5, altKey: '%' },
    Digit6: { key: 6, altKey: '^' },
    Digit7: { key: 7, altKey: '&' },
    Digit8: { key: 8, altKey: '*' },
    Digit9: { key: 9, altKey: '(' },
    Digit0: { key: 0, altKey: ')' },
  },
  russian: {
    Digit1: { key: 1, altKey: '!' },
    Digit2: { key: 2, altKey: '"' },
    Digit3: { key: 3, altKey: '№' },
    Digit4: { key: 4, altKey: ';' },
    Digit5: { key: 5, altKey: '%' },
    Digit6: { key: 6, altKey: ':' },
    Digit7: { key: 7, altKey: '?' },
    Digit8: { key: 8, altKey: '*' },
    Digit9: { key: 9, altKey: '(' },
    Digit0: { key: 0, altKey: ')' },
    Equal: { key: '=', altKey: '+' },
    Minus: { key: '-', altKey: '_' },
    Backslash: { key: '\\', altKey: '/' },
    Slash: { key: '.', altKey: ',' },
    KeyF: { key: 'а' },
    Comma: { key: 'б' },
    KeyD: { key: 'в' },
    KeyU: { key: 'г' },
    KeyL: { key: 'д' },
    KeyT: { key: 'е' },
    Backquote: { key: 'ё' },
    Semicolon: { key: 'ж' },
    KeyP: { key: 'з' },
    KeyB: { key: 'и' },
    KeyQ: { key: 'й' },
    KeyR: { key: 'к' },
    KeyK: { key: 'л' },
    KeyV: { key: 'м' },
    KeyY: { key: 'н' },
    KeyJ: { key: 'о' },
    KeyG: { key: 'п' },
    KeyH: { key: 'р' },
    KeyC: { key: 'с' },
    KeyN: { key: 'т' },
    KeyE: { key: 'у' },
    KeyA: { key: 'ф' },
    BracketLeft: { key: 'х' },
    KeyW: { key: 'ц' },
    KeyX: { key: 'ч' },
    KeyI: { key: 'ш' },
    KeyO: { key: 'щ' },
    BracketRight: { key: 'ъ' },
    KeyS: { key: 'ы' },
    KeyM: { key: 'ь' },
    Quote: { key: 'э' },
    Period: { key: 'ю' },
    KeyZ: { key: 'я' },
  },
  Tab: {
    keyType: 'function',
    width: 'wide',
    displayType: 'icon-font',
    displayKey: 'keyboard_tab',
  },
  Delete: {
    keyType: 'function',
    width: 'wide',
    displayType: 'icon-font',
    displayKey: 'delete',
  },
  Enter: {
    keyType: 'function',
    width: 'wide',
    displayType: 'icon-font',
    displayKey: 'keyboard_return',
  },
  ShiftRight: {
    keyType: 'function',
    displayType: 'icon-font',
    displayKey: 'keyboard_double_arrow_up',
  },
  ShiftLeft: {
    keyType: 'function',
    width: 'wide',
    displayType: 'icon-font',
    displayKey: 'keyboard_double_arrow_up',
  },
  Language: {
    keyType: 'function',
    width: 'wide',
    displayType: 'icon-font',
    displayKey: 'language',
  },
  ControlLeft: {
    keyType: 'function',
    width: 'wide',
    displayType: 'icon',
    displayKey: 'Ctrl',
  },
  ControlRight: {
    keyType: 'function',
    width: 'wide',
    displayType: 'icon',
    displayKey: 'Ctrl',
  },
  AltLeft: {
    keyType: 'function',
    displayType: 'icon',
    displayKey: 'Alt',
  },
  AltRight: {
    keyType: 'function',
    displayType: 'icon',
    displayKey: 'Alt',
  },
  Backspace: {
    keyType: 'function',
    width: 'wide',
    displayType: 'icon-font',
    displayKey: 'backspace',
  },
  CapsLock: {
    keyType: 'function',
    width: 'wide',
    displayType: 'icon-font',
    displayKey: 'keyboard_capslock',
    isSwitchable: true,
  },
  Space: {
    keyType: 'function',
    width: 'extra-wide',
    displayType: 'icon-font',
    displayKey: 'space_bar',
    isSwitchable: true,
  },
  ArrowUp: {
    keyType: 'function',
    displayType: 'icon-font',
    displayKey: 'keyboard_control_key',
  },
  ArrowDown: {
    keyType: 'function',
    displayType: 'icon-font',
    displayKey: 'keyboard_arrow_down',
  },
  ArrowLeft: {
    keyType: 'function',
    displayType: 'icon-font',
    displayKey: 'keyboard_arrow_left',
  },
  ArrowRight: {
    keyType: 'function',
    displayType: 'icon-font',
    displayKey: 'keyboard_arrow_right',
  },
};
