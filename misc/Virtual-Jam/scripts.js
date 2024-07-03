const socket = io('13.59.96.113:3000', {transports: ['websocket'], secure: true});

socket.on('connect', () =>{
    console.log("Connected to backend");
});

socket.on('disconnect', () => {
    console.log("Disconnected from backend");
});


const keys = document.querySelectorAll('.piano-key');
const drums = document.querySelectorAll('.drum');

const Instrument = Object.freeze({
    Piano: 0,
    Drums: 1,
})

keys.forEach((key) => {
    key.addEventListener('mousedown', (e) => {
        const pressedKey = key.dataset.note;
        console.log("Pressed Piano Note: " + pressedKey);
        // Press Note -> Server Broadcasts -> Note is played
        //Uncomment below for Press Note -> Note is played -> ServerBroadcasts
        // playSound(pressedKey, Instrument.Piano);
        socket.emit('notePress', {note: pressedKey, instrument: Instrument.Piano});
    });
});

drums.forEach((drum) => {
    drum.addEventListener('mousedown', (e) =>{
        const pressedDrum = drum.dataset.note;
        console.log("Pressed Drum Note: " + pressedDrum);
        socket.emit('notePress', {note: pressedDrum, instrument: Instrument.Drums});
    });

});

socket.on('notePress', data => {
    console.log("Received Note from server: " + data.note + ", " + data.instrument);
    playSound(data.note, data.instrument);
})

function playSound(note, instrument){
    console.log("Play Note Sound");
    if(instrument == Instrument.Piano)
        audio = new Audio(`/Sounds/piano-mp3/${note}.mp3`);
    else if(instrument == Instrument.Drums)
        audio = new Audio(`/Sounds/drums-mp3/${note}.mp3`)
    audio.play();
}
