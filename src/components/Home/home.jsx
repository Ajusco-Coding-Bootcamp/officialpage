import './home.css'
import logoBootcamp from '../../assets/AJUSCO CODING BOOTCAMP.png'

const Home = (props) => {


      return(
            <div className="home-text">
                  <h1>Home {props.name}! </h1>
                  <img src={logoBootcamp} alt="logo" />
            </div>
      )
}

export default Home;