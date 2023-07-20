


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAuo_EoVZ9lTgiSamWIXIjneEdMlgC68E",
  authDomain: "kwitter-701f8.firebaseapp.com",
  projectId: "kwitter-701f8",
  storageBucket: "kwitter-701f8.appspot.com",
  messagingSenderId: "288457077348",
  appId: "1:288457077348:web:8b850f19c563b8c6406571"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room_name - "+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"></div><hr>"

      
      });});}
getData();

function addRoom(){
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"

  });
  localStorage.setItem("Room_name", name);

    window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";

}
