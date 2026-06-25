const courses = [
  "AB Art Management",
  "AB Chinese Studies",
  "AB Communication",
  "AB Development Studies",
  "AB Diplomacy and International Relations with Specialization in East and Southeast Asian Studies",
  "AB Economics",
  "AB Economics (Honors Program)",
  "AB European Studies",
  "AB History",
  "AB Humanities",
  "AB Interdisciplinary Studies",
  "AB Literary and Cultural Studies Program",
  "AB Literature (English)",
  "AB Management Economics",
  "AB Panitikang Filipino",
  "AB Philosophy",
  "AB Political Science",
  "AB Political Science - M Public Management",
  "AB Political Science - MA Political Science, major in Global Politics",
  "AB Psychology",
  "AB Sociology",
  "BFA Creative Writing",
  "BFA Information Design",
  "BFA Theater Arts",
  "BS Applied Mathematics - M Data Science",
  "BS Applied Mathematics with Specialization in Mathematical Finance - M Applied Mathematics, major in Mathematical Finance",
  "BS Applied Physics - BS Materials Science and Engineering",
  "BS Biology",
  "BS Chemistry",
  "BS Chemistry - BS Materials Science and Engineering",
  "BS Chemistry - MS Chemistry",
  "BS Communications Technology Management",
  "BS Computer Engineering",
  "BS Computer Science",
  "BS Computer Science - BS Digital Game Design and Development",
  "BS Computer Science - MS Computer Science",
  "BS Electronics Engineering",
  "BS Environmental Science",
  "BS Health Sciences",
  "BS Information Technology Entrepreneurship",
  "BS Learning Science and Design (BS LEARN)",
  "BS Legal Management",
  "BS Life Sciences",
  "BS Management",
  "BS Management (Honors Program)",
  "BS Management Engineering",
  "BS Management Information Systems",
  "BS Management Information Systems - MS Computer Science",
  "BS Management of Applied Chemistry",
  "BS Mathematics",
  "BS Physics",
  "BS Psychology",
  "BS Restaurant Entrepreneurship",
  "BS Innovation Design Engineering"
];

const yearLevels = [
  "1st year",
  "2nd year",
  "3rd year",
  "4th year",
  "5th year or higher",
  "Graduate student"
];

const interestGroups = [
  { id: "sports", label: "Sports", subtags: ["tennis", "basketball", "pickleball", "fun run", "beginner games"] },
  { id: "arts", label: "Arts", subtags: ["museum", "theater", "creative writing", "design", "music"] },
  { id: "orgs", label: "Orgs", subtags: ["rec week", "talks", "advocacy", "business", "culture"] },
  { id: "food", label: "Food", subtags: ["food talks", "coffee", "restaurants", "snacks", "creator talks"] },
  { id: "literature", label: "Literature", subtags: ["poetry", "fiction", "essays", "filipino literature", "book clubs"] },
  { id: "wellness", label: "Wellness", subtags: ["quiet night", "walking", "mindful break", "low crowd", "movement"] },
  { id: "boardgames", label: "Board games", subtags: ["party games", "strategy", "casual tables", "beginner rules", "library games"] },
  { id: "culture", label: "Culture", subtags: ["exhibits", "campus traditions", "talks", "zen garden", "performances"] },
  { id: "music", label: "Music", subtags: ["concert", "open crowd", "acoustic", "field event", "performances"] },
  { id: "friends", label: "Social", subtags: ["go with someone", "small group", "meet new people", "arrive together", "low pressure"] }
];

const personalityTypes = {
  chill: {
    title: "Quiet Connector",
    badge: "Chill match style",
    summary: "You prefer low-pressure plans, smaller groups, and events where conversation can happen naturally.",
    algorithm: "TAYO gives extra weight to chill events, small groups, okay-to-go-alone flags, and interests that create easy conversation starters.",
    next: "Start with Arete Museum Viewing or Board Games in New Rizal Library."
  },
  outgoing: {
    title: "Campus Catalyst",
    badge: "Outgoing match style",
    summary: "You are more open to big crowds, loud events, and first moves that put you in the middle of campus energy.",
    algorithm: "TAYO boosts outgoing events, larger groups, concerts, sports, and org activities with visible meeting points.",
    next: "Start with Love Box Concert, Cov Courts Basketball, or MeCO Fun Run."
  },
  active: {
    title: "Active Joiner",
    badge: "Movement-first match style",
    summary: "You like events with a shared activity because the activity makes meeting people less awkward.",
    algorithm: "TAYO prioritizes sports, fun runs, movement-based org events, and plans with a clear route or meet-up point.",
    next: "Start with Tennis at Valle Verde, Cov Courts Basketball, or MeCO Fun Run."
  },
  creative: {
    title: "Creative Explorer",
    badge: "Culture-first match style",
    summary: "You are drawn to exhibits, performances, talks, and events where there is something to react to together.",
    algorithm: "TAYO favors arts, culture, music, and talk tags, then checks whether the event energy matches your comfort level.",
    next: "Start with Moonrabbit, Arete Museum Viewing, or Abi Marquez Talk."
  },
  planner: {
    title: "Thoughtful Navigator",
    badge: "Prepared match style",
    summary: "You like knowing the location, deadline, and expectations before committing.",
    algorithm: "TAYO raises events with clear logistics, beginner-friendly notes, and explainable reasons connected to your course and school.",
    next: "Start with Rec Week for Orgs or Abi Marquez Talk."
  }
};

