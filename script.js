// Page navigation
function showPage(pageId){
 document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
 document.getElementById(pageId).classList.add('active');
}










// Mini Calendar
const hiveEvents = [
 // ABERDEEN
 { date: "2026-02-09", title: "Founders' Week Discovery Day", uni: "Aberdeen" },
 { date: "2026-02-21", title: "Charity Fashion Show: Ashes & Echoes", uni: "Aberdeen" },
 { date: "2026-05-18", title: "May Festival of Arts", uni: "Aberdeen" },
 { date: "2026-11-24", title: "St Andrew's Day Ceilidh", uni: "Aberdeen" },
 { date: "2026-12-05", title: "Christmas Carol Service", uni: "Aberdeen" },


 // BATH
 { date: "2026-02-01", title: "ReBalance Wellbeing Festival", uni: "Bath" },
 { date: "2026-03-20", title: "60th Anniversary Jazz Night", uni: "Bath" },
 { date: "2026-05-15", title: "Bath Festival: Party in the Park", uni: "Bath" },
 { date: "2026-06-26", title: "Armed Forces Day Celebration", uni: "Bath" },
 { date: "2026-11-26", title: "Bath Christmas Market Launch", uni: "Bath" },


 // BIRMINGHAM
 { date: "2026-02-11", title: "Barber Institute Baby Picnic", uni: "Birmingham" },
 { date: "2026-03-05", title: "Crufts Dog Show NEC", uni: "Birmingham" },
 { date: "2026-03-18", title: "Women's History Month Documentary", uni: "Birmingham" },
 { date: "2026-05-07", title: "Dinosaur Detectives Live", uni: "Birmingham" },
 { date: "2026-07-10", title: "Birmingham Jazz & Blues Festival", uni: "Birmingham" },


 // BRISTOL
 { date: "2026-01-20", title: "Bristol Old Vic Theatre Partnership", uni: "Bristol" },
 { date: "2026-03-12", title: "Global Lounge Culture Cafe", uni: "Bristol" },
 { date: "2026-07-04", title: "St Pauls Carnival", uni: "Bristol" },
 { date: "2026-08-06", title: "Bristol International Balloon Fiesta", uni: "Bristol" },
 { date: "2026-11-12", title: "Bristol Film Festival Screenings", uni: "Bristol" },


 // CAMBRIDGE
 { date: "2026-03-16", title: "Cambridge Festival Launch", uni: "Cambridge" },
 { date: "2026-06-12", title: "The May Balls Week", uni: "Cambridge" },
 { date: "2026-07-27", title: "Cambridge Folk Festival", uni: "Cambridge" },
 { date: "2026-10-22", title: "Festival of Ideas", uni: "Cambridge" },
 { date: "2026-11-15", title: "Cambridge Jazz Festival", uni: "Cambridge" },


 // CARDIFF
 { date: "2026-03-01", title: "St David's Day Parade", uni: "Cardiff" },
 { date: "2026-05-22", title: "Cardiff Children’s Literature Festival", uni: "Cardiff" },
 { date: "2026-08-01", title: "National Eisteddfod Outreach", uni: "Cardiff" },
 { date: "2026-10-15", title: "IRIS Prize LGBT+ Film Fest", uni: "Cardiff" },
 { date: "2026-11-20", title: "Cardiff Winter Wonderland", uni: "Cardiff" },


 // DURHAM
 { date: "2026-02-21", title: "Chinese New Year: Year of the Horse", uni: "Durham" },
 { date: "2026-03-14", title: "Headlock Vintage Sale @ Dunelm", uni: "Durham" },
 { date: "2026-07-11", title: "Durham Miners' Gala", uni: "Durham" },
 { date: "2026-07-15", title: "Durham Brass Festival", uni: "Durham" },
 { date: "2026-11-18", title: "Lumiere Durham Light Fest", uni: "Durham" },


 // EDINBURGH
 { date: "2026-02-28", title: "Basque Folk Dance Course", uni: "Edinburgh" },
 { date: "2026-03-10", title: "Edinburgh Film Seminar", uni: "Edinburgh" },
 { date: "2026-08-07", title: "Edinburgh Fringe University Venue", uni: "Edinburgh" },
 { date: "2026-08-15", title: "Edinburgh International Book Fest", uni: "Edinburgh" },
 { date: "2026-10-31", title: "Samhuinn Fire Festival", uni: "Edinburgh" },


 // EXETER
 { date: "2026-03-03", title: "Cultural Festival on Campus", uni: "Exeter" },
 { date: "2026-05-18", title: "Devon County Show", uni: "Exeter" },
 { date: "2026-10-20", title: "Diwali Celebration Night", uni: "Exeter" },
 { date: "2026-11-17", title: "International Students Day", uni: "Exeter" },
 { date: "2026-12-25", title: "Traditional Christmas Day Lunch", uni: "Exeter" },


 // GLASGOW
 { date: "2026-01-25", title: "Burns Night Supper @ Union", uni: "Glasgow" },
 { date: "2026-03-11", title: "Glasgow International Comedy Fest", uni: "Glasgow" },
 { date: "2026-06-07", title: "West End Festival Glasgow", uni: "Glasgow" },
 { date: "2026-07-23", title: "Glasgow Commonwealth Games 2026", uni: "Glasgow" },
 { date: "2026-12-31", title: "Hogmanay Street Party", uni: "Glasgow" },


 // IMPERIAL
 { date: "2026-03-12", title: "Imperial Lates: Sci-Fi Night", uni: "Imperial" },
 { date: "2026-06-15", title: "Great Exhibition Road Festival", uni: "Imperial" },
 { date: "2026-09-10", title: "Imperial Graduation Festival", uni: "Imperial" },
 { date: "2026-10-24", title: "Imperial Science & Arts Mix", uni: "Imperial" },
 { date: "2026-11-05", title: "Bonfire Night South Kensington", uni: "Imperial" },


 // KINGS
 { date: "2026-02-12", title: "King’s Arts & Humanities Festival", uni: "Kings" },
 { date: "2026-04-20", title: "Maughan Library Exhibition", uni: "Kings" },
 { date: "2026-06-10", title: "London Festival of Architecture @ KCL", uni: "Kings" },
 { date: "2026-09-18", title: "London Design Festival @ Somerset House", uni: "Kings" },
 { date: "2026-11-13", title: "EFG London Jazz Festival @ Kings", uni: "Kings" },


 // LEEDS
 { date: "2026-03-25", title: "Leeds International Piano Comp", uni: "Leeds" },
 { date: "2026-06-20", title: "Leeds Pride Parade", uni: "Leeds" },
 { date: "2026-08-28", title: "Leeds Festival @ Bramham Park", uni: "Leeds" },
 { date: "2026-10-10", title: "Light Night Leeds", uni: "Leeds" },
 { date: "2026-11-04", title: "Leeds International Film Festival", uni: "Leeds" },


 // LIVERPOOL
 { date: "2026-03-17", title: "St Patrick's Day @ Liverpool Uni", uni: "Liverpool" },
 { date: "2026-05-20", title: "Liverpool Sound City Festival", uni: "Liverpool" },
 { date: "2026-07-18", title: "Liverpool International Music Fest", uni: "Liverpool" },
 { date: "2026-08-26", title: "International Beatleweek", uni: "Liverpool" },
 { date: "2026-11-01", title: "River of Light Trail", uni: "Liverpool" },


 // LSE
 { date: "2026-02-19", title: "LSE Festival: How to Change the World", uni: "LSE" },
 { date: "2026-04-10", title: "German Symposium LSE", uni: "LSE" },
 { date: "2026-06-05", title: "LSE Public Lecture Series", uni: "LSE" },
 { date: "2026-10-20", title: "Global South Cultural Week", uni: "LSE" },
 { date: "2026-11-20", title: "LSE Social Innovation Awards", uni: "LSE" },


 // MANCHESTER
 { date: "2026-03-12", title: "University Mental Health Day", uni: "Manchester" },
 { date: "2026-03-21", title: "Confucius Institute Spring Day", uni: "Manchester" },
 { date: "2026-08-28", title: "Manchester Pride Weekend", uni: "Manchester" },
 { date: "2026-10-15", title: "Manchester Science Festival", uni: "Manchester" },
 { date: "2026-11-10", title: "Manchester Christmas Markets", uni: "Manchester" },


 // NEWCASTLE
 { date: "2026-02-08", title: "Brundibar Closing Concert", uni: "Newcastle" },
 { date: "2026-03-10", title: "International Women’s Day Lecture", uni: "Newcastle" },
 { date: "2026-05-22", title: "The Late Shows: Newcastle Culture", uni: "Newcastle" },
 { date: "2026-06-20", title: "The Hoppings Festival Outreach", uni: "Newcastle" },
 { date: "2026-09-13", title: "Great North Run @ Newcastle", uni: "Newcastle" },


 // NOTTINGHAM
 { date: "2026-02-14", title: "Frank Morton Sports Day", uni: "Nottingham" },
 { date: "2026-02-23", title: "Language Centre Cultural Events", uni: "Nottingham" },
 { date: "2026-06-01", title: "Nottingham Riverside Festival", uni: "Nottingham" },
 { date: "2026-10-02", title: "Goose Fair Nottingham", uni: "Nottingham" },
 { date: "2026-11-05", title: "Nottingham Robin Hood Pageant", uni: "Nottingham" },


 // OXFORD
 { date: "2026-03-28", title: "Poetry in the Galleries", uni: "Oxford" },
 { date: "2026-05-01", title: "May Morning @ Magdalen Tower", uni: "Oxford" },
 { date: "2026-06-15", title: "Encaenia Garden Party", uni: "Oxford" },
 { date: "2026-09-07", title: "St Giles’ Fair", uni: "Oxford" },
 { date: "2026-11-05", title: "Oxford International Song Festival", uni: "Oxford" },


 // QUEENS
 { date: "2026-03-17", title: "St Patrick’s Day Belfast", uni: "Queens" },
 { date: "2026-05-01", title: "Cathedral Quarter Arts Fest", uni: "Queens" },
 { date: "2026-10-12", title: "Belfast International Arts Fest", uni: "Queens" },
 { date: "2026-10-31", title: "Derry Halloween Experience", uni: "Queens" },
 { date: "2026-12-10", title: "QUB Winter Graduation Gala", uni: "Queens" },


 // SHEFFIELD
 { date: "2026-03-05", title: "Festival of the Mind (Preview)", uni: "Sheffield" },
 { date: "2026-06-10", title: "Sheffield DocFest Outreach", uni: "Sheffield" },
 { date: "2026-07-25", title: "Tramlines Festival", uni: "Sheffield" },
 { date: "2026-09-17", title: "Sheffield Festival of the Mind", uni: "Sheffield" },
 { date: "2026-10-15", title: "Off the Shelf Literature Fest", uni: "Sheffield" },


 // SOUTHAMPTON
 { date: "2026-03-15", title: "Southampton Science & Engineering Day", uni: "Southampton" },
 { date: "2026-05-20", title: "Southampton MELA Festival", uni: "Southampton" },
 { date: "2026-06-12", title: "Seawork International Outreach", uni: "Southampton" },
 { date: "2026-09-11", title: "Southampton International Boat Show", uni: "Southampton" },
 { date: "2026-11-05", title: "Mayflower Theatre Winter Launch", uni: "Southampton" },


 // ST ANDREWS
 { date: "2026-03-05", title: "StAnza: Scotland's Poetry Fest", uni: "St Andrews" },
 { date: "2026-04-18", title: "The Kate Kennedy Procession", uni: "St Andrews" },
 { date: "2026-11-30", title: "St Andrews Day Street Party", uni: "St Andrews" },
 { date: "2026-05-01", title: "The May Dip @ East Sands", uni: "St Andrews" },
 { date: "2026-11-01", title: "Savour St Andrews Food Fest", uni: "St Andrews" },


 // UCL
 { date: "2026-02-23", title: "UCL International Festival", uni: "UCL" },
 { date: "2026-03-12", title: "UCL Illuminated Light Show", uni: "UCL" },
 { date: "2026-06-10", title: "UCL Graduate Degree Show", uni: "UCL" },
 { date: "2026-09-15", title: "Bayeux Tapestry Exhibition Launch", uni: "UCL" },
 { date: "2026-11-20", title: "Global Citizenship Conference", uni: "UCL" },


// WARWICK
 { date: "2026-03-23", title: "Resonate Festival of Ideas", uni: "Warwick" },
 { date: "2026-04-23", title: "Shakespeare’s Birthday Parade", uni: "Warwick" },
 { date: "2026-06-15", title: "Warwick Students’ Union Summer Party", uni: "Warwick" },
 { date: "2026-10-10", title: "Warwick Words History Festival", uni: "Warwick" },
 { date: "2026-11-05", title: "Kenilworth Castle Fireworks", uni: "Warwick" },


 // YORK
 { date: "2026-02-14", title: "Jorvik Viking Festival", uni: "York" },
 { date: "2026-06-05", title: "York Festival of Ideas Launch", uni: "York" },
 { date: "2026-07-10", title: "York Early Music Festival", uni: "York" },
 { date: "2026-09-20", title: "York Food & Drink Festival", uni: "York" },
 { date: "2026-12-01", title: "York Minster Christmas Tree Fest", uni: "York" }
];
// 1. Initialize selectors on page load
function initCalendar() {
 const monthSelect = document.getElementById('month-select');
 const yearSelect = document.getElementById('year-select');
 const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  // Fill months
 monthNames.forEach((name, i) => {
   monthSelect.innerHTML += `<option value="${i}">${name}</option>`;
 });


 // Fill years (from 2024 to 2030)
 for (let i = 2024; i <= 2030; i++) {
   yearSelect.innerHTML += `<option value="${i}">${i}</option>`;
 }


 // Set to current date
 const today = new Date();
 monthSelect.value = today.getMonth();
 yearSelect.value = today.getFullYear();
  generateCalendar(); // Draw the first time
}


