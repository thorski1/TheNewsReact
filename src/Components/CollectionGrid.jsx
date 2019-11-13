import React from "react";
import uuid from "react-uuid";
import { Grid } from "@material-ui/core";

import useApi from "../Hooks/useApi";
import { useCollectionGridStyles } from "../Hooks/useCollectionGridStyles";
import ArticleCard from "./ArticleCard";

export const CollectionGrid = props => {
	const { articles } = useApi(props.topic);
	const classes = useCollectionGridStyles();

	return (
		<div className="App">
			<Grid container className={classes.root} spacing={2}>
				<Grid item xs={8}>
					<Grid container justify="center" spacing={8}>
						{articles.map(article => {
							const {
								title,
								author,
								description,
								url,
								urlToImage,
								content
							} = article;
							return (
								<Grid key={uuid()} item>
									
										<ArticleCard
											title={title}
											author={author}
											description={description}
											url={url}
											urlToImage={urlToImage}
											content={content}
										/>
									
								</Grid>
							);
						})}
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};
