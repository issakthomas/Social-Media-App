import {
	House,
	CircleUserRound,
	Telescope,
	Cog,
	CirclePlus,
} from "lucide-react";
import "./Aside.css";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Aside = ({ other }) => {
	return (
		<aside>
			{!other ? (
				<div className="left">
					<section>
						<img src={logo} alt="" />
						<hr />
						<Link to={"/"} className="link">
							<House size={30} />
						</Link>
						<Link to={"/explore"} className="link">
							<Telescope size={30} />
						</Link>
						<Link to={"/profile"} className="link">
							<CircleUserRound size={30} />
						</Link>
					</section>
				</div>
			) : (
				<div className="right">
					<span>lyte</span>
					<hr />
					<Link to={"/settings"} className="link">
						<Cog size={30} />
					</Link>
					<Link to={"/settings"} className="link">
						<CirclePlus size={30} />
					</Link>
				</div>
			)}
		</aside>
	);
};

Aside.propTypes = {
	other: PropTypes.bool,
};

export default Aside;
