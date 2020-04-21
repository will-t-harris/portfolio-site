import React from "react"
import { render } from "@testing-library/react"

import Header from "../Header"

test("matches previous snapshot", () => {
  const header = render(<Header />)

  expect(header).toMatchSnapshot()
})

test("displays the correct title", () => {
  const { getByText } = render(<Header />)

  expect(getByText("willharris.dev")).toBeTruthy()
})

test("hamburger icon not visible on desktop view", () => {
  const { getByTitle } = render(<Header />)

  expect(getByTitle("Click to view menu items")).not.toBeVisible()
})
