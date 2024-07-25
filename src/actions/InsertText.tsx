import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const InsertText = (
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
    <g fill="">
      <path d="M5 12v1h.008a1 1 0 0 0 .285.707l2 2a1 1 0 0 0 1.414 0l2-2c.184-.187.29-.441.29-.707H11v-1zM4-.008v2h6c.43 0 1 .613 1 1v1H6c-.918 0-1.734.38-2.25.965-.516.582-.742 1.324-.738 2.043.008.723.246 1.45.758 2.027.515.578 1.32.965 2.23.965h7v-7c0-1.637-1.32-3-3-3zm2 6h5v2H6c-.398 0-.578-.117-.73-.289a1.14 1.14 0 0 1-.258-.723c0-.277.093-.539.238-.703.148-.168.328-.285.75-.285m0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(InsertText)
export default ForwardRef