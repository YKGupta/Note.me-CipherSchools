const generateRandomColor = (threshhold = 100, alpha = 0.4) => {
    const maxRange = 256 - threshhold;
    const red = threshhold + Math.floor(Math.random() * maxRange);
    const green = threshhold + Math.floor(Math.random() * maxRange);
    const blue = threshhold + Math.floor(Math.random() * maxRange);
    return `rgba(${red},${green},${blue},${alpha})`;
};

export default generateRandomColor;