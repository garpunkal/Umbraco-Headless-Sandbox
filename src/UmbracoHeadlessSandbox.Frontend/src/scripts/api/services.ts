import type { CancelablePromise } from './core/CancelablePromise';
import type { BaseHttpRequest } from './core/BaseHttpRequest';

import type { IApiContentResponseModel, PagedIApiContentResponseModel, IApiMediaWithCropsResponseModel, PagedIApiMediaWithCropsResponseModel } from './models';

export type ContentData = {
	GetContent: {
		/**
* Defines the language to return. Use this when querying language variant content items.
*/
		acceptLanguage?: string
		/**
		 * API key specified through configuration to authorize access to the API.
		 */
		apiKey?: string
		/**
		 * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
		 */
		expand?: string
		/**
		 * Specifies the content items to fetch. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
		 */
		fetch?: string
		/**
		 * Defines how to filter the fetched content items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
		 */
		filter?: Array<string>
		/**
		 * Whether to request draft content.
		 */
		preview?: boolean
		/**
		 * Specifies the number of found content items to skip. Use this to control pagination of the response.
		 */
		skip?: number
		/**
		 * Defines how to sort the found content items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
		 */
		sort?: Array<string>
		/**
		 * URL segment or GUID of a root content item.
		 */
		startItem?: string
		/**
		 * Specifies the number of found content items to take. Use this to control pagination of the response.
		 */
		take?: number

	};
	GetContent20: {
		/**
* Defines the language to return. Use this when querying language variant content items.
*/
		acceptLanguage?: string
		/**
		 * API key specified through configuration to authorize access to the API.
		 */
		apiKey?: string
		/**
		 * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
		 */
		expand?: string
		/**
		 * Specifies the content items to fetch. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
		 */
		fetch?: string
		/**
		 * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
		 */
		fields?: string
		/**
		 * Defines how to filter the fetched content items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
		 */
		filter?: Array<string>
		/**
		 * Whether to request draft content.
		 */
		preview?: boolean
		/**
		 * Specifies the number of found content items to skip. Use this to control pagination of the response.
		 */
		skip?: number
		/**
		 * Defines how to sort the found content items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
		 */
		sort?: Array<string>
		/**
		 * URL segment or GUID of a root content item.
		 */
		startItem?: string
		/**
		 * Specifies the number of found content items to take. Use this to control pagination of the response.
		 */
		take?: number

	};
	GetContentBySearch20: {
		/**
* Defines the language to return. Use this when querying language variant content items.
*/
		acceptLanguage?: string
		/**
		 * API key specified through configuration to authorize access to the API.
		 */
		apiKey?: string
		/**
		 * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
		 */
		expand?: string
		/**
		 * Specifies the content items to fetch. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
		 */
		fetch?: string
		/**
		 * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
		 */
		fields?: string
		/**
		 * Defines how to filter the fetched content items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
		 */
		filter?: Array<string>
		/**
		 * Whether to request draft content.
		 */
		preview?: boolean
		query?: string
		/**
		 * Specifies the number of found content items to skip. Use this to control pagination of the response.
		 */
		skip?: number
		/**
		 * Defines how to sort the found content items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
		 */
		sort?: Array<string>
		/**
		 * URL segment or GUID of a root content item.
		 */
		startItem?: string
		/**
		 * Specifies the number of found content items to take. Use this to control pagination of the response.
		 */
		take?: number

	};
	GetContentBySitemap20: {
		/**
* Defines the language to return. Use this when querying language variant content items.
*/
		acceptLanguage?: string
		/**
		 * API key specified through configuration to authorize access to the API.
		 */
		apiKey?: string
		/**
		 * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
		 */
		expand?: string
		/**
		 * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
		 */
		fields?: string
		/**
		 * Whether to request draft content.
		 */
		preview?: boolean
		/**
		 * URL segment or GUID of a root content item.
		 */
		startItem?: string

	};
	GetContentItem: {
		/**
* Defines the language to return. Use this when querying language variant content items.
*/
		acceptLanguage?: string
		/**
		 * API key specified through configuration to authorize access to the API.
		 */
		apiKey?: string
		/**
		 * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
		 */
		expand?: string
		id?: Array<string>
		/**
		 * Whether to request draft content.
		 */
		preview?: boolean
		/**
		 * URL segment or GUID of a root content item.
		 */
		startItem?: string

	};
	GetContentItemByPath: {
		/**
* Defines the language to return. Use this when querying language variant content items.
*/
		acceptLanguage?: string
		/**
		 * API key specified through configuration to authorize access to the API.
		 */
		apiKey?: string
		/**
		 * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
		 */
		expand?: string
		path?: string
		/**
		 * Whether to request draft content.
		 */
		preview?: boolean
		/**
		 * URL segment or GUID of a root content item.
		 */
		startItem?: string

	};
	GetContentItemByPath20: {
		/**
* Defines the language to return. Use this when querying language variant content items.
*/
		acceptLanguage?: string
		/**
		 * API key specified through configuration to authorize access to the API.
		 */
		apiKey?: string
		/**
		 * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
		 */
		expand?: string
		/**
		 * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
		 */
		fields?: string
		path?: string
		/**
		 * Whether to request draft content.
		 */
		preview?: boolean
		/**
		 * URL segment or GUID of a root content item.
		 */
		startItem?: string

	};
	GetContentItemById: {
		/**
* Defines the language to return. Use this when querying language variant content items.
*/
		acceptLanguage?: string
		/**
		 * API key specified through configuration to authorize access to the API.
		 */
		apiKey?: string
		/**
		 * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
		 */
		expand?: string
		id: string
		/**
		 * Whether to request draft content.
		 */
		preview?: boolean
		/**
		 * URL segment or GUID of a root content item.
		 */
		startItem?: string

	};
	GetContentItemById20: {
		/**
* Defines the language to return. Use this when querying language variant content items.
*/
		acceptLanguage?: string
		/**
		 * API key specified through configuration to authorize access to the API.
		 */
		apiKey?: string
		/**
		 * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
		 */
		expand?: string
		/**
		 * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
		 */
		fields?: string
		id: string
		/**
		 * Whether to request draft content.
		 */
		preview?: boolean
		/**
		 * URL segment or GUID of a root content item.
		 */
		startItem?: string

	};
	GetContentItems20: {
		/**
* Defines the language to return. Use this when querying language variant content items.
*/
		acceptLanguage?: string
		/**
		 * API key specified through configuration to authorize access to the API.
		 */
		apiKey?: string
		/**
		 * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
		 */
		expand?: string
		/**
		 * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#query-parameters) for more details on this.
		 */
		fields?: string
		id?: Array<string>
		/**
		 * Whether to request draft content.
		 */
		preview?: boolean
		/**
		 * URL segment or GUID of a root content item.
		 */
		startItem?: string

	};
}

