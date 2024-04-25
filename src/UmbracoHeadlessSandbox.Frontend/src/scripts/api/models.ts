export type AccordionElementModel = (IApiElementModelBase & {
	properties?: AccordionPropertiesModel;
});



export type AccordionItemElementModel = (IApiElementModelBase & {
	properties?: AccordionItemPropertiesModel;
});



export type AccordionItemPropertiesModel = {
	title?: string | null;
	text?: RichTextModel;
};



export type AccordionPropertiesModel = {
	title?: string | null;
	tabs?: ApiBlockListModel;
};



export type ApiBlockGridAreaModel = {
	alias?: string;
	rowSpan?: number;
	columnSpan?: number;
	items?: Array<ApiBlockGridItemModel>;
};



export type ApiBlockGridItemModel = (ApiBlockItemModel & {
	rowSpan?: number;
	columnSpan?: number;
	areaGridColumns?: number;
	areas?: Array<ApiBlockGridAreaModel>;
});



export type ApiBlockItemModel = {
	content?: IApiElementModel;
	settings?: IApiElementModel;
};



export type ApiBlockListModel = {
	items?: Array<ApiBlockItemModel | ApiBlockGridItemModel>;
};



export type ApiLinkModel = {
	readonly url?: string | null;
	readonly queryString?: string | null;
	readonly title?: string | null;
	readonly target?: string | null;
	readonly destinationId?: string | null;
	readonly destinationType?: string | null;
	route?: IApiContentRouteModel;
	linkType?: LinkTypeModel;
};



export type BannerElementModel = (IApiElementModelBase & {
	properties?: BannerPropertiesModel;
});



export type BannerPropertiesModel = {
	banners?: Array<IApiMediaWithCropsModel> | null;
};



export type CarouselElementModel = (IApiElementModelBase & {
	properties?: CarouselPropertiesModel;
});



export type CarouselItemElementModel = (IApiElementModelBase & {
	properties?: CarouselItemPropertiesModel;
});



export type CarouselItemPropertiesModel = {
	title?: string | null;
	image?: Array<IApiMediaWithCropsModel> | null;
};



export type CarouselPropertiesModel = {
	title?: string | null;
	carouselItems?: ApiBlockListModel;
};



export type GenericContentModel = (IApiContentModelBase & {
	properties?: GenericPropertiesModel;
});



export type GenericContentResponseModel = (IApiContentResponseModelBase & GenericContentModel);



export type GenericPropertiesModel = (SettingsPropertiesModel & BannerPropertiesModel & {
	title?: string | null;
	content?: ApiBlockListModel;
});



export type HomepageContentModel = (IApiContentModelBase & {
	properties?: HomepagePropertiesModel;
});



export type HomepageContentResponseModel = (IApiContentResponseModelBase & HomepageContentModel);



export type HomepagePropertiesModel = (BannerPropertiesModel & {
	title?: string | null;
	content?: ApiBlockListModel;
	phoneNumber?: string | null;
	emailAddress?: string | null;
	logo?: Array<IApiMediaWithCropsModel> | null;
	searchPlaceholder?: string | null;
	copyright?: string | null;
	footerLinks?: Array<ApiLinkModel> | null;
});



export type HttpValidationProblemDetails = (ProblemDetails & {
	errors?: Record<string, Array<string>>;
});



export type IApiContentModel = HomepageContentModel | GenericContentModel | PeopleContentModel | PersonContentModel;



export type IApiContentModelBase = (IApiElementModelBase & {
	readonly name?: string | null;
	readonly createDate?: string;
	readonly updateDate?: string;
	route?: IApiContentRouteModel;
	readonly id?: string;
	readonly contentType?: string;
	readonly properties?: Record<string, unknown>;
});



export type IApiContentResponseModel = HomepageContentResponseModel | GenericContentResponseModel | PeopleContentResponseModel | PersonContentResponseModel;



export type IApiContentResponseModelBase = (IApiContentModelBase & {
	readonly cultures?: Record<string, IApiContentRouteModel>;
	readonly name?: string | null;
	readonly createDate?: string;
	readonly updateDate?: string;
	route?: IApiContentRouteModel;
	readonly id?: string;
	readonly contentType?: string;
	readonly properties?: Record<string, unknown>;
});



export type IApiContentRouteModel = {
	readonly path?: string;
	startItem?: IApiContentStartItemModel;
};



export type IApiContentStartItemModel = {
	readonly id?: string;
	readonly path?: string;
};



export type IApiElementModel = TextWithImageElementModel | PromotionalImageElementModel | TabbedContentElementModel | TabbedContentItemElementModel | AccordionElementModel | AccordionItemElementModel | CarouselElementModel | CarouselItemElementModel | TwoUpElementModel | TextColumnElementModel | SettingsElementModel | SitemapElementModel | RichTextElementModel | BannerElementModel;



export type IApiElementModelBase = {
	readonly id?: string;
	readonly contentType?: string;
	readonly properties?: Record<string, unknown>;
};



