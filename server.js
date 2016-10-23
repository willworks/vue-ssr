import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import session from 'koa-session';
import views from 'koa-views';
import convert from 'koa-convert';
import serve from 'koa-static';
import dbHandler from './services/dbHandler';
import finalHandler from './middlewares/finalHandler';
import ingoreFavicon from './middlewares/ingoreFavicon';
import router from './router';

const app = new Koa();

/**
 * create connection of mongodb
 */
dbHandler.dbHandler();

app.use(finalHandler());
app.use(views(`${__dirname}/views`, {
  map: {
    html: 'nunjucks'
  }
}));
app.use(logger());
app.use(bodyParser());
app.use(convert(session(app)));
app.use(ingoreFavicon(__dirname + '/public/favicon.ico'));
app.use(serve(__dirname + '/public'));
app
  .use(router.routes())
  .use(router.allowedMethods());

export default app;
