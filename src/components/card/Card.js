import React, { useState } from 'react';
import './Card.css';
import config from '../../config.json';


const Card = () => {

    const numQuestions = 24; // change thissss depending on questions

    const displayScore = () => {
        if (num <= numQuestions) {
            window.alert('Please complete all of the questions');
        } else {
            calculateScore();
            window.alert("Go to Dashboard and see your score!");
            
            console.log(extroversion + config.biases[0][0]);
            console.log(agreeableness + config.biases[0][1]);
            console.log(conscientiousness + config.biases[0][2]);
            console.log(opennessToExperience + config.biases[0][3]);
            console.log(neuroticism + config.biases[0][4]);
            console.log(mentalHealth + config.biases[0][5]);
        }
    };
    
    const calculateScore = () => {
        localStorage.setItem("extroversion", (Math.round(1/(1 + Math.exp(-1 * config.scales[0][0] * (extroversion + config.biases[0][0]))) * 100)) + "%" );
        localStorage.setItem("agreeableness", (Math.round(1/(1 + Math.exp(-1 * config.scales[0][1] * (agreeableness + config.biases[0][1]))) * 100)) + "%" );
        localStorage.setItem("conscientiousness", (Math.round(1/(1 + Math.exp(-1 * config.scales[0][2] * (conscientiousness + config.biases[0][2]))) * 100)) + "%" );
        localStorage.setItem("opennessToExperience", (Math.round(1/(1 + Math.exp(-1 * config.scales[0][3] * (opennessToExperience + config.biases[0][3]))) * 100)) + "%" );
        localStorage.setItem("neuroticism", (Math.round(1/(1 + Math.exp(-1 * config.scales[0][4] * (neuroticism + config.biases[0][4]))) * 100)) + "%" );
        localStorage.setItem("mentalHealth", (Math.round(1/(1 + Math.exp(-1 * config.scales[0][5] * (mentalHealth + config.biases[0][5]))) * 100)) + "%" );

        localStorage.setItem("extroversionNum", (Math.round(1/(1 + Math.exp(-1 * config.scales[0][0] * (extroversion + config.biases[0][0]))) * 100)));
        localStorage.setItem("agreeablenessNum", (Math.round(1/(1 + Math.exp(-1 * config.scales[0][1] * (agreeableness + config.biases[0][1]))) * 100)));
        localStorage.setItem("conscientiousnessNum", (Math.round(1/(1 + Math.exp(-1 * config.scales[0][2] * (conscientiousness + config.biases[0][2]))) * 100)));
        localStorage.setItem("opennessToExperienceNum", (Math.round(1/(1 + Math.exp(-1 * config.scales[0][3] * (opennessToExperience + config.biases[0][3]))) * 100)));
        localStorage.setItem("neuroticismNum", (Math.round(1/(1 + Math.exp(-1 * config.scales[0][4] * (neuroticism + config.biases[0][4]))) * 100)));
        localStorage.setItem("mentalHealthNum", (Math.round(1/(1 + Math.exp(-1 * config.scales[0][5] * (mentalHealth + config.biases[0][5]))) * 100)));
    };

    function buttonAction() {
        setExtroversion(prev => prev + (config.weights[num][0] * buttonPress));
        setAgreeableness(prev => prev + (config.weights[num][1] * buttonPress));
        setConscientiousness(prev => prev + (config.weights[num][2] * buttonPress));
        setOpennessToExperience(prev => prev + (config.weights[num][3] * buttonPress));
        setNeuroticism(prev => prev + (config.weights[num][4] * buttonPress));
        setMentalHealth(prev => prev + (config.weights[num][5] * buttonPress));
        console.log("menHth-: " + mentalHealth + ". Num+: " + num + ". Weights: " + config.weights[num][5] + ". Button: " + buttonPress + ". Mult: " + (config.weights[num][5] * buttonPress));
        setNum(prev => prev + 1);
    }

    const handleBtn1 = () => {
        setButtonPress(-2);
        buttonAction();
    };
    const handleBtn2 = () => {
        setButtonPress(-1);
        buttonAction();
    };
    const handleBtn3 = () => {
        setButtonPress(0);
        buttonAction();
    };
    const handleBtn4 = () => {
        setButtonPress(1);
        buttonAction();
    };
    const handleBtn5 = () => {
        setButtonPress(2);
        buttonAction();
    };

    const handleReset = () => {
        setNum(0);
        setExtroversion(0);
        setAgreeableness(0);
        setConscientiousness(0);
        setOpennessToExperience(0);
        setNeuroticism(0);
        setMentalHealth(0);
    }

    const [num, setNum] = useState(0);
    const [buttonPress, setButtonPress] = useState(0);

    const [extroversion, setExtroversion] = useState(0);
    const [agreeableness, setAgreeableness] = useState(0);
    const [conscientiousness, setConscientiousness]  = useState(0);
    const [opennessToExperience, setOpennessToExperience] = useState(0);
    const [neuroticism, setNeuroticism] = useState(0);
    const [mentalHealth, setMentalHealth]  = useState(0);



    
    return (
        <div className='card body'>
            <div className="text-container">
                <h1>Questions Answered:</h1>
                <h2>{Math.min(num, numQuestions)}/{numQuestions}</h2>
                <h2 className='scorebutton' onClick={displayScore}>See Your Score!</h2>
                <h2 className='resetbutton' onClick={handleReset}>Reset the Quiz!</h2>
            </div>
            <div className="button-container">
                <div className="question">{config.question[num]}</div>
                {num <= numQuestions ? <button className='button' onClick={handleBtn1}>Disagree</button> : <button className='button'>Disagree</button>}
                {num <= numQuestions ? <button className='button' onClick={handleBtn2}>Slightly Disagree</button> : <button className='button'>Slightly Disagree</button>}
                {num <= numQuestions ? <button className='button' onClick={handleBtn3}>Neutral</button> : <button className='button'>Neutral</button>}
                {num <= numQuestions ? <button className='button' onClick={handleBtn4}>Slightly Agree</button> : <button className='button'>Slightly Agree</button>}
                {num <= numQuestions ? <button className='button' onClick={handleBtn5}>Agree</button> : <button className='button'>Agree</button>}
            </div>
            
        </div>
    );
}

export default Card;