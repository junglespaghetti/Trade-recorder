javascript: (function(f, urls, i, s) {
  urls = [
    "https://junglespaghetti.github.io/trade-recorder/js/trade-recoder.js",
    "https://cdn.jsdelivr.net/npm/jsframe.js@1.5.16/lib/jsframe.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.1.0/papaparse.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/dexie/2.0.4/dexie.min.js"
  ];
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
