import express from 'express';
import { PCRouter } from '../modules/PC/pc.route';

const router = express.Router();

const modulesRoutes = [
  {
    path: '/pc',
    route: PCRouter,
  },
];

modulesRoutes.forEach(route => router.use(route.path, route.route));

export default router;
