export function validatePeriodOfTime(value: string) {
	if (checkIsNumber(value)) {
		return {
			isValid: true,
			errorMsg: ''
		};
	}
	if (
		value.match(
			/^P(?!$)((\d+Y)|(\d+\.\d+Y$))?((\d+M)|(\d+\.\d+M$))?((\d+W)|(\d+\.\d+W$))?((\d+D)|(\d+\.\d+D$))?(T(?=\d)((\d+H)|(\d+\.\d+H$))?((\d+M)|(\d+\.\d+M$))?(\d+(\.\d+)?S)?)??$/g
		)
	) {
		return {
			isValid: true,
			errorMsg: ''
		};
	}
	return {
		isValid: false,
		errorMsg: 'The text is not matching ISO 8601 format!'
	};
}

export function checkIsNumber(value: string) {
	return /^\d+$/.test(value);
}
