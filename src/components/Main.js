import search from '../search.svg'
import speech from '../speech.svg'
import side from    '../side.jpg'
import { waitForDomChange } from '@testing-library/dom'
const Main = ({value,word})=>
{
    return(
        <div className="container">
            {console.log(word.length)}
            <div className="img-section">
            {word.length==0 ?<img src={side} alt="" /> : <h2>{word}</h2>}
            </div>
            <form className="img-section" onChange={value}>
            <label className="form-input">
            <span className="search"><img src={search} alt="" /></span> <span className="input"><input type="text"  /> </span> <span className="speech"><img src={speech} alt="" /></span>
            </label>
            </form>
            <div className="img-section submit-btn">
                <button type="submit">Google Search</button> <button>I'm feeling Lucky</button>
            </div>

            <div className="img-section translation"><span>Google offered in:</span> <a href="#">Deutsch</a> <a href="#">Français</a> <a href="#">Italiano</a> <a href="#">Rumantsch</a>   </div>
        </div>
    )
}


export default Main;