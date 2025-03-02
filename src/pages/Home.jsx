import { CircleUserRound, Heart, MessageCircle } from "lucide-react";
import "./Home.css";
import img from "../assets/me.jpeg";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	return (
		<div className="home">
			<section data-aos="fade-up">
				<div className="card">
					<div className="top">
						<CircleUserRound />
						issakthomas
					</div>
					<div className="middle">
						<img src={img} />
					</div>
					<div className="bottom">
						<div className="caption">skibidi ohio 😭</div>
						<div className="interactions">
							<Heart color="#ffffff" />
							<span>55</span>
							<MessageCircle color="#ffffff" />
							<span>32</span>
						</div>
						<div className="comments">
							<div className="comment">
								<span
									className="user"
									onClick={() =>
										navigate("/profile/username")
									}
								>
									bomberladen_911
								</span>{" "}
								<span className="text">sheeshh!! ✈️💥</span>
							</div>
							<div className="comment">
								<span
									className="user"
									onClick={() =>
										navigate("/profile/username")
									}
								>
									thehitler
								</span>{" "}
								<span className="text">🔥🔥</span>
							</div>
						</div>
					</div>
				</div>
				<div className="card">
					<div className="top">
						<CircleUserRound />
						issakthomas
					</div>
					<div className="middle">
						<img src={img} />
					</div>
					<div className="bottom">
						<div className="caption">skibidi ohio 😭</div>
						<div className="interactions">
							<Heart color="#ffffff" />
							<span>55</span>
							<MessageCircle color="#ffffff" />
							<span>32</span>
						</div>
						<div className="comments">
							<div className="comment">
								<span
									className="user"
									onClick={() =>
										navigate("/profile/username")
									}
								>
									bomberladen_911
								</span>{" "}
								<span className="text">sheeshh!! ✈️💥</span>
							</div>
							<div className="comment">
								<span
									className="user"
									onClick={() =>
										navigate("/profile/username")
									}
								>
									thehitler
								</span>{" "}
								<span className="text">🔥🔥</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
