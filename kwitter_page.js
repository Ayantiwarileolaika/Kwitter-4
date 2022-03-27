var firebaseConfig = {
	apiKey: "AIzaSyCabbIuma68C78ED__NYPmSpZUawqF4Goo",
	authDomain: "tictactoe-2734c.firebaseapp.com",
	databaseURL: "https://tictactoe-2734c.firebaseio.com",
	projectId: "tictactoe-2734c",
	storageBucket: "tictactoe-2734c.appspot.com",
	messagingSenderId: "541541482046",
	appId: "1:541541482046:web:b946e4b7a9a8dfcffd5b6f",
	measurementId: "G-3DCZFNQ45Q"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name + "<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class = 'message_h4'>"+message+"</h4>";  
like_button = "<button class='btn btn-info' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button></hr>";
reactions_tag = "<button id=👍 onclick=><img class='like' src='like.gif'><button id=❤️ onclick=><img class='love' src='heart.gif'><button id=😂 onclick=><img class='laugh' src='laugh.gif'><button id=😯 onclick=><img class='wow' src='wow.gif'><button id=😥 onclick=><img class='sad' src='sad.gif'><button id=😡 onclick=><img class='angry' src='angry.gif'>";





row = name_with_tag+message_with_tag+like_button+span_with_tag+reactions_tag;
document.getElementById("output").innerHTML += row;
//End code
     } });  }); }
getData();
function Logout() {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location = "index.html";
}
function Send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
}
function updateLike(message_id){
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      })
}
function reactLike(){

}