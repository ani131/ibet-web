import { useState, useEffect } from 'react';
import './TraitCard.css'

const TraitCard = () => {
    // const [extroversionNum, setExtroversionNum] = useState((localStorage.getItem("extroversion").slice((0, -1)))) 
    console.log(localStorage.getItem("extroversionNum"));
    return (
    <div className='suggestions-container'>
      
      <h1 className="header">Based on your quiz score - here are a few recommendations</h1>
      {parseInt(localStorage.getItem("extroversionNum")) > 50 ? <div className="suggestions"><p>Hanging around with people is good, but think about taking some time for self-improvement!</p></div> : null}
      {parseInt(localStorage.getItem("extroversionNum")) <= 50 ? <div className="suggestions"><p>Socially connect with more people!</p></div> : null}
      {parseInt(localStorage.getItem("agreeablenessNum")) > 50 ? <div className="suggestions"><p>It may be difficult, but try talking to others about your problems - more often than not it can help you!</p></div> : null}
      {/* {parseInt(localStorage.getItem("agreeablenessNum")) <= 50 ? <div className="suggestions"><p>It may be difficult, but try talking to others about your problems - more often than not it can help you!</p></div> : null} */}
      {parseInt(localStorage.getItem("conscientiousnessNum")) > 0 ? <div className="suggestions"><p>Set attainable goals to reach (for mental health and in general), and don’t push yourself too hard. People with high conscientiousness tend to be ambitious and high-achieving, but it can border on perfectionism, which leads to high stress or burnout. To avoid this, take regular breaks from work and enjoy short-term gratifications</p></div> : null}
      {parseInt(localStorage.getItem("conscientiousnessNum")) > 50 ? <div className="suggestions"><p>Having big goals for the future is a very good thing to have, but try to avoid perfectionism. Trying your best is important, but perfectionism at the cost of high stress and/or burnout is not healthy. A good way to prevent this is to take breaks every now and then and live a little.</p></div> : null}
      {parseInt(localStorage.getItem("conscientiousnessNum")) <= 50 ? <div className="suggestions"><p>A good way to follow through with big goals is to break them down into smaller, more manageable goals. You will find that this will help time management and the achievability of long term big goals.</p></div> : null}
      {parseInt(localStorage.getItem("neuroticismNum")) > 50 ? <div className="suggestions"><p>Try exercising more often!</p></div> : null}
      {parseInt(localStorage.getItem("neuroticismNum")) > 50 ? <div className="suggestions"><p>Meditation and deep breathing exercises</p></div> : null}
      {parseInt(localStorage.getItem("opennessToExperienceNum")) > 50 ? <div className="suggestions"><p>You may be creative and open to new ideas, so taking self-care or mental health days once a week to enjoy yourself and try new things is suggested</p></div> : null}
      {parseInt(localStorage.getItem("opennessToExperienceNum")) <= 50 ? <div className="suggestions"><p>Professional help might be beneficial, as well as gradual, consistent treatment</p></div> : null}

    </div>
  );
}
 
export default TraitCard;   