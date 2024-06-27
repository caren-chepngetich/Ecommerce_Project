const baseUrl= process.env.REACT_APP_BASE_URL;

export const getProducts = async()=>{
    try{
        const response= await fetch(`${baseUrl}/products`)
        return response.json()
    }
    catch(error){
        throw new Error(error.message)
           
    }
};