import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
	return (
		<>
			<div className="foot">
				<a href="/">
					<FacebookIcon />
				</a>
				<a href="/">
					<LinkedInIcon />
				</a>
				<a href="/">
					<InstagramIcon />
				</a>
			</div>
		</>
	);
};

export default Footer;
