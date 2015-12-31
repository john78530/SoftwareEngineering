console.log('login');
var login  = function(){

  var obj = {

    username: $('#username')[0].value,
    password: $('#password')[0].value
  }

  ///////////
  $.ajax({
        url: 'http://140.124.181.160:8080/softwareEngineer/Login',
        type:"POST",
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(obj),
        success: function(msg){
          var userData = eval(msg);
          console.log(userData);
          localStorage.setItem("user_id", userData.id);
          localStorage.setItem("user_name", userData.username);
          localStorage.setItem("user_email", userData.email);
          location.href = "./project.html";
        },
        error:function(err){
          console.log(err);
          $.msgBox({
           title: "Ooops",
           content: "ERROR occurred!!!",
           type: "error",
           showButtons: false,
           opacity: 0.9,
           autoClose:true
         });
        }
  });
}
