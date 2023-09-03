const songs = [
   {
      title: "Good Medley",
      artist: "Eddie James",
      bpm: 148,
      timeSignature: "4/4"
   },
   {
      title: "In the river",
      artist: "Jesus Culture",
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
      artist: "Chris Tomlin",
      bpm: 120,
      timeSignature: "4/4"
   },
   {
      title: "Yours (Glory and Praise)",
      artist: "Elevation Worship",
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
      artist: "Jeremey Camp",
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
      artist: "Charity Gale",
      bpm: 61,
      timeSignature: "4/4"
   },
   {
      title: "Hosanna",
      artist: "James Wilson",
      bpm: 73,
      timeSignature: "4/4"
   },
   {
      title: "Glory to Glory",
      artist: "Fred Hammond",
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
      artist: "Charity Gale",
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
      artist: "Israel Houghton",
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
      artist: "Eddie James",
      bpm: 150,
      timeSignature: "3/4"
   },
   {
      title: "I Speak Jesus",
      artist: "Charity Gale",
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
      artist: "Bethel",
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
      artist: "Charity Gale",
      bpm: 50,
      timeSignature: "6/8"
   },
   {
      title: "Trading My Sorrows",
      artist: "Israel Houghton",
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
      artist: "Elevation Worship",
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
      artist: "Eddie James",
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
      artist: "Todd Dulaney",
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
      artist: "Elevation Worship",
      bpm: 138,
      timeSignature: "4/4"
   },
   {
      title: "Echo (In Jesus Name)",
      artist: "Charity Gale",
      bpm: 144,
      timeSignature: "4/4"
   },
   {
      title: "Breakthrough",
      artist: "Eddie James",
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
      artist: "Jesus Culture",
      bpm: 124,
      timeSignature: "4/4"
   },
   {
      title: "Way Maker",
      artist: "Sinach",
      bpm: 132,
      timeSignature: "4/4"
   },
   {
      title: "My joy",
      bpm: 147,
      timeSignature: "4/4"
   },
   {
      title: "Psalms 23",
      artist: "Eddie James",
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
      artist: "Bethel",
      bpm: 136,
      timeSignature: "4/4"
   },
   {
      title: "Again I Say Rejoice",
      artist: "Israel Houghton",
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
      artist: "Cory Asbury",
      bpm: 83,
      timeSignature: "6/8"
   },
   {
      title: "Build My Life",
      artist: "Passion",
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
      artist: "Chris Tomlin",
      bpm: 105,
      timeSignature: "4/4"
   },
   {
      title: "From The Inside Out",
      artist: "Hillsong",
      bpm: 69,
      timeSignature: "4/4"
   },
   {
      title: "In Jesus Name",
      artist: "Darlene Zschech",
      bpm: 105,
      timeSignature: "4/4"
   },
   {
      title: "Victors Crown",
      artist: "Darlene Zschech",
      bpm: 74,
      timeSignature: "4/4"
   },
   {
      title: "Break Every Chain",
      artist: "Jesus Culture",
      bpm: 68,
      timeSignature: "4/4"
   },
   {
      title: "Spirit Break Out",
      artist: "Jesus Culture",
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
      artist: "Jessica DiGiovanni",
      bpm: 80,
      timeSignature: "4/4"
   },
   {
      title: "Psalms 23",
      artist: "People and Songs",
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
      artist: "Bryan & Katie Torwalt",
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
      artist: "Trent Cory",
      bpm: 145,
      timeSignature: "4/4"
   },
   {
      title: "Holy Ground",
      artist: "Passion",
      bpm: 72,
      timeSignature: "4/4"
   },
   {
      title: "Sing Sing Sing",
      artist: "Chris Tomlin",
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
      artist: "Bethel",
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
      artist: "Tauren Wells",
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
      artist: "Jesus Culture",
      bpm: 72,
      timeSignature: "4/4"
   },
   {
      title: "How Majestic",
      artist: "Kari Jobe",
      bpm: 70,
      timeSignature: "4/4"
   },
   {
      title: "The Anthem",
      artist: "Planetshakers",
      bpm: 76,
      timeSignature: "4/4"
   },
   {
      title: "Joy",
      artist: "Eddie James",
      bpm: 130,
      timeSignature: "4/4"
   },
   {
      title: "Leave Me Astounded",
      artist: "Planetshakers",
      bpm: 77,
      timeSignature: "4/4"
   },
   {
      title: "Standing",
      artist: "William McDowell",
      bpm: 87,
      timeSignature: "4/4"
   },
   {
      title: "Whose Report Will You Believe",
      artist: "CCC",
      bpm: 122,
      timeSignature: "4/4"
   },
   {
      title: "Every Praise",
      artist: "Hezekiah Walker",
      bpm: 103,
      timeSignature: "4/4"
   },
   {
      title: "What a Beautiful Name",
      artist: "Hillsong",
      bpm: 136,
      timeSignature: "4/4"
   },
   {
      title: "No Other Name",
      artist: "Freddy Rodriguez",
      bpm: 130,
      timeSignature: "4/4"
   },
   {
      title: "The Blessing",
      artist: "Kari Jobe",
      bpm: 70,
      timeSignature: "4/4"
   },
   {
      title: "Spirit Of The Living God",
      artist: "Vertical Worship",
      bpm: 134,
      timeSignature: "4/4"
   },
   {
      title: "More Than Anything",
      artist: "Lamar Campbell",
      bpm: 95,
      timeSignature: "4/4"
   },
   {
      title: "Your Presence Is Heaven",
      artist: "Israel Houghton",
      bpm: 142,
      timeSignature: "4/4"
   },
   {
      title: "Great I Am",
      bpm: 78,
      timeSignature: "4/4"
   },
   {
      title: "You Are Good",
      artist: "Kari Jobe",
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
      artist: "Planetshakers",
      bpm: 78,
      timeSignature: "4/4"
   },
   {
      title: "Everlasting God",
      artist: "William Murphy",
      bpm: 84,
      timeSignature: "4/4"
   },
   {
      title: "Come Out Of That Grave/Rattle",
      artist: "Elevation Worship",
      bpm: 72,
      timeSignature: "4/4"
   },
   {
      title: "Anything Can Happen",
      artist: "Mark Crowder",
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
      artist: "Free Chapel-Ricardo Sanchez",
      bpm: 80,
      timeSignature: "6/8"
   },
   {
      title: "Goodness Of God",
      artist: "Cece Winans",
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
      artist: "Meredith Andrews",
      bpm: 100,
      timeSignature: "4/4"
   },
   {
      title: "Here On Earth",
      artist: "First Church",
      bpm: 178,
      timeSignature: "4/4"
   },
   {
      title: "Kingdom Come",
      artist: "Covenant Worship",
      bpm: 70,
      timeSignature: "4/4"
   },
   {
      title: "When You Walk Into The Room",
      artist: "Bryan & Katie Torwalt",
      bpm: 72,
      timeSignature: "4/4"
   },
   {
      title: "Shake The Foundations",
      bpm: 133,
      timeSignature: "4/4"
   },
   {
      title: "Heaven On Earth",
      artist: "IBC",
      bpm: 165,
      timeSignature: "6/8"
   },
   {
      title: "Nothing else",
      artist: "Cody Carnes",
      bpm: 68,
      timeSignature: "6/8"
   },
   {
      title: "Lord You Are Good",
      artist: "Israel Houghton",
      bpm: 128,
      timeSignature: "4/4"
   },
   {
      title: "Sing a New Song",
      artist: "BJ Putnam",
      bpm: 126,
      timeSignature: "4/4"
   },
   {
      title: "Blessed be your name",
      artist: "Chris Tomlin",
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
      artist: "Chris Tomlin",
      bpm: 136,
      timeSignature: "4/4"
   },
   {
      title: "More, Holy Spirit",
      artist: "Covenant Worship",
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
      artist: "Red Rocks Worship",
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
      artist: "Eddie James",
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
      artist: "Passion",
      bpm: 110,
      timeSignature: "4/4"
   },
   {
      title: "Same God",
      artist: "Elevation Worship",
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
      artist: "Brandon Lake & Cody Carnes",
      bpm: 72,
      timeSignature: "4/4"
   },
   {
      title: "Great Jehovah",
      artist: "JJ Harrison",
      bpm: 100,
      timeSignature: "4/4"
   },
   {
      title: "So Will I",
      artist: "Hillsong",
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
      artist: "Israel Houghton",
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
      artist: "Maverick City",
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
      artist: "Todd Dulaney",
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
      artist: "Eddie James",
      bpm: 150,
      timeSignature: "4/4"
   },
   {
      title: "Revivals In The Air",
      artist: "Bethel",
      bpm: 127,
      timeSignature: "6/8"
   },
   {
      title: "King Of Glory",
      artist: "Todd Dulaney",
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
      artist: "OLD",
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
   {
      title: "What a Mighty God We Serve (Old)",
      artist: "Hymn",
      bpm: 168,
      timeSignature: "4/4"
   },
   {
      title: "Here As In Heaven",
      artist: "Elevation Worship",
      bpm: 70,
      timeSignature: "4/4"
   },
   {
      title: "Worthy Is Your Name",
      artist: "Cece Winans",
      bpm: 130,
      timeSignature: "4/4"
   },
   {
      title: "Heaven",
      artist: "Draylin Young",
      bpm: 110,
      timeSignature: "4/4"
   },
   {
      title: "Amen",
      artist: "Charity Gale",
      bpm: 106,
      timeSignature: "4/4"
   },
   {
      title: "New Name Written Down In Glory",
      artist: "Charity Gale",
      bpm: 98,
      timeSignature: "4/4"
   },
   {
      title: "Let The Heavens Open",
      bpm: 64,
      timeSignature: "4/4"
   },
   {
      title: "Arise(You Are Good)",
      bpm: 107,
      timeSignature: "4/4"
   },
   {
      title: "I Thank God",
      bpm: 130,
      timeSignature: "4/4"
   },
   {
      title: "Jehovah",
      artist: "Elevation Worship",
      bpm: 100,
      timeSignature: "4/4"
   },
   {
      title: "Jesus",
      artist: "Draylin Young",
      bpm: 164,
      timeSignature: "4/4"
   },
   {
      title: "Famous For",
      bpm: 86,
      timeSignature: "4/4"
   },
   {
      title: "Child Of God",
      artist: "Draylin Young",
      bpm: 125,
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
      <p>Artist: ${song.artist}</p>
      <p>BPM: ${song.bpm}</p>
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
