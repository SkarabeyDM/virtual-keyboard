import createElement from './view_tools.mjs';

export default class KeyView extends EventTarget {
  #toggle;

  #width;

  #displayKey;

  #altKey;

  #displayType;

  #click;

  constructor({
    code,
    key = code,
    altKey = '',
    width = 'normal',
    keyType = 'value',
    displayType = 'normal',
    displayKey = key,
    isSwitchable = false,
    toggle = false,
  }) {
    super();

    this.keyElement = createElement('button', { className: 'keyboard__key' });
    this.keyElement.addEventListener('click', () => {
      const event = new KeyboardEvent('keypress', { code: this.code });
      this.dispatchEvent(event);
    });

    this.key = key;
    this.altKey = altKey;
    this.code = code;
    this.width = width;
    this.keyType = keyType;
    this.displayType = displayType;
    this.displayKey = displayKey;
    this.isSwitchable = isSwitchable;
    this.toggle = toggle;
  }

  /**
   * @param {boolean} isCaps
   * @param {boolean} isShift
   */
  getValue(isCaps, isShift) {
    if (this.keyType !== 'value') return '';

    let output = this.key;
    if (isShift && this.#altKey) {
      output = this.#altKey;
    } else if (isShift || isCaps) {
      output = output.toUppercase;
    }

    return output;
  }

  /** @param {boolean} bool */
  set toggle(bool) {
    this.#toggle = bool;
    this.keyElement.classList.toggle('pressed', bool);
  }

  get toggle() { return this.#toggle; }

  /** @param {string} width */
  set width(width) {
    this.#width = width;
    if (width !== 'normal') {
      this.keyElement.classList.add(`keyboard__key_${width}`);
    }
  }

  get width() { return this.#width; }

  /** @param {string} displayType */
  set displayType(displayType) {
    this.#displayType = displayType;
    if (displayType === 'icon') {
      this.keyElement.classList.add(displayType);
    } else if (displayType === 'icon-font') {
      this.keyElement.classList.add('icon', displayType);
    }
  }

  get displayType() { return this.#displayType; }

  /** @param {string} key */
  set displayKey(key) {
    this.#displayKey = key;
    this.keyElement.dataset.key = key;
  }

  get displayKey() { return this.#displayKey; }

  /** @param {string} altKey */
  set altKey(altKey) {
    this.#altKey = altKey;
    this.keyElement.dataset.altKey = altKey;
  }

  get altKey() { return this.#altKey; }

  /** @param {boolean} bool */
  set click(bool) {
    this.#click = bool;
    this.keyElement.classList.toggle('click', bool);
  }

  get click() { return this.#click; }
}
