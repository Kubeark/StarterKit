import 'styled-components';
import { Theme } from './theme';

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {
		mode: 'light' | 'dark';
		direction: 'ltr' | 'rtl';
		token: {
			[key: string]: string | number;
		};
		components: {
			Menu: {
				[key: string]: string | number;
			};
			Typography: {
				[key: string]: string | number;
			};
			Anchor: {
				[key: string]: string | number;
			};

			// navigation
			Breadcrumb: {
				[key: string]: string | number;
			};
			Pagination: {
				[key: string]: string | number;
			};
			Steps: {
				[key: string]: string | number;
			};
			// Data Entry
			AutoComplete: {
				[key: string]: string | number;
			};
			Cascader: {
				[key: string]: string | number;
			};
			DatePicker: {
				[key: string]: string | number;
			};
			InputNumber: {
				[key: string]: string | number;
			};
			Mentions: {
				[key: string]: string | number;
			};
			Radio: {
				[key: string]: string | number;
			};
			Select: {
				[key: string]: string | number;
			};
			Slider: {
				[key: string]: string | number;
			};
			TimePicker: {
				[key: string]: string | number;
			};
			Transfer: {
				[key: string]: string | number;
			};
			// Data Display
			Avatar: {
				[key: string]: string | number;
			};
			Calendar: {
				[key: string]: string | number;
			};
			Card: {
				[key: string]: string | number;
			};
			Carousel: {
				[key: string]: string | number;
			};
			Descriptions: {
				[key: string]: string | number;
			};
			List: {
				[key: string]: string | number;
			};
			Popover: {
				[key: string]: string | number;
			};
			Segmented: {
				[key: string]: string | number;
			};
			Statistic: {
				[key: string]: string | number;
			};
			Tabs: {
				[key: string]: string | number;
			};
			Tag: {
				[key: string]: string | number;
			};
			Timeline: {
				[key: string]: string | number;
			};
			Tooltip: {
				[key: string]: string | number;
			};
			Tree: {
				[key: string]: string | number;
			};
			// Feedback
			Drawer: {
				[key: string]: string | number;
			};
			Message: {
				[key: string]: string | number;
			};
			Modal: {
				[key: string]: string | number;
			};
			Notification: {
				[key: string]: string | number;
			};
			Popconfirm: {
				[key: string]: string | number;
			};
			Result: {
				[key: string]: string | number;
			};
			Spin: {
				[key: string]: string | number;
			};
			[key: string]: any; // Use this to handle additional components
		};
	}
}
