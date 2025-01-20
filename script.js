// Play audio & Redirect to WhatsApp on button click
function claimPrize(name, ticket) {
    let audio = document.getElementById('backgroundAudio');
    audio.play().catch(error => {
        console.log("Audio playback error:", error);
    });

    let phoneNumber = "9705353611";
    let message = `Hi, I am ${name}. My ticket number is ${ticket}. I am here to receive my prize.`;
    let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappURL;
}