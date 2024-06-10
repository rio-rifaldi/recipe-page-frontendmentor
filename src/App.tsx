import Head from "./components/Head";
import Ingredients from "./components/Ingredients";
import Preparation from "./components/Preparation";
import Instructions from "./components/Instructions";
import Nutrition from "./components/Nutrition";
import Screensize from "./components/Screensize";

function App() {
	return (
		<main className=" lg:py-12 ">
			{/* <Screensize /> */}
			<div className="max-w-screen-lg mx-auto lg:p-16  lg:rounded-3xl bg-cus_White">
				<Head />
				<Preparation />
				<Ingredients />
				<Instructions />
				<Nutrition />
			</div>
		</main>
	);
}

export default App;
