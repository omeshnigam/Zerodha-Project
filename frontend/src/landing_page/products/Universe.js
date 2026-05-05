import React from 'react';

function Universe({ productName, productDescription }) {
    return (
        <div className="container text-center UniverseSection">
            <br /><br /><br /><br />
            <h3 className='text-muted'>{productName}</h3>
            <br />
            <p>{productDescription}</p>
            <div className="row ">
                <div className="col">
                    <a href="">
                        <img src="media/images/zerodhaFundhouse.png" alt="" />
                        <p className='text-muted '>Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.</p>
                    </a>
                </div>
                <div className="col">
                    <a href="">
                        <img src="media/images/sensibulllogo.svg" alt="" />
                        <p className="text-muted"><br />Options trading platform that lets you
                            create strategies, analyze positions, and examine
                            data points like open interest, FII/DII, and more.
                        </p>
                    </a>
                </div>
                <div className="col">
                    <a href=""> <img src="media/images/goldenpiLogo.png" alt="" />
                        <p className="text-muted">Investment research platform
                            that offers detailed insights on stocks,
                            sectors, supply chains, and more.</p></a>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <a href="">
                        <img src="media/images/streakLogo.png" alt="" />
                        <p className="text-muted">
                            Systematic trading platform
                            that allows you to create and backtest
                            strategies without coding.
                        </p>
                    </a>
                </div>
                <div className="col">
                    <a href="">
                        <img src="media/images/smallcaseLogo.png" alt="" />
                        <p className="text-muted"> <br />Thematic investing platform
                            that helps you invest in diversified
                            baskets of stocks on ETFs.</p>
                    </a>
                </div>
                <div className="col">
                    <a href="">
                        <img src="media/images/dittoLogo.png" alt="" />
                        <p className="text-muted">Personalized advice on life
                            and health insurance. No spam
                            and no mis-selling.
                        </p>
                    </a>
                </div>
            </div>

            <br /><br />
            <button className=' btn btn-lg ' style={{ backgroundColor: "#387ED1", color: 'white' }}>
                Sign Up for free
            </button>
            <br />
            <br />
            <br />
            <br />
        </div>
    );
}

export default Universe;