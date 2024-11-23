import './SearchForm.css';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';
import {useState} from "react";

//export default function SearchForm(){
const SearchForm = () => {
    const [news, setNews] = useState(null);
    let loaded = false;
    //get the data using the value retrieved in the click function
    const getData = async (value) => {
        try{
        //fetch the data with the keyword from the input
        fetch(`https://backend-927c.onrender.com/api?keyword=${value}`) 
       .then(response => response.json())
        .then(obj => { //get the data 
            let articleInfo = obj.response.docs;
            document.getElementById("results").innerHTML = "<br/><b>Results: </b><br/>";
            loaded = true;
            setNews(articleInfo);

            //iterate through the data / different articles
            for(let i = 0; i < articleInfo.length; i++){
                //get the headline and set a link to the details page
                let headline = articleInfo[i].headline.main;
                //let link = "http://localhost:3000/details"; 
                let link = "https://frontend-9vuf.onrender.com/details";
                //add the rest of the data to session storage for the details page to access
                sessionStorage.setItem("headline", headline);
                sessionStorage.setItem("abstract", articleInfo[i].abstract);
                sessionStorage.setItem("web_url", articleInfo[i].web_url);
                sessionStorage.setItem("lead_paragraph", articleInfo[i].lead_paragraph);
                sessionStorage.setItem("source", articleInfo[i].source);
                sessionStorage.setItem("pub_date", articleInfo[i].pub_date);
                //write the link and headline to the results paragraph & use br tags to make it look nicer
                //document.getElementById("results").innerHTML += "<br/><a href='"+link+"'>" + headline + "</a><br/>";
                document.getElementById("loaded").innerHTML = "loaded!";
            }
            }
        )
        } 
        catch(error){
            document.getElementById("loaded").innerHTML = "error:" + error.message;
        }
    }

    //when the button is clicked, get the value from the text input and perform function handleClick
    const handleClick = (value) => {
        document.getElementById("loaded").innerHTML = "";
        //if the element is rendered then switch it to a blank string
        if(document.getElementById("results") != null){
            document.getElementById("loaded").innerHTML = "loading...";
            document.getElementById("results").innerHTML = "";
        }
        //get the data using the value onclick
        getData(value);
    }

    return(
        <div className="SearchForm">
            <h1 className="Header">Header</h1>
            <label htmlFor="Filter">Input key word or phrase here: </label> <br/><br/>
            <input type="text" id="Filter"></input> <br/><br/>
            <input type="button" value="Submit" name="Submit" onClick = {() => handleClick(document.getElementById("Filter").value)}></input>
            <p id="loaded" role="loaded"></p>
            <p id="results" role="results"></p>
            <br/> <br/>
            <img src={logo} alt="NYT logo for proper credit"></img>
            {news && (
                <div>
                    {news.map((news, index) => (
                        <div key={index}>
                        <Link to={{
                            pathname: "/details",
                            headline: news[index].headline.main,
                            abstract: news[index].abstract,
                            web_url: news[index].web_url,
                            lead_paragraph: news[index].lead_paragraph,
                            source: news[index].source,
                            pub_date: news[index].pub_date}}>{news[index].headline.main}</Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchForm;