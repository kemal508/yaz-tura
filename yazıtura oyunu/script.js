let tura = 0;
let yazi = 0;
let coin = document.querySelector("#coin")
let flipbtn = document.querySelector("#flip-button")
let resetbtn = document.querySelector("#reset-button")
// flip butona tklanıldıgında 
flipbtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);

    // gecici olarak animationu durduruyoruz
    coin.style.animation = "none";
    // 100ms sonra 
    setTimeout(() => {

    }, 100);

    if (i) {
        // eger i 1 ise (tura), 100 milisaniye sonra flip-tura animasyonunu baslat
        setTimeout(() => {
            coin.style.animation = "spin-tura  3s forwards"
        }, 100);
        tura++;
    }
    else {
        setTimeout(() => {
            // efer i 0 ise (tura) 100 milisaniye sonra spin-yazı animasyonunu uygula
            coin.style.animation = "spin-yazi  3s forwards"
        }, 100);
        yazi++;
    }
    // istatikleri güncelle
    // ve butonu devre dışı bırak
    setTimeout(uptadetStats, 3000);
    disableButton();

});
//istatikleri gücelleme fonksiyonu
function uptadetStats() {
    document.querySelector("#tura-count").textContent = `Tura : ${tura} `;
    document.querySelector("#yazı-count").textContent = `Yazi : ${yazi} `;

}
// Butonu devre dısı bırakma fonksiyonu
function disableButton() {
    flipbtn.disabled = true;
    setTimeout(() => {
        flipbtn.disabled = false;
    }, 3000);

}
resetbtn.addEventListener("click", () => {
    tura = 0;
    yazi = 0;
    uptadetStats();
    disableButton();
});
