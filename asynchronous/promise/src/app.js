import { getNews } from "../api/news.js";

window.onload = () => {
	const searchFieldElement = document.getElementById("searchField");
	searchFieldElement.onkeyup = (event) => {
		getNews(searchFieldElement.value);
	}
}
