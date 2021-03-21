import Debounce from 'lodash/debounce';
import Trianglify from 'trianglify';

let _canvasHeight,
  _canvasWidth,
  _target;

const init = target => {
  _target = target;
  _generatePattern(_target);
  _attachEventListeners();
};

const _attachEventListeners = () => {
  window.addEventListener('resize', Debounce(() => {
    // Only update on horizontal resize change
    if (_canvasWidth !== _target.clientWidth) {
      _generatePattern(_target);
    }
  }, 250));
};

const _generatePattern = () => {
  _canvasHeight = _target.offsetHeight || 120;
  _canvasWidth = _target.clientWidth || 2400;

  const _patternOptions = {
    variance: 0.85,
    palette: Trianglify.colorbrewer,
    colorSpace: 'rgb',
    height: _canvasHeight * 2,
    width: _canvasWidth * 2,
    strokeWidth: 100 * 2,
    xColors: [
      "#a6bddb",
      "#67a9cf",
      "#3690c0",
      "#02818a",
      "#016c59",
      "#014636"
    ],
    yColors: [
      "#ffffff",
      // "#f0f0f0",
      "#d9d9d9",
      // "#bdbdbd",
      "#969696",
      // "#737373",
      "#525252",
      // "#252525",
      "#000000"
    ],
    cellSize: 60 * 2
  };

  const _pattern = new Trianglify(_patternOptions),
    _patternSVG = _pattern.toSVG();

  _target.style.backgroundImage = 'url(' + _patternSVG + ')';
  _target.classList.add('activate');
};

export {
  init as default
}
