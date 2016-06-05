var httpRequest = new XMLHttpRequest();
document.addEventListener("DOMContentLoaded", function(event){
httpRequest.onreadystatechange = function(){
    if (httpRequest.readyState === 4 && httpRequest.status < 400) {
         var albumArr = JSON.parse(httpRequest.responseText).results;
         var tempArr = albumArr;
         var albumOne = document.getElementById("randomOne");
         var albumTwo = document.getElementById("randomTwo");
         var albumThree = document.getElementById("randomThree");
         var threeRand = [];
         for (var i = 0; i < 3; i++) {
           var tempNum = Math.floor(Math.random() * tempArr.length);
           threeRand.push(albumArr[tempNum].cover_art);
           tempArr.splice(tempNum, 1);
         };
           albumOne.src = "images/" + threeRand[0];
           albumTwo.src = "images/" + threeRand[1];
           albumThree.src = "images/" + threeRand[2];
    }
};
httpRequest.open('GET', 'https://lit-fortress-6467.herokuapp.com/object');
httpRequest.send();
})
