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
        content: '<p id="two">Right click this paragraph ...</p>'+
                 '<p>Left click the header logo (hamburger icon) to create another menu.</p>',
        position: 'center 150 100',
        theme: 'danger',
        headerLogo: '<span id="three" class="fa fa-bars" style="margin-left:8px;cursor:pointer;"></span>',
        callback: function(panel) {
            jsPanel.contextmenu.create({
                target: panel.headerlogo,
                contentSize: 'auto auto',
                callback: function () {
                    this.content.style.padding = '0';
                }
            }, 'click');
        }
    });
});

});
}
function createIdexedDB(){
var db = new Dexie("MyDatabase");
db.version(1).stores({
  friends: "++id, name, age, *tags",
  gameSessions: "id, score"
});
}
