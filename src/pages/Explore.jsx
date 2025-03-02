import "./Explore.css";
import img from "../assets/me.jpeg";
import { Search } from "lucide-react";

const Explore = () => {
	return (
		<div className="explore">
			<div className="search" data-aos="fade-up">
				<input
					type="text"
					placeholder="Please enter the username to search"
				/>
				<Search className="icon" />
			</div>
			<div className="posts" data-aos="fade-up">
				<img src={img} alt="" />
				<img src={img} alt="" />
				<img src={img} alt="" />
				<img src={img} alt="" />
				<img src={img} alt="" />
				<img src={img} alt="" />
				<img src={img} alt="" />
				<img src={img} alt="" />
				<img src={img} alt="" />
				<img src={img} alt="" />
				<img src={img} alt="" />
				<img src={img} alt="" />
			</div>
		</div>
	);
};

export default Explore;
