import React from 'react';

class MyComponent extends React.Component {
    
    render() {
        let recipe = {
            nombre: 'Pizza',
            ingredients: ['Tomato', 'Cheese', 'Ham'],
            calories: 400
        };
        return (
            <React.Fragment>
                <h1>{'Recipe for a: ' + recipe.nombre}</h1>
                <h2>{'Calories:' + recipe.calories}</h2>
                <ol>
                    {
                        recipe.ingredients.map((ingredient, i)=>{
                            console.log(ingredient)
                            return (
                                <li key={i}>
                                    {ingredient}
                                </li>
                            )
                        })
                    }
                </ol>
                <hr/>
            </React.Fragment>
        );
    }
}
export default MyComponent;