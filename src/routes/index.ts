import {Router} from 'express';
import * as pageController from '../controllers/pageControllers.js';
import * as searchController from '../controllers/searchController.js';

const router = Router();

router.get('/', pageController.home);
router.get('/dogs', pageController.dogs);
router.get('/dogs', pageController.dogs);
router.get('/fishes', pageController.fishes);

router.get('/search', searchController.search);


export default router;