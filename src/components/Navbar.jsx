import { Link } from "react-router-dom"

const Navbar = () => {
	return (
		<div id="navbar">
			<Link to="/blue">BLUE</Link>
			<Link to="/red">RED</Link>
		</div>
	)
}

export default Navbar