const places = [
  { id: "leong", name: "Leong Hall", category: "landmarks", area: "north", x: 72, y: 20, short: "Common class and office landmark.", why: "Freshies and upperclass students use Leong Hall as an easy meeting point.", directions: ["From the main walk, face the SEC Field side.", "Walk toward the tall white building beside the open lawn.", "Use the front entrance facing the driveway."], nearby: ["Abi Marquez Talk", "SEC Walk", "Gate 3"] },
  { id: "secwalk", name: "SEC Walk", category: "landmarks", area: "north", x: 32, y: 25, short: "Busy walkway and org booth area.", why: "This is where many org announcements, booths, and first-week signups happen.", directions: ["From Leong Hall, walk toward the open field.", "Follow the covered path with student booths.", "Look for the benches and org tables."], nearby: ["Rec Week for Orgs", "Gonzaga Cafeteria", "SEC B Vending"] },
  { id: "gonzaga", name: "Gonzaga Cafeteria", category: "food", area: "central", x: 47, y: 43, short: "Reliable place to eat between classes.", why: "Good first stop when you do not know where to eat yet.", directions: ["From Leong Hall, walk past SEC Walk.", "Continue toward the central food area.", "Enter the cafeteria beside the covered walkway."], nearby: ["JSEC", "SEC Walk", "Matteo Ricci Study Hall"] },
  { id: "jsec", name: "JSEC Food Stalls", category: "food", area: "central", x: 57, y: 50, short: "Student-run food stalls.", why: "Useful for fast meals, student businesses, and casual meetups.", directions: ["From Gonzaga, follow the path toward the student enterprise stalls.", "Look for clustered food booths and outdoor seating.", "Check stall hours before going late."], nearby: ["Gonzaga Cafeteria", "MVP Center", "Matteo Ricci Study Hall"] },
  { id: "rizal", name: "New Rizal Library", category: "study", area: "central", x: 69, y: 63, short: "Main study and research space.", why: "Good for board games, waiting between classes, and quiet study blocks.", directions: ["From MVP, walk toward the large library building.", "Follow signs for the entrance lobby.", "Use your student ID at entry."], nearby: ["Board Games in New Rizal Library", "Arete", "Printing"] },
  { id: "arete", name: "Arete", category: "student-life", area: "north", x: 78, y: 58, short: "Arts, talks, and exhibitions.", why: "Good place for creative events and culture-related activities.", directions: ["From Gate 3, follow the road toward the arts building.", "Look for the open lobby and exhibition area.", "Check event room details before entering."], nearby: ["Arete Museum Viewing", "Leong Hall", "Rizal Library"] },
  { id: "bell", name: "Bellarmine Field", category: "student-life", area: "central", x: 52, y: 76, short: "Open field and large event point.", why: "Often used for concerts, wellness events, and outdoor meetups.", directions: ["From MVP, walk toward the open field area.", "Stay on the paved path until the field opens up.", "Meet near the visible benches."], nearby: ["Love Box Concert", "MVP Center", "Rizal Library"] },
  { id: "gym", name: "Blue Eagle Gym", category: "student-life", area: "south", x: 74, y: 78, short: "Sports and larger student events.", why: "Useful for PE, sports events, and high-energy student gatherings.", directions: ["From Rizal Library, follow the path toward the sports facilities.", "Use the main entrance facing the court side.", "Check whether an event uses a side entrance."], nearby: ["MeCO Fun Run", "Cov Courts Basketball", "Bellarmine Field"] },
  { id: "gate3", name: "Gate 3", category: "transport", area: "north", x: 84, y: 35, short: "Off-campus meeting point.", why: "Used for plans that start outside campus, like tennis at Valle Verde.", directions: ["From Leong Hall, walk toward the driveway.", "Follow the road signs toward Gate 3.", "Wait near the marked loading area."], nearby: ["Tennis at Valle Verde", "Arete", "Leong Hall"] },
  { id: "zen", name: "Zen Garden", category: "student-life", area: "central", x: 42, y: 58, short: "Outdoor pause point for smaller events.", why: "Good for flexible org events that can feel calm or social.", directions: ["From SEC Walk, continue toward the greener central courtyard.", "Look for the quieter garden area.", "Stay near the main path if meeting someone."], nearby: ["Moonrabbit", "MVP Center", "Gonzaga Cafeteria"] },
  { id: "rbr", name: "RBR", category: "student-life", area: "central", x: 35, y: 72, short: "Org and event room area.", why: "Useful for rec week, talks, and student activity programming.", directions: ["From MVP, follow the central path toward the event rooms.", "Look for the RBR signage.", "Check the room number before entering."], nearby: ["Rec Week for Orgs", "MVP Center", "Bellarmine Field"] },
  { id: "cov", name: "Covered Courts", category: "student-life", area: "south", x: 62, y: 83, short: "Basketball and informal sports point.", why: "A clear meet-up place for casual games and active events.", directions: ["From Blue Eagle Gym, walk toward the court side.", "Look for the covered court area.", "Meet near the entrance closest to the path."], nearby: ["Cov Courts Basketball", "Blue Eagle Gym", "Bellarmine Field"] }
];

const placeMapTargets = {
  leong: "Leong Hall, Ateneo de Manila University, Quezon City",
  secwalk: "SEC Walk, Ateneo de Manila University, Quezon City",
  gonzaga: "Gonzaga Hall Cafeteria, Ateneo de Manila University, Quezon City",
  jsec: "JSEC, Ateneo de Manila University, Quezon City",
  rizal: "New Rizal Library, Ateneo de Manila University, Quezon City",
  arete: "Areté Ateneo, Quezon City",
  bell: "Bellarmine Field, Ateneo de Manila University, Quezon City",
  gym: "Blue Eagle Gym, Ateneo de Manila University, Quezon City",
  gate3: "Gate 3, Ateneo de Manila University, Quezon City",
  zen: "Zen Garden, Ateneo de Manila University, Quezon City",
  rbr: "Rizal Mini Theater RBR, Ateneo de Manila University, Quezon City",
  cov: "Covered Courts, Ateneo de Manila University, Quezon City"
};

places.forEach((place) => {
  place.mapQuery = placeMapTargets[place.id] || `${place.name}, Ateneo de Manila University, Quezon City`;
});

