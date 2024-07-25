import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NetworkCellularOffline = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill=""
      fillOpacity={0.349}
      d="M13 1c-.555 0-1 .445-1 1v7.27c.148.09.29.19.414.316l.414.414h.344l.414-.414A2 2 0 0 1 15 9V2c0-.555-.445-1-1-1zM9 4c-.555 0-1 .445-1 1v9c0 .555.445 1 1 1h.008c0-.516.191-1.027.578-1.414l.414-.414v-.344l-.414-.414a2.014 2.014 0 0 1 0-2.828A2 2 0 0 1 11 9V5c0-.555-.445-1-1-1zM5 7c-.555 0-1 .445-1 1v6c0 .555.445 1 1 1h1c.555 0 1-.445 1-1V8c0-.555-.445-1-1-1zm-4 3c-.555 0-1 .445-1 1v3c0 .555.445 1 1 1h1c.555 0 1-.445 1-1v-3c0-.555-.445-1-1-1zm0 0"
    />
    <path
      fill=""
      d="M11 10a1 1 0 0 0-.707 1.707L11.586 13l-1.293 1.293a1 1 0 1 0 1.414 1.414L13 14.414l1.293 1.293a1 1 0 1 0 1.414-1.414L14.414 13l1.293-1.293a1 1 0 1 0-1.414-1.414L13 11.586l-1.293-1.293A1 1 0 0 0 11 10m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(NetworkCellularOffline)
export default ForwardRef