import React, {useState, useEffect, useContext} from 'react';

const url = 'https://fakestoreapi.com/products';

const ProductContext = React.createContext()


const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [toggleGrid, setToggleGrid] = useState(true)

    const fetchProduct = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setProducts(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])


    const setGridView = () => {
        setToggleGrid(true)
    }
    const setListView = () => {
        setToggleGrid(false)
    }

    return (
    <ProductContext.Provider value={{
            products,
            loading,
            toggleGrid,
            setGridView,
            setListView
        }}>
        {children}
    </ProductContext.Provider>
    )
}
    
export const useGlobalContext = () => {
    return useContext(ProductContext)
}

export {ProductContext, ProductProvider}