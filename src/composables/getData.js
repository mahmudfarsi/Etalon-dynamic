import { ref } from "vue"

export const useData = ({limit}) => {
    const datas = ref([]);
    const isLoading = ref(false)
    const url = 'https://fakestoreapi.com/products'
    const getDatas = async () => {
        isLoading.value = true;
        const response = await fetch(`${url}?limit=${limit}`);
        const resault = await response.json();
        datas.value = resault;
        isLoading.value = false;
        console.log(response);
        console.log(resault);
    }




    return{
        getDatas,
        datas,
        isLoading,
        // limit
    }
}