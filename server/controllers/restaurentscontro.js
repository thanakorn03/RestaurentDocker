import Restaurant from '../model/restaurents-model.js';
const restaurantController = {};

// Create and Save a new Restaurant
restaurantController.create = async (req, res) => {
    const { name, type, imageURL } = req.body;
    // Validate input
    if (!name || !type || !imageURL) {
        return res.status(400).send({ message: "All fields are required" });
    }
    await Restaurant.findOne({ where: { name } })
        .then(async (restaurant) => {
            if (restaurant) {
                return res.status(400).send({ message: "Restaurant already exists" });
            }
            const newRestaurant = {
                name,
                type,
                imageURL
            };
            Restaurant.create(newRestaurant).then((data) => {
                res.send(data);
            }
            ).catch((error) => {
                res.status(500).send({ message: error.message || "Some error occurred while creating the Restaurant." });
            });
        })
};
// Get all Restaurants
restaurantController.getAllRestaurants = async (req, res) => {
    await Restaurant.findAll()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((error) => {
            res.status(500).send({ message: error.message || "Some error while getting all restaurants." });
        });
};
//Get by id
restaurantController.getById = async (req, res) => {
    const id = req.params.id;
    await Restaurant.findByPk(id)
        .then((data) => {
            if (!data) {
                return res.status(404).send({ message: `Restaurant with id ${id} not found` });
            }
            res.status(200).json(data);
        })
        .catch((error) => {
            res.status(500).send({ message: error.message || `Some error with id ${id}` });
        });

};
//update restaurant
restaurantController.update = async (req, res) => {
    const id = req.params.id;
    const { name, type, imageURL } = req.body;
    // Validate input
    if (!name || !type || !imageURL) {
        return res.status(400).send({ message: "Name, Type and Image URL can not be empty" });
    }

    await Restaurant.update({ name, type, imageURL }, { where: { id } })
        .then((num) => {
            if (num[0] === 1) {
                res.status(200).send({ message: "Restaurant updated successfully" });
            } else {
                return res.status(404).send({ message: `Restaurant with id ${id} not found or req.body is empty` });
            }
        })
        .catch((error) => {
            res.status(500).send({ message: error.message || `Some error occurred while updating the restaurant with id ${id}` });
        }
    );
};
// Delete a Restaurant by ID
restaurantController.delete = async (req, res) => {
    const id = req.params.id;
    if (!id) {
        return res.status(400).send({ message: "ID is missing" });
    }
    await Restaurant.destroy({ where: { id: id } })
        .then((num) => {
            if (num === 1) {
                res.status(200).send({ message: "Restaurant deleted successfully" });
            } else {
                return res.status(404).send({ message: `Restaurant with id ${id} not found` });
            }
        })
        .catch((error) => {
            res.status(500).send({ message: error.message || `Some error occurred while deleting the restaurant with id ${id}` });
        }
    );
}


export default restaurantController;