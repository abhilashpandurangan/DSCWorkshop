$(document).ready(function(){

    // $('li').click(function(){
    //   $(this).toggleClass("deleted")
    // });

    $('ul').on("click","li",function(){
      $(this).toggleClass("deleted")
    });

    $('ul').on("click","span",function(event){
      $(this).parent().fadeOut(500,function(){
        $(this).remove();
      });
      event.stopPropagation();
    });

    $('.fa-plus').click(function(){
      $('input').fadeToggle();
    })

    $('input').on("mouseenter",function(){
      $(this).css({background:"white",border: "2px solid #2980b9"});
    })

    $('input').on("mouseleave",function(){
      $(this).css({background:"#eee",border: "2px solid #eee"});
    })

    $('input').keypress(function(event){
      if(event.which===13){
        var text=$(this).val();
        $(this).val("");
        $('ul').append('<li><span class="del_icon"><i class="fas fa-trash-alt"></i></span>'+text+'</li>')
      }
    });

});
