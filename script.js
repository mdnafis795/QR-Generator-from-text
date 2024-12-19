const QrText = document.getElementById("qrtext");
const ImgBox = document.getElementById("imgbox");
const QRimg = document.getElementById("qrimage");



    function generateQR() {
        if (QrText.value.length > 0) {
        QRimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QrText.value;
        ImgBox.classList.add("show-img");

    }else{
        QrText.classList.add('error');
        setTimeout(()=>{
            QrText.classList.remove('error');
        },1000)
    }
}
