// // routes/place.routes.js
// import express from 'express';
// import { createPlace } from '../controller/placeController.js';

// const router = express.Router();

// // POST route for creating a new place
// router.post('/places', createPlace);

// export default router;






// routes/criminalRoutes.js
import express from 'express';
import { saveCriminal, getCriminalById, deleteCriminal } from '../controller/crimeController.js';

const router = express.Router();

// Create or Update Criminal
router.post('/criminals', saveCriminal);

// Get Criminal by ID
router.get('/criminals/:id', getCriminalById);

// Delete Criminal
router.delete('/criminals/:id', deleteCriminal);

export default router;
