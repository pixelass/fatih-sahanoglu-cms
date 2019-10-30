import React from "react";
import {graphql, StaticQuery} from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import styled from "styled-components";
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Gallery = styled.div`
`;

const ThumbWrapper = styled.article`
	display: flex;
	height: 50vh;
	margin: 3rem;
`;


const Thumb = styled(PreviewCompatibleImage)`
	display: block;
	height: 50vmin;
	width: 30vmin;
`;

const Link = styled(AniLink)`
	display: block;
	height: 100%;
	width: auto;
	margin-right: 3rem;
`;

const Title = styled.h2`
	height: 100%;
	width: 100%;
	flex: 1;
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
									image: post.frontmatter.image,
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
								featuredpost
								image {
									childImageSharp {
										fluid(maxWidth: 120, quality: 100) {
											...GatsbyImageSharpFluid
										}
									}
								}
							}
						}
					}
				}
			}
		`}
		render={data => <GalleryRoll data={data} />}
	/>
);
