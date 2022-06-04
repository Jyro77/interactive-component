import "./App.css";
import { Route } from "wouter";
import Rating from "pages/Rating";
import Thanks from "pages/Thanks";
import { RatingContextProvider } from "context/Context";

function App() {
    return (
        <section className='App'>
            <header className='App-header'>
                <div className='App-container'>
                    <RatingContextProvider>
                        <Route path='/' component={Rating} />
                        <Route path='/thanks' component={Thanks} />
                    </RatingContextProvider>
                </div>
            </header>
            <footer className='App-footer'>
                Challenge by{" "}
                <a
                    href='https://www.frontendmentor.io?ref=challenge'
                    target='_blank'
                    rel='noreferrer'>
                    Frontend Mentor
                </a>
                . Coded by{" "}
                <a href='https://truejyro.com' target='_blank' rel='noreferrer'>
                    TrueJyro
                </a>
                .
            </footer>
        </section>
    );
}

export default App;