export type MediaData = {
	GetMedia: {
		/**
* API key specified through configuration to authorize access to the API.
*/
		apiKey?: string
		/**
		 * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
		 */
		expand?: string
		/**
		 * Specifies the media items to fetch. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
		 */
		fetch?: string
		/**
		 * Defines how to filter the fetched media items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
		 */
		filter?: Array<string>
		/**
		 * Specifies the number of found media items to skip. Use this to control pagination of the response.
		 */
		skip?: number
		/**
		 * Defines how to sort the found media items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
		 */
		sort?: Array<string>
		/**
		 * Specifies the number of found media items to take. Use this to control pagination of the response.
		 */
		take?: number

	};
	GetMedia20: {
		/**
* API key specified through configuration to authorize access to the API.
*/
		apiKey?: string
		/**
		 * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
		 */
		expand?: string
		/**
		 * Specifies the media items to fetch. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
		 */
		fetch?: string
		/**
		 * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
		 */
		fields?: string
		/**
		 * Defines how to filter the fetched media items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
		 */
		filter?: Array<string>
		/**
		 * Specifies the number of found media items to skip. Use this to control pagination of the response.
		 */
		skip?: number
		/**
		 * Defines how to sort the found media items. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
		 */
		sort?: Array<string>
		/**
		 * Specifies the number of found media items to take. Use this to control pagination of the response.
		 */
		take?: number

	};
	GetMediaItem: {
		/**
* API key specified through configuration to authorize access to the API.
*/
		apiKey?: string
		/**
		 * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
		 */
		expand?: string
		id?: Array<string>

	};
	GetMediaItemByPath: {
		/**
* API key specified through configuration to authorize access to the API.
*/
		apiKey?: string
		/**
		 * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
		 */
		expand?: string
		path: string

	};
	GetMediaItemByPath20: {
		/**
* API key specified through configuration to authorize access to the API.
*/
		apiKey?: string
		/**
		 * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
		 */
		expand?: string
		/**
		 * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
		 */
		fields?: string
		path: string

	};
	GetMediaItemById: {
		/**
* API key specified through configuration to authorize access to the API.
*/
		apiKey?: string
		/**
		 * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
		 */
		expand?: string
		id: string

	};
	GetMediaItemById20: {
		/**
* API key specified through configuration to authorize access to the API.
*/
		apiKey?: string
		/**
		 * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
		 */
		expand?: string
		/**
		 * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
		 */
		fields?: string
		id: string

	};
	GetMediaItems20: {
		/**
* API key specified through configuration to authorize access to the API.
*/
		apiKey?: string
		/**
		 * Defines the properties that should be expanded in the response. Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
		 */
		expand?: string
		/**
		 * Explicitly defines which properties should be included in the response (by default all properties are included). Refer to [the documentation](https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api/media-delivery-api#query-parameters) for more details on this.
		 */
		fields?: string
		id?: Array<string>

	};
}

