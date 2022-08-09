import "./App.css";
import ColorSchemesExample from "./components/ColorSchemesExample";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-awesome-slider/dist/styles.css';
import Card from "./components/Card";
import CarouselFadeExample from "./components/CarouselFadeExample";


function App(){
    return (
    <div className="App">

        <ColorSchemesExample />
        <CarouselFadeExample    />
        <div className="Body">
            
            <Card   />
        </div>
        

    </div>

    

    

    );
}



export default App;