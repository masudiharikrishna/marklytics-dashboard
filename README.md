Welcome to the Weather Dashboard! This project provides a real-time weather forecast based on the location entered by the user. It uses the WeatherAPI to fetch current weather data, which includes temperature, humidity, condition, and more. This README will guide you through the setup, usage, and structure of the project.

Features
Real-time Weather Data: Fetches current weather information for the specified location.
Loading Indicator: Shows a loading spinner while fetching data.
Responsive Design: Adapts to different screen sizes for a seamless experience on both desktop and mobile devices.
Technologies Used
React: A JavaScript library for building user interfaces.
WeatherAPI: A third-party API to fetch weather data.
Bootstrap: For styling the components.
React Loader Spinner: For displaying the loading spinner.
CSS: For custom styling.


Getting Started:

Prerequisites:
Node.js: Make sure you have Node.js installed on your machine.
npm: Node package manager, which comes with Node.js.

Installation
Clone the repository:
git clone `https://github.com/masudiharikrishna/weather-dashboard.git`

Navigate to the project directory:
cd weather-dashboard

Install the dependencies:
npm install


Start the development server:
npm start
The app should now be running on `http://localhost:3000.`

API Key
The project uses WeatherAPI to fetch weather data. You need to obtain an API key from WeatherAPI and replace your_api_key in the fetch URL inside index.js.

javascript
Copy code
const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=your_api_key&q=${this.state.location}`);

Project Structure
index.js: The main component file containing the logic and structure of the Dashboard.
index.css: Contains the styles for the Dashboard.
index.js
This file contains the Dashboard component, which manages the state, fetches data from the WeatherAPI, and renders the UI. The key functions and components include:

State Management: Holds the location, data, msg, and isLoading states.
fetchData: An asynchronous function that fetches weather data based on the location.
render: Renders the UI components, including input fields, buttons, loading spinner, and weather data.
index.css
This file contains the CSS styles for the Dashboard, ensuring a visually appealing and responsive design. It includes styles for:

weather-dashboard: The main container.
main-heading: The heading of the dashboard.
main-paragraph: A descriptive paragraph.
input-container: The container for the input field and search button.
error-message: The error message displayed when an invalid location is entered.
weather-data: The container for the weather information.
list-container: The container for the list of weather details.
Usage
Enter Location: Type the name of the location in the input field.
Search: Click the "Search" button to fetch the weather data.

View Data: If the location is found, the weather data will be displayed. If not, an error message will appear.

Responsive Design
The Dashboard is designed to be responsive, adjusting its layout based on the screen size. This ensures a smooth user experience across various devices.

Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.


Acknowledgements
WeatherAPI: For providing the weather data.
React: For the framework.
Bootstrap: For the styling components.
React Loader Spinner: For the loading spinner component.
Contact
If you have any questions or feedback, feel free to reach out to me at harikrishnamasudi@gmail.com

Thank you for using the Weather Dashboard! Stay ahead of the storm and be prepared!

