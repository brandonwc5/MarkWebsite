$(document).ready(function() {
  $(".submit_btn_bg").click(function() {
    window.open("mailto:markcharlesypc@gmail.com?subject=Reservation Request&body=Hi Mark! I would like to inquire about having my own YPC experience!"
    );
  });
  $(".headContact2").click(function() {
    window.open("mailto:markcharlesypc@gmail.com?subject=Reservation Request&body=Hi Mark! I would like to inquire about having my own YPC experience!"
    );
  });
  $("#submit").click(function(){
      $(".emailto").append("<input type=\"email\" name=\"markcharlesypc@gmail.com\">");
  });
  //Not working
//   $(".input-append date form_datetime").datetimepicker({
//     onSelect: function() { 
//         var dateObject = $(this).datepicker('getDate'); 
//         $(".btn btn-default submit_btn").click(function(dateObject){
//             $(".dinnerDate").append("<input type=\"text\" name=\"date\" value=(dateObject)>");
//         });
//     }
//     });
});
