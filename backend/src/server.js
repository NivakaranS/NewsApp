
const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;

const MONGO_URL = 'mongodb+srv://nivakaran:0O4j53hw1IN6Wiw7@cluster0.z64tk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const server = http.createServer(app);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB..');
})

mongoose.connection.on('error', (error) => {
    console.error('Error connecting to MongoDB: ', error);
})

async function startServer() {
    await mongoose.connect(MONGO_URL)

    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}..`);
    });
}

startServer();