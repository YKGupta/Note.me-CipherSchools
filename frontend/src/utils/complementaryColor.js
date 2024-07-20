const complementaryColor = (color) => {
    const firstParenthesis = color.indexOf("(");
    const comma = color.indexOf(",", firstParenthesis);
    const comma2 = color.indexOf(",", comma+1);
    const comma3 = color.indexOf(",", comma2+1);
    const red = Number.parseInt(color.substring(firstParenthesis+1, comma));
    const blue = Number.parseInt(color.substring(comma + 1, comma2));
    const green = Number.parseInt(color.substring(comma2+1, comma3));
    return `rgba(${255-red},${255-green},${255-blue}${color.substring(comma3)}`;
}

export default complementaryColor;