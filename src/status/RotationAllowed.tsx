import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const RotationAllowed = (
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
      d="M6.977-.02c-.801.008-1.594.313-2.204.91L2 3.599V3c0-.55-.45-1-1-1s-1 .45-1 1v3c0 .55.45 1 1 1h3c.55 0 1-.45 1-1s-.45-1-1-1h-.574L6.18 2.293c.367-.36 1.246-.367 1.601-.02l5.52 5.438a.99.99 0 0 0 1.41-.012.995.995 0 0 0-.008-1.41L9.183.871a3.13 3.13 0 0 0-2.206-.89M2.148 8.012a.99.99 0 0 0-.859.289.995.995 0 0 0 .008 1.41L6.78 15.09c.617.61 1.438.875 2.242.883.805.007 1.637-.246 2.266-.871L14 12.414V13c0 .55.45 1 1 1s1-.45 1-1v-3c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1h.586l-2.711 2.71c-.156.157-.477.286-.832.282-.355 0-.691-.14-.863-.305L2.7 8.29a.98.98 0 0 0-.552-.277m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(RotationAllowed)
export default ForwardRef