import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { BsTelephoneInboundFill, BsCart3 } from "react-icons/bs";

const NavBar = () => {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<div className={styles.callButton}>
					<BsTelephoneInboundFill className="w-[32px] h-[32px] text-gray-500" />
				</div>
				<div className={styles.texts}>
					<div className={styles.text}>ORDER NOW!</div>
					<div className={styles.text}>012 345 678</div>
				</div>
			</div>
			<div className={styles.item}>
				<ul className={styles.list}>
					<li className={styles.listItem}>Homepage</li>
					<li className={styles.listItem}>Products</li>
					<li className={styles.listItem}>Menu</li>
					<Image
						src="/img/main.jpeg"
						alt=""
						width="100"
						height="50"
						className="rounded-md"
					/>
					<li className={styles.listItem}>Events</li>
					<li className={styles.listItem}>Blog</li>
					<li className={styles.listItem}>Contact</li>
				</ul>
			</div>
			<div className={styles.item}>
				<div className={styles.cart}>
					<BsCart3 className="w-[30px] h-[30px] text-white" />
					<div className={styles.counter}>2</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
