// import jwt from 'jsonwebtoken';
// import Place from '../models/placeModel.js';
// import { jwtSecret } from '../utils/config.js'; // Assuming jwtSecret is in a config file

// export const createPlace = async (req, res) => {
//   const { token } = req.cookies;
//   console.log("Token received: ", token);

//   const {
//     title, address, description,  extraInfo, checkIn, checkOut, maxGuests, price
//   } = req.body;

//   if (!token) {
//     return res.status(401).json({ message: 'No token provided' });
//   }

//   jwt.verify(token, jwtSecret, {}, async (err, userData) => {
//     if (err) {
//       return res.status(401).json({ message: 'Unauthorized' });
//     }

//     try {
//       const placeDoc = await Place.create({
//         owner: userData.id,
//         title,
//         address,
//           // Include photos (addedPhotos from req.body)
//         description,
//               // Include perks (from req.body)
//         extraInfo,
//         checkIn,
//         checkOut,
//         maxGuests,
//         price
//       });
//       res.json(placeDoc);
//     } catch (err) {
//       res.status(500).json({ message: 'Error creating place', error: err.message });
//     }
//   });
// };




// controllers/criminalController.js
import Criminal from '../models/crimeModel.js';

// Create or Update Criminal
export const saveCriminal = async (req, res) => {
  const { id } = req.body;
  const {
    name, phoneNo, email, fatherName, aadharCard, panCard,
    dob, crimePlace, dateOfCrime, criminalHistory, timePeriod, firNo, bailApplied
  } = req.body;

  try {
    if (id) {
      // Update existing criminal
      const criminal = await Criminal.findByIdAndUpdate(
        id,
        {
          name, phoneNo, email, fatherName, aadharCard, panCard,
          dob, crimePlace, dateOfCrime, criminalHistory, timePeriod, firNo, bailApplied
        },
        { new: true }
      );
      return res.status(200).json(criminal);
    } else {
      // Create new criminal
      const newCriminal = new Criminal({
        name, phoneNo, email, fatherName, aadharCard, panCard,
        dob, crimePlace, dateOfCrime, criminalHistory, timePeriod, firNo, bailApplied
      });
      await newCriminal.save();
      return res.status(201).json(newCriminal);
    }
  } catch (error) {
    return res.status(500).json({ message: 'Error saving criminal', error });
  }
};

// Get Criminal by ID
export const getCriminalById = async (req, res) => {
  const { id } = req.params;
  try {
    const criminal = await Criminal.findById(id);
    if (!criminal) {
      return res.status(404).json({ message: 'Criminal not found' });
    }
    return res.status(200).json(criminal);
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching criminal', error });
  }
};

// Delete Criminal
export const deleteCriminal = async (req, res) => {
  const { id } = req.params;
  try {
    await Criminal.findByIdAndDelete(id);
    return res.status(200).json({ message: 'Criminal deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting criminal', error });
  }
};
