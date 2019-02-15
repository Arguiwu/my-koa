import * as Koa from 'koa';

import { Loader } from './loader'

const app = new Koa;

const loader = new Loader(app);

app.use(loader.loadRouter());

app.listen(7788, '127.0.0.1', () => {
  console.log('服务器已运行')
})