const events = [
  { id: "tennis", title: "Tennis at Valle Verde", type: "social", location: "Outside Gate 3 to Valle Verde", area: "outside", day: "Mon", time: "4:30 PM", deadline: "Mon 12:00 PM", interests: ["sports", "friends"], subtags: ["tennis", "beginner games", "arrive together"], energy: "outgoing", commitment: "1.5 hours", beginner: true, alone: false, group: "small", schoolTags: ["SOM", "SOSE", "SOH", "SOSS"], personalityFit: ["active", "outgoing"], expect: "Meet at Gate 3, walk or ride together to Valle Verde, then rotate beginner-friendly games.", goodFor: "Students who want an active plan outside campus but prefer arriving with a group.", bring: "Rubber shoes, water, and racket if you have one.", description: "Outgoing social gathering for students who want a sporty first hangout." },
  { id: "stargazing", title: "Stargazing at Father Masterson", type: "social", location: "Father Masterson Drive", area: "central", day: "Mon", time: "7:00 PM", deadline: "Mon 3:00 PM", interests: ["wellness", "friends", "culture"], subtags: ["quiet night", "low crowd", "small group"], energy: "chill", commitment: "1 hour", beginner: true, alone: true, group: "small", schoolTags: ["SOM", "SOSE", "SOH", "SOSS"], personalityFit: ["chill", "planner"], expect: "Sit in a small group, talk quietly, and use the campus landmark as an easy meet-up point.", goodFor: "Students who want a peaceful night activity without a loud crowd.", bring: "Light jacket or picnic mat.", description: "Chill social gathering for low-pressure conversation and campus familiarization." },
  { id: "boardgames", title: "Board Games in New Rizal Library", type: "social", location: "New Rizal Library", area: "central", day: "Tue", time: "3:30 PM", deadline: "Tue 11:00 AM", interests: ["boardgames", "friends", "study"], subtags: ["library games", "beginner rules", "casual tables"], energy: "chill", commitment: "1 hour", beginner: true, alone: true, group: "small", schoolTags: ["SOM", "SOSE", "SOH", "SOSS"], personalityFit: ["chill", "planner"], expect: "Join a table, learn one short game, and leave whenever your next class starts.", goodFor: "Students who want company without having to make constant small talk.", bring: "Student ID and an easy snack if allowed.", description: "Chill social gathering inside New Rizal Library for easing into campus life." },
  { id: "basketball", title: "Cov Courts Basketball", type: "social", location: "Covered Courts", area: "south", day: "Wed", time: "5:30 PM", deadline: "Wed 1:00 PM", interests: ["sports", "friends"], subtags: ["basketball", "movement", "meet new people"], energy: "outgoing", commitment: "Drop-by", beginner: true, alone: true, group: "medium", schoolTags: ["SOM", "SOSE", "SOH", "SOSS"], personalityFit: ["active", "outgoing"], expect: "Casual shootaround and rotating teams, with no varsity-level commitment expected.", goodFor: "Students who want to move, meet people, and not overthink the first hello.", bring: "Rubber shoes, water, and extra shirt.", description: "Outgoing basketball social at the covered courts." },
  { id: "museum", title: "Arete Museum Viewing", type: "social", location: "Arete", area: "north", day: "Thu", time: "2:00 PM", deadline: "Thu 10:00 AM", interests: ["arts", "culture", "friends"], subtags: ["museum", "exhibits", "low pressure"], energy: "chill", commitment: "1 hour", beginner: true, alone: true, group: "small", schoolTags: ["SOM", "SOH", "SOSS"], personalityFit: ["creative", "chill"], expect: "Walk through the exhibit, compare favorite pieces, then optionally get coffee nearby.", goodFor: "Students who want a quieter cultural event with an easy conversation starter.", bring: "Student ID and phone for photos if allowed.", description: "Chill social gathering for exploring Arete without having to go alone." },
  { id: "recweek", title: "Rec Week for Orgs", type: "org", location: "RBR", area: "central", day: "Tue", time: "10:00 AM", deadline: "Open all day", interests: ["orgs", "friends"], subtags: ["rec week", "business", "advocacy", "culture"], energy: "both", commitment: "Drop-by", beginner: true, alone: true, group: "large", schoolTags: ["SOM", "SOSE", "SOH", "SOSS"], personalityFit: ["planner", "outgoing"], expect: "Browse booths, ask quick questions, and save orgs you want to revisit later.", goodFor: "Students comparing org options without committing yet.", bring: "Phone and student ID.", description: "Org event for discovering student organizations at RBR." },
  { id: "lovebox", title: "Love Box Concert", type: "org", location: "Bellarmine Field", area: "central", day: "Wed", time: "6:30 PM", deadline: "Wed 2:00 PM", interests: ["music", "orgs", "friends"], subtags: ["concert", "open crowd", "field event"], energy: "outgoing", commitment: "2 hours", beginner: true, alone: false, group: "large", schoolTags: ["SOM", "SOSE", "SOH", "SOSS"], personalityFit: ["outgoing", "creative"], expect: "Outdoor concert setup, louder crowd energy, and group meetups before the set starts.", goodFor: "Students who want a memorable first big campus event.", bring: "Water, small bag, and friends or a TAYO buddy request.", description: "Outgoing org event and concert at Bellarmine Field." },
  { id: "moonrabbit", title: "Moonrabbit", type: "org", location: "Zen Garden", area: "central", day: "Thu", time: "5:00 PM", deadline: "Thu 12:00 PM", interests: ["arts", "culture", "orgs"], subtags: ["zen garden", "performances", "culture"], energy: "both", commitment: "Drop-by", beginner: true, alone: true, group: "medium", schoolTags: ["SOM", "SOH", "SOSS"], personalityFit: ["creative", "chill", "outgoing"], expect: "Drop by the Zen Garden, view activities or booths, and stay for as long as the vibe fits.", goodFor: "Students who want a flexible org event that can be calm or social.", bring: "Nothing required.", description: "Flexible org event in Zen Garden that works for both chill and outgoing students." },
  { id: "abi", title: "Abi Marquez Talk", type: "org", location: "Leong Hall", area: "north", day: "Fri", time: "2:30 PM", deadline: "Fri 9:00 AM", interests: ["food", "talks", "orgs"], subtags: ["food talks", "creator talks", "business"], energy: "chill", commitment: "1 hour", beginner: true, alone: true, group: "medium", schoolTags: ["SOM", "SOH", "SOSS"], personalityFit: ["planner", "creative", "chill"], expect: "Listen to the talk, ask questions if comfortable, and use it as an easy first academic-social event.", goodFor: "Students interested in food content, entrepreneurship, media, or creator stories.", bring: "Notes app or notebook.", description: "Chill org talk at Leong Hall featuring Abi Marquez." },
  { id: "meco", title: "MeCO Fun Run", type: "org", location: "Blue Eagle Gym", area: "south", day: "Sat", time: "6:00 AM", deadline: "Fri 5:00 PM", interests: ["sports", "wellness", "orgs"], subtags: ["fun run", "movement", "beginner games"], energy: "outgoing", commitment: "Morning event", beginner: true, alone: false, group: "large", schoolTags: ["SOM", "SOSE", "SOH", "SOSS"], personalityFit: ["active", "outgoing"], expect: "Meet early near Blue Eagle Gym, warm up, run as a group, then cool down after.", goodFor: "Students who want a high-energy org event with a clear shared activity.", bring: "Running shoes, water, towel, and change of shirt.", description: "Outgoing MeCO org event centered on movement and team energy." }
];

const eventMedia = {
  tennis: { venue: "outdoor", access: "open", image: "https://theguidon.com/1112/main/wp-content/uploads/2026/06/UAAP-Season-88-Mens-Football-AdU-vs-Ateneo-John-Molina-800x533.webp", imageCredit: "The GUIDON" },
  stargazing: { venue: "outdoor", access: "open", image: "https://cdn.prod.website-files.com/62fa1472992a3be9d2cfabd4/689378d73440c9b893296bf0_eadd6304d3b8e70665fde4d1fc03bf47_hero-beach-p-800.png", imageCredit: "Ateneo RecWeek" },
  boardgames: { venue: "indoor", access: "open", image: "https://cdn.prod.website-files.com/62fa1472992a3be9d2cfabd4/68909c1fabae2b21df7cfdec_Desktop%20-%202-p-500.png", imageCredit: "Ateneo RecWeek" },
  basketball: { venue: "indoor", access: "open", image: "https://theguidon.com/1112/main/wp-content/uploads/2025/09/091225-Cheer-Rally-2025-Llamas-01.jpg", imageCredit: "The GUIDON" },
  museum: { venue: "indoor", access: "open", image: "https://cdn.prod.website-files.com/62fa1472992a3be9d2cfabd4/68943bc5f9176ad297374e0c_top-p-500.png", imageCredit: "Ateneo RecWeek" },
  recweek: { venue: "outdoor", access: "open", image: "https://cdn.prod.website-files.com/62fa1472992a3be9d2cfabd4/68944c6381ff335b2c93640c_bot-p-500.png", imageCredit: "Ateneo RecWeek" },
  lovebox: { venue: "outdoor", access: "org-exclusive", image: "https://cdn.prod.website-files.com/62fa1472992a3be9d2cfabd4/68943bc5f9176ad297374e0c_top-p-500.png", imageCredit: "Ateneo RecWeek" },
  moonrabbit: { venue: "outdoor", access: "org-exclusive", image: "https://cdn.prod.website-files.com/62fa1472992a3be9d2cfabd4/68944c6381ff335b2c93640c_bot-p-500.png", imageCredit: "Ateneo RecWeek" },
  abi: { venue: "indoor", access: "open", image: "https://cdn.prod.website-files.com/62fa1472992a3be9d2cfabd4/68909c1fabae2b21df7cfdec_Desktop%20-%202-p-500.png", imageCredit: "Ateneo RecWeek" },
  meco: { venue: "outdoor", access: "org-exclusive", image: "https://theguidon.com/1112/main/wp-content/uploads/2025/09/091225-Cheer-Rally-2025-Llamas-01.jpg", imageCredit: "The GUIDON" }
};

