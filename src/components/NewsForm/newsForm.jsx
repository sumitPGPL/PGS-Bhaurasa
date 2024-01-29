
'use client'
import React, { useState, useEffect } from 'react';
import EventForm from '@/components/EventForm/EventForm';
import { addNews } from '@/lib/services/news/index';
import Loader from '@/components/Loader/Loader';
import { validator } from '@/lib/helpers/validator'
import Notification from '@/components/Toast/Notification';
import { NEWSINITAIL } from '@/lib/constants/index';
import { ADD_NEWS } from '@/lib/constants/index';
import moment from 'moment';

const fields = [
  { name: 'title', label: 'Title', type: 'text', placeholder: 'Enter Title' },
  { name: 'content', label: 'Content', type: 'text', placeholder: 'Enter Content' },
  { name: 'thumbNail', label: 'Thumbnail', type: 'file', placeholder: 'Upload Thumbnail' },
  { name: 'publishedDate', label: 'Published Date', type: 'date-time', placeholder: 'Select Date' },
  { name: 'reDirectedLink', label: 'Redirected Link', type: 'text', placeholder: 'Enter Redirected Link' },
];

export default function NewsForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setError] = useState({ msg: '', type: '' });
  const [newsData, setNewsData] = useState({
    ...NEWSINITAIL,
    publishedDate: moment().format('YYYY-MM-DDTHH:mm:ss'), // Initialize with current date and time
  })
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setError({ msg: '', type: '' });

    // Handle special case for datetime-local input
    const isDateTimeLocal = target.type === 'datetime-local';
    const rawValue = isDateTimeLocal ? moment(value).toISOString() : value;

    setNewsData((prev) => ({ ...prev, [name]: rawValue }));
  };

  const handleSubmit = async (e) => {
   
    setError({ msg: '', type: '' });

    // Format the publishedDate field
    const formattedDate = moment(newsData.publishedDate).toISOString();

    const isValid = validator({ ...newsData, publishedDate: formattedDate }, ['otherQuery']);

    if (isValid === true) {
      try {
        setIsLoading(true);
        const res = await addNews({ ...newsData, publishedDate: formattedDate });

        if (res) {
          setNewsData({ ...NEWSINITAIL, publishedDate: moment().format('YYYY-MM-DDTHH:mm') });
          setIsLoading(false);
          setError({ msg: ADD_NEWS, type: 'success' });
        }
      } catch (error) {
        setIsLoading(false);
      }
    } else {
      setError({ msg: isValid, type: 'error' });
    }
  };

  return (
    <>
      <div className='flex flex-col w-full justify-center items-center bg-[url("/MessageSvg.svg")]'>
        <h1 className='text-center mx-auto w-full my-3 text-4xl font-bold text-tblue '>News Details Form</h1>
        <div className='w-11/12 rounded-lg flex flex-col justify-center items-center bg-bblue opacity-75 p-5' onSubmit={handleSubmit}>
          <div className='w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 '>
            {fields.map((field) => (
              <div key={field.name} className='w-full flex justify-center py-2 px-4'>
                <label htmlFor={field.name} className={`w-32 md:w-40 lg:w-40 p-2 text-xl font-bold`}>{field.label}</label>
                <input
                  name={field.name}
                  className="w-1/2 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
                  id={field.name}
                  type={field.type}
                  value={newsData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                />
              </div>
            ))}
          </div>
          <button
            onClick={handleSubmit}
            className="w-40 my-5 mx-auto p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-white hover:bg-tblue">Submit
          </button>
        </div>
      </div>
    </>
  );
}