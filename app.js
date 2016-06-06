var httpRequest = new XMLHttpRequest();
document.addEventListener("DOMContentLoaded", function(event){
httpRequest.onreadystatechange = function(){
    if (httpRequest.readyState === 4 && httpRequest.status < 400) {
         var albumArr = JSON.parse(httpRequest.responseText).items;
         var tempArr = albumArr;
         var albumOne = document.getElementById("randomOne");
         var albumTwo = document.getElementById("randomTwo");
         var albumThree = document.getElementById("randomThree");
         var threeRand = [];
         for (var i = 0; i < 3; i++) {
           var tempNum = Math.floor(Math.random() * tempArr.length);
           threeRand.push(albumArr[tempNum].images[0].url);
           tempArr.splice(tempNum, 1);
         };
           albumOne.src = threeRand[0];
           albumTwo.src = threeRand[1];
           albumThree.src = threeRand[2];
    }
};
httpRequest.open('GET', 'https://api.spotify.com/v1/artists/1dyGPAYZZHHW6WIqwKN5QF/albums');
httpRequest.send();
})
