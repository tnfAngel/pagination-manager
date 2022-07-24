import { PaginationManager } from './classes/PaginationManager';
import { PaginationBuilder } from './classes/PaginationBuilder';
import * as util from './util';

const version = require('../package.json').version as string;

export { PaginationManager, PaginationBuilder, util, version };
