$(function(){
    $("#MainFeedBack").append("Nyomd meg az 'Új játék' gombot a kezdéshez!");
    $("#NewGame").click(NewGameKlikk);
});
var meret=3;
var XO=1;
var GameIsOn=0;
var startPic={
    eleresiUt:"pics/start.png",
    alt:"start"
};
var xPic={
    eleresiUt:"pics/xPic.png",
    alt:"x"
};
var oPic={
    eleresiUt:"pics/oPic.png",
    alt:"o"
};
var XwinGif={
    eleresiUt:"pics/winX.gif",
    alt:"Winner"
};
var OwinGif={
    eleresiUt:"pics/winO.gif",
    alt:"Winner"
};
var tieGif={
    eleresiUt:"pics/tie.gif",
    alt:"Tie"
};
var kezdoSzin=1;
var jeloltek=[];
function NewGameKlikk() {
        var kezdoJatekos=Math.floor(Math.random() * 2);
        var XColor = document.getElementById("XSelect");
        if (kezdoSzin===1){
                if (XColor.options[XColor.selectedIndex].text==="Fekete"){
                    xPic={
                        eleresiUt:"pics/xPic.png",
                        alt:"x"
                    };
                }
                else if (XColor.options[XColor.selectedIndex].text==="Fehér"){
                    xPic={
                        eleresiUt:"pics/xPicF.png",
                        alt:"x"
                    };
                }
                else if (XColor.options[XColor.selectedIndex].text==="Zöld"){
                    xPic={
                        eleresiUt:"pics/xPicZ.png",
                        alt:"x"
                    };
                }
                var OColor = document.getElementById("OSelect");
                if (OColor.options[OColor.selectedIndex].text==="Fekete"){
                    oPic={
                        eleresiUt:"pics/oPic.png",
                        alt:"o"
                    };
                }
                else if (OColor.options[OColor.selectedIndex].text==="Fehér"){
                    oPic={
                        eleresiUt:"pics/oPicF.png",
                        alt:"o"
                    };
                }
                else if (OColor.options[OColor.selectedIndex].text==="Zöld"){
                    oPic={
                        eleresiUt:"pics/oPicZ.png",
                        alt:"o"
                    };
                }
                kezdoSzin=0;
        }
        $("#GameChanger").empty();
        $("#GameField").empty();
        if (kezdoJatekos===1){
            XO=1;
            $("#JelenFeedBack").html("<br> Az X kezd! ");
        }
        else {
            XO=0;
            $("#JelenFeedBack").html("<br> Az O kezd! ");
        }
        GameIsOn=1;
        jeloltek=["0","1","2","3","4","5","6","7","8"];
        $("#MainFeedBack").html("Sok sikert! (3x3-as mező)");
        for (var i = 0; i < meret * meret; i++) {
            $("#GameField").append("<img>");
            $("#GameField img").eq(i).attr("src",startPic.eleresiUt);
            $("#GameField img").eq(i).attr("alt",startPic.alt);
            $("#GameField img").eq(i).attr("id",i);
        }
        $("#GameField img").click(kattintasra);
};
function kattintasra() {
    if(GameIsOn===1){
    if($(this).attr("alt")==="start"){
        if (XO===1){
            var id=$(this).attr("id");
            jeloltek[id]=("X");
            $(this).attr("src",xPic.eleresiUt);
            $(this).attr("alt",xPic.alt);
            XO=0;
            if (jeloltek[0]==="X" && jeloltek[1]==="X" && jeloltek[2]==="X" || jeloltek[3]==="X" && jeloltek[4]==="X" && jeloltek[5]==="X" || jeloltek[6]==="X" && jeloltek[7]==="X" && jeloltek[8]==="X" || jeloltek[0]==="X" && jeloltek[3]==="X" && jeloltek[6]==="X" || jeloltek[1]==="X" && jeloltek[4]==="X" && jeloltek[7]==="X" || jeloltek[2]==="X" && jeloltek[5]==="X" && jeloltek[8]==="X" || jeloltek[0]==="X" && jeloltek[4]==="X" && jeloltek[8]==="X" || jeloltek[2]==="X" && jeloltek[4]==="X" && jeloltek[6]==="X"){
                $("#MainFeedBack").html("<br>  X Nyerte a játékot! Ha szeretnél játszani még kattints az új játék gombra!");
                $("#JelenFeedBack").html("<img>");
                    $("#JelenFeedBack img").attr("src",XwinGif.eleresiUt);
                    $("#JelenFeedBack img").attr("alt",XwinGif.alt);
                winnerXO=1;
                GameIsOn=0;
            }
            else if(jeloltek[0]!=="0" && jeloltek[1]!=="1" && jeloltek[2]!=="2" && jeloltek[3]!=="3" && jeloltek[4]!=="4" && jeloltek[5]!=="5" && jeloltek[6]!=="6" && jeloltek[7]!=="7" && jeloltek[8]!=="8"){
                GameIsOn=0;
                $("#MainFeedBack").html("<br>  Döntetlen! Ha szeretnél játszani még kattints az új játék gombra!");
                $("#JelenFeedBack").html("<img>");
                    $("#JelenFeedBack img").attr("src",tieGif.eleresiUt);
                    $("#JelenFeedBack img").attr("alt",tieGif.alt);
            }
            else{
            $("#JelenFeedBack").html("<br>  O !");
            }
        }
        else if (XO===0){
            var id=$(this).attr("id");
            jeloltek[id]=("O");
            $(this).attr("src",oPic.eleresiUt);
            $(this).attr("alt",oPic.alt);
            XO=1;
            if(jeloltek[0]==="O" && jeloltek[1]==="O" && jeloltek[2]==="O" || jeloltek[3]==="O" && jeloltek[4]==="O" && jeloltek[5]==="O" || jeloltek[6]==="O" && jeloltek[7]==="O" && jeloltek[8]==="O" || jeloltek[0]==="O" && jeloltek[3]==="O" && jeloltek[6]==="O" || jeloltek[1]==="O" && jeloltek[4]==="O" && jeloltek[7]==="O" || jeloltek[2]==="O" && jeloltek[5]==="O" && jeloltek[8]==="O" || jeloltek[0]==="O" && jeloltek[4]==="O" && jeloltek[8]==="O" || jeloltek[2]==="O" && jeloltek[4]==="O" && jeloltek[6]==="O"){
                $("#MainFeedBack").html("<br>  O Nyerte a játékot! Ha szeretnél játszani még kattints az új játék gombra!");
                $("#JelenFeedBack").html("<img>");
                    $("#JelenFeedBack img").attr("src",OwinGif.eleresiUt);
                    $("#JelenFeedBack img").attr("alt",OwinGif.alt);
                winnerXO=2;
                GameIsOn=0;
            }
            else if(jeloltek[0]!=="0" && jeloltek[1]!=="1" && jeloltek[2]!=="2" && jeloltek[3]!=="3" && jeloltek[4]!=="4" && jeloltek[5]!=="5" && jeloltek[6]!=="6" && jeloltek[7]!=="7" && jeloltek[8]!=="8"){
                GameIsOn=0;
                $("#MainFeedBack").html("<br>  Döntetlen! Ha szeretnél játszani még kattints az új játék gombra!");
                $("#JelenFeedBack").html("<img>");
                    $("#JelenFeedBack img").attr("src",tieGif.eleresiUt);
                    $("#JelenFeedBack img").attr("alt",tieGif.alt);
            }
            else{
            $("#JelenFeedBack").html("<br>  X !");
            }
        }
    }
    }
};