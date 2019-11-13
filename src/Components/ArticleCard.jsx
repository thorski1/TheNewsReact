import React from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { useArticleCardStyles } from "../Hooks/useArticleCardStyles";
import { GrayedCard } from "../Pose/GrayedCard";
import { Button } from "@material-ui/core";
import { HoverPress } from "../Pose/HoverPress";

export default function ArticleCard(props) {
	const classes = useArticleCardStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};
	const {
		title,
		author,
		description,
		url,
		urlToImage,
		content
	} = props;
	return (
		<GrayedCard>
			<HoverPress>
				<Card className={classes.card} raised>
					<a href={url} className={classes.link}>
						<CardHeader
							title={title}
							subheader={author ? `by ${author}` : ""}
							className={classes.header}
						/>

						<CardMedia
							className={classes.media}
							image={
								urlToImage
									? urlToImage
									: "/assets/BackupImage.jpg"
							}
							title={title}
						/>

						<CardContent>
							<Typography
								variant="body2"
								color="textSecondary"
								component="p"
							>
								{description}
							</Typography>
						</CardContent>
					</a>
					<CardActions disableSpacing>
						<IconButton
							className={clsx(classes.expand, {
								[classes.expandOpen]: expanded
							})}
							onClick={handleExpandClick}
							aria-expanded={expanded}
							aria-label="show more"
						>
							<ExpandMoreIcon fontSize="large" />
						</IconButton>
					</CardActions>
					<Collapse
						in={expanded}
						timeout="auto"
						unmountOnExit
					>
						<CardContent>
							<Typography paragraph>
								{content ? content.slice(0, -13) : ""}
								<br />
								<a href={url} className={classes.link}>
									<Button
										variant="outlined"
										color="primary"
										className={classes.button}
									>
										Read More
									</Button>
								</a>
							</Typography>
						</CardContent>
					</Collapse>
				</Card>
			</HoverPress>
		</GrayedCard>
	);
}
