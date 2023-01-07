import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Featured = () => {
	const [index, setIndex] = useState(0);
	const images = ["/img/pizza2.png", "/img/pizza2.png", "/img/pizza2.png"];

	const handleArrow = (direction) => {
		if (direction === "l") {
			setIndex(index !== 0 ? index - 1 : 2);
		}
		if (direction === "r") {
			setIndex(index !== 2 ? index + 1 : 0);
		}
	};

	return (
		<div className={styles.container}>
			<div
				className={styles.arrowContainer}
				style={{ left: 0 }}
				onClick={() => handleArrow("l")}
			>
				<IoIosArrowBack className="text-5xl font-bold text-white" />
			</div>
			<div
				className={styles.wrapper}
				style={{ transform: `translateX(${-100 * index}vw)` }}
			>
				{images.map((img, i) => (
					<div className={styles.imgContainer} key={i}>
						<Image src={img} alt="" fill style={{ objectFit: "contain" }} />
					</div>
				))}
			</div>
			<div
				className={styles.arrowContainer}
				style={{ right: 0 }}
				onClick={() => handleArrow("r")}
			>
				<IoIosArrowForward className="text-5xl font-bold text-white" />
			</div>
		</div>
	);
};

export default Featured;
