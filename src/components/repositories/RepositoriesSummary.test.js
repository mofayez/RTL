import { render, screen } from "@testing-library/react";
import RepositoriesSummary from "./RepositoriesSummary";

// const renderComp = (Component, props) => render(<Component {...props} />);

test('Repository info is showcased properly', () => {
    const repository = {
        stargazers_count: 30, 
        open_issues: 12,
        forks: 1759,
        language: 'javascript'
    };

    render(<RepositoriesSummary repository={repository} />);

    for (const key in repository) {
        expect(screen.getByText(new RegExp(repository[key]))).toBeInTheDocument();
    }
});