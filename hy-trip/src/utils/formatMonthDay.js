import dayjs from 'dayjs'

export function formatMonthDay(date,F="MM月DD日"){
    return dayjs(date).format(F)
}
export function getDiffDays(startDate,endDate){
    return dayjs(endDate).diff(startDate,"day")
}