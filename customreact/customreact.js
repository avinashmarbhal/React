function customRender(recatElement,container){

    /*
    const domElement = document.createElement(recatElement.type)
    domElement.innerHTML = recatElement.children
    domElement.setAttribute('href', recatElement.props.href)
    domElement.setAttribute('target', recatElement.props.target)

    container.appendChild(domElement) */

    const domElement = document.createElement(recatElement.type)
    domElement.innerHTML = recatElement.children

    for (const prop in recatElement.props) {
        if(prop === 'children') continue;

        domElement.setAttribute(prop, recatElement.props[prop])
        container.appendChild(domElement) 
    }
}


const recatElement = {
    type: 'a',
    props:{
        href:'https://google.com',
        target:'_black'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')


customRender(recatElement, mainContainer)