events.forEach((event) => Object.assign(event, eventMedia[event.id] || { venue: "indoor", access: "open", image: "", imageCredit: "Mock event image" }));

const state = {
  registeredEmail: "",
  role: "student",
  activePanel: "welcome",
  activeRoute: "home",
  activeMapCategory: "all",
  activeEventQuick: "all",
  selectedInterestForSubtags: "sports",
  quickIndex: 0,
  currentEventId: null,
  profile: {
    name: "Nikki Santos",
    email: "nikki@obf.ateneo.edu",
    yearLevel: "1st year",
    course: "BS Management Information Systems",
    school: "SOM",
    age: "18",
    gender: "Prefer not to say",
    hobbies: "coffee, basketball, exhibits, casual talks",
    interests: ["sports", "arts", "orgs", "friends"],
    subtags: ["basketball", "museum", "rec week", "small group"],
    personality: "chill"
  },
  personalityAnswers: {},
  interestedEventIds: new Set(),
  passedEventIds: new Set(),
  signedEventIds: new Set(),
  tourIndex: 0,
  theme: localStorage.getItem("tayoTheme") || "light"
};

const flowOrder = ["signup", "role", "profileSetup", "interests", "personality", "result", "tutorial", "firstEvent"];
const routeTitles = {
  home: "Home",
  map: "Map",
  quickmatch: "Quick Match",
  profile: "Profile"
};

const routeSubtitles = {
  home: "Recommended events based on your profile and social style.",
  map: "Event places, campus landmarks, and simple directions.",
  quickmatch: "Review the event queue and decide what to save or join.",
  profile: "Student details used by the matching logic."
};

const tourSteps = [
  {
    route: "home",
    title: "Home shows your best next moves",
    body: "This is the student's overview: top recommendation, signup count, profile summary, and the next action."
  },
  {
    route: "map",
    title: "Map explains where events happen",
    body: "Students can filter campus places, tap pins, and get landmark-based directions before committing."
  },
  {
    route: "quickmatch",
    title: "Quick Match is the main discovery flow",
    body: "Users review each event, open details, pass, mark interested, or sign up."
  },
  {
    route: "profile",
    title: "Profile controls recommendations",
    body: "Year level, course, school, interests, subtags, and personality style all feed the matching logic."
  }
];

const mapCategories = [
  ["all", "All"],
  ["food", "Food"],
  ["transport", "Transport"],
  ["study", "Study"],
  ["student-life", "Student life"],
  ["landmarks", "Landmarks"]
];

const personalityQuestions = [
  {
    id: "arrival",
    text: "When entering an event, what would help most?",
    options: [
      { label: "A small table or buddy to approach first", type: "chill" },
      { label: "A lively crowd where I can jump in", type: "outgoing" }
    ]
  },
  {
    id: "activity",
    text: "Which event setup feels easiest?",
    options: [
      { label: "A shared activity like a game or run", type: "active" },
      { label: "A talk, exhibit, or performance to react to", type: "creative" }
    ]
  },
  {
    id: "decision",
    text: "Before signing up, what do you check first?",
    options: [
      { label: "Location, deadline, what to bring", type: "planner" },
      { label: "Whether the energy feels fun", type: "outgoing" }
    ]
  },
  {
    id: "social",
    text: "What kind of group sounds best this week?",
    options: [
      { label: "A small group where names are easy to remember", type: "chill" },
      { label: "A bigger event with more possible people to meet", type: "outgoing" }
    ]
  },
  {
    id: "topic",
    text: "Which would you rather follow?",
    options: [
      { label: "Sports, wellness, or movement-based plans", type: "active" },
      { label: "Culture, arts, music, or creator talks", type: "creative" }
    ]
  }
];

function qs(selector) {
  return document.querySelector(selector);
}

function qsa(selector) {
  return [...document.querySelectorAll(selector)];
}

function cap(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function labelCategory(value) {
  return value.split("-").map(cap).join(" ");
}

function areaLabel(value) {
  const labels = { central: "Central campus", north: "North campus", south: "South campus", outside: "Outside campus" };
  return labels[value] || `${cap(value)} campus`;
}

function energyLabel(value) {
  const labels = { chill: "Chill", outgoing: "Outgoing", both: "Chill or outgoing" };
  return labels[value] || cap(value);
}

function venueLabel(value) {
  return value === "outdoor" ? "Outdoor" : "Indoor";
}

function accessLabel(value) {
  return value === "org-exclusive" ? "Org-exclusive" : "Open to all";
}

function applyTheme() {
  document.body.dataset.theme = state.theme;
  const toggle = qs("#themeToggle");
  if (!toggle) return;
  const dark = state.theme === "dark";
  toggle.textContent = dark ? "Light mode" : "Dark mode";
  toggle.setAttribute("aria-pressed", String(dark));
}

function toggleTheme() {
  state.theme = state.theme === "dark" ? "light" : "dark";
  localStorage.setItem("tayoTheme", state.theme);
  applyTheme();
}

function googleMapsDirectionsUrl(destination, origin) {
  const params = new URLSearchParams({
    api: "1",
    destination,
    travelmode: "walking"
  });
  if (origin) params.set("origin", origin);
  return `https://www.google.com/maps/dir/?${params.toString()}`;
}

function openMapsUrl(url) {
  const opened = window.open(url, "_blank", "noopener,noreferrer");
  if (!opened) window.location.href = url;
}

function openGoogleDirections(place) {
  const destination = place.mapQuery || `${place.name}, Ateneo de Manila University`;
  qs("#routeCard").innerHTML = `
    <h3>Opening Google Maps</h3>
    <p class="mini">Allow location access to use your current location as the starting point.</p>
  `;
  if (!navigator.geolocation) {
    openMapsUrl(googleMapsDirectionsUrl(destination));
    return;
  }
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const origin = `${position.coords.latitude},${position.coords.longitude}`;
      openMapsUrl(googleMapsDirectionsUrl(destination, origin));
    },
    () => {
      qs("#routeCard").innerHTML = `
        <h3>Location unavailable</h3>
        <p class="mini">Google Maps opened with the destination. Choose your starting point there.</p>
      `;
      openMapsUrl(googleMapsDirectionsUrl(destination));
    },
    { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 }
  );
}

function isAteneoEmail(email) {
  return email.trim().toLowerCase().includes("ateneo.edu");
}

function setMessage(id, text, type) {
  const message = qs(id);
  if (!message) return;
  message.textContent = text;
  message.className = `form-message ${type || ""}`;
}

