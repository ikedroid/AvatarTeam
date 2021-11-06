
const Header = () => {
    return(
        <div id="navBar">
       
        <div id="navR">
            <div id="navRLinks">
                <button className="navLinks" >Gmail</button>
                <button className="navLinks" id="imgL" >Images</button>
            </div>
            <div id="navRbuttons">
                <button id="GAppsButton" ></button>
                <button id="signin"
                    >Sign
                    in</button>
            </div>
        </div>
    </div>
    )
}

export default Header;