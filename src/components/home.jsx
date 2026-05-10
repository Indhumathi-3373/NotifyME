import "../styles/home.css";

import logo from "../assets/notify.png";
import img from "../assets/Gemini_Generated_Image_uzdpvjuzdpvjuzdp.png";
import { CirclePlay, CalendarCheck2, BarChart3, Users } from "lucide-react";
import { useState } from "react";
const grid = [
  {
   icon: <CalendarCheck2 size={30} color="blue" />,
    heading:"Smart Scheduling",
    content:"Our intelligent engine predicts task durations and automatically optimizes your team's weekly calendar for maximum output."
  },
{
  icon:<  BarChart3 color="purple" size={30}/>,
  heading:"Progress Tracking",
content:"Visualize milestones with elegant tonal progress bars and real-time activity feeds that keep everyone aligned."
},
{
  icon:<Users color="blue" size={30}/>,
  heading:"Team Collaboration",
content:"Seamless hand-offs and communication channels integrated directly into your workspace to eliminate context switching."
}];

export default function Home() {
  return (
    <>
      <div className="landing-page">
        <h1 className="top-text">STREAMLINE YOUR DAY</h1>
        <h1 className="sub-text">Master Your Workflow</h1>
        <p className="home-copy">
          A simple, powerful project scheduler designed for focus. Reclaim your
          time and achieve momentum without the visual noise.
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
        <img src={logo} alt="img" className="centered-image" />
      </div>
      <h1
        style={{
          marginTop:"50px",
          textAlign: "center",
          letterSpacing: "0.07em",
          fontWeight: "700",
          fontFamily: "sans-serif",
        }}
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
        <img src={img} className="image" alt/>
      </div>
      </div>
    </>
  );
}
