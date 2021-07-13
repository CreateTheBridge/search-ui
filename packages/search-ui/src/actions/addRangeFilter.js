import { doFilterValuesMatch } from "../helpers";

/**
 * Filter results - Adds to current range filter value
 *
 * Will trigger new search
 *
 * @param name String field name to filter on
 * @param value String field value to filter on
 * @param type String (Optional) type of filter to apply
 */

export default function addRangeFilter(name, from, to, type = 'all') {
  if (this.debug) console.log("Search UI: Action", "addRangeFilter", ...arguments)

  const { filters } = this.state;

  const allOtherFilters = filters.filter(f => f.field !== name || f.type !== type) || [];

  this._updateSearchResults({
    current: 1,
    filters: [
      ...allOtherFilters,
      { field: name, from, to, type }
    ]
  })  
}