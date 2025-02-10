const sayHello = async (req, res) => {
    try {
        res.status(200).json("Hello");
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    sayHello,
};