import { ALERT_TIMEOUT } from '@/lib/constants';
import React, { useState, useEffect } from 'react';

const types = {
  error: 'bg-red-500',
  success: 'bg-teal-500',
  warning: 'bg-yellow-500'
};

const Notification = ({ msg, type = 'error', onClick }) => {
  return (
    <>
      {msg&& (
        <div className={`relative top-10  text-center text-sm text-white rounded-xl shadow-lg ${types[type]}`} role="alert">
          <div className="flex p-4">
            {msg}
            <div className="ms-auto">
              <button type="button" onClick={onClick} className="inline-flex flex-shrink-0 justify-center items-center h-5 w-5 rounded-lg text-white hover:text-white opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100">
                <span className="sr-only">Close</span>
                <svg onClick={onClick} className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Notification;
