console.log('Im script')    
const submitBtn = document.querySelector("#btn");
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  // получаем данные формы
  let registerForm = document.forms["registerForm"];
  let userName = registerForm.elements["name"].value;
  let email = registerForm.elements["email"].value;
  let password = registerForm.elements["password"].value;
  // сериализуем данные в json
  let user = JSON.stringify({userName: userName, email: email, password: password});
  console.log(`result JSON is ${user}`)

  let response =  fetch('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: user
  });
  //console.log()
  //let result =  response.json();
  //alert(result.message);
  registerForm.elements["name"].value = "";
  registerForm.elements["email"].value = "";
  registerForm.elements["password"].value = ""

});
