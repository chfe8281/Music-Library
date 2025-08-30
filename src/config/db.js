const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/music_library', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log('Connected to MongoDB'))
.cath((err) => console.error('Connection error: ', err));

const songSchema = new mongoose.Schema({
  title: String,
  duration: Number,
  description: String,
  downloadUrl: String,
  hasSheetMusic: Boolean,
  sheetMusicUrl: String
});

const songs = [
    {
        title: "Song of the Tides",
        duration: 202,
        description: "Song of the Tides depicts the motions of an everchanging ocean as it acts both calm and chaotic. This song is written for four parts, a flute, piano, cello, and drums.",
        downloadURL: "../resources/songs/Song_of_the_Tides.mp3",
        hasSheetMusic: true,
        sheetMusicURL: "../resources/sheetMusic/Song_of_the_Tides.pdf"
    },
    {
        title: "Waltz",
        duration: 214,
        description: "Waltz description",
        downloadURl: "../resources/songs/Waltz.mp3",
        hasSheetMusic: false,
        sheetMusicURL: ""
    }
]