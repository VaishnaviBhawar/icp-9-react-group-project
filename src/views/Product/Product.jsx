import React from 'react'
// import blogsData from "./../../config/data.json"
import BlogCard from '../../components/BlogCard/BlogCard';
import { Link } from 'react-router';
// import staples from "./../../config/staples.json"
function Product() {
  return (
    <div>
    <h1 className="text-4xl py-4 text-center font-bold">Top Categories</h1>
    <div className="flex flex-wrap justify-center">
    <Link to={"staplesc"}><BlogCard
      image = "https://cdn.shopify.com/s/files/1/0865/4005/8946/files/1.png?v=1724301727"
      title = "Staples"
    /></Link>

    <Link to={"oilsc"}>
    <BlogCard className="bg-amber-500"
      image = "https://cdn.shopify.com/s/files/1/0865/4005/8946/files/2_29d5505b-daa9-4f09-aa36-35b30477a53d.png?v=1724301727"
      title = "Oils"
    /></Link>

    <Link to={"dryfruits"}>
    <BlogCard
      image = "https://cdn.shopify.com/s/files/1/0865/4005/8946/files/3.png?v=1724301727"
      title = "Dry Fruits"
    /></Link>

    <BlogCard
       image = "https://cdn.shopify.com/s/files/1/0865/4005/8946/files/4.png?v=1724301727"
       title = "A2 Dairy Products"
    />
    <BlogCard
      image = "https://cdn.shopify.com/s/files/1/0865/4005/8946/files/5.png?v=1724301727"
      title = "Fruits & Vegetables"
    />
    <BlogCard
      image = "https://cdn.shopify.com/s/files/1/0865/4005/8946/files/6.png?v=1724301727"
      title = "Beverages"
    />
    <BlogCard
      image = "https://cdn.shopify.com/s/files/1/0865/4005/8946/files/7.png?v=1724301727"
      title = "Snacks"
    />
    <BlogCard
      image = "https://cdn.shopify.com/s/files/1/0865/4005/8946/files/8.png?v=1724301727"
      title = "Personal Care"
    />
    <BlogCard
      image = "https://cdn.shopify.com/s/files/1/0865/4005/8946/files/9.png?v=1724301727"
      title = "Home Essential"
    />
    </div>


    {/* <div className="flex flex-wrap justify-center">
    {blogsData.map((blogsDetailsObjects)=> {
        const{ id, 
            title, 
            image, 
            author, 
            keywords, 
            content,
            date 
        } = blogsDetailsObjects;
        

        return (
            <BlogCard 
            key={id} 
            id={id}
            title={title} 
            image={image}
            content={content} 
            author={author} 
            keywords={keywords} 
            date={date}/>
        )
    })}
    </div> */}
</div>
  )
}

export default Product