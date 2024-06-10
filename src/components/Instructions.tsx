import {Separator} from "./ui/separator";

const Instructions = () => {
	return (
		<>
			<Separator className="bg-cus_LightGrey  rounded-full " />
			<div className="container my-2">
				<p className="font-youngserif text-title my-10 text-cus_Nutmeg">Instructions</p>
				<ul className="marker:text-cus_Nutmeg text-cus_WengeBrown marker:font-bold list-decimal font-outfit [&_li>*]:font-semibold [&_li]:my-2 text-para [&_li]:pl-6 ml-8">
					<li>
						<span> Beat the eggs </span>: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.
					</li>
					<li>
						<span> Heat the pan </span>: Place a non-stick frying pan over medium heat and add butter or oil.
					</li>
					<li>
						<span> Cook the omelette </span>: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.
					</li>
					<li>
						<span> Add fillings (optional) </span>: When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.
					</li>
					<li>
						<span> Fold and serve </span>: As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.
					</li>
					<li>
						<span> Enjoy </span>: Serve hot, with additional salt and pepper if needed.
					</li>
				</ul>
			</div>
			<Separator className="bg-cus_LightGrey  rounded-full mt-14 " />
		</>
	);
};
export default Instructions;
