function startMain(){
var db = new Dexie("MyDatabase");

db.friends.add({ name: "test", age: "test note" });

var opt = {
  delimiter: "<>"
};

db.friends.toArray().then(function(data) {
  alert(Papa.unparse(data, opt));
});
}

function createFrame(){
const jsFrame = new JSFrame();
//Create window
const frame01 = jsFrame
  .create({
    title: "Yosemite style",
    left: 20,
    top: 20,
    width: 320,
    height: 220,
    appearanceName: "yosemite", //Now preset is selectable from  'yosemite','redstone','popup'
    style: {
      backgroundColor: "rgba(255,255,255,0.9)"
    },
    html: '<div id="jsframe-html-top"></div>'
  })
  .show();
}
function createIdexedDB(){
var db = new Dexie("MyDatabase");
db.version(1).stores({
  friends: "++id, name, age, *tags",
  gameSessions: "id, score"
});
}