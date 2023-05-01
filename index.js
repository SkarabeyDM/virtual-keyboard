import Keyboard from './js/view/keyboard.mjs';
import createElement from './js/view/view_tools.mjs';

const OPTIONS = {
  language: 'russian',
};

const keyboardLayout = [
  ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
  ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
  ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
  ['ShiftLeft', 'Language', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
  ['ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
];

const WRAPPER = createElement('div', { className: 'wrapper' });
const TEXT_AREA = createElement('textarea', {
  className: 'textarea',
  id: 'textarea',
  name: 'textarea',
  rows: '5',
  placeholder: 'Input text',
});

WRAPPER.append(TEXT_AREA);
document.body.appendChild(WRAPPER);
const keyboard = new Keyboard(OPTIONS, TEXT_AREA);
keyboard.initKeyboard(keyboardLayout);

WRAPPER.appendChild(keyboard.keyboardElement);
