const songs = [
   {
      title: "Good Medley IBC",
      bpm: 148,
      timeSignature: "4/4"
   },
   {
      title: "In the river",
      bpm: 118,
      timeSignature: "4/4"
   },
   {
      title: "When I Speak Your Name",
      bpm: 70,
      timeSignature: "4/4"
   },
   {
      title: "Your Grace Is Enough",
      bpm: 120,
      timeSignature: "4/4"
   },
   {
      title: "Yours (Glory and Praise)",
      bpm: 70,
      timeSignature: "4/4"
   },
   {
      title: "One God",
      bpm: 150,
      timeSignature: "4/4"
   },
   {
      title: "Lord You're Mighty",
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
      title: "Thank You Jesus For The Blood",
      bpm: 61,
      timeSignature: "4/4"
   },
   {
      title: "Hosanna",
      bpm: 73,
      timeSignature: "4/4"
   },
   {
      title: "Glory to Glory",
      bpm: 88,
      timeSignature: "4/4"
   },
   {
      title: "Speak To The Mountain",
      bpm: 113,
      timeSignature: "4/4"
   },
   {
      title: "Throne Room",
      bpm: 156,
      timeSignature: "6/8"
   },
   {
      title: "Lion And The Lamb",
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
      title: "Power In The Name",
      bpm: 132,
      timeSignature: "4/4"
   },
   {
      title: "Worthy",
      bpm: 150,
      timeSignature: "3/4"
   },
   {
      title: "I Speak Jesus",
      bpm: 74,
      timeSignature: "4/4"
   },
   {
      title: "Build Your Church",
      bpm: 178,
      timeSignature: "6/8"
   },
   {
      title: "Hineh Ma Tov",
      bpm: 130,
      timeSignature: "4/4"
   },
   {
      title: "Anything is Possible",
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
      title: "We Bless The Name",
      bpm: 82,
      timeSignature: "4/4"
   },
   {
      title: "Take My Life (Holiness)",
      bpm: 130,
      timeSignature: "4/4"
   },
   {
      title: "A Reason To Dance",
      bpm: 130,
      timeSignature: "4/4"
   },
   {
      title: "Endless Praise",
      bpm: 50,
      timeSignature: "6/8"
   },
   {
      title: "Trading My Sorrows",
      bpm: 122,
      timeSignature: "4/4"
   },
   {
      title: "Send Up Judah",
      bpm: 108,
      timeSignature: "4/4"
   },
   {
      title: "The Glory Is Yours",
      bpm: 78,
      timeSignature: "4/4"
   },
   {
      title: "Stones",
      bpm: 76,
      timeSignature: "4/4"
   },
   {
      title: "Hallelujah Chant",
      bpm: 95,
      timeSignature: "4/4"
   },
   {
      title: "We Rise",
      bpm: 132,
      timeSignature: "4/4"
   },
   {
      title: "Your Great Name",
      bpm: 103,
      timeSignature: "4/4"
   },
   {
      title: "Hallelujah to Your Name",
      bpm: 122,
      timeSignature: "4/4"
   },
   {
      title: "Only King Forever",
      bpm: 138,
      timeSignature: "4/4"
   },
   {
      title: "Echo (In Jesus Name)",
      bpm: 144,
      timeSignature: "4/4"
   },
   {
      title: "Breakthrough - EJ",
      bpm: 147,
      timeSignature: "4/4"
   },
   {
      title: "I Am Forgiven",
      bpm: 124,
      timeSignature: "4/4"
   },
   {
      title: "Surrounded",
      bpm: 74,
      timeSignature: "4/4"
   },
   {
      title: "Freedom",
      bpm: 124,
      timeSignature: "4/4"
   },
   {
      title: "Way Maker",
      bpm: 132,
      timeSignature: "4/4"
   },
   {
      title: "My joy",
      bpm: 147,
      timeSignature: "4/4"
   },
   {
      title: "Psalms 23 IBC",
      bpm: 128,
      timeSignature: "4/4"
   },
   {
      title: "Do It Again",
      bpm: 86,
      timeSignature: "4/4"
   },
   {
      title: "King Of My Heart",
      bpm: 136,
      timeSignature: "4/4"
   },
   {
      title: "Again I Say Rejoice",
      bpm: 133,
      timeSignature: "4/4"
   },
   {
      title: "Amazed",
      bpm: 70,
      timeSignature: "4/4"
   },
   {
      title: "Reckless Love",
      bpm: 83,
      timeSignature: "6/8"
   },
   {
      title: "Build My Life",
      bpm: 70,
      timeSignature: "4/4"
   },
   {
      title: "Glorious",
      bpm: 146,
      timeSignature: "4/4"
   },
   {
      title: "Our God",
      bpm: 105,
      timeSignature: "4/4"
   },
   {
      title: "From The Inside Out",
      bpm: 69,
      timeSignature: "4/4"
   },
   {
      title: "In Jesus Name",
      bpm: 105,
      timeSignature: "4/4"
   },
   {
      title: "Victors Crown",
      bpm: 74,
      timeSignature: "4/4"
   },
   {
      title: "Break Every Chain",
      bpm: 68,
      timeSignature: "4/4"
   },
   {
      title: "Spirit Break Out",
      bpm: 74,
      timeSignature: "4/4"
   },
   {
      title: "Don’t Mind Waiting",
      bpm: 70,
      timeSignature: "4/4"
   },
   {
      title: "Threshold Of Glory",
      bpm: 85,
      timeSignature: "4/4"
   },
   {
      title: "You Deserve It",
      bpm: 174,
      timeSignature: "6/8"
   },
   {
      title: "Defend Us",
      bpm: 80,
      timeSignature: "4/4"
   },
   {
      title: "Glory is Yours",
      bpm: 139,
      timeSignature: "4/4"
   },
   {
      title: "Psalms 23 - P&S",
      bpm: 63,
      timeSignature: "4/4"
   },
   {
      title: "Not Afraid",
      bpm: 79,
      timeSignature: "4/4"
   },
   {
      title: "Enter The Gates",
      bpm: 92,
      timeSignature: "4/4"
   },
   {
      title: "Excellent",
      bpm: 96,
      timeSignature: "4/4"
   },
   {
      title: "I Am Free",
      bpm: 136,
      timeSignature: "4/4"
   },
   {
      title: "We Praise Your Name",
      bpm: 145,
      timeSignature: "4/4"
   },
   {
      title: "Holy Ground",
      bpm: 72,
      timeSignature: "4/4"
   },
   {
      title: "Sing Sing Sing",
      bpm: 145,
      timeSignature: "4/4"
   },
   {
      title: "This Place",
      bpm: 78,
      timeSignature: "4/4"
   },
   {
      title: "Raise a Hallelujah",
      bpm: 82,
      timeSignature: "4/4"
   },
   {
      title: "Greater Things",
      bpm: 135,
      timeSignature: "4/4"
   },
   {
      title: "Famous For",
      bpm: 86,
      timeSignature: "4/4"
   },
   {
      title: "No One Higher",
      bpm: 72,
      timeSignature: "4/4"
   },
   {
      title: "Holy Spirit",
      bpm: 72,
      timeSignature: "4/4"
   },
   {
      title: "How Majestic",
      bpm: 70,
      timeSignature: "4/4"
   },
   {
      title: "The Anthem",
      bpm: 76,
      timeSignature: "4/4"
   },
   {
      title: "Joy",
      bpm: 130,
      timeSignature: "4/4"
   },
   {
      title: "Leave Me Astounded",
      bpm: 77,
      timeSignature: "4/4"
   },
   {
      title: "Standing",
      bpm: 87,
      timeSignature: "4/4"
   },
   {
      title: "Whose Report Will You Believe",
      bpm: 122,
      timeSignature: "4/4"
   },
   {
      title: "Every Praise",
      bpm: 103,
      timeSignature: "4/4"
   },
   {
      title: "What a Beautiful Name",
      bpm: 136,
      timeSignature: "4/4"
   },
   {
      title: "No Other Name",
      bpm: 130,
      timeSignature: "4/4"
   },
   {
      title: "The Blessing",
      bpm: 70,
      timeSignature: "4/4"
   },
   {
      title: "Spirit Of The Living God",
      bpm: 134,
      timeSignature: "4/4"
   },
   {
      title: "More Than Anything",
      bpm: 95,
      timeSignature: "4/4"
   },
   {
      title: "Your Presence Is Heaven",
      bpm: 142,
      timeSignature: "4/4"
   },
   {
      title: "Great I Am",
      bpm: 78,
      timeSignature: "4/4"
   },
   {
      title: "You Are Good KJ",
      bpm: 68,
      timeSignature: "4/4"
   },
   {
      title: "Joy (Down Deep In My Soul)",
      bpm: 85,
      timeSignature: "4/4"
   },
   {
      title: "Like a Fire",
      bpm: 78,
      timeSignature: "4/4"
   },
   {
      title: "Everlasting God",
      bpm: 84,
      timeSignature: "4/4"
   },
   {
      title: "Come Out Of That Grave/Rattle",
      bpm: 72,
      timeSignature: "4/4"
   },
   {
      title: "Anything Can Happen",
      bpm: 78,
      timeSignature: "4/4"
   },
   {
      title: "Great Is His Faithfulness",
      bpm: 45,
      timeSignature: "6/8"
   },
   {
      title: "I’m Not Ashamed",
      bpm: 159,
      timeSignature: "4/4"
   },
   {
      title: "Goodness Of God",
      bpm: 126,
      timeSignature: "4/4"
   },
   {
      title: "Good Thing",
      bpm: 131,
      timeSignature: "4/4"
   },
   {
      title: "Open Up The Heavens",
      bpm: 100,
      timeSignature: "4/4"
   },
   {
      title: "Here On Earth",
      bpm: 178,
      timeSignature: "4/4"
   },
   {
      title: "Kingdom Come",
      bpm: 70,
      timeSignature: "4/4"
   },
   {
      title: "When You Walk Into The Room",
      bpm: 72,
      timeSignature: "4/4"
   },
   {
      title: "Shake the foundations",
      bpm: 133,
      timeSignature: "4/4"
   },
   {
      title: "Heaven on earth",
      bpm: 165,
      timeSignature: "6/8"
   },
   {
      title: "Nothing else",
      bpm: 68,
      timeSignature: "6/8"
   },
   {
      title: "Lord You Are Good",
      bpm: 128,
      timeSignature: "4/4"
   },
   {
      title: "Sing a New Song",
      bpm: 126,
      timeSignature: "4/4"
   },
   {
      title: "Blessed be your name",
      bpm: 130,
      timeSignature: "4/4"
   },
   {
      title: "Open up the sky",
      bpm: 82,
      timeSignature: "4/4"
   },
   {
      title: "Not to us",
      bpm: 136,
      timeSignature: "4/4"
   },
   {
      title: "More, Holy Spirit",
      bpm: 72,
      timeSignature: "4/4"
   },
   {
      title: "Isn’t He",
      bpm: 72,
      timeSignature: "6/8"
   },
   {
      title: "House Of prayer/Bethel",
      bpm: 126,
      timeSignature: "4/4"
   },
   {
      title: "My God fights for me",
      bpm: 70,
      timeSignature: "6/8",
   },
   {
      title: "Breakthrough - RRW",
      bpm: 95,
      timeSignature: "4/4"
   },
   {
      title: "Awesome",
      bpm: 128,
      timeSignature: "4/4"
   },
   {
      title: "Overcomer",
      bpm: 114,
      timeSignature: "4/4"
   },
   {
      title: "Nothing But The Blood",
      bpm: 80,
      timeSignature: "4/4"
   },
   {
      title: "Glorious Day",
      bpm: 110,
      timeSignature: "4/4"
   },
   {
      title: "Same God",
      bpm: 73,
      timeSignature: "4/4"
   },
   {
      title: "Never Lost",
      bpm: 56,
      timeSignature: "6/8"
   },
   {
      title: "In The Name",
      bpm: 82,
      timeSignature: "4/4"
   },
   {
      title: "Glory To The New Born King",
      bpm: 103,
      timeSignature: "6/8"
   },
   {
      title: "Hark the Herald",
      bpm: 109,
      timeSignature: "4/4"
   },
   {
      title: "Thank You",
      bpm: 100,
      timeSignature: "4/4"
   },
   {
      title: "Covenant Keeping God",
      bpm: 142,
      timeSignature: "4/4"
   },
   {
      title: "Too Good To Not Believe",
      bpm: 72,
      timeSignature: "4/4"
   },
   {
      title: "Great Jehovah",
      bpm: 100,
      timeSignature: "4/4"
   },
   {
      title: "So Will I",
      bpm: 128,
      timeSignature: "4/4"
   },
   {
      title: "Great In Power",
      bpm: 120,
      timeSignature: "4/4"
   },
   {
      title: "Friend Of God",
      bpm: 127,
      timeSignature: "4/4"
   },
   {
      title: "All Because Of Jesus",
      bpm: 132,
      timeSignature: "4/4"
   },
   {
      title: "Better Is One Day",
      bpm: 76,
      timeSignature: "4/4"
   },
   {
      title: "Love Me Anyway",
      bpm: 130,
      timeSignature: "4/4"
   },
   {
      title: "More Than Enough",
      bpm: 110,
      timeSignature: "4/4"
   },
   {
      title: "Shout With The Voice Of Triumph",
      bpm: 108,
      timeSignature: "4/4"
   },
   {
      title: "Holy Ghost",
      bpm: 79,
      timeSignature: "4/4"
   },
   {
      title: "My All (Lord I Praise Your Name)",
      bpm: 118,
      timeSignature: "4/4"
   },
   {
      title: "You Are My Strength",
      bpm: 84,
      timeSignature: "4/4"
   },
   {
      title: "Gratitude",
      bpm: 52,
      timeSignature: "6/8"
   },
   {
      title: "You’re Doing It All Again",
      bpm: 131,
      timeSignature: "4/4"
   },
   {
      title: "Release The Sound",
      bpm: 72,
      timeSignature: "4/4"
   },
   {
      title: "Silent Night (holy)",
      bpm: 86,
      timeSignature: "6/8"
   },
   {
      title: "Jesus Our Victory",
      bpm: 130,
      timeSignature: "4/4"
   },
   {
      title: "Fire",
      bpm: 150,
      timeSignature: "4/4"
   },
   {
      title: "Revivals In The Air",
      bpm: 127,
      timeSignature: "6/8"
   },
   {
      title: "King Of Glory",
      bpm: 159,
      timeSignature: "6/8"
   },
   {
      title: "When I Think About The Lord",
      bpm: 110,
      timeSignature: "4/4"
   },
   {
      title: "We Are Here To Worship",
      bpm: 122,
      timeSignature: "4/4"
   },
   {
      title: "The Revelation Song",
      bpm: 62,
      timeSignature: "4/4"
   },
   {
      title: "Sing To The King",
      bpm: 135,
      timeSignature: "4/4"
   },
   {
      title: "Because Of Who You are",
      bpm: 115,
      timeSignature: "4/4"
   },
   {
      title: "Mighty God",
      bpm: 105,
      timeSignature: "4/4"
   },
   {
      title: "It Is You",
      bpm: 77,
      timeSignature: "4/4"
   },
   {
      title: "Bless The Lord He Endureth Forever",
      bpm: 104,
      timeSignature: "4/4"
   },
      // Add more songs in the same format
   // ...
];

const searchBar = document.getElementById("searchBar");
const clearButton = document.getElementById("clearButton");
const songList = document.getElementById("songList");
const songDetails = document.getElementById("songDetails");

function displaySongs() {
   songList.innerHTML = "";
   const searchTerm = searchBar.value.toLowerCase();

   // Sort the songs alphabetically by title
   const sortedSongs = songs.slice().sort((a, b) => a.title.localeCompare(b.title));

   sortedSongs.forEach(song => {
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
   songDetails.innerHTML = `
      <h2>${song.title}</h2>
      <p>BPM: ${song.bpm} </p>
      <p>Time Signature: ${song.timeSignature}</p>
      <!-- Add more details if needed -->
   `;
   // Scroll back to the top of the page
   window.scrollTo({ top: 0, behavior: 'smooth' });
}

searchBar.addEventListener("input", displaySongs);

// Event listener for the Clear button
clearButton.addEventListener("click", () => {
   searchBar.value = ""; // Clear the search bar
   displaySongs(); // Update the displayed songs
});

displaySongs(); // Initial display

// Created By: Destiny Hernandez 
