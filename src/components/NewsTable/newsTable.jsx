// // NewsTable.jsx
// import React from 'react';

// const NewsTable = ({ newsList, onDelete, onEdit }) => {
//   return (
//     <>
//     <div className="news-table">
//       <h2>News Table</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Published Date</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {newsList?.map((news) => (
//             <tr key={news.id}>
//               <td>{news.title}</td>
//               <td>{news.publishedDate}</td>
//               <td>
//                 <button onClick={() => onEdit(news.id)}>Edit</button>
//                 <button onClick={() => onDelete(news.id)}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>

    
//     </>
//   );
// };

// export default NewsTable;

// components/NewsTable/NewsTable.jsx

import React from 'react';

const NewsTable = ({ newsList, onDelete ,onEdit}) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              Published Date
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
            <th scope="col" className="px-6 py-3">
              Update
            </th>
          </tr>
        </thead>
        <tbody>
          {newsList.map((news, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0
                  ? 'even:bg-gray-50 even:dark:bg-gray-800'
                  : 'odd:bg-white odd:dark:bg-gray-900'
              } border-b dark:border-gray-700`}
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {news.title}
              </td>
              <td className="px-6 py-4">{news.publishedDate}</td>
              <td className="px-6 py-4">
                <button
                  onClick={() => onDelete(news.id)}
                  className="font-medium text-[#43b4ed] dark:text-blue-500 hover:underline"
                >
                  Delete
                </button>
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => onDelete(news.id)}
                  className="font-medium text-[#43b4ed] dark:text-blue-500 hover:underline"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NewsTable;
