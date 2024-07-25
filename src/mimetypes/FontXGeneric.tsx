import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FontXGeneric = (
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
      d="M10 2c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h3a3.003 3.003 0 0 0 2.988-2.984V9.973A3.003 3.003 0 0 0 13 6.988h-2V3c0-.55-.45-1-1-1M2 5c-.55 0-1 .45-1 1s.45 1 1 1h2c.559 0 .992.43 1 .988H3.598a3.52 3.52 0 0 0-3.582 3.43v.02A3.575 3.575 0 0 0 3.574 15H6c.55 0 1-.45 1-1V8c0-1.645-1.355-3-3-3zm9 3.988h2c.555 0 .988.43.988.985v2.043A.974.974 0 0 1 13 13h-2zm-7.445 1H5V13H3.574a1.545 1.545 0 0 1-1.554-1.55 1.49 1.49 0 0 1 1.535-1.462m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(FontXGeneric)
export default ForwardRef