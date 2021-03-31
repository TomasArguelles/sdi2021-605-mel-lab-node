module.exports = function(app, swig) {

    app.get('/autores/agregar', function (req, res) {
        let respuesta = swig.renderFile('views/autores-agregar.html', {
        });
        res.send(respuesta);
    });

    app.get('/autores', function(req, res) {
        let autores = [ {
            "nombre" : "TTT",
            "grupo" : "1zdvzdv",
            "rol" : "cantante"
        }, {
            "nombre" : "TTeT",
            "grupo" : "ramama2",
            "rol" : "contante"
        }, {
            "nombre" : "TwTT",
            "grupo" : "rtMF",
            "rol" : "cantaonte"
        } ];
        let respuesta = swig.renderFile('views/autores.html', {
            vendedor : 'Autores',
            autores : autores
        });
        res.send(respuesta);
    });

    app.get('/autor/:id', function(req, res) {
        let respuesta = 'id: ' + req.params.id;
        res.send(respuesta);
    });

    app.get('/autores/:grupo', function(req, res) {
        res.redirect('/autores');
    });

    app.post("/autores/agregar", function(req, res) {
        if(req.body.nombre === ("undefined"))
            req.body.nombre = "Nombre no enviado en la petición.";
        if(req.body.grupo === ("undefined"))
            req.body.grupo = "Grupo no enviado en la petición.";
        if(req.body.rol === ("undefined"))
            req.body.rol = "Rol no enviado en la petición.";
        res.send("Autor agregado:" + req.body.nombre + "<br>"
            +" grupo :" +req.body.grupo +"<br>"
            +" rol: "+req.body.rol);
    });

};