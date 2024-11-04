function readDate(timestamp) {
    const date = new Date(timestamp * 1000); // Convert to milliseconds
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-GB', options);
    return formattedDate;
}

export {readDate};