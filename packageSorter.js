/**
 * Sorts a package into the appropriate stack based on its dimensions and mass
 * @param {number} width - Width of the package in centimeters
 * @param {number} height - Height of the package in centimeters
 * @param {number} length - Length of the package in centimeters
 * @param {number} mass - Mass of the package in kilograms
 * @returns {string} The stack name where the package should be placed
 */
function sort(width, height, length, mass) {
    // Input validation
    if (typeof width !== 'number' || typeof height !== 'number' ||
        typeof length !== 'number' || typeof mass !== 'number') {
        throw new Error('All parameters must be numbers');
    }

    if (width <= 0 || height <= 0 || length <= 0 || mass <= 0) {
        throw new Error('All parameters must be positive numbers');
    }

    // Calculate volume in cubic centimeters
    const volume = width * height * length;

    // Check if package is bulky
    // A package is bulky if:
    // 1. Its volume is >= 1,000,000 cm³, OR
    // 2. Any dimension is >= 150 cm
    const isBulky = volume >= 1000000 ||
        width >= 150 ||
        height >= 150 ||
        length >= 150;

    // Check if package is heavy (mass >= 20 kg)
    const isHeavy = mass >= 20;

    // Determine the appropriate stack
    // A package is REJECTED only if it is BOTH bulky AND heavy
    if (isBulky && isHeavy) {
        return 'REJECTED';
    }
    // A package is SPECIAL if it is EITHER bulky OR heavy
    if (isBulky || isHeavy) {
        return 'SPECIAL';
    }
    // Otherwise, it's a STANDARD package
    return 'STANDARD';
}

module.exports = { sort }; 