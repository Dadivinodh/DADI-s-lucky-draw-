const form = document.getElementById('entryForm');
const nameInput = document.getElementById('name');
const container = document.querySelector('.container');
const audio = document.getElementById('winAudio');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = nameInput.value.trim();

    if (name) {
        // Generate a 6-digit random lucky draw code
        const luckyCode = Math.floor(100000 + Math.random() * 900000);

        // Play the audio
        audio.play();

        // Clear existing content
        container.innerHTML = '';

        // Display congratulations message
        const winnerMessage = document.createElement('h2');
        winnerMessage.innerHTML = `🎉 Congratulations, ${name}! ✅ You won the prize! 🎊`;

        // Display Lucky Draw Coupon Code
        const couponMessage = document.createElement('p');
        couponMessage.innerHTML = `🎟️ Your Lucky Draw Coupon Code: <strong>${luckyCode}</strong>`;

        // Location details
        const locationMessage = document.createElement('p');
        locationMessage.innerHTML = '📍 At Amaravati Green City, Munagapaka';

        // "Come and Collect" Message
        const collectMessage = document.createElement('h3');
        collectMessage.innerHTML = '🏆 Come and Collect Your Prize!';

        // Create "Participate" Button
        const participateButton = document.createElement('button');
        participateButton.innerText = '📩 Participate';
        participateButton.classList.add('whatsapp-btn');
        
        // On button click, open WhatsApp with pre-filled message
        participateButton.addEventListener('click', function () {
            const message = `My Lucky Draw Coupon Code is ${luckyCode}`;
            const whatsappUrl = `https://wa.me/9705353611?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });

        // Append all elements to container
        container.appendChild(winnerMessage);
        container.appendChild(couponMessage);
        container.appendChild(locationMessage);
        container.appendChild(collectMessage);
        container.appendChild(participateButton);
    }

    nameInput.value = ''; // Clear input field
});