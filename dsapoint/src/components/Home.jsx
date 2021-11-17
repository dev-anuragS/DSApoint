import React from 'react'
import '../components/sass/home.scss'

const Home = () => {
    return (
        <>
            <div id="home">
                <div id="homeContent">
                    <div id="homeTitle">
                        <h1 id='logo'>dp</h1>
                        <p id='logoName'>DSApoint</p>
                    </div>
                    <div id='homeScreenContent'>
                        <div id="variableContent">
                        <p id='logoContent'>Anurag</p>
                        <p id='logoContent'>Ankur</p>
                        <p id='logoContent'>Ambesh</p>
                        <p id='logoContent'>Anmol</p>
                        </div>
                        <button id='loginBtn'>Get Started</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home