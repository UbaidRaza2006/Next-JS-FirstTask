import getProducts from '@/lib/getProducts'
import getProductsDetail from '@/lib/getProductsDetail';
import Image from 'next/image'
import Link from 'next/link'

export default async function ProductsDetail(params) {
// console.log(params);
    const productsDetail = await getProductsDetail(params.id)
    // console.log(products);

  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className='flex justify-between'>

      <h1>Hello Products Detail</h1>

          </div>


       <div className='flex flex-wrap'>
<div className='p-2 bg-aqua w-[500px] m-4 rounded-md flex flex-col justify-arround'>
               <Image src={productsDetail.image} width={500} height={500}/>
                <h1>{productsDetail.title}</h1>
                <h3>{productsDetail.price}</h3>
                <h4>{productsDetail.description}</h4>
                <h3>Product Rating: {productsDetail.rating.rate}</h3>
      </div> 
   
    </div> 
    </main>
    )
    }