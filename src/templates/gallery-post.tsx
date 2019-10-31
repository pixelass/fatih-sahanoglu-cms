import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import {graphql} from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import InViewMonitor from "react-inview-monitor";
import ModularText from "../components/modular-text";
const PreviewImg = ({isVisible, imageInfo,  ...props}) => <PreviewCompatibleImage imageInfo={imageInfo} {...props}/>
const Img = styled(PreviewImg)<{isVisible?: boolean}>`
	position: relative;
	z-index: 1;
	transition-property: transform, opacity;
	transition-duration: 0.35s, 0.35s;
	transition-timing-function: ease-in-out, ease-in-out;
	opacity: ${props => (props.isVisible ? 1 : 0)};
	transform: ${props => (props.isVisible ? "translate3d(0,0,0)" : "translate3d(0,24rem,0)")};
	width: 100%;
	height: auto;
`;

const Fold = styled.div`
	margin: 0;
	position: relative;
`;

const Gallery = styled.div`
	max-width: 80rem;
	margin: auto;
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 1rem;
	@media (min-width: 30rem) {
		grid-template-columns: 1fr 1fr;
	}
`;

const Tile = styled.div`
	display: inline-flex;
	width: 100%;
	align-self: center;

	.IVmonitor {
		width: 100%;
	}
`;

export const GalleryPostTemplate = ({tags, title, gallery, helmet}) => {
	console.log(gallery);
	return (
		<Fold>
			{helmet || null}
			<ModularText as="h1" minFontSize={48} maxFontSize={72}>
				{title}
			</ModularText>
			<Gallery>
				{gallery.map(({image, text}, i) => {
					return (
					<Tile key={i}>
						<InViewMonitor
							childPropsInView={{isVisible: true}}
							classNameNotInView="IVmonitor"
							classNameInView="IVmonitor">
							<Img
								imageInfo={{
									image,
									alt: text
								}}
							/>
						</InViewMonitor>
					</Tile>
				)})}
			</Gallery>
		</Fold>
	);
};

const GalleryPost = ({data}) => {
	const {markdownRemark: post} = data;
	return (
		<Layout>
			<GalleryPostTemplate
				helmet={
					<Helmet titleTemplate="%s | Gallery">
						<title>{`${post.frontmatter.title}`}</title>
						<meta name="description" content={`${post.frontmatter.description}`} />
					</Helmet>
				}
				tags={post.frontmatter.tags}
				gallery={post.frontmatter.gallery}
				title={post.frontmatter.title}
			/>
		</Layout>
	);
};

GalleryPost.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.object
	})
};

export default GalleryPost;

export const pageQuery = graphql`
	query GalleryPostByID($id: String!) {
		markdownRemark(id: {eq: $id}) {
			id
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				title
				description
				tags
				gallery {
					image
					text
				}
			}
		}
	}
`;
