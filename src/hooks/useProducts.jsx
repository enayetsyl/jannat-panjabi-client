import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading]= useState(true)

  useEffect(() => {
    fetch(`https://jannat-panjabi-server.vercel.app/panjabi`)
    .then(res => res.json())
    .then(data => {
      setProducts(data)
      setLoading(false)
    })
  },[])


  return [products, loading]
};

export default useProducts;