const recorderDBName = "recorderDB"

function startMain(){
    
Dexie.exists(recorderDBName).then(function(exists){
    if(!exists){
        createIdexedDB();
        alert("not db");
    }
    getRecorderDB();
});

createFrame();
}

function getRecorderDB(){

var db = new Dexie(recorderDBName);
db.friends.add({ name: "test", age: "test note" });

var opt = {
  delimiter: "<>"
};
alert("aaa");

db.friends.toArray().then(function(data) {
  alert(Papa.unparse(data, opt));
});
    
}

function createIdexedDB(){
var db = new Dexie(recorderDBName);
db.version(1).stores({
  friends: "++id, name, age, *tags",
  gameSessions: "id, score"
});
db.open();
return
}


function createFrame(){
var tpl = jsPanel.createPanelTemplate();
// create container for your extra control ...
var btn = document.createElement('div');
// ... and add necessary classnames
btn.className = 'jsPanel-btn jsPanel-btn-settings';
// add icon to the container of the new control
btn.innerHTML = '<span id="colg"><i class="fas fa-cog"></i></span>';
// prepend new control to controlbar of copied jsPanel HTML template
var controls = tpl.querySelector('.jsPanel-controlbar');
controls.insertBefore(btn, controls.querySelector('.jsPanel-btn.jsPanel-btn-smallify'));

 jsPanel.create({
     emplate: tpl,
    headerTitle: 'Trade Recorder',
    position:    'center-top 0 58',
    contentSize: '450 250',
    headerLogo:'<select name="slect-db-area" id="slect-db-area" style="margin-left:10px;"><option data-group="" value="">select table</option></select>',
    headerToolbar: '<span id="bus"><i class="fas fa-file-import fa-lg"></i></i></span>'+
                   '<span id="train"><i class="fas fa-file-download fa-lg"></i></span>'+
                    '<span id="car"><i class="fas fa-hand-holding-usd fa-lg"></i></span>'+
                 '<span id="car"><i class="fas fa-money-check-alt fa-lg"></i></span>'+
                 '<span id="car"><i class="fas fa-chart-line fa-lg"></i></span>'+
                 '<span id="bicycle"><i class="fas fa-calculator fa-lg"></i></span>',
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

