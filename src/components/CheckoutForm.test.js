import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>)
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)

    const firstName = screen.getByLabelText(/First Name/i)
    userEvent.type(firstName, 'Samantha');

    const lastName = screen.getByLabelText(/Last Name/i)
    userEvent.type(lastName, 'Little');

    const address = screen.getByLabelText(/Address/i)
    userEvent.type(address, '454 Plant Place');

    const city = screen.getByLabelText(/City/i)
    userEvent.type(city, 'San Francisco');

    const state = screen.getByLabelText(/State/i)
    userEvent.type(state, 'CA');

    const zip = screen.getByLabelText(/zip/i)
    userEvent.type(zip, '94151');

    const button = screen.getByRole('button')
    userEvent.click(button);

    await waitFor(() => {
        const successMessage = screen.queryByTestId('successMessage')
        expect(successMessage).toBeInTheDocument();
    })
});
