---
message: |
  {bgBlue.bold Model Template for graphql/react interactions}

  {bold Usage:}
    hygen model {yellow.bold concern} {yellow --name NAME} <options>

    hygen model {yellow.bold list} {yellow --name NAME} <options>
    hygen model {yellow.bold mode} {yellow --name NAME} {yellow --concern CONCERN} [--base BASE] <options>

    hygen model {yellow.bold mutation} {yellow --name NAME} {yellow --concern CONCERN} <options>

    {dim.italic these are mostly used internally}
    {gray hygen model {yellow.dim container} {yellow --name NAME} [--base (route|id|listOf)] <options>
    hygen model {yellow.dim fragment} {yellow --name NAME} <options>
    hygen model {yellow.dim query} {yellow --name NAME} <options>
    hygen model {yellow.dim parser} {yellow --name NAME} <options>
    hygen model {yellow.dim shape} {yellow --name NAME} <options>
    hygen model {yellow.dim exporter} {yellow --name NAME} {yellow --path PATH} <options>}

  {bold Options:}
    --name          name for the component
    --mode          subset of main (concerns/name/mode/index.js)
    --concern       name of the main concern for this sub section
    --base          one of (byId, listOf, route) The type of container factory to use container.

    --skip-container  skip this part of concern
    --skip-fragment   skip this part of concern
    --skip-query      skip this part of concern
    --skip-parser     skip this part of concern
    --skip-shape      skip this part of concern
    --skip-index      skip this part of concern
---
