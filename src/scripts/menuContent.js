
import json from "../menu.json"

const page = function () {


    /**
    * 
    * @param {HTMLElement} parent 
    * @param {string} group 
    */
    const createMenuGroup = function (parent, group) {

        const menuGroup = document.createElement('div');
        menuGroup.classList.add('menu-group');

        {
            const title = document.createElement('h1');
            title.textContent = group;

            const table = document.createElement('table');

            json[group].forEach(rowData => {

                const row = document.createElement('tr');

                const name = document.createElement('td');
                const price = document.createElement('td');

                name.textContent = rowData.name;
                price.textContent = '$' + rowData.price;

                row.append(name);
                row.append(price);

                table.append(row);
            });


            menuGroup.append(title);
            menuGroup.append(table);
        }

        parent.append(menuGroup);

    }


    /**
     * 
     * @param {HTMLElement} parent 
     */
    const populateContent = function (parent) {

        parent.classList.add('menu');


        createMenuGroup(parent, 'Comidas');

        const bottomGrid = document.createElement('div');
        bottomGrid.classList.add('bottom-grid');


        const left = document.createElement('div');
        const right = document.createElement('div');

        createMenuGroup(left, "Cenas");

        createMenuGroup(right, "Brunch");
        createMenuGroup(right, "Bebidas");


        //Create bottom text
        {
            const menuGroup = document.createElement('div');
            menuGroup.classList.add('menu-group');
            menuGroup.classList.add('bottom-text');

            const title = document.createElement('h2');
            title.textContent = "Revisa la pizarra para ver los postres y los especiales del día";

            menuGroup.append(title);
            left.append(menuGroup);
        }







        bottomGrid.append(left);
        bottomGrid.append(right);

        parent.append(bottomGrid);

    }

    return { populateContent };

}();



export default page;