"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkStatus = exports.checkAuth = void 0;
const checkAuth = (req, res, next) => {
    const { isLoggedIn } = req.signedCookies;
    if (!isLoggedIn) {
        res.status(403).render('forbidden');
        return;
    }
    next(); // Continue to next middleware/route
};
exports.checkAuth = checkAuth;
const checkStatus = (req, res, next) => {
};
exports.checkStatus = checkStatus;
