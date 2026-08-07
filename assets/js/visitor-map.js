(function () {
  "use strict";

  var visitorMap = document.querySelector("[data-visitor-map]");
  if (!visitorMap) return;

  var widget = visitorMap.querySelector("[data-visitor-map-widget]");
  var fallback = visitorMap.querySelector("[data-visitor-map-fallback]");
  if (!widget || !fallback) return;

  function hasPageviewCount() {
    var count = widget.querySelector(".mapmyvisitors-visitors");
    return Boolean(count && /\d/.test(count.textContent));
  }

  var observer = new MutationObserver(function () {
    if (!hasPageviewCount()) return;

    visitorMap.classList.add("visitor-map--ready");
    visitorMap.classList.remove("visitor-map--failed");
    observer.disconnect();
  });

  observer.observe(widget, {
    childList: true,
    subtree: true,
    characterData: true
  });

  if (hasPageviewCount()) {
    visitorMap.classList.add("visitor-map--ready");
    observer.disconnect();
    return;
  }

  window.setTimeout(function () {
    if (!hasPageviewCount()) {
      visitorMap.classList.add("visitor-map--failed");
    }
  }, 6000);
}());
