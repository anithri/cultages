---
inject: <%= !skipShape %>
to: <%= exportPath %>
before: "// last import"
skip_if: <%= path %>
---
export * from '<%= path %>'