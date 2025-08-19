import React, { useState } from 'react';
import './NameLogin.css'
import QuizCard from './QuizCard';

const NameLogin = () => {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
    
      localStorage.setItem("username", name);
      console.log("Saved name:", name);

      setSubmitted(true);
    }
  };

  return (
    <div className="p-5 mt-5 card cardform ">
      {!submitted ? (
        <form onSubmit={handleSubmit} className=" d-flex flex-column gap-4 ">
          <div className="form-group">
            <h2 className='pb-5 text-white'>Welcome to Quiz App</h2>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Your Name"
              className="form-control p-3 fs-5 cardInput rounded"
            />
          </div>
          <button
            type="submit"
            className="btn btn-gradient fs-5"
          >
            Start Quiz
          </button>
        </form>
      ) : (
        <h2 className="text-light fw-bold ">
          Welcome, {name}! 🎉
          <div className='mt-5'>
<QuizCard/>
          </div>
        </h2>
      )}
    </div>
  );
};

export default NameLogin;
