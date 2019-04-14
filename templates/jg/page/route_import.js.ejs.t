---
#
# Copyright (c) <%= (new Date).getFullYear() %>.  Cermak, Peterka, & Peterson.
#
inject: true
to: <%= routePath %>
before: new imports above here
---
import <%= pageName %> from '<%= pageImportPath %>'
