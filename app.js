const generateBtb = document.querySelector("form button");
const qrInput = document.querySelector("form input");
const qrCodeBox = document.querySelector(".qr-code");
const qrImage = document.querySelector(".qr-code img");

generateBtb.addEventListener("click", () => {
  let qtValue = qrInput.value;
  if (!qtValue) {
    return alert("Please Enter a text or address :)");
  }
  generateBtb.innerText = "In production";
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qtValue}`;

  qrImage.addEventListener("load", () => {
    qrCodeBox.classList.remove("hidden");
    generateBtb.innerText = "QR code generator";
  });
});
qrInput.addEventListener('keyup' , ()=>{
    if (!qrInput.value) {
      qrCodeBox.classList.add("hidden");  
    }
})