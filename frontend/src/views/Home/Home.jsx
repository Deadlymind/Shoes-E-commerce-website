 import { useEffect, useState } from 'react';
 import 'slick-carousel/slick/slick.css';
 import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'; 

import './home.css';
const products = [
    {id:1, name: 'Formal canvas shoe', price: "350.00 dt", oldPrice: "420.00 dt",image:"./images/Mshoe1.png" , category: 'Man'},
    {id:2, name: 'Formal canvas shoe', price: "350.00 dt", oldPrice: "420.00 dt",image:"./images/Mshoe2.png" , category: 'Man'},
    {id:3, name: 'Sneakers shoe for man', price: "350.00 dt", oldPrice: "475.00 dt",image:"./images/Mshoe3.png" , category: 'Man'},
    {id:4, name: 'Slick Sneakers shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Mshoe4.png" , category: 'Man'},
    {id:5, name: 'Slick running shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Mshoe5.png" , category: 'Man'},
    {id:6, name: 'Formal canvas shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Mshoe6.png" , category: 'Man'},
   {id:7, name: 'Slick Sneakers shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Mshoe7.png" ,category: 'Man'},
    {id:8, name: 'Formal canvas shoe', price: "350.00 dt", oldPrice: "420.00 dt",image:"./images/Mshoe8.png" ,category: 'Man'},
    {id:9, name: 'Sneakers shoe for man', price: "350.00 dt", oldPrice: "475.00 dt",image:"./images/Mshoe9.png" ,category: 'Man'},
    {id:10, name: 'Slick Sneakers shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Mshoe10.png" ,category: 'Man'},
    {id:11, name: 'Slick running shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Mshoe11.png" ,category: 'Man'},
    {id:12, name: 'Formal canvas shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Mshoe12.png" ,category: 'Man'},
    {id:13, name: 'Slick Sneakers shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Mshoe13.png" ,category: 'Man'},
    {id:14, name: 'Formal canvas shoe', price: "350.00 dt", oldPrice: "420.00 dt",image:"./images/Mshoe14.png" ,category: 'Man'},
    {id:15, name: 'Sneakers shoe for man', price: "350.00 dt", oldPrice: "475.00 dt",image:"./images/Mshoe15.png" ,category: 'Man'},
    {id:16, name: 'Slick Sneakers shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Mshoe16.png" ,category: 'Man'},
    {id:17, name: 'Slick running shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Mshoe17.png" ,category: 'Man'},
    {id:18, name: 'Formal canvas shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Mshoe18.png" ,category: 'Man'},
   {id:19, name: 'Slick Sneakers shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Cshoe1.png" ,category: 'Child'},
    {id:20, name: 'Formal canvas shoe', price: "350.00 dt", oldPrice: "420.00 dt",image:"./images/Cshoe2.png" ,category: 'Child'},
    {id:21, name: 'Sneakers shoe for man', price: "350.00 dt", oldPrice: "475.00 dt",image:"./images/Cshoe3.png" ,category: 'Child'},
    {id:22, name: 'Slick Sneakers shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Cshoe4.png" ,category: 'Child'},
    {id:23, name: 'Slick running shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Cshoe5.png" ,category: 'Child'},
    {id:24, name: 'Formal canvas shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Cshoe6.png" ,category: 'Child'},
    {id:25, name: 'Slick Sneakers shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Cshoe13.png" ,category: 'Child'},
    {id:26, name: 'Formal canvas shoe', price: "350.00 dt", oldPrice: "420.00 dt",image:"./images/Cshoe11.png" ,category: 'Child'},
    {id:27, name: 'Sneakers shoe for man', price: "350.00 dt", oldPrice: "475.00 dt",image:"./images/Cshoe9.png" ,category: 'Child'},
    {id:28 ,name: 'Slick Sneakers shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Cshoe14.png" ,category: 'Child'},
    {id:29, name: 'Slick running shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Cshoe11.png" ,category: 'Child'},
    {id:30, name: 'Formal canvas shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Cshoe12.png" ,category: 'Child'},
    {id:31, name: 'Slick Sneakers shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Cshoe18.png" ,category: 'Child'},
    {id:32, name: 'Formal canvas shoe', price: "350.00 dt", oldPrice: "420.00 dt",image:"./images/Cshoe14.png" ,category: 'Child'},
    {id:33, name: 'Sneakers shoe for man', price: "350.00 dt", oldPrice: "475.00 dt",image:"./images/Cshoe14.png" ,category: 'Child'},
    {id:34, name: 'Slick Sneakers shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Cshoe15.png" ,category: 'Child'},
    {id:35, name: 'Slick running shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Cshoe3.png" ,category: 'Child'},
    {id:36, name: 'Formal canvas shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Cshoe17.png" ,category: 'Child'},
   {id:37, name: 'Slick Sneakers shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Wshoe1.png" ,category: 'Woman'},
    {id:38, name: 'Formal canvas shoe', price: "350.00 dt", oldPrice: "420.00 dt",image:"./images/Wshoe12.png" ,category: 'Woman'},
    {id:39, name: 'Sneakers shoe for man', price: "350.00 dt", oldPrice: "475.00 dt",image:"./images/Wshoe3.png" ,category: 'Woman'},
    {id:40, name: 'Slick Sneakers shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Wshoe17.png" ,category: 'Woman'},
    {id:41, name: 'Slick running shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Wshoe15.png" ,category: 'Woman'},
    {id:42, name: 'Formal canvas shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Wshoe7.png" ,category: 'Woman'},
    {id:43, name: 'Slick Sneakers shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Wshoe7.png" ,category: 'Woman'},
    {id:44, name: 'Formal canvas shoe', price: "350.00 dt", oldPrice: "420.00 dt",image:"./images/Wshoe9.png" ,category: 'Woman'},
    {id:45, name: 'Sneakers shoe for man', price: "350.00 dt", oldPrice: "475.00 dt",image:"./images/Wshoe9.png" ,category: 'Woman'},
    {id:46, name: 'Slick Sneakers shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Wshoe10.png" ,category: 'Woman'},
    {id:47, name: 'Slick running shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Wshoe11.png" ,category: 'Woman'},
    {id:48, name: 'Formal canvas shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Wshoe12.png" ,category: 'Woman'},
    {id:49, name: 'Slick Sneakers shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Wshoe13.jpg" ,category: 'Woman'},
    {id:50, name: 'Formal canvas shoe', price: "350.00 dt", oldPrice: "420.00 dt",image:"./images/Wshoe14.png" ,category: 'Woman'},
    {id:51, name: 'Sneakers shoe for man', price: "350.00 dt", oldPrice: "475.00 dt",image:"./images/Wshoe15.jpg" ,category: 'Woman'},
    {id:52, name: 'Slick Sneakers shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Wshoe16.png" ,category: 'Woman'},
    {id:53, name: 'Slick running shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Wshoe18.png" ,category: 'Woman'},
    {id:54, name: 'Formal canvas shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Wshoe18.png" ,category: 'Woman'},
    {id:55, name: 'Formal canvas shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Bshoe2.png" ,category: 'Boy'},
    {id:56, name: 'Formal canvas shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Bshoe3.png"  ,category: 'Boy'},
    {id:57, name: 'Formal canvas shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Bshoe4.png"  ,category: 'Boy'},
    {id:58, name: 'Formal canvas shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Bshoe5.png"  ,category: 'Boy'},
    {id:59, name: 'Formal canvas shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Bshoe6.png" ,category: 'Boy'},
    {id:60, name: 'Formal canvas shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Bshoe7.png"  ,category: 'Boy'},
    {id:61, name: 'Formal canvas shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Bshoe8.png" ,category: 'Boy'},
   {id:62, name: 'Slick Sneakers shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Bshoe1.png" ,category: 'Boy'},
    {id:63, name: 'Formal canvas shoe', price: "350.00 dt", oldPrice: "420.00 dt",image:"./images/Bshoe10.png" ,category: 'Boy'},
    {id:64, name: 'Sneakers shoe for man', price: "350.00 dt", oldPrice: "475.00 dt",image:"./images/Bshoe11.png" ,category: 'Boy'},
    {id:65, name: 'Slick Sneakers shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Bshoe12.png" ,category: 'Boy'},
    {id:66, name: 'Slick running shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Bshoe13.png" ,category: 'Boy'},
    {id:67, name: 'Formal canvas shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Bshoe14.png" ,category: 'Boy'},
    {id:68, name: 'Slick Sneakers shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Bshoe15.png" ,category: 'Boy'},
    {id:69, name: 'Formal canvas shoe', price: "350.00 dt", oldPrice: "420.00 dt",image:"./images/Bshoe16.png" ,category: 'Boy'},
    {id:70, name: 'Sneakers shoe for man', price: "350.00 dt", oldPrice: "475.00 dt",image:"./images/Bshoe17.png" ,category: 'Boy'},
    {id:71, name: 'Slick Sneakers shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Bshoe18.png" ,category: 'Boy'},
    {id:71, name: 'Slick Sneakers shoe', price: "350.00 dt", oldPrice: "460.00 dt",image:"./images/Bshoe1.png" ,category: 'Boy'},

];

const Home = () => {

 
   const  [activeButton, setActiveButton] = useState('Man');

   useEffect(() => {
    setActiveButton('Man');
   }, []);
   const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
   }
// Filtra i prodotti in base alla categoria attiva
const filteredProducts = products.filter(product => product.category === activeButton);
    
   const slides = [];
   for(let i = 0; i < filteredProducts.length; i += 3) {
    slides.push(filteredProducts.slice(i, i + 2));
   }
   const settings = {
    dots: true, // Mostra la paginazione
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Mostra 3 prodotti per slide
    slidesToScroll: 3,
};
    return (
        <>
        {/*section1*/}
        <section className="hero">
            <div className="hero-text">
                <h1 className='comfort'>Comfort Awaits Everyday</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <button className='btn2'>Shop Now</button>
            </div>
            <div className="hero-image">
                <img className="img1" src="/images/img1.png" alt="Shoe" />
            </div>
            <span className='ultimate'>ULTIMATE</span>
        </section>
        {/*section2*/}
        <section className="brand-carousel">
        <img className="puma" src="/images/puma.png" alt="Puma" />
      <img className="adidas" src="/images/adidas.png" alt="Adidas" />
      <img className="converse" src="/images/converse.png" alt="Converse" />
      <img className="balance" src="/images/balance.png" alt="New Balance" />
      <img className="skechers" src="/images/skechers.png" alt="Skechers" />
        </section>
        {/*section3*/}
        <section className="categories">
        <button className={`btn3 ${activeButton === 'Man' ? 'active' : ''}`} onClick={() => handleButtonClick('Man')}>Man</button>
      <button className={`btn3 ${activeButton === 'Woman' ? 'active' : ''}`} onClick={() => handleButtonClick('Woman')}>Woman</button>
      <button className={`btn3 ${activeButton === 'Boy' ? 'active' : ''}`} onClick={() => handleButtonClick('Boy')}>Boy</button>
      <button className={`btn3 ${activeButton === 'Child' ? 'active' : ''}`} onClick={() => handleButtonClick('Child')}>Child</button>
        </section>
        {/*section4*/}
        <section className="featured-products">
            <h2>Featured Products</h2>
            <Slider {...settings}>
            {slides.map((slide, index) => (
                    <div key={index} className="product-grid">
                        {slide.map(product => (
                            <div key={product.id} className="product-card">
                                <img src={product.image} alt={product.name} className="product-image" />
                                <h3>{product.name}</h3>
                                <p className="price">{product.price}</p>
                                <p className="old-price">{product.oldPrice}</p>
                                <i className="bi bi-arrow-up-right-circle-fill"></i>
                            </div>
                        ))}
                    </div>
                ))}
            </Slider>
        </section>
        </>
    )
}
export default Home;