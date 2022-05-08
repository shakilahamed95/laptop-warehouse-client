


const { useState, useEffect } = require("react")


const useLaptop = () => {
    const [laptops, setLaptops] = useState([]);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const url = 'https://secret-bastion-79495.herokuapp.com/laptops'
        fetch(url)
            .then(res => res.json())
            .then(data => setLaptops(data))
        setLoading(false)
    }, [laptops, isLoading])


    return [laptops, setLaptops, isLoading]
}
export default useLaptop;