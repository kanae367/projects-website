export const preloadImage = (imgSrc: string) => {
    const image = new Image();
    image.src = imgSrc;
    image.addEventListener('load', () => console.log('image loaded, src: ' + imgSrc));
} 