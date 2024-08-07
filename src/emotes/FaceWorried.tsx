import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FaceWorried = (
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
      d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1M6 5c.558 0 1.031.473 1.031 1.031V7c0 .558-.473 1-1.031 1s-1-.442-1-1v-.969C5 5.473 5.442 5 6 5m4 0c.558 0 1 .473 1 1.031V7c0 .558-.442 1-1 1s-1-.442-1-1v-.969C9 5.473 9.442 5 10 5m3 5.943c-.766-.428-1.612-.92-2.476-.94-.652.02-1.239.654-1.524.697-.542.314-1.56.196-2 0-.917-.437-.921-.68-1.543-.7-.853.019-1.832.404-2.457.943v-.5c.422-1.086 2.38-2.045 4-.871.35.22.427.267 1.015.337.16.055.592-.034.985-.337 1.582-1.153 3.292-.119 4 .87z"
      overflow="visible"
    />
  </svg>
)
const ForwardRef = forwardRef(FaceWorried)
export default ForwardRef