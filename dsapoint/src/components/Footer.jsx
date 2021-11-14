import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import '../components/sass/footer.scss'

const Footer = () => {

    const [emailData, setemailData] = useState('');

    const inputEvent=(event)=>{
        setemailData(event.target.value);
    }

    return (
        <div>
            <footer className="bg-dark text-center text-white footerCss">
                <div className="container p-4">
                    <section className="mb-4">
                        <NavLink className="btn btn-outline-light btn-floating m-1 socialLogo" exact to="#!" role="button"
                        ><i className="fab fa-facebook-f"></i
                        ></NavLink>

                        <NavLink className="btn btn-outline-light btn-floating m-1 socialLogo" exact to="#!" role="button"
                        ><i className="fab fa-twitter"></i
                        ></NavLink>

                        <NavLink className="btn btn-outline-light btn-floating m-1 socialLogo" exact to="#!" role="button"
                        ><i className="fab fa-google"></i
                        ></NavLink>

                        <NavLink className="btn btn-outline-light btn-floating m-1 socialLogo" exact to="#!" role="button"
                        ><i className="fab fa-instagram"></i
                        ></NavLink>

                        <NavLink className="btn btn-outline-light btn-floating m-1 socialLogo" exact to="#!" role="button"
                        ><i className="fab fa-linkedin-in"></i
                        ></NavLink>

                        <NavLink className="btn btn-outline-light btn-floating m-1 socialLogo" exact to="#!" role="button"
                        ><i className="fab fa-github"></i
                        ></NavLink>
                    </section>
                    <section className="">
                        <form action="" onSubmit={()=>alert(emailData)}>
                            <div className="row d-flex justify-content-center">
                                
                                <div className="col-auto">
                                    <p className="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>
                                <div className="col-md-5 col-12">
                                    <div className="form-outline form-white mb-4">
                                        <input type="email" id="form5Example2" className="form-control" value={emailData} onChange={inputEvent} placeholder="Write your Email here"/>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                    <section className="mb-4">
                        <p>
                            To get regular updates about new content and courses fill the above E-Mail field and you'll recieve regular updates.
                        </p>
                    </section>
                </div>
                <div className="text-center p-3">
                    © 2020 Copyright: DSApoint
                </div>
            </footer>
        </div>
    )
}

export default Footer
