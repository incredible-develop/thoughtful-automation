const { sort } = require('./packageSorter');

// Test data
const testCases = [
    // Standard package tests
    {
        name: 'Small package',
        input: { width: 10, height: 10, length: 10, mass: 10 },
        expected: 'STANDARD',
        category: 'standard'
    },
    {
        name: 'Large but not bulky, not heavy',
        input: { width: 100, height: 90, length: 100, mass: 19 },
        expected: 'STANDARD',
        category: 'standard'
    },

    // Special package tests
    {
        name: 'Bulky due to width',
        input: { width: 151, height: 10, length: 10, mass: 10 },
        expected: 'SPECIAL',
        category: 'special'
    },
    {
        name: 'Heavy package',
        input: { width: 100, height: 10, length: 100, mass: 20 },
        expected: 'SPECIAL',
        category: 'special'
    },
    {
        name: 'Heavy package (25kg)',
        input: { width: 100, height: 10, length: 100, mass: 25 },
        expected: 'SPECIAL',
        category: 'special'
    },

    // Rejected package tests
    {
        name: 'Bulky and heavy',
        input: { width: 151, height: 151, length: 151, mass: 20 },
        expected: 'REJECTED',
        category: 'rejected'
    },

    // Boundary condition tests
    {
        name: 'Exactly at bulky threshold',
        input: { width: 150, height: 150, length: 150, mass: 19 },
        expected: 'SPECIAL',
        category: 'boundary'
    },
    {
        name: 'Exactly at heavy threshold',
        input: { width: 100, height: 90, length: 100, mass: 20 },
        expected: 'SPECIAL',
        category: 'boundary'
    }
];

// Error test cases
const errorTestCases = [
    {
        name: 'Invalid input type',
        input: { width: 'invalid', height: 10, length: 10, mass: 10 },
        expectedError: 'All parameters must be numbers'
    },
    {
        name: 'Negative input',
        input: { width: -1, height: 10, length: 10, mass: 10 },
        expectedError: 'All parameters must be positive numbers'
    }
];

// Test runner function
function runTests() {
    // Group tests by category
    const categories = [...new Set(testCases.map(test => test.category))];

    categories.forEach(category => {
        console.log(`\nTesting ${category} packages:`);
        const categoryTests = testCases.filter(test => test.category === category);

        categoryTests.forEach((test, index) => {
            const result = sort(test.input.width, test.input.height, test.input.length, test.input.mass);
            const passed = result === test.expected;
            console.log(`Test ${index + 1} (${test.name}): ${passed ? 'PASS' : 'FAIL'}`);
            if (!passed) {
                console.log(`  Expected: ${test.expected}`);
                console.log(`  Got: ${result}`);
            }
        });
    });

    // Run error tests
    console.log('\nTesting error cases:');
    errorTestCases.forEach((test, index) => {
        try {
            sort(test.input.width, test.input.height, test.input.length, test.input.mass);
            console.log(`Test ${index + 1} (${test.name}): FAIL - Should throw error`);
        } catch (e) {
            const passed = e.message === test.expectedError;
            console.log(`Test ${index + 1} (${test.name}): ${passed ? 'PASS' : 'FAIL'}`);
            if (!passed) {
                console.log(`  Expected error: ${test.expectedError}`);
                console.log(`  Got error: ${e.message}`);
            }
        }
    });
}

// Run all tests
runTests(); 