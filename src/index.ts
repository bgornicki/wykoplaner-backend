import app from './app/app';
import { listenOnPort } from './utils/listenOnPort';

listenOnPort(app, 3000);