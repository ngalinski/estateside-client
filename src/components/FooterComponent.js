import React from 'react';
import './home/css/HomeComponent.css'

export default class FooterComponent extends React.Component {

    render() {
        return(
            <div>
                <footer id="footer">
                    <ul className="copyright">
                        <li>&copy; Estateside.</li>
                        <li>Credits: <a href="http://html5up.net">HTML5 UP</a></li>
                        <li>Powered by: <a href="https://www.zillow.com">Zillow</a></li>
                    </ul>
                </footer>
            </div>
        )
    }

}