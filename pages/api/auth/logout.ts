import type { NextApiRequest, NextApiResponse } from 'next';

import errorMiddleware from '../../../server/error-middleware';
import { fetchWrapper, proxyRequest } from '../../../server/fetch-helpers';

async function handler(req: NextApiRequest, res: NextApiResponse) {
	await proxyRequest(req, res, fetchWrapper.post, 'auth/logout');
}

export default errorMiddleware(handler);
