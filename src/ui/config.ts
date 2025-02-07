const lightTheme = {
	direction: 'ltr',
	token: {
		authbgcolor: 'rgb(239,242,247)',
		colorTextDescription: '#878a99',
		// color

		colorSuccessBg: '#ecfff3',
		colorInfoBg: '#dbeff3',
		colorWarningBg: '#fffbe6',
		colorDangerBg: '#fff1f0',
		colorYellowBg: '#fffbe6',
		colorGrayrBg: '#f6f7f8',
		colorPurpleBg: '#e7dffe',
		colorRedBg: '#fff0f0',
		colorLightBlue: '#ecf3ff',
		// text
		textMute: '#878a99',
		sidebarText: '#333232',
		textInfo: '#4ab0c1',
		textDark: '#000',
		textLight: '#000',
		contactBg: '#d9e8ff',
		textBlue: '#438eff',
		borderGray: ' #ebebeb',
		colorPrimaryBg: '#f0f8ff',
		colorSplit: 'rgba(5, 5, 5, 0.06)',
		colorFillTertiary: 'rgba(0, 0, 0, 0.04)',
		emailText: '#747373',
		emailSubText: '#000',
		emailSidebar: 'rgba(150, 150, 150, 0.08)',
		emailSidebars: 'rgba(150, 150, 150, 0.08)',
		colorBorder: '#eff2f7',
		colorBgContainer: '#fff',
		// tooltips Data Display
		colorBgSpotlight: 'rgba(0, 0, 0, 0.85)', // tooltip bg color
		colorTextLightSolid: '#fff', // tooltip color
		// Drawer Feedback
		colorBgElevated: '#fff', // Drawer bg color
		colorBgMask: 'rgba(0, 0, 0, 0.45)', // Drawer overlay bg
		colorIcon: 'rgba(0, 0, 0, 0.45)', // Drawer close button color
		colorIconHover: 'rgba(0, 0, 0, 0.88)', // Drawer close hover button color
		colorTextTertiary: 'rgba(0, 0, 0, 0.45)',
		colorTextSecondary: '#000',
		colorTextLabel: 'rgba(0, 0, 0, 0.65)',

		// Spacing and sizes
		controlHeight: 35,
		controlHeightLG: 40,
		controlHeightSM: 24,
		controlOutlineWidth: 2,
		fontSizeIcon: 12,
		fontSize: 14,
		fontSizeHeading1: 38,
		fontSizeHeading2: 30,
		fontSizeHeading3: 24,
		fontSizeHeading4: 20,
		fontSizeHeading5: 16,
		fontSizeLG: 16,
		fontWeightStrong: 600,
		linkDecoration: 'none',
		linkHoverDecoration: 'none',
		lineType: 'solid',
		lineWidth: 1,
		lineWidthBold: 2,
		lineWidthFocus: 4,

		sizePopupArrow: 18,
		zIndexPopupBase: 1000,
		controlPaddingHorizontal: 12,
		controlPaddingHorizontalSM: 8,
		boxShadowTertiary: '0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)',
		boxShadowSecondary: '0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
		screenLGMax: 1199,
		screenMDMax: 991,
		screenSMMax: 767,
		screenXSMax: 575,
		gray: '#2b313e'
	},
	components: {
		Menu: {
			headerBgColor: '#fff',
			verticalSidebarWidth: 280,
			verticalCollapsedSidebarWidth: 100,
			groupTitleColor: '#919da9',
			itemBg: '#fff',
			itemColor: '#919da9',
			itemActiveBg: '#f0f8ff',
			itemHoverBg: '#f0f8ff',
			itemHoverColor: '#438eff',
			subMenuItemBg: '#ffffff',
			itemSelectedBg: '#f0f8ff',
			menuBorderColor: '#eff2f7'
		},
		Typography: {
			titleMarginBottom: '1rem',
			titleMarginTop: '0' // Add the titleMarginTop property here
		},
		// navigation
		Anchor: {
			linkPaddingBlock: 4,
			linkPaddingInlineStart: 16
		},
		Breadcrumb: {
			iconFontSize: 15,
			itemColor: '#adb5bd',
			lastItemColor: '#2b313e',
			linkColor: '#2b313e',
			linkHoverColor: '#2b313e',
			separatorColor: '#adb5bd',
			separatorMargin: 8
		},
		Pagination: {
			itemActiveBg: '#ffffff',
			itemActiveBgDisabled: 'rgba(0, 0, 0, 0.15)',
			itemActiveColorDisabled: 'rgba(0, 0, 0, 0.25)',
			itemBg: '#ffffff',
			itemInputBg: '#ffffff',
			itemLinkBg: '#ffffff',
			itemSize: 32,
			itemSizeSM: 24
		},
		Steps: {
			customIconFontSize: 24,
			customIconSize: 32,
			customIconTop: 0,
			descriptionMaxWidth: 140,
			dotCurrentSize: 10,
			dotSize: 8,
			iconFontSize: 14,
			iconSize: 32,
			iconSizeSM: 24,
			iconTop: -0.5,
			navArrowColor: 'rgba(0, 0, 0, 0.25)',
			navContentMaxWidth: 'auto',
			titleLineHeight: 32
		},
		// Data Entry
		AutoComplete: {
			zIndexPopup: 1050
		},
		Cascader: {
			controlItemWidth: 111,
			controlWidth: 184,
			dropdownHeight: 180
		},
		DatePicker: {
			presetsMaxWidth: 200,
			presetsWidth: 120,
			zIndexPopup: 1050
		},
		InputNumber: {
			controlWidth: 90,
			handleFontSize: 7,
			handleVisible: 'auto',
			handleWidth: 22
		},
		Mentions: {
			controlItemWidth: 100,
			dropdownHeight: 250,
			zIndexPopup: 1050
		},
		Radio: {
			buttonBg: '#ffffff',
			buttonCheckedBg: '#ffffff',
			buttonCheckedBgDisabled: 'rgba(0, 0, 0, 0.1)',
			buttonCheckedColorDisabled: 'rgba(0, 0, 0, 0.50)',
			buttonColor: 'rgba(0, 0, 0, 0.88)',
			buttonPaddingInline: 15,
			buttonSolidCheckedColor: '#fff',
			dotColorDisabled: 'rgba(0, 0, 0, 0.25)',
			dotSize: 8,
			radioSize: 16,
			wrapperMarginInlineEnd: 8
		},
		Select: {
			zIndexPopup: 1050
		},
		Slider: {
			controlSize: 20,
			dotSize: 8,
			handleLineWidth: 2,
			handleLineWidthHover: 4,
			handleSize: 10,
			handleSizeHover: 12,
			railSize: 4
		},
		TimePicker: {
			presetsMaxWidth: 200,
			presetsWidth: 120,
			zIndexPopup: 1050
		},
		Transfer: {
			headerHeight: 40,
			itemHeight: 32,
			itemPaddingBlock: 8,
			listHeight: 200,
			listWidth: 180,
			listWidthLG: 250
		},
		// Data Display
		Avatar: {
			groupBorderColor: '#ffffff'
		},
		Calendar: {
			fullBg: '#ffffff',
			fullPanelBg: '#ffffff',
			miniContentHeight: 256,
			monthControlWidth: 80,
			yearControlWidth: 90
		},
		Card: {
			actionsBg: '#ffffff',
			actionsLiMargin: '12px 0',
			headerFontSize: 15,
			headerFontSizeSM: 14,
			headerHeight: 55,
			headerHeightSM: 38,
			tabsMarginBottom: -25
		},
		Carousel: {
			dotActiveWidth: 24,
			dotHeight: 3,
			dotWidth: 16
		},
		Descriptions: {
			colonMarginLeft: 2,
			colonMarginRight: 8,
			extraColor: 'rgba(0, 0, 0, 0.88)',
			itemPaddingBottom: 16,
			labelBg: 'rgba(0, 0, 0, 0.02)',
			titleMarginBottom: 20
		},
		List: {
			avatarMarginRight: 14,
			contentWidth: 220,
			descriptionFontSize: 14,
			emptyTextPadding: 16,
			footerBg: 'transparent',
			headerBg: 'transparent',
			itemPadding: '12px 0',
			itemPaddingLG: '16px 24px',
			itemPaddingSM: '8px 16px',
			metaMarginBottom: 16,
			titleMarginBottom: 10
		},
		Popover: {
			// minWidth:                                    177,
			// width:                                       177,
			zIndexPopup: 1030
		},
		Segmented: {
			itemActiveBg: 'rgba(0, 0, 0, 0.15)',
			itemColor: '#878a99',
			itemHoverBg: 'rgba(0, 0, 0, 0.02)',
			itemHoverColor: '#141821',
			itemSelectedBg: '#ffffff'
		},
		Statistic: {
			contentFontSize: 22,
			titleFontSize: 15
		},
		Tabs: {
			cardBg: '#f5f5f5',
			cardGutter: 4,
			cardHeight: 40,
			cardPadding: '8px 16px',
			cardPaddingLG: '8px 16px 6px',
			cardPaddingSM: '6px 16px',
			horizontalItemGutter: 25,
			horizontalItemPadding: '12px 0',
			horizontalItemPaddingLG: '16px 0',
			horizontalItemPaddingSM: '8px 0',
			horizontalMargin: '0 0 16px 0',
			titleFontSize: 15,
			titleFontSizeLG: 16,
			titleFontSizeSM: 14,
			verticalItemMargin: '16px 0 0 0',
			zIndexPopup: 1050
		},
		Tag: {
			defaultBg: '#f5f5f5',
			defaultColor: '#141821'
		},
		Timeline: {
			itemPaddingBottom: 12,
			dotBorderWidth: 2,
			tailColor: '#eff2f7',
			tailWidth: 2
		},
		Tooltip: {
			zIndexPopup: 1070
		},
		Tree: {
			headerHeight: 40,
			itemHeight: 180,
			itemPaddingBlock: 5,
			listHeight: 200,
			listWidth: 180,
			listWidthLG: 250
		},
		// Feedback
		Drawer: {
			footerPaddingBlock: 8,
			footerPaddingInline: 16,
			zIndexPopup: 1000
		},
		Message: {
			contentBg: '#ffffff',
			contentPadding: '10px 16px',
			zIndexPopup: '1010'
		},
		Modal: {
			contentBg: '#ffffff',
			footerBg: '#ffffff',
			headerBg: '#ffffff',
			titleColor: 'rgba(0, 0, 0, 0.88)',
			titleFontSize: 16,
			titleLineHeight: 1.5
		},
		Notification: {
			width: 384,
			zIndexPopup: 1050
		},
		Popconfirm: {
			zIndexPopup: 1060
		},
		Result: {
			extraMargin: '24px 0 0 0', // result-extra margin
			iconFontSize: 55,
			subtitleFontSize: 15,
			titleFontSize: 24
		},
		Spin: {
			contentHeight: 400
		}
		// Layout: {
		//     colorBgBody: '#fff',
		//     colorBgHeader: '#fff',
		//     colorBgTrigger: '#002140',
		// },
	}
};

