import React from 'react'
import Product from '../Product/Product'
import './Home.css'

function Home() {
    return (
        <main className='home'>
            <section className="home__container">
                <img className='home__image' src="https://i.ibb.co/42MFTvD/Fuji-Tall-Hero-45-M-v2-1x-CB432458380.jpg" alt="" />
                <div className="home__row">
                    <Product id={1234561} title='The lean startup' price={29.99} image={"https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UL320_.jpg"} rating={5} />
                    <Product id={1234562} title='The lean Router' price={79.99} image={"https://images-na.ssl-images-amazon.com/images/G/01/amazonglobal/images/email/asins/DURM-24480C97FFA81710._V533746472_.jpg"} rating={4} />
                </div>
                <div className="home__row">
                    <Product id={1234563} title='Gaming pc' price={1009.99} image={"https://m.media-amazon.com/images/I/81gqqKQVkAL._AC_UL320_.jpg"} rating={5} />
                    <Product id={1234564} title='Hp Pc' price={129.99} image={"https://m.media-amazon.com/images/I/81gjltwz-qL._AC_UL320_.jpg"} rating={3} />
                    <Product id={1234565} title='Smart Lg' price={1029.99} image={"https://m.media-amazon.com/images/I/61--xSgNcQL._AC_UL320_.jpg"} rating={5} />
                </div>
                <div className="home__row">
                    <Product id={1234566} title='SAMSUNG 870 EVO ' price={119.99} image={"https://images-na.ssl-images-amazon.com/images/I/31ITAX-GoIL.jpg"} rating={5} />
                </div>
            </section>
        </main>
    )
}

export default Home
