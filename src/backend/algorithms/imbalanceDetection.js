// imbalanceDetection.js

/**
 * Function to detect movement imbalances and asymmetries.
 * @param {Array<number>} leftMovements - Array of left side movement data.
 * @param {Array<number>} rightMovements - Array of right side movement data.
 * @returns {Object} - An object containing the imbalance and asymmetry metrics.
 */
function detectImbalances(leftMovements, rightMovements) {
    if (leftMovements.length !== rightMovements.length) {
        throw new Error('Movement arrays must be of the same length.');
    }

    let leftSum = 0;
    let rightSum = 0;
    let imbalances = [];

    for (let i = 0; i < leftMovements.length; i++) {
        leftSum += leftMovements[i];
        rightSum += rightMovements[i];
        imbalances.push(leftMovements[i] - rightMovements[i]);
    }

    const averageLeft = leftSum / leftMovements.length;
    const averageRight = rightSum / rightMovements.length;
    const totalImbalance = leftSum - rightSum;

    const asymmetries = imbalances.map(imbalance => Math.abs(imbalance));

    return {
        averageLeft,
        averageRight,
        totalImbalance,
        asymmetries,
        maxAsymmetry: Math.max(...asymmetries),
    };
}

module.exports = { detectImbalances };