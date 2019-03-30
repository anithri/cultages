---
inject: true
to: app/graphql/types/query_type.rb
before: last of fields
lots: <% lots = h.inflection.pluralize(name) %>
className: <% className = h.inflection.camelize(name) %>
---
    #region <%= className %> Fields
    field :<%= name %>, Types::<%= className %>, null: true do
      argument :<%= name %>_id, ID, required: true, as: :id
    end
    def <%= name %>(id:)
      ::<%= className %>.find id
    end

    field :<%= lots %>, Types::<%= className %>.connection_type, null: false
    def <%= lots %>
      ::<%= className %>.all
    end
    #endregion
