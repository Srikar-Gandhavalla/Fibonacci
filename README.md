Follow the below steps to execute the project.

1. Install Node first in your system (https://nodejs.org/en/download/) and Visual Studio Code IDE
2. Chosse the appropriate version (I have chosen Windows Installer (.msi) 64 bit version - This will install latest node LTS Version: 14.17.0 (includes npm 6.14.13)
3. Open Visual Studion code and open command pallete then type git clone and then press enter
4. you will be prompted to provide the URL (Give the URL as 
5. To execute the code - Go to terminal and run the the command > node fibonacci.js -> Then your code will be executed and you will see the result as [0,1,1,2,3,5,8,13]
6. create package.json file using npm init command in terminal
7. Install npm module(jest) by running the commnad > npm i jest  (this will install jest package into your system)
8. In package.json file under scripts initiate the test with jest as  "test": "jest" (This is required to run the test scripts)
9. Create a file fibonacci.test.js and write the test scripts and save it
10. run the command in terminal as "npm run test"
11. If you forsee any issue like "Jest' is not recognized as an internal or external command", then install the jest package globally by running the command as npm install -g jest
