

const common = (function () {



    const createCenteredTextPanel = function () {
        const panel = document.createElement('div');

        panel.classList.add('menu-group');
        panel.classList.add('panel');

        return panel;
    }

    /**
     * 
     * @param {string} message 
     * @param {HTMLElement} parent 
     */
    const createHeader = function (message, parent) {

        const label = document.createElement('h1');

        label.textContent = message;

        parent.append(label);

        return label;
    }

    const createTextContent = function (message, classList, parent) {

        const label = document.createElement('p');

        if (classList)
            label.classList.add(classList);

        label.textContent = message;

        parent.append(label);

        return label;
    }

    return { createCenteredTextPanel, createHeader, createTextContent };

})()

export default common;