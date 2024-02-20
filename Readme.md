# frastesion aur backend serires

this is video seiries backend with javascript

for save image we use third party services like azure, aws, digital ocean, cloudnary

.gitkeep folder for just track empty folder

.gitignore file for safe all secreate keys and other stuff that we dont want to push on github

git ignore generator use for the create specific application gitignore file like node - copy and paste to gitignore

create file inside src folder using command line or gitbash with the help of touch command :-

1. cd src - ls - touch app.js constants.js index.js

then come to the package json file for how to work our app :-

for the importing inside js there are 2 type :-

1. common js :- using "require" syntax
2. module js :- using "import" syntax

we use module js for importing :- use below description
"type" : "module"

whenever server reload or save file then we need to sart or stop each time for auto handle we use nodemon
it is dev dependancy so only devloper can use it will not gone to production for that use

npm i --save-dev nodemon or npm i -D nodemon

inside script to start the server :-

"dev" : "nodemon src/index.js"
