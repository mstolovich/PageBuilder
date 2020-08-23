export class Site {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    render(model) {
        model.forEach(block => {
            const html = block.toHTML()
            this.$el.insertAdjacentHTML('beforeend', html)
        });
    }
}