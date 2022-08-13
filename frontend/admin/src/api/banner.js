import request from '@/utils/request'

/**
 * 
 * @param 
 * @returns 
 */
export function bannerList(data) {
    return request({
        url: '/auth/banner/list',
        method: 'POST',
        data
    })
}

/**
 * 
 * @param {*} id 
 * @returns 
 */
export function addBanner(data) {
    console.log('addBanner',data);
    return request({
        url: '/auth/banner/add/',
        method: 'PUT',
        data
    })
}

/**
 * 
 * @param {*} id 
 * @returns 
 */
export function editBanner(data) {
    console.log('editBanner',data);
    return request({
        url: '/auth/banner/update/' + data.id,
        method: 'POST',
        data
    })
}

/**
 * 
 * @param {*} id 
 * @returns 
 */
export function delBanner(id) {
    return request({
        url: '/auth/banner/delete/' + id,
        method: 'DELETE'
    })
}





