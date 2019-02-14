const router = require("express").Router();
const Nightmare = require('nightmare');
const vo = require('vo')
const URL = 'https://grocery.walmart.com/';


// Matches with "/api/walmart/cartLoad"
router.post('/cartLoad', (req, res) => {
    vo(run(req.body))(function () {
        res.json("Cart Loaded!")
    });
})

function* run(items) {
    const nightmare = Nightmare({
        show: false
    });
    for (let i = 0; i < items.length; i++) {
        yield nightmare
            .goto(items[i].url)
        if (i > 0 && items[i].url === items[i -1].url) {
            yield nightmare
                .refresh()
                .wait('.addToCartTile__iconPlusThin___229Vc')
                .click('.addToCartTile__iconPlusThin___229Vc')
        } else {
            yield nightmare
                .wait('.addToCartTile__buttonAddToCart___2m2Zq')
                .click('.addToCartTile__buttonAddToCart___2m2Zq')
        }
    }
    yield nightmare
        .end()
        .catch((error) => {
            console.error('an error has occurred: ' + error);
            res.send(error)
        })
        .then(() => (console.log('process exit'), res.send("process exit")));
}
module.exports = router;