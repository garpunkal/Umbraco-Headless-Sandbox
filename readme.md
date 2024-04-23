# Umbraco Headless Sandbox

![Umbraco Headless Sandbox](/screenshots/image.png)

## Credentials
#### Umbraco

|   |   |
|---|---|
|username|admin@umbraco.com|
|password|HG8GrrELDKy3TqVOUcjE!|


## Notes
Uses Vercel for hosting, so the output is vercel adapter. This can be changed by changing or removing the astro adapter

## Outstanding
- Search minimal API
- Sitemap optimisation? API for sitemap rather than recursive calls to cd API? 
- Sitemap xml for SSR? - potentially adding custom pages to the integration from api
- Meta Data population
- More filters for hideOnSitemap, hideInNavigation

## Usage

use node 20.x (I'm using: 20.11.1).

```cmd
nvm install 20.11.1
nvm use 20.11.1
```
use yarn: 
```cmd
npm install yarn -g
```

#### Umbraco

Umbraco must be running for the routes to build statically on the frontend client. 

```cmd
cd src
cd UmbracoHeadlessSandbox.umbraco
dotnet run
```

#### Frontend

```cmd
cd src
cd UmbracoHeadlessSandbox.frontend
yarn start 
```
Once started, you might have a prompt to install an SSL certificate, accept the prompt. 



#### Generate new TypeScript models

Only generate when document types / media types are updated in Umbraco. 

```cmd
yarn generate 
```

## .env variables

#### .env.development
```json
IMAGE_BASE_URL=https://localhost:44335
API_BASE_URL=https://localhost:44335
UMBRACO_API_KEY='6536e4ec-cba3-4411-a21e-d933eb7dcc23'
UMBRACO_PREVIEW=true
DISABLE_SSR=true  
NODE_ENV=development
NODE_TLS_REJECT_UNAUTHORIZED=0
```

## Limitations on Content Delivery API
https://docs.umbraco.com/umbraco-cms/reference/content-delivery-api#current-limitations