// Injury Risk Assessment Algorithm

/**
 * This function assesses the injury risk factors based on evidence-based models.
 *
 * @param {Object} playerData - The player's data including age, experience, and medical history.
 * @returns {String} - The assessment result regarding the risk of injury.
 */
function assessInjuryRisk(playerData) {
    const { age, experience, injuryHistory } = playerData;

    let riskFactors = [];

    // Age factor
    if (age < 18) {
        riskFactors.push("Younger athletes may experience faster physical changes.");
    } else if (age > 35) {
        riskFactors.push("Older athletes may have decreased recovery capacity.");
    }

    // Experience factor
    if (experience < 3) {
        riskFactors.push("Inexperienced athletes are at higher risk of injury.");
    }

    // Injury history factor
    if (injuryHistory.length > 0) {
        riskFactors.push("Previous injuries increase the likelihood of re-injury.");
    }

    // Final assessment
    if (riskFactors.length > 0) {
        return `Risk Assessment: High risk due to the following factors: ${riskFactors.join(' ')}.`;
    }
    return "Risk Assessment: Low risk. No significant factors identified.";
}

// Example of using the function
// const assessment = assessInjuryRisk({ age: 25, experience: 5, injuryHistory: [] });
// console.log(assessment);