function showPanel(panel) {
  state.activePanel = panel;
  qs("#authFlow").classList.toggle("entry-mode", panel === "welcome");
  qsa(".flow-panel").forEach((item) => item.classList.toggle("active", item.dataset.panel === panel));
  const panelLabel = {
    welcome: "Welcome",
    signup: "Signup",
    login: "Login",
    role: "Role selection",
    organizer: "Organizer preview",
    profileSetup: "Student profile",
    interests: "Interest tags",
    personality: "Personality test",
    result: "Matching result",
    tutorial: "Brief onboarding",
    firstEvent: "First event"
  }[panel] || "Flow";
  const index = Math.max(0, flowOrder.indexOf(panel));
  qs("#flowStepText").textContent = panelLabel;
  qs("#flowProgressText").textContent = `Step ${Math.min(index + 1, 8)} of 8`;
  qsa("#flowRailList li").forEach((item, itemIndex) => {
    item.classList.toggle("active", itemIndex === Math.min(index, 7));
    item.classList.toggle("done", itemIndex < Math.min(index, 7));
  });
  window.scrollTo(0, 0);
}

function showApp(route = "home") {
  qs("#authFlow").classList.add("hidden");
  qs("#appShell").classList.remove("hidden");
  renderApp();
  routeTo(route);
}

function restartFlow() {
  qs("#appShell").classList.add("hidden");
  qs("#authFlow").classList.remove("hidden");
  showPanel("welcome");
}

function populateCourseList() {
  qs("#courseList").innerHTML = courses.map((course) => `<option value="${course}"></option>`).join("");
  qs("#profileYear").innerHTML = yearLevels.map((year) => `<option>${year}</option>`).join("");
  qs("#courseInput").innerHTML = `<option value="">Select course</option>${courses.map((course) => `<option>${course}</option>`).join("")}`;
  qs("#profileCourse").innerHTML = courses.map((course) => `<option>${course}</option>`).join("");
  qs("#courseInput").value = state.profile.course;
  qs("#profileCourse").value = state.profile.course;
}

function renderInterestTags() {
  qs("#interestTags").innerHTML = interestGroups.map((group) => `
    <button class="tag-button ${state.profile.interests.includes(group.id) ? "selected" : ""}" type="button" data-interest="${group.id}">
      ${group.label}
    </button>
  `).join("");
  renderSubtags(state.selectedInterestForSubtags);
}

function renderSubtags(groupId) {
  const group = interestGroups.find((item) => item.id === groupId) || interestGroups[0];
  state.selectedInterestForSubtags = group.id;
  qs("#subtagTitle").textContent = `${group.label} subtags`;
  qs("#subtagGrid").innerHTML = group.subtags.map((tag) => `
    <button class="tag-button ${state.profile.subtags.includes(tag) ? "selected" : ""}" type="button" data-subtag="${tag}">
      ${tag}
    </button>
  `).join("");
}

function syncProfileFromSetup() {
  state.profile.yearLevel = qs("#yearLevel").value;
  state.profile.course = qs("#courseInput").value.trim();
  state.profile.school = qs("#schoolInput").value;
  state.profile.age = qs("#ageInput").value;
  state.profile.gender = qs("#genderInput").value;
  state.profile.hobbies = qs("#hobbiesInput").value.trim();
}

function renderPersonalityForm() {
  qs("#personalityForm").innerHTML = `
    ${personalityQuestions.map((question, index) => `
      <section class="question-block">
        <strong>${index + 1}. ${question.text}</strong>
        <div class="question-options">
          ${question.options.map((option) => `
            <button class="question-option ${state.personalityAnswers[question.id] === option.type ? "selected" : ""}" type="button" data-question="${question.id}" data-answer="${option.type}">
              ${option.label}
            </button>
          `).join("")}
        </div>
      </section>
    `).join("")}
    <div class="form-actions">
      <button class="ghost" type="button" data-auth-screen="interests">Back</button>
      <button class="primary" type="submit">Show my TAYO type</button>
    </div>
  `;
}

function calculatePersonality() {
  const counts = { chill: 0, outgoing: 0, active: 0, creative: 0, planner: 0 };
  Object.values(state.personalityAnswers).forEach((type) => {
    counts[type] += 1;
  });
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
}

function renderPersonalityResult() {
  state.profile.personality = calculatePersonality();
  const type = personalityTypes[state.profile.personality];
  qs("#personalityTitle").textContent = `Your TAYO type: ${type.title}`;
  qs("#personalityDescription").textContent = type.summary;
  qs("#algorithmSummary").textContent = type.algorithm;
  qs("#suggestedMoveTitle").textContent = type.badge;
  qs("#suggestedMoveBody").textContent = type.next;
  renderFirstEventGrid();
}

function scoreEvent(event) {
  let score = 44;
  const reasons = [];
  if (state.profile.yearLevel === "1st year" && event.beginner) {
    score += 10;
    reasons.push("Beginner-friendly for first-year students");
  } else if (event.beginner) {
    score += 5;
    reasons.push("Still approachable even beyond first year");
  }
  const interestHits = event.interests.filter((tag) => state.profile.interests.includes(tag));
  if (interestHits.length) {
    score += interestHits.length * 8;
    reasons.push(`Matches interests: ${interestHits.join(", ")}`);
  }
  const subtagHits = event.subtags.filter((tag) => state.profile.subtags.includes(tag));
  if (subtagHits.length) {
    score += subtagHits.length * 6;
    reasons.push(`Matches subtags: ${subtagHits.join(", ")}`);
  }
  if (event.personalityFit.includes(state.profile.personality)) {
    score += 12;
    reasons.push(`Fits ${personalityTypes[state.profile.personality].title}`);
  }
  if (event.schoolTags.includes(state.profile.school)) {
    score += 5;
    reasons.push(`Relevant for ${state.profile.school} students`);
  }
  if (event.alone) {
    score += 4;
    reasons.push("Okay to attend even if you arrive alone");
  }
  return { score: Math.min(98, score), reasons };
}

function scoredEvents() {
  return events.map((event) => ({ ...event, match: scoreEvent(event) })).sort((a, b) => b.match.score - a.match.score);
}

function filteredEvents() {
  const type = qs("#eventType")?.value || "all";
  const energy = qs("#eventEnergy")?.value || "all";
  const venue = qs("#eventVenue")?.value || "all";
  const access = qs("#eventAccess")?.value || "all";
  return scoredEvents().filter((event) => {
    const typeOk = type === "all" || event.type === type;
    const energyOk = energy === "all" || event.energy === energy || (event.energy === "both" && (energy === "chill" || energy === "outgoing"));
    const venueOk = venue === "all" || event.venue === venue;
    const accessOk = access === "all" || event.access === access;
    const quickOk =
      state.activeEventQuick === "all" ||
      (state.activeEventQuick === "top" && event.match.score >= 80) ||
      (state.activeEventQuick === "chill" && (event.energy === "chill" || event.energy === "both")) ||
      (state.activeEventQuick === "outgoing" && (event.energy === "outgoing" || event.energy === "both"));
    return typeOk && energyOk && venueOk && accessOk && quickOk;
  });
}

function renderFirstEventGrid() {
  const topEvents = scoredEvents().slice(0, 3);
  qs("#firstEventGrid").innerHTML = topEvents.map((event, index) => `
    <button class="first-event-card ${index === 0 ? "selected" : ""}" type="button" data-first-event="${event.id}">
      <span class="badge match">${event.match.score}% match</span>
      <h3>${event.title}</h3>
      <p>${event.description}</p>
      <div class="meta">
        <span>${event.location}</span>
        <span>${energyLabel(event.energy)}</span>
      </div>
    </button>
  `).join("");
}

