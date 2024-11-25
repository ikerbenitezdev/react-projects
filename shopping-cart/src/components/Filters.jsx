import './Filters.css';
import { useFilters } from '../hooks/useFilters';
import { useState, useId } from 'react';
export function Filters () {
    const { filters, setFilters } = useFilters();
    const [minPrice, setMinPrice] = useState(0);
    const [minPriceFilterId] = useId();
    const [categoryFilterId] = useId();

    const handleChangeMinPrice = (event) => {
        setFilters( prevState => ({
            ... prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters( prevState => ({
            ... prevState,
            category: event.target.value
        }))
    }
    
    return (
        <section className="filters">
            <div>
                <label htmlFor={minPriceFilterId}>Price</label>
                <input 
                    type="range" 
                    name="price" 
                    id={minPriceFilterId}
                    min='0' 
                    max='1000' 
                    onChange={handleChangeMinPrice}
                    value={filters.minPrice}
                    />
                    <span>${filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categoría</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="groceries">Comida</option>
                    <option value="furniture">Muebles</option>
                </select>
            </div>
        </section>
            
        
    )
                

}