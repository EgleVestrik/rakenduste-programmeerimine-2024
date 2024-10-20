const cats = [];
exports.create = (req, res) => {
    const{name} = req.body;
    
    cats.push({
        id:crypto.randomUUID(),
        name: name
    })

    res.send(req.body);
};

exports.read = (req, res) => {
    res.send("ok");
};

exports.update = (req, res) => {
    //vaja kätte saada id, et teada mida muuta

};

exports.delete = (req, res) => {

//leia idõ


};