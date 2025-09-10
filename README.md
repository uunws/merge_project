🚀 TypeScript Array Merger Project
This project provides an efficient TypeScript function to merge three integer arrays into a single, sorted array with a time complexity of O(n).

Given Conditions
collection_1: Already sorted from min(0) to max (ascending).

collection_2: Already sorted from min(0) to max (ascending).

collection_3: Already sorted from max to min(0) (descending).

🔧 Prerequisites
Before you begin, ensure you have the following installed on your system:

Node.js (which includes npm) version 16 or later.

⚙️ Setup and Installation
Clone the repository:

git clone <your-repository-url>

Navigate into the project directory:

cd <your-project-folder>

Install the required development dependencies:
This command downloads all the necessary tools like TypeScript and Jest.

npm install

🛠️ Available Scripts
🧪 Running the Test
To verify that the logic is working correctly against various edge cases, run the Jest test suite:

npm test

(You should see a PASS message in your terminal)

▶️ Running the Example
To see a live demonstration of the merge function with sample data, use the start script:

npm start

(This will run the example and print the output to the console)

🧠 Algorithm Explained
The solution uses an efficient two-pointer technique to avoid re-sorting the entire collection. The strategy is as follows:

Create a helper function called mergeFunc that merges two sorted arrays using the two-pointer technique.

Reverse collection_3 to change its order from descending to ascending.

Merge collection_1 and collection_2 using mergeFunc and store the result in a temporary variable (tmp).

Merge tmp with the reversed collection_3 to get the final, fully sorted array.

📂 Project Structure
/
├── src/
│   ├── tests/
│   │   └── merge.test.ts   # Unit tests
│   └── merge.ts            # Main implementation
├── jest.config.js          # Jest configuration
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
