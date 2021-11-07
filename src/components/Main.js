import { useState } from "react";
import {HiOutlineSearch} from "react-icons/hi";

const Main = () => {
    const [searchValue, setSearchValue] = useState("")

    const onSearchChange = (event) => {
        const { value } = event.target
        setSearchValue(value)
    }

    return (
        <div id="content">
            {searchValue.trim().length < 1 ? <img id="logo" src="https://internship.sidehustle.ng/img/logo-dark.64d45129.png"
                alt="SideHustle" /> :  <div className="img"><strong>{searchValue}</strong></div>
            }
           
          
            <form>
                <div className="searchBorder">
                    <div id="sideSeparation">
                        <div id="Search">
                            <HiOutlineSearch />
                        </div>
                        <input className="searchBar" type="text" value={searchValue} placeholder="Search Side hustle or type a URL" onChange={onSearchChange} name="q" maxLength="100" />
                        <div id="voiceInputCont" aria-label="Search by voice">
                            <span id="voiceSearch"></span>
                        </div>
                    </div>
                </div>
                <div className="buttonRegion">
                    <input className="searchButton" type="submit" value="Google Search" />
                    <input className="searchButton" type="button" value="I'm feeling lucky" />
                </div>
            </form>

            <div className="lang">
                Google offered in:
                <button >Hausa</button> <button >Igbo</button>
                 <button >Èdè Yorùbá </button>
                   <button >Nigerian Pidgin</button>
                   </div>
                   </div>
    )         
}
export default Main;