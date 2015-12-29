console.log('login');
var login  = function(){

  var obj = {

    username: $('#username')[0].value,
    password: $('#password')[0].value
  }
  console.log(JSON.stringify(obj));
  $.ajax({
   //api的url
   url: 'http://140.124.181.160:8080/softwareEngineer/Login',
   dataType: 'json',
   contentType: 'application/json',
   data: JSON.stringify(obj),
   error: function(err) {
     console.log(err);
     $.msgBox({
      title: "Ooops",
      content: "ERROR occurred!!!",
      type: "error",
      showButtons: false,
      opacity: 0.9,
      autoClose:true
    });

      // $('#info').html('<p>An error has occurred</p>');
    },
    success: function(data) {
      // var $title = $('<h1>').text(data.talks[0].talk_title);
      // var $description = $('<p>').text(data.talks[0].talk_description);
      // $('#info')
      //    .append($title)
      //    .append($description);
      localStorage.setItem("id", data.id);
      console.log(data);
      location.href = "http://john78530.github.io/project.html";      
    },
    method: 'post'

  });
}
