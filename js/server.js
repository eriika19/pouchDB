console.log("connected");



dbLABORATORIA = new PouchDB('https://c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix:9c85601cb39598bca3d063571301d5c26dea0d35b74c6a6ccb853eae1614a7a4@c5f0d712-dcca-4c03-9ad2-79f4002de1a8-bluemix.cloudant.com/test2');


function read(){
dbLABORATORIA.find({
    selector: {_id: {$gt:0}},
    sort: ['_id']
  }).then(function (result) {
    console.log(result['docs']);
    document.getElementById("value").innerHTML= result['docs'][0]['Tema']
  });
};


