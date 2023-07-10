import { defineStore } from "pinia"
import HyRequest from "@/services/request/index.js"
import { getHomeCategories, getHomeHouseList } from "@/services/modules/home.js"

const useHomeStore = defineStore("home",{
    state:()=>({
        hotSuggest: [],
        categories: [],
        currentPage: 1,
        page:1,
        homeList: [],
        
    }),
    actions:{
        async fetchHotSuggestData(){
            HyRequest.get({
                url: "/home/hotSuggests"
              }).then(res=>{
                this.hotSuggest = res.data
              }) 
        },
        async fetchHomeCategories(){
            const res = await getHomeCategories()
            this.categories = res.data
        },
        async fetchHomeHouseList(){
            const res = await getHomeHouseList(this.currentPage++)
            this.homeList.push(...res.data)
        }
    }
})
export default useHomeStore