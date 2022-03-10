import './home.css'

const Home = (props) => {


      return(
            <div className="home-text">
                  <h1>Home component. Hola : {props.name}! </h1>
            </div>
      )
}

export default Home;