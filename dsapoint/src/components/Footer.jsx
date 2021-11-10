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
            <footer class="bg-dark text-center text-white footerCss">
                <div class="container p-4">
                    <section class="mb-4">
                        <NavLink class="btn btn-outline-light btn-floating m-1" to="#!" role="button"
                        ><i class="fab fa-facebook-f"></i
                        ></NavLink>

                        <NavLink class="btn btn-outline-light btn-floating m-1" to="#!" role="button"
                        ><i class="fab fa-twitter"></i
                        ></NavLink>

                        <NavLink class="btn btn-outline-light btn-floating m-1" to="#!" role="button"
                        ><i class="fab fa-google"></i
                        ></NavLink>

                        <NavLink class="btn btn-outline-light btn-floating m-1" to="#!" role="button"
                        ><i class="fab fa-instagram"></i
                        ></NavLink>

                        <NavLink class="btn btn-outline-light btn-floating m-1" to="#!" role="button"
                        ><i class="fab fa-linkedin-in"></i
                        ></NavLink>

                        <NavLink class="btn btn-outline-light btn-floating m-1" to="#!" role="button"
                        ><i class="fab fa-github"></i
                        ></NavLink>
                    </section>
                    <section class="">
                        <form action="" onSubmit={()=>alert(emailData)}>
                            <div class="row d-flex justify-content-center">
                                
                                <div class="col-auto">
                                    <p class="pt-2">
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </div>
                                <div class="col-md-5 col-12">
                                    <div class="form-outline form-white mb-4">
                                        <input type="email" id="form5Example2" class="form-control" value={emailData} onChange={inputEvent} placeholder="Write your Email here"/>
                                    </div>
                                </div>
                                <div class="col-auto">
                                    <button type="submit" class="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                    <section class="mb-4">
                        <p>
                            To get regular updates about new content and courses fill the above E-Mail field and you'll recieve regular updates.
                        </p>
                    </section>
                </div>
                <div class="text-center p-3">
                    © 2020 Copyright: DSApoint
                </div>
            </footer>
        </div>
    )
}

export default Footer
