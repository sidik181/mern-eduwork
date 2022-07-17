export function showCards(m) {
	return `<div class="col-md-4 my-3
						<div class="card" style="width: 18rem;">
							<img src="${m.urlToImage}" class="card-img-top" alt="Thumbnail ">
							<div class="card-body">
								<h5 class="card-title">${m.title}</h5>
								<span class="author">${m.author} - ${m.publishedAt}</span>
								<p class="card-text mt-1">${m.description}</p>
								<a href="${m.url}" target="_blank"class="btn btn-primary">Read more</a>
							</div>
						</div>
					</div>`
}
