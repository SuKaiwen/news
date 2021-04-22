import React, {useState, useEffect} from 'react'


const App = () => {
  // Articles
  const [articles, setArticles] = useState([])

  // Search terms...
  const [term, setTerm] = useState('politics')

  // Loading animation
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
    try{
        const res = await fetch(
            `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${process.env.REACT_APP_API}`
        );
        const articles = await res.json();

        // Test the api works
        console.log(articles);
        console.log(articles.response.docs);
        setArticles(articles.response.docs);
        console.log("pepe");
    } catch (error) {
        console.error(error);
    }
    }
    fetchArticles()
  }, []);

  return (
    <div>
        <h1>Recent News</h1>
        <hr></hr>
        <section className = "section_style">
            {articles.map((article) => {
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
                        <h2 class = "head_title">{main}</h2>
                        <h4 class = "summary">{abstract}</h4>
                        <p class = "text_body">{lead_paragraph}</p>
                        <p class = "text_body" style = {{marginBottom: "150px"}}>Published on {pub_date.substring(0,10)}</p>
                        <div className = "end">
                            <ul >
                                <li class = "text_body">{original}</li>
                                <li class = "text_body">From: {news_desk}</li>
                                <li class = "text_body">Section: {section_name}</li>
                                <li class = "text_body">Words: {word_count}</li>
                            </ul>
                            <a href = {web_url} target = "_blank" class = "button">View Source</a>
                        </div>
                    </article>
                );
            })}
        </section>
    </div>
  );
}

export default App;
