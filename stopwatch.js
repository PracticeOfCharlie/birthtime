document.addEventListener("DOMContentLoaded", function() {
    let startTime = new Date("November 11, 2004");
    console.log(startTime);
    let timer = document.getElementById("stopwatch");

    function updateStopwatch() {
        let currentTime = new Date();
        if (timer) {
            let elapsedTime = new Date(currentTime - startTime);

            let years = currentTime.getUTCFullYear() - startTime.getUTCFullYear() - 1;
            let months = elapsedTime.getUTCMonth();
            let days = elapsedTime.getUTCDate() - 1;
            let hours = elapsedTime.getUTCHours();
            let minutes = elapsedTime.getUTCMinutes();
            let seconds = elapsedTime.getUTCSeconds();
            let tenths = Math.floor((elapsedTime % 1000) / 100); // Calculate tenths of a second
            let hundredths = Math.floor((elapsedTime % 100) / 10); // Calculate hundredths of a second

            // Format numbers with leading zeros
            let formattedMonths = months.toString().padStart(2, '0');
            let formattedDays = days.toString().padStart(2, '0');
            let formattedHours = hours.toString().padStart(2, '0');
            let formattedMinutes = minutes.toString().padStart(2, '0');
            let formattedSeconds = seconds.toString().padStart(2, '0');
            let formattedTenths = tenths.toString();

            timer.innerHTML = `${years}:${formattedMonths}:${formattedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds}:${formattedTenths}${hundredths}`;
        }
    }


    setInterval(updateStopwatch, 10);
});
