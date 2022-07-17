import { showCards } from "../Model/Card.js";
const apiKey = 'f5b5440fd2994ecdaf90d770b0373fa0';

export function getNews(keyword) {
	const url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=${apiKey}`;
	return fetch(url).then(res => res.json())
		.then(res => {
			const data = res.articles;
			console.log(data);
			let cards = '';
			data.forEach(m => cards += showCards(m));
			const newsContainer = document.getElementById("app");
			newsContainer.innerHTML = cards;
		})
}
