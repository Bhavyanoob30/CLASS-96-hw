//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCqrHmH0XXVBc0scsAW2hnvi170ppmRgYE",
    authDomain: "kwitter1-829c1.firebaseapp.com",
    databaseURL: "https://kwitter1-829c1-default-rtdb.firebaseio.com",
    projectId: "kwitter1-829c1",
    storageBucket: "kwitter1-829c1.appspot.com",
    messagingSenderId: "504142029571",
    appId: "1:504142029571:web:4708a0e99f686b0b623f36"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig) ;

  username = localStorage.getItem("User_name") ;
room_name = localStorage.getItem("roomname") ;

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    console.log(firebase_message_id);
    console.log(message_data);

    name = message_data["name"] ;
    like = message_data["like"] ;
    message = message_data["message"] ;

    name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>" ;
    like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

    row = name_with_tag + message_with_tag + like_button + span_with_tag ;
    document.getElementById("output").innerHTML += row ;
//End code
    } });  }); }
getData();


function updateLike(message_id){
    console.log(message_id);
    button_id = message_id ;
    like = document.getElementById(button_id).value ;
    updateLikes = Number(like) + 1 ;
    
    firebase.database().ref(room_name).child(message_id).update({
       
          like: updateLikes
    });


}
function logout()
{
    localStorage.removeItem("User_name") ;
    localStorage.removeItem("roomname") ;
    window.location = "index.html" ;
}

function messagesent()
{
    console.log("hello") ;
   messagevalue =  document.getElementById("message").value  ;
   firebase.database().ref(room_name).push({
     
    name: username, 
    message: messagevalue,
    like: 0
   }) ;

   document.getElementById("message").value = "" ;
}