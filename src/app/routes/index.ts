import express from 'express';
import { PCRouter } from '../modules/PC/pc.route';
import { cartRouter } from '../modules/CART/cart.rout';

const router = express.Router();

const modulesRoutes = [
  {
    path: '/pc',
    route: PCRouter,
  },
  {
    path: '/pc-cart',
    route: cartRouter,
  },
];

modulesRoutes.forEach(route => router.use(route.path, route.route));

export default router;
