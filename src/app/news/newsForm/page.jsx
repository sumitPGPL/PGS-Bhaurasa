// 'use client'
// import React, { useState, useEffect } from 'react';
// import EventForm from '@/components/EventForm/EventForm';
// import { addNews } from '@/lib/services/news/index';
// import Loader from '@/components/Loader/Loader';
// import { validator } from '@/lib/helpers/validator'
// import Notification from '@/components/Toast/Notification';
// import { NEWSINITAIL } from '@/lib/constants/index';
// import { ADD_NEWS } from '@/lib/constants/index';

// export default function YourComponent() {

//   const [isLoading, setIsLoading] = useState(false)
//   const [hasError, setError] = useState({ msg: '', type: '' })
//   const [newsData, setNewsData] = useState(NEWSINITAIL);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handleChange = ({ target }) => {
//     const { name, value } = target
//     setError({ msg: '', type: '' })
//     setNewsData((prev) => ({ ...prev, [name]: value }))

// };
// const handleForceUpdate = () => setError({ msg: '', type: '' });
// const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError({ msg: '', type: '' })
//     let isValid = validator(newsData, ERR_MSG, ['otherQuery'])
//     if (isValid === true) {
//         try {
//             setIsLoading(true)
//             let res = await addNews(newsData)
//             if (res) {
//                 setNewsData(NEWSINITAIL)
//                 setIsLoading(false)
//                 setError({ msg: ADD_NEWS, type: 'success' })
//             }
//         } catch (error) {
//             setIsLoading(false)
//         }
//     }
//     else {
//         setError({ msg: isValid, type: 'error' })
//     }

// };
//   return (
//     <>
//        <div className='flex flex-col w-full justify-center items-center bg-[url("/MessageSvg.svg")]'>
//         <h1 className='text-center mx-auto w-full my-3 text-4xl font-bold text-tblue '>News Details Form</h1>
//         <div className='w-11/12 rounded-lg flex flex-col justify-center items-center bg-bblue opacity-75 p-5' onSubmit={handleSubmit}>
//           <div className='w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 '>
       
//               <div  className='w-full flex justify-center py-2 px-4'>
//                 <label className={`w-32 md:w-40 lg:w-40 p-2 text-xl font-bold`}>Title</label>
//                 <input
//                                 type="text"
//                                 name="applicantName"
//                                 placeholder="Parent Name*"
//                                 value={newsData.title}
//                                 onChange={handleChange}
//                                 required
//                                 className="border border-gray-300 rounded-md px-4 py-2"
//                             />
//                             <label className={`w-32 md:w-40 lg:w-40 p-2 text-xl font-bold`}>Content</label>
//                 <input
//                                 type="text"
//                                 name="applicantName"
//                                 placeholder="Parent Name*"
//                                 value={newsData.content}
//                                 onChange={handleChange}
//                                 required
//                                 className="border border-gray-300 rounded-md px-4 py-2"
//                             />
//                             <label className={`w-32 md:w-40 lg:w-40 p-2 text-xl font-bold`}>Thumbnail</label>
//                 <input
//                                 type="file"
//                                 name="applicantName"
//                                 placeholder="Parent Name*"
//                                 value={newsData.thumbNail}
//                                 onChange={handleChange}
//                                 required
//                                 className="border border-gray-300 rounded-md px-4 py-2"
//                             />
//                             <label className={`w-32 md:w-40 lg:w-40 p-2 text-xl font-bold`}>publishedDate</label>
//                 <input
//                                 type="date"
//                                 name="applicantName"
//                                 placeholder="Parent Name*"
//                                 value={newsData.publishedDate}
//                                 onChange={handleChange}
//                                 required
//                                 className="border border-gray-300 rounded-md px-4 py-2"
//                             />

// <label className={`w-32 md:w-40 lg:w-40 p-2 text-xl font-bold`}>reDirectedLink</label>
//                 <input
//                                 type="text"
//                                 name="applicantName"
//                                 placeholder="Parent Name*"
//                                 value={newsData.reDirectedLink}
//                                 onChange={handleChange}
//                                 required
//                                 className="border border-gray-300 rounded-md px-4 py-2"
//                             />
//               </div>
//           </div>
//           <button
//              onClick={handleSubmit}
//             className="w-40 my-5 mx-auto p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-white hover:bg-tblue">Submit
//           </button>
//         </div>
//       </div>



//    <div className='flex flex-col w-full justify-center items-center bg-[url("/MessageSvg.svg")]'>
//         <h1 className='text-center mx-auto w-full my-3 text-4xl font-bold text-tblue '>Event Details Form</h1>
//         <div className='w-11/12 rounded-lg flex flex-col justify-center items-center bg-bblue opacity-75 p-5'>
//           <div className='w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 '>
//             {fields.map((field) => (
//               <div key={field.name} className='w-full flex justify-center py-2 px-4'>
//                 <label htmlFor={field.name} className={`w-32 md:w-40 lg:w-40 p-2 text-xl font-bold`}>{field.label}</label>
//                 <input
//                   name={field.name}
//                   className="w-1/2 p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
//                   id={field.name}
//                   type={field.type}
//                   value={formData[field.name]}
//                   onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
//                   placeholder={field.placeholder}
//                 />
//               </div>
//             ))}
//           </div>
//           <button
//             onClick={onSubmit}
//             className="w-40 my-5 mx-auto p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-white hover:bg-tblue">Submit
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }
// NewsPage.jsx
'use client'
import React, { useState, useEffect } from 'react';
import NewsForm from '@/components/NewsForm/newsForm';
import NewsTable from '@/components/NewsTable/newsTable';
import { getAllNews, deleteNews } from '@/lib/services/news/index';

const NewsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [newsList, setNewsList] = useState([]);
  const [selectedNewsId, setSelectedNewsId] = useState(null);

  const fetchNews = async () => {
    try {
      setIsLoading(true);
      const newsData = await getAllNews();
      setNewsList(newsData);
    } catch (error) {
      console.error('Error fetching news:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setIsLoading(true);
      await deleteNews(id);
      fetchNews();
    } catch (error) {
      console.error('Error deleting news:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (id) => {
    // Set the selectedNewsId to trigger the NewsForm to edit mode
    setSelectedNewsId(id);
  };

  useEffect(() => {
    fetchNews();
  }, []); // Run the effect only once on component mount

  return (
    <div className="news-page">
      <NewsForm selectedNewsId={selectedNewsId} onFormSubmit={() => { setSelectedNewsId(null); fetchNews(); }} newsList={newsList} />
      <NewsTable newsList={newsList} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default NewsPage;

