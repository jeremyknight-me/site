let jkPortfolio = {
    root: "https://api.github.com",
    includedRepositoryNames: [
        "photocollage",
        "family-games",
        "tip-calc",
        "fontviewer",
        "presentations",
        "JK.Common",
        "scripts"
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
                            <i class="bi bi-calendar3"></i> Last Commit: ${this.getUpdatedTimeElapsed(repo.pushed_at)} ago
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
    },
    getUpdatedTimeElapsed: function(updated) {
        var updatedDate = new Date(updated);
        var nowDate = new Date();
        var diff = nowDate.getTime() - updatedDate.getTime();
        return humanizeDuration(diff, { largest: 2, units: [ 'y', 'mo', 'd', 'h', 'm', 's' ] });
    }

};

export { jkPortfolio as default };
