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
exports.PCController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const pc_service_1 = require("./pc.service");
const sendResponce_1 = __importDefault(require("../../../shared/sendResponce"));
const pc_model_1 = require("./pc.model");
const createPC = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const PC = __rest(req.body, []);
    // console.log(PC, 'from controller=================');
    const result = yield pc_service_1.PCService.createPCServices(PC);
    if (result) {
        (0, sendResponce_1.default)(res, {
            success: true,
            message: 'successfully create PC',
            statusCode: 200,
            data: result,
        });
        // next()
    }
}));
const getALLPC = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield pc_model_1.PC.find({});
    (0, sendResponce_1.default)(res, {
        success: true,
        message: 'successfully get PCs',
        statusCode: 200,
        data: data,
    });
}));
const getSinglePC = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield pc_service_1.PCService.getSinglePC(id);
    // console.log(id,"id");
    (0, sendResponce_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'PC retrieved successfully !',
        data: result,
    });
}));
const deletePC = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield pc_service_1.PCService.deletePC(id);
    (0, sendResponce_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Student deleted successfully !',
        data: result,
    });
}));
exports.PCController = {
    createPC,
    getALLPC,
    getSinglePC,
    deletePC,
};
