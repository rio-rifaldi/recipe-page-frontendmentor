import {Separator} from "./ui/separator";

type Props = {};

function Nutrition({}: Props) {
	return (
		<div className="container font-outfit mt-10 pb-10">
			<p className="font-youngserif text-title text-cus_Nutmeg">Nutrition</p>
			<p className="text-cus_WengeBrown text-para my-5">The table below shows nutritional values per serving without the additional fillings. </p>
			<ul className=" text-para [&_div_div]:grid [&_div_div]:my-4 [&_div_div]:grid-cols-2 text-cus_WengeBrown last-of-type:[&_div_div_li]:text-cus_Nutmeg last-of-type:[&_div_div_li]:font-bold">
				<div>
					<div>
						<li>Calories </li>
						<li>277kcal</li>
					</div>
					<Separator className="bg-cus_LightGrey rounded-xl" />
				</div>
				<div>
					<div>
						<li> Carbs </li>
						<li>0g </li>
					</div>
					<Separator className="bg-cus_LightGrey rounded-xl" />
				</div>
				<div>
					<div>
						<li>Protein </li>
						<li>20g </li>
					</div>
					<Separator className="bg-cus_LightGrey rounded-xl" />
				</div>
				<div>
					<div>
						<li>Fat </li>
						<li>22g</li>
					</div>
				</div>
			</ul>
		</div>
	);
}

export default Nutrition;
