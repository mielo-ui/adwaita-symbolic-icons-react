import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FormatTextBold = (
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
      d="M4 3v2h5c.43 0 1 .613 1 1v1H5c-.918 0-1.734.379-2.25.965s-.742 1.324-.738 2.047a3.1 3.1 0 0 0 .758 2.027C3.285 12.617 4.09 13 5 13h9V6a3 3 0 0 0-3-3zm3 6h3v2H7c-.398 0-.578-.117-.73-.29-.153-.167-.254-.44-.258-.722 0-.277.093-.539.238-.703C6.398 9.121 6.578 9 7 9m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(FormatTextBold)
export default ForwardRef