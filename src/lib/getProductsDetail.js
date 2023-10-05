async function getProductsDetail(id){


    const res= await fetch(`https://fakestoreapi.com/products/${id}`)
    if(!res.ok){
      throw new Error ('Failed to fetch data!')
    }
  
    return res.json()
  
  }
  
  export default getProductsDetail
  