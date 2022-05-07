const controladoresWeb = {
    root: (req, res) => {
        res.redirect('/inicio');
    },
    inicio: (req, res) => {
        res.sendFile('inicio.html', { root: './views' });
    },
    perfil: (req, res) => {
        res.sendFile('perfil.html', { root: './views' });
    }
}

module.exports = { controladoresWeb }
