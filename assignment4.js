//var hobby= document.getElementById("hobbyEntry");

function addHobby() {
  var ul = document.getElementById('hobby-list');
  var hobby = document.getElementById('hobbyEntry');

  // ul.innerHTML += "li>" + hobby + '</li>';
  var li = document.createElement("li");

  li.setAttribute('list',hobby.value);
  li.appendChild(document.createTextNode(hobby.value));
  ul.appendChild(li);

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
