//Interior Features

jQuery(document).ready(function($){
    $('.if_view_more_btn').click(function(){
      $('#intFeatures').next('#intTable').slideToggle('500');
      $('#intFeatures').find('#intTable').toggleClass('int-feat-collapse int-feat-show');
      if($('#intTable').hasClass('int-feat-show')){
        $('.if_view_more_btn').html('View Less Detail <i class="far fa-chevron-up accordian-icon"></i>');}
      else {
        $('.if_view_more_btn').html('View More Detail <i class="far fa-chevron-down accordian-icon"></i>');
      }
    });

});

//Exterior features

jQuery(document).ready(function($){
    $('.ef_view_more_btn').click(function(){
      $('#extFeatures').next('#extTable').slideToggle('500');
      $('#extFeatures').find('#extTable').toggleClass('int-feat-collapse int-feat-show');
      if($('#extTable').hasClass('int-feat-show')){
        $('.ef_view_more_btn').html('View Less Detail <i class="far fa-chevron-up accordian-icon"></i>');}
      else {
        $('.ef_view_more_btn').html('View More Detail <i class="far fa-chevron-down accordian-icon"></i>');
      }
    });

});
