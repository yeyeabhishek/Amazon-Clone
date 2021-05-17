
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
                title="Apple MacBook Pro 16-Inch: With a larger display, a beefier graphics chip"
                price={2000.96}
                rating={5}
                image="https://i.pcmag.com/imagery/reviews/0227QDT3xYwn3xEOpyiJpNU-1..1574212824.jpg"
                />
                <Product
                id="121314"
                title="Apple iPhone X :The Apple iPhone X 256GB features dual rear cameras, comprising 12 MP + 12 MP camera"
                price={1500.96}
                rating={4}
                image="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-x-new-1.jpg"
                />
            </div>
            <div className="home__row">
            <Product
                id="121314"
                title="The Lean Startup: How Content Innovation"
                price={2000}
                rating={4}
                image="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202008/11_-_Stealth_Black_0.png?M3qYdGliSZ3Puz7.C7TX.ghaj05pWXKJ&size=770:433"
                />
                <Product
                id="121314"
                title="Royal Enfield Classic 350, Bullet 350: "
                price={5.96}
                rating={3}
                image="https://www.gizbot.com/images/2020-09/poco-x3-nfc_159971432800.jpg"
                />
                <Product
                id="121314"
                title="Beard trimmer for an even trim – Series 30"
                price={150.96}
                rating={4}
                image="https://www.philips.co.in/c-dam/b2c/mg-q4-campaign/Male-grooming-cat-update/locales/en_MY/beard-trimmers/bt3221/philips-beard-trimmer.png"
                />
                <Product
                id="121314"
                title="Realme 139 cm (55 inch) Ultra HD (4K) LED Smart TV"
                price={600.96}
                rating={4}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTULjag18MkvMrU40SgJq4TXzu7e7oeX1ib1z8-bMLhp6ASeRStuRv-4jl4Ngi568-n2h3e4rbg&usqp=CAc"
                />
            </div>
            <div className="home__row">
            <Product
                id="121314"
                title="Regular fit washed jeans:Specially stonewashed for a vintage look"
                price={20000.96}
                rating={4}
                image="https://imgd.aeplcdn.com/0x0/n/cw/ec/41564/hyundai-creta-right-front-three-quarter9.jpeg"
                />
                <Product
                id="121314"
                title="Black Hair Dryer"
                price={15.96}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/51su%2BrdyQRL._AC_SY450_.jpg"
                />
            </div>
        </div>
    )
}
export default Home