import omelete from "@/assets/image-omelette.jpeg";

type Props = {};

function Head({}: Props) {
	return (
		<div className="">
			<img src={omelete} alt="omelete" className="md:rounded-xl" />
			<div className="mx-7 lg:mx-0 sm:my-6">
				<h1 className="font-youngserif text-headerTitle my-7 ">Simple Omelette Recipe</h1>
				<p className="font-outfit text-cus_WengeBrown text-para  ">
					An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
				</p>
			</div>
		</div>
	);
}
export default Head;
