import HyRequest from '../request/index.js'

export function getDetailInfos(houseId){
    return HyRequest.get({
        url:'/detail/infos',
        params:{
            houseId: houseId,
        }
    })
}