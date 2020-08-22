import {row, col} from './utils'

function title(block) {
    return row(col(`<h1>${block.value}</h1>`))
}

function text(block) {
    return row(col(`<p>${block.value}</p>`))
}

function textColumns(block) { 
    const html = block.value.map(item => col(item))
    return row(html.join(''))
}

export const templates ={title, text, textColumns}