import { useContext } from "react";
import RatingContext from "context/Context";
import { useLocation } from "wouter";
import "./style.css";

function Rating() {
    const { rating, setRating } = useContext(RatingContext);
    const [path, setLocation] = useLocation();
    const handlerSubmit = e => {
        e.preventDefault();
        setLocation("/thanks");
        console.log(path);
    };

    const handleClick = e => {
        let value = e.target.id ? e.target.id : e.target.innerText;
        setRating(value);
    };

    return (
        <div className='Rating-content'>
            <div className='Rating-container'>
                <div className='Rating-icon'>
                    <img src='/images/icon-star.svg' alt='Star' />
                </div>
                <div className='Rating-text'>
                    <h2>How did we do?</h2>
                    <p className='Rating-p'>
                        Please let us know how we did with your support request.
                        All feedback is appreciated to help us improve our
                        offering!
                    </p>
                </div>
                <form onSubmit={handlerSubmit}>
                    <section className='Rating-section'>
                        <div
                            className={
                                rating === "1"
                                    ? "Rating-input selected"
                                    : "Rating-input"
                            }
                            id='1'
                            onClick={handleClick}>
                            <span>1</span>
                        </div>
                        <div
                            className={
                                rating === "2"
                                    ? "Rating-input selected"
                                    : "Rating-input"
                            }
                            id='2'
                            onClick={handleClick}>
                            <span>2</span>
                        </div>
                        <div
                            className={
                                rating === "3"
                                    ? "Rating-input selected"
                                    : "Rating-input"
                            }
                            id='3'
                            onClick={handleClick}>
                            <span>3</span>
                        </div>
                        <div
                            className={
                                rating === "4"
                                    ? "Rating-input selected"
                                    : "Rating-input"
                            }
                            id='4'
                            onClick={handleClick}>
                            <span>4</span>
                        </div>
                        <div
                            className={
                                rating === "5"
                                    ? "Rating-input selected"
                                    : "Rating-input"
                            }
                            id='5'
                            onClick={handleClick}>
                            <span>5</span>
                        </div>
                    </section>
                    <button className='Rating-btn'>SUBMIT</button>
                </form>
            </div>
        </div>
    );
}

export default Rating;
