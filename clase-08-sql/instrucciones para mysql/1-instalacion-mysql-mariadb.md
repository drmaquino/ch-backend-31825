# Instalar mysql en un contenedor docker:

## Muestra las versiones disponibles
    docker search mysql 

## Descarga la imagen elegida
    docker pull mysql

## Crea y ejecuta el contenedor
    docker run \
        --name <nombre_del_contenedor> \
        -e MYSQL_ROOT_PASSWORD=<contraseña> \
        -p 3306:3306 \
        -d docker.io/library/mysql

## Ejemplo
    docker run \
        --name drm-mysql-2 \
        -e MYSQL_ROOT_PASSWORD=mysqlpassword \
        -p 3307:3306 \
        -d mysql

------------------------------------------------

# Instalar mariadb en un contenedor docker

## Muestra las versiones disponibles
    docker search mariadb 

## Descarga la imagen elegida
    docker pull mariadb

## Crea y lanza el contenedor
    docker run --name drm-mariadb -e MYSQL_ROOT_PASSWORD=mymariadbpassword -p 3306:3306 -d mariadb

------------------------------------------------

# Instalar mysql (local en ubuntu):
https://platzi.com/tutoriales/1566-bd/8226-como-instalar-mysql-y-workbench-en-ubuntu-sin-morir-en-el-intento/

### Yo acá elegí como password:
> mysqlpassword

## Para operar con el servicio de mysql por la terminal:
    sudo /etc/init.d/mysql [ start | stop | status ]

ó

    sudo systemctl [ start | stop | status ] mysql.service
