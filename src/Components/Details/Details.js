import styles from './Details.css';
import logo from '../../logo.png';

export default function Details(){
    //get the given article details from sessionStorage 
    let headline = sessionStorage.getItem("headline");
    let abstract = sessionStorage.getItem("abstract");
    let web_url = sessionStorage.getItem("web_url");
    let lead_paragraph = sessionStorage.getItem("lead_paragraph");
    let source = sessionStorage.getItem("source");
    let pub_date = sessionStorage.getItem("pub_date");

    //then write/display them in p tags 
    return(
        <div className="Details">
            <h1>Details of the article you chose:</h1>
            <p><b>Headline:</b> {headline}</p>
            <p><b>Source:</b> {source}</p>
            <p><b>Publish date:</b> {pub_date}</p>
            <p><b>Abstract:</b> {abstract}</p>
            <p><b>Lead paragraph:</b> {lead_paragraph} </p>
            <p><b>Web url:</b> <a href={web_url} target="_blank">{web_url}</a></p>
            <br/>
            <img src={logo} alt="NYT logo for proper credit"></img>
        </div>
    )
}