document.addEventListener("DOMContentLoaded", function() {
    let birthday = new Date("November 5, 2004"); // Replace with your actual birthday date
    let timerElement = document.getElementById("countdown");

    function updateTimer() {
        let currentTime = new Date();
        let currentYear = currentTime.getUTCFullYear();
        let nextBirthday = new Date(currentYear, birthday.getUTCMonth(), birthday.getUTCDate());

        // If your birthday has already occurred this year, calculate for next year
        if (nextBirthday <= currentTime) {
            nextBirthday = new Date(currentYear + 1, birthday.getUTCMonth(), birthday.getUTCDate());
        }

        let timeUntilBirthday = new Date(nextBirthday - currentTime);
        let years = (nextBirthday.getUTCFullYear() - currentYear).toString().padStart(2, '0'); // Changed here
        let months = timeUntilBirthday.getUTCMonth().toString().padStart(2, '0');
        let days = (timeUntilBirthday.getUTCDate() - 1).toString().padStart(2, '0');
        let hours = timeUntilBirthday.getUTCHours().toString().padStart(2, '0');
        let minutes = timeUntilBirthday.getUTCMinutes().toString().padStart(2, '0');
        let seconds = timeUntilBirthday.getUTCSeconds().toString().padStart(2, '0');
        let tenths = Math.floor((timeUntilBirthday % 1000) / 100).toString();
        let hundredths = Math.floor((timeUntilBirthday % 100) / 10).toString();

        timerElement.innerHTML = `${years}:${months}:${days}:${hours}:${minutes}:${seconds}:${tenths}${hundredths}`;
    }

    setInterval(updateTimer, 10); // Updated to 10 milliseconds
    updateTimer();
});