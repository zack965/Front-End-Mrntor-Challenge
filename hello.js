
function HeaderList()
{
    var curentclass = event.srcElement.className;
    //console.log(curentclass)
    /*var allList = document.getElementsByClassName("ListItem");
    console.log(alllist)
    */
    var arrlist = ["About","Carrers","Events","Products","Supports"];
    var i;
    for(i=0;i<arrlist.length;i++){
        //console.log(allList[i])
        if(arrlist[i] == curentclass){
            console.log(arrlist[i])
            document.getElementsByClassName(arrlist[i])[0].style.borderBottom="2px solid white";
            document.getElementsByClassName(arrlist[i])[1].style.borderBottom="2px solid white";
        }else{
            document.getElementsByClassName(arrlist[i])[0].style.borderBottom="none";
            document.getElementsByClassName(arrlist[i])[1].style.borderBottom="none";
        }
    }
}
function IconList()
{
    var curentclass = event.srcElement.className;
    console.log(curentclass)
   
    var arrlist = ["fab fa-facebook-square","fab fa-twitter","fab fa-pinterest","fab fa-instagram"];
    var i;
    for(i=0;i<arrlist.length;i++){
        //console.log(allList[i])
        if(arrlist[i] == curentclass){
            console.log(arrlist[i])
            document.getElementsByClassName(arrlist[i])[0].style.borderBottom="2px solid white";
            //document.getElementsByClassName(arrlist[i])[1].style.borderBottom="2px solid white";
            //document.getElementById(arrlist[i]).style.borderBottom="2px solid white";
        }else{
            document.getElementsByClassName(arrlist[i])[0].style.borderBottom="none";
            //document.getElementsByClassName(arrlist[i])[1].style.borderBottom="none";
            //document.getElementById(arrlist[i]).style.borderBottom="none";
        }
    }
}


function AffectCards(){
    var allcards = document.getElementsByClassName("imgg");
  
    var i;
    
    
    for(i=0;i<allcards.length;i++){
        
        //console.log("url(images/desktop/im0"+i+".jpg)")
        //console.log(i);
        allcards[i].style.backgroundImage = "url(images/desktop/im0"+i+".jpg)";
        allcards[i].style.backgroundSize = "cover";
    }
    
}
AffectCards();


























/*
function AddReomveClassActive(textList){
    //ListItem
    var allList = document.getElementsByClassName("ListItem");
    var arrlist = ["About","Carrers","Events","Products","Supports"];
    var i;
    for(i=0;i<arrlist.length;i++){
        //console.log(allList[i])
        if(arrlist[i] == textList){

        }
    }
}
*/