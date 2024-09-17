
import React from 'react';

const FAQPage = () => {
  return (
    <div className='bg-gray-100 min-h-screen py-8'>
      <div className='container max-w-4xl'>
        <h1 className='text-4xl font-bold text-center mb-8 mt-8'>Frequently Asked Questions</h1>
        
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <div className='space-y-6'>
            <div className='faq-item'>
              <h2 className='text-2xl font-semibold'>What is the purpose of this platform?</h2>
              <p className='text-gray-700'>This platform aims to provide comprehensive support and resources for managing and preventing abuse and crime against foreigners.</p>
            </div>
            <div className='faq-item'>
              <h2 className='text-2xl font-semibold'>How can I report an incident?</h2>
              <p className='text-gray-700'>You can report incidents through our Contact Page or directly by reaching out to us via email or phone.</p>
            </div>
            <div className='faq-item'>
              <h2 className='text-2xl font-semibold'>How do I reset my password?</h2>
              <p className='text-gray-700'>To reset your password, go to the Login Page and click on the "Forgot Password" link to receive instructions via email.</p>
            </div>
            <div className='faq-item'>
              <h2 className='text-2xl font-semibold'>Who can I contact for additional support?</h2>
              <p className='text-gray-700'>If you need further assistance, please use the contact form on our Contact Page or email us directly at <a href="mailto:contact@yourdomain.com" className='text-blue-500 hover:underline'>contact@yourdomain.com</a>.</p>
            </div>
          </div>
        </div>

        <div className='mt-8 text-center'>
          <label className='text-lg font-semibold mb-2 block'>Search FAQs:</label>
          <input type='text' placeholder='Search...' className='border border-gray-300 rounded-md p-2 w-full max-w-md mx-auto' />
        </div>
      </div>
    </div>
  );
}

export default FAQPage;
