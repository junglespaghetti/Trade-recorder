function startMain(){
    var easyIndexedDB = jsPanel.create({
        headerTitle: 'host:' + location.hostname,
        position:    'center-top 0 58',
        contentSize: '450 250',
        headerLogo:'<input type="text" id="db-input" list="db-list" placeholder="input DB name" autocomplete="off" style="margin-left:8px;font-size:8pt;"><datalist id="db-list"><option value="this db"></datalist>',
        headerToolbar: '<input type="text" id="table-input" list="table-list" placeholder="input Table name" autocomplete="off" style="font-size:8pt;"><datalist id="table-list"><option value="table"></datalist>' +
                    '<div style="margin-left:8px;">' +               
                    '<span id="bus"><i class="fas fa-file-import fa-lg"></i></i></span>'+
                    '<span id="train"><i class="fas fa-file-download fa-lg"></i></span>'+
                    '<span id="car"><i class="fas fa-hand-holding-usd fa-lg"></i></span>'+
                    '<span id="car"><i class="fas fa-money-check-alt fa-lg"></i></span>'+
                    '<span id="car"><i class="fas fa-chart-line fa-lg"></i></span>'+
                    '<span id="bicycle"><i class="fas fa-calculator fa-lg"></i></span>' +
                    '</div>',
        callback: function (panel) {
            Dexie.exists("easyIndexedDB").then(function(exists){
                var eDB = createEasyIndexedDB();
                if(!exists){
                    eDB.dbList.put({name:"easyIndexedDB",version:1,table:["dbList","settings"]});
                    eDB.settings.put({name:"status",value:"new"});
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
            let dbInput = document.getElementById("db-input");
            dbInput.addEventListener('change',function (event){selectDB(event)});
            let tableInput = document.getElementById("table-input");
            tableInput.addEventListener('change',function (event){selectTable(event)});
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
function createEasyIndexedDB(){
    var eDB = new Dexie("easyIndexedDB");
    eDB.version(1).stores({
        dbList: "++id, name, version, table ",
        settings: "name, value"
    });
    return eDB
}


function selectDB(event){
    alert(event.target.value);
    if(event.target.value){
        let eDB = createEasyIndexedDB();
        let val = eDB.dbList.toArray().when(function(arr){
            if(arr.length == 0){
            alert("aaa");
            }else if(arr.length == 1){
            let tableList = document.getElementById("table-list");
                arr[0]["table"].forEach(function(val){
                    let option = document.createElement("option");
                    option.text = val.name;
                    option.value = val.name;
                    tableList.appendChild(option);
                })  
            }
        });
        eDB.dbList.where("name").equalsIgnoreCase(event.target.value).toArray().then(function(arr){
            alert(arr.length);
        });
    }
}

function selectTable(event){

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
Dexie.exists("easyIndexedDB").then(function(exists){
    var eDB = new Dexie("easyIndexedDB");
    if(!exists){
        eDB.version(1).stores({
        dbList: "++id, name, version, table ",
        settings: "name, value"
        });
        eDB.dbList.add({name:"easyIndexedDB",version:1,table:["dbList","settings"]});
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
    headerLogo:'<input type="text" id="db-input" list="db-list" placeholder="input DB name" autocomplete="off" style="margin-left:8px;font-size:8pt;"><datalist id="db-list"><option value="this db"></datalist>',
    headerToolbar: '<input type="text" id="table-input" list="table-list" placeholder="input Table name" autocomplete="off" style="font-size:8pt;"><datalist id="table-list"><option value="table"></datalist>' +
                    '<div style="margin-left:8px;">' +               
                    '<span id="bus"><i class="fas fa-file-import fa-lg"></i></i></span>'+
                   '<span id="train"><i class="fas fa-file-download fa-lg"></i></span>'+
                    '<span id="car"><i class="fas fa-hand-holding-usd fa-lg"></i></span>'+
                 '<span id="car"><i class="fas fa-money-check-alt fa-lg"></i></span>'+
                 '<span id="car"><i class="fas fa-chart-line fa-lg"></i></span>'+
                 '<span id="bicycle"><i class="fas fa-calculator fa-lg"></i></span>' +
                 '</div>',
  callback: function (panel) {
      Dexie.exists("easyIndexedDB").then(function(exists){
    var eDB = new Dexie("easyIndexedDB");
    
    eDB.version(1).stores({
        dbList: "++id, name, version, table ",
        settings: "name, value"
        });
    if(!exists){
   eDB.dbList.put({name:"easyIndexedDB",version:1,table:["dbList","settings"]});
        eDB.settings.put({name:"status",value:"new"});
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
let dataInput = document.getElementById("db-input");
    dataInput.addEventListener('change',function (event){selectDB(event)});
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