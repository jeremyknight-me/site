let jkBlog = {
    init: function() {
        document.getElementById('blog-search').addEventListener('input', this.handleInput);
    },
    handleInput: function(e) {
        const search = document.getElementById('blog-search').value.toLowerCase();
        const nodes = document.querySelectorAll('div#blog-list div.col');
        const isInNode = (node, search) => node.innerText.toLowerCase().includes(search);
        const isInTitle = (node, search) => isInNode(node, search);
        const isInTags = (nodes, search) => Array.from(nodes).find(node => isInNode(node, search));
        for (let node of nodes) {
            const titleNode = node.querySelector('h5.card-title');
            const tagNodes = node.querySelectorAll('div.card-body a');
            if (isInTitle(titleNode, search) || isInTags(tagNodes, search)) {
                node.classList.remove('visually-hidden');
            } else {
                node.classList.add('visually-hidden');
            }
        }
    }
};

export { jkBlog as default };