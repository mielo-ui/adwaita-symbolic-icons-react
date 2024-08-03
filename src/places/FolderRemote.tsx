import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FolderRemote = (
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
      <path d="M7.996 12a2 2 0 0 0-1.715.973H2.996a1 1 0 1 0 0 2h3.246a2.01 2.01 0 0 0 1.754 1.039 2.01 2.01 0 0 0 1.75-1.04h3.262c.55 0 1-.449 1-1s-.45-1-1-1H9.715A2.01 2.01 0 0 0 7.996 12m0 1C8.551 13 9 13.45 9 14.008c0 .555-.45 1.004-1.004 1.004a1.005 1.005 0 1 1 0-2.012m0 0" />
      <path d="M6.992 10H9v3H6.992zm0 0" />
      <path d="M4 0C2.355 0 1 1.355 1 3v5.016c0 1.644 1.355 3 3 3h8c1.645 0 3-1.356 3-3V5c0-1.645-1.355-3-3-3H9.414L7.707.293A1 1 0 0 0 7 0zm0 2h2.586l1 1H3c0-.562.438-1 1-1M3 4h9c.563 0 1 .438 1 1v3.016c0 .562-.437 1-1 1H4c-.562 0-1-.438-1-1zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(FolderRemote)
export default ForwardRef