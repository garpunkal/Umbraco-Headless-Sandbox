/** @type {import('@hey-api/openapi-ts').UserConfig} */
module.exports = {
    name: "UmbracoApiClient",
    input: 'http://localhost:27546/umbraco/swagger/delivery/swagger.json',
    output: {
        format: 'prettier',
        path: 'src/scripts/api',
    },
    types: {
        dates: 'types+transform',
        enums: 'javascript',
    },   
    useOptions: true,
   
}