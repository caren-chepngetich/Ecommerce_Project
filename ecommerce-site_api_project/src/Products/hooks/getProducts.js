export const getProducts =()=>{
    const[products,setProduct] = useState([]);
    const[error,setError] = useState('');
    const[loading,setLoading]=useState();
    
    useEffect(()=>{
        const fetchProducts= async()=>{
            try{
                setLoading(true);
                const result = getProducts();
                console.log({result});
                setProduct(result.products);
                setLoading(false);
    
            }
            catch(error){
                setError(`Error:${error.message}`)
                setLoading(false);
    
            }
        }
    fetchProducts();
    
    },[]);
    
    return {products,error,loading}
    };