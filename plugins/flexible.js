;(function (win) {
  const doc = win.document
  const docEl = doc.documentElement
  let tid

  function refreshRem() {
    const width = docEl.getBoundingClientRect().width
    const rem = width / 10 // 将屏幕宽度分成 10 份，1 份为 1rem
    docEl.style.fontSize = rem + 'px'
    // console.log(0.14*rem);
  }

  win.addEventListener(
    'resize',
    function () {
      clearTimeout(tid)
      tid = setTimeout(refreshRem, 10)
    },
    false
  )

  win.addEventListener(
    'pageshow',
    function (e) {
      if (e.persisted) {
        clearTimeout(tid)
        tid = setTimeout(refreshRem, 10)
      }
    },
    false
  )

  refreshRem()
})(window)
