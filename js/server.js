console.log("connected");



dbLABORATORIA = new PouchDB('1c944a9e-45ef-40c4-a388-7412a0b4462d-bluemix:de0bdfd4bf2bfad8b0752ce3fc5f19cf6c65a20689273455cc13cd2e257ab2ea@https://1c944a9e-45ef-40c4-a388-7412a0b4462d-bluemix:de0bdfd4bf2bfad8b0752ce3fc5f19cf6c65a20689273455cc13cd2e257ab2ea@1c944a9e-45ef-40c4-a388-7412a0b4462d-bluemix.cloudantnosqldb.appdomain.cloud/test2');


function read(){
dbLABORATORIA.find({
    selector: {_id: {$gt:0}},
    sort: ['_id']
  }).then(function (result) {
    console.log(result['docs']);
    document.getElementById("value").innerHTML= result['docs'][5]['municipio']
  });
};


