import React from "react"
import { render } from "@testing-library/react"

import Header from "../Header"

test("Matches previous snapshot", () => {
  const header = render(<Header />)

  expect(header).toMatchSnapshot()
})

test("Displays the correct title", () => {
  const { getByText } = render(<Header />)

  expect(getByText("willharris.dev")).toBeTruthy()
})
