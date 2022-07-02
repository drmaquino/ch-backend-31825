import passport from 'passport'
import { Strategy } from 'passport-local'

import { obtenerUsuarioPorId } from '../persistencia/usuarios.js'

import { registrarUsuario } from '../api/usuariosApi.js'
import { autenticar } from '../api/authApi.js'

passport.use('registro', new Strategy({
    passReqToCallback: true,
    // usernameField: 'email',
    // passwordField: 'contrasenia',
},
    (req, username, password, done) => {
        try {
            const datosUsuario = req.body
            const usuario = registrarUsuario(req.body)
            done(null, usuario)
            // done(null, usuario, info) // donde info es un objeto, opcional
        } catch (error) {
            done(error)
            // done(error, null, info) // donde info es un objeto, opcional
        }
    }))

passport.use('login', new Strategy(
    (username, password, done) => {
        try {
            const usuario = autenticar(username, password)
            done(null, usuario)
        } catch (error) {
            done(null, false)
        }
    }))

export const passportMiddleware = passport.initialize()

// opcional =====================================================

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    try {
        const user = obtenerUsuarioPorId(id)
        done(null, user)
    } catch (error) {
        done(error)
    }
})

export const passportSessionHandler = passport.session()
