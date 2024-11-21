import {rest} from "msw";
import {server} from "../../mocks/server";
import SearchForm from "./SearchForm";
import {screen, render, userEvent} from "@testing-library/react";


test("test for mock api", async () => {
    window.addEventListener('load',() => {
    render(<SearchForm/>);
    const buttonElement = screen.getByRole('button', {name: 'Submit'});
    userEvent.click(buttonElement);
   
    const element = screen.findByRole("results");
    expect(element).toHaveTextContent("Results");
})
});


test("displays error message", async () => {
    server.use(
      rest.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=${process.env.REACT_APP_NYT_API_KEY}`, (res, req, ctx) => {
        return res(
          ctx.status(500),
          ctx.json({ message: "Internal Server Error" })
        );
      })
    ); 
    window.addEventListener('load',() => {
        render(<SearchForm/>);
        const buttonElement = screen.getByRole('button', {name: 'Submit'});
        userEvent.click(buttonElement);
       
        const element2 = screen.findByRole("results");
        expect(element2).toHaveTextContent("error");
    })
  }
  );