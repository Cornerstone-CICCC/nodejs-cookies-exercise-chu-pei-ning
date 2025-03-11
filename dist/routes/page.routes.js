"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageRouter = (0, express_1.Router)();
const users = [
    { id: 1, username: 'admin', password: 'admin12345' },
];
exports.default = pageRouter;
