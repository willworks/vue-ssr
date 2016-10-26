import Router from 'koa-router';
import demo from './controllers/demo';

const router = new Router();

// ====== demo ======
router.get('/', demo.index);
router.get('/demo', demo.demo);
router.get('/setDemo', demo.setDemo);
router.get('/getDemo', demo.getDemo);
router.get('/delDemo', demo.delDemo);
router.get('/updateDemo', demo.updateDemo);

// ====== app route ======

export default router;
