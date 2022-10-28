function bebas(){
    var x = confirm("good luck!")
    x == false ? "" : angka()
}

function angka(){
    var y = document.getElementById("input").value;
    y == 2 ? alert("selamat kamu benar") : alert("Dikit lagi yok!!!")

}