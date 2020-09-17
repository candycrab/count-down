function loader(_success) {
  // assign variable
  var obj = getElement(".preloader"),
    inner = getElement(".preloader_inner"),
    bodyBg = getElement(".body-bg");
  // % number
  var w = 0,
    // set intervale
    t = setInterval(function () {
      // set % number
      w = w + 1;
      inner.textContent = w + "%";
      // add body bg class name
      bodyBg.classList.add("hidden");

      if (w === 100) {
        // remove class name
        obj.classList.remove("show");
        bodyBg.classList.remove("hidden");
        clearInterval(t);
        w = 0;
        if (_success) {
          return _success();
        }
      }
    }, 20);
}

// funtion call
window.addEventListener("load", () => {
  loader();
});
