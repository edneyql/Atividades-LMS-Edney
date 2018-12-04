$(function(){
    if(verificarLogin()){
        $("#comLogin").show();
        $("#semLogin").hide();
    }else{
        $("#comLogin").hide();
        $("#semLogin").show();
        $("form", ".produto").hide();
        $(".produto .thumbnail").css({
          height: "440px"
        });
    }
  });