export class ContentService {

	constructor(public readonly httpRequest: BaseHttpRequest) { }

	/**
	 * @deprecated
	 * @returns PagedIApiContentResponseModel Success
	 * @throws ApiError
	 */
	public getContent(data: ContentData['GetContent'] = {}): CancelablePromise<PagedIApiContentResponseModel> {
		const {
			fetch,
			filter,
			sort,
			skip = 0,
			take = 10,
			expand,
			acceptLanguage,
			apiKey,
			preview,
			startItem,
		} = data;
		return this.httpRequest.request({
			method: 'GET',
			url: '/umbraco/delivery/api/v1/content',
			headers: {
				'Accept-Language': acceptLanguage, 'Api-Key': apiKey, Preview: preview, 'Start-Item': startItem
			},
			query: {
				fetch, filter, sort, skip, take, expand
			},
			errors: {
				400: `Bad Request`,
				404: `Not Found`,
			},
		});
	}

	/**
	 * @returns PagedIApiContentResponseModel Success
	 * @throws ApiError
	 */
	public getContent20(data: ContentData['GetContent20'] = {}): CancelablePromise<PagedIApiContentResponseModel> {
		const {
			fetch,
			filter,
			sort,
			skip = 0,
			take = 10,
			expand,
			fields,
			acceptLanguage,
			apiKey,
			preview,
			startItem,
		} = data;
		return this.httpRequest.request({
			method: 'GET',
			url: '/umbraco/delivery/api/v2/content',
			headers: {
				'Accept-Language': acceptLanguage, 'Api-Key': apiKey, Preview: preview, 'Start-Item': startItem
			},
			query: {
				fetch, filter, sort, skip, take, expand, fields
			},
			errors: {
				400: `Bad Request`,
				404: `Not Found`,
			},
		});
	}

