//var hobbiesList = [];
// $(document).ready(function (){
// $(".accordion h4").click(function(){
//     var id = this.id;   /* getting heading id */
//
//     /* looping through all elements which have class .accordion-content */
//     $(".accordion-content").each(function(){
//
//         if($("#"+id).next()[0].id != this.id){
//             $(this).slideUp();
//         }
//
//     });
//
//    $(this).next().toggle();  /* Selecting div after h1 */
// });

//
//   $('#hobbyEntry').on("keypress", function(event)
// {
//     var value = $(this).val();
//     var keycode = (event.keyCode ? event.keyCode : event.which);
//     if (keycode == '13' && value !== "")
//     {
//         $('#hobby-list').html($('#hobby-list').html() + "<li>" + value + "</li>");
//         hobbiesList.push(value);
//         $('#hobbies').val(hobbiesList.toString());
//
//         // clear current entry
//         $(this).val("");
//     }
// });
// });

var hobby='';

function addHobby() {
var completelist= document.getElementById("hobby-list");

completelist.innerHTML += "<li>" + hobby + "</li>";
counter++;
}

function validate() {
  if (document.myForm.fName.value === "") {
    alert("Full name is required");
    document.myForm.fName.focus();
    return false;
  }

  if (document.myForm.age.value === "") {
    alert("Age is required");
    document.myForm.age.focus();
    return false;
  }

  if (document.myForm.fColor.value === "") {
    alert("Favorite color is required");
    document.myForm.fColor.focus();
    return false;
  }

  if (document.myForm.fClass.value === "") {
    alert("Favorite class is required");
    document.myForm.fClass.focus();
    return false;
  }

  if (document.myForm.hClass.value === "") {
    alert("Least favorite class is required");
    document.myForm.hClass.focus();
    return false;
  }

  if (document.myForm.hobbyEntry.value === "") {
    alert("Favorite hobby(ies) is required");
    document.myForm.hobbyEntry.focus();
    return false;
  }
  if (document.myForm.music.value === "") {
    alert("5 favorite artists/bands are required");
    document.myForm.music.focus();
    return false;
  }
 alert("Thank you for your information");
  return true;
}
