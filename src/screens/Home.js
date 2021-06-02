const Home = () => {

  return (
    <>
      <div className='home-container'>
        <h1 className='home-title'>Mentalist</h1>
      </div>
      <div className='home-subtitle'>
        <h1 id='element'>Your solution to everything!</h1> <br/> <br/>
        <h1 id='element-subtitle'>By: Anish, Vishal, Khoi, Laura, Prisha, and Ella</h1>
      </div>
      <div className="home-wrapper">
        <h1 className="header">1. Take the Quiz!</h1> 
        <br/>
        <h1 className="header">2.   View your Results!</h1> 
        <br/>
        <h1 className="header">3.   See Suggestions!</h1> 
        {/* <h2>{localStorage.getItem("score") ? "Your quiz score is " + localStorage.getItem("score") : "Take the quiz" }</h2>  */}
          
      </div>
    </>
  );
}
 
export default Home;