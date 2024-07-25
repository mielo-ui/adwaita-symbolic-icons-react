import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const Printer = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M5 1c-.55 0-1 .45-1 1v1h8V2c0-.55-.45-1-1-1zM2 4C.89 4 0 4.89 0 6v4c0 1.11.89 2 2 2v1c0 1.09.91 2 2 2h8c1.09 0 2-.91 2-2v-1c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm2 6h8v3H4zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(Printer)
export default ForwardRef