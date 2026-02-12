import React from 'react';

const ResultsDashboard = () => {
    const injuryRiskAssessment = "High"; // Dynamic data would come from props or API
    const correctiveExercises = [
        "Exercise 1: Stretching", 
        "Exercise 2: Strengthening"
    ];

    return (
        <div className="results-dashboard">
            <h1>Injury Risk Assessment</h1>
            <p>Your injury risk level is: <strong>{injuryRiskAssessment}</strong></p>
            <h2>Corrective Exercise Recommendations</h2>
            <ul>
                {correctiveExercises.map((exercise, index) => (
                    <li key={index}>{exercise}</li>
                ))}
            </ul>
        </div>
    );
};

export default ResultsDashboard;