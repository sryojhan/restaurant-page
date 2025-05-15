import main from "./scripts/mainContent.js"
import menu from "./scripts/menuContent.js"
import about from "./scripts/aboutContent.js"

import "./styles.css";


(function(){
    
    const contentElement  = document.querySelector('#content');

    const pages = [main, menu, about];

    const emptyContentDiv = function(){

        while(contentElement.firstChild){

            contentElement.removeChild(contentElement.lastChild);
        }
    };

    const createEmptyContentDiv = function(){

        const newElement = document.createElement('div');
        contentElement.append(newElement);

        return newElement;
    };


    const changePage = function(pageIdx){

        emptyContentDiv();
        const newContent = createEmptyContentDiv();

        pages[pageIdx].populateContent(newContent);
    };
    

    (function createButtonCallbacks(){

        const buttons = [
            document.querySelector('#home'),
            document.querySelector('#menu'),
            document.querySelector('#about')
        ]

        buttons.forEach((element, idx) => {
            

            element.addEventListener('click', ()=>{

                changePage(idx);
            });
        });
    })();

    
})();

