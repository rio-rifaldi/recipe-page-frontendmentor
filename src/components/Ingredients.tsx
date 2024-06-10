type Props = {};

function Ingredients({}: Props) {
	return (
		<div className="container mb-10">
			<p className="font-youngserif text-title text-cus_Nutmeg my-8">Ingredients</p>
			<ul className=" list-disc list-outside font-outfit text-para [&_li]:my-2 [&_li]:pl-7 ml-7 text-cus_WengeBrown">
				<li>2-3 large eggs </li>
				<li>Salt, to taste Pepper, to taste </li>
				<li> Pepper, to taste </li>
				<li>1 tablespoon of butter or oil </li>
				<li> Optional fillings: cheese, diced vegetables, cooked meats, herbs </li>
			</ul>
		</div>
	);
}

export default Ingredients;