export type IApiMediaWithCropsModel = {
	focalPoint?: ImageFocalPointModel;
	readonly crops?: Array<ImageCropModel> | null;
	readonly id?: string;
	readonly name?: string;
	readonly mediaType?: string;
	readonly url?: string;
	readonly extension?: string | null;
	readonly width?: number | null;
	readonly height?: number | null;
	readonly bytes?: number | null;
	readonly properties?: Record<string, unknown>;
};



export type IApiMediaWithCropsResponseModel = {
	readonly path?: string;
	readonly createDate?: string;
	readonly updateDate?: string;
	focalPoint?: ImageFocalPointModel;
	readonly crops?: Array<ImageCropModel> | null;
	readonly id?: string;
	readonly name?: string;
	readonly mediaType?: string;
	readonly url?: string;
	readonly extension?: string | null;
	readonly width?: number | null;
	readonly height?: number | null;
	readonly bytes?: number | null;
	readonly properties?: Record<string, unknown>;
};



export type ImageCropCoordinatesModel = {
	x1?: number;
	y1?: number;
	x2?: number;
	y2?: number;
};



export type ImageCropModel = {
	alias?: string | null;
	width?: number;
	height?: number;
	coordinates?: ImageCropCoordinatesModel;
};



export type ImageFocalPointModel = {
	left?: number;
	top?: number;
};



export type LinkTypeModel = 'Content' | 'Media' | 'External';



export type PagedIApiContentResponseModel = {
	total: number;
	items: Array<IApiContentResponseModel>;
};



export type PagedIApiMediaWithCropsResponseModel = {
	total: number;
	items: Array<IApiMediaWithCropsResponseModel>;
};



export type PeopleContentModel = (IApiContentModelBase & {
	properties?: PeoplePropertiesModel;
});



export type PeopleContentResponseModel = (IApiContentResponseModelBase & PeopleContentModel);



export type PeoplePropertiesModel = (SettingsPropertiesModel & BannerPropertiesModel & {
	content?: ApiBlockListModel;
});



export type PersonContentModel = (IApiContentModelBase & {
	properties?: PersonPropertiesModel;
});



export type PersonContentResponseModel = (IApiContentResponseModelBase & PersonContentModel);



export type PersonPropertiesModel = (SettingsPropertiesModel & BannerPropertiesModel & {
	title?: string | null;
	image?: Array<IApiMediaWithCropsModel> | null;
	jobTitle?: string | null;
	phoneNumber?: string | null;
	emailAddress?: string | null;
	cV?: Array<IApiMediaWithCropsModel> | null;
	admissionsQualifications?: Array<string> | null;
	keyAreasOfPractice?: Array<string> | null;
	content?: ApiBlockListModel;
});



export type ProblemDetails = {
	type?: string | null;
	title?: string | null;
	status?: number | null;
	detail?: string | null;
	instance?: string | null;
};



export type PromotionalImageElementModel = (IApiElementModelBase & {
	properties?: PromotionalImagePropertiesModel;
});



export type PromotionalImagePropertiesModel = {
	title?: string | null;
	image?: Array<IApiMediaWithCropsModel> | null;
	link?: Array<ApiLinkModel> | null;
};



export type RichTextElementModel = (IApiElementModelBase & {
	properties?: RichTextPropertiesModel;
});



export type RichTextModel = {
	markup?: string;
	blocks?: Array<ApiBlockItemModel | ApiBlockGridItemModel>;
};



export type RichTextPropertiesModel = {
	text?: RichTextModel;
};



export type SettingsElementModel = (IApiElementModelBase & {
	properties?: SettingsPropertiesModel;
});



export type SettingsPropertiesModel = {
	umbracoNaviHide?: boolean | null;
};



export type SitemapElementModel = (IApiElementModelBase & {
	properties?: SitemapPropertiesModel;
});



export type SitemapPropertiesModel = {
	title?: string | null;
};



export type TabbedContentElementModel = (IApiElementModelBase & {
	properties?: TabbedContentPropertiesModel;
});



export type TabbedContentItemElementModel = (IApiElementModelBase & {
	properties?: TabbedContentItemPropertiesModel;
});



export type TabbedContentItemPropertiesModel = {
	title?: string | null;
	text?: RichTextModel;
};



export type TabbedContentPropertiesModel = {
	title?: string | null;
	tabs?: ApiBlockListModel;
};



export type TextColumnElementModel = (IApiElementModelBase & {
	properties?: TextColumnPropertiesModel;
});



export type TextColumnPropertiesModel = {
	title?: string | null;
	text?: RichTextModel;
};



export type TextWithImageElementModel = (IApiElementModelBase & {
	properties?: TextWithImagePropertiesModel;
});



export type TextWithImagePropertiesModel = {
	title?: string | null;
	text?: RichTextModel;
	image?: Array<IApiMediaWithCropsModel> | null;
};



export type TwoUpElementModel = (IApiElementModelBase & {
	properties?: TwoUpPropertiesModel;
});



export type TwoUpPropertiesModel = {
	title?: string | null;
	columns?: ApiBlockListModel;
};

