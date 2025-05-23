# Package Sorter

A JavaScript implementation of a package sorting system for robotic automation. This system sorts packages into different stacks based on their dimensions and mass.

## Problem Description

The system sorts packages using the following criteria:

- A package is **bulky** if:
  - Its volume (Width × Height × Length) is ≥ 1,000,000 cm³, or
  - Any dimension is ≥ 150 cm
- A package is **heavy** if its mass is ≥ 20 kg

Packages are sorted into three stacks:
- **STANDARD**: Regular packages (not bulky or heavy)
- **SPECIAL**: Packages that are either heavy or bulky
- **REJECTED**: Packages that are both heavy and bulky

## Installation

1. Clone this repository
2. Install dependencies (none required for this project)

## Usage

```javascript
const { sort } = require('./packageSorter');

// Example usage
const result = sort(100, 100, 100, 15); // Returns 'STANDARD'
```

## Running Tests

To run the test suite:

```bash
npm test
```

## Test Cases

The test suite includes:
- Standard package scenarios
- Special package scenarios
- Rejected package scenarios
- Edge cases
- Boundary conditions

## Implementation Details

The main function `sort(width, height, length, mass)` takes four parameters:
- `width`: Width in centimeters
- `height`: Height in centimeters
- `length`: Length in centimeters
- `mass`: Mass in kilograms

The function returns a string indicating the appropriate stack:
- `'STANDARD'`
- `'SPECIAL'`
- `'REJECTED'`

## Error Handling

The function includes input validation for:
- Non-numeric inputs
- Negative or zero values

## License

ISC 