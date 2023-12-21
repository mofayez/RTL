import { screen, render } from "@testing-library/react";
import RepositoriesListItem from "./RepositoriesListItem";
import { MemoryRouter } from "react-router";


const renderComponent = () => {

    const repository = {
        full_name: 'facebook_react',
        language: 'javascript', 
        description: 'desc', 
        owner: 'mo', 
        name: 'react'
    };

    render(
        <MemoryRouter>
            <RepositoriesListItem repository={repository} />
        </MemoryRouter>
    )
}

test('Shows a link to github home page for this repo', async () => {

    renderComponent();

    await screen.findByRole('img', {name: /javascript/})
});

const pause = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, 1000)
    });
}