import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const WindowRestore = (
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
    <path fill="" d="M4.988 4.992v6.012H11V4.992zm2 2H9v2.012H6.988zm0 0" />
  </svg>
)
const ForwardRef = forwardRef(WindowRestore)
export default ForwardRef