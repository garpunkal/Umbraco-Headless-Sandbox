export const $AccordionElementModel = {
	type: 'all-of',
	contains: [{
	type: 'IApiElementModelBase',
}, {
	properties: {
		properties: {
	type: 'AccordionPropertiesModel',
},
	},
}],
} as const;

export const $AccordionItemElementModel = {
	type: 'all-of',
	contains: [{
	type: 'IApiElementModelBase',
}, {
	properties: {
		properties: {
	type: 'AccordionItemPropertiesModel',
},
	},
}],
} as const;

export const $AccordionItemPropertiesModel = {
	properties: {
		title: {
	type: 'string',
	isNullable: true,
},
		text: {
	type: 'RichTextModel',
},
	},
} as const;

export const $AccordionPropertiesModel = {
	properties: {
		title: {
	type: 'string',
	isNullable: true,
},
		tabs: {
	type: 'ApiBlockListModel',
},
	},
} as const;

export const $ApiBlockGridAreaModel = {
	properties: {
		alias: {
	type: 'string',
},
		rowSpan: {
	type: 'number',
	format: 'int32',
},
		columnSpan: {
	type: 'number',
	format: 'int32',
},
		items: {
	type: 'array',
	contains: {
		type: 'ApiBlockGridItemModel',
	},
},
	},
} as const;

export const $ApiBlockGridItemModel = {
	type: 'all-of',
	contains: [{
	type: 'ApiBlockItemModel',
}, {
	properties: {
		rowSpan: {
	type: 'number',
	format: 'int32',
},
		columnSpan: {
	type: 'number',
	format: 'int32',
},
		areaGridColumns: {
	type: 'number',
	format: 'int32',
},
		areas: {
	type: 'array',
	contains: {
		type: 'ApiBlockGridAreaModel',
	},
},
	},
}],
} as const;

export const $ApiBlockItemModel = {
	properties: {
		content: {
	type: 'IApiElementModel',
},
		settings: {
	type: 'IApiElementModel',
},
	},
} as const;

export const $ApiBlockListModel = {
	properties: {
		items: {
	type: 'array',
	contains: {
	type: 'one-of',
	contains: [{
	type: 'ApiBlockItemModel',
}, {
	type: 'ApiBlockGridItemModel',
}],
},
},
	},
} as const;

export const $ApiLinkModel = {
	properties: {
		url: {
	type: 'string',
	isReadOnly: true,
	isNullable: true,
},
		queryString: {
	type: 'string',
	isReadOnly: true,
	isNullable: true,
},
		title: {
	type: 'string',
	isReadOnly: true,
	isNullable: true,
},
		target: {
	type: 'string',
	isReadOnly: true,
	isNullable: true,
},
		destinationId: {
	type: 'string',
	isReadOnly: true,
	isNullable: true,
	format: 'uuid',
},
		destinationType: {
	type: 'string',
	isReadOnly: true,
	isNullable: true,
},
		route: {
	type: 'IApiContentRouteModel',
},
		linkType: {
	type: 'LinkTypeModel',
},
	},
} as const;

export const $BannerElementModel = {
	type: 'all-of',
	contains: [{
	type: 'IApiElementModelBase',
}, {
	properties: {
		properties: {
	type: 'BannerPropertiesModel',
},
	},
}],
} as const;

export const $BannerPropertiesModel = {
	properties: {
		banners: {
	type: 'array',
	contains: {
		type: 'IApiMediaWithCropsModel',
	},
	isNullable: true,
},
	},
} as const;

export const $CarouselElementModel = {
	type: 'all-of',
	contains: [{
	type: 'IApiElementModelBase',
}, {
	properties: {
		properties: {
	type: 'CarouselPropertiesModel',
},
	},
}],
} as const;

export const $CarouselItemElementModel = {
	type: 'all-of',
	contains: [{
	type: 'IApiElementModelBase',
}, {
	properties: {
		properties: {
	type: 'CarouselItemPropertiesModel',
},
	},
}],
} as const;

export const $CarouselItemPropertiesModel = {
	properties: {
		title: {
	type: 'string',
	isNullable: true,
},
		image: {
	type: 'array',
	contains: {
		type: 'IApiMediaWithCropsModel',
	},
	isNullable: true,
},
	},
} as const;

export const $CarouselPropertiesModel = {
	properties: {
		title: {
	type: 'string',
	isNullable: true,
},
		carouselItems: {
	type: 'ApiBlockListModel',
},
	},
} as const;

