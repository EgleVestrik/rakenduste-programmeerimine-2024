const cats = [
    {
      id: "7d613b93-fa3e-4ef3-a9d2-e09e5ca6e4e6",
      name: "Meow",
      createdAt: 1727098800585,
      updatedAt: null,
      deleted: false,
    },
    {
      id: "2dc9ce08-d345-4fed-8560-4c6b66fb0836",
      name: "Kitty",
      createdAt: 1727098952739,
      updatedAt: null,
      deleted: false,
    },
  ];

exports.create = (req, res) => {
    const {name} = req.body;

    const newCat = {
        id: crypto.randomUUID(),
        name: name,
        createdAt: Date.now(),
        updatedAt: null,
        deleted:false,
    }

    cats.push(newCat);

    res.send(newCat);
};

exports.read = (req, res) => {
    res.send(cats);
};

exports.update = (req, res) => {
  const { id } = req.params; 
  const { name } = req.body; 

  const catsItem = cats.find(item => item.id === id);

  if (catsItem && !catsItem.deleted) {
 
      if (name) catsItem.name = name;
      catsItem.updatedAt = Date.now();

      return res.send(catsItem);
  } else {
      return res.send({ message: "cats not found or deleted" });
  }
};

exports.delete = (req, res) => {
  const { id } = req.params; 

  const catsItem = cats.find(item => item.id === id);

  if (catsItem) {
     
      catsItem.deleted = true;

      return res.send({ message: "cats marked as deleted", todoItem });
  } else {
      return res.send({ message: "cats not found" });
  }
};