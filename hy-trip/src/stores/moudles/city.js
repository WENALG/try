import { defineStore } from "pinia";
import { getAllCity } from "@/services/modules/city";

const useCityStore = defineStore('city',{
    state: ()=>({
        allCities: {},
        currentCity: { cityName: "广州" },
    }),
    actions:{
        async fetchAllCityData(){
            const res = await getAllCity()
            this.allCities = res.data
        }
    }
})
export default useCityStore