
  async function loginData() {
    try{
      let id = document.querySelector("#username").value;
      let pass = document.querySelector("#password").value;
      let mail = {email: id,
                  password: pass}
                let response = await fetch("https://bigbasketnewdb.herokuapp.com/login",{
                method:"POST",
                body:JSON.stringify(mail),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            let data = await response.json()
            // nameApnd()
            if(data.message){
              
              alert(data.message)
            }
            else{
              alert("Successfully Logged In ")
              window.location.href="index.html";
            }
    }catch(err){
        console.log(err.message)
    }
  }

  //   function nameApnd(){
  //     let userData = JSON.parse(localStorage.getItem("UserInfo")) || null;
  //     if(userData){
  //       let uName = document.getElementById("loginbutton");
  //       uName.innerHTML = userData.user.name;
  //     }
  // }

function loginWithGoogle(){
  window.location.href="https://bigbasketnewdb.herokuapp.com/auth/google"
}