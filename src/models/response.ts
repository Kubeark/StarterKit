export interface IResponseData {
	message: string;
}

export interface IPaginatedRequest {
	page: number;
	per_page: number;
}

export interface IPaginatedResponse {
	page: number;
	per_page: number;
	total_pages: number;
	total_results: number;
}
