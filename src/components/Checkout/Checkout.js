import React from 'react';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css'

const Checkout = () => {
    return (
        <main className='checkout'>
            <section className="checkout__left">
                <img className='checkout__ad' src="https://i.ibb.co/0tdCvLy/f50f67731024109dce5703d50c287d0e.jpg" alt="" />
                <div>
                    <h2 className="checkout__title">
                        Your Shopping basket
                </h2>
                    {/* basketitem */}
                    {/* basketitem */}
                    {/* basketitem */}
                    {/* basketitem */}
                </div>
            </section>
            <aside className="checkout__right">
                <Subtotal />
            </aside>
        </main>
    );
};

export default Checkout;