import React from 'react';
import styles from './feature.module.css';

const Feature = ({ title, text }) => {
  return (
    <div className={styles.gpt3FeaturesContainerFeature}>
      <div className={styles.gpt3FeaturesContainerFeatureTitle}>
        <div />
        <h1>{title}</h1>
      </div>
      <div className={styles.gpt3FeaturesContainerFeatureText}>
          {text}
        </div>
    </div>
  )
}

export default Feature