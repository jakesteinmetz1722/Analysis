'use strict';

/**
 * Generates a personalized home exercise program based on user analysis results.
 * 
 * @param {Object} analysisResults - The analysis results for the user.
 * @return {Array} - A list of personalized exercises.
 */
function generateExerciseProgram(analysisResults) {
    // Example logic: define exercises based on analysis.
    const exercises = [];

    if (analysisResults.fitnessLevel === 'beginner') {
        exercises.push('Bodyweight Squats', 'Modified Push-Ups');
    } else if (analysisResults.fitnessLevel === 'intermediate') {
        exercises.push('Standard Push-Ups', 'Lunges');
    } else {
        exercises.push('Jump Squats', 'Burpees');
    }

    // Add exercises based on goals
    if (analysisResults.goals.includes('weight_loss')) {
        exercises.push('High-Intensity Interval Training');
    } else if (analysisResults.goals.includes('muscle_gain')) {
        exercises.push('Resistance Training');
    }

    return exercises;
}

/**
 * Customizes the exercise program based on user preferences and analysis data.
 * 
 * @param {Array} baseProgram - The initial list of exercises generated.
 * @param {Object} userPreferences - Preferences such as duration, intensity, etc.
 * @return {Array} - The adjusted exercise program.
 */
function customizeProgram(baseProgram, userPreferences) {
    // Adjust based on user preferences (e.g., duration)
    return baseProgram.map(exercise => {
        return `${exercise} (Duration: ${userPreferences.duration} minutes)`;
    });
}

/**
 * Formats the exercise program for display to the user.
 * 
 * @param {Array} exerciseProgram - The list of exercises to format.
 * @return {string} - Formatted exercise program as a string.
 */
function formatProgramForDisplay(exerciseProgram) {
    return exerciseProgram.join('\n');
}

module.exports = {
    generateExerciseProgram,
    customizeProgram,
    formatProgramForDisplay
};
