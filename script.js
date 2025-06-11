// Screen references for GitHub Scorecard.
const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');
const screen3 = document.getElementById('screen3');
const screen4 = document.getElementById('screen4');

// Buttons and inputs for the four screens.
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const finalBtn = document.getElementById('finalBtn');
const usernameInput = document.getElementById('usernameInput');
const resultsPanel = document.getElementById('resultsPanel');

// Screen 1 -> Screen 2 Entering your GitHub Username.
startBtn.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  if (!username) return alert('Please enter a GitHub username.');

  screen1.classList.add('hidden');
  screen2.classList.remove('hidden');
  resultsPanel.innerHTML = 'Fetching user data...';

  fetch(`https://api.github.com/users/${username}`)
    .then(res => {
      if (!res.ok) throw new Error("User not found");
      return res.json();
    })
    .then(user => {
      resultsPanel.innerHTML = `
        <p><strong>Name:</strong> ${user.name || user.login}</p>
        <p><strong>Public Repos:</strong> ${user.public_repos}</p>
        <p><strong>Followers:</strong> ${user.followers}</p>
        <p><strong>Following:</strong> ${user.following}</p>
        <p><a href="${user.html_url}" target="_blank">View Profile</a></p>
        <img src="${user.avatar_url}" alt="Avatar" />
      `;
    })
    .catch(err => {
      resultsPanel.innerHTML = `<p>Error: ${err.message}</p>`;
    });
});

// Screen 2 -> Screen 3 
nextBtn.addEventListener('click', () => {
  screen2.classList.add('hidden');
  screen3.classList.remove('hidden');
});

// Screen 3 -> Screen 4
finalBtn.addEventListener('click', () => {
  screen3.classList.add('hidden');
  screen4.classList.remove('hidden');
});

// Terminal prank logic for GitHub Score card 
const terminal = document.getElementById('terminal');
const input = document.getElementById('command-input');

const responses = {
  help: [
    "Available commands:",
    "- git clone Docker",
    "- ls",
    "- npm install Firebase",
    "- clear",
    "- Camoy send me your location",
    "- github scorecard <username>",
    "- exit"
  ],
  "git clone Docker": [
    "Cloning into 'Docker'...",
    "Warning: Repository contains password.",
    "Success: You are wasting your bandwidth!"
  ],
  ls: ["Adam is my Instructor"],
  "npm install Firebase": [
    "Installing Firebase...",
    "What is Firebase",
    "Success: Firebase module added to package.json"
  ],
  clear: [],
  "Camoy send me your location": ["Humber. Here is my location. You're welcome."],
  exit: [
    "Exiting your scorecard session!!!",
    "Safety first",
    "See you next time"
  ]
};

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    const cmd = input.value.trim();
    appendToTerminal(`> ${cmd}`);

    if (cmd.startsWith('github scorecard ')) {
      const username = cmd.split(' ')[2];
      if (username) {
        appendToTerminal(`Fetching data for "${username}"...`);
        fetch(`https://api.github.com/users/${username}`)
          .then(res => {
            if (!res.ok) throw new Error("User not found");
            return res.json();
          })
          .then(user => {
            appendToTerminal(`Name: ${user.name || user.login}`);
            appendToTerminal(`Public Repos: ${user.public_repos}`);
            appendToTerminal(`Followers: ${user.followers}`);
            appendToTerminal(`Following: ${user.following}`);
            appendToTerminal(`Profile: ${user.html_url}`);
            const img = document.createElement('img');
            img.src = user.avatar_url;
            img.alt = "Avatar";
            img.width = 100;
            terminal.appendChild(img);
          })
          .catch(err => {
            appendToTerminal(`Error: ${err.message}`);
          });
      } else {
        appendToTerminal("Usage: github scorecard <username>");
      }
    } else if (responses[cmd]) {
      if (cmd === 'clear') {
        terminal.innerHTML = '';
      } else {
        responses[cmd].forEach(line => appendToTerminal(line));
      }
    } else if (cmd) {
      appendToTerminal(`Command not found for your scorecard: ${cmd}`);
    }

    input.value = '';
    window.scrollTo(0, document.body.scrollHeight);
  }
});

function appendToTerminal(text) {
  const line = document.createElement('div');
  line.textContent = text;
  terminal.appendChild(line);
}
