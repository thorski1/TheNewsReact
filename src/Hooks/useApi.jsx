import { useEffect, useState } from "react";

const useApi = topic => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		const MY_API_KEY = process.env.REACT_APP_NEWS_API_KEY;
		fetch(
			`https://newsapi.org/v2/top-headlines?${topic}&apiKey=${MY_API_KEY}`
		)
			.then(response => response.json())
			.then(articles => {
				setArticles(articles.articles);
				console.log(articles);
			})
			.catch(error => console.log(error));
	}, [topic]);

	return {
		articles,
		setArticles
	};
};

export default useApi;
