import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FaceTired = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1rem"
    height="1rem"
    ref={ref}
    {...props}
  >
    <path
      fill="#474747"
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M6.625 6.75A.29.29 0 0 1 7 7a.41.41 0 0 1-.281.438l-2.782.812c-.181.053-.349-.031-.374-.219a.41.41 0 0 1 .28-.437zm2.625 0c.042-.006.08-.013.125 0l2.781.844a.41.41 0 0 1 .281.437c-.025.188-.193.272-.374.219L9.28 7.437A.41.41 0 0 1 9 7a.29.29 0 0 1 .25-.25M4.406 10h7.188c.221 0 .406.223.406.5s-.185.5-.406.5H4.406C4.185 11 4 10.777 4 10.5s.185-.5.406-.5"
    />
  </svg>
)
const ForwardRef = forwardRef(FaceTired)
export default ForwardRef