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
    theme:       {
        bgPanel: 'white',
        bgContent: 'white',
        colorHeader: 'rebeccapurple',
        colorContent: '#333',
        border: '2px solid rebeccapurple'
    },
    headerTitle: 'my panel #1',
    position:    'center-top 0 58',
    contentSize: '450 250',
    content:     '<p>Example panel ...</p>',
    callback: function () {
       jsPanel.setStyles(this.content, {
           borderRadius: '1.0rem'
        });
    },
    onbeforeclose: function () {
        return confirm('Do you really want to close the panel?');
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
