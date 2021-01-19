import "./sass/index.scss";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
	return (
		<div className='App'>
			<Header />
			<Nav />
			<Home />
			<Footer />
		</div>
	);
}

export default App;
