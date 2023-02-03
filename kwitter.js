function add_user(){
    Username = document.getElementById("username").value ;
    localStorage.setItem("User_name" , Username) ;
    window.location = "kwitter_room.html" ;
}