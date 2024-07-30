import express from'express';
const app = express();

// Middleware to log the method and URL of each request
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