	/**
	 * @returns PagedIApiContentResponseModel Success
	 * @throws ApiError
	 */
	public getContentBySearch20(data: ContentData['GetContentBySearch20'] = {}): CancelablePromise<PagedIApiContentResponseModel> {
		const {
			query,
			fetch,
			filter,
			sort,
			skip = 0,
			take = 10,
			expand,
			fields,
			acceptLanguage,
			apiKey,
			preview,
			startItem,
		} = data;
		return this.httpRequest.request({
			method: 'GET',
			url: '/umbraco/delivery/api/v2/content/BySearch',
			headers: {
				'Accept-Language': acceptLanguage, 'Api-Key': apiKey, Preview: preview, 'Start-Item': startItem
			},
			query: {
				query, fetch, filter, sort, skip, take, expand, fields
			},
			errors: {
				400: `Bad Request`,
				404: `Not Found`,
			},
		});
	}

	/**
	 * @returns PagedIApiContentResponseModel Success
	 * @throws ApiError
	 */
	public getContentBySitemap20(data: ContentData['GetContentBySitemap20'] = {}): CancelablePromise<PagedIApiContentResponseModel> {
		const {
			expand,
			fields,
			acceptLanguage,
			apiKey,
			preview,
			startItem,
		} = data;
		return this.httpRequest.request({
			method: 'GET',
			url: '/umbraco/delivery/api/v2/content/BySitemap',
			headers: {
				'Accept-Language': acceptLanguage, 'Api-Key': apiKey, Preview: preview, 'Start-Item': startItem
			},
			query: {
				expand, fields
			},
			errors: {
				400: `Bad Request`,
				404: `Not Found`,
			},
		});
	}

	/**
	 * @deprecated
	 * @returns IApiContentResponseModel Success
	 * @throws ApiError
	 */
	public getContentItem(data: ContentData['GetContentItem'] = {}): CancelablePromise<Array<IApiContentResponseModel>> {
		const {
			id,
			expand,
			acceptLanguage,
			apiKey,
			preview,
			startItem,
		} = data;
		return this.httpRequest.request({
			method: 'GET',
			url: '/umbraco/delivery/api/v1/content/item',
			headers: {
				'Accept-Language': acceptLanguage, 'Api-Key': apiKey, Preview: preview, 'Start-Item': startItem
			},
			query: {
				id, expand
			},
			errors: {
				401: `Unauthorized`,
				403: `Forbidden`,
			},
		});
	}

	/**
	 * @deprecated
	 * @returns IApiContentResponseModel Success
	 * @throws ApiError
	 */
	public getContentItemByPath(data: ContentData['GetContentItemByPath']): CancelablePromise<IApiContentResponseModel> {
		const {
			path = '',
			expand,
			acceptLanguage,
			apiKey,
			preview,
			startItem,
		} = data;
		return this.httpRequest.request({
			method: 'GET',
			url: '/umbraco/delivery/api/v1/content/item/{path}',
			path: {
				path
			},
			headers: {
				'Accept-Language': acceptLanguage, 'Api-Key': apiKey, Preview: preview, 'Start-Item': startItem
			},
			query: {
				expand
			},
			errors: {
				401: `Unauthorized`,
				403: `Forbidden`,
				404: `Not Found`,
			},
		});
	}

	/**
	 * @returns IApiContentResponseModel Success
	 * @throws ApiError
	 */
	public getContentItemByPath20(data: ContentData['GetContentItemByPath20']): CancelablePromise<IApiContentResponseModel> {
		const {
			path = '',
			expand,
			fields,
			acceptLanguage,
			apiKey,
			preview,
			startItem,
		} = data;
		return this.httpRequest.request({
			method: 'GET',
			url: '/umbraco/delivery/api/v2/content/item/{path}',
			path: {
				path
			},
			headers: {
				'Accept-Language': acceptLanguage, 'Api-Key': apiKey, Preview: preview, 'Start-Item': startItem
			},
			query: {
				expand, fields
			},
			errors: {
				401: `Unauthorized`,
				403: `Forbidden`,
				404: `Not Found`,
			},
		});
	}

