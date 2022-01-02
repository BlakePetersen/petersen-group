import Debounce from 'lodash/debounce'

let _canvas, _canvasHeight, _canvasWidth, _ctx, _scrollDepth, _target

const init = (target) => {
  _target = target
  _createCanvas()
  _drawCanvas()
  _attachEventListeners()
}

const _attachEventListeners = () => {
  window.addEventListener(
    'resize',
    Debounce(() => {
      // Only update on horizontal resize change
      if (_canvasWidth !== _target.clientWidth) {
        _createCanvas()
        _drawCanvas()
      }
    }, 250)
  )
}

const _createCanvas = () => {
  // Reset
  _destroyCanvas(_canvas)
  _canvasHeight = _target.offsetHeight
  _canvasWidth = _target.clientWidth

  // Create Canvas
  _canvas = document.createElement('canvas')
  _canvas.setAttribute('height', _canvasHeight)
  _canvas.setAttribute('width', _canvasWidth)

  // Set Context
  _ctx = _canvas.getContext('2d')

  // Add Canvas to DOM
  _target.appendChild(_canvas)
}

const _destroyCanvas = function (canvas) {
  if (canvas) {
    canvas.parentNode.removeChild(canvas)
  }
}

const _drawCanvas = function () {
  window.requestAnimationFrame(_drawCanvas)

  // Reassess scroll position relative to when target is at top of viewport
  _scrollDepth = window.pageYOffset

  // Reset Canvas
  _ctx.clearRect(0, 0, _canvasWidth, _canvasHeight)
  _ctx.save()

  // Draw element
  _ctx.beginPath()
  _ctx.fillStyle = '#708fb3'
  _ctx.rect(
    0,
    0,
    _canvasWidth *
      (_scrollDepth / (document.body.scrollHeight - window.innerHeight)),
    _canvasHeight
  )
  _ctx.fill()
  _ctx.restore()
}

export { init as default }
