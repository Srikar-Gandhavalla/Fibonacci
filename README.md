Follow the below steps to execute the project.

1.	Install Node first in your system (https://nodejs.org/en/download/) and Visual Studio Code IDE
2.	Choose the appropriate version (I have chosen Windows Installer (.msi) 64 bit version - This will install latest node LTS Version: 14.17.0 (includes npm 6.14.13)
3.	Open Visual Studion code and open command palette then type git clone and then press enter
4.	you will be prompted to provide the URL (Give the URL as https://github.com/Srikar-Gandhavalla/Fibonacci.git)
5.	To execute the code - Go to terminal and run the command > <node fibonacci.js> -> Then your code will be executed and you will see the result as [0,1,1,2,3,5,8,13]
6.	Install npm module(jest) by running the command > npm i jest (this will install the jest package into your system)
7.	To execute the tests run the command in terminal as <npm run test>
8.	If you foresee any issue like "Jest' is not recognized as an internal or external command", then install the jest package globally by running the command as <npm install -g jest>


Note: 

1.	I have not included the node modules in the repository.
2.	If you want to generate the Fibonacci series for different numbers, then modify the line no. 24(console.log(fibonacci(8)); in fibonacci.js file. Currently, it is set to 8 and If you want to generate the series for 7, then change the number to 7 and then save the file. Then execute the command <node fibonacci.js>

