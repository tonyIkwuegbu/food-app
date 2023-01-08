import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
	return (
		<div
			className={`${styles.container} shadow-lg bg-slate-100 m-4 hover:scale-105 transition-transform duration-700 ease-in-out`}
		>
			<Image src="/img/pizza2.png" alt="" width="500" height="500" />
			<h1 className={styles.title}>FIORI DI ZUCCA</h1>
			<span className={styles.price}>$19.90</span>
			<p className={styles.desc}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</p>
		</div>
	);
};

export default PizzaCard;
