let sepetSayisi = 0;

function sepeteEkle(urunAdi) {
  sepetSayisi++;
  document.getElementById("sepet").innerText = sepetSayisi;
  alert(`${urunAdi} sepete eklendi!`);
}

document.getElementById("contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("formSonuc").innerText = "Mesajınız başarıyla gönderildi!";
  e.target.reset();
});

