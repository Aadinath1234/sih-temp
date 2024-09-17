import mongoose from 'mongoose';

const pdfSchema = new mongoose.Schema({
  originalName: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,  // The extracted text from the PDF
  },
}, { timestamps: true });

const PdfModel = mongoose.model('Pdf', pdfSchema);

export default PdfModel;