function routeTo(route) {
  const safe = routeTitles[route] ? route : "home";
  state.activeRoute = safe;
  qsa(".view").forEach((view) => view.classList.toggle("active", view.id === safe));
  qsa(".nav a").forEach((link) => link.classList.toggle("active", link.dataset.route === safe));
  qs("#pageTitle").textContent = routeTitles[safe];
  qs("#pageSubtitle").textContent = routeSubtitles[safe];
  if (location.hash !== `#${safe}`) history.replaceState(null, "", `#${safe}`);
  window.scrollTo(0, 0);
}

function renderApp() {
  renderTopProfile();
  renderHome();
  renderMap();
  renderQuickMatch();
  renderProfile();
}

function renderTopProfile() {
  qs("#profileMiniLabel").textContent = `${personalityTypes[state.profile.personality].title}`;
  qs("#profileMiniName").textContent = state.profile.name;
  qs("#profileMiniMeta").textContent = `${state.profile.yearLevel}, ${state.profile.school}`;
  qs("#avatarInitials").textContent = state.profile.name.split(" ").map((part) => part[0]).join("").slice(0, 2).toUpperCase();
}

function renderHome() {
  const type = personalityTypes[state.profile.personality];
  const topEvent = scoredEvents()[0];
  qs("#homeTypeLabel").textContent = type.badge;
  qs("#homeHeadline").textContent = `Hi ${state.profile.name.split(" ")[0]}, your matches are ready.`;
  qs("#homeSummary").textContent = `${state.profile.yearLevel} in ${state.profile.course}. Recommendations prioritize ${type.title.toLowerCase()} events and the tags you selected during onboarding.`;
  qs("#matchCountStat").textContent = events.length;
  qs("#interestCountStat").textContent = state.profile.interests.length;
  qs("#signedCountStat").textContent = state.signedEventIds.size;
  qs("#homeTopEventTitle").textContent = topEvent.title;
  qs("#homeTopEventBody").textContent = `${topEvent.match.score}% match. ${topEvent.description}`;
  qs("#homeCards").innerHTML = [
    ["Best fit", `${topEvent.title} is currently the strongest recommendation.`],
    ["Saved profile", `${state.profile.yearLevel} · ${state.profile.school} · ${state.profile.course}`],
    ["Interest mix", state.profile.interests.map(labelCategory).join(", ")],
    ["Next action", "Open Quick Match to review the queue."]
  ].map(([title, body]) => `
    <article class="card">
      <h3>${title}</h3>
      <p>${body}</p>
    </article>
  `).join("");
}

function renderMapFilters() {
  qs("#mapFilters").innerHTML = mapCategories.map(([value, label]) => `
    <button class="chip ${value === state.activeMapCategory ? "active" : ""}" type="button" data-map-filter="${value}">${label}</button>
  `).join("");
}

function renderMap() {
  renderMapFilters();
  const board = qs("#mapBoard");
  if (!board) return;
  board.querySelectorAll(".place-pin").forEach((pin) => pin.remove());
  const filtered = places.filter((place) => state.activeMapCategory === "all" || place.category === state.activeMapCategory);
  filtered.forEach((place) => {
    const pin = document.createElement("button");
    pin.className = `place-pin ${place.category}`;
    pin.type = "button";
    pin.style.left = `${place.x}%`;
    pin.style.top = `${place.y}%`;
    pin.textContent = place.category === "food" ? "F" : place.category === "transport" ? "T" : place.category === "study" ? "S" : place.category === "student-life" ? "L" : "M";
    pin.setAttribute("aria-label", place.name);
    pin.addEventListener("click", () => selectPlace(place.id));
    board.appendChild(pin);
  });
  selectPlace((filtered[0] || places[0]).id, false);
}

function selectPlace(placeId) {
  const place = places.find((item) => item.id === placeId) || places[0];
  qsa(".place-pin").forEach((pin) => pin.classList.toggle("active", pin.getAttribute("aria-label") === place.name));
  qs("#placePanel").innerHTML = `
    <div class="photo-block">${place.name}</div>
    <div class="badge-row">
      <span class="badge safe">${labelCategory(place.category)}</span>
      <span class="badge">${areaLabel(place.area)}</span>
    </div>
    <h3>${place.name}</h3>
    <p>${place.short}</p>
    <p><strong>Why students go:</strong> ${place.why}</p>
    <p><strong>Nearby:</strong> ${place.nearby.join(", ")}</p>
    <button class="primary" type="button" id="directionsButton">Open in Google Maps</button>
  `;
  qs("#routeCard").innerHTML = `<h3>Directions</h3><p>Open Google Maps for a live route from your current location.</p>`;
  qs("#directionsButton").addEventListener("click", () => openGoogleDirections(place));
}

function renderRoute(place) {
  qs("#routeCard").innerHTML = `
    <h3>How to get to ${place.name}</h3>
    <p class="mini">Simple route from Leong Hall using visible landmarks.</p>
    <div class="route-list">
      ${place.directions.map((step, index) => `
        <div class="route-step"><span class="step-num">${index + 1}</span><span>${step}</span></div>
      `).join("")}
    </div>
  `;
}

function renderQuickMatch() {
  const list = filteredEvents();
  qs("#eventCount").textContent = `Showing ${list.length} of ${events.length} events`;
  if (state.quickIndex >= list.length) state.quickIndex = 0;
  renderSwipeCard(list[state.quickIndex] || scoredEvents()[0]);
  renderEventList(list);
}

function renderSwipeCard(event) {
  if (!event) return;
  qs("#swipeCard").innerHTML = `
    <figure class="event-photo large">
      <img src="${event.image}" alt="${event.title}" loading="lazy">
      <figcaption>${event.imageCredit}</figcaption>
    </figure>
    <div class="badge-row">
      <span class="badge match">${event.match.score}% match</span>
      <span class="badge ${event.type}">${event.type === "org" ? "Org event" : "Social gathering"}</span>
      <span class="badge energy-${event.energy}">${energyLabel(event.energy)}</span>
      <span class="badge venue-${event.venue}">${venueLabel(event.venue)}</span>
      <span class="badge access-${event.access}">${accessLabel(event.access)}</span>
    </div>
    <h3>${event.title}</h3>
    <p>${event.description}</p>
    <div class="meta">
      <span>${event.day}, ${event.time}</span>
      <span>${event.location}</span>
      <span>${event.commitment}</span>
      <span>${event.alone ? "Okay alone" : "Better with buddy"}</span>
    </div>
    <div class="progress" aria-label="Match score"><span style="width:${event.match.score}%"></span></div>
    <p><strong>Why it matches:</strong> ${event.match.reasons.slice(0, 2).join(". ")}.</p>
    <div class="swipe-actions">
      <button class="ghost" type="button" data-pass-event="${event.id}">Pass</button>
      <button class="primary" type="button" data-interested-event="${event.id}">Interested</button>
    </div>
    <div class="event-actions">
      <button class="secondary" type="button" data-details="${event.id}">Details</button>
      <button class="ghost" type="button" data-signup-event="${event.id}">${state.signedEventIds.has(event.id) ? "Signed up" : "Sign up"}</button>
    </div>
  `;
}

