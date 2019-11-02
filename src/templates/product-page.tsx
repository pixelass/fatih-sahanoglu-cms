import React from "react";
import PropTypes from "prop-types";
import {graphql} from "gatsby";
import Layout from "../components/Layout";

export const ProductPageTemplate = props => <div className="content"></div>;

const ProductPage = ({data}) => {
	const {frontmatter} = data.markdownRemark;

	return (
		<Layout>
			<ProductPageTemplate />
		</Layout>
	);
};

ProductPage.propTypes = {
	data: PropTypes.shape({
		markdownRemark: PropTypes.shape({
			frontmatter: PropTypes.object
		})
	})
};

export default ProductPage;

export const productPageQuery = graphql`
	query ProductPage($id: String!) {
		markdownRemark(id: {eq: $id}) {
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
				}
			}
		}
	
`;
