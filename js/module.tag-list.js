let jkTagList = {
    init: function() {
        document.getElementById('tag-search').addEventListener('input', this.handleInput);
    },
    handleInput: function(e) {
        const search = document.getElementById('tag-search').value;
        const nodes = document.querySelectorAll('div#tag-list a span');
        nodes.forEach(node => {
            if (node.innerText.includes(search)) {
                node.classList.remove('bg-light');
                node.classList.add('bg-primary');
            } else {
                node.classList.remove('bg-primary');
                node.classList.add('bg-light');
            }
        });
    }
};

export { jkTagList as default };