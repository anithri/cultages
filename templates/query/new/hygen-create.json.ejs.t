---
to: hygen-create.json
---
{
  "about": "This is a hygen-create definitions file. The hygen-create utility creates generators that can be executed using hygen.",
  "hygen_create_version": "0.2.0",
  "name": "query",
  "files_and_dirs": {
    "hygen-create.json": true,
    "client/models/<%= name.toLowerCase() %>/fragment.js": true,
    "client/models/<%= name.toLowerCase() %>/index.js": true,
    "client/models/<%= name.toLowerCase() %>/shape.js": true,
    "client/models/<%= name.toLowerCase() %>/utils.js": true,
    "client/models/<%= name.toLowerCase() %>/list/fragment.js": true,
    "client/models/<%= name.toLowerCase() %>/list/shape.js": true,
    "client/models/<%= name.toLowerCase() %>/list/utils.js": true,
    "client/concerns/<%= name.toLowerCase() %>/container.js": true,
    "client/concerns/<%= name.toLowerCase() %>/query.js": true,
    "client/concerns/<%= name.toLowerCase() %>/list/container.js": true,
    "client/concerns/<%= name.toLowerCase() %>/list/query.js": true
  },
  "templatize_using_name": "<%= name.toLowerCase() %>",
  "gen_parent_dir": false
}