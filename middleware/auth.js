const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        console.log('Token is : ' + token);
        const decodedToken = jwt.verify(token, 'RANDOM_SECRET_KEY');
        const userId = decodedToken.userId;
        req.auth = {
            userId: userId
        };
        next();
    } catch(error) {
        console.log(error);
        res.status(401).json({ error })
    }
    
}