import HyRequst from "../request"

export function getHomeCategories(){
    return HyRequst.get({
        url: '/home/categories'
    })
}
export function getHomeHouseList(currentPage){
    return HyRequst.get({
        url: '/home/houselist',
        params:{
            page: currentPage
        }
    })
}