import { useState } from "react";
import styles from "./QuizSection.module.css";
import { quizData } from "../../../data/quizData";
import { quizResultData } from "../../../data/quizResultData";

export default function QuizSection() {
    const { header, card, preguntas, botones } = quizData;

    const [answers, setAnswers] = useState({});
    const [result, setResult] = useState("");

    const handleAnswer = (index, value) => {
        setAnswers({ ...answers, [index]: value });
    };

    // VALIDAR si ya respondió todo
    const isComplete = Object.keys(answers).length === preguntas.length;

    const getRecommendation = () => {
        const totalYes = Object.values(answers).filter(a => a === "si").length;

        if (totalYes === 0) return "inicial";
        if (totalYes <= 2) return "profesional";
        return "avanzado";
    };

    const handleResult = () => {
        const plan = getRecommendation();
        setResult(plan);
    };

    const handleReset = () => {
        setAnswers({});
        setResult("");
    };
    return (
        <section className={styles.container}>
            <h2>{header.titulo}</h2>
            <p className={styles.subtitle}>{header.descripcion}</p>

            <div className={styles.box}>
                <h3>{card.titulo}</h3>
                <p>{card.descripcion}</p>

                {!result ? (
                    <>
                        {preguntas.map((item, i) => (
                            <div
                                key={i}
                                className={`${styles.question} ${answers[i] ? styles.activeQuestion : ""
                                    }`}
                            >
                                <h4>{item.pregunta}</h4>
                                <span>{item.descripcion}</span>

                                <div className={styles.actions}>
                                    {/* SI */}
                                    <button
                                        className={
                                            answers[i] === "si"
                                                ? styles.yes
                                                : answers[i] === "no"
                                                    ? styles.inactive
                                                    : ""
                                        }
                                        onClick={() => handleAnswer(i, "si")}
                                    >
                                        {botones.si}
                                    </button>

                                    {/* NO */}
                                    <button
                                        className={
                                            answers[i] === "no"
                                                ? styles.no
                                                : answers[i] === "si"
                                                    ? styles.inactive
                                                    : ""
                                        }
                                        onClick={() => handleAnswer(i, "no")}
                                    >
                                        {botones.no}
                                    </button>
                                </div>
                            </div>
                        ))}
                        {/* BOTONES */}
                        <div className={styles.footer}>
                            <button
                                className={`${styles.primary} ${!isComplete ? styles.disabled : ""
                                    }`}
                                onClick={handleResult}
                                disabled={!isComplete}
                            >
                                {botones.resultado}
                            </button>

                            <button className={styles.secondary} onClick={handleReset}>
                                {botones.reset}
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        {/* RESULTADO */}
                        <div className={`${styles.resultCard} ${styles[result]}`}>
                            <h3>{quizResultData[result].titulo}</h3>
                            <p>{quizResultData[result].precio}</p>

                            <ul>
                                {quizResultData[result].beneficios.map((b, i) => (
                                    <li key={i}>✔ {b}</li>
                                ))}
                            </ul>

                            {/* BOTÓN WHATS */}
                            <button className={styles.cta}>
                                💬 Quiero este plan
                            </button>

                            {/* REINICIAR */}
                            <button
                                className={styles.resetResult}
                                onClick={handleReset}
                            >
                                Reiniciar
                            </button>
                        </div>
                    </>
                )}
            </div>
        </section >
    );
}