import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FormatTextUnderline = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M4 2v2h6c.43 0 1 .613 1 1v1H6c-.918 0-1.734.379-2.25.965s-.742 1.324-.738 2.047a3.1 3.1 0 0 0 .758 2.027C4.285 11.617 5.09 12 6 12h7V5a3 3 0 0 0-3-3zm2 6h5v2H6c-.398 0-.578-.117-.73-.29-.153-.167-.254-.44-.258-.722 0-.277.093-.539.238-.703C5.398 8.121 5.578 8 6 8m-4 5v2h12v-2zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(FormatTextUnderline)
export default ForwardRef