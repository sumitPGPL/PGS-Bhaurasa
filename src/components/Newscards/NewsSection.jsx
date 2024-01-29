'use client'
import { useEffect, useRef } from "react";
import NewsCarousel from "../Carousel/NewsCarousel";

export default function LatestNews() {
  const listRef = useRef(null);

  useEffect(() => {
    const listElement = listRef.current;

    const autoScroll = () => {
      listElement.scrollTop += 1;
      // console.log('listElement.scrollHeight', listElement.scrollTop + listElement.clientHeight, listElement.scrollHeight,)
      if (listElement.scrollTop + listElement.clientHeight >= listElement.scrollHeight - 1) {
        listElement.scrollTop = 0; // Reset to the top
      }
    };
    let scrollInterval = setInterval(autoScroll, 50);
    listElement.addEventListener('mouseover', () => {
      clearInterval(scrollInterval);
    });
    listElement.addEventListener('mouseout', () => {
      clearInterval(scrollInterval);
      scrollInterval = setInterval(autoScroll, 50);
    });

    return () => clearInterval(scrollInterval);
  }, []);
  return (
    <>
      <div className="w-full flex justify-center items-center flex-col mt-10">
        <h2 className="text-tblue text-2xl font-bold ">News & Notices</h2>
        <h6 className="text-2xl text-tblue font-bold ">_________________________</h6>
        <h5 className="text-tblue text-2xl font-bold ">BE UPDATED ALL THE THIME</h5>
      </div>
      <div className="flex flex-col sm:flex-row w-full mt-10">
        <div className="w-full sm:w-1/2 p-1 h-[350px]">
          <h2 className="text-2xl bg-tblue p-2 text-center">Latest Update 2023-24</h2>
          <div className="bg-bblue w-full mx-auto">
            <NewsCarousel />
          </div>
        </div>
        <div className="w-full sm:w-1/2 p-1 h-[382px]">
          <h2 className="text-2xl bg-tblue p-2 text-center">Latest News</h2>
          <div className="bg-bblue h-full w-full mx-auto">
            <div className="flex mx-auto w-full h-full items-center justify-center">
              <ul ref={listRef} className="flex flex-col bg-bblue p-2 w-full max-h-[350px] overflow-auto">
                {newsData.map((val, index) => (
                  <NewsList key={index} title={val.title} date={val.date} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>




    </>
  )
}

const NewsList = ({ title, date, key }) => {
  return (
    <li key={key} className="border-gray-400 flex flex-row mb-2">
      <div className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-3  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
        <div className="flex flex-col rounded-md w-10 text-2xl h-10 bg-gray-300 text-black justify-center items-center mr-4 " style={{ backgroundImage: "url('news/newspaper.png')" }}>
          📰
        </div>
        <div className="flex-1 pl-0 mr-16">
          <div className="font-medium">{title}</div>
          <div className="text-gray-600 text-sm">{date}</div>
        </div>
        {/* <div className="text-gray-600 text-xs">1-Jan-2024</div> */}
      </div>
    </li>
  )
}
let newsData = [
  { title: 'Sabhi bacho ko bataya santulit ahara ka mahatav', date: '3-Jul-2023' },
  { title: 'Rakhi festivals celebration', date: '1-sep-2023' },
  { title: 'Anuanal Games', date: '29-Aug-2023' },
  { title: 'Abhuday samapan', date: '6-sep-2023' },
  { title: 'Sabhi bacho ko bataya santulit ahara ka mahatav', date: '04-May-2022' },
  { title: 'Rakhi festivals celebration', date: '1-sep-2023' },
  { title: 'Anuanal Games', date: '29-Aug-2023' },
  { title: 'Abhuday samapan', date: '6-sep-2023' },
  { title: 'Sabhi bacho ko bataya santulit ahara ka mahatav', date: '12-Nov-2023' },
  { title: 'Rakhi festivals celebration', date: '1-sep-2023' },
  { title: 'Diwali celebration', date: '29-Aug-2023' },
  { title: 'Sports Event', date: '6-sep-2023' },

]