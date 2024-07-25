import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const DisplayBrightness = (
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
      d="M8 0c-.555 0-1 .445-1 1v1c0 .555.445 1 1 1s1-.445 1-1V1c0-.555-.445-1-1-1M3.008 2.004A1 1 0 0 0 2.3 2.3a.993.993 0 0 0 0 1.414l.707.707a1 1 0 1 0 1.414-1.414L3.715 2.3a1 1 0 0 0-.707-.297m9.984 0c-.254 0-.512.101-.707.297l-.707.707a1 1 0 1 0 1.414 1.414l.707-.707a.993.993 0 0 0 0-1.414 1 1 0 0 0-.707-.297M8 4C5.79 4 4 5.79 4 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4M1 7c-.555 0-1 .445-1 1s.445 1 1 1h1c.555 0 1-.445 1-1s-.445-1-1-1zm13 0c-.555 0-1 .445-1 1s.445 1 1 1h1c.555 0 1-.445 1-1s-.445-1-1-1zM3.664 11.285a1 1 0 0 0-.656.293l-.707.707a.993.993 0 0 0 0 1.414.993.993 0 0 0 1.414 0l.707-.707a1 1 0 0 0-.758-1.707m8.574 0a1 1 0 0 0-.66 1.707l.707.707a.993.993 0 0 0 1.414 0 .993.993 0 0 0 0-1.414l-.707-.707a1 1 0 0 0-.754-.293M7.95 13A1 1 0 0 0 7 14v1c0 .555.445 1 1 1s1-.445 1-1v-1c0-.555-.445-1-1-1zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(DisplayBrightness)
export default ForwardRef