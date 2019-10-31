import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
	display: grid;
	grid-template-areas: "Email Email Email" "Company Imprint Copyright";
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 12rem 5rem;
	grid-gap: 2px;
	position: relative;
	width: 100%;
	margin: auto;
	max-width: 90rem;
	z-index: 10;
`;
export default Footer;
