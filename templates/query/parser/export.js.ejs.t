---
inject: <%= !skipQuery %>
to: <%= exportPath %>
before: "// last import"
skip_if: <%= path %>
---
export * from '<%= path %>'