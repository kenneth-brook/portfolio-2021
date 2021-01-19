import "./sass/index.scss";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";

function App() {
	return (
		<div className='App'>
			<Header />
			<Nav />
			<Home />
		</div>
	);
}

export default App;
