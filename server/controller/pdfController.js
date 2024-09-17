import pdfParse from 'pdf-parse';
import PdfModel from '../models/pdfModel.js';

export const uploadPdf = async (req, res) => {
  try {
    // Validate the file
    if (!req.file || req.file.mimetype !== 'application/pdf') {
      return res.status(400).json({ message: 'Please upload a valid PDF file.' });
    }

    // Extract text from PDF
    const fileBuffer = req.file.buffer;
    let pdfText;
    try {
      pdfText = await pdfParse(fileBuffer);
    } catch (err) {
      return res.status(500).json({ message: 'Error parsing PDF', error: err });
    }

    // Create and save new PDF document
    const newPdf = new PdfModel({
      originalName: req.file.originalname,
      content: pdfText.text,
    });
    await newPdf.save();

    // Respond with success message
    res.status(200).json({
      message: 'PDF uploaded and text extracted successfully!',
      pdfText: pdfText.text,
    });
  } catch (err) {
    // Handle unexpected errors
    res.status(500).json({ message: 'Error uploading PDF', error: err });
  }
};



