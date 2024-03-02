import { DoublyLinkedList } from "./models/DoublyLinkedList.mjs";
import Song from "./models/Song.js";
import Image from "./models/Image.js";

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const list = new DoublyLinkedList();

list.push(new Song("Arctic Monkeys - I Bet You Look Good On The Dancefloor", "audio/Arctic Monkeys - I Bet You Look Good On The Dancefloor.mp3", new Image("Arctic Monkeys - I Bet You Look Good On The Dancefloor", "img/Arctic Monkeys - I Bet You Look Good On The Dancefloor.jpeg")));
list.push(new Song("Enjambre - Ciencia De La Lluvia", "audio/Enjambre - Ciencia De La Lluvia.mp3", new Image("Enjambre - Ciencia De La Lluvia", "img/Enjambre - Ciencia De La Lluvia.jpg")));
list.push(new Song("Florence + The Machine - Free", "audio/Florence + The Machine - Free.mp3", new Image("Florence + The Machine - Free", "img/Florence + The Machine - Free.jpeg")));
list.push(new Song("Harry Styles - Late Night Talking", "audio/Harry Styles - Late Night Talking.mp3", new Image("Harry Styles - Late Night Talking", "img/Harry Styles - Late Night Talking.jpeg")));
list.push(new Song("Lana Del Rey - Let The Light In ft Father John Misty", "audio/Lana Del Rey - Let The Light In ft Father John Misty.mp3", new Image("Lana Del Rey - Let The Light In ft Father John Misty", "img/Lana Del Rey - Let The Light In ft Father John Misty.png")));
list.push(new Song("Lykke Li - Little Bit", "audio/Lykke Li - Little Bit.mp3", new Image("Lykke Li - Little Bit", "img/Lykke Li - Little Bit.jpeg")));
list.push(new Song("Mitski - Pink in the Night", "audio/Mitski - Pink in the Night.mp3", new Image("Mitski - Pink in the Night", "img/Mitski - Pink in the Night.jpg")));
list.push(new Song("Soda Stereo - Si No Fuera por...", "audio/Soda Stereo - Si No Fuera por....mp3", new Image("Soda Stereo - Si No Fuera por...", "img/Soda Stereo - Si No Fuera por....jpeg")));
list.push(new Song("Taylor Swift - I Can See You Taylors Version From The Vault", "audio/Taylor Swift - I Can See You Taylors Version From The Vault.mp3", new Image("Taylor Swift - I Can See You Taylors Version From The Vault", "img/Taylor Swift - I Can See You Taylors Version From The Vault.jpeg")));
list.push(new Song("Taylor Swift - The Archer", "audio/Taylor Swift - The Archer.mp3", new Image("Taylor Swift - The Archer", "img/Taylor Swift - The Archer.jpg")));
list.push(new Song("Taylor Swift - Youre On Your Own Kid", "audio/Taylor Swift - Youre On Your Own Kid.mp3", new Image("Taylor Swift - Youre On Your Own Kid", "img/Taylor Swift - Youre On Your Own Kid.png")));
let audioIndex = 0;


function changeSong(direction) {
    audioIndex = (audioIndex + direction + list.size()) % list.size();
    loadAudio(list.getElementAt(audioIndex).element);
    audioPlay(); 
}


function loadAudio(song) {
    title.textContent = song.name;
    audio.src = song.audioSrc;
    loadAlbumArt(song.image);
   
}

function loadAlbumArt(image) {
    const albumArt = document.getElementById("albumArt");
    albumArt.src = image.imageSrc;
    albumArt.alt = image.name;
}


function audioPlay() {
    if (audio.paused) {
        audio.play();
    }
}


function audioPause() {
    if (!audio.paused) {
        audio.pause();
    }
}


play.addEventListener("click", () => {
    if (audio.paused) {
        audioPlay();
    } else {
        audioPause();
    }
});

prev.addEventListener("click", () => {
    changeSong(-1);
});


next.addEventListener("click", () => {
    changeSong(1);
});

loadAudio(list.getElementAt(audioIndex).element);

