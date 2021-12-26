import React from 'react';
import Card from './Card';
import AhsanManjil from "./CardImage/AhsanManjil.jpg";
import CoxsBazar from "./CardImage/CoxsBazar.jpg";
import Barisal from "./CardImage/Barisal.jpg";
import Bandarban from "./CardImage/Bandarban.jpg";
import Kuakata from "./CardImage/Kuakata.jpg";
import Rangamati from "./CardImage/Rangamati.jpg";
import SaintMartin from "./CardImage/SaintMartin.jpg";
import Sajek from "./CardImage/Sajek.jpg";
import Srimangal from "./CardImage/Srimangal.jpg";
import Sundarban from "./CardImage/Sundarban.jpg";
const details = [{
    title: "আহসান মঞ্জিল",
    desc: "আহসান মঞ্জিল ঢাকা শহরের দক্ষিণে বুড়িগঙ্গা নদীর তীরে অবস্থিত। এটি ঢাকার নবাবদের প্রাসাদ ছিল। ১৮৭২ সালে নওয়াব আবদুল গনি তাঁর পুত্র খাজা আহসানুল্লাহর নামে 'আহসান মঞ্জিল' নামকরণ করেন।",
    img: AhsanManjil,
    read: "3",
    views: "6842",
    comments: "45",
    color: "#C70039",
},
{
    title: "কক্সবাজার",
    desc: "কক্সবাজার বাংলাদেশের দক্ষিণ-পূর্বাঞ্চলে অবস্থিত একটি শহর, মৎস্য বন্দর এবং পর্যটন কেন্দ্র। এটি চট্টগ্রাম বিভাগের কক্সবাজার জেলার সদর দপ্তর। এখানে রয়েছে বিশ্বের দীর্ঘতম অবিচ্ছিন্ন প্রাকৃতিক বালুময় সমুদ্র সৈকত, যা ১২২ কি.মি. পর্যন্ত বিস্তৃত।",
    img: CoxsBazar,
    read: "8",
    views: "7869",
    comments: "56",
    color: "#FF5733 ",
},
{
    title: "বরিশাল",
    desc: "বরিশাল জেলা বাংলাদেশের দক্ষিণাঞ্চলের বরিশাল বিভাগের একটি প্রশাসনিক অঞ্চল। এটি ১৭৯৭ সালে বাকেরগঞ্জ নামে প্রতিষ্ঠিত হয়। বরিশাল বাংলাদেশের অন্যতম গুরুত্বপূর্ণ একটি নদীবন্দর। উপজেলার সংখ্যানুসারে বরিশাল বাংলাদেশের একটি “এ” শ্রেণীভুক্ত জেলা।",
    img: Barisal,
    read: "4",
    views: "4587",
    comments: "26",
    color: "#28B463 ",
},
{
    title: "বান্দরবান",
    desc: "বাংলাদেশের তিনটি পার্বত্য জেলার মধ্যে একটি হলো বান্দরবান। বান্দরবানের দক্ষিণ-পশ্চিমে কক্সবাজার, উত্তর-পশ্চিমে চট্রগ্রাম জেলা, উত্তরে রাঙামাটি ও পুর্বে মায়ানমার। পাহাড়, নদী ও ঝর্ণার মিলনে অপরূপ সুন্দর বান্দরবান জেলা। ",
    img: Bandarban,
    read: "2",
    views: "3576",
    comments: "52",
    color: "#0000FF",
},
{
    title: "কুয়াকাটা",
    desc: "কুয়াকাটা বাংলাদেশের দক্ষিণ-পশ্চিমাঞ্চলের পটুয়াখালী জেলার একটি শহর ও পর্যটনকেন্দ্র। এখানে আছে কুয়াকাটা সমুদ্র সৈকত যা পর্যটকদের কাছে সাগরকন্যা হিসেবে পরিচিত। ১৮ কিলোমিটার দৈর্ঘ্য বিশিষ্ট কুয়াকাটা বাংলাদেশের একমাত্র সৈকত যেখানে সূর্যোদয় এবং সূর্যাস্ত দুটোই দেখা যায়।",
    img: Kuakata,
    read: "7",
    views: "8642",
    comments: "69",
    color: "#C70039",
},
{
    title: "রাঙামাটি",
    desc: "রাঙ্গামাটি জেলা বাংলাদেশের দক্ষিণ-পূর্বাঞ্চলে অবস্থিত চট্টগ্রাম বিভাগের একটি প্রশাসনিক অঞ্চল। এটি একটি পার্বত্য জেলা। এটি বাংলাদেশের বৃৃৃহত্তম জেলা। উপজেলার সংখ্যানুসারে রাঙ্গামাটি বাংলাদেশের একটি “এ” শ্রেণীভুক্ত জেলা।",
    img: Rangamati,
    read: "3",
    views: "4576",
    comments: "13",
    color: "#2C95C9 ",
},
{
    title: "সেন্টমার্টিন",
    desc: "সেন্ট মার্টিন দ্বীপ বাংলাদেশের সর্ব দক্ষিণে বঙ্গোপসাগরের উত্তর-পূর্বাংশে অবস্থিত একটি ছোট প্রবাল দ্বীপ (মাত্র ৮ বর্গকিলোমিটার)। এটি কক্সবাজার জেলার টেকনাফ হতে প্রায় ৯ কিলোমিটার দক্ষিণে ও মায়ানমার-এর উপকূল হতে ৮ কিলোমিটার পশ্চিমে নাফ নদীর মোহনায় অবস্থিত।",
    img: SaintMartin,
    read: "6",
    views: "8255",
    comments: "88",
    color: "#862CC9",
},
{
    title: "সাজেক ভ্যালি",
    desc: "সাজেক উপত্যকা বাংলাদেশের রাঙ্গামাটি জেলার বাঘাইছড়ি উপজেলার অন্তর্গত সাজেক ইউনিয়নের একটি বিখ্যাত পর্যটন স্থল। সাজেক ভ্যালিতে রয়েছে দুটি পাড়া। ১৮৮০ সালে প্রতিষ্ঠিত রুইলুই পাড়া ১,৭২০ ফুট উচ্চতায় অবস্থিত। আর কংলাক পাড়া ১,৮০০ ফুট উচ্চতায় অবস্থিত।",
    img: Sajek,
    read: "5",
    views: "6547",
    comments: "32",
    color: "#2CC97D",
},
{
    title: "শ্রীমঙ্গল",
    desc: "চায়ের রাজধানী খ্যাত এই অঞ্চল বাংলাদেশের উত্তর-পূর্ব প্রান্তে অবস্থিত একটি উপজেলা যা সিলেট বিভাগের মৌলভীবাজার জেলার দক্ষিণ-পশ্চিম প্রান্তের অন্তর্গত হাইল-হাওরের পাশে ৪২৫.১৫ বর্গকিলোমিটার এলাকাজুড়ে অবস্থান করছে।",
    img: Srimangal,
    read: "4",
    views: "4567",
    comments: "45",
    color: "#808000",
},
{
    title: "সুন্দরবন",
    desc: "সুন্দরবন হলো বঙ্গোপসাগর উপকূলবর্তী অঞ্চলে অবস্থিত একটি প্রশস্ত বনভূমি যা বিশ্বের প্রাকৃতিক বিস্ময়াবলির অন্যতম। সমুদ্র উপকূলবর্তী নোনা পরিবেশের সবচেয়ে বড় ম্যানগ্রোভ বন হিসেবে সুন্দরবন বিশ্বের সর্ববৃহৎ অখণ্ড বনভূমি।",
    img: Sundarban,
    read: "5",
    views: "5676",
    comments: "37",
    color: "#E9CF2C",
}
]

function Cards(){
    return <div className='allcards'>
    <h1 className='cardheading'>বাংলাদেশের শীর্ষ ১০টি পর্যটনকেন্দ্র</h1>
    {details.map((item,index)=>{
         return <Card key={index} 
         title = {item.title} 
         description ={item.desc} 
         color = {item.color} 
         image = {item.img}
         read = {item.read}
         views = {item.views}
         comments = {item.comments}/> 
     })}
  </div>
}
export default Cards;