import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Sidebar from "../../components/Sidebar/Sidebar";

const Series = () => {

    const [series, setSeries] = useState([])

    useEffect(() => {
        loadseries();
    }, [])

    const loadseries = () => {
        const startDate = new Date()
        const url = `https://api.cricapi.com/v1/series?apikey=a15b86f7-08d4-49f8-995c-6a0190405ee8&offset=0`
        axios.get(url).then((res) => {
            // console.log(res.data)
            // setSeries(res.data)
            let data = res.data.data
            const inputTS = new Date().getTime();
            const result = data.filter(d => Date.parse(d.startDate) >= inputTS)
            // const sorted = result.sort((a, b)=> a.startDate < b.startDate)
            // console.log(sorted)
            setSeries(result)

        })
    }
    return (
        <div className="container">
            <Helmet>
                <title>Cricket Schedule - International, domestic and T20</title>
                <meta name='description' content='Schedule of International, T20 League, Indian, Australian and English'/>
                <link rel="canonical" href="https://cricpoint.in/series" />

            </Helmet>

            <div className="row">
            <div className="col-md-8">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>SNO</th>
                            <th>Name</th>
                            <th>Start Date</th>
                        </tr>
                    </thead>
                    {series.length === 0 ? (
                        <tbody>
                           <tr>
                            <td>
                             no data found
                            </td>
                            </tr>
                        </tbody>
                    ) :
                        (series.reverse().map((list, index) => {
                            return (
                                <tbody key={list.id}>
                                    <tr className="p-4">
                                        <td>
                                            {index+1}
                                        </td>
                                        <td>
                                            {list.name}
                                        </td>
                                        <td>
                                            {list.startDate}
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        }))

                    }
                </table>
            </div>

            <div className="col-md-4">
                <Sidebar/>
            </div>
            </div>
        </div>
    )
}

export default Series;