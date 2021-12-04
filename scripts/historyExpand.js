
// jQuery(document).ready(function($){
//   if($('.horiz-scrl-table>tbody >tr').length > 7){
//     $('.view_more_btn').click(function(){
//       $('.horiz-scrl-table>tbody >tr:nth-child(n+8)').slideToggle('');
//       $(this).toggleClass('open');
//       if($(this).hasClass('open')){
//         $(this).html('View Less Detail <i class="far fa-chevron-up accordian-icon"></i>');}
//       else {
//         $(this).html('View More Detail <i class="far fa-chevron-down accordian-icon"></i>');
//       }
//     });
//   }else{$('.view_more_btn').hide();}
// });

jQuery(document).ready(function($){
  if($('.table-st-header-fix-col>tbody >tr').length > 7){
    $('.view_more_btn').click(function(){
      $('.table-st-header-fix-col>tbody >tr:nth-child(n+8)').slideToggle('');
      $(this).toggleClass('open');
      if($(this).hasClass('open')){
        $(this).html('View Less Detail <i class="far fa-chevron-up accordian-icon"></i>');}
      else {
        $(this).html('View More Detail <i class="far fa-chevron-down accordian-icon"></i>');
      }
    });
  }else{$('.view_more_btn').hide();}
});


$(document).ready(function(){
  $('#listingTab').click(function() {
    if (!$("input[name='tabs']:checked").val()) {
       $('.card-expand-cont').show();
    }
    else {
      $('.card-expand-cont').hide();
    }

  });
});

$(document).ready(function(){
  $('#taxTab').click(function() {
    if (!$("input[name='tabs']:checked").val()) {
       $('.card-expand-cont').show();
    }
    else {
      $('.card-expand-cont').hide();
    }

  });
});

$(document).ready(function(){
  $('#mortgageTab').click(function() {
    if (!$("input[name='tabs']:checked").val()) {
      alert('Nothing is checked!');
       return false;
    }
    else {
      $('.card-expand-cont').show();
    }

  });
});

$(document).ready(function(){
  $('#deedTab').click(function() {
    if (!$("input[name='tabs']:checked").val()) {
      alert('Nothing is checked!');
       return false;
    }
    else {
      $('.card-expand-cont').show();
    }
  });
});


$(document).ready(function(){
  $('#distressedTab').click(function() {
    if (!$("input[name='tabs']:checked").val()) {
      alert('Nothing is checked!');
       return false;
    }
    else {
      $('.card-expand-cont').show();
    }
  });
});



///Full Width open

$(document).ready(function(){
  $('#openFullHist').click(function() {
    $('.prop-hist-modal').css("display","block");
    $('body').css("overflow-y","hidden");
    $('#backToTop').css("display","none");
  });
});

$(document).ready(function(){
  $('#closeHistModal').click(function() {
    $('.prop-hist-modal').css("display","none");
    $('body').css("overflow-y","auto");
    $('#backToTop').css("display","block");
  });
});
