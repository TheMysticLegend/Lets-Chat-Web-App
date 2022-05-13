
var firebaseConfig = {
      apiKey: "AIzaSyDTWgKSqSi3if2svGfsuoEn8V66507HTbo",
      authDomain: "lets-chat-web-app-dc08c.firebaseapp.com",
      databaseURL: "https://lets-chat-web-app-dc08c-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-app-dc08c",
      storageBucket: "lets-chat-web-app-dc08c.appspot.com",
      messagingSenderId: "732224530502",
      appId: "1:732224530502:web:e4ded003273a384e9bc247"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

     function addRoom()
     {
        room_name = document.getElementById("room_name").value;
        firebase.database().ref("/").child(room_name).update({
              purpose:"adding roomnname"
        });
        localStorage.setItem("room_name", room_name);
        window.location = "kwitter_page.html";
     }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML = row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
     console.log(name);
     localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}