// Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAscGipuI-MUA6G9n5I0ne_pkIH0ekLjK4",
  authDomain: "contact-firebase-10a0a.firebaseapp.com",
  databaseURL: "https://contact-firebase-10a0a-default-rtdb.firebaseio.com",
  projectId: "contact-firebase-10a0a",
  storageBucket: "contact-firebase-10a0a.appspot.com",
  messagingSenderId: "1099174326929",
  appId: "1:1099174326929:web:c780a7d08e01a00c684530"
};
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Reference to your entire Firebase database
  var database = firebase.database().ref("contact-firebase");
  
  document.getElementById("userForm").addEventListener("submit", subForm);

  function subForm(e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var msg = document.getElementById("msg").value;

    saveMsg(name, email, password , msg);

    document.getElementById("userForm").reset();
  }

  const saveMsg = (name, email, password , msg) => {
      var newCont = database.push();

      newCont.set({
        name: name,
        email: email,
        password: password,
        msg: msg
      })
  }
  
  

  