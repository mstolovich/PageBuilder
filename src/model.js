import image from './assets/music.jpg'
import {ImageBlock, TitleBlock, TextBlock, TextColumnsBlock} from './classes/blocks'

export const model = [
    new TitleBlock('VanillaJS Page Builder', {
        tag: 'h4',
        styles: 'background: grey; color: #FFF; text-align: center;'
    }),
    new ImageBlock(image, {
        styles: 'padding: 2rem 0; display: flex; justify-content: center;',
        alt: "elements of music",
        imageStyles: "width: 500px; height: auto;"
    }),
    new TextBlock('Fastest and highly well architected page builder', {
        styles: 'background: lightgrey; color: black; padding: 1rem;'
    }), 
    new TextColumnsBlock([
        'text 1',
        'text 2',
        'text 3' 
    ], {
        styles: 'padding: 1rem'
    })
    
   
]