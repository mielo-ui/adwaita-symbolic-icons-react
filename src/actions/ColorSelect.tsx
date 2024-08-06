import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ColorSelect = (
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
      fillRule="evenodd"
      d="M12.957.98a2 2 0 0 0-1.375.606L9.996 3.172 8.91 2.086a.53.53 0 0 0-.363-.148.5.5 0 0 0-.344.148L6.082 4.207a.5.5 0 0 0 0 .707l.645.649-5.586 5.582a.5.5 0 0 0-.145.355v1.793l-.855.852a.505.505 0 0 0 0 .71l1 1a.507.507 0 0 0 .707 0L2.703 15h1.793c.133 0 .258-.05.352-.145l5.586-5.585.648.644a.5.5 0 0 0 .707 0l2.121-2.121a.5.5 0 0 0 0-.707L12.824 6l1.586-1.586c1.305-1.273.367-3.488-1.453-3.434M7.934 6.77l1.293 1.293L6.289 11H3.703zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ColorSelect)
export default ForwardRef