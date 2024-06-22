const mongoose = require('mongoose');
const fs = require('fs');
const Participant = require('./models/Participant'); // Adjust the path if necessary

// MongoDB connection URI
const uri = 'mongodb+srv://kdimopoulos:testtestingtest@cluster0.xzx4jl0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

async function exportParticipants() {
    // Connect to MongoDB
    await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        // Fetch all documents from the Participant collection
        const participants = await Participant.find({});
        
        // Convert the documents to JSON string
        const jsonData = JSON.stringify(participants, null, 2);

        // Write the JSON data to a file
        fs.writeFileSync('participants.json', jsonData);

        console.log('Participants data exported successfully.');
    } catch (error) {
        console.error('Error exporting participants data:', error);
    } finally {
        // Close the MongoDB connection
        await mongoose.disconnect();
    }
}

// Execute the export function
exportParticipants();
