const formatDate = (d) => {
    const date = new Date(d);
    return date.toDateString();
};

export default formatDate;