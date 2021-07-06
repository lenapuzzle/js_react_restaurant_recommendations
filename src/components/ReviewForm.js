import React, {useState} from "react"


const ReviewForm = props => {
    
const [newReview, setNewReview] = useState({
    name: "",
    rating: "",
    content: ""
})

const onSubmitHandler = (event) => {
    event.preventDefault()

    props.addReview(newReview)
}

const handleOnChange = (event) => {
        setNewReview({
            ...newReview,
            [event.currentTarget.name]: event.currentTarget.value})
        // console.log(event.currentTarget.value)
}

const clearForm = event => {
    event.preventDefault()

      setNewReview({
        name: "",
        rating: "",
        content: ""
    })

}

    return (
        <form onSubmit={onSubmitHandler}>
            <label htmlFor="name"> Name:</label>
            <input name="name" 
            id="name" 
            onChange={handleOnChange} 
            value={newReview.name}
            type="text">   
            </input>

            <label htmlFor="rating"> Name:</label>
            <input name="rating" 
            id="rating" 
            onChange={handleOnChange} 
            value={newReview.rating}
            type="text">
            </input>

            <label htmlFor="content"> Name:</label>
            <input name="content" 
            id="content" 
            onChange={handleOnChange} 
            value={newReview.content}
            type="text">
            </input>

            <input type="submit" value="Submit"></input>
            <button onClick={clearForm} type="button"> Clear Form </button>
        </form>
    )
}

export default ReviewForm