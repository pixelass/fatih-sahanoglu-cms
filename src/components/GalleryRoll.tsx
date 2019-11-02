import React from "react";
import {graphql, StaticQuery} from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Gallery = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 2px;
`;

const ThumbWrapper = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;


const Thumb = styled(PreviewCompatibleImage)`
	display: block;
	width: 100%;
`;

const Link = styled(AniLink)`
	display: block;
`;

const Title = styled.h2`
	font-family: Magneta, serif;
`;

class GalleryRoll extends React.Component<any> {
	render() {
		const {data} = this.props;
		const {edges: posts} = data.allMarkdownRemark;
		return (
			<Gallery>
				{posts &&
					posts.map(({node: post}) => (
						<ThumbWrapper key={post.id}>
							<Link paintDrip color={"white"} to={post.fields.slug}>
							<Thumb
								imageInfo={{
									image: post.frontmatter.featuredimage,
									alt: `featured image thumbnail for post ${post.frontmatter.title}`
								}}
							/></Link>
							<Title>{post.frontmatter.title}</Title>
						</ThumbWrapper>
					))}
			</Gallery>
		);
	}
}

export default () => (
	<StaticQuery
		query={graphql`
			query GalleryRollQuery {
				allMarkdownRemark(
					sort: {order: DESC, fields: [frontmatter___date]}
					filter: {frontmatter: {templateKey: {eq: "gallery-post"}}}
				) {
					edges {
						node {
							excerpt(pruneLength: 400)
							id
							fields {
								slug
							}
							frontmatter {
								title
								templateKey
								date(formatString: "MMMM DD, YYYY")
								featuredimage
							}
						}
					}
				}
			}
		`}
		render={data => <GalleryRoll data={data} />}
	/>
);
