import KeyView from './key_view.mjs';
import createElement, { KEY_DICTIONARY } from './view_tools.mjs';

export default class Keyboard {
  keys = new Map();

  constructor(options, textArea) {
    this.keyboardElement = createElement('div', { className: 'keyboard' });
    this.keysLayoutElement = createElement('div', { className: 'keyboard__keys' });
    this.keyboardElement.appendChild(this.keysLayoutElement);
    this.language = options.language;

    this.textArea = textArea;

    document.addEventListener('keydown', (e) => {
      this.click(e.code, true);
    });
    document.addEventListener('keyup', (e) => {
      this.click(e.code, false);
    });
  }

  /**
   * @param {string[][]} keyboardLayout
   */
  initKeyboard(keyboardLayout) {
    keyboardLayout.forEach((row) => {
      const rowElement = createElement('div', { className: 'keyboard__row' });
      this.keysLayoutElement.appendChild(rowElement);

      row.forEach((key) => {
        try {
          const keyObj = new KeyView(KEY_DICTIONARY.getKey(key, this.language));
          this.keys.set(key, keyObj);
          rowElement.appendChild(keyObj.keyElement);
        } catch {
          (() => { })();
        }
      });
    });
  }

  /**
   * @param {string} key
   * @param {boolean} state
   */
  click(key, state) {
    if (!this.keys.has(key)) return;

    const keyObj = this.keys.get(key);
    keyObj.click = state;
  }
}
