import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MediaFlash = (
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
      d="M5 1C3.355 1 2 2.355 2 4v8c0 1.645 1.355 3 3 3h7c1.645 0 3-1.355 3-3V4a1 1 0 0 0-.293-.707l-2-2A1 1 0 0 0 12 1zm0 2h6.586L13 4.414V12c0 .57-.43 1-1 1H5c-.57 0-1-.43-1-1V4c0-.57.43-1 1-1m.5 1c-.277 0-.5.223-.5.5v4c0 .277.223.5.5.5h2c.277 0 .5-.223.5-.5V5h1v3.5c0 .277.223.5.5.5h2c.277 0 .5-.223.5-.5v-3c0-.277-.223-.5-.5-.5s-.5.223-.5.5V8h-1V4.5c0-.277-.223-.5-.5-.5h-2c-.277 0-.5.223-.5.5V8H6V4.5c0-.277-.223-.5-.5-.5m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(MediaFlash)
export default ForwardRef