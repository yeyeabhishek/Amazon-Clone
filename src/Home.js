
import Product from './Product'
import './Home.css'

function Home(){
    return (
        <div className="home">
            <img className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB28684220_.jpg"
            alt=""  
            />

            <div className="home__row">
                <Product
                id="121314"
                title="The Lean Startup: How Content Innovation"
                price={11.96}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"
                />
                <Product
                id="121314"
                title="The Lean Startup: How Content Innovation"
                price={5.96}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"
                />
                <Product
                id="121314"
                title="The Lean Startup: How Content Innovation"
                price={15.96}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"
                />
            </div>
            <div className="home__row">
            <Product
                id="121314"
                title="The Lean Startup: How Content Innovation"
                price={11.96}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"
                />
                <Product
                id="121314"
                title="The Lean Startup: How Content Innovation"
                price={5.96}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"
                />
                <Product
                id="121314"
                title="The Lean Startup: How Content Innovation"
                price={15.96}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"
                />
                <Product
                id="121314"
                title="The Lean Startup: How Content Innovation"
                price={15.96}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"
                />
            </div>
            <div className="home__row">
            <Product
                id="121314"
                title="The Lean Startup: How Content Innovation"
                price={15.96}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"
                />
                <Product
                id="121314"
                title="The Lean Startup: How Content Innovation"
                price={15.96}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"
                />
            </div>
        </div>
    )
}
export default Home