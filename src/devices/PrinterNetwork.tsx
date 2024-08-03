import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const PrinterNetwork = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M3.992 8.988c-1.09 0-2-.91-2-2v-5c0-1.09.91-2 2-2h6.082c.578 0 1.13.246 1.512.68l1.82 2.047c.38.43.586.98.586 1.55v2.723c0 1.09-.91 2-2 2zm0-2.98h8V3.984l-1.93-1.996h-6.07zm0 0" />
      <path d="M1.992 10.977c-1.11 0-2-.891-2-2V6.988c0-1.11.89-2 2-2h1v2c0 .555.446 1 1 1h8c.555 0 1-.445 1-1v-2h1c1.11 0 2 .89 2 2v1.989c0 1.109-.89 2-2 2zM7.988 11.988c-.703 0-1.351.371-1.715.973H2.988c-.55 0-1 .45-1 1s.45 1 1 1h3.246A2.01 2.01 0 0 0 7.988 16a2 2 0 0 0 1.75-1.04H13c.55 0 1-.448 1-1 0-.55-.45-1-1-1H9.707a2.01 2.01 0 0 0-1.719-.972m0 1c.555 0 1.004.45 1.004 1.004 0 .559-.449 1.008-1.004 1.008s-1.008-.45-1.008-1.008c0-.555.454-1.004 1.008-1.004m0 0" />
      <path d="M6.984 9.988h2.008v3H6.984zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(PrinterNetwork)
export default ForwardRef