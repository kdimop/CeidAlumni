const mongoose = require('mongoose');

const participantSchema = new mongoose.Schema({
  uuid: String,
  ageGroup: Number,
  genderIdentity:String,
  educationLevel: String,
  socialMediaAccounts: {
    facebook: Boolean,
    tiktok: Boolean,
    instagram: Boolean,
    linkedin: Boolean,
    youtube:Boolean,
  },
  marketingPreference: String,
  seenAlumniSite: String,
  knowsPatrasAlumni: String,
  visitedPatrasAlumni: String,
  seekNextStepStories: String,
  alumniStoriesImpact: String,
  firstPage: { representation: String, alumni: String },
  secondPage: { representation: String, alumni: String },
  thirdPage: { representation: String, alumni: String },
  fourthPage: { representation: String, alumni: String },
  evaluationResponses: {
    question1: String,
    question2: String,
    question3: String,
    scaleQuestions: {
      question4: String,
      question5: String,
      question6: String,
      question7: String,
      question8: String,
      question9: String,
      question10: String,
      question11: String,
      question12: String,
      question13: String
    }
  }
});

const Participant = mongoose.model('Participant', participantSchema);

module.exports = Participant;