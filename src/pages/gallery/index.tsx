import React from "react";
import Layout from "../../components/Layout";
import GalleryRoll from "../../components/GalleryRoll";

export default class BlogIndexPage extends React.Component {
	render() {
		return (
			<Layout>
				<div>
					<h1>Galleries</h1>
				</div>
				<section className="section">
					<div className="container">
						<div className="content">
							<GalleryRoll />
						</div>
					</div>
				</section>
			</Layout>
		);
	}
}
