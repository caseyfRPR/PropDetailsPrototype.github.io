jQuery(document).ready(function($){
  $('#traffic').click(function(){
    $('#mapViews').next('#trafficMap').slideToggle('500');
    $('#mapViews').find('#trafficMap').removeClass('map-hidden');
    $('#mapViews').find('#trafficMap').addClass('map-show');
    $('#mapViews').find('#marketActMap, #prospectingMap, #surroundingMap').removeClass('map-show');
    $('#mapViews').find('#marketActMap, #prospectingMap, #surroundingMap').addClass('map-hidden');

});
  });

  jQuery(document).ready(function($){
    $('#prospecting').click(function(){
      $('#mapViews').next('#prospectingMap').slideToggle('500');
      $('#mapViews').find('#prospectingMap').removeClass('map-hidden');
      $('#mapViews').find('#prospectingMap').addClass('map-show');
      $('#mapViews').find('#marketActMap, #trafficMap, #surroundingMap').removeClass('map-show');
      $('#mapViews').find('#marketActMap, #trafficMap, #surroundingMap').addClass('map-hidden');

  });
    });

    jQuery(document).ready(function($){
      $('#surrounding').click(function(){
        $('#mapViews').next('#surroundingMap').slideToggle('500');
        $('#mapViews').find('#surroundingMap').removeClass('map-hidden');
        $('#mapViews').find('#surroundingMap').addClass('map-show');
        $('#mapViews').find('#marketActMap, #prospectingMap, #trafficMap').removeClass('map-show');
        $('#mapViews').find('#marketActMap, #prospectingMap, #trafficMap').addClass('map-hidden');

    });
      });

      jQuery(document).ready(function($){
        $('#marketActivity').click(function(){
          $('#mapViews').next('#marketActMap').slideToggle('500');
          $('#mapViews').find('#marketActMap').removeClass('map-hidden');
          $('#mapViews').find('#marketActMap').addClass('map-show');
          $('#mapViews').find('#trafficMap, #prospectingMap, #surroundingMap').removeClass('map-show');
          $('#mapViews').find('#trafficMap, #prospectingMap, #surroundingMap').addClass('map-hidden');

      });
        });
