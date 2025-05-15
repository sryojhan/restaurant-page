import common from "./common";

import sonriendo from "../images/sonriendo.jpg"

const page = function(){


    const populateContent = function(parent){

        const panel = common.createCenteredTextPanel();


        const image = document.createElement('img');
        image.src = sonriendo;
        image.width = 500;
        panel.append(image);

        common.createHeader('¡Ven a conocernos!', panel);


        common.createTextContent('Ya sabes donde estamos, y recuerda, ¡como si estuvieras en casa!', "", panel);

        parent.append(panel);
    }


    return {populateContent};
}();



export default page;