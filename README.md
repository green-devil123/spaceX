## angular 10 spaceX

ALL OVER CODE RUN IN master  branch

#### setup

first create project with ng new spaceX
cd spaceX

<!-- to make new Route home route modules with its components for boilerpplate -->
->ng g module modules/home
->ng g c modules/home/home --module=modules/home/home.module.ts

create services folder which contain the spaceX service by using 'ng g service services/spaceX' - service is used for calling data by API and used all over the application.

import httpClientModule in app-module.ts

import httpClient and httpHEaders in spaceX.service.ts.

To provide the viewport in index.html for responsive web page.


#### Opeartion

# github remote
git init
git add README.md
git commit -m ""(message comment)
git branch -M master
git remote add origin https://github.com/green-devil123/spaceX.git
git push -u origin master


### deploy on server

After commit code on github
Sign in heroku create the app then connected the github and deploy it 
If you click View, a new tab will be opened but your app will not display. then Configure Your Angular App to Deploy Properly on Heroku: 
1. Ensure you have the latest version of angular cli and angular compiler cli.
2. Create postinstall script in package.json - "heroku-postbuild": "ng build --prod"
3. Add Node and NPM engines - "engines": {"node": "6.11.0","npm": "3.10.10"}
4. Install Express server by running: npm install express path --save.
5. Create a server.js file in the root of the application.
6. Change start command:  "start": "node server.js"