	/**
	 * @deprecated
	 * @returns IApiContentResponseModel Success
	 * @throws ApiError
	 */
	public getContentItemById(data: ContentData['GetContentItemById']): CancelablePromise<IApiContentResponseModel> {
		const {
			id,
			expand,
			acceptLanguage,
			apiKey,
			preview,
			startItem,
		} = data;
		return this.httpRequest.request({
			method: 'GET',
			url: '/umbraco/delivery/api/v1/content/item/{id}',
			path: {
				id
			},
			headers: {
				'Accept-Language': acceptLanguage, 'Api-Key': apiKey, Preview: preview, 'Start-Item': startItem
			},
			query: {
				expand
			},
			errors: {
				401: `Unauthorized`,
				403: `Forbidden`,
				404: `Not Found`,
			},
		});
	}

	/**
	 * @returns IApiContentResponseModel Success
	 * @throws ApiError
	 */
	public getContentItemById20(data: ContentData['GetContentItemById20']): CancelablePromise<IApiContentResponseModel> {
		const {
			id,
			expand,
			fields,
			acceptLanguage,
			apiKey,
			preview,
			startItem,
		} = data;
		return this.httpRequest.request({
			method: 'GET',
			url: '/umbraco/delivery/api/v2/content/item/{id}',
			path: {
				id
			},
			headers: {
				'Accept-Language': acceptLanguage, 'Api-Key': apiKey, Preview: preview, 'Start-Item': startItem
			},
			query: {
				expand, fields
			},
			errors: {
				401: `Unauthorized`,
				403: `Forbidden`,
				404: `Not Found`,
			},
		});
	}

	/**
	 * @returns IApiContentResponseModel Success
	 * @throws ApiError
	 */
	public getContentItems20(data: ContentData['GetContentItems20'] = {}): CancelablePromise<Array<IApiContentResponseModel>> {
		const {
			id,
			expand,
			fields,
			acceptLanguage,
			apiKey,
			preview,
			startItem,
		} = data;
		return this.httpRequest.request({
			method: 'GET',
			url: '/umbraco/delivery/api/v2/content/items',
			headers: {
				'Accept-Language': acceptLanguage, 'Api-Key': apiKey, Preview: preview, 'Start-Item': startItem
			},
			query: {
				id, expand, fields
			},
			errors: {
				401: `Unauthorized`,
				403: `Forbidden`,
			},
		});
	}

}

export class MediaService {

	constructor(public readonly httpRequest: BaseHttpRequest) { }

	/**
	 * @deprecated
	 * @returns PagedIApiMediaWithCropsResponseModel Success
	 * @throws ApiError
	 */
	public getMedia(data: MediaData['GetMedia'] = {}): CancelablePromise<PagedIApiMediaWithCropsResponseModel> {
		const {
			fetch,
			filter,
			sort,
			skip = 0,
			take = 10,
			expand,
			apiKey,
		} = data;
		return this.httpRequest.request({
			method: 'GET',
			url: '/umbraco/delivery/api/v1/media',
			headers: {
				'Api-Key': apiKey
			},
			query: {
				fetch, filter, sort, skip, take, expand
			},
			errors: {
				400: `Bad Request`,
			},
		});
	}

	/**
	 * @returns PagedIApiMediaWithCropsResponseModel Success
	 * @throws ApiError
	 */
	public getMedia20(data: MediaData['GetMedia20'] = {}): CancelablePromise<PagedIApiMediaWithCropsResponseModel> {
		const {
			fetch,
			filter,
			sort,
			skip = 0,
			take = 10,
			expand,
			fields,
			apiKey,
		} = data;
		return this.httpRequest.request({
			method: 'GET',
			url: '/umbraco/delivery/api/v2/media',
			headers: {
				'Api-Key': apiKey
			},
			query: {
				fetch, filter, sort, skip, take, expand, fields
			},
			errors: {
				400: `Bad Request`,
			},
		});
	}

