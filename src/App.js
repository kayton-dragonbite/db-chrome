import "./App.css"
import { Button } from '@material-ui/core';

//Component
import Web3GlobalProvider from "./components/Web3GlobalProvider";

function App() {
	return (
		<div className="App">
			<Web3GlobalProvider />
		</div>
	)
}

export default App
