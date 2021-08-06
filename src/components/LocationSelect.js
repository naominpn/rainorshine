import { useContext } from 'react'
import { WeatherContext} from './../WeatherContext';
import './LocationSelect.css'

export default function LocationSelect() {
    const { handleChange } = useContext(WeatherContext)
    return(
        <div className='location-select'>
            <h1 className='heading-currently'>Weather Today in: </h1>
            <select onChange={handleChange}name="" id="">
                <option value="">-- Select City</option>
                <option value="sydney">Sydney, AU</option>
                <option value="melbourne">Melbourne, AU</option>
                <option value="tokyo">Tokyo, JP</option>
                <option value="los angeles">Los Angeles, US</option>
                <option value="london">London, UK</option>
                <option value="paris">Paris, FR</option>
            </select>
        </div>
    )
}