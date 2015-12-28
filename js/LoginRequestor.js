console.log('register');
var register  = function(){

  var obj = {
    username:$('#display_name')[0].value,
    email: $('#email')[0].value,
    password: $('#password')[0].value
  }
  console.log(JSON.stringify(obj));
  $.ajax({
   //api的url
   url: 'http://140.124.181.160:8080/softwareEngineer/accounts',
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
      console.log(data);
      location.href = "http://140.124.181.160:8080/web/project.html";      
    },
    method: 'post'

  });
}
