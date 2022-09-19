import './coffeeHouse.scss';
import Header from "../../components/header/header";
import Footer from "../../components/footer/Footer";
import BeansDecoration from "../../components/beansDecoration/BeansDecoration";


function CoffeeHouse(){

    return (
    <>
        <Header/>
            <main className="main">
            <div className="about-coffee">
                <div className="about-coffee__container container">
                    <h1 className="about-coffee__title">Everything You Love About Coffee</h1>
                    <div className="about__decoration"><BeansDecoration/></div>
                    <div className="about-coffee__subtitle">We makes every day full of energy and taste<br/>Want to try our beans?</div>
                    <div  className="about-coffee__button"> <a href="#about" className='button'>More</a> </div>
                </div>    
            </div> 
            <div className="about-us" id="about">
                <div className="about-us__container container">
                    <h2 className="about-us__title title">About Us</h2>
                    <div className="about-us__decoration"><BeansDecoration/></div>
                    <div className="about-us__text">
                        <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.
                        </p>
                        <p>Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.
                        </p>
                    </div>
                </div>
            </div>

        </main>   
        <Footer/>
    </>
    )
}

export default CoffeeHouse;