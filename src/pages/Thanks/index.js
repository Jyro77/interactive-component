import { useContext } from "react";
import RatingContext from "context/Context";
import "./style.css";
import { Link } from "wouter";

function Thanks() {
    const { rating, setRating } = useContext(RatingContext);
    const handleClick = e => {
        setRating(0);
    };

    return (
        <div className='Thanks-content'>
            <div className='Thanks-container'>
                <Link onClick={handleClick} to='/'>
                    <img
                        src='/images/illustration-thank-you.svg'
                        alt='Thanks'
                        className='Thanks-img'
                    />
                </Link>
                {rating ? (
                    <div>
                        <div className='Thanks-rating'>{`You selected ${rating} out of 5`}</div>
                        <div>
                            <h2>Thank you!</h2>
                            <p className='Thanks-p'>
                                We appreciate you taking the time to give a
                                rating. If you ever need more support, don’t
                                hesitate to get in touch!
                            </p>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className='Thanks-rating-2'>{`You have not selected any option :(`}</div>
                        <div>
                            <h2>Please, take the time</h2>
                            <p className='Thanks-p'>
                                We appreciate you taking the time to give a
                                rating. If you ever need more support, don’t
                                hesitate to get in touch!
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Thanks;
