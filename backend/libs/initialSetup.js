'use strict'

const Role = require("../models/Role");
const User = require("../models/User");
const Product = require("../models/Product")
const config = require("../config/config");


const data = {
    createRoles: async () => {
        try {
            const cont = await Role.estimatedDocumentCount();

            if (cont > 0) return;

            const values = await Promise.all([
                new Role({ name: "usuario" }).save(),
                new Role({ name: "owner" }).save(),
                new Role({ name: "empleado" }).save(),
                new Role({ name: "admin" }).save()
            ]);

            console.log(values)

        } catch (error) {
            console.log(error);
        }
    },
    createAdmin: async () => {
        try {

            const cont = await User.estimatedDocumentCount();

            if (cont > 0) return;

            let role = await Role.findOne({ name: { $in: "admin" } })
            role = role._id
            let password_hash = await User.encrypt(config.adminPassword)

            const values = await Promise.all([
                new User({
                    name: "Admin",
                    last_name: "Admin",
                    email: "admin@admin.com",
                    password_hash,
                    role
                }).save()
            ]);

            console.log(values)

        } catch (error) {
            console.log(error);
        }
    },
    createProducts: async () => {
        try {
            const cont = await Product.estimatedDocumentCount();

            if (cont > 0) return;

            const values = await Promise.all([
                new Product({
                    "name": "TOKYO REVENGERS 7",
                    "price": 16,
                    "description": "LA LUCHA DEFINITIVA ENTRE LA TOMAN Y LA WALHALLA Vuelve el manga del momento, con un nuevo volumen doble en el que una vez más, el pasado dependerá de las habilidades de Takemichi. Los intentos de nuestro protagonista para que no haya más víctimas han dado sus frutos hasta el momento, pero ¿seguirá siendo así? Además, Kisaki seguirá planeando nuevos movimientos que tendrán graves consecuencias en el presente… ¿preparado para un nuevo e impactante episodio?",
                    "short_description": "LA LUCHA DEFINITIVA ENTRE LA TOMAN Y LA WALHALLA",
                    "state": "new",
                    "stock": 50,
                    "categories": ["Shonen"],
                    "type": "manga",
                    "number_sales": 0,
                    "authors": "Ken Wakui",
                    "editorial": "NORMA Editorial",
                    "series": "TOKYO REVENGERS",
                    "comments": []
                }).save(),
                new Product({
                    "name": "Solo Leveling 5",
                    "price": 14,
                    "description": "YA ES OFICIAL: ¡ JINWOO ES EL NUEVO CAZADOR DE RANGO S DE COREA!Mientras espera a que la asociación confirme oficialmente su nuevo nivel, Jinwoo decide aprovechar el tiempo colaborando en algún raid que le permita obtener información y experiencia con la que derrotar a los demonios y subir de nivel. Pero no ha valorado el revuelo que se formará cuando se anuncie a un nuevo rango S… ",
                    "short_description": "YA ES OFICIAL: ¡ JINWOO ES EL NUEVO CAZADOR DE RANGO S DE COREA!",
                    "state": "new",
                    "stock": 56,
                    "categories": ["Seinen"],
                    "type": "manga",
                    "number_sales": 0,
                    "authors": "Chugong",
                    "editorial": "NORMA Editorial",
                    "series": "SOLO LEVELING",
                    "comments": []
                }).save(),
                new Product({
                    "name": "My Hero Academia nº 30 ",
                    "price": 6,
                    "description": "¿¡Se puede saber por qué está pasando esto!? Este gigantesco enemigo va dejando devastación a su paso. ¡Hay que informar a todos los demás; se están jugando la vida ahora mismo! Hay que conseguir rescatar al mayor número de personas posible. ¡Hay que protegerlos a todos! ¡Debo lograrlo por los compañeros caídos! ¡¡Plus ultra! ",
                    "short_description": "YA ES OFICIAL: ¡ MI HERO ACADEMIA 30 ESTA AQUI!",
                    "state": "new",
                    "stock": 20,
                    "categories": ["Shonen"],
                    "type": "manga",
                    "number_sales": 0,
                    "authors": "Kohei Horikoshi",
                    "editorial": "Planeta comic",
                    "series": "My Hero Academia",
                    "comments": []
                }).save(),
                new Product({
                    "name": "Sword Art Online progressive 03 ",
                    "price": 8,
                    "description": "Después de llegar al segundo piso de Aincrad, Asuna decide que un herrero controlado por un jugador mejore su espada, una rara Wind Fleuret, pero en el proceso sucede lo inimaginable, la espada se hace añicos ante sus ojos. Kirito sospecha que hay juego sucio y que el herrero le ha dado el cambiazo. ¿El herrero realmente acaba de destruir un artículo tan increíblemente valioso? Y si no, ¿hay alguna forma de recuperarlo? Y, si realmente hay una conspiración de ladrones, ¿cómo se le puede detener? ",
                    "short_description": "Después de llegar al segundo piso de Aincrad, Asuna decide que un herrero controlado por un jugador mejore su espada...",
                    "state": "old",
                    "stock": 40,
                    "categories": ["Shonen"],
                    "type": "novela ligera",
                    "number_sales": 0,
                    "authors": "Reki Kawahara",
                    "editorial": "Planeta comic",
                    "series": "Sword Art Online",
                    "comments": []
                }).save(),
                new Product({
                    "name": "Figura Funko POP! de Tanjiro Vs Rui de Kimetsu No Yaiba (15cm)",
                    "price": 38,
                    "description": "Esta figura siempre te hará recordar ese épico momento que tus amigos dirán de donde sacaste esta figura tan genial",
                    "short_description": "Figura de la pelea entre Tanjiro y el demonio Ryu",
                    "state": "old",
                    "stock": 6,
                    "categories": ["Kimetsu no Yaiba", "Funko POP"],
                    "type": "merchandising",
                    "number_sales": 0,
                    "series": "Kimetsu no Yaiba",
                    "comments": []
                }).save(),
                new Product({
                    "name": "Figura POP! DBZ S8 de Goku (First Appearance) de Dragon Ball",
                    "price": 18,
                    "description": "Si quieres ser como Goku esta figura te inspirara para que puedas tener un cuerpo como un verdadero Saiyajin ",
                    "short_description": "Figura de Goku Super Saiyan 1",
                    "state": "old",
                    "stock": 10,
                    "categories": ["Dragon Ball", "Funko POP"],
                    "type": "merchandising",
                    "number_sales": 0,
                    "series": "Dragon Ball",
                    "comments": []
                }).save(),
                new Product({
                    "name": "Camiseta de Goku pequeño",
                    "price": 10,
                    "description": "Con estas camisetas podrás ser muy fuerte como Goku si te encanta entrenar comer demasiado y ser muy amigable",
                    "short_description": "Camiseta sobre Son Goku",
                    "state": "new",
                    "stock": 60,
                    "categories": ["Dragon Ball", "Camisetas"],
                    "type": "merchandising",
                    "number_sales": 0,
                    "series": "Dragon Ball",
                    "comments": []
                }).save(),
                new Product({
                    "name": "Figura de Eren Jaeguer de Shingeki No Kyojin (15cm)",
                    "price": 40,
                    "description": "No te quedes sin esta fantástica figura de Eren de Shingeki No Kyojin y completa tu colección con Kokohai",
                    "short_description": "Figura sobre Eren",
                    "state": "old",
                    "stock": 10,
                    "categories": ["Shingeki no Kyojin", "Figuras"],
                    "type": "merchandising",
                    "number_sales": 0,
                    "series": "Shingeki no Kyojin",
                    "comments": []
                }).save()
            ]);

            console.log(values)

        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = data;