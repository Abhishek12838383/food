import React from 'react'
import './Mealcard.css'

const Mealcard = ({data}) => {



  return (
    <div className='meal'>
   {
!data ? <h2>No Data Found</h2>:
data.map((item)=>{
    return (
      <div key={item.id} className="meal-card">
        <img src={item.strMealThumb} alt={item.strMeal} />
        <p>{item.strMeal}</p>
        <button onClick={(()=>{
            window.open(item.strYoutube)
        })}>View Video</button>
        <button>View Recipe</button>

      </div>
    )
  
})
}
    </div>
  )
}

export default Mealcard
