import express from 'express';
import { uploadPdf } from '../controller/pdfController.js';
import upload from '../utils/fileUpload.js';

const router = express.Router();

// Route for uploading PDF
router.post('/upload-pdf', upload.single('pdfFile'), uploadPdf);

export default router;
