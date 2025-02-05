document.addEventListener("DOMContentLoaded", function() {
    const lyricsDisplay = document.querySelector(".lyrics");
    let lyrics = [
        { time: 5, text: "If I lied, would you ride?" },
        { time: 10, text: "If I cried, would you slide?" },
        { time: 15, text: "Tell me what’s on your mind." },
        { time: 20, text: "I ain't got no time for lies." }
    ];

    function syncLyrics() {
        let currentTime = Math.floor(new Date().getTime() / 1000) % 30;
        let lyric = lyrics.find(l => l.time === currentTime);
        if (lyric) {
            lyricsDisplay.innerText = lyric.text;
        }
    }

    setInterval(syncLyrics, 1000);
});

