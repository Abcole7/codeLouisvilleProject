var list = document.getElementById('PostList');

function newPost() {
  var Name = document.getElementById('PetName').value;
  var Breed = document.getElementById('PetBreed').value;
  var Age = document.getElementById('PetAge').value;
  var PostText = document.getElementById('PostDesc').value;



  var entry = document.createElement('li');
  var entryName = document.createElement('h1');
  var entryBreed = document.createElement('h3');
  var entryPostText = document.createElement('p');
  var entryLineBreak1 = document.createElement('br');
  var entryLineBreak2 = document.createElement('br');


  entryName.appendChild(document.createTextNode(Name));
  entryBreed.appendChild(document.createTextNode("Breed: " + Breed + " | Age: " + Age));
  entryPostText.appendChild(document.createTextNode(PostText));


  entry.appendChild(entryName);
  entry.appendChild(entryLineBreak1);
  entry.appendChild(entryBreed);
  entry.appendChild(entryLineBreak2);
  entry.appendChild(entryPostText);
  list.appendChild(entry);
  document.getElementById("newPostForm").style.display = "none";
}


function showForm() {
  document.getElementById("newPostForm").style.display = "block";
}