export const $GenericContentModel = {
	type: 'all-of',
	contains: [{
	type: 'IApiContentModelBase',
}, {
	properties: {
		properties: {
	type: 'GenericPropertiesModel',
},
	},
}],
} as const;

export const $GenericContentResponseModel = {
	type: 'all-of',
	contains: [{
	type: 'IApiContentResponseModelBase',
}, {
	type: 'GenericContentModel',
}],
} as const;

export const $GenericPropertiesModel = {
	type: 'all-of',
	contains: [{
	type: 'SettingsPropertiesModel',
}, {
	type: 'BannerPropertiesModel',
}, {
	properties: {
		title: {
	type: 'string',
	isNullable: true,
},
		content: {
	type: 'ApiBlockListModel',
},
	},
}],
} as const;

export const $HomepageContentModel = {
	type: 'all-of',
	contains: [{
	type: 'IApiContentModelBase',
}, {
	properties: {
		properties: {
	type: 'HomepagePropertiesModel',
},
	},
}],
} as const;

export const $HomepageContentResponseModel = {
	type: 'all-of',
	contains: [{
	type: 'IApiContentResponseModelBase',
}, {
	type: 'HomepageContentModel',
}],
} as const;

export const $HomepagePropertiesModel = {
	type: 'all-of',
	contains: [{
	type: 'BannerPropertiesModel',
}, {
	properties: {
		title: {
	type: 'string',
	isNullable: true,
},
		content: {
	type: 'ApiBlockListModel',
},
		phoneNumber: {
	type: 'string',
	isNullable: true,
},
		emailAddress: {
	type: 'string',
	isNullable: true,
},
		logo: {
	type: 'array',
	contains: {
		type: 'IApiMediaWithCropsModel',
	},
	isNullable: true,
},
		searchPlaceholder: {
	type: 'string',
	isNullable: true,
},
		copyright: {
	type: 'string',
	isNullable: true,
},
		footerLinks: {
	type: 'array',
	contains: {
		type: 'ApiLinkModel',
	},
	isNullable: true,
},
	},
}],
} as const;

export const $HttpValidationProblemDetails = {
	type: 'all-of',
	contains: [{
	type: 'ProblemDetails',
}, {
	properties: {
		errors: {
	type: 'dictionary',
	contains: {
	type: 'array',
	contains: {
	type: 'string',
},
},
},
	},
}],
} as const;

export const $IApiContentModel = {
	type: 'one-of',
	contains: [{
	type: 'HomepageContentModel',
}, {
	type: 'GenericContentModel',
}, {
	type: 'PeopleContentModel',
}, {
	type: 'PersonContentModel',
}],
} as const;

export const $IApiContentModelBase = {
	type: 'all-of',
	contains: [{
	type: 'IApiElementModelBase',
}, {
	properties: {
		name: {
	type: 'string',
	isReadOnly: true,
	isNullable: true,
},
		createDate: {
	type: 'string',
	isReadOnly: true,
	format: 'date-time',
},
		updateDate: {
	type: 'string',
	isReadOnly: true,
	format: 'date-time',
},
		route: {
	type: 'IApiContentRouteModel',
},
		id: {
	type: 'string',
	isReadOnly: true,
	format: 'uuid',
},
		contentType: {
	type: 'string',
	isReadOnly: true,
},
		properties: {
	type: 'dictionary',
	contains: {
	properties: {
	},
},
	isReadOnly: true,
},
	},
}],
} as const;

export const $IApiContentResponseModel = {
	type: 'one-of',
	contains: [{
	type: 'HomepageContentResponseModel',
}, {
	type: 'GenericContentResponseModel',
}, {
	type: 'PeopleContentResponseModel',
}, {
	type: 'PersonContentResponseModel',
}],
} as const;

export const $IApiContentResponseModelBase = {
	type: 'all-of',
	contains: [{
	type: 'IApiContentModelBase',
}, {
	properties: {
		cultures: {
	type: 'dictionary',
	contains: {
		type: 'IApiContentRouteModel',
	},
	isReadOnly: true,
},
		name: {
	type: 'string',
	isReadOnly: true,
	isNullable: true,
},
		createDate: {
	type: 'string',
	isReadOnly: true,
	format: 'date-time',
},
		updateDate: {
	type: 'string',
	isReadOnly: true,
	format: 'date-time',
},
		route: {
	type: 'IApiContentRouteModel',
},
		id: {
	type: 'string',
	isReadOnly: true,
	format: 'uuid',
},
		contentType: {
	type: 'string',
	isReadOnly: true,
},
		properties: {
	type: 'dictionary',
	contains: {
	properties: {
	},
},
	isReadOnly: true,
},
	},
}],
} as const;