// Theme colors specific to dark theme
const darkTheme = {
	token: {
		authbgcolor: 'rgb(43,49,62)',
		colorTextDescription: '#9eb2cd',
		// color
		colorSuccessBg: '#12512e',
		colorInfoBg: '#1e464d',
		colorWarningBg: '#62491d',
		colorDangerBg: '#ee7b734f',
		colorYellowBg: '#fffbe6',
		colorRedBg: '#362b34',
		colorPurpleBg: '#352764',
		colorLightBlue: '#232e43',

		// text
		textMute: '#a6b5d2',
		sidebarText: '#a6b5d2',
		textInfo: '#fff',
		textDark: '#4ab0c1',
		textLight: '#fff',
		contactBg: '#1b3966',
		textBlue: '#438eff',

		borderGray: '#293b55',
		colorPrimaryBg: '#24344a',
		emailText: '#fff',
		emailSubText: '#fff',
		emailSidebar: '#142a494d',
		emailSidebars: '#18283e',

		colorBgContainer: '#152234',
		colorBgLayout: '#243348',
		colorText: '#FFFFFF',
		colorTextHeading: '#c6d4e8',
		colorBorder: '#293b55',
		colorBorderSecondary: '#293b55',
		colorTextTertiary: '#859cba',
		colorTextPlaceholder: '#859cba',
		fontFamily: '"Inter", sans-serif',
		textMuted: '#fff',
		colorBgElevated: '#19273c',
		nonauthBg: '#2b313e',
		colorBgContainerDisabled: '#24344a',
		colorFill: '#2f415a', // skeleton overlay bg
		colorFillContent: '#394c66', // skeleton bg
		colorFillSecondary: '#394c66', // progress's bar bg
		colorSplit: '#293b55',
		colorFillTertiary: '#293b55',
		colorBgSpotlight: '#293b55', // tooltip bg color
		colorTextQuaternary: '#293b55',
		colorTextSecondary: '#c6d4e8',
		colorTextLabel: '#9eb2cd',
		primaryColor: '#1890ff',
		primaryColorHover: '#40a9ff',
		primaryColorActive: '#096dd9',
		primaryColorOutline: 'rgba(24, 144, 255, 0.2)'
	},
	components: {
		Layout: {
			bodyBg: '#111a27',
			headerBg: '#152234',
			colorBgTrigger: '#849ec1'
		},
		Menu: {
			verticalSidebarWidth: 280,
			verticalCollapsedSidebarWidth: 100,
			groupTitleColor: '#859cba',
			itemBg: '#152234',
			itemColor: '#849ec1',
			itemActiveBg: '#0b70ff1a',
			itemHoverBg: '#0b70ff1a',
			itemHoverColor: '#438eff',
			subMenuItemBg: '#152234',
			itemSelectedBg: '#0b70ff1a',
			menuBorderColor: '#293b55'
		},
		Breadcrumb: {
			iconFontSize: 15
		},
		Tabs: {
			cardBg: '#f5f5f5',
			cardGutter: 4,
			cardHeight: 40,
			cardPadding: '8px 16px',
			cardPaddingLG: '8px 16px 6px',
			cardPaddingSM: '6px 16px',
			horizontalItemGutter: 25,
			horizontalItemPadding: '12px 0',
			horizontalItemPaddingLG: '16px 0',
			horizontalItemPaddingSM: '8px 0',
			horizontalMargin: '0 0 16px 0',
			titleFontSize: 15,
			titleFontSizeLG: 16,
			titleFontSizeSM: 14,
			verticalItemMargin: '16px 0 0 0',
			zIndexPopup: 1050
		},
		Radio: {
			buttonBg: '#152234',
			buttonCheckedBg: '#152234',
			buttonCheckedBgDisabled: '#344762',
			buttonCheckedColorDisabled: '#9dacc1',
			buttonColor: '#c6d4e8',
			buttonPaddingInline: 15,
			buttonSolidCheckedColor: '#fff',
			dotColorDisabled: '#9dacc1',
			dotSize: 8,
			radioSize: 16,
			wrapperMarginInlineEnd: 8
		}
	}
};

