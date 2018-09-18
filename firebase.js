var app_fireBase = {};

// var sport_map = new Map();

// var firebase = require("firebase/app");

var config = {
    apiKey: "AIzaSyB0Zzt6C7XBeVHuSeYH-L__OnJcs831QeY",
    authDomain: "bosm-18-1522766608739.firebaseapp.com",
    databaseURL: "https://bosm-18-1522766608739.firebaseio.com",
    projectId: "bosm-18-1522766608739",
    storageBucket: "bosm-18-1522766608739.appspot.com",
    messagingSenderId: "753293163223"
  };
  firebase.initializeApp(config);
  app_fireBase = firebase;

var img = new Array();
var check = 0;

var db = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
db.settings(settings);
var status, round_id;
var storage = firebase.storage();
var storageRef = storage.ref();
function setImage(name){
             
             storageRef.child('images/'+name).getDownloadURL().then(function(url) {
            alert(url);
            document.getElementById('myImg1').src = url;
            console.log(url);
            
          //    var i; var n=url.length;
          //   for(i=0;i<n;i++){
          //   document.getElementById('myImg'+i).src = url[0];
          //   if(day==19){
          //     var divelement = document.createElement("Div");
          //     divelement.id="divID";
          //     document.getElementById('divID').classList.add("box");


          //   }
          // }          
          }).catch(function(error) {
             console.log("Error getting image: ", error);
          });
}
  db.collection("photos")
      .get()
      .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
              console.log(doc.id, " => ", doc.data().name);
              // alert(123);
              setImage(doc.data().name);
              // img[check] = doc.data().name;
              // console.log(check);
              // ++check;/
              });
            })
            .catch(function(error) {
              alert(34);
              console.log("Error getting documents: ", error);
            });



// setImage('app2.jpg');