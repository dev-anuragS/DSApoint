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
                        <p id='logoContent'>Welcome to DSApoint</p>
                        <p id='logoContent'>An online Learning Platform</p>
                        <p id='logoContent'>A Coding Platform</p>
                        <p id='logoContent'>Let's get Started</p>
                        </div>
                        <button id='loginBtn'>Get Started</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home