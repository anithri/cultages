---
#
# Copyright (c) <%= (new Date).getFullYear() %>.  Cermak, Peterka, & Peterson.
#
inject: true
to: <%= routePath %>
before: page routes above here
---
        <Route exact path="<%= pageRoute %>" component={<%= pageName %>} />
