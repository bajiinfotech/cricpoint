import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'

const About = () => {

    // for load from top 
    const body = document.querySelector('#root');
    body.scrollIntoView({
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row">

                
            
            <div className="col-md-8">

                <h2>About Us!</h2>
                <h3 className='text-center'>Welcome To <span >Cricpoint</span></h3>
                <p><span >Cricpoint</span> is a Professional <span >Sports</span> Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of <span >Sports</span>, with a focus on dependability and <span>News</span>. We're working to turn our passion for <span >Sports</span> into a booming <Link to="/" rel="do-follow" >online website</Link>. We hope you enjoy our <span >Sports</span> as much as we enjoy offering them to you.</p>
                <p>I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
                <p className='text-center'>Thanks For Visiting Our Site<br /><br />
                    <span className='text-center text-danger'>Have a nice day!</span></p>

            </div>
            <div className='col-md-4'>
                <Sidebar/>
            </div>
            </div>
            </div>
        </div>
    )

}

export default About;