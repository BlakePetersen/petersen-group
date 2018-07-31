import throttle from 'lodash/throttle';

const ProgressBar = target => {
  const _target = target;
  let _canvas,
    _canvasHeight,
    _canvasWidth,
    _ctx,
    _raf,
    _scrollDepth;

  const init = function () {
    _createCanvas();
    _drawCanvas();
    _attachEventListeners();
  };

  var _attachEventListeners = function () {
    window.addEventListener('resize', throttle(function () {
      _createCanvas();
      _drawCanvas();
    }, 50));
  };

  var _createCanvas = function () {
    // Reset
    _destroyCanvas(_canvas);
    _canvasHeight = _target.offsetHeight;
    _canvasWidth = _target.clientWidth;

    // Create Canvas
    _canvas = document.createElement('canvas');
    _canvas.setAttribute('height', _canvasHeight);
    _canvas.setAttribute('width', _canvasWidth);

    // Set Context
    _ctx = _canvas.getContext('2d');

    // Add Canvas to DOM
    _target.appendChild(_canvas);
  };

  var _destroyCanvas = function (canvas) {
    if (canvas) { canvas.parentNode.removeChild(canvas); }
  };

  var _drawCanvas = function () {
    _raf = _requestAnimationFrame(_drawCanvas);

    // Reassess scroll position relative to when target is at top of viewport
    _scrollDepth = window.pageYOffset;

    // Reset Canvas
    _ctx.clearRect(0, 0, _canvasWidth, _canvasHeight);
    _ctx.save();

    // Draw element
    _ctx.beginPath();
    _ctx.fillStyle = '#708fb3';
    _ctx.rect(0, 0, _canvasWidth * (_scrollDepth / (document.body.scrollHeight - window.innerHeight)), _canvasHeight);
    _ctx.fill();
    _ctx.restore();
  };

  var _requestAnimationFrame = window.requestAnimationFrame;

  return {
    init: init
  };
};

export default ProgressBar;