function renderEventList(list) {
  qs("#eventList").innerHTML = list.map((event) => `
    <article class="event-row">
      <img class="event-thumb" src="${event.image}" alt="${event.title}" loading="lazy">
      <div class="event-row-body">
        <div class="badge-row">
          <span class="badge match">${event.match.score}% match</span>
          <span class="badge ${event.type}">${event.type === "org" ? "Org" : "Social"}</span>
          <span class="badge venue-${event.venue}">${venueLabel(event.venue)}</span>
          <span class="badge access-${event.access}">${accessLabel(event.access)}</span>
        </div>
        <h3>${event.title}</h3>
        <p>${event.description}</p>
        <div class="meta">
          <span>${event.location}</span>
          <span>${event.day}, ${event.time}</span>
          <span>${event.deadline}</span>
        </div>
        <div class="event-actions">
          <button class="ghost" type="button" data-pass-event="${event.id}">Pass</button>
          <button class="secondary" type="button" data-details="${event.id}">Details</button>
          <button class="primary" type="button" data-signup-event="${event.id}">${state.signedEventIds.has(event.id) ? "Signed up" : "Sign up"}</button>
        </div>
      </div>
    </article>
  `).join("");
}

function renderProfile() {
  qs("#profileYear").value = state.profile.yearLevel;
  qs("#profileCourse").value = state.profile.course;
  qs("#profileSchool").value = state.profile.school;
  qs("#profileAge").value = state.profile.age;
  const type = personalityTypes[state.profile.personality];
  qs("#profileOutput").innerHTML = `
    <div class="profile-result-head">
      <span class="badge match">${type.title}</span>
      <h3>${type.badge}</h3>
      <p>${type.summary}</p>
    </div>
    <div class="profile-summary-grid">
      <div class="summary-item"><strong>Year level</strong><span>${state.profile.yearLevel}</span></div>
      <div class="summary-item"><strong>Course</strong><span>${state.profile.course}</span></div>
      <div class="summary-item"><strong>School</strong><span>${state.profile.school}</span></div>
      <div class="summary-item"><strong>Age</strong><span>${state.profile.age}</span></div>
    </div>
    <div class="profile-token-section">
      <h3>Interests</h3>
      <div class="token-list">${state.profile.interests.map((item) => `<span>${labelCategory(item)}</span>`).join("")}</div>
    </div>
    <div class="profile-token-section">
      <h3>Subtags</h3>
      <div class="token-list">${state.profile.subtags.map((item) => `<span>${item}</span>`).join("")}</div>
    </div>
    <div class="algorithm-note">
      <h3>Matching logic</h3>
      <p>${type.algorithm}</p>
    </div>
  `;
}

function openEventDetail(eventId) {
  const event = scoredEvents().find((item) => item.id === eventId);
  if (!event) return;
  state.currentEventId = eventId;
  qs("#detailBadges").innerHTML = `
    <span class="badge match">${event.match.score}% match</span>
    <span class="badge ${event.type}">${event.type === "org" ? "Org event" : "Social gathering"}</span>
    <span class="badge energy-${event.energy}">${energyLabel(event.energy)}</span>
    <span class="badge venue-${event.venue}">${venueLabel(event.venue)}</span>
    <span class="badge access-${event.access}">${accessLabel(event.access)}</span>
  `;
  qs("#detailTitle").textContent = event.title;
  qs("#detailSubtitle").textContent = `${event.day}, ${event.time} - ${event.location} - Deadline: ${event.deadline}`;
  qs("#detailWhy").textContent = `TAYO matched this against ${state.profile.yearLevel}, ${state.profile.course}, selected interests, subtags, and ${personalityTypes[state.profile.personality].title}.`;
  qs("#detailReasons").innerHTML = event.match.reasons.map((reason) => `<li><strong>Match reason:</strong> ${reason}</li>`).join("");
  qs("#detailExpect").textContent = event.expect;
  qs("#detailFacts").innerHTML = `
    <li><strong>Type:</strong> ${event.type === "org" ? "Org event" : "Social gathering"}</li>
    <li><strong>Location:</strong> ${event.location}</li>
    <li><strong>Area:</strong> ${areaLabel(event.area)}</li>
    <li><strong>Venue:</strong> ${venueLabel(event.venue)}</li>
    <li><strong>Access:</strong> ${accessLabel(event.access)}</li>
    <li><strong>Social energy:</strong> ${energyLabel(event.energy)}</li>
    <li><strong>Bring / wear:</strong> ${event.bring}</li>
    <li><strong>Image:</strong> ${event.imageCredit}</li>
    <li><strong>Going alone:</strong> ${event.alone ? "Okay to attend alone." : "TAYO recommends going with someone."}</li>
  `;
  qs("#detailStatus").textContent = "";
  qs("#eventDetail").classList.add("open");
}

function closeEventDetail() {
  qs("#eventDetail").classList.remove("open");
}

function markInterested(eventId) {
  state.interestedEventIds.add(eventId);
  state.quickIndex += 1;
  renderApp();
  routeTo("quickmatch");
}

function passEvent(eventId) {
  state.passedEventIds.add(eventId);
  state.quickIndex += 1;
  renderApp();
  routeTo("quickmatch");
}

function signupEvent(eventId) {
  state.signedEventIds.add(eventId);
  state.interestedEventIds.add(eventId);
  renderApp();
  if (state.activeRoute) routeTo(state.activeRoute);
}

function openTutorial() {
  qs("#authFlow").classList.add("hidden");
  qs("#appShell").classList.remove("hidden");
  state.tourIndex = 0;
  renderApp();
  renderTourStep();
  qs("#tourOverlay").classList.add("open");
}

function closeTutorial(nextPanel = "firstEvent") {
  qs("#tourOverlay").classList.remove("open");
  if (!nextPanel) return;
  qs("#appShell").classList.add("hidden");
  qs("#authFlow").classList.remove("hidden");
  renderFirstEventGrid();
  showPanel(nextPanel);
}

function renderTourStep() {
  const step = tourSteps[state.tourIndex] || tourSteps[0];
  routeTo(step.route);
  qs("#tourStepLabel").textContent = `Demo ${state.tourIndex + 1} of ${tourSteps.length}`;
  qs("#tourTitle").textContent = step.title;
  qs("#tourBody").textContent = step.body;
  qs("#tourNext").textContent = state.tourIndex === tourSteps.length - 1 ? "Finish tour" : "Next";
}

