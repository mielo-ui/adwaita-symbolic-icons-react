import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ViewDual = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path
        fillOpacity={0.349}
        d="M3.5 5c-.277 0-.5.223-.5.5v1c0 .277.223.5.5.5h2c.277 0 .5-.223.5-.5v-1c0-.277-.223-.5-.5-.5zm7 0c-.277 0-.5.223-.5.5v1c0 .277.223.5.5.5h2c.277 0 .5-.223.5-.5v-1c0-.277-.223-.5-.5-.5zm-7 3c-.277 0-.5.223-.5.5v1c0 .277.223.5.5.5h2c.277 0 .5-.223.5-.5v-1c0-.277-.223-.5-.5-.5zm7 0c-.277 0-.5.223-.5.5v1c0 .277.223.5.5.5h2c.277 0 .5-.223.5-.5v-1c0-.277-.223-.5-.5-.5zm0 0"
      />
      <path d="M3 1C1.355 1 0 2.355 0 4v8c0 1.645 1.355 3 3 3h10c1.645 0 3-1.355 3-3V4c0-1.645-1.355-3-3-3zm0 2h4v10H3c-.57 0-1-.43-1-1V4c0-.57.43-1 1-1m6 0h4c.57 0 1 .43 1 1v8c0 .57-.43 1-1 1H9zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(ViewDual)
export default ForwardRef