const { default: userSchema } = require("../models");

const usuarios = [];

const getUsuario = (req, res) => {
  try {
     const result = userSchema.safeParse(req.body);
     if (!result.success) {
       res.status(400).json({ error: result.error.errors });
     } else {

       res.json( usuarios );
     }
  } catch (error) {
    res.status(400).json({ error: error.errors });
  }
}

const postUsuario = (req, res) => {
  try {
    const result = userSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        error: result.error.issues
      });
    }

    usuarios.push(result.data);

    res.status(201).json({
      message: 'Data saved',
      data: result.data
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};


const putUsuario = (req, res) => {
  try {
    const id = req.params.id;
    const result = userSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        error: result.error.issues
      });
    }

    const index = usuarios.findIndex(usuario => usuario.id === parseInt(id));

    if (index === -1) {
      return res.status(404).json({
        error: `Data with id ${id} not found`
      });
    }

    usuarios[index] = result.data;

    res.json({
      message: `Data with id ${id} updated`,
      data: result.data
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

const deleteUsuario = (req, res) => {
  try {
    const id = req.params.id;
    const index = usuarios.findIndex(usuario => usuario.id === parseInt(id));

    if (index === -1) {
      return res.status(404).json({
        error: `Data with id ${id} not found`
      });
    }

    usuarios.splice(index, 1);

    res.json({
      message: `Data with id ${id} deleted`
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

module.exports = { getUsuario, postUsuario, putUsuario, deleteUsuario };