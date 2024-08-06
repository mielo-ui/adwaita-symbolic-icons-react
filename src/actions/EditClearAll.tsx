import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const EditClearAll = (
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
    <g fill="currentColor">
      <path d="M2 0C.89 0 0 .89 0 2v6c0 1.11.89 2 2 2V2h8c0-1.11-.89-2-2-2zM8 6c-1.11 0-2 .89-2 2v6c0 1.11.89 2 2 2h6c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm.004 2h1.031c.254.012.508.129.688.313l1.28 1.28 1.31-1.28c.265-.231.445-.305.687-.313h1v1c0 .285-.035.55-.25.75l-1.281 1.281 1.25 1.25c.187.188.281.453.281.719v1h-1c-.266 0-.531-.094-.719-.281L11 12.438l-1.281 1.28A1.02 1.02 0 0 1 9 14h-.996v-1c0-.266.094-.531.281-.719l1.278-1.25L8.285 9.75A.9.9 0 0 1 8.004 9zm0 0" />
      <path d="M5 3c-1.11 0-2 .89-2 2v6c0 1.11.89 2 2 2V5h8c0-1.11-.89-2-2-2zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(EditClearAll)
export default ForwardRef