# frastesion aur backend serires

this is video seiries backend with javascript

for save image we use third party services like azure, aws, digital ocean, cloudnary

.gitkeep folder for just track empty folder

.gitignore file for safe all secreate keys and other stuff that we dont want to push on github

git ignore generator use for the create specific application gitignore file like node - copy and paste to gitignore

create file inside src folder using command line or gitbash with the help of touch command :-

cd src - ls - touch app.js constants.js index.js

then come to the package json file for how to work our app :-

for the importing inside js there are 2 type :-

1. common js :- using "require" syntax
2. module js :- using "import" syntax

we use module js for importing :- use below description
"type" : "module"

whenever server reload or save file then we need to sart or stop each time for auto handle we use nodemon
it is dev dependancy so only devloper can use it will not gone to production for that use
and for formatting use prittier to well orgnixe code with teamate for less conflict while merge or push or pull time

npm i --save-dev nodemon or npm i -D nodemon
npm i -D prettier

1.create prettier file with rc extension for apply it to our code formating

.prettierrc file create, inside file
{
"singleQuote": false,
"bracketSpacing": true,
"tabWidth": 4,
"semi": true,
"trailingComma": "es5"
}

2. create prettier ignore file for igonre to where prettier will not work
   \*.env
   .env
   /.vscode
   /node_modules
   ./dist

.prettierignore file create, inside file

inside script to start the server :-

"dev" : "nodemon src/index.js"

create folder inside src :-
inside controllers they contain main functionality
db for database connection
middleware code will run inbetween before sending request server to check the condition that fulfill
models for create the structure of data base how to store data to db
routes for going separate pages
utils for utilitise the component will multiple time

cd src - ls - mkdir controllers db middlewares models routes utils

======= database connection and debugging ================

mongodb atlas for online service to store data or we can download mongo compass as well
but we will do online

create online mongodb atlas database

at last go to security then network access for give the new ip address if we delete or cant set in previous installation

when we create ip in production level where we dont allow "allow access from anywhere"

then set .env
port
mongodb uri = "url compass link get inside conncet option"

there is 2 ways for the db connection

1. put your all db code inside index file
2. create separate file of db and then use inside in index file

install

dotenv :- for get .env method import
mongoose :- for database connection
express :- for listen app

when you try to connect db then
1.wrap it into Try Catch block or Promises
2.db is always in another quantinant

install coockie-parser for store coockies to user side safely
install cors for cros origin resoureces purpose give the access to site to visit site

_imp_ :-
whenever use middleware or configure setting then we have to use with app.use(middleware)

user and video model with hooks and jwt
BSON data format :-
BSON, or Binary JSON, is the data format that MongoDB uses to organize and store data. This data format includes all JSON data structure types and adds support for types including dates, different size integers, ObjectIds, and binary data.

in user schema index true will help form searching in db

mongoose-aggrigation-paginate-v2 package use for aggrigation quries like insert Many one and etc
use this before exporting it is plugin and that use in video model.js

install bcrypt only for sequre hash password store in db with string

jwt :- json web token install
it is a bearer token like who have this token i will send data

pre:-
mongoose pre hook use for when user want to save then inside middleware or controller just before save we can define pre from encryption
and use function as a callback for getting this object values instead of use arrow function

use access token and refresh token in env create with online jwt generator any, and access token have less days to expire like 1d but refresh token have high days like 10d
and refresh token will save on db but acces token will not
