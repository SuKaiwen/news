import React from 'react'

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
        term: this.props.term,
        isLoading: true,
        articles: [],
        number: this.props.number
    }
  };

  async componentDidMount(){
    const res = await fetch(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.props.term}&api-key=${process.env.REACT_APP_API}`
    );
    const articleTemp = await res.json();
    console.log(articleTemp.response.docs);
    this.setState({
        articles: articleTemp.response.docs.slice(0,6),
        isLoading: false,
    });

    console.log(this.state.articles);
  }

  render(){
      const isLoading2 = this.state.isLoading;
      return (
         <div>
            <h1 style = {{marginTop:"50px"}}>{this.state.number} {this.state.term}</h1>
            <hr></hr>
            {isLoading2?<div style = {{minHeight:"300px", textAlign:"center"}}><h3>Is Loading Please Wait...</h3></div>:
            <div>
                <section className = "section_style">
                    {this.state.articles.map((article) => {
                        const {
                            abstract,
                            headline:{ main },
                            byline:{ original },
                            lead_paragraph,
                            news_desk,
                            section_name,
                            web_url,
                            _id,
                            word_count,
                            pub_date,
                        } = article;

                        return (
                            <article key = {_id} className = "padded">
                                <h2 className = "head_title">{main}</h2>
                                <h4 className = "summary">{abstract}</h4>
                                <p className = "text_body">{lead_paragraph}</p>
                                <p className = "text_body" style = {{marginBottom: "150px"}}>Published on {pub_date.substring(0,10)}</p>
                                <div className = "end">
                                    <ul >
                                        {original === ""? <li className = "text_body">By Unknown</li> : <li className = "text_body">{original}</li>}
                                        {news_desk === ""? <li className = "text_body">From: Unknown</li> : <li className = "text_body">From: {news_desk}</li>}
                                        {section_name === ""?<li className = "text_body">Section: Unknown</li> : <li className = "text_body">Section: {section_name}</li>}
                                        {word_count === 0? <li className = "text_body">Video</li> : <li className = "text_body">Words: {word_count}</li>}
                                    </ul>
                                    <a href = {web_url} target = "_blank" class = "button">View Source</a>
                                </div>
                            </article>
                        );
                    })}
                </section>
            </div>
            }
        </div>
      );
   }
}

export default App;
