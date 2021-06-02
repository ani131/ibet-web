import { useState, useEffect } from 'react';
import './SkillBar.css'

const SkillBar = () => {

  const [extraversionPercent, setExtraversionPercent] = useState("5%");
  const [agreeablenessPercent, setAgreeablenessPercent] = useState("5%");
  const [conscientiousnessPercent, setConscientiousnessPercent] = useState("5%");
  const [neuroticismPercent, setNeuroticismPercent] = useState("5%");
  const [opennessPercent, setOpennessPercent] = useState("5%");
  const [mentalHealthPercent, setMentalHealthPercent] = useState("5%");

  useEffect(() => {
    setExtraversionPercent(localStorage.getItem("extroversion"));
    setAgreeablenessPercent(localStorage.getItem("agreeableness"));
    setConscientiousnessPercent(localStorage.getItem("conscientiousness"));
    setNeuroticismPercent(localStorage.getItem("opennessToExperience"));
    setOpennessPercent(localStorage.getItem("neuroticism"));
    setMentalHealthPercent(localStorage.getItem("mentalHealth"));
  }, []);



  return (
    <>
      <h1 className="header">Dashboard</h1>
      { localStorage.getItem("extroversion") ?
      <div className="dashboard body">
        <h2>{localStorage.getItem("score") ? "Your best score was in: Extraversion" : "Take the quiz" }</h2> 
        <p>Extraversion</p>
        <div class="container1">
          <div class="skills bar1 progress" style={{width: extraversionPercent}}>{extraversionPercent}</div>
        </div>

        <p>Agreeableness</p>
        <div class="container1">
          <div class="skills bar2 progress" style={{width: agreeablenessPercent}}>{agreeablenessPercent}</div>
        </div>

        <p>Conscientiousness</p>
        <div class="container1">
          <div class="skills bar3 progress" style={{width: conscientiousnessPercent}}>{conscientiousnessPercent}</div>
        </div>

        <p>Neuroticism</p>
        <div class="container1">
          <div class="skills bar4 progress" style={{width: neuroticismPercent}}>{neuroticismPercent}</div>
        </div>  

        <p>Openness to Experience</p>
        <div class="container1">
          <div class="skills bar5 progress" style={{width: opennessPercent}}>{opennessPercent}</div>
        </div>

        <p>Mental Health</p>
        <div class="container1">
          <div class="skills bar6 progress" style={{width: mentalHealthPercent}}>{mentalHealthPercent}</div>
        </div>

      </div>
      : 
      <div className="dashboard">
      <h2>Take the quiz to see results</h2> 
      <p>Extraversion</p>
      <div class="container-locked">
        <div class="skills bar1 locked">??%</div>
      </div>

      <p>Agreeableness</p>
      <div class="container-locked">
        <div class="skills bar2 locked">??%</div>
      </div>

      <p>Conscientiousness</p>
      <div class="container-locked">
        <div class="skills bar3 locked">??%</div>
      </div>

      <p>Neuroticism</p>
      <div class="container-locked">
        <div class="skills bar4 locked">??%</div>
      </div>  

      <p>Openness to Experience</p>
      <div class="container-locked">
        <div class="skills bar5 locked">??%</div>
      </div>

    </div>
    }     
    </>
  );
}
 
export default SkillBar;
