---
#
# Copyright (c) <%= (new Date).getFullYear() %>.  Cermak, Peterka, & Peterson.
#
message: |
  - {bold hygen jg} {yellow.bold concern} --name NAME [--skip-container] [--skip-list] [--skip-query]

  - {bold hygen jg} {yellow.bold example} --name NAME

  - {bold hygen jg} {yellow.bold page} --name NAME [--concern CONCERN [--list]]
          {gray hygen jg page --name About
          hygen jg page --name GameList --concern Game --list}

  - {bold hygen jg} {yellow.bold pane} --name NAME [--concern CONCERN [--list]]

  - {bold hygen jg} {yellow.bold part} --name NAME --pane PARENT
  - {bold hygen jg} {yellow.bold part} --name NAME --page PARENT
  - {bold hygen jg} {yellow.bold part} --name NAME --styled PARENT
  - {bold hygen jg} {yellow.bold part} --name NAME --example PARENT
          {gray hygen jg part --name NavSection --styled PageHeader
          hygen jg part --name BorderRadius --example Borders}

  - {bold hygen jg} {yellow.bold styled} --name NAME
---
