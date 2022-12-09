


const { useState, useEffect } = require("react")


const useLaptop = () => {
    const [laptops, setLaptops] = useState([]);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const url = 'https://laptop-warehouse-server-zhm5.onrender.com/laptops'
        fetch(url)
            .then(res => res.json())
            .then(data => setLaptops(data))
        setLoading(false)
    }, [laptops, isLoading])


    return [laptops, setLaptops, isLoading]
}
export default useLaptop;