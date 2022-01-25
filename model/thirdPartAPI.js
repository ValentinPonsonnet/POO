import { Templatiser } from "./templater.js";

class ControllerAPI
{  
    constructor(url,key)
    {
    this.url=url;
    this.key=key;
    }
    fetchData(input_user)
    {
        fetch(`${this.url}?q=${input_user}&appid=${this.key}&units=metric&lang=fr`)
        .then(r => r.json())
        .then(data =>
            {
            let nouveauTemplate = Templatiser(data);
            })
    }
    
}
export {ControllerAPI};