export const $IApiContentRouteModel = {
	properties: {
		path: {
	type: 'string',
	isReadOnly: true,
},
		startItem: {
	type: 'IApiContentStartItemModel',
},
	},
} as const;

export const $IApiContentStartItemModel = {
	properties: {
		id: {
	type: 'string',
	isReadOnly: true,
	format: 'uuid',
},
		path: {
	type: 'string',
	isReadOnly: true,
},
	},
} as const;

export const $IApiElementModel = {
	type: 'one-of',
	contains: [{
	type: 'TextWithImageElementModel',
}, {
	type: 'PromotionalImageElementModel',
}, {
	type: 'TabbedContentElementModel',
}, {
	type: 'TabbedContentItemElementModel',
}, {
	type: 'AccordionElementModel',
}, {
	type: 'AccordionItemElementModel',
}, {
	type: 'CarouselElementModel',
}, {
	type: 'CarouselItemElementModel',
}, {
	type: 'TwoUpElementModel',
}, {
	type: 'TextColumnElementModel',
}, {
	type: 'SettingsElementModel',
}, {
	type: 'SitemapElementModel',
}, {
	type: 'RichTextElementModel',
}, {
	type: 'BannerElementModel',
}],
} as const;

export const $IApiElementModelBase = {
	properties: {
		id: {
	type: 'string',
	isReadOnly: true,
	format: 'uuid',
},
		contentType: {
	type: 'string',
	isReadOnly: true,
},
		properties: {
	type: 'dictionary',
	contains: {
	properties: {
	},
},
	isReadOnly: true,
},
	},
} as const;

export const $IApiMediaWithCropsModel = {
	properties: {
		focalPoint: {
	type: 'ImageFocalPointModel',
},
		crops: {
	type: 'array',
	contains: {
		type: 'ImageCropModel',
	},
	isReadOnly: true,
	isNullable: true,
},
		id: {
	type: 'string',
	isReadOnly: true,
	format: 'uuid',
},
		name: {
	type: 'string',
	isReadOnly: true,
},
		mediaType: {
	type: 'string',
	isReadOnly: true,
},
		url: {
	type: 'string',
	isReadOnly: true,
},
		extension: {
	type: 'string',
	isReadOnly: true,
	isNullable: true,
},
		width: {
	type: 'number',
	isReadOnly: true,
	isNullable: true,
	format: 'int32',
},
		height: {
	type: 'number',
	isReadOnly: true,
	isNullable: true,
	format: 'int32',
},
		bytes: {
	type: 'number',
	isReadOnly: true,
	isNullable: true,
	format: 'int32',
},
		properties: {
	type: 'dictionary',
	contains: {
	properties: {
	},
},
	isReadOnly: true,
},
	},
} as const;

export const $IApiMediaWithCropsResponseModel = {
	properties: {
		path: {
	type: 'string',
	isReadOnly: true,
},
		createDate: {
	type: 'string',
	isReadOnly: true,
	format: 'date-time',
},
		updateDate: {
	type: 'string',
	isReadOnly: true,
	format: 'date-time',
},
		focalPoint: {
	type: 'ImageFocalPointModel',
},
		crops: {
	type: 'array',
	contains: {
		type: 'ImageCropModel',
	},
	isReadOnly: true,
	isNullable: true,
},
		id: {
	type: 'string',
	isReadOnly: true,
	format: 'uuid',
},
		name: {
	type: 'string',
	isReadOnly: true,
},
		mediaType: {
	type: 'string',
	isReadOnly: true,
},
		url: {
	type: 'string',
	isReadOnly: true,
},
		extension: {
	type: 'string',
	isReadOnly: true,
	isNullable: true,
},
		width: {
	type: 'number',
	isReadOnly: true,
	isNullable: true,
	format: 'int32',
},
		height: {
	type: 'number',
	isReadOnly: true,
	isNullable: true,
	format: 'int32',
},
		bytes: {
	type: 'number',
	isReadOnly: true,
	isNullable: true,
	format: 'int32',
},
		properties: {
	type: 'dictionary',
	contains: {
	properties: {
	},
},
	isReadOnly: true,
},
	},
} as const;

