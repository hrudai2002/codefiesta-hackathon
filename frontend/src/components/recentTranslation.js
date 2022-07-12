import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/recentTranslations.css";

const RecentTranslation = () => {
  const [recentTranslations, setRecentTranslations] = useState({});
  const [accordionOne, setAccordionOne] = useState(false);
  const [accordionTwo, setAccordionTwo] = useState(false);
  const [accordionThree, setAccordionThree] = useState(false);
  useEffect(() => {
    const getRecentTranslations = async () => {
      return await axios.get("http://localhost:5000").then((res) => {
        setRecentTranslations(res.data.recentTranslations);
        console.log(res.data.recentTranslations);
      });
    };
    getRecentTranslations();
  }, []);
  const slideAccordionOne = () => { 
    setAccordionOne(!accordionOne);
    setAccordionTwo(false);
    setAccordionThree(false);
  };
  const slideAccordionTwo = () => {
     setAccordionOne(false);
     setAccordionTwo(!accordionTwo);
     setAccordionThree(false);
  };
  const slideAccordionThree = () => {
     setAccordionOne(false);
     setAccordionTwo(false);
     setAccordionThree(!accordionThree);
  };
  return (
    <div className="Accordion-Section">
      <h1>Recent Translations</h1>
      <div>
        <button class="accordion" onClick={slideAccordionOne}>
          Translation One
        </button>
        {accordionOne && (
          <div class="panel">
            <p>Lorem ipsum...</p>
          </div>
        )}

        <button class="accordion" onClick={slideAccordionTwo}>
          Translation Two
        </button>
        {accordionTwo && (
          <div class="panel">
            <p>Lorem ipsum...</p>
          </div>
        )}

        <button class="accordion" onClick={slideAccordionThree}>
          Translation Three
        </button>
        {accordionThree && (
          <div class="panel">
            <p>Lorem ipsum...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentTranslation;
