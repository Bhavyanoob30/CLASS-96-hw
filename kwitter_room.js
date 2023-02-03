//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyCqrHmH0XXVBc0scsAW2hnvi170ppmRgYE",
  authDomain: "kwitter1-829c1.firebaseapp.com",
  databaseURL: "https://kwitter1-829c1-default-rtdb.firebaseio.com",
  projectId: "kwitter1-829c1",
  storageBucket: "kwitter1-829c1.appspot.com",
  messagingSenderId: "504142029571",
  appId: "1:504142029571:web:4708a0e99f686b0b623f36"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


    username= localStorage.getItem("User_name") ;
    document.getElementById("username").innerHTML = "Welcome " + username + "!" ;

    function add_room()
    {
      roomName = document.getElementById("room_name").value ;
      localStorage.setItem("roomname" , roomName) ;
      firebase.database().ref("/").child(roomName).update({

            purpose: "adding a room name"
      }) ;
      
      window.location = "kwitter_page.html" ;
    }

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" +Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row ;
     //End code
     });});}

getData();

function redirectToRoomName(id_name)
{
     console.log(id_name) ;
     localStorage.setItem("roomname" , id_name) ;
     window.location = "kwitter_page.html" ;
}

function log_out()
{
      localStorage.removeItem("User_name") ;
      localStorage.removeItem("roomname") ;
      window.location = "index.html" ;
}