import { get } from '../get'

export function getAdData() {
    const result = get('/api/homead')
    return result
}

export function getListData(city, page) {
    const result = get('/api/homelist/' + encodeURIComponent(city) + '/' + page)
    return result
}

export function getPolicyData(city, page) {
    const result = get('/api/homepolicy/' + encodeURIComponent(city) + '/' + page)
    return result
}

export function getPriceData(city, page) {
    const result = get('/api/homeprice/' + encodeURIComponent(city) + '/' + page)
    return result
}

export function getCategory(page) {
    const result = get('/api/homecategory/' + page)
    return result
}
