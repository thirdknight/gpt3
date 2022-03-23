import React from "react";
// import { Feature } from "../../components";
import styles from "./whatGPT3.module.css";

const WhatGPT3 = () => {
  const Feature = ({ title, text }) => {
    return (
      <div className={styles.gpt3FeaturesContainerFeature}>
        <div className={styles.gpt3FeaturesContainerFeatureTitle}>
          <div />
          <h1>{title}</h1>
        </div>
        <div className={styles.gpt3FeaturesContainerFeatureText}>
            <p>{text}</p>
          </div>
      </div>
    )
  }

  return (
    <div className={`sectionMargin ${styles.gpt3Whatgpt3}`} id="whpt3">
      <div className={styles.gpt3Whatgpt3Feature}>
        <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by." />
      </div>
      <div className={styles.gpt3Whatgpt3Heading}>
        <h1 className={`gradientText`}>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className={styles.gpt3Whatgpt3Container}>
        <Feature title="Chatbots" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. " />
        <Feature title="Knowledgebase" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
        <Feature title="Education" text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      </div>
    </div>
  );
};

export default WhatGPT3;
