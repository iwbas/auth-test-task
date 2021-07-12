import { useState, useMemo } from "react";

export default function useSortableData(items, config = null) {
  const [sortConfig, setSortConfig] = useState(config);

  const sortedItems = useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.isAsc ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.isAsc ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let isAsc = true;
    if (sortConfig && sortConfig.key === key && sortConfig.isAsc) {
      isAsc = false;
    }
    setSortConfig({ key, isAsc });
  };

  return { items: sortedItems, requestSort, sortConfig };
}
