//console.log('register');
//var register  = function(){

  var fake = [{},{
    //name:"tony"
    name:localStorage.getItem("projectName"),
    date:"15-20",
    desc:"haha",
    type:"1"
  },
  {
    name:"YEE",
    date:"2000/10/20",
    desc:"OMG",
    type:"2"
  },
  {

    name:"Jonathan",
    date:"1991-05-01",
    desc:"meOOOOOOw",
    type:"3"
  },
  {

    name:"human",
    date:"00000",
    desc:"i am a human",
    type:"2"
  }];
  setTimeout(function() {
    var e = document.getElementById("type");
    //var strUser = e.options[e.selectedIndex].value;
    for(var i in fake){
      if(i==0) continue;
      $('input[name="name'+i+'"]').val(fake[i].name);
      $('input[name="date'+i+'"]').val(fake[i].date);
      $('textarea[name="desc'+i+'"]').val(fake[i].desc);
      $('select[name="action'+i+'"]>option[value="'+fake[i].type+'"]').attr("selected",true);

      $("#add_row").click();
    }
    //$('option#type').val(fake[0].type);
  }, 1000);
  //  var req = {
  //   reqName:$('#name')[0].value,
  //   reqDate: $('#date')[0].value,
  //   reqDescription: $('#description')[0].value
  //   reqType: $('#type')[0].value
  // };

  //  var req = {
  //   reqName:$('#name')"testName"
  //   reqDate: $('#name')"2015/12/12"
  //   reqDescription:$('#name')"testDES"
  //   reqType:$('#name')"bug"
  // };
