export const getAssetsImage = (imageUrl)=>{
    // 参数一：相对路径
    // 参数二：当前文件路径
    return new URL(`../assets/img/${imageUrl}`,import.meta.url).href
}
