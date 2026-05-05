import React from 'react';

function Hero() {
    return ( 
        <>
        <section style={{padding:"100px 0px"}}>
            <div className="text-center">
            <h1 style={{color:"#424242"}}>Charges</h1>
            <p style={{color:"#9B9B9B"}}>List of all charges and taxes</p>
            </div>
        </section>

        <section style={{padding:"80px 0px 0px",margin:"0px 90px"}}>
             <div className="container">
             <div className="row text-center">
                <div className="col-md-4">
                    <img src="media/images/pricingEquity.svg" alt="" className='mb-3' />
                    <h2 style={{color:"#424242"}}>Free equity delivery</h2>
                    <br />
                    <p style={{color:"#666666"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-md-4">
                <img src="media/images/intradayTrades.svg" alt="" className='mb-3' />
                    <h2 style={{color:"#424242"}}>Intraday and F&O trades
</h2>
<br />
                    <p style={{color:"#666666"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-md-4">
                <img src="media/images/pricingMF.svg" alt="" className='mb-3' / >
                    <h2 style={{color:"#424242"}}>Free direct MF</h2>
                    <br />
                    <p style={{color:"#666666"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
             </div>
        </section>
        </>
      
     );
}

export default Hero;