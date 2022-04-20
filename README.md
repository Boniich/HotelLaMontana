# Hotel La Montaña

This app allows see and delete 4 dish. Also will be able to see the indididual price, readyIn and healthScore of this dish, like the global value of all menu.

This App was built for Alkemy acceleration

## Tecnologies/lenguages

<p align="left"> <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> </p>

### Other Tecnologies

- Axios
- React Routes dom
- Sweet Alert
- Env

## Folder Struct

```
my-hotel
|    |__ src
|        |__ assests
|        |    |_ background
|        |    |_ versionBanners
|        |__ components
|        |    |__ common
|        |    |__ views
|        |
|        |__ router
|        |__ hooks
|        |__ consts
|
|__ README
|__ version
```

`Folders`

**- assests**: Contains things like logos,images, etc.  
**- versionBanner**: Contains all files realted to my custom version file.  
**- component**: Contains all component of project.  
**- common**: Contains all re usable components.  
**- views**: Contains main components with his logic and other files about it.  
**- routes**: Contains private routes  
**- hooks**: Contains all custom hooks  
**- consts**: Contains all consts of project

## Features/Current Problems/Problem Fixed

You can see all this in the `version` file.

## How to run this project?

### 1 See the file Demo.md in this repo

This file contains a bit of info, image and a video about app

### 2- Clone

Follow this step:

1- Clone the repo
2- Run the command `npm i`
3- create a file called `.env.local` and add this enviroment varible

REACT_APP_LOGIN_URL = http://challenge-react.alkemy.org/
REACT_APP_API_KEY = apiKey=ffe601b2c0bf40e99eca791908d30c41
REACT_APP_RECIPE_API = https://api.spoonacular.com/recipes/

4- Run `npm start`
