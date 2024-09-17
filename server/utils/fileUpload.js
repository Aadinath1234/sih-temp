import multer from 'multer';

// Configure multer for file uploads
const storage = multer.memoryStorage(); // Files will be stored in memory as buffers

const upload = multer({ storage });

export default upload;
