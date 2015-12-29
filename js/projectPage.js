$(document).ready(function () {
    $(".btn-select").each(function (e) {
        var value = $(this).find("ul li.selected").html();
        if (value != undefined) {
            $(this).find(".btn-select-input").val(value);
            $(this).find(".btn-select-value").html(value);
        }
    });



  
});

$(document).on('click', '.btn-select', function (e) {
    e.preventDefault();
    var ul = $(this).find("ul");
    if ($(this).hasClass("active")) {
        if (ul.find("li").is(e.target)) {
            var target = $(e.target);
            target.addClass("selected").siblings().removeClass("selected");
            var value = target.html();
            $(this).find(".btn-select-input").val(value);
            $(this).find(".btn-select-value").html(value);
        }
        ul.hide();
        $(this).removeClass("active");
    }
    else {
        $('.btn-select').not(this).each(function () {
            $(this).removeClass("active").find("ul").hide();
        });
        ul.slideDown(300);
        $(this).addClass("active");
    }
});

$(document).on('click', function (e) {
    var target = $(e.target).closest(".btn-select");
    if (!target.length) {
        $(".btn-select").removeClass("active").find("ul").hide();
    }
});

var add_member  = function(){
        console.log('add_member');
        /////////////////////
        /////////////////////
}

console.log('newProject');
var newProject  = function(_name, _desc){
  var obj = {
    name: _name,
    notes: _desc
  };
  console.log(JSON.stringify(obj));
  $.ajax({
   //api的url
   url: "http://140.124.181.160:8080/softwareEngineer/projects",
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
      console.log(data);
    },
    method: 'post'

  });
}


var add_proj = function(elem){
    console.log(elem);
    var name = $("[name='name"+elem.name+"']").val();
    var desc = $("[name='desc"+elem.name+"']").val();
    console.log(name+" "+desc);
    newProject(name, desc);
    
}

console.log('getProjects');
var getProjects  = function(){

    var obj = {
        id:$('')[0].value,
    name: $('#username')[0].value,
    notes: $('#password')[0].value
  }
  console.log(JSON.stringify(obj));
  $.ajax({
   url: 'http://140.124.181.160:8080/softwareEngineer/projects',
   method: 'get',
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

      localStorage.setItem("projectID", data.id);
      console.log(data);
      location.href = "http://john78530.github.io/project.html";      
    },
    

  });
}





