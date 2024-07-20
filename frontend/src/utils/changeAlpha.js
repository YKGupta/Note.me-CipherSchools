const changeAlpha = (color, alpha = 1) => {
    try{
        return color.substring(0, color.lastIndexOf(",")+1) + alpha + ")";
    }
    catch(err){
        return "";
    }
};

export default changeAlpha;