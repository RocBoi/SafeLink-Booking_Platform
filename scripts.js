let lyrics = [
        { time: 5, text: "If I lied, would you ride?" },
        { time: 10, text: "If I cried, would you slide?" },
        { time: 15, text: "Tell me what’s on your mind." },
        { time: 20, text: "I ain't got no time for lies." },
        { time: 25, text: "I kept it real from the start." },
        { time: 30, text: "Told you my past, showed you my heart." },
        { time: 35, text: "But now you question my love, " },
        { time: 40, text: "Like I ain't been real enough." },
        { time: 45, text: "If I fell, would you catch me?" },
        { time: 50, text: "Or leave me stuck in the deep?" },
        { time: 55, text: "All these scars I carry, " },
        { time: 60, text: "Memories cuttin’ me deep." }
    ];

    function syncLyrics() {
        let currentTime = Math.floor(new Date().getTime() / 1000) % 65;
        let lyric = lyrics.find(l => l.time === currentTime);
        if (lyric) {
            lyricsDisplay.innerText = lyric.text;
        }
    }

    setInterval(syncLyrics, 1000);
});

