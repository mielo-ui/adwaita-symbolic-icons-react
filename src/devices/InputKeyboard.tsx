import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const InputKeyboard = (
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
      d="M2.5 2A2.52 2.52 0 0 0 0 4.5v7C0 12.867 1.133 14 2.5 14h11c1.367 0 2.5-1.133 2.5-2.5v-7C16 3.133 14.867 2 13.5 2zm0 2h1c.277 0 .5.223.5.5v1c0 .277-.223.5-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.496.496 0 0 1 .5-.5m3 0h1c.277 0 .5.223.5.5v1c0 .277-.223.5-.5.5h-1a.5.5 0 0 1-.5-.5v-1c0-.277.223-.5.5-.5m3 0h1c.277 0 .5.223.5.5v1c0 .277-.223.5-.5.5h-1a.5.5 0 0 1-.5-.5v-1c0-.277.223-.5.5-.5m3 0h1c.277 0 .5.223.5.5v1c0 .277-.223.5-.5.5h-1a.5.5 0 0 1-.5-.5v-1c0-.277.223-.5.5-.5m-8 3h1c.277 0 .5.223.5.5v1c0 .277-.223.5-.5.5h-1a.5.5 0 0 1-.5-.5v-1c0-.277.223-.5.5-.5m3 0h1c.277 0 .5.223.5.5v1c0 .277-.223.5-.5.5h-1a.5.5 0 0 1-.5-.5v-1c0-.277.223-.5.5-.5m3 0h1c.277 0 .5.223.5.5v1c0 .277-.223.5-.5.5h-1a.5.5 0 0 1-.5-.5v-1c0-.277.223-.5.5-.5m3 0h1c.277 0 .5.223.5.5v1c0 .277-.223.5-.5.5h-1a.5.5 0 0 1-.5-.5v-1c0-.277.223-.5.5-.5m-10 3h1c.277 0 .5.223.5.5v1c0 .277-.223.5-.5.5h-1a.5.5 0 0 1-.5-.5v-1c0-.277.223-.5.5-.5m3 0h4c.277 0 .5.223.5.5v1c0 .277-.223.5-.5.5h-4a.5.5 0 0 1-.5-.5v-1c0-.277.223-.5.5-.5m6 0h1c.277 0 .5.223.5.5v1c0 .277-.223.5-.5.5h-1a.5.5 0 0 1-.5-.5v-1c0-.277.223-.5.5-.5m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(InputKeyboard)
export default ForwardRef