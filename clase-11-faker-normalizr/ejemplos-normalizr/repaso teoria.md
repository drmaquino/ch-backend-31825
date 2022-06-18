persona {
    nombre
    apellido
    direccion {
        calle
        numero
        cp
    }
}


=================================

persona {
    nombre
    apellido
    direccion: 'abc'
}

direccion {
    id: 'abc'
    calle
    numero
    cp
}

==================================

mensaje {
    autor: 'marian'
    texto: 'hola'    
}

==>

mensaje {
    autor: {
        email: 'marian@profe.com'
        nombre: 'marian'
        apellido: 'yo'
        dni: '123'
        avatar: 'http://blabla.png'
    }
    texto: 'hola'    
}

==>

mensaje {
    autor: 'xyz'
    texto: 'hola'    
}

autor: {
    id: 'xyz'
    email: 'marian@profe.com'
    nombre: 'marian'
    apellido: 'yo'
    dni: '123'
    avatar: 'http://blabla.png'
}

=======================================
[
    mensaje {
        autor: {
            email: 'marian@profe.com'
            nombre: 'marian'
            apellido: 'yo'
            dni: '123'
            avatar: 'http://blabla.png'
        }
        texto: 'hola'    
    }

    mensaje {
        autor: {
            email: 'marian@profe.com'
            nombre: 'marian'
            apellido: 'yo'
            dni: '123'
            avatar: 'http://blabla.png'
        }
        texto: 'como estas?'    
    }
]

==>

# mensajes
[
    mensaje {
        autor: 'xyz'
        texto: 'hola'    
    }

    mensaje {
        autor: 'xyz'
        texto: 'como estas?'    
    }
]

# autores
[
    autor: {
        id: 'xyz'
        email: 'marian@profe.com'
        nombre: 'marian'
        apellido: 'yo'
        dni: '123'
        avatar: 'http://blabla.png'
    }
]