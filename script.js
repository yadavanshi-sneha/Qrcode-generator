
function generateQR() {

    document.getElementById("qrcode").innerHTML = "";

    var text = document.getElementById("text").value;

    if (text.trim() === "") {
        alert("Please enter text or URL");
        return;
    }

    new QRCode(document.getElementById("qrcode"), {
        text: text,
        width: 200,
        height: 200
    });
}


// ✅ DOWNLOAD FUNCTION ADDED
function downloadQR() {
    const canvas = document.querySelector("#qrcode canvas");

    if (!canvas) {
        alert("Please generate QR code first!");
        return;
    }

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "qrcode.png";
    link.click();
}