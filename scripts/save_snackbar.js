//if save is active show remove snack and change icon to default state else
//show save dialog.

jQuery(document).ready(function($){
  $('.save-icon').click(function(){
    if ($('.save-icon i').hasClass('icon-active')) {
      $('#removeSnack').addClass('show-snack').removeClass('hide-snack');
      setTimeout(function() {
        $('#removeSnack').addClass('hide-snack').removeClass('show-snack');
      }, 4000);
      $('.save-icon').next('ul').slideToggle('500');
      $('.save-icon').find('i').addClass('fal icon-default').removeClass('fas icon-active');
    } else {
      $('#saveDialog').addClass('save-dialog-show').removeClass('save-dialog-close');
    }
});
  });

// when save button is clicked in the save property dialog show save property snack
// and change icon state to active

  jQuery(document).ready(function($){
    $('#savePropBtn').click(function(){
      $('#saveDialog').addClass('save-dialog-close').removeClass('save-dialog-show');
      $('#saveSnack').addClass('show-snack').removeClass('hide-snack');
      setTimeout(function() {
        $('#saveSnack').addClass('hide-snack').removeClass('show-snack');
      }, 4000);
      $('.save-icon').next('ul').slideToggle('500');
      $('.save-icon').find('i').addClass('fas icon-active').removeClass('fal icon-default');
  });
    });


    jQuery(document).ready(function($){
      $('#CancelSavePropBtn').click(function(){
        $('#saveDialog').addClass('save-dialog-close').removeClass('save-dialog-show');
    });
      });


      jQuery(document).ready(function($){
        $('#rcSaveBtn').click(function(){
          $('#saveReportCoverSnack').addClass('show-snack').removeClass('hide-snack');
          setTimeout(function() {
            $('#saveReportCoverSnack').addClass('hide-snack').removeClass('show-snack');
          }, 4000);
        });
          });
