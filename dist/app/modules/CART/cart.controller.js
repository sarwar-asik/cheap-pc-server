"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const cart_service_1 = require("./cart.service");
const sendResponce_1 = __importDefault(require("../../../shared/sendResponce"));
const cart_model_1 = require("./cart.model");
const createCart = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const CartData = __rest(req.body, []);
    console.log(CartData);
    const result = yield cart_service_1.CartService.createCart(CartData);
    if (result) {
        (0, sendResponce_1.default)(res, {
            statusCode: 200,
            success: true,
            message: 'Cart created successfully!',
            data: result,
        });
    }
}));
const getCart = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    console.log(req.query);
    const queryData = { user: (_a = req.query) === null || _a === void 0 ? void 0 : _a.user, category: (_b = req.params) === null || _b === void 0 ? void 0 : _b.category };
    console.log(queryData);
    const result = yield cart_model_1.Cart.findOne(queryData).populate('productName');
    console.log(result);
    // sendResponse<ICart[]>(res, {
    //   statusCode: httpStatus.FOUND,
    //   success: true,
    //   message: 'Cart Data get successfully!',
    //   data: result,
    // });
    // const result = await CartService.getSingleCart(queryData);
    if (result) {
        (0, sendResponce_1.default)(res, {
            statusCode: 200,
            success: true,
            message: 'Cart created successfully!',
            data: result,
        });
    }
}));
exports.CartController = { createCart, getCart };
