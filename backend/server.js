const express = require('express');
const User = require('./models/User');
const Participant = require('./models/Participant');
const mongoose = require('mongoose');
const cors = require('cors');

// MongoDB connection
//mongoose.connect('mongodb+srv://user:user@cluster0.tz0z4xz.mongodb.net/?retryWrites=true&w=majority')
    mongoose.connect('mongodb+srv://kdimopoulos:testtestingtest@cluster0.xzx4jl0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

// Routes
const app = express();
app.use(cors());
app.use(express.json());

app.post('/declare-data', async (req, res) => {
    const {
        uuid, ageGroup,genderIdentity, educationLevel, socialMediaAccounts,
        marketingPreference, seenAlumniSite, knowsPatrasAlumni, visitedPatrasAlumni, seekNextStepStories, alumniStoriesImpact
    } = req.body;
    try {
        const newParticipant = new Participant({
            uuid,
            ageGroup,
            genderIdentity,
            educationLevel,
            socialMediaAccounts,
            marketingPreference,
            seenAlumniSite,
            knowsPatrasAlumni,
            visitedPatrasAlumni,
            seekNextStepStories,
            alumniStoriesImpact,
            firstPage: { representation: "", alumni: "" },
            secondPage: { representation: "", alumni: "" },
            thirdPage: { representation: "", alumni: "" },
            fourthPage: { representation: "", alumni: "" },
            evaluationResponses: {
                question1: "",
                question2: "",
                question3: "",
                scaleQuestions: {
                    question4: "",
                    question5: "",
                    question6: "",
                    question7: "",
                    question8: "",
                    question9: "",
                    question10: "",
                    question11: "",
                    question12: "",
                    question13: ""
                }
            }
        });
        await newParticipant.save();
        res.status(201).json({ message: 'Participant data saved successfully.' });
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post('/update-sequence', async (req, res) => {
    const { uuid, page, alumni } = req.body;
    console.log(`Received update-sequence request with UUID: ${uuid}, Page: ${page}, Alumni: ${alumni}`);
    try {
        const participant = await Participant.findOne({ uuid: uuid });
        if (!participant) {
            console.log('Participant not found');
            return res.status(404).send('Participant not found');
        }
        // Update the sequence based on which fields are already filled
        if (!participant.firstPage.representation) {
            participant.firstPage = { representation: page, alumni: alumni };
            console.log('Updated firstPage:', participant.firstPage);
        } else if (!participant.secondPage.representation) {
            participant.secondPage = { representation: page, alumni: alumni };
            console.log('Updated secondPage:', participant.secondPage);
        } else if (!participant.thirdPage.representation) {
            participant.thirdPage = { representation: page, alumni: alumni };
            console.log('Updated thirdPage:', participant.thirdPage);
        } else if (!participant.fourthPage.representation) {
            participant.fourthPage = { representation: page, alumni: alumni };
            console.log('Updated fourthPage:', participant.fourthPage);
        }
        await participant.save();
        console.log('Participant saved:', participant);
        res.status(200).json(participant);
    } catch (error) {
        console.error(`Error updating sequence for UUID ${uuid}: ${error}`);
        res.status(500).send(error.message);
    }
});

app.post('/evaluation', async (req, res) => {
    const { uuid, question1, question2, question3, scaleQuestions } = req.body;

    if (!uuid) {
        return res.status(400).send('UUID is required');
    }

    console.log(`Received UUID: ${uuid}`);
    try {
        const participant = await Participant.findOne({ uuid: uuid });
        if (!participant) {
            return res.status(404).send('Participant not found');
        }
        participant.evaluationResponses.question1 = question1;
        participant.evaluationResponses.question2 = question2;
        participant.evaluationResponses.question3 = question3;
        participant.evaluationResponses.scaleQuestions = scaleQuestions;
        await participant.save();
        res.status(200).json(participant);
    } catch (error) {
        console.error(`Error updating evaluation for UUID ${uuid}: ${error}`);
        res.status(500).send(error.message);
    }
});

app.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));