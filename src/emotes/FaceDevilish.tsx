import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FaceDevilish = (
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
      d="M8 1a7 7 0 0 0-4.375 1.531C2.491 2.087 1.532 1.582.937 1.062l-.093.594C.81 1.927.947 3.17 2 4.406A6.95 6.95 0 0 0 1 8a7 7 0 0 0 14 0c0-1.29-.36-2.493-.969-3.531 1.011-1.218 1.19-2.39 1.157-2.657l-.094-.593c-.579.506-1.499.97-2.594 1.406-.006-.005-.026.005-.031 0A6.93 6.93 0 0 0 8 1M6 5c.558 0 1.031.473 1.031 1.031V7c0 .558-.473 1-1.031 1s-1-.442-1-1v-.969C5 5.473 5.442 5 6 5m4 0c.558 0 1 .473 1 1.031V7c0 .558-.442 1-1 1s-1-.442-1-1v-.969C9 5.473 9.442 5 10 5m2 4.978c-.03.344-.925 3.003-4 3.01-2.789.006-4-2.559-4-2.985z"
    />
  </svg>
)
const ForwardRef = forwardRef(FaceDevilish)
export default ForwardRef