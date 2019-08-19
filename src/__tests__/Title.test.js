import Title from './../components/Title'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import React from 'react'

describe("Test title", () => {
    const {getByTestId, getByText} = render(<Title/>) 

    // it("should render an title name", async () => {
    //    const nome = await waitForElement(() => {
    //        getByTestId("nome")
    //    })
    //    expect(nome.textContent).toBe("Wellerson's Challenge")
    // })
    it("should render an title name", async () => {
        const nome = await waitForElement(() => {
            getByTestId("nome1")
        })
        expect(nome.textContent).toBe("Challenge")
     })
})