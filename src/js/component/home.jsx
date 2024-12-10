import React from "react";
import { useState, useEffect } from 'react';
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
function App() {
	const [count, setCount] = useState(1000);
	useEffect(() => {
	  setTimeout(() => setCount((count) => count - 1), 1000);
	}, [count]);
  
	const cahngeCounter = () => {
	  setCount((count) => count - 1);
	};
  	return (
	  <>
		<button type="button" class="btn btn-primary btn-lg" onClick={cahngeCounter}>Large button</button>
		<p>{count}</p>
	  </>
	);
  }
  export default App;