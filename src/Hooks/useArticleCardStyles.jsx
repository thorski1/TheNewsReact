import { makeStyles } from "@material-ui/core/styles";

export const useArticleCardStyles = makeStyles(theme => ({
	button: {
		margin: theme.spacing(1),
		marginTop: 40
	},
	card: {
		marginTop: 40,
		maxWidth: 380,
		backgroundColor: "#aec4c7"
	},
	header: {
		backgroundColor: "#e0f7fa"
	},
	media: {
		height: 0,
		paddingTop: "56.25%" // 16:9
	},
	expand: {
		transform: "rotate(0deg)",
		marginLeft: "auto",
		transition: theme.transitions.create("transform", {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: "rotate(180deg)"
	},
	link: {
		textDecoration: "none",
		color: "inherit"
	}
}));
