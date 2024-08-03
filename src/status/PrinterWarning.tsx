import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const PrinterWarning = (
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
      d="M5 1c-.55 0-1 .45-1 1v1h8V2c0-.55-.45-1-1-1zM2 4C.89 4 0 4.89 0 6v4c0 1.11.89 2 2 2v1c0 1.09.91 2 2 2h3v-2H4v-3h3V7h9V6c0-1.11-.89-2-2-2zm0 0"
    />
    <path
      fill="#ff7800"
      d="M9.5 8C8.668 8 8 8.668 8 9.5v5c0 .832.668 1.5 1.5 1.5h5c.832 0 1.5-.668 1.5-1.5v-5c0-.832-.668-1.5-1.5-1.5zM11 9h2v2.5s0 .5-.5.5h-1c-.5 0-.5-.5-.5-.5zm.5 4h1c.277 0 .5.223.5.5v1c0 .277-.223.5-.5.5h-1a.5.5 0 0 1-.5-.5v-1c0-.277.223-.5.5-.5m0 0"
      className="prefix__warning"
    />
  </svg>
)
const ForwardRef = forwardRef(PrinterWarning)
export default ForwardRef