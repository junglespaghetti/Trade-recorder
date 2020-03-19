function startMain(){
    
//alert(Dexie.exists("MyDatabase"));

createFrame();

//var db = Dexie("MyDatabase");

//alert(db);
/*
db.friends.add({ name: "test", age: "test note" });

var opt = {
  delimiter: "<>"
};

db.friends.toArray().then(function(data) {
  alert(Papa.unparse(data, opt));
});
*/
}

function createFrame(){
 jsPanel.create({
  headerToolbar: '<span id="bus"><i class="fas fa-sign-in-alt"></i></span>'+
                 '<span id="train"><i class="fad fa-train fa-fw"></i></span>'+
                 '<span id="car"><i class="fad fa-car fa-fw"></i></span>'+
                 '<span id="bicycle"><i class="fad fa-bicycle fa-fw"></i></span>',
  callback: function (panel) {
    this.headertoolbar.querySelectorAll('span').forEach(function(item) {
      item.style.cursor = 'pointer';
      item.style.marginRight = '4px';
      item.addEventListener('click', function() {
        panel.content.innerHTML = 'You clicked the ' + item.id + ' icon!';
      });
    });
  }
});
}
function createIdexedDB(){
var db = new Dexie("MyDatabase");
db.version(1).stores({
  friends: "++id, name, age, *tags",
  gameSessions: "id, score"
});
}
