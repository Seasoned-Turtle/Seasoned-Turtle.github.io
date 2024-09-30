// scripts.js
$(document).ready(function() {
    function loadProjects() {
        $.getJSON('projects.json', function(data) {
            const projectsContainer = $('.grid-container', $('#projects'));
            projectsContainer.empty();

            data.forEach(project => {
                const card = `
                    <div class="card">
                        <h3>${project.title}</h3>
                        <p>${project.description}</p>
                        <a href="${project.link}" target="_blank">查看详情</a>
                    </div>
                `;
                projectsContainer.append(card);
            });
        });
    }

    function loadArticles() {
        $.getJSON('articles.json', function(data) {
            const articlesContainer = $('.grid-container', $('#articles'));
            articlesContainer.empty();

            data.forEach(article => {
                const card = `
                    <div class="card">
                        <h3>${article.title}</h3>
                        <p>${article.summary}</p>
                        <a href="${article.link}" target="_blank">阅读文章</a>
                    </div>
                `;
                articlesContainer.append(card);
            });
        });
    }

    // 初始化加载
    loadProjects();
    loadArticles();
});
