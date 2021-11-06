import React from 'react'
import ButtonField from '../componentss/ButtonField'
import IconField from '../componentss/IconField'
import LinkField from '../componentss/LinkField'
import "./style.css"

const NavBar = () => {
    return (
        <nav>
            <div>
                <LinkField
                    text="Gmail"
                />

                <LinkField 
                    text="Images"
                />

                <LinkField>
                    <IconField 
                        className="fa fa-th fa-2x"
                    />
                </LinkField>

                <ButtonField>
                    <LinkField text="Sign In"/>
                </ButtonField>
            </div>
        </nav>
    )
}

export default NavBar
