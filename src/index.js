//import the react and react-dom libraries
import React from 'react';
import ReactDom from 'react-dom';

function getHelloWorld() {
    return 'Hello World'; 
}

function getTime(){
    return  (new Date()).toLocaleDateString() ; 
}

//Create a react component
const App = () => {
    //new variable 
    const helloWorld = 'Hello World'; 
    const objectHelloWorld = { text: 'Hello World'}; 
    const styles = {
            color1 : { color: '#ff9050' },
            color2 : { color: '#009050' }, 
            color3 : { color: '#0090ff' }
    } 

    return (
        <div>
            <div style = { styles.color1 }> {helloWorld} </div>
            <div style = { styles.color2 }> {getHelloWorld()} </div>
            <div style = { styles.color3 }> {objectHelloWorld.text} </div>
            <div > current time : {getTime()} </div>
        </div>
    );   
}

//Take the react component and show it on the screen
ReactDom.render(
    <App/>, 
    document.querySelector('#root')
)