import { useContext } from 'react'
import { WeatherContext} from './WeatherContext';

export default function LocationSelect() {
    const { handleChange } = useContext(WeatherContext)
    return(
        <div className='location-select'>
            <select onChange={handleChange}name="" id="">
                <option value="">-- Select City</option>
                <option value="sydney">Sydney</option>
                <option value="tokyo">Tokyo</option>
                <option value="los angeles">Los Angeles </option>
                <option value="london">London</option>
                <option value="paris">Paris</option>
            </select>
        </div>
    )
}