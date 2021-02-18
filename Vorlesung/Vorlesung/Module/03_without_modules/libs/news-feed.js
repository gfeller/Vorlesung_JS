function register(feed, callback) {
    let feedId = 0;
    setInterval(() => {
        callback(feedId++);
    }, 5000);
}
