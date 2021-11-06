import React, {useState,useEffect} from 'react'
import IconField from '../IconField'
import InputField from '../InputField'
import ImageField from '../ImageField'

const HomeBody = () => {
    const [search,setSearch] = useState("")

    const inputing =(e)=> {
        setSearch(e.target.value)
    }
    // useEffect({

    // })
    return (
        <div>
            <div>
                {
                   
                }
            </div>
            <div>
                <IconField
                    className="fa fa-search 2x"
                />
                <form>
                    <InputField
                        value={search}
                        onChange={inputing}
                        name="search"
                    />
                </form>
            </div>
        </div>
    )
}

export default HomeBody
