/**
 * Captures any errors encountered while processing the request, logs them and returns a user-friendly error response.
 */
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

import { HttpError } from './fetch-helpers';

const errorMiddleware = (handler: NextApiHandler) => async (req: NextApiRequest, res: NextApiResponse) => {
	try {
		const response = handler(req, res);

		if (response instanceof Promise) {
			await response;
		}
	} catch (e) {
		console.error(e);

		if (e instanceof HttpError) {
			res.status(e.code).json({ error: e.message });
		} else if (e instanceof TypeError && e.message === 'fetch failed') {
			res.status(504).json({ error: 'Timeout encountered' });
		} else {
			res.status(500).json({ error: 'An unexpected error was encountered' });
		}
	}
};

export default errorMiddleware;
