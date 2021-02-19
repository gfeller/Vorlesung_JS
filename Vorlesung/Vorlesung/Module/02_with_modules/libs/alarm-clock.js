// alarm-clock.js
export const register = (seconds, message, callback) => {
    setTimeout(() => {
        callback(message);
    }, seconds * 1000);
}
