javascript: (function(f, urls,cssUlrs, i, s,c) {
  urls = [
    "https://cdn.jsdelivr.net/npm/i18n-js@3.5.1/app/assets/javascripts/i18n.min.js",
    "https://cdn.jsdelivr.net/npm/jspanel4@4.9.4/dist/jspanel.js",
    "https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.1.0/papaparse.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/dexie/2.0.4/dexie.min.js",
    "https://junglespaghetti.github.io/trade-recorder/js/trade-recoder.js"
  ];
  cssUlrs = [
    "https://cdn.jsdelivr.net/npm/jspanel4@4.9.4/dist/jspanel.css",
    "https://junglespaghetti.github.io/trade-recorder/js/trade-recoder.css"   
  ];
  for (i = 0; i < cssUlrs.length; i++) {
    c = document.createElement("link");
    c.type = "text/css";
    c.rel = "stylesheet";
    c.href = cssUlrs[i];
    document.body.appendChild(c);
    }
  for (i = 0; i < urls.length; i++) {
    s = document.createElement("script");
    s.src = urls[i];
    if (i == urls.length - 1) {
      s.onload = function() {
        f();
      };
    }
    document.body.appendChild(s);
  }
})(function() {
  startMain();
});
