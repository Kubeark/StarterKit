export function sorting(a?: string, b?: string) {
	if (typeof a !== 'string' && typeof b !== 'string') {
		return 0;
	}

	if (typeof a !== 'string') {
		return -1;
	}

	if (typeof b !== 'string') {
		return 1;
	}

	return a.localeCompare(b);
}

export function sortDate(a?: string | Date, b?: string | Date) {
	const aDate = new Date(a ?? 0);
	const bDate = new Date(b ?? 0);

	if (aDate < bDate) {
		return -1;
	}

	if (bDate < aDate) {
		return 1;
	}

	return 0;
}

export function sortBoolean(a?: boolean, b?: boolean) {
	const sortA = a ? 1 : 0;
	const sortB = b ? 1 : 0;

	return sortA - sortB;
}

export function sortNumber(a?: number, b?: number) {
	if (typeof a !== 'number' && typeof b !== 'number') {
		return 0;
	}

	if (typeof a !== 'number') {
		return -1;
	}

	if (typeof b !== 'number') {
		return 1;
	}

	return a - b;
}
