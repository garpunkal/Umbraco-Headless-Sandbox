import { UmbracoApiClient } from "@scripts/api/UmbracoApiClient";

export default function UmbracoClient() {
    const umbraco = new UmbracoApiClient({
        BASE: import.meta.env.API_BASE_URL
    });
    return umbraco;
}

export async function GetAllRoutes() {
    try {
        return await UmbracoClient().content?.getContent20({
            apiKey: import.meta.env.UMBRACO_API_KEY,
            preview: JSON.parse(import.meta.env.UMBRACO_PREVIEW),
            fetch: "descendants:/",
            take: 10000,
            fields: "route",
            sort: ["sortOrder:asc"]
        });
    } catch { return null; }
}

export async function GetNavigation() {
    try {
        return await UmbracoClient().content?.getContent20({
            apiKey: import.meta.env.UMBRACO_API_KEY,
            preview: JSON.parse(import.meta.env.UMBRACO_PREVIEW),
            fetch: "children:/",
            take: 10000,
            fields: "route,properties[title]",
            sort: ["sortOrder:asc"],
            filter: ["umbracoNaviHide:False"]
        });
    } catch { return null; }
}

export async function GetListingItems(route: string, fields: string) {
    try {
        
        return await UmbracoClient().content?.getContent20({
            apiKey: import.meta.env.UMBRACO_API_KEY,
            preview: JSON.parse(import.meta.env.UMBRACO_PREVIEW),
            fetch: "children:" + route,
            take: 10000,
            fields: fields,
            sort: ["sortOrder:asc"],
            filter: ["umbracoNaviHide:False"]
        });
    } catch { return null; }
}


export async function GetContentItemByPath(path: string) {
    try {
        return await UmbracoClient()?.content?.getContentItemByPath20({
            apiKey: import.meta.env.UMBRACO_API_KEY,
            preview: JSON.parse(import.meta.env.UMBRACO_PREVIEW),
            path: path,
            expand: "properties[content[properties[$all]],$all]",
        });
    } catch { return null; }
}


export async function GetSitemap(key: string) {
    try {
        return await UmbracoClient().content?.getContent20({
            apiKey: import.meta.env.UMBRACO_API_KEY,
            preview: JSON.parse(import.meta.env.UMBRACO_PREVIEW),
            fetch: "children:" + key,
            take: 10000,
            fields: "route,properties[title]",
            sort: ["sortOrder:asc"],
            filter: ["umbracoNaviHide:False"]
        });
    } catch { return null; }
}