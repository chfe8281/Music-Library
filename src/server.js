require('dotenv').config();

// Import the Express app
const app = require('./app');

// Set the port (fallback to 3000 if not defined)
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});