export const $ImageCropCoordinatesModel = {
	properties: {
		x1: {
	type: 'number',
	format: 'double',
},
		y1: {
	type: 'number',
	format: 'double',
},
		x2: {
	type: 'number',
	format: 'double',
},
		y2: {
	type: 'number',
	format: 'double',
},
	},
} as const;

export const $ImageCropModel = {
	properties: {
		alias: {
	type: 'string',
	isNullable: true,
},
		width: {
	type: 'number',
	format: 'int32',
},
		height: {
	type: 'number',
	format: 'int32',
},
		coordinates: {
	type: 'ImageCropCoordinatesModel',
},
	},
} as const;

export const $ImageFocalPointModel = {
	properties: {
		left: {
	type: 'number',
	format: 'double',
},
		top: {
	type: 'number',
	format: 'double',
},
	},
} as const;

export const $LinkTypeModel = {
	type: 'Enum',
	enum: ['Content','Media','External',],
} as const;

export const $PagedIApiContentResponseModel = {
	properties: {
		total: {
	type: 'number',
	isRequired: true,
	format: 'int64',
},
		items: {
	type: 'array',
	contains: {
		type: 'IApiContentResponseModel',
	},
	isRequired: true,
},
	},
} as const;

export const $PagedIApiMediaWithCropsResponseModel = {
	properties: {
		total: {
	type: 'number',
	isRequired: true,
	format: 'int64',
},
		items: {
	type: 'array',
	contains: {
		type: 'IApiMediaWithCropsResponseModel',
	},
	isRequired: true,
},
	},
} as const;

export const $PeopleContentModel = {
	type: 'all-of',
	contains: [{
	type: 'IApiContentModelBase',
}, {
	properties: {
		properties: {
	type: 'PeoplePropertiesModel',
},
	},
}],
} as const;

export const $PeopleContentResponseModel = {
	type: 'all-of',
	contains: [{
	type: 'IApiContentResponseModelBase',
}, {
	type: 'PeopleContentModel',
}],
} as const;

export const $PeoplePropertiesModel = {
	type: 'all-of',
	contains: [{
	type: 'SettingsPropertiesModel',
}, {
	type: 'BannerPropertiesModel',
}, {
	properties: {
		content: {
	type: 'ApiBlockListModel',
},
	},
}],
} as const;

export const $PersonContentModel = {
	type: 'all-of',
	contains: [{
	type: 'IApiContentModelBase',
}, {
	properties: {
		properties: {
	type: 'PersonPropertiesModel',
},
	},
}],
} as const;

export const $PersonContentResponseModel = {
	type: 'all-of',
	contains: [{
	type: 'IApiContentResponseModelBase',
}, {
	type: 'PersonContentModel',
}],
} as const;

export const $PersonPropertiesModel = {
	type: 'all-of',
	contains: [{
	type: 'SettingsPropertiesModel',
}, {
	type: 'BannerPropertiesModel',
}, {
	properties: {
		title: {
	type: 'string',
	isNullable: true,
},
		image: {
	type: 'array',
	contains: {
		type: 'IApiMediaWithCropsModel',
	},
	isNullable: true,
},
		jobTitle: {
	type: 'string',
	isNullable: true,
},
		phoneNumber: {
	type: 'string',
	isNullable: true,
},
		emailAddress: {
	type: 'string',
	isNullable: true,
},
		cV: {
	type: 'array',
	contains: {
		type: 'IApiMediaWithCropsModel',
	},
	isNullable: true,
},
		admissionsQualifications: {
	type: 'array',
	contains: {
	type: 'string',
},
	isNullable: true,
},
		keyAreasOfPractice: {
	type: 'array',
	contains: {
	type: 'string',
},
	isNullable: true,
},
		content: {
	type: 'ApiBlockListModel',
},
	},
}],
} as const;

export const $ProblemDetails = {
	properties: {
		type: {
	type: 'string',
	isNullable: true,
},
		title: {
	type: 'string',
	isNullable: true,
},
		status: {
	type: 'number',
	isNullable: true,
	format: 'int32',
},
		detail: {
	type: 'string',
	isNullable: true,
},
		instance: {
	type: 'string',
	isNullable: true,
},
	},
} as const;

