var list = document.getElementById('PostList');

function newPost() {
    var Name = document.getElementById('PetName').value;
    var Breed = document.getElementById('PetBreed').value;
    var Age = document.getElementById('PetAge').value;
    var PostText = document.getElementById('PostDesc').value;
     var Image = document.getElementById('Image').value;

    var entry = document.createElement('li');
    var entryName = document.createElement('h1');
    var entryBreed = document.createElement('h3');
    var entryPostText = document.createElement('p');
    var entryImage = document.createElement('img');

    entryName.appendChild(document.createTextNode(Name));
    entryBreed.appendChild(document.createTextNode(Breed + " | " + Age));
    entryPostText.appendChild(document.createTextNode(PostText));
    entryImage.src = document.createTextNode(Image);
    
    entry.appendChild(entryName);
    entry.appendChild(entryBreed);
    entry.appendChild(entryPostText);
    entry.appendChild(entryImage);
    list.appendChild(entry);
}