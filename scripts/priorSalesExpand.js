jQuery(document).ready(function($){
  if($('.table-prior-sales>tbody >tr').length > 7){
    $('.ps_view_more_btn').click(function(){
      $('.table-prior-sales>tbody >tr:nth-child(n+8)').slideToggle('');
      $(this).toggleClass('open-ps');
      if($(this).hasClass('open-ps')){
        $(this).html('View Less Detail <i class="far fa-chevron-up accordian-icon"></i>');}
      else {
        $(this).html('View More Detail <i class="far fa-chevron-down accordian-icon"></i>');
      }
    });
  }else{$('.ps_view_more_btn').hide();}
});


jQuery(document).ready(function($){
  $('#publicRecords').click(function(){
    $(".ps-public").css("display","block");
    $(".ps-listings").css("display","none");
  });
});


  jQuery(document).ready(function($){
    $('#listingRecords').click(function(){
      $(".ps-listings").css("display","block");
      $(".ps-public").css("display","none");
    });
  });
