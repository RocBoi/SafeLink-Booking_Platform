document.addEventListener("DOMContentLoaded", function () {
    const audioPlayer = document.getElementById("audio-player");
    const playButton = document.getElementById("play-button");
    const lyricsContainer = document.getElementById("lyrics-container");

    // Lyrics and timestamps (in seconds)
    const lyrics = [
        { time: 0, text: "Should of knew me from the start" },
        { time: 4, text: "Should of known I got your back" },
        { time: 8, text: "Two sides of the story, You wanna hear the facts" },
        { time: 12, text: "If I told you who I was, Westside on the map" },
        { time: 16, text: "If I told you who I am, at the bottom of the map (aye)" },
        { time: 20, text: "Ring around the rosey, Got your woe looking for me" },
        { time: 24, text: "But she scared to pop up, In my motherf***ing trap (aye)" },
        { time: 30, text: "Been around the world, And eye eye eye" },
        { time: 35, text: "Left the kids at home, Being schooled on the 5" },
        { time: 40, text: "Bad b***h queen, Running wit beehive" },
        { time: 45, text: "Swear im seeing spaceships, M-11 driveby's" },
        { time: 50, text: "I can read your mind, Snatch your soul yeah its mine" },
        { time: 55, text: "I just hollered at your partner(lord), Told him hurry up and buy" },
        { time: 60, text: "The plan into play, Kick it like a relay" },
        { time: 65, text: "Swear im moving heavy bass, Yeah im cookin up cake" },
        { time: 70, text: "Serving up a fat plate, Got it looking like a platter" },
        { time: 75, text: "Whether truth be told, Still them lies is what they after" },
        { time: 80, text: "If I said I lied, Would you say I told the truth" },
        { time: 85, text: "Welcome to the other side, Where the skies really blue" },
        { time: 90, text: "I'm only out here for a day, They say the giant went to sleep" },
        { time: 95, text: "And you can mark my word, That’s on the belly of the beast" },
        { time: 100, text: "I left it on her lips, She said it taste like caviar" },
        { time: 105, text: "If she say my name once, Just know she wishing on a star" },
        { time: 110, text: "Slide in the world, Undetected unexpected" },
        { time: 115, text: "Side stepping still repping, From the corner on the block" },
        { time: 120, text: "Brick after brick, Super slimey draped up" },
        { time: 125, text: "They let my double in, That’s where they really f***ed up" },
        { time: 130, text: "I guess I got to pick it up, Exactly where I left it" },
        { time: 135, text: "If its any vendettas, Then its red bandanas" },
        { time: 140, text: "It’s a code and yeen get it, And we smell it on your breath" },
        { time: 145, text: "Put your glasses on shawty, You bout to play you to the left" },
        { time: 150, text: "3 cord fold plus four, What’s the matter" },
        { time: 155, text: "It’s a big fish bowl boy, Swim a little faster" },
        { time: 160, text: "Far from a reverend, Yeah I'm far from a pastor" },
        { time: 165, text: "Tell the truth rumor has it, I ain't nothing but a bastard" },
        { time: 170, text: "Work it whip it stretch it flip it, Better learn to hustle backwards" },
        { time: 175, text: "I been at this for a while, I learned to count this money backwards" },
    ];

    let currentLyricIndex = 0;

    // Update lyrics display
    function updateLyrics() {
        if (currentLyricIndex < lyrics.length) {
            if (audioPlayer.currentTime >= lyrics[currentLyricIndex].time) {
                lyricsContainer.innerText = lyrics[currentLyricIndex].text;
                currentLyricIndex++;
            }
        }
    }

    // Play/Pause button
    playButton.addEventListener("click", function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playButton.innerText = "Pause";
        } else {
            audioPlayer.pause();
            playButton.innerText = "Play";
        }
    });

    // Listen for time updates to sync lyrics
    audioPlayer.addEventListener("timeupdate", updateLyrics);
});

