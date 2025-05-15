import common from "./common";

import coffeMascot from "../images/coffe-mascot.png"

const page = function(){


    const populateContent = function(parent){

        const panel = common.createCenteredTextPanel();


        const image = document.createElement('img');
        image.src = coffeMascot;
        image.width = 200;
        image.height = 200;
        panel.append(image);

        common.createHeader('¡Que aproveche!', panel);


        common.createTextContent('El sitio de comida mas rico rico de toda la localidad. Aquí lo más importante es que salgas con una sonrisa y con la panza llena.', "", panel);

        parent.append(panel);
    }


    return {populateContent};
}();



export default page;