	/**
	 * @deprecated
	 * @returns IApiMediaWithCropsResponseModel Success
	 * @throws ApiError
	 */
	public getMediaItem(data: MediaData['GetMediaItem'] = {}): CancelablePromise<Array<IApiMediaWithCropsResponseModel>> {
		const {
			id,
			expand,
			apiKey,
		} = data;
		return this.httpRequest.request({
			method: 'GET',
			url: '/umbraco/delivery/api/v1/media/item',
			headers: {
				'Api-Key': apiKey
			},
			query: {
				id, expand
			},
		});
	}

	/**
	 * @deprecated
	 * @returns IApiMediaWithCropsResponseModel Success
	 * @throws ApiError
	 */
	public getMediaItemByPath(data: MediaData['GetMediaItemByPath']): CancelablePromise<IApiMediaWithCropsResponseModel> {
		const {
			path,
			expand,
			apiKey,
		} = data;
		return this.httpRequest.request({
			method: 'GET',
			url: '/umbraco/delivery/api/v1/media/item/{path}',
			path: {
				path
			},
			headers: {
				'Api-Key': apiKey
			},
			query: {
				expand
			},
			errors: {
				404: `Not Found`,
			},
		});
	}

	/**
	 * @returns IApiMediaWithCropsResponseModel Success
	 * @throws ApiError
	 */
	public getMediaItemByPath20(data: MediaData['GetMediaItemByPath20']): CancelablePromise<IApiMediaWithCropsResponseModel> {
		const {
			path,
			expand,
			fields,
			apiKey,
		} = data;
		return this.httpRequest.request({
			method: 'GET',
			url: '/umbraco/delivery/api/v2/media/item/{path}',
			path: {
				path
			},
			headers: {
				'Api-Key': apiKey
			},
			query: {
				expand, fields
			},
			errors: {
				404: `Not Found`,
			},
		});
	}

	/**
	 * @deprecated
	 * @returns IApiMediaWithCropsResponseModel Success
	 * @throws ApiError
	 */
	public getMediaItemById(data: MediaData['GetMediaItemById']): CancelablePromise<IApiMediaWithCropsResponseModel> {
		const {
			id,
			expand,
			apiKey,
		} = data;
		return this.httpRequest.request({
			method: 'GET',
			url: '/umbraco/delivery/api/v1/media/item/{id}',
			path: {
				id
			},
			headers: {
				'Api-Key': apiKey
			},
			query: {
				expand
			},
			errors: {
				404: `Not Found`,
			},
		});
	}

	/**
	 * @returns IApiMediaWithCropsResponseModel Success
	 * @throws ApiError
	 */
	public getMediaItemById20(data: MediaData['GetMediaItemById20']): CancelablePromise<IApiMediaWithCropsResponseModel> {
		const {
			id,
			expand,
			fields,
			apiKey,
		} = data;
		return this.httpRequest.request({
			method: 'GET',
			url: '/umbraco/delivery/api/v2/media/item/{id}',
			path: {
				id
			},
			headers: {
				'Api-Key': apiKey
			},
			query: {
				expand, fields
			},
			errors: {
				404: `Not Found`,
			},
		});
	}

	/**
	 * @returns IApiMediaWithCropsResponseModel Success
	 * @throws ApiError
	 */
	public getMediaItems20(data: MediaData['GetMediaItems20'] = {}): CancelablePromise<Array<IApiMediaWithCropsResponseModel>> {
		const {
			id,
			expand,
			fields,
			apiKey,
		} = data;
		return this.httpRequest.request({
			method: 'GET',
			url: '/umbraco/delivery/api/v2/media/items',
			headers: {
				'Api-Key': apiKey
			},
			query: {
				id, expand, fields
			},
		});
	}

}