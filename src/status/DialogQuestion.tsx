import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const DialogQuestion = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M8 .031c-.398 0-.816.16-1.125.469L.5 6.875a1.59 1.59 0 0 0 0 2.25L6.875 15.5a1.59 1.59 0 0 0 2.25 0L15.5 9.125a1.59 1.59 0 0 0 0-2.25L9.125.5A1.6 1.6 0 0 0 8 .031m.152 2.977a3 3 0 0 1 1.97.87 3.01 3.01 0 0 1 .651 3.27A3.02 3.02 0 0 1 9 8.82V10H7V8c0-.55.45-1 1-1a1 1 0 1 0-1-1H5c0-1.21.734-2.309 1.852-2.77a2.95 2.95 0 0 1 1.3-.222M8 11c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(DialogQuestion)
export default ForwardRef