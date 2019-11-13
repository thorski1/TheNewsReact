import posed from "react-pose";

export const GrayedCard = posed.div({
	hoverable: true,
	init: { filter: "grayscale(90%)" },
	hover: { filter: "grayscale(0%)" }
});
