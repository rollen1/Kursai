import { isFiltered, filteredData } from "./filter.js";
import { populateTableData, data } from "./table.js";

export let paginationData = {
    page: 1,
    resultsPerPage: 10,
}

export function paginate(direction) {
    let { page, resultsPerPage } = paginationData
    paginationData.totalPages = Math.ceil((isFiltered ? filteredData.length : data.length) / resultsPerPage)
    const isLastPage = paginationData.totalPages < page + 1
    const isFirstPage = page - 1

    switch (direction) {
        case true:
            if (!isLastPage) paginationData.page++
            break;
        case false:
            if (isFirstPage) paginationData.page--
            break;
        default:
            break;
    }

    if (paginationData.totalPages < paginationData.page) paginationData.page = 1;

    let min = resultsPerPage * paginationData.page - resultsPerPage;
    let max = resultsPerPage * paginationData.page;

    if (isFiltered) paginationData.paginatedArray = filteredData.filter((_, index) => index < max && index >= min)
    if (!isFiltered) paginationData.paginatedArray = data.filter((_, index) => index < max && index >= min)

    populateTableData(paginationData.paginatedArray)
}