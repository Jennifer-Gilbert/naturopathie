document.addEventListener("DOMContentLoaded", function() {
    const URL_PARAMS = new URLSearchParams(window.location.search);
    const ARTICLE_ID = URL_PARAMS.get("id");

    fetch(`./scripts/articles.json`)
    .then(response => response.json())
    .then(articles => {
        const ARTICLE = articles.find(article => article.id == ARTICLE_ID);

        if (ARTICLE) {
            document.querySelector("#article_date").textContent = ARTICLE.date;
            document.querySelector("#article_readtime").textContent = ARTICLE.readTime;
            document.querySelector("#article_title").textContent = ARTICLE.title;
            document.querySelector("#article_image").src = ARTICLE.imgSrc;
            document.querySelector("#article_content").textContent = ARTICLE.content;
            document.querySelector("#article_content2").textContent = ARTICLE.content2;
            document.querySelector("#article_content3").textContent = ARTICLE.content3;
            document.querySelector("#article_content4").textContent = ARTICLE.content4;
            document.querySelector("#article_content5").textContent = ARTICLE.content5;
        } else {
            document.getElementById("article_details").innerHTML = "<p>Article introuvable</p>";
        }
    })
    .catch(error => console.error("Erreur lors du chargement de l'article: ", error));
})
