# Ex04 Simple Calculator - React Project

## Date
01/09/2026

## AIM

To develop a Simple Calculator using React.js with a clean and responsive design, ensuring a smooth user experience across different screen sizes.

## ALGORITHM

### STEP 1
Create a React App.

### STEP 2
Open a terminal and run:

```bash
npx create-react-app simple-calculator
cd simple-calculator
npm start
```

### STEP 3
Inside the `src/` folder, create the React calculator component and define the basic structure.

### STEP 4
Plan the UI with:
- Number buttons (0-9)
- Operators (+, -, ×, ÷)
- Decimal point
- Clear (C)
- Equal (=)
- Display screen

### STEP 5
Create the CSS file inside `src/` and add responsive styling.

### STEP 6
Open `src/App.js` and implement the calculator logic.

### STEP 7
Start the development server:

```bash
npm start
```

### STEP 8
Open the application in the browser:

**Localhost:** http://localhost:3000/

### STEP 9
Test the calculator by entering numbers and operations.

Example:

```text
10 + 5 = 15
20 - 8 = 12
6 × 7 = 42
20 ÷ 4 = 5
```

### STEP 10
Fix styling issues and refine content placement.

### STEP 11
Build the project for deployment:

```bash
npm run build
```

### STEP 12
Upload the project to GitHub. It can also be deployed using GitHub Pages or another static hosting service.

## PROGRAM

The complete React program is available in:

```text
src/
├── App.js
├── App.css
└── index.css
```

## OUTPUT

The browser displays a responsive Simple Calculator with number buttons, arithmetic operators, clear, decimal and equal buttons.

**Local application link:** http://localhost:3000/

## RESULT

The program for developing a simple calculator in React.js is executed successfully.

## PROJECT STRUCTURE

```text
simple-calculator/
│
├── public/
│   └── index.html
│
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
│
├── .gitignore
├── package.json
└── README.md
```

## HOW TO RUN IN VS CODE

1. Extract the project ZIP.
2. Open the `simple-calculator` folder in VS Code.
3. Open the VS Code terminal.
4. Run:

```bash
npm install
npm start
```

5. Open **http://localhost:3000/** in your browser.

## GIT COMMANDS TO PUSH TO GITHUB

Create an empty repository on GitHub first. Then, from the project folder, run:

```bash
git init
git add .
git commit -m "Add React simple calculator"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
```

Replace:

```text
YOUR-USERNAME
YOUR-REPOSITORY
```

with your GitHub username and repository name.

### For future changes

```bash
git add .
git commit -m "Update calculator"
git push
```

## LOCALHOST LINK

http://localhost:3000/
