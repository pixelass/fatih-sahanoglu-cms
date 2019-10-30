import {easeIn, easeInOut, easeOut} from "@popmotion/easing";
import {Stickyroll} from "@stickyroll/stickyroll";
import {graphql} from "gatsby";
import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Logo from "../components/logo";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const Background = styled(PreviewCompatibleImage)`
	z-index: 0;
	width: 100vw;
	height: 100vh;
	margin: 0;
	padding: 0;
	object-fit: cover;
	object-position: 50% 50%;
`;

const Fold = styled.section`
	margin: -3rem 0 -3rem;
	position: relative;
`;

const Stick = styled.div<{
	style?: React.CSSProperties & {
		"--x"?: string | number;
	};
}>`
	--min-font-size: 40;
	--max-font-size: 120;
	--min-width: 320;
	--max-width: 1280;
	z-index: 1;
	overflow: hidden;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	height: 100vh;
	width: max-content;
	min-width: 100vw;
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;
	color: white;
	transform: translate3d(calc(var(--x, 0) * (-1% + 1vw)), 0, 0);
	margin: 0;
	padding: 3rem 0;
	line-height: 1;
	font-family: FatihSans, sans-serif;
	font-size: calc(
		var(--min-font-size) * 1px + (var(--max-font-size) - var(--min-font-size)) *
			((100vw - var(--min-width) * 1px) / (var(--max-width) - var(--min-width)))
	);
`;

const Content = styled.section`
	margin: 3rem auto -3rem;
	padding: 2rem 1rem;
	font-family: FatihSans, sans-serif;
	font-size: 5rem;
	max-width: 80rem;
	position: relative;
	min-height: 50vh;
`;

const LogoWrapper = styled.div<{
	style?: React.CSSProperties & {
		"--offset"?: string | number;
		"--scale"?: string | number;
	};
}>`
	height: 427px;
	max-height: 100vh;
	max-width: 100vw;
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate3d(-50%, calc(var(--offset, 0) * (-50vh + 12.5%) - 50%), 0)
		scale3d(var(--scale, 1), var(--scale, 1), 1);
`;

const TextLogo = styled.h1<{
	style?: React.CSSProperties & {
		"--offset"?: string | number;
	};
}>`
	--min-font-size: 30;
	--max-font-size: 90;
	--min-width: 320;
	--max-width: 1280;
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: flex-end;
	margin: 0;
	line-height: 1;
	transform: translate3d(0, calc(var(--offset, 0) * -50vh), 0);
	font-family: magneta, serif;
	font-size: calc(
		var(--min-font-size) * 1px + (var(--max-font-size) - var(--min-font-size)) *
			((100vw - var(--min-width) * 1px) / (var(--max-width) - var(--min-width)))
	);
`;

const TextLogoSub = styled.h2<{
	style?: React.CSSProperties & {
		"--offset"?: string | number;
	};
}>`
	--min-font-size: 10;
	--max-font-size: 30;
	--min-width: 320;
	--max-width: 1280;
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: flex-end;
	margin: 0;
	line-height: 1;
	transform: translate3d(0, calc(var(--offset, 0) * -50vh), 0);
	font-family: FatihSans, sans-serif;
	font-size: calc(
		var(--min-font-size) * 1px + (var(--max-font-size) - var(--min-font-size)) *
			((100vw - var(--min-width) * 1px) / (var(--max-width) - var(--min-width)))
	);
`;

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	align-content: flex-end;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: max-content;
`;

export const IndexPageTemplate = ({image, title, heading, subheading, mainpitch, description, intro}) => {
	return (
		<React.Fragment>
			<Fold>
				<Stickyroll pages={1}>
					{({page, pageIndex, pages, progress}) => (
						<React.Fragment>
							<Background imageInfo={{image, alt: title}} />
							<Stick>{progress}</Stick>
						</React.Fragment>
					)}
				</Stickyroll>
			</Fold>
			<Content>
				<h3>{mainpitch.title}</h3>
				<p>{mainpitch.description}</p>
			</Content>
		</React.Fragment>
	);
};

const IndexPage = ({data}) => {
	const {frontmatter} = data.markdownRemark;

	return (
		<Layout>
			<IndexPageTemplate
				image={frontmatter.image}
				title={frontmatter.title}
				heading={frontmatter.heading}
				subheading={frontmatter.subheading}
				mainpitch={frontmatter.mainpitch}
				description={frontmatter.description}
				intro={frontmatter.intro}
			/>
		</Layout>
	);
};

export default IndexPage;

export const pageQuery = graphql`
	query IndexPageTemplate {
		markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
			frontmatter {
				title
				image {
					childImageSharp {
						fluid(maxWidth: 2048, quality: 100) {
							...GatsbyImageSharpFluid
						}
					}
				}
				heading
				subheading
				mainpitch {
					title
					description
				}
				description
				intro {
					blurbs {
						image {
							childImageSharp {
								fluid(maxWidth: 240, quality: 64) {
									...GatsbyImageSharpFluid
								}
							}
						}
						text
					}
					heading
					description
				}
			}
		}
	}
`;
