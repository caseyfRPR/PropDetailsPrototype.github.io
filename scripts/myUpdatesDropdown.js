$(document).ready(function($){
  $('#addUpdateBtn').click(function(){
    $('.btn-dropdown').slideToggle('.show-btn-dropdown');
});
  });

  $(document).ready(function($){
    $('.btn-dropdown').click(function(){
      $(this).slideToggle('.show-btn-dropdown');
  });
    });

  $(document).mouseup(function(e)
{
    var container = $(".btn-dropdown");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
        container.hide();
    }
});
