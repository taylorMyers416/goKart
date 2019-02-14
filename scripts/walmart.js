const Nightmare = require('nightmare');
const nightmare = Nightmare({
    show: true
});

const URL = 'https://grocery.walmart.com/';

module.exports = {
    cartLoad: () => {
        nightmare
            .goto(URL)
            .wait(20000)
            .end()
            .catch((error) => {
                console.error('an error has occurred: ' + error);
            })
            .then(() => (console.log('process exit'), process.exit()));
    }
}