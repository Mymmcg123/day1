import React from 'react';
import {useState, useEffect} from "react";
import axios from "axios";
import './ApiCovid.css';

const  ApiCovid = () =>{

    const [covid,setCovid] = useState([{cases : '1',todayCases : '1',deaths : '1',todayDeaths : '1',recovered : '1',todayRecovered : '1'}]);

    useEffect(() => {
        test()
    }, [])

    const test = async () => {
        const {data} = await axios.get('https://disease.sh/v3/covid-19/countries/TH')
        let Cases = [{cases:data.cases,todayCases:data.todayCases,deaths:data.deaths,todayDeaths:data.todayDeaths,recovered:data.recovered,todayRecovered:data.todayRecovered }];
        setCovid(Cases);
    }

    let tickers = covid.map((Covid19)=>
        <li key = '1'>
            <h6>Coronavirus Cases: {Covid19.cases}</h6>
            <h6>Today Cases: {Covid19.todayCases}</h6>
            <h6>Deaths: {Covid19.deaths}</h6>
            <h6>Today Deaths: {Covid19.todayDeaths}</h6>
            <h6>Recovered: {Covid19.recovered}</h6>
            <h6>Today Recovered: {Covid19.todayRecovered}</h6>
        </li>
    );

    return(
        <div className='covid-container'>
            <h4>Thailand Coronavirus</h4>
            <ul className='covid'>{tickers}</ul>
        </div>
    );

}

export default ApiCovid;