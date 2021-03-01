export const register = (seconds, feed, callback) => {
    let feedId = 0;
    setInterval(() => {
        callback(`new feed from ${feed} - ${++  feedId}`);
    }, seconds * 1000);
}
