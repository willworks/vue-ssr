import Router from 'koa-router';
import demo from './controllers/demo';

const router = new Router();

// ====== demo ======

// ====== spa entence ======
router.get('/', demo.index);

// ====== api ======
router.get('/api/demo', demo.demo);
router.get('/api/setDemo', demo.setDemo);
router.get('/api/getDemo', demo.getDemo);
router.get('/api/delDemo', demo.delDemo);
router.get('/api/updateDemo', demo.updateDemo);

// ====== app route ======

export default router;
