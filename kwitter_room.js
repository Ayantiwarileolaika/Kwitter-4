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
function getData() {
	firebase.database().ref("/").on('value', function (snapshot) {
		document.getElementById("output").innerHTML = "";
		snapshot.forEach(function (childSnapshot) {
			childKey = childSnapshot.key;
			Room_names = childKey;
			console.log("Room_Name - " + Room_names);
			row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
			document.getElementById("output").innerHTML += row;

		});
	});
}
getData();

function addroom()
{
	room_name = document.getElementById("room_name").value;
	firebase.database().ref("/").child(room_name).update({
		purpose : "adding room name"
	});

	  localStorage.setItem("room_name", room_name);


	  window.location = "kwitter_page.html";

	  
}

function redirectToRoomName(name)
{
	console.log(name);
	localStorage.setItem("room_name",name);
	window.location = "kwitter_page.html";
}

function Logout() {
	localStorage.removeItem("user_name");
	localStorage.removeItem("room_name");
	window.location = "index.html";
 }