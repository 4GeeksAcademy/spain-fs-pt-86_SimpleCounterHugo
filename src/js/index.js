//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
function SimpleCounter({ digitFour, digitThree, digitTwo, digitOne }) {
    return (
        <div className="bigCounter">
            <div className="calendar">
                <i className="far fa-clock"></i>
            </div>
            <div className="four">{digitFour % 10}</div>
            <div className="three">{digitThree % 10}</div>
            <div className="two">{digitTwo % 10}</div>
            <div className="one">{digitOne % 10}</div>
        </div>
    );
}
let counter = 0;
const root = ReactDOM.createRoot(document.getElementById('app'));

setInterval(() => {
    const four = Math.floor(counter / 1000);
    const three = Math.floor(counter / 100);
    const two = Math.floor(counter / 10);
    const one = Math.floor(counter / 1);
    counter++;
    
    root.render(
        <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />
    );
}, 1000);

export default SimpleCounter;


//render your react application
ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);

