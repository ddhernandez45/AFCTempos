const songs = [
   {
      title: "When I speak your name",
      bpm: 70,
      timeSignature: "4/4"
   },
   {
      title: "Your grace is enough",
      bpm: 120,
      timeSignature: "4/4"
   },
   {
      title: "Yours Glory and Praise",
      bpm: 70,
      timeSignature: "4/4"
   },
   {
      title: "One God",
      bpm: 150,
      timeSignature: "4/4"
   },
   {
      title: "Lord you're mighty",
      bpm: 88,
      timeSignature: "4/4"
   },
   {
      title: "Overcame",
      bpm: 144,
      timeSignature: "6/8"
   },
   {
      title: "Higher",
      bpm: 97,
      timeSignature: "4/4"
   },
   {
      title: "Thank you Jesus for the blood",
      bpm: 61,
      timeSignature: "4/4"
   },
   {
      title: "Hosanna James Wilson",
      bpm: 73,
      timeSignature: "4/4"
   },
   {
      title: "Glory to glory",
      bpm: 88,
      timeSignature: "4/4"
   },
   {
      title: "Speak to the mountain",
      bpm: 113,
      timeSignature: "4/4"
   },
   {
      title: "Throne Room",
      bpm: 156,
      timeSignature: "4/4"
   },
   {
      title: "Lion and the lamb",
      bpm: 90,
      timeSignature: "4/4"
   },
   {
      title: "Moving Forward",
      bpm: 140,
      timeSignature: "4/4"
   },
   {
      title: "I love you Lord",
      bpm: 72,
      timeSignature: "4/4"
   },
   {
      title: "Great Jehovah",
      bpm: 100,
      timeSignature: "4/4"
   },
   {
      title: "Power in the name",
      bpm: 132,
      timeSignature: "4/4"
   },
   {
      title: "Worthy",
      bpm: 150,
      timeSignature: "3/4"
   },
   {
      title: "I speak Jesus",
      bpm: 74,
      timeSignature: "4/4"
   },
   {
      title: "Build Your Church",
      bpm: 178,
      timeSignature: "6/8"
   },
   {
      title: "Hineh ma Tov",
      bpm: 130,
      timeSignature: "4/4"
   },
   {
      title: "Release the Sound",
      bpm: 72,
      timeSignature: "4/4"
   },
   {
      title: "Anything is possible",
      bpm: 122,
      timeSignature: "4/4"
   },
   {
      title: "Total Praise",
      bpm: 48,
      timeSignature: "4/4"
   },
   {
      title: "Deliverer",
      bpm: 72,
      timeSignature: "4/4"
   },
   {
      title: "I will be undignified",
      bpm: 168,
      timeSignature: ""
   },
   {
      title: "We bless the name",
      bpm: 82,
      timeSignature: "4/4"
   },
   {
      title: "Take my life (Holiness)",
      bpm: 130,
      timeSignature: "4/4"
   },
   {
      title: "A reason to dance",
      bpm: 130,
      timeSignature: "4/4"
   },
   {
      title: "Endless Praise",
      bpm: 50,
      timeSignature: "6/8"
   },
   {
      title: "Trading my sorrows",
      bpm: 122,
      timeSignature: "4/4"
   },
   {
      title: "Send Up Judah",
      bpm: 108,
      timeSignature: "4/4"
   },
   {
      title: "The glory is yours",
      bpm: 78,
      timeSignature: "4/4"
   },
   {
      title: "Stones",
      bpm: 76,
      timeSignature: "4/4"
   },
   {
      title: "Hallelujah chant",
      bpm: 95,
      timeSignature: "4/4"
   },
   // ... Continue adding all the songs in the same format
];

// Rest of your code...

   // Add more songs in the same format
   // ...

const searchBar = document.getElementById("searchBar");
const songList = document.getElementById("songList");
const songDetails = document.getElementById("songDetails");

function displaySongs() {
   songList.innerHTML = "";
   const searchTerm = searchBar.value.toLowerCase();
   songs.forEach(song => {
      if (
         song.title.toLowerCase().includes(searchTerm) ||
         song.bpm.toString().includes(searchTerm)
      ) {
         const li = document.createElement("li");
         li.textContent = song.title;
         li.addEventListener("click", () => displaySongDetails(song));
         songList.appendChild(li);
      }
   });
}

function displaySongDetails(song) {
   const songDetails = document.getElementById("songDetails");
   songDetails.innerHTML = `
      <h2>${song.title}</h2>
      <p>Tempo: ${song.bpm} BPM</p>
      <p>Time Signature: ${song.timeSignature}</p>
      <!-- Add more details if needed -->
   `;
}



searchBar.addEventListener("input", displaySongs);
displaySongs(); // Initial display
