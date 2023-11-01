import { useState } from 'react';
import calculatePrice from './utils';
import './calculator.css';

export default function Calculator() {
    const [weight, setWeight] = useState(0);
    const [price, setPrice] = useState(0);

    function saveWeight(weight: number) {
        setWeight(weight);
        setPrice(calculatePrice(weight));
    }

    return (
        <div id='calculator'>
            <div id='inputs'>
                <input
                    id='weight-input'
                    type='number'
                    placeholder='Peso (g)'
                    value={(weight === 0? '': weight)}
                    onChange={(e) => saveWeight(Number(e.target.value))}
                />
            </div>
            <div className='vertical-spacer-8'/>
            <div id='result'>
                {price? <p>Portes: {price.toFixed(2)}€</p> : null}
            </div>
        </div>
    );
}