import Router from 'koa-router';
import demo from './controllers/demo';
import test from './controllers/test';

const router = new Router();

// ====== demo ======
router.get('/', demo.index);
router.get('/api/demo', demo.demo);
router.get('/api/setDemo', demo.setDemo);
router.get('/api/getDemo', demo.getDemo);
router.get('/api/delDemo', demo.delDemo);
router.get('/api/updateDemo', demo.updateDemo);

// ====== test units ======
router.get('/test', test.index);

// ====== app route ======

export default router;
