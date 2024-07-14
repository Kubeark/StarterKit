declare type StaticImageData = {
	src: string;
	height: number;
	width: number;
	placeholder?: string;
};
declare namespace NodeJS {
	interface Process {
		browser: boolean;
	}
}
