var cnt = 1;


function likeit(){
    var fillheart = document.getElementById("heart")

    if(cnt%2 == 1){
        fillheart.src = "../../public/icon/heart.png";
    }
    else{
        fillheart.src = "../../public/icon/unheart.png";
    }
    cnt ++;
    
}