function bindListeners() {
  qs("#panelistShortcut").addEventListener("click", () => {
    state.registeredEmail = state.profile.email;
    renderPersonalityResult();
    showApp("home");
  });

  qs("#signupForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const email = qs("#signupEmail").value;
    if (!isAteneoEmail(email)) {
      setMessage("#signupMessage", 'Sorry, app only available for Atenean members. Please use an Ateneo email.', "error");
      return;
    }
    state.registeredEmail = email;
    state.profile.email = email;
    setMessage("#signupMessage", "Ateneo email verified. Continue to user selection.", "success");
    showPanel("role");
  });

  qs("#loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const email = qs("#loginEmail").value;
    if (!isAteneoEmail(email)) {
      setMessage("#loginMessage", "Invalid login. Try again with an Ateneo email.", "error");
      return;
    }
    state.registeredEmail = email;
    state.profile.email = email;
    setMessage("#loginMessage", "Successful login.", "success");
    showApp("home");
  });

  qsa("[data-role]").forEach((button) => {
    button.addEventListener("click", () => {
      state.role = button.dataset.role;
      showPanel(state.role === "student" ? "profileSetup" : "organizer");
    });
  });

  qs("#organizerToApp").addEventListener("click", () => showApp("home"));

  qs("#studentProfileForm").addEventListener("submit", (event) => {
    event.preventDefault();
    syncProfileFromSetup();
    if (!state.profile.yearLevel || !state.profile.course || !state.profile.school) return;
    renderInterestTags();
    showPanel("interests");
  });

  qs("#interestTags").addEventListener("click", (event) => {
    const button = event.target.closest("[data-interest]");
    if (!button) return;
    const interest = button.dataset.interest;
    if (state.profile.interests.includes(interest)) {
      state.profile.interests = state.profile.interests.filter((item) => item !== interest);
    } else {
      state.profile.interests.push(interest);
    }
    renderInterestTags();
    renderSubtags(interest);
  });

  qs("#subtagGrid").addEventListener("click", (event) => {
    const button = event.target.closest("[data-subtag]");
    if (!button) return;
    const subtag = button.dataset.subtag;
    if (state.profile.subtags.includes(subtag)) {
      state.profile.subtags = state.profile.subtags.filter((item) => item !== subtag);
    } else {
      state.profile.subtags.push(subtag);
    }
    renderSubtags(state.selectedInterestForSubtags);
  });

  qs("#continueToPersonality").addEventListener("click", () => {
    if (!state.profile.interests.length) {
      setMessage("#interestMessage", "Select at least one interest tag before continuing.", "error");
      return;
    }
    setMessage("#interestMessage", "", "");
    renderPersonalityForm();
    showPanel("personality");
  });

  qs("#personalityForm").addEventListener("click", (event) => {
    const option = event.target.closest("[data-question]");
    if (!option) return;
    state.personalityAnswers[option.dataset.question] = option.dataset.answer;
    renderPersonalityForm();
  });

  qs("#personalityForm").addEventListener("submit", (event) => {
    event.preventDefault();
    if (Object.keys(state.personalityAnswers).length < personalityQuestions.length) return;
    renderPersonalityResult();
    showPanel("result");
  });

  qs("#skipTutorial").addEventListener("click", () => {
    renderFirstEventGrid();
    showPanel("firstEvent");
  });

  qs("#tourSkip").addEventListener("click", () => closeTutorial("firstEvent"));
  qs("#tourNext").addEventListener("click", () => {
    if (state.tourIndex >= tourSteps.length - 1) {
      closeTutorial("firstEvent");
      return;
    }
    state.tourIndex += 1;
    renderTourStep();
  });

  qs("#firstEventGrid").addEventListener("click", (event) => {
    const card = event.target.closest("[data-first-event]");
    if (!card) return;
    qsa("[data-first-event]").forEach((item) => item.classList.remove("selected"));
    card.classList.add("selected");
    state.currentEventId = card.dataset.firstEvent;
  });

  qs("#goHomeFromFlow").addEventListener("click", () => showApp("home"));
  qs("#goQuickMatchFromFlow").addEventListener("click", () => {
    const selected = qs("[data-first-event].selected");
    if (selected) signupEvent(selected.dataset.firstEvent);
    showApp("quickmatch");
  });

  window.addEventListener("hashchange", () => {
    if (!qs("#appShell").classList.contains("hidden")) routeTo(location.hash.slice(1));
  });

  qsa("[data-route]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      routeTo(link.dataset.route);
    });
  });

  qsa("[data-route-button]").forEach((button) => {
    button.addEventListener("click", () => routeTo(button.dataset.routeButton));
  });

  qs("#restartFlow").addEventListener("click", restartFlow);
  qs("#themeToggle").addEventListener("click", toggleTheme);

  qs("#mapFilters").addEventListener("click", (event) => {
    const button = event.target.closest("[data-map-filter]");
    if (!button) return;
    state.activeMapCategory = button.dataset.mapFilter;
    renderMap();
  });

  qs("#eventType").addEventListener("input", renderQuickMatch);
  qs("#eventEnergy").addEventListener("input", renderQuickMatch);
  qs("#eventVenue").addEventListener("input", renderQuickMatch);
  qs("#eventAccess").addEventListener("input", renderQuickMatch);

  qsa("[data-event-quick]").forEach((button) => {
    button.addEventListener("click", () => {
      qsa("[data-event-quick]").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      state.activeEventQuick = button.dataset.eventQuick;
      state.quickIndex = 0;
      renderQuickMatch();
    });
  });

  document.addEventListener("click", (event) => {
    const authScreen = event.target.closest("[data-auth-screen]");
    const details = event.target.closest("[data-details]");
    const interested = event.target.closest("[data-interested-event]");
    const pass = event.target.closest("[data-pass-event]");
    const signup = event.target.closest("[data-signup-event]");
    if (authScreen) {
      event.preventDefault();
      if (authScreen.dataset.authScreen === "tutorial") {
        openTutorial();
      } else {
        showPanel(authScreen.dataset.authScreen);
      }
    }
    if (details) openEventDetail(details.dataset.details);
    if (interested) markInterested(interested.dataset.interestedEvent);
    if (pass) passEvent(pass.dataset.passEvent);
    if (signup) signupEvent(signup.dataset.signupEvent);
  });

  qs("#closeDetail").addEventListener("click", closeEventDetail);
  qs("#eventDetail").addEventListener("click", (event) => {
    if (event.target.id === "eventDetail") closeEventDetail();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeEventDetail();
  });
  qs("#modalPass").addEventListener("click", () => {
    if (!state.currentEventId) return;
    passEvent(state.currentEventId);
    closeEventDetail();
  });
  qs("#modalInterested").addEventListener("click", () => {
    if (!state.currentEventId) return;
    markInterested(state.currentEventId);
    qs("#detailStatus").textContent = "Marked interested.";
  });
  qs("#modalSignup").addEventListener("click", () => {
    if (!state.currentEventId) return;
    signupEvent(state.currentEventId);
    qs("#detailStatus").textContent = "Signed up for prototype testing.";
  });

  qs("#profileEditForm").addEventListener("submit", (event) => {
    event.preventDefault();
    state.profile.yearLevel = qs("#profileYear").value;
    state.profile.course = qs("#profileCourse").value.trim();
    state.profile.school = qs("#profileSchool").value;
    state.profile.age = qs("#profileAge").value;
    renderApp();
    routeTo("profile");
  });
}

function init() {
  applyTheme();
  populateCourseList();
  renderInterestTags();
  renderPersonalityForm();
  renderFirstEventGrid();
  bindListeners();
  showPanel("welcome");
}

init();
