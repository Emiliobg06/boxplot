import { getStatistics, getAllNumbers, resetDatabase } from '../handlers';

export const routes = {
  '/api/statistics': {get: getStatistics},
  '/api/numbers': {get: getAllNumbers},
  '/api/reset': {post: resetDatabase}
};