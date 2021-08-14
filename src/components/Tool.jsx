import React from "react";
import Box from "@material-ui/core/Box";
import { NavMenu, NavItem } from "@mui-treasury/components/menu/navigation";
import { usePointNavigationMenuStyles } from "@mui-treasury/styles/navigationMenu/point";
import { Font, FontProvider } from "website/src/components/Font";

export const PointNavigationMenuStyle = React.memo(
	function Tool() {
		const [index, setIndex] = React.useState(1);
		const handleClick = (i) => (e) => {
			e.preventDefault();
			setIndex(i);
		};
		return (
			<Box height={56} display={"flex"}>
				<FontProvider fonts={[{ font: "Varela Round" }]}>
					<NavMenu useStyles={usePointNavigationMenuStyles}>
						<NavItem as={"div"} active={index === 0} onClick={handleClick(0)}>
							<Font>Home</Font>
						</NavItem>
						<NavItem as={"div"} active={index === 1} onClick={handleClick(1)}>
							<Font>Shops</Font>
						</NavItem>
						<NavItem as={"div"} active={index === 2} onClick={handleClick(2)}>
							<Font>Portfolio</Font>
						</NavItem>
						<NavItem as={"div"} active={index === 3} onClick={handleClick(3)}>
							<Font>Blog</Font>
						</NavItem>
					</NavMenu>
				</FontProvider>
			</Box>
		);
	},
);
