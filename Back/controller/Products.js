const db = require('../config/db')
const Products = db.products

module.exports = {
    getAll: (req, res) => {
        Products.findAll()
            .then(products => res.status(200).json(products))
            .catch(error => res.status(500).json({ error: 'Failed to get products' }));
    },

    getByCategory: (req, res) => {
        const { category } = req.params;
        Products.findAll({ where: { category } })
            .then(products => res.status(200).json(products))
            .catch(error => res.status(500).json({ error: 'Failed to get products by category' }));
    },

    create: (req, res) => {
        const { name, category, price, image } = req.body;
        Products.create({ name, category, price, image })
            .then(data => res.status(201).json(data))
            .catch(error => res.status(500).json({ error: 'Failed to create product' }));
    },

    dell: (req, res) => {
        const { id } = req.params;
        Products.destroy({ where: { id } })
            .then(proudect => {
                if (proudect) {
                    res.status(200).json({ message: 'Product deleted successfully' });
                } else {
                    res.status(404).json({ error: 'Product not found' });
                }
            })
            .catch(error => res.status(500).json({ error: 'Failed to delete product' }));
    },
    update: (req, res) => {
        const id = req.params.id;
        console.log(id);
        
        const { name, price, category, image } = req.body

        Products.update(
            { name, price, category, image },
            { where: { id } }
        )
            .then(([updatedCount]) => {
                if (updatedCount === 0) {
                    return res.status(404).json({ message: "Product not found or nothing to update" })
                }
                res.json({ message: "Update done" })
            })
            .catch((err) => {
                console.error("Update failed", err)
                res.status(500).json({ error: "Something went wrong during update" })
            })
    }


}