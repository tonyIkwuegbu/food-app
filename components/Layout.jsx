import Footer from "./Footer";
import Navbar from "./NavBar";

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;
