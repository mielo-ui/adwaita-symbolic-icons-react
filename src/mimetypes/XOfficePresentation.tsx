import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const XOfficePresentation = (
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
      d="M1.082 1.988c-.555 0-1 .446-1 1 .004.508.395.934.906.985L1 12h6l-.012 1.742-1.804 1.38a.5.5 0 1 0 .609.792l1.687-1.293 1.696 1.324a.51.51 0 0 0 .707-.086.503.503 0 0 0-.09-.703l-1.805-1.414L8 12h6l-.012-8.055c.426-.125.723-.515.723-.957a1 1 0 0 0-1-1zm6.906 2c1.102 0 2 .895 2 2h-2zm-1 1v2h2c0 1.102-.898 2-2 2a1.999 1.999 0 1 1 0-4m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(XOfficePresentation)
export default ForwardRef