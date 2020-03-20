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
  headerToolbar: '<select name="name" id="sampleSelect"><option value="1">Watch list</option></select>' +
                 '<span id="bus"><i class="fas fa-file-import"></i></i></span>'+
                 '<span id="train"><i class="fas fa-file-download"></i></span>'+
                 '<span id="car"><i class="fas fa-hand-holding-usd"></i></span>'+
                 '<span id="car"><i class="fas fa-money-check-alt"></i></span>'+
                 '<span id="car"><i class="fas fa-chart-line"></i></span>'+
                 '<span id="bicycle"><i class="fas fa-calculator"></i></span>',
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
