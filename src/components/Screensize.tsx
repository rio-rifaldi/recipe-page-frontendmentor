import {useEffect, useState} from "react";

type Props = {};

function Screensize({}: Props) {
	const [size, setSize] = useState({
		width: window.innerWidth,
	});

	useEffect(() => {
		const screenHandler = () => {
			setSize({
				width: window.innerWidth,
			});
		};

		window.addEventListener("resize", screenHandler);
		return () => {
			window.removeEventListener("resize", screenHandler);
		};
	}, []);

	return <p className="absolute top- right-2 bg-black text-white ">{size.width}</p>;
}

export default Screensize;
