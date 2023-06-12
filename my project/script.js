function generateQRCode() {
    var text = document.getElementById("text-input").value;
    var qrcode = new QRCode(document.getElementById("qrcode"), {
      text: text,
      width: 128,
      height: 128
    });
  }
  