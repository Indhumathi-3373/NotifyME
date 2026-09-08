import "../styles/home.css";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/image.png";
import img from "../assets/Gemini_Generated_Image_uzdpvjuzdpvjuzdp.png";
import { CirclePlay, CalendarCheck2, BarChart3, Users } from "lucide-react";
import { useState } from "react";
const grid = [
  {
   icon: <CalendarCheck2 size={30} color="blue" />,
    heading:"Smart Notifications",
    content:"Receive reminders exactly at the scheduled time so you never miss important tasks."
  },
{
  icon:<  BarChart3 color="purple" size={30}/>,
  heading:"Conflict Detection",
content:"Get alerts when multiple tasks are scheduled at the same time and organize them by priority."
},
{
  icon:<Users color="blue" size={30}/>,
  heading:"Daily Overview",
content:"View all your upcoming and completed tasks in one clean and organized dashboard."
}];

export default function Home() {
  return (
    <>
      <div className="landing-page">
        <h1 className="top-text">STREAMLINE YOUR DAY</h1>
        <h1 className="sub-text">Never Miss Important Tasks</h1>
        <p className="home-copy">
          A smart reminder app that helps you remember tasks, meetings, medicines, birthdays, and daily routines — right on time.
        </p>
      </div>
      <div className="home-button">
        <button className="get-start">Get Started</button>

        <button className="watch-demo">
          <CirclePlay />
          Watch demo
        </button>
      </div>
      <div className="img">
        <img src={logo} alt="image" className="centered-image" />
      </div>
      <h1
        style={{
          marginTop:"50px",
          textAlign: "center",
          letterSpacing: "0.07em",
          fontWeight: "700",
          fontFamily: "sans-serif",
        }}
        id="Feature"
      >
      
        Designed for momentum
      </h1>
      <p
        style={{
          color: "grey",
          textAlign: "center",
          paddingTop: "16px",
          fontFamily: "sans-serif",
        }}
      >
        Everything you need to ship projects faster.
      </p>
      <div className="grid">
        {grid.map((items,index)=>(
          <div key={index} className="grid-items">
          <div className="icon">{items.icon}</div>
          <h1 className="grid-heading">{items.heading}</h1>
          <p className="grid-content" style={{color:"grey"}}>{items.content}</p>
          </div>
        ))}
      </div>  
       <div className="focus">
        <div className="focus-items">
        <h1 >Focus on what matters.</h1>
        <p style={{color:"grey",fontSize:"medium"}}>We've eliminated the clutter of traditional tools. The interface breathes, allowing your team to navigate complex timelines without the cognitive load.</p>
        <p style={{color:"grey", marginTop:"200px"}}>
+1.2k teams joined this month</p>
      </div>
      <div className="girl">
        <img src={img} className="image" alt="image"/>
      </div>
      </div>
    </>
  );
}
