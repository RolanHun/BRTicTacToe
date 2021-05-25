$(function(){
    $("#MainFeedBack").append("Nyomd meg az 'Új játék' gombot a kezdéshez!");
    $("#NewGame").click(NewGameKlikk);
});
var meret=3;
var XO=1;
var GameIsOn=0;
var kepek=[startPic,xPic,oPic];
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
var winGif={
    eleresiUt:"pics/win.gif",
    alt:"Winner"
};
var jeloltek=[];
function NewGameKlikk() {
        $("#GameChanger").empty();
        $("#GameField").empty();
        GameIsOn=1;
        jeloltek=["0","1","2","3","4","5","6","7","8"];
        XO=1;
        $("#JelenFeedBack").html("<br> Az X kezd! ");
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
            if(jeloltek[0]==="X" && jeloltek[1]==="X" && jeloltek[2]==="X" || jeloltek[3]==="X" && jeloltek[4]==="X" && jeloltek[5]==="X" || jeloltek[6]==="X" && jeloltek[7]==="X" && jeloltek[8]==="X" || jeloltek[0]==="X" && jeloltek[3]==="X" && jeloltek[6]==="X" || jeloltek[1]==="X" && jeloltek[4]==="X" && jeloltek[7]==="X" || jeloltek[2]==="X" && jeloltek[5]==="X" && jeloltek[8]==="X" || jeloltek[0]==="X" && jeloltek[4]==="X" && jeloltek[8]==="X" || jeloltek[2]==="X" && jeloltek[4]==="X" && jeloltek[6]==="X"){
                $("#MainFeedBack").html("<br>  X Nyerte a játékot! Ha szeretnél játszani még kattints az új játék gombra!");
                $("#JelenFeedBack").html("<img>");
                    $("#JelenFeedBack img").attr("src",winGif.eleresiUt);
                    $("#JelenFeedBack img").attr("alt",winGif.alt);
                winnerXO=1;
                GameIsOn=0;
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
                    $("#JelenFeedBack img").attr("src",winGif.eleresiUt);
                    $("#JelenFeedBack img").attr("alt",winGif.alt);
                winnerXO=2;
                GameIsOn=0;
            }
            else{
            $("#JelenFeedBack").html("<br>  X !");
            }
        }
    }
    }
};