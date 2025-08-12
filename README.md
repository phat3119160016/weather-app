# 🌤️ Weather Forecast App

A modern, responsive weather forecast application built with vanilla HTML, CSS, and JavaScript. This elegant weather app provides real-time weather information and 5-day forecasts with a beautiful glassmorphism design.

![Weather App Screenshot](https://github.com/user-attachments/assets/b731b90d-3db2-49a1-9d72-33d23793fe83)

## ✨ Features

### 🌡️ Current Weather Information
- Real-time temperature display with Celsius
- Feels-like temperature
- Weather description with emoji icons
- Current date and city name
- Humidity percentage
- Wind speed in km/h
- Atmospheric pressure in hPa

### 📊 5-Day Weather Forecast
- Extended forecast with daily weather predictions
- Weather icons representing different conditions
- Temperature highs for each day
- Brief weather descriptions

### 🎨 User Experience
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Glassmorphism UI**: Modern frosted glass effect with backdrop blur
- **Interactive Elements**: Hover effects and smooth animations
- **Auto-location**: Automatically detects user's location (with fallback)
- **Search Functionality**: Search weather by city name
- **Auto-refresh**: Updates weather data every 10 minutes
- **Loading States**: Visual feedback during data fetching

### 📱 Mobile-First Design
- Optimized layouts for different screen sizes
- Touch-friendly interface elements
- Responsive grid system for forecast cards

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and accessibility features
- **CSS3**: Modern styling with:
  - CSS Grid and Flexbox layouts
  - CSS backdrop-filter for glassmorphism effects
  - CSS animations and transitions
  - Media queries for responsive design
- **JavaScript ES6+**: Modern JavaScript features including:
  - Async/await for API calls
  - DOM manipulation
  - Geolocation API
  - Local storage (future enhancement)
- **OpenWeatherMap API**: Weather data source (API key required)

## 🚀 Getting Started

### Prerequisites
- Web browser with JavaScript enabled
- OpenWeatherMap API key (for live weather data)
- Local server for development (optional but recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/phat3119160016/weather-app.git
   cd weather-app
   ```

2. **Get your API key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate your API key

3. **Configure API key**
   - Open `script.js`
   - Replace `"YOUR_API_KEY_HERE"` with your actual API key:
   ```javascript
   const API_KEY = "your_actual_api_key_here";
   ```

4. **Run the application**
   
   **Option 1: Simple file opening**
   ```bash
   # Simply open index.html in your browser
   open index.html  # macOS
   # or double-click index.html
   ```

   **Option 2: Local server (recommended)**
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```

   Then open `http://localhost:8000` in your browser.

## 📖 Usage

### 🔍 Searching for Weather
1. Enter a city name in the search box
2. Click the "Search" button or press Enter
3. Weather information will update automatically

### 🌍 Location Detection
- The app automatically detects your location on first load
- Grant location permission for accurate local weather
- Falls back to New York if location access is denied

### 📱 Mobile Usage
- All features work seamlessly on mobile devices
- Touch-optimized interface elements
- Responsive layout adapts to screen size

## 📁 Project Structure

```
weather-app/
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── script.js           # JavaScript functionality
└── README.md          # Project documentation
```

### File Descriptions

- **`index.html`**: Contains the semantic HTML structure with accessibility features
- **`style.css`**: Modern CSS with glassmorphism effects, responsive design, and animations
- **`script.js`**: Handles API calls, DOM manipulation, geolocation, and user interactions

## 🎯 Key Features Explained

### Glassmorphism Design
- Translucent backgrounds with backdrop blur effects
- Subtle borders and shadows for depth
- Modern gradient backgrounds
- Smooth hover animations

### Weather Icon System
- Emoji-based weather icons for universal recognition
- Comprehensive icon mapping for different weather conditions
- Animated icon interactions

### Responsive Layout System
- **Desktop**: Multi-column grid layout with detailed information
- **Tablet**: Adapted grid with optimized spacing
- **Mobile**: Single-column layout with touch-friendly elements

### API Integration
- RESTful API integration with error handling
- Fallback to mock data for demonstration
- Proper loading states and error messages

## 🔧 Development Mode

The app currently includes mock data functionality for demonstration purposes when no API key is provided. To switch to live data:

1. Obtain your OpenWeatherMap API key
2. Replace the API key in `script.js`
3. Uncomment the live API code sections
4. Comment out or remove the mock data functions

## 🌟 Future Enhancements

- [ ] **Weather Maps Integration**: Interactive weather maps
- [ ] **Historical Data**: Weather history and trends
- [ ] **Multiple Locations**: Save and compare multiple cities
- [ ] **Weather Alerts**: Severe weather notifications
- [ ] **Theme Customization**: Light/dark mode toggle
- [ ] **Offline Support**: Service worker for offline functionality
- [ ] **PWA Features**: Install as mobile app
- [ ] **Weather Charts**: Visual temperature and precipitation graphs
- [ ] **Location Favorites**: Save frequently checked locations
- [ ] **Imperial/Metric Toggle**: Temperature unit conversion

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines
1. Follow existing code style and structure
2. Test on multiple devices and browsers
3. Ensure responsive design principles
4. Add comments for complex functionality
5. Update README for significant changes

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Weather data provided by [OpenWeatherMap API](https://openweathermap.org/)
- Design inspiration from modern weather applications
- Icons and emojis for weather representation

---

**Note**: This is a educational project demonstrating modern web development techniques with vanilla JavaScript, responsive design, and API integration.
