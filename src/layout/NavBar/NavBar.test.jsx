import React from "react"
import { describe, it, expect, beforeEach, afterEach } from "vitest"
import { screen, render, cleanup } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import matchers from "@testing-library/jest-dom/matchers"

expect.extend(matchers)


import NavBar from "."


describe('NavBar Component', () => {
  beforeEach(() => {
    render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  )
})

  afterEach(() => {
    cleanup()
  })

  it('displays a navbar with 2 children', () => {
    const nav = screen.getByRole('navigation')

    expect(nav).toBeInTheDocument()
    expect(nav.childNodes.length).toBe(2)
  })

  it('displays an image', () => {
    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument()
  })

  it('displays an image with the correct src', () => {
    const img = document.querySelector('img')
    expect(img.src).toContain('favicon')
  })
})
