import {rest} from 'msw';

//'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + keyword + '&api-key=' + process.env.REACT_APP_NYT_API_KEY
export const handlers = [
    rest.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${process.env.REACT_APP_NYT_API_KEY}`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(
                {
                    "response": {
                      "meta": {
                        "hits": 25,
                        "time": 332,
                        "offset": 0
                      },
                      "docs": [
                        {
                          "web_url": "http://thecaucus.blogs.nytimes.com/2012/01/01/virginia-attorney-general-backs-off-ballot-proposal/",
                          "snippet": "Virginia's attorney general on Sunday backed off of a proposal to loosen the state's ballot access rules to allow more Republican presidential candidates to qualify.",
                          "lead_paragraph": "DES MOINES -- Virginia's attorney general on Sunday backed off of a proposal to loosen the state's ballot access rules to allow more Republican presidential candidates to qualify.",
                          "abstract": "abstract data",
                          "web_url": "web_url data",
                          "source": "source data",
                          "pub_date": "pub_date data"
                        }
                    ]
                    }
                }
            )
        )
    }) 
]