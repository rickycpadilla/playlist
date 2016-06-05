var httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = function(){
    if (httpRequest.readyState === 4 && httpRequest.status < 400) {
         var albumArr = JSON.parse(httpRequest.responseText).results;
         var scroller = document.getElementById("scroller");
         var bin = document.getElementById("bin");
         var leftButton = document.getElementById("leftButton");
         var rightButton = document.getElementById("rightButton");
         for (var i = 0; i < albumArr.length; i++) {
           var smallImg = document.createElement("img");
           smallImg.src = "images/" + albumArr[i].cover_art;
           scroller.appendChild(smallImg);
           function addEvList(param1, param2){
             return param1.addEventListener("click", function(event){
             var p = document.createElement("p");
             p.innerHTML = param2;
             bin.appendChild(p)
              })
           };
           addEvList(smallImg, albumArr[i].title);
        };
        leftButton.addEventListener("click", function(){
             location.reload();
           });
        rightButton.addEventListener("click", function(){
         var xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function() {
            if (xhttp.readyState == 4 && xhttp.status < 400) {console.log(xhttp.responseText);}
          };
          xhttp.open("POST", "https://lit-fortress-6467.herokuapp.com/post", true);
          xhttp.send(bin.innerHTML);
        })
    }
};
httpRequest.open('GET', 'https://lit-fortress-6467.herokuapp.com/object');
httpRequest.send();
