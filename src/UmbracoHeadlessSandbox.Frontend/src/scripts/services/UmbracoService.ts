import { UmbracoApiClient, IApiContentResponseModel, IApiContentResponsePaged } from "@scripts/api/UmbracoApiClient";

/**
 * Configuration for the Umbraco client with common settings
 */
interface UmbracoClientConfig {
  apiKey: string;
  preview: boolean;
  baseUrl: string;
}

/**
 * Options for content retrieval requests
 */
interface ContentRequestOptions {
  fetch?: string;
  take?: number;
  fields?: string;
  sort?: string[];
  filter?: string[];
  expand?: string;
}

/**
 * UmbracoService - A singleton service for interacting with Umbraco Headless API
 */
class UmbracoService {
  private client: UmbracoApiClient;
  private config: UmbracoClientConfig;
  private static instance: UmbracoService;

  /**
   * Create a new UmbracoService instance
   */
  private constructor() {
    // Parse environment variables with error handling
    const preview = this.parseBoolean(import.meta.env.UMBRACO_PREVIEW);

    this.config = {
      apiKey: import.meta.env.UMBRACO_API_KEY || '',
      preview: preview,
      baseUrl: import.meta.env.API_BASE_URL || ''
    };

    // Log warning if any required environment variables are missing
    this.validateConfig();

    this.client = new UmbracoApiClient({
      BASE: this.config.baseUrl
    });
  }

  /**
   * Get the singleton instance
   */
  public static getInstance(): UmbracoService {
    if (!UmbracoService.instance) {
      UmbracoService.instance = new UmbracoService();
    }
    return UmbracoService.instance;
  }

  /**
   * Parse a string to boolean safely
   */
  private parseBoolean(value: string | undefined): boolean {
    if (!value) return false;

    try {
      return JSON.parse(value.toLowerCase()) === true;
    } catch {
      return false;
    }
  }

  /**
   * Validate the configuration
   */
  private validateConfig(): void {
    if (!this.config.apiKey) {
      console.warn('Umbraco API key is not set in environment variables');
    }

    if (!this.config.baseUrl) {
      console.warn('API base URL is not set in environment variables');
    }
  }

  /**
   * Get a list of all routes
   */
  public async getAllRoutes(): Promise<IApiContentResponsePaged | null> {
    return this.getContent({
      fetch: "descendants:/",
      take: 10000,
      fields: "route",
      sort: ["sortOrder:asc"]
    });
  }

  /**
   * Get navigation items
   */
  public async getNavigation(): Promise<IApiContentResponsePaged | null> {
    return this.getContent({
      fetch: "children:/",
      take: 10000,
      fields: "route,properties[title]",
      sort: ["sortOrder:asc"],
      filter: ["umbracoNaviHide:False"]
    });
  }

  /**
   * Get listing items for a specific route
   */
  public async getListingItems(route: string, fields: string): Promise<IApiContentResponsePaged | null> {
    if (!route) {
      console.error('Route is required for getListingItems');
      return null;
    }

    return this.getContent({
      fetch: `children:${route}`,
      take: 10000,
      fields,
      sort: ["sortOrder:asc"],
      filter: ["umbracoNaviHide:False"]
    });
  }

  /**
   * Get a content item by path
   */
  public async getContentItemByPath(path: string): Promise<IApiContentResponseModel | null> {
    if (!path) {
      console.error('Path is required for getContentItemByPath');
      return null;
    }

    try {
      return await this.client.content?.getContentItemByPath20({
        apiKey: this.config.apiKey,
        preview: this.config.preview,
        path,
        expand: "properties[content[properties[$all]],$all]",
      }) || null;
    } catch (error) {
      console.error(`Error fetching content item by path ${path}:`, error);
      return null;
    }
  }

  /**
   * Get sitemap data for a specific key
   */
  public async getSitemap(key: string): Promise<IApiContentResponsePaged | null> {
    if (!key) {
      console.error('Key is required for getSitemap');
      return null;
    }

    return this.getContent({
      fetch: `children:${key}`,
      take: 10000,
      fields: "route,properties[title]",
      sort: ["sortOrder:asc"],
      filter: ["umbracoNaviHide:False"]
    });
  }

  /**
   * Generic method for content retrieval
   */
  private async getContent(options: ContentRequestOptions): Promise<IApiContentResponsePaged | null> {
    try {
      return await this.client.content?.getContent20({
        apiKey: this.config.apiKey,
        preview: this.config.preview,
        ...options
      }) || null;
    } catch (error) {
      console.error('Error fetching content:', error);
      return null;
    }
  }
}

// Create singleton instance
const umbracoService = UmbracoService.getInstance();

// Export the singleton for use in other files
export default umbracoService;