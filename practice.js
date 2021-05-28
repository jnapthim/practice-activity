// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDD7olbGJR0Xu0fGGShjrS6KZgYVI3WLFc",
    authDomain: "class-test-d0097.firebaseapp.com",
    databaseURL: "https://class-test-d0097-default-rtdb.firebaseio.com",
    projectId: "class-test-d0097",
    storageBucket: "class-test-d0097.appspot.com",
    messagingSenderId: "1076918427397",
    appId: "1:1076918427397:web:9c87fc81167b16e9dbe16c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"add user"
    });
}