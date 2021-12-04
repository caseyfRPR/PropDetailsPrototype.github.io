$(document).ready(function($){
  $('.dropbtn').click(function(){
    $('.dropdown-content').toggle('.show');
});
  });

  $(document).ready(function($){
    $('.dropdown-content').click(function(){
      $(this).toggle('.show');
  });
    });

  $(document).mouseup(function(e)
{
    var container = $(".dropdown-content");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
        container.hide();
    }
});
