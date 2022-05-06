import Loading from "../Components/Loading/Loading";

const { useState, useEffect } = require("react")


const useLaptop = () => {
    const [laptops, setLaptops] = useState([]);
    useEffect(() => {
        fetch('https://secret-bastion-79495.herokuapp.com/laptops')
            .then(res => res.json())
            .then(data => setLaptops(data))
    }, [laptops])
    if (!laptops) {
        return <Loading></Loading>
    }
    return [laptops, setLaptops]
}
export default useLaptop;