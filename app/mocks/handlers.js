import { rest } from 'msw'

export const handlers = [
    // Handles a POST /login request
    // rest.post('/login', null),
    // Handles a GET /work request
    rest.get('https://api.thecatapi.com/v1/images/search?limit=10', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json([
              {
                "id":"ebv",
                "url":"https://cdn2.thecatapi.com/images/ebv.jpg",
                "width":176,"height":540,
                "breeds":[],
                "favourite":{}
              },
              {
                "id":"ebv",
                "url":"https://cdn2.thecatapi.com/images/ebv.jpg",
                "width":176,"height":540,
                "breeds":[],
                "favourite":{}
              },
              {
                "id":"ebv",
                "url":"https://cdn2.thecatapi.com/images/ebv.jpg",
                "width":176,"height":540,
                "breeds":[],
                "favourite":{}
              } 
            ]
          ),
        )
    }),

    rest.get('https://api.thecatapi.com/v1/images/:catsId', (req, res, ctx) => {
      const { catsId } = req.params
      console.log(catsId)
      return res(
          // ctx.status(200),
          ctx.json({
            "id":"0XYvRd7oD",
            "width":1204,"height":1445,
            "url":"https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
            "breeds":[{
                "weight":{"imperial":"7  -  10","metric":"3 - 5"},
                "id":"abys","name":"Abyssinian",
                "temperament":"Active, Energetic, Independent, Intelligent, Gentle",
                "origin":"Egypt",
                "country_codes":"EG",
                "country_code":"EG",
                "life_span":"14 - 15",
                "wikipedia_url":"https://en.wikipedia.org/wiki/Abyssinian_(cat)"
            }]
            }),
          )
      })
  ]
