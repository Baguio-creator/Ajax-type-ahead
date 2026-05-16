AJAX Type Ahead

A live search suggestion app built with JavaScript using the Fetch API.
Search for a city or state and instantly get matching results with highlighted text and formatted population data.

🚀 Features
Real-time search suggestions
Fetches data from an external API
Highlights matching text
Displays formatted population numbers
Fast and responsive filtering

🛠️ Technologies Used
HTML5
CSS3
JavaScript
Fetch API
Regular Expressions (RegEx)


📚 What This Project Does

This project loads a list of U.S. cities and states from an online JSON dataset and filters them as the user types.

The app:

Detects keyboard input
Searches city and state names
Highlights matching letters
Dynamically updates the UI


⚙️ How It Works
1. Fetch Data

The app retrieves city data using the Fetch API.

fetch(data)
  .then(res => res.json())
  .then(city => cities.push(...city));
2. Find Matches

A RegEx search checks whether the typed text matches a city or state name.

function matchingWords(wordsToMatch, cities ) {
  return cities.filter(place => {
    var regEx = new RegExp(wordsToMatch, 'gi');
    return place.city.match(regEx) || place.state.match(regEx);
  });
}
3. Display Results

Matching text gets highlighted dynamically while population values are formatted with commas.


📂 Project Structure
ajax-type-ahead/
│
├── index.html
├── style.css
├── index.js


▶️ How to Run
Clone the repository
git clone YOUR_REPOSITORY_LINK
Open the project folder
Run index.html in your browser
Start typing a city or state name


🧠 Concepts Practiced
Fetch API
JSON data handling
DOM manipulation
Event listeners
Regular expressions
Array methods (filter, map)
Dynamic HTML rendering


🔮 Future Improvements
Add keyboard navigation
Debounce search input
Add loading animation
Improve mobile responsiveness
Support more datasets
Dark mode support


👨‍💻 Author

Made by Rance Andrei Baguio 

GitHub: [GITHUB_LINK](https://github.com/Baguio-creator)

