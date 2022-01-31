import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {useEffect, useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import moment from 'moment';
import './Reviews.css'
const Reviews = () => {
    const [reviews, setreviews] = useState([])
    useEffect(() => {
        fetchReviews()
      }, [])

      useEffect(() => {
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
            
          
            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 400, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
          
          });
    }, [])

    const fetchReviews = () => {
        const url = "http://localhost/samautotech/reviews.php";

        fetch(url, {
            method: "POST"
        }).then((res) => res.json()).then((data) => {
            setreviews(data)
        })
    }

    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }, [])
  return <div className='reviews_container'>
      <div className="reviews_showcase">
        <div className="ovrly">
                <h1>Our Reviews</h1>
            </div>
      </div>

      <div className="reviews">
          {reviews.map((review) => (
              <div data-aos="fade-up" data-aos-duration="1000" className="reviews_content">
              <h1>{review.name}</h1>
              <div className="stars">
                  <FontAwesomeIcon icon={faStar} style={{color: parseInt(review.stars) >= 1 ? '#f1d623' : 'grey' }} />
                  <FontAwesomeIcon icon={faStar} style={{color: parseInt(review.stars) >= 2 ? '#f1d623' : 'grey' }} />
                  <FontAwesomeIcon icon={faStar} style={{color: parseInt(review.stars) >= 3 ? '#f1d623' : 'grey' }} />
                  <FontAwesomeIcon icon={faStar} style={{color: parseInt(review.stars) >= 4 ? '#f1d623' : 'grey' }} />
                  <FontAwesomeIcon icon={faStar} style={{color: parseInt(review.stars) >= 5 ? '#f1d623' : 'grey' }} />
              </div>
              <p className="comments">{review.comment}</p>
              <p className="date">{moment(review.date).format("Do MMMM YYYY") + " at " + moment(review.date).format("h:mm a")} </p>

              <hr />
          </div>
          ))}
      </div>
  </div>;
};

export default Reviews;
