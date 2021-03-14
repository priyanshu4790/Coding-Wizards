import React from "react";
import "./DiseaseDetection.css";

function DiseaseDetection() {
  return (
    <>
    <div className="header">Breast cancer</div>
      <div className="blog-card">
        <div className="meta">
          <div className="photo" style={{backgroundImage: "url(images/BreastCancer.jfif)"}}></div>
        </div>
        <div className="description">
          <h1>Breast cancer Disease Prediction</h1>
          <h2>Detect breast cancer</h2>
          <p>Symptoms of breast cancer include a lump in the breast, bloody discharge from the nipple and changes in the shape or texture of the nipple or breast.</p>
          <button><a href="https://breastcancermediaid.herokuapp.com/" target='_blank' style={{textDecoration: "none"}}>
            Predict</a>
          </button>
        </div>
      </div>

      <div className="blog-card alt">
        <div className="meta">
          <div className="photo" style={{backgroundImage: "url(images/Diabeties.jpg)"}}></div>
        </div>
        <div className="description">
          <h1>Diabeties prediction</h1>
          <h2>Predict the chances of getting diabeties</h2>
          <p>Diabetes is a disease that occurs when your blood glucose, also called blood sugar, is too high. Blood glucose is your main source of energy and comes from the food you eat.</p>
          <button><a href="https://diabetesdetectionmediaid.herokuapp.com/" target='_blank' style={{textDecoration: "none"}}>
            Predict</a>
          </button>
        </div>
      </div>

      <div className="blog-card">
        <div className="meta">
          <div className="photo" style={{backgroundImage: "url(images/heart.jpg)"}}></div>
        </div>
        <div className="description">
          <h1>Heart disease</h1>
          <h2>Predict Heart Disease</h2>
          <p>It develops when the arteries that supply blood to the heart become clogged with plaque. This causes them to harden and narrow.</p>
          <button><a href="https://heartsdiseasemediaid.herokuapp.com/" target='_blank' style={{textDecoration: "none"}}>
            Predict</a>
          </button>
        </div>
      </div>

      <div className="blog-card alt">
        <div className="meta">
          <div className="photo" style={{backgroundImage: "url(images/kidney.png)"}}></div>
        </div>
        <div className="description">
          <h1>Kidney disease</h1>
          <h2>Predict kidney disease</h2>
          <p>The kidneys filter waste and excess fluid from the blood. As kidneys fail, waste builds up.</p>
          <button><a href="https://kidneydiseasemediaid.herokuapp.com/" target='_blank' style={{textDecoration: "none"}}>
            Predict</a>
          </button>
        </div>
      </div>
    </>
  );


}

export default DiseaseDetection;
