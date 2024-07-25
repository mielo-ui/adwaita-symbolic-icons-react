import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const DialogWarning = (
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
    <path
      fill=""
      d="M7.906.094C7.38.066 6.867.375 6.47 1.063L.219 12.656C-.316 13.621.266 15 1.313 15h13.156c.98 0 1.902-1.16 1.219-2.344L9.375 1.125C8.977.48 8.434.121 7.906.094M9 4v5c.008.527-.473 1-1 1s-1.008-.473-1-1V4zm-1 7c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(DialogWarning)
export default ForwardRef