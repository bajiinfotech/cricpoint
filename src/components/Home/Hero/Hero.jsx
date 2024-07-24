import React, { useEffect, useState } from "react"
// import { hero } from "../../../dummyData"
import "../Hero/hero.css"
import Card from "./Card"
import axios from "axios"
import { Link } from "react-router-dom"

const Hero = () => {

    const [post, setPost] = useState([])
    useEffect(() => {
        getpost()
    }, [])

    const getpost = async () => {

        const url = `https://cricpoint.in/wp-json/wp/v2/posts?_embed&per_page=4&categories=2`
        await axios.get(url).then((res) => {
            // setNumberofpage(res.headers["x-wp-totalpages"]);
            console.log(res.data)
            setPost(res.data)

        });
    }


    return (
        <>
            <section className="hero">

                <div className="container">
                    {post.map((po, indes) => {
                        return (
                            <Card
                                title={po.title.rendered}
                                catgeory="cricket"
                                cover={po.featured_media_src_url}
                                authorName="Shaik Baji"
                                time="20/20/2023"
                                slug={po.slug}

                            />
                        )
                    })}

                </div>
            </section>

        </>
    )
}

export default Hero
