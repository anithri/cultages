---
inject: true
to: <%= routePath %>
before: page routes above here
---
        <Route exact path="<%= routes %>" component={<%= pageName %>} />
