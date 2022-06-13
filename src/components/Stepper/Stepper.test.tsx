import { Stepper } from "./Stepper"
import { act, render, screen, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("render tests Stepper", () => {
  it("render", () => {
    render(<Stepper startValue={1} onValueChange={() => {}} step={1} />)
    expect(screen.getByRole("textbox")).toBeInTheDocument()
  })
})

describe("change Stepper value tests", () => {
  it("enter number and char", () => {
    let x = 0
    render(
      <Stepper
        onValueChange={(value) => {
          x = value
        }}
        step={1}
        id="1"
        startValue={1}
      />
    )

    const input = screen.getByRole("textbox")

    act(() => {
      fireEvent.change(input, { target: { value: "a" } })
    })
    expect(x).toBe(1)
    act(() => {
      fireEvent.change(input, { target: { value: "10" } })
    })
    expect(x).toBe(10)
  })
  it("test other step", () => {
    let x = 0
    render(
      <Stepper
        onValueChange={(value) => {
          x = value
        }}
        step={2}
        id="1"
        startValue={1}
      />
    )
  })
})
