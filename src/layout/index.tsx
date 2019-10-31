import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {Link} from "gatsby";
import styled from "styled-components";
import ModularText from "../components/modular-text";
import FatihSahanoglu from "../components/fatih-sahanoglu";
import Kellerkind from "../components/kellerkind";

const Email = styled.div`
	grid-area: Email;
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;
	text-align: center;
	font-family: Magneta, serif;
	background: hsl(105, 75%, 15%);
	color: white;
`;

const Company = styled.div`
	grid-area: Company;
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;
	text-align: center;
	background: hsl(105, 75%, 15%);
	color: white;
`;

const Nav = styled.nav`
	grid-area: Imprint;
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;
	text-align: center;
	background: hsl(105, 75%, 15%);
	color: white;
`;

const Navlink = styled(Link)`
	color: currentColor;
	text-decoration: none;
`;



const Copyright = styled.div`
	grid-area: Copyright;
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;
	text-align: center;
	background: hsl(105, 75%, 15%);
	color: white;
`;

export default ({children}) => {
	const year = React.useMemo(() => new Date().getFullYear(), []);
	return (
		<React.Fragment>
			<Navbar />
			{children}
			<Footer>
				<Email>
					<ModularText minFontSize={16} maxFontSize={48}>
						info@kellerkind.com
					</ModularText>
				</Email>
				<Company>
					<Kellerkind />
				</Company>
				<Nav>
					<Navlink to="/impressum">Impressum</Navlink>
				</Nav>
				<Copyright>
					© {year} <FatihSahanoglu />
				</Copyright>
			</Footer>
		</React.Fragment>
	);
};
