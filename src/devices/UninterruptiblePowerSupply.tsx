import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const UninterruptiblePowerSupply = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M5 0s-.707-.016-1.45.355C2.814.727 2 1.668 2 3v10s-.016.707.355 1.45C2.727 15.187 3.668 16 5 16h6s.707.016 1.45-.355C13.187 15.273 14 14.332 14 13V3c0-1.332-.812-2.273-1.55-2.645C11.706-.015 11 0 11 0zm0 2h6c.555 0 1 .445 1 1v10c0 .555-.445 1-1 1H5c-.555 0-1-.445-1-1V3c0-.555.445-1 1-1m0 1v1h4V3zm5.473 0a.5.5 0 0 0-.473.5c0 .277.223.5.5.5s.5-.223.5-.5-.223-.5-.5-.5zM8.875 4.992q-.062.001-.125.008a1.03 1.03 0 0 0-.469.281l-3.031 3c-.234.23-.344.582-.281.906V10h2.468L6.25 11.273c-.21.22-.32.54-.281.844v.875h1c.265.004.531-.097.718-.281l3-2.992A1 1 0 0 0 10.97 9a1 1 0 0 0 0-.125V8H8.406L9.72 6.719c.215-.219.32-.54.281-.844V5H9q-.062-.007-.125-.008m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(UninterruptiblePowerSupply)
export default ForwardRef