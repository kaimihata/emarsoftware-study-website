var config = new Config();
var db = new Database(config.config, databaseReadyCallback);

function databaseReadyCallback() {
  console.log('currUser:', firebase.auth().currentUser.uid);
}

function signIn() {
  var login = document.getElementById("loginID").value
  if (login.length != 0) {
    if (firebase.auth().currentUser.displayName != login) {
      firebase.auth().currentUser.updateProfile({
        displayName: login
      }).then(() => {
        console.log(login);
        console.log(firebase.auth().currentUser.displayName);
        Database.displayName = login;
        Database.handleSignIn();
        window.location.href = 'index.html';
      }).catch((error) => {
        console.log("Error: ", error);
      });
    }
  }  
  else {
    alert("Please enter your login ID as specified in your instructional kit & try again.");
  }
}