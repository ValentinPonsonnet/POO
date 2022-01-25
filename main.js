import {Templatiser} from "./model/templater.js";
import {ControllerAPI as MyApi} from "./model/thirdPartAPI.js";

let doItPART1 = "with this structured files .... you have to work a POO appraoch.... to use 1 of this class for finding data and give that data to another class for make a template ....summerize : 1 class resnposabilite is the templating AND 1 class responsabilite is use api to find data ...usecase : find whetaher temp, description, wind(if is possible) from a specific citi(user input) && make a whaethercard with this data   "
//let doItPART2 = "open new project with same structured files : go use api chucknoriss make application : need application user can easy ask for a random categories joke ...see prototype"

console.log(doItPART1);
console.log("\nsuite\n\n");
//console.log(doItPART2);
const request = new MyApi('https://api.openweathermap.org/data/2.5/weather','1369479ae345426711eac957ac8ccbb4');
const template = new Templatiser
request.fetchData('epinal');
