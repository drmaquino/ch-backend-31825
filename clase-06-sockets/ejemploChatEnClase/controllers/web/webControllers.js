function webGetController(req, res) {
    res.sendFile('index.html', { root: './views' })
}

module.exports = {
    webGetController
}