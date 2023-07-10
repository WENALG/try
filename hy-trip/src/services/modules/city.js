import HyRequst from "../request"

export function getAllCity(){
    return HyRequst.get({
        url: '/city/all'
    })
}