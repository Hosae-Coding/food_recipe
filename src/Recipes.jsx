import React from 'react';
import './recipes.css';

export default function Recipes({ title, image, ingredients }) {
   return (
      <div className="title">
         <h1>{title}</h1>

         <ol>
            {ingredients.map((ingredients) => (
               <li>{ingredients.text}</li>
            ))}
         </ol>

         <img src={image} alt="" />
      </div>
   );
}
