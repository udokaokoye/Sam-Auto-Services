import React, {useState, useEffect} from 'react';
import './ReviewsAdd.css'
const ReviewsAdd = () => {
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }, [])
    const [name, setname] = useState('')
    const [stars, setstars] = useState('')
    const [comments, setcomments] = useState('')
    const [messageBox, setmessageBox] = useState('')

    const addReviewHandler = () => {
        if (name == '' || stars == '' || comments == '') { 
            alert('Please Fill In All Fields')
        }
        const formData = new FormData;
        formData.append('name', name)
        formData.append('stars', stars)
        formData.append('comments', comments)

        const url = 'http://localhost/samautotech/add_reviews.php';

        fetch(url, {
            method: 'POST',
            body: formData
        }).then((res) =>  res.json()).then((data) => {
            if (data == 'SUCCESS') {
                setmessageBox("Thanks for your review. it's really appriciated");
            } else {
                setmessageBox("We are having issues posting your review, please try again later")
            }
        })
    }
  return <div className='add_reviews_container'>
      <div className="add_reviews_showcase">
        <div className="ovrly">
                <h1>Write A Review</h1>
            </div>
      </div>

      <div className="add_form">
          <h3>Please fill in required fields</h3>

          <div style={{display: messageBox == '' ? 'none' : 'block'}} className="messageBox">
              {messageBox}
          </div>

          <div className="form">
              <input onChange={(e) => setname(e.target.value)} type="name" placeholder='Enter Name' name='Name' />
              <input onChange={(e) => setstars(e.target.value)} type="number" placeholder='Enter Stars (eg. 1,2,3,4,5)' />
              <textarea onChange={(e) => setcomments(e.target.value)} placeholder='Enter Comment'></textarea>
              <button onClick={() => addReviewHandler()}>Submit Review!</button>
          </div>
      </div>
  </div>;
};

export default ReviewsAdd;
