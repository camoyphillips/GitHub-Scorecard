# GitHub Scorecard Terminal

A fun and educational project that combines GitHub API integration, a terminal-style command interface, and multiple interactive screens. Designed as both a prank and a visual learning tool for understanding API data, UI transitions, and JavaScript logic.

## Features

- **Screen 1** – Welcome screen with GitHub username input and Start button
- **Screen 2** – Real-time GitHub user profile summary (using GitHub REST API)
- **Screen 3** – Terminal Prank interface with fake commands and real GitHub fetch
- **Screen 4** – Thank you screen with closing message

## Technologies Used

- **HTML** for structure
- **CSS** for screen-specific themes
- **JavaScript** for screen logic, GitHub API fetching, and command parsing
- **GitHub REST API** to retrieve public user data

## How to Run

1. Clone the repository or download the source files.
2. Open `index.html` in any modern web browser.
3. Interact with each screen:
   - Start → Enter GitHub username
   - View Profile Results
   - Use terminal-style prank interface
   - View thank-you message

## Screens Overview

### Screen 1 – GitHub Scorecard Start
- Text input to enter a GitHub username
- Start button styled in gray

### Screen 2 – Profile Summary
- Displays name, repos, followers, profile URL, and avatar using the GitHub API

### Screen 3 – Terminal Interface
- Accepts fake terminal commands:
  - `help`, `ls`, `npm install Firebase`
  - `Camoy send me your location`
  - `github scorecard <username>`
- Styled in classic green-on-black terminal look

### Screen 4 – Thank You
- Simple closing screen with gratitude message

## Notable Commands in Terminal (Screen 3)

| Command | Description |
|---------|-------------|
| `help` | List all fake commands |
| `ls` | Hidden Easter egg message |
| `github scorecard <username>` | Fetch GitHub profile again |
| `exit` | Display exit message |
| `clear` | Clears the terminal output |

## Contributors

- **Camoy Phillips** – Developer
- **Adam** – Instructor 

## Known Limitations

- GitHub API is unauthenticated and subject to public rate limits
- Terminal command parsing is basic
- No persistent data or server-side storage


