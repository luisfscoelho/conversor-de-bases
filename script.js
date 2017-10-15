var atual = 10;

function tecla(valor) { $("#tela").append(valor); }

$("#back").click(function(){
    var txt = $("#tela").text();
    txt = txt.slice(0, txt.length -1);
    $("#tela").text(txt);
});

function hex() {
    var num = $("#tela").text();
    num = parseInt(num,atual).toString(16);
    atual = 16;
    $("#tela").text(num);
    document.getElementById("2").disabled = false;
    document.getElementById("3").disabled = false;
    document.getElementById("4").disabled = false;
    document.getElementById("5").disabled = false;
    document.getElementById("6").disabled = false;
    document.getElementById("7").disabled = false;
    document.getElementById("8").disabled = false;
    document.getElementById("9").disabled = false;
    document.getElementById("a").disabled = false;
    document.getElementById("b").disabled = false;
    document.getElementById("c").disabled = false;
    document.getElementById("d").disabled = false;
    document.getElementById("e").disabled = false;
    document.getElementById("f").disabled = false;
}

function dec() {
    var num = $("#tela").text();
    num = parseInt(num,atual).toString(10);
    atual = 10;
    $("#tela").text(num);
    document.getElementById("2").disabled = false;
    document.getElementById("3").disabled = false;
    document.getElementById("4").disabled = false;
    document.getElementById("5").disabled = false;
    document.getElementById("6").disabled = false;
    document.getElementById("7").disabled = false;
    document.getElementById("8").disabled = false;
    document.getElementById("9").disabled = false;
    document.getElementById("a").disabled = true;
    document.getElementById("b").disabled = true;
    document.getElementById("c").disabled = true;
    document.getElementById("d").disabled = true;
    document.getElementById("e").disabled = true;
    document.getElementById("f").disabled = true;
}

function oct() {
    var num = $("#tela").text();
    num = parseInt(num,atual).toString(8);
    atual = 8;
    $("#tela").text(num);
    document.getElementById("2").disabled = false;
    document.getElementById("3").disabled = false;
    document.getElementById("4").disabled = false;
    document.getElementById("5").disabled = false;
    document.getElementById("6").disabled = false;
    document.getElementById("7").disabled = false;
    document.getElementById("8").disabled = true;
    document.getElementById("9").disabled = true;
    document.getElementById("a").disabled = true;
    document.getElementById("b").disabled = true;
    document.getElementById("c").disabled = true;
    document.getElementById("d").disabled = true;
    document.getElementById("e").disabled = true;
    document.getElementById("f").disabled = true;
}

function bin() {
    var num = $("#tela").text();
    num = parseInt(num,atual).toString(2);
    atual = 2;
    $("#tela").text(num);
    document.getElementById("2").disabled = true;
    document.getElementById("3").disabled = true;
    document.getElementById("4").disabled = true;
    document.getElementById("5").disabled = true;
    document.getElementById("6").disabled = true;
    document.getElementById("7").disabled = true;
    document.getElementById("8").disabled = true;
    document.getElementById("9").disabled = true;
    document.getElementById("a").disabled = true;
    document.getElementById("b").disabled = true;
    document.getElementById("c").disabled = true;
    document.getElementById("d").disabled = true;
    document.getElementById("e").disabled = true;
    document.getElementById("f").disabled = true;
}
