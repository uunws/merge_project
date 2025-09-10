Typescript Merge Project 
merge 3 array (collection_1, collection_2, collection_3)

given
collection_1, collection_2 already sorted from min(0) to max
collection_3  already sorted from max to min(0)

Efficiency : O(n) 


Prerequisites
Before you begin, ensure you have the following installed on your system:

Node.js (which includes npm) version 16 or later


Setup and Installation

1. Clone the repository (or simply download the files into a project folder):

git clone <your-repository-url>

2. Navigate into the project directory:

cd <your-project-folder>

3. Install the required development dependencies:

npm install


Running the test
npm test
(You should see a PASS message)

Running the example
npm start
(running the example)


Algorithm Explained
1. create a function called mergeFunc that merges two sorted array by using two-pointer technique
2. reversed collection_3 (reverse from descending to ascending)
3. merged collection_1 and collection_2, name it as tmp
4. merged collection_3 with tmp (from step 3)


Project Structure
/
├── src/
│   ├── tests/
│   │   └── merge.test.ts   # Unit tests
│   └── merge.ts            
├── jest.config.js          
├── package.json            
├── tsconfig.json           
└── README.md               
