import React from "react";
import styles from "./header.module.css";
import '../../App.css';

import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className={`sectionPadding ${styles.gpt3Header}`}>
      <div className={styles.gpt3HeaderContent}>
        <h1 className={`gradientText`}>
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Let’s Build Something amazing with GPT-3 OpenAI Yet bed any for
          travelling assistance indulgence unpleasing. Not thoughts all exercise
          blessing. Indulgence way everything joy alteration boisterous the
          attachment. Party we years to order allow asked of. Your Email Address
          Get Started 1.6k+ 1,600 people requested access a visit in last 24
          hours
        </p>
        <div className={styles.gpt3HeaderContentInput}>
          <input type="email" placeholder="Your Email Adress" />
          <button type="button">Get Started</button>
        </div>
        <div className={styles.gpt3HeaderContentPeople}>
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className={styles.gpt3HeaderImage}>
          <img src={ai} alt="ai" />  
        </div>
    </div>
  );
};

export default Header;
