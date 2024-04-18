const getAllProducts = (req, res) => {
    res.json({message:[]})
};

const createProduct = (req, res) => {
    res.json({message: "Product created successfully..."})
};

module.exports = {
  getAllProducts,
  createProduct,
};
