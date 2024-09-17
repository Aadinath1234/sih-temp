// // models/Place.js
// import mongoose from 'mongoose';

// const placeSchema = new mongoose.Schema({
//    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
//    title: String,
//    address: String,
//    description: String,
//    extraInfo: String,
//    checkIn: Number,
//    checkOut: Number,
//    maxGuests: Number,
//    price: Number,
// });

// const PlaceModel = mongoose.model('Place', placeSchema);
// export default PlaceModel;






// models/criminalModel.js
import mongoose from 'mongoose';

const criminalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phoneNo: { type: String, required: true },
  email: { type: String, required: true },
  fatherName: { type: String, required: true },
  aadharCard: { type: String, required: true },
  panCard: { type: String, required: true },
  dob: { type: Date, required: true },
  crimePlace: { type: String, required: true },
  dateOfCrime: { type: Date, required: true },
  criminalHistory: { type: String, enum: ['Yes', 'No'], default: 'No' },
  timePeriod: { type: String },
  firNo: { type: String, required: true },
  bailApplied: { type: String, enum: ['Yes', 'No'], default: 'No' },
});

const Criminal = mongoose.model('Criminal', criminalSchema);
export default Criminal;
