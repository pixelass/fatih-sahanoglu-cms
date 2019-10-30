import React from "react";
import styled from "styled-components";
import tree from "./tree";
const Svg = styled.svg`
	height: 100%;
	width: 100%;
`;
const Logo = props =>  <Svg {...props} viewBox="0 0 320 427">
	<path fill="currentColor" d={tree}/>
</Svg>

export default Logo;