// 2. Triggered when dropdowns change
function updateCalendar() {
 generateCalendar();
}


// 3. The Core Calendar Engine
function generateCalendar() {
 const calendarTable = document.getElementById('calendar-table');
 const month = parseInt(document.getElementById('month-select').value);
 const year = parseInt(document.getElementById('year-select').value);
 const selectedUni = document.getElementById('uni-filter').value;
  const firstDay = new Date(year, month, 1).getDay();
 const daysInMonth = new Date(year, month + 1, 0).getDate();
 const today = new Date().toDateString();


 let tableHTML = '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr><tr>';


 for (let i = 0; i < firstDay; i++) tableHTML += '<td></td>';


 for (let day = 1; day <= daysInMonth; day++) {
   const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
   const dailyEvents = hiveEvents.filter(e => e.date === dateKey && (selectedUni === 'all' || e.uni === selectedUni));
  
   const isToday = new Date(year, month, day).toDateString() === today ? 'today' : '';
   const hasEventClass = dailyEvents.length > 0 ? 'has-event' : '';
   const dot = dailyEvents.length > 0 ? '<div class="event-dot"></div>' : '';


   // This line tells the browser: "When clicked, look for the GLOBAL showEvent function"
   tableHTML += `<td class="${isToday} ${hasEventClass}" onclick="showEvent('${dateKey}')">
                   ${day}${dot}
                 </td>`;
  
   if ((day + firstDay) % 7 === 0 && day !== daysInMonth) tableHTML += '</tr><tr>';
 }
 calendarTable.innerHTML = tableHTML;
}


