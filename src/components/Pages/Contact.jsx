import React from 'react'
import '../CssFiles/Contact.css'
import { Link } from 'react-router-dom'

const Contact = () => {

    // for load from top 
    const body = document.querySelector('#root');
    body.scrollIntoView({
    }, [])


    
    return (
        <div className='container'>

            <div class="container">
                <div class="contact__wrapper shadow-lg mt-n9">
                    <div class="row no-gutters">
                        <div class="col-lg-5 contact-info__wrapper gradient-brand-color p-5 order-lg-2">
                            <h3 class="color--white mb-5">Contact</h3>

                            <ul class="contact-info__list list-style--none position-relative z-index-101">


                                <li class="mb-4 pl-4">
                                    <span class="position-absolute"><i class="fa fa-envelope"></i></span> test@test.com
                                </li>
                                <li class="mb-4 pl-4">
                                    <span class="position-absolute"><i class="fa fa-phone"></i></span> +32 71 123 456
                                </li>
                                <li class="mb-4 pl-4">
                                    <span class="position-absolute"><i class="fa fa-map-marker-alt"></i></span> E6K
                                    <br /> Quai de la gare
                                    <br /> 6000 Charleroi

                                    <div class="mt-3">
                                        <Link href="https://www.google.com/maps" target="_blank" class="text-link link--right-icon text-white">Itinéraire <i class="link__icon fa fa-directions"></i></Link>
                                    </div>
                                </li>


                                <figure class="figure position-absolute m-0 opacity-06 z-index-100" style={ { right: "10px" }}>

                                </figure>
                            </ul>
                        </div>

                        <div class="col-lg-7 contact-form__wrapper p-5 order-lg-1">
                            <form action="#" class="contact-form form-validate" novalidate="novalidate">
                                <div class="row">
                                    <div class="col-sm-6 mb-3">
                                        <div class="form-group">
                                            <label class="required-field" for="firstName">Prénom</label>
                                            <input type="text" class="form-control" id="firstName" name="firstName" placeholder="Jean" />
                                        </div>
                                    </div>

                                    <div class="col-sm-6 mb-3">
                                        <div class="form-group">
                                            <label for="lastName">Nom</label>
                                            <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Dupont" />
                                        </div>
                                    </div>

                                    <div class="col-sm-6 mb-3">
                                        <div class="form-group">
                                            <label class="required-field" for="email">Email</label>
                                            <input type="text" class="form-control" id="email" name="email" placeholder="jean@dupont.com" />
                                        </div>
                                    </div>

                                    <div class="col-sm-6 mb-3">
                                        <div class="form-group">
                                            <label for="phone">Téléphone</label>
                                            <input type="tel" class="form-control" id="phone" name="phone" placeholder="+32 71 123 456" />
                                        </div>
                                    </div>

                                    <div class="col-sm-12 mb-3">
                                        <div class="form-group">
                                            <label class="required-field" for="message">Comment pouvons-nous vous aider ?</label>
                                            <textarea class="form-control" id="message" name="message" rows="4" placeholder="Bonjour, j'aimerais…"></textarea>
                                        </div>
                                    </div>

                                    <div class="col-sm-12 mb-3">
                                        <button type="submit" name="submit" class="btn btn-primary">Envoyer</button>
                                    </div>

                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact