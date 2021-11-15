import React from 'react'
import ImageField from '../componentss/ImageField'
import LinkField from '../componentss/LinkField'
import './style.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="country">
               Nigeria
            </div>
            <div className="footerInfo">
                <div className="footer_first">
                    <div>
                        <LinkField text="About"/>
                        <LinkField text="Advertising"/>
                        <LinkField text="Business"/>
                        <LinkField text="How Search works"/>
                    </div>
                    </div>
                    <div className="footer_second">
                        <LinkField>
                            <ImageField
                                image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAMAAAAiV0Z6AAAAPFBMVEVLoEN0wU6CzFKCzFKCzFKCzFKCzFJSo0MSczNDmkCCzFJPoUMTczNdr0gmgziCzFITczMTczMTczMTczPh00jOAAAAFHRSTlPF/+bIsms8Ad///hX+//5/tXw7aMEAx10AAACaSURBVHgBbc4HDoRQCATQ33tbvf9dF9QxaCT9UQaltLHOh/golXKhMs5Xqa0xU1lyoa2fXFyQOsDG38qsLy4TaV+sFislovyhPzLJJrBu6eQOtpW0LjbJkzTuTDLRVNKa3uxJI+VdiRqXSeu6GW+Qxi29eLIi8H7EsYrT42BD+mQtNO5JMjRuC4lSY8V4hsLX0egGijvUSEP9AbylEsOkeCgWAAAAAElFTkSuQmCC"
                                alt="Carbon neutral"     
                            />
                            Carbon neutral since 2007
                        </LinkField>
                    </div>

                <div className="footer_third"> 
                    <LinkField text="Privacy"/>
                    <LinkField text="Terms"/>
                    <LinkField text="Settings"/>
                </div>
                </div>
            </div>
    )
}

export default Footer
