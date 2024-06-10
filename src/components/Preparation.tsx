const Preparation = () => {
	return (
		<div className="container my-10">
			<div className="font-outfit p-7 rounded-xl bg-cus_RoseWhite">
				<p className="text-[1.4rem] md:text-2xl font-bold my-6 text-cus_DarkRaspberry">Preparation time </p>
				<ul className="list-inside list-disc [&_li>*]:font-semibold [&_li]:my-2 text-lg ml-5 text-cus_WengeBrown">
					<li>
						<span> Total:</span> Approximately 10 minutes
					</li>
					<li>
						<span> Preparation: </span>5 minutes
					</li>
					<li>
						<span> Cooking: </span>5 minutes
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Preparation;
