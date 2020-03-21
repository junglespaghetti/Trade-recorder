const easyIndexedDB = "easyIndexedDB"

function startMain(){
createFrame();
}

async function getRecorderDB(){

var db = new Dexie(recorderDBName);
let openRequest = indexedDB.open(recorderDBName, 1)
openRequest.onupgradeneeded = function() {
  let db2 = openRequest.result;
  alert(db2.version);
};
db.version(1).stores({
    friends: `name, age`
})
await db.friends.add({ name: "test", age: "test note" });

var opt = {
  delimiter: "<>"
};
alert("aaa");

db.friends.toArray().then(function(data) {
  alert(Papa.unparse(data, opt));
});
    
}

function iniEasyIdexedDB(){
    alert("aaa");
Dexie.exists(easyIndexedDB).then(function(exists){
    var eDB = new Dexie(easyIndexedDB);
    if(!exists){
        eDB.version(1).stores({
        dbList: "++id, name, version, table ",
        settings: "name, value"
        }).open();
        eDB.dbList.add({name:easyIndexedDB,version:1,table:["dbList","settings"]});
        eDB.settings.add({name:"status",value:"new"});
    }else{
        eDB.version(1).open();
    }
eDB.dbList.toArray().then(function(data) {
    let dataList = document.getElementById("db-list");
    
    data.forEach(function(val){
        let option = document.createElement("option");
        option.text = val.name;
        option.value = val.name;
        dataList.appendChild(option);
    })
});
});
}


function createFrame(){

 jsPanel.create({
    headerTitle: 'host:' + location.hostname,
    position:    'center-top 0 58',
    contentSize: '450 250',
    headerLogo:'<input type="text" name="a" list="db-list" placeholder="input DB name" autocomplete="off" style="margin-left:8px;"><datalist id="db-list"><option value="this db"></datalist>',
    headerToolbar: '<input type="text" name="a" list="table-list" placeholder="input Table name" autocomplete="off"><datalist id="table-list"><option value="table"></datalist>' +
                    '<div style="margin-left:8px;">' +               
                    '<span id="bus"><i class="fas fa-file-import fa-lg"></i></i></span>'+
                   '<span id="train"><i class="fas fa-file-download fa-lg"></i></span>'+
                    '<span id="car"><i class="fas fa-hand-holding-usd fa-lg"></i></span>'+
                 '<span id="car"><i class="fas fa-money-check-alt fa-lg"></i></span>'+
                 '<span id="car"><i class="fas fa-chart-line fa-lg"></i></span>'+
                 '<span id="bicycle"><i class="fas fa-calculator fa-lg"></i></span>' +
                 '</div>',
  callback: function (panel) {
      alert("aaa");
    Dexie.exists(easyIndexedDB).then(function(exists){
    var eDB = new Dexie(easyIndexedDB);
    if(!exists){
        eDB.version(1).stores({
        dbList: "++id, name, version, table ",
        settings: "name, value"
        }).open();
        eDB.dbList.add({name:easyIndexedDB,version:1,table:["dbList","settings"]});
        eDB.settings.add({name:"status",value:"new"});
    }else{
        eDB.version(1).open();
    }
eDB.dbList.toArray().then(function(data) {
    let dataList = document.getElementById("db-list");
    
    data.forEach(function(val){
        let option = document.createElement("option");
        option.text = val.name;
        option.value = val.name;
        dataList.appendChild(option);
    })
});
});
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