export const $PromotionalImageElementModel = {
	type: 'all-of',
	contains: [{
	type: 'IApiElementModelBase',
}, {
	properties: {
		properties: {
	type: 'PromotionalImagePropertiesModel',
},
	},
}],
} as const;

export const $PromotionalImagePropertiesModel = {
	properties: {
		title: {
	type: 'string',
	isNullable: true,
},
		image: {
	type: 'array',
	contains: {
		type: 'IApiMediaWithCropsModel',
	},
	isNullable: true,
},
		link: {
	type: 'array',
	contains: {
		type: 'ApiLinkModel',
	},
	isNullable: true,
},
	},
} as const;

export const $RichTextElementModel = {
	type: 'all-of',
	contains: [{
	type: 'IApiElementModelBase',
}, {
	properties: {
		properties: {
	type: 'RichTextPropertiesModel',
},
	},
}],
} as const;

export const $RichTextModel = {
	properties: {
		markup: {
	type: 'string',
},
		blocks: {
	type: 'array',
	contains: {
	type: 'one-of',
	contains: [{
	type: 'ApiBlockItemModel',
}, {
	type: 'ApiBlockGridItemModel',
}],
},
},
	},
} as const;

export const $RichTextPropertiesModel = {
	properties: {
		text: {
	type: 'RichTextModel',
},
	},
} as const;

export const $SettingsElementModel = {
	type: 'all-of',
	contains: [{
	type: 'IApiElementModelBase',
}, {
	properties: {
		properties: {
	type: 'SettingsPropertiesModel',
},
	},
}],
} as const;

export const $SettingsPropertiesModel = {
	properties: {
		umbracoNaviHide: {
	type: 'boolean',
	isNullable: true,
},
	},
} as const;

export const $SitemapElementModel = {
	type: 'all-of',
	contains: [{
	type: 'IApiElementModelBase',
}, {
	properties: {
		properties: {
	type: 'SitemapPropertiesModel',
},
	},
}],
} as const;

export const $SitemapPropertiesModel = {
	properties: {
		title: {
	type: 'string',
	isNullable: true,
},
	},
} as const;

export const $TabbedContentElementModel = {
	type: 'all-of',
	contains: [{
	type: 'IApiElementModelBase',
}, {
	properties: {
		properties: {
	type: 'TabbedContentPropertiesModel',
},
	},
}],
} as const;

export const $TabbedContentItemElementModel = {
	type: 'all-of',
	contains: [{
	type: 'IApiElementModelBase',
}, {
	properties: {
		properties: {
	type: 'TabbedContentItemPropertiesModel',
},
	},
}],
} as const;

export const $TabbedContentItemPropertiesModel = {
	properties: {
		title: {
	type: 'string',
	isNullable: true,
},
		text: {
	type: 'RichTextModel',
},
	},
} as const;

export const $TabbedContentPropertiesModel = {
	properties: {
		title: {
	type: 'string',
	isNullable: true,
},
		tabs: {
	type: 'ApiBlockListModel',
},
	},
} as const;

export const $TextColumnElementModel = {
	type: 'all-of',
	contains: [{
	type: 'IApiElementModelBase',
}, {
	properties: {
		properties: {
	type: 'TextColumnPropertiesModel',
},
	},
}],
} as const;

export const $TextColumnPropertiesModel = {
	properties: {
		title: {
	type: 'string',
	isNullable: true,
},
		text: {
	type: 'RichTextModel',
},
	},
} as const;

export const $TextWithImageElementModel = {
	type: 'all-of',
	contains: [{
	type: 'IApiElementModelBase',
}, {
	properties: {
		properties: {
	type: 'TextWithImagePropertiesModel',
},
	},
}],
} as const;

export const $TextWithImagePropertiesModel = {
	properties: {
		title: {
	type: 'string',
	isNullable: true,
},
		text: {
	type: 'RichTextModel',
},
		image: {
	type: 'array',
	contains: {
		type: 'IApiMediaWithCropsModel',
	},
	isNullable: true,
},
	},
} as const;

export const $TwoUpElementModel = {
	type: 'all-of',
	contains: [{
	type: 'IApiElementModelBase',
}, {
	properties: {
		properties: {
	type: 'TwoUpPropertiesModel',
},
	},
}],
} as const;

export const $TwoUpPropertiesModel = {
	properties: {
		title: {
	type: 'string',
	isNullable: true,
},
		columns: {
	type: 'ApiBlockListModel',
},
	},
} as const;