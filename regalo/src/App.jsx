import React, { useState } from 'react';
import { motion } from 'framer-motion';
import data from './steps/steps.json';
import Confetti from 'react-confetti';
import Step from './components/Step';

function App() {
  const currentStep = parseInt(localStorage.getItem("currentStep"), 10) || 0;
  console.log(currentStep);
  const [step, setStep] = useState(currentStep);
  // const [solved, setSolved] = useState(false);
  console.log(step);
  // console.log(data.steps[step]);
  const handleSolve = () => {
    if (step < data.steps.length - 1) {
      const nextStep = step + 1;
      setStep(nextStep); // Avanza al siguiente paso
      localStorage.setItem("currentStep", nextStep);
    } else {
      let url = window.location.href;
      window.location.href = url+'certificado.html';
    }
};

  return (
    <div className='app'>
      {step === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration:  1.5}}
          className="welcome-screen"
        >
          <h1 className='main-title text-2xl md:text-6xl'>¡Feliz Navidad!</h1>
          <p className='text-md my-4 text-white md:text-lg'>¡Bienvenida Cate a tu regalo de Navidad! Sigue los pasos para descubrir tu regalo.</p>
          <button className="button" onClick={() => setStep(step+1)}>Comenzar</button>
        </motion.div>
      )}
    
    {step > 0 &&
    <section>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
        </svg> */}

                <motion.div
                    key={step}
                    initial={{ x: "-100%" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1.1 }}
                    exit={{ x: "100%" }}
                    className="slide"
                >
                    <Step
                        props={{
                            ...data.steps[step], // Pasa los datos del paso actual
                            handleSolve,  // Pasa la función para manejar el avance
                            solved: false // Puedes manejar este estado según tu lógica
                        }}
                    />
                </motion.div>
                </section>
            }
    
  
                {/* <motion.div
                    key="final"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="final-screen"
                >
                    <h1>¡Felicidades!</h1>
                    <p>Has completado todos los pasos.</p>
                    <button onClick={() => setStep(0)}>Reiniciar</button>
                </motion.div> */}
    

      {/* {step === 1 && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          className="slide"
        > */}
          
          {/* <h2 className='font-semibold'>Resuelve este acertijo:</h2>
          <p>“¿Qué es algo que puedes regalar, pero nunca guardar?”</p>
          <input type="text" placeholder="Tu respuesta" />
          <button className="button" onClick={handleSolve}>Enviar</button> */}
          {/* {solved && <Confetti />}
        </motion.div>
      )} */}
{/* 
      {step === 2 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="final-screen"
        >
          <h1>¡Lo lograste!</h1>
          <p>Tu recompensa: 🎁</p>
        </motion.div>
      )} */}
    </div>
  );
}

export default App;