// --- KEEP THESE AT THE BOTTOM OF script.js ---

function showEvent(dateKey) {
    const selectedUni = document.getElementById('uni-filter').value;
    const events = hiveEvents.filter(e => e.date === dateKey && (selectedUni === 'all' || e.uni === selectedUni));
    
    const modal = document.getElementById('event-modal');
    const modalDate = document.getElementById('modal-date');
    const modalContent = document.getElementById('modal-content');

    modalDate.innerText = `Events for ${dateKey}`;
    
    if (events.length > 0) {
        modalContent.innerHTML = events.map(e => `
            <div style="margin-bottom:12px; padding:10px; background:#f9f9f9; border-radius:8px; border-left:4px solid var(--primary-yellow);">
                <strong style="color:var(--primary-blue);">${e.uni}</strong><br>
                <span>${e.title}</span>
            </div>
        `).join('');
    } else {
        modalContent.innerHTML = "<p style='text-align:center; color:#666;'>No events scheduled for this day.</p>";
    }
    
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('event-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}


// Run init on load
initCalendar();








// Mini Game Button
document.getElementById('mini-game-btn').addEventListener('click', () => {
 alert("Mini Game coming soon!");
});







// Profile honeycomb
const hive = document.getElementById('hive');
const slangWords = [
 {word:"Mate",definition:"Friend or buddy."},
 {word:"Knackered",definition:"Very tired."},
 {word:"Bees knees",definition:"Something excellent or great."},
 {word:"Bob's your uncle",definition:"That's it! Done."},
 {word:"Bonkers",definition:"Crazy or mad."},
 {word:"Cheeky Nandos",definition:"A casual meal at Nando's with friends."},
 {word:"Jimmys",definition:"Night club in Durham."},
 {word:"Trevs",definition:"Trevelyan college, Durham."},
 {word:"Jobo",definition:"Josephine Butler College, Durham."},
 {word:"Stevo",definition:"Stephenson College, Durham."},
 {word:"Cardiac Hill",definition:"Steep hill on Durham campus."},
 {word:"Stay hexy",definition:"Joke motto of Trevelyan college."},
];

slangWords.forEach(item => {
  const hex = document.createElement('div');
  hex.className = 'hex';
  // Wrapped word and def in their own divs for better CSS control
  hex.innerHTML = `
    <div class="word">${item.word}</div>
    <div class="def">${item.definition}</div>
  `;
  hex.setAttribute('data-word', item.word);
  
  hex.addEventListener('click', () => {
    // Close any other expanded hexagons
    document.querySelectorAll('.hex.expanded').forEach(h => {
      if (h !== hex) { 
        h.classList.remove('expanded'); 
      }
    });
    
    // Toggle the current one
    hex.classList.toggle('expanded');
  });
  
  hive.appendChild(hex);
});