const customStyle = {
	token: {
		// Spacing and sizes
		controlHeight: 35,
		controlHeightLG: 40,
		controlHeightSM: 24,
		controlOutlineWidth: 2,
		fontSizeIcon: 12,
		fontSize: 14,
		fontSizeHeading1: 38,
		fontSizeHeading2: 30,
		fontSizeHeading3: 24,
		fontSizeHeading4: 20,
		fontSizeHeading5: 16,
		fontSizeLG: 16,
		fontWeightStrong: 600,
		linkDecoration: 'none',
		linkHoverDecoration: 'none',
		lineType: 'solid',
		lineWidth: 1,
		lineWidthBold: 2,
		lineWidthFocus: 4,
		sizePopupArrow: 18,
		zIndexPopupBase: 1000,
		controlPaddingHorizontal: 12,
		controlPaddingHorizontalSM: 8,
		screenLGMax: 1199,
		screenMDMax: 991,
		screenSMMax: 767,
		screenXSMax: 575,

		margin: 24,
		marginSM: 20,
		marginXS: 14,
		marginXXS: 4,
		borderRadiusXS: 2,
		borderRadiusSM: 4,
		borderRadius: 6,
		borderRadiusLG: 8,
		padding: 16,
		paddingLG: 22,
		paddingSM: 12,
		paddingXS: 8,
		paddingXXS: 4,

		// colors Palette
		nonauthBg: '#eff2f7',
		colorBgContainer: '#fff',
		colorBgContainerDisabled: 'rgba(0, 0, 0, 0.04)',
		colorBgLayout: '#f5f5f5',
		colorText: '#000000',
		colorTextDisabled: '#adb5bd',
		colorTextPlaceholder: '#adb5bd',
		colorTextQuaternary: 'rgba(0, 0, 0, 0.45)',
		colorTextHeading: 'rgba(0, 0, 0, 0.88)',
		fontFamily: '"Inter", sans-serif',
		colorFillAlter: 'rgba(0, 0, 0, 0.02)',
		colorFill: 'rgba(0, 0, 0, 0.15)', // skeleton overlay bg
		colorFillContent: 'rgba(0, 0, 0, 0.06)', // skeleton bg
		colorFillQuaternary: 'rgba(0, 0, 0, 0.02)',
		colorFillSecondary: 'rgba(0, 0, 0, 0.06)', // progress's bar bg
		colorHighlight: '#ff4d4f',
		colorBorderSecondary: '#f0f0f0',
		colorError: '#fc7b44',
		colorSuccess: '#55c27f',
		colorSuccessBg: '#ecfff3',
		colorPrimary: '#438eff',
		colorPrimaryBg: 'rgba(67, 142, 255, 0.10)',
		colorInfo: '#4ab0c1',
		colorInfoBg: '#dbeff3',
		colorDanger: '#ff6c6c',
		colorDangerBg: '#ffe2e2',
		textMuted: '#a3a3a3',
		colorWarning: '#f1be46',
		colorWarningBg: '#fffbe6',
		colorTextCode: '#f7649f',
		colorLink: '#438eff',
		colorLinkActive: '#68a4ff',
		colorDark: '#000000',
		colorDarkBg: '#e9ebec',
		colorLinkHover: '#68a4ff',
		controlItemBgHover: 'rgba(0, 0, 0, 0.04)',
		bglight: '#000',
		colorSecondary: '#8561f9',
		colorSecondaryBg: '#e7dffe',

		white: '#ffffff',
		border: '#dfdfdf',
		innerBg: '#f7f7f8',
		footerBg: '#353d5b',

		deep_periwinkle: '#434359',
		charcoal: '#36454F',
		orange: '#F1AD3E',
		light_orange: '#ffce54',
		purple: '#790CF6',
		light_blue: '#D2CDFE',
		red: '#ff4d4f',
		bright_red: '#E84733',
		light_red: '#FF5A5F',
		fusion_red: '#ff5a5f',
		strong_red: '#cd3324',
		green: '#51c41a',
		light_green: '#d9ffb4',
		light_grey: '#d8d8ec',
		soft_violet: '#AC92EC',
		violet_sidebar: '#553a97',
		moderate_green: '#48cfad',
		soft_blue: '#5d9cec',
		blue: '#5d9cec',
		magenta: '#e83e8c',
		soft_violet_dark: '#AD6AD9',
		grey: '#c7c7c7',
		tags_color: '#434359',
		tag_green: '#85d65e',
		tag_green_border: '#ccf1b0',
		tag_green_background: '#f9fff2',
		tag_red: '#ff9697',
		tag_red_border: '#ffc8c5',
		tag_red_background: '#fff7f6',
		tag_cyan: '#08979c',
		tag_cyan_border: '#b0f1f1',
		tag_cyan_background: '#f2ffff',
		tag_grey: '#808080',
		tag_grey_border: '#cccccc',
		tag_grey_background: '#f5f5f5',
		tag_blue: '#5ea8d6',
		tag_blue_border: '#cce7ff',
		tag_blue_background: '#edf9ff',
		tag_orange: '#eb8759',
		tag_orange_border: '#fad1ba',
		tag_orange_background: '#ffeae0',
		tag_yellow: '#d2d65e',
		tag_yellow_border: '#f1deb0',
		tag_yellow_background: '#fffdf2',
		select_tags: '#f1f1f1',

		// heading

		h1: 34,
		h2: 30,
		h3: 24,
		h4: 20,
		h5: 18,
		h6: 16
	}
};

export { lightTheme, darkTheme, customStyle };
