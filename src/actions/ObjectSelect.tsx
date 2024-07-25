import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const ObjectSelect = (
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
      d="M13.754 4.66c.176-.2.262-.46.246-.726A1.006 1.006 0 0 0 12.934 3c-.266.02-.512.14-.688.34L5.95 10.535 3.707 8.293a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 .738.293c.278-.008.54-.133.723-.34zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(ObjectSelect)
export default ForwardRef