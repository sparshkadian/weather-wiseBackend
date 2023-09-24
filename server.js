const dotenv = require('dotenv').config({ path: './config.env' });
const app = require('./app');

process.on('uncaughtException', (err) => {
  console.log(console.log('UNCAUGHT EXCEPTION! 💥 Shutting down..'));
  console.log(err.name, err.message);
  process.exit(1);
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
