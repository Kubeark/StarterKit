export function getErrorMessage(error: any, prefixMessage = '') {
	const prefix = prefixMessage.length > 0 ? `${prefixMessage} ` : '';

	if (error instanceof Error) {
		return prefix + error.message;
	}

	if (typeof error === 'object' && error.errorFields instanceof Array) {
		const firstErrorField = error.errorFields[0];

		if (typeof firstErrorField === 'object' && firstErrorField.errors instanceof Array) {
			const msg: string = firstErrorField.errors[0]?.toString() ?? 'Unknown error!';

			return prefix + msg;
		}
	}

	const msg: string = error?.toString() ?? 'Unknown error!';

	return prefix + msg;
}
