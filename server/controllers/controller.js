// controller for login
const bcrypt = require('bcrypt');
const User = require('../module/schema');
const Userdb = require('../module/userSchema');
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    try {
        // validate request
        if (!req.body)
            return res.status(406).json({ err: "You have to fill the email and password." });
        // get user login data
        const { email, password } = req.body;
        if (!email || !password)
            return res.status(406).json({ err: "Not all fields have been entered." });

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(406).json({ err: "No account with this email." })
        }

        // compare the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(406).json({ err: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        res.json({ token, username: user.username, email: user.email });
    }
    catch (error) {
        res.status(500).json({ err: error.message || "Error while logging in" });
    }
};

// controller for register
exports.register = async (req, res) => {
    try {
        // validate request
        if (!req.body)
            return res.status(406).json({ err: "You have to fill the registration form" });

        let { email, password, passwordCheck, username } = req.body;

        if (!email || !password || !passwordCheck)
            return res.status(406).json({ err: "Not all fields have been entered" });

        if (password.length < 8)
            return res.status(406).json({ err: "The password needs to be at least 8 characters long." });

        if (password != passwordCheck)
            return res.status(406).json({ err: "The password must be the same for verification." });

        const hash = await bcrypt.hashSync(password, 10);

        // using doc structure
        const newUser = new User({
            email,
            password: hash,
            username
        })

        newUser
            .save(newUser)
            .then(register => res.json(register))
            .catch(error => {
                res.status(406).json({ err: error.message || "Something went wrong while registration." })
            })
    } catch (error) {
        res.status(500).json({ err: error.message || "Error while registering in" });
    }
};

// delete user controller
exports.delete = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.user_id);
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ err: error.message || "Error while deleteing user" });
    }
};

exports.create = (req, res) => {
    try {
        // validate request
        if (!req.body)
            return res.status(406).json({ err: "You have to fill the form" });

        let { email, name, gender, status } = req.body;
        if (!email || !name || !gender || !status)
            return res.status(406).json({ err: "Not all fields have been filled" });

        // new user
        const user = new Userdb({
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            status: req.body.status
        });
        // save user in the database
        user
            .save(user)
            .then(create => res.json(create))
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occured while creating a create operation"
                });
            });
    } catch (error) {
        res.status(500).json({ err: error.message || "Error while adding user" });
    }
}


// retrieve and return all / a single user
exports.find = (req, res) => {
    try {
        if (req.query.id) {
            const id = req.query.id;
            Userdb.findById(id)
                .then(data => {
                    if (!data) {
                        res.status(404).send({ message: "Not found user with id" + id })
                    }
                    else {
                        res.send(data);
                    }
                })
                .catch(err => {
                    res.status(500).send({ message: "Error retrieving user with id " + id });
                });
        }
        else {
            Userdb.find()
                .then(user => {
                    res.send(user)
                })
                .catch(err => {
                    res.status(500).send({ message: err.message || "Error occured while retireving user information." })
                })
        }
    } catch (error) {
        res.status(500).json({ err: error.message || "Error while finding users" });
    }

}

// update a new identified user by user id
exports.update = (req, res) => {
    try {
        if (!req.body) {
            return res
                .status(400)
                .send({ message: "Data to update cannot be empty." })
        }
        const id = req.params.id;
        Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: `Cannot Update user with ${id}. Maybe user not found` })
                } else {
                    res.send(data)
                }
            })
            .catch(err => {
                res.status(500).send({ message: "Error update user information" })
            });
    } catch (error) {
        res.status(500).json({ err: error.message || "Error while updating user" });
    }
}

// delete a user with a specified user id
exports.deleteUser = (req, res) => {
    try {
        const id = req.params.id;
        Userdb.findByIdAndDelete(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: `Cannot delete with id ${id}. Maybe id is wrong.` })
                } else {
                    res.send({ message: "User was deleted successfully." })
                };
            })
            .catch(err => {
                res.status(500).send({
                    message: `Coud not delete user with id =${id}`
                });
            });
    } catch (error) {
        res.status(500).json({ err: error.message || "Error while deleting user" });
    }
}