$(document).ready(function(){
  $('#fillText').click(function() {
    $('.update-note-text-filled').css("display","block");
    $('.update-note-text-empty').css("display","none");
    $('.save-note-btn').addClass('btn-primary');
    $('.save-note-btn').removeClass('btn-primary-disabled');
  });
});


$(document).ready(function(){
  $('#saveNoteBtn').click(function() {
    $('.mu-note-cont-full').css("display","block");
    $('.mu-note-cont-empty').css("display","none");
  });
});
