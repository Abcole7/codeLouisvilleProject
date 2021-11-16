function loadStaringPost() {
    const Dog1 = {DogName: "Buddy", DogAge: 8, DogBreed: "Lab"};
    const Dog2 = {DogName: "Karen", DogAge: 4, DogBreed: "Poodle"};
    const Dog3 = {DogName: "Tom", DogAge: 3, DogBreed: "Beagle"};

    var StartData = {Dog1, Dog2, Dog3};
    
   StartData.array.forEach(element => {
    var liOne = document.createElement("li");
    var t = document.createTextNode(element.DogName + element.DogBreed);
    liOne.appendChild(t);
    document.getElementById("PostList").appendChild(liOne);
  
   });
   

}


loadStaringPost();