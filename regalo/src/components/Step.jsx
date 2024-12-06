import { useState, useRef } from "react";
import Confetti from "react-confetti";

export default function Step({ props }) {
    const [inputValue, setInputValue] = useState("");
    const formAlertRef = useRef(null); // Crea una referencia para el formAlert

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);

        if (props.isQuestion && inputValue.trim().toLowerCase() === props.answer.toLowerCase()) {
            if (props.handleSolve) props.handleSolve(); // Callback opcional para manejar eventos externos
        } else {
            if (!props.isQuestion) {
                if (props.handleSolve) props.handleSolve(); // Callback opcional
                return;
            }

            // Muestra el mensaje de alerta usando la referencia
            if (formAlertRef.current) {
                formAlertRef.current.style.display = "block";
            }
        }
    };

    return (
        <div className="step">
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <h2 className="font-semibold text-xl">{props.title}</h2>
                {props.media && (
                    <img
                        className="max-h-64 rounded-md"
                        src={props.media}
                        alt={props.title}
                    />
                )}
                <p>{props.description}</p>
                {props.isQuestion && (
                    <>
                <p>{props.question}</p>

                <div>
                    {props.questionType === "text" ? (
                        // Input de texto
                        <input
                            className="p-4 text-black border-r-8"
                            type="text"
                            placeholder="Tu respuesta"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            autoFocus
                        />
                    ) : (
                        // Opciones de radio
                        <div className="flex flex-col gap-2">
                            {props.options.map((option, index) => (
                                <label key={index} className="flex items-center gap-2">
                                    <input
                                        className="cursor-pointer scale-150 ml-4"
                                        type="radio"
                                        name="question"
                                        value={option}
                                        onChange={(e) => setInputValue(e.target.value)}
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                    )}
                    <span
                        id="form-alert"
                        ref={formAlertRef} // Asocia la referencia
                        className="text-red-500 py-3 hidden"
                    >
                        Vamos inténtalo de nuevo.
                    </span>
                </div>
                </>
                )}

                <button type="submit" className="button">
                    Continuar
                </button>
                {/* {props.isQuestion &&
                    inputValue.trim().toLowerCase() === props.answer.toLowerCase() && <Confetti />} */}
            </form>
        </div>
    );
}
