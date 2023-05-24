import { useEffect,useState } from "react"
import Product from "../components/Product"
import axios from "axios"
function Products() {
    const[products,setProducts]=useState([]);
    function fetchProducts(){
        axios.get('https://dummyjson.com/products')
        .then(response=>{
            setProducts(response.data.products)
            console.log(response)
        })
    }
    useEffect(()=>{
        fetchProducts()

    }, [])


    // const products=[
    //     {
    //         title:"Lovely Long Lady Hair",
    //         img:"https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/495757/1.jpg?4005",
    //         price:230,
    //         discountPrice:200         
    //     },
    //     {
    //         title:"Women Short Lady Hair",
    //         img:"https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/31/179033/1.jpg?7696",
    //         price:230,
    //         discountPrice:200         
    //     },
    //     {
    //         title:"New Fashion Blunt Lady Hair",
    //         img:"https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/578817/1.jpg?6748",
    //         price:230,
    //         discountPrice:200         
    //     },
    //     {
    //         title:"Hair Wig Full Afro Lady Hair",
    //         img:"https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/56/5834412/1.jpg?8107",
    //         price:230,
    //         discountPrice:200         
    //     },
    //     {
    //         title:"Water Wave Curly Wig Lady Hair",
    //         img:"https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/0869012/1.jpg?1501",
    //         price:230,
    //         discountPrice:200         
    //     },
    //     {
    //         title:"Fashion Wave ombre Wig Lady Hair",
    //         img:"https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/578817/1.jpg?6748",
    //         price:230,
    //         discountPrice:200         
    //     },
    //     {
    //         title:"Synthetic Black Lady Hair",
    //         img:"https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/60/256374/1.jpg?9032",
    //         price:230,
    //         discountPrice:200         
    //     },
    //     {
    //         title:"New Fashion Blunt Lady Hair",
    //         img:"https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/578817/1.jpg?6748",
    //         price:230,
    //         discountPrice:200         
    //     },
    //     {
    //         title:"Hair Wig Full Afro Lady Hair",
    //         img:"https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/56/5834412/1.jpg?8107",
    //         price:230,
    //         discountPrice:200         
    //     },
    //     {
    //         title:"Water Wave Curly Wig Lady Hair",
    //         img:"https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/23/0869012/1.jpg?1501",
    //         price:230,
    //         discountPrice:200         
    //     },
    //     {
    //         title:"Fashion Wave ombre Wig Lady Hair",
    //         img:"https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/26/578817/1.jpg?6748",
    //         price:230,
    //         discountPrice:200         
    //     },
    //     {
    //         title:"Synthetic Black Lady Hair",
    //         img:"https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/60/256374/1.jpg?9032",
    //         price:230,
    //         discountPrice:200         
    //     }
    // ]
    return (
        <div className="container">
            <div className="new">
                {
                  (products.length >0 ) ?
               
                  products.map((value, index)=>{
                    return (
                      <div key={index}  className="product">
                      <Product id={value.id} title={value.title} img={value.images[0]} price={value.price} discount={value.discountPercentage} brand={value.brand} />
                     </ div>
                    )
                  }) :
                  <h2><i>Loading Products...</i></h2>
                }
               {/* <Img/> */}
               </div>
            </div>
    
    )
}

export default Products