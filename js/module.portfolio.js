let jkPortfolio = {
    root: "https://api.github.com",
    includedRepositoryNames: [
        "JK.Common",
        "photo-sync",
        "photocollage",
        "presentations",
        "scripts",
        "tip-calc"
    ], 
    init: async function() {
        let response = await fetch(`${this.root}/users/jeremyknight-me/repos`);
        let repos = await response.json();
        let app = document.querySelector("#github-repos");
        let html = "";
        for (let repo of repos) {
            if (repo.archived || !this.includedRepositoryNames.includes(repo.name)) {
                continue;
            }

            html += `
                <div class="card mt-3">
                    <div class="card-header">${repo.name}</div>
                    <div class="card-body">
                        <h6 class="card-subtitle text-muted mb-2">
                            <i class="bi bi-star-fill"></i> Stars: ${repo.stargazers_count}
                            <i class="bi bi-calendar3"></i> Updated: ${repo.updated_at}
                        </h6>
                        <p class="card-text">${repo.description}</p>
                        <a href="${repo.html_url}" class="card-link" target="_blank">View on GitHub</a>
                    </div>
                    <div class="card-footer">${this.getTopicHtml(repo.topics)}</div>
                </div>
            `;
        }

        app.innerHTML = html;
    },
    getTopicHtml: function(topics) {
        let html = "";
        for (let topic of topics) {
            html += `<span class="badge bg-light">${topic}</span> `;
        }
        return html;
    }

};

export { jkPortfolio as default };