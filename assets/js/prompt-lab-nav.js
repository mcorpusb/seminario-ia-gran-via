(function () {
  'use strict';
  // Preserve the theme's list, expanders and event handlers; do not add entries.
  var translations = window.__promptLabTranslations || [];
  document.querySelectorAll('.site-nav a.nav-list-link').forEach(function (anchor) {
    var match = translations.find(function (entry) {
      return entry.from === anchor.getAttribute('href');
    });
    if (!match) return;
    anchor.setAttribute('href', match.to);
    anchor.textContent = match.title;
    anchor.setAttribute('lang', 'ca-valencia');
    var expander = anchor.parentElement.querySelector('.nav-list-expander');
    if (expander) expander.setAttribute('aria-label', 'Obri ' + match.title);
  });
})();
