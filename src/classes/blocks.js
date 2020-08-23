import {row, col} from '../utils'

export class Block {
    constructor(value, options){
        this.value = value;
        this.options = options;
    }
    toHTML(){
        throw new Error("you have to implement this method")
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML(){
        const {alt, styles, imageStyles} = this.options
        const html = `<img src="${this.value}" alt="${alt}" style="${imageStyles}"/>`
        return row(html, styles)
    }
}


export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML(){
        const {tag, styles} = this.options
        const html = `<${tag}>${this.value}</${tag}>`
        return row(col(html), styles)
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML(){
        const {styles} = this.options
        const html = `<p>${this.value}</p>`
        return row(col(html), styles)
    }
}

export class TextColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHTML(){
        const {styles} = this.options
        const html = this.value.map(item => col(item))
        return row(html.join(''), styles)
    }
}
