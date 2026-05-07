(function () {
  'use strict';

  var KEY = 'aw-palette';
  var root = document.documentElement;

  function read() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function write(v) {
    try {
      if (v) localStorage.setItem(KEY, v);
      else localStorage.removeItem(KEY);
    } catch (e) {}
  }

  function apply(p) {
    if (p === 'ink') root.setAttribute('data-palette', 'ink');
    else root.removeAttribute('data-palette');
  }

  // initial paint already handled by inline head script; this is defensive
  apply(read());

  function build() {
    if (document.querySelector('.palette-toggle')) return;
    var btn = document.createElement('button');
    btn.className = 'palette-toggle';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Toggle palette');
    btn.setAttribute('title', 'Toggle palette');
    btn.addEventListener('click', function () {
      var cur = root.getAttribute('data-palette');
      var next = cur === 'ink' ? '' : 'ink';
      apply(next);
      write(next);
    });
    document.body.appendChild(btn);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
