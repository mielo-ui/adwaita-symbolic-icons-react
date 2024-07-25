import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const OrientationLandscapeInverse = (
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
      d="M2.156 13.043c-.613 0-1.113-.5-1.113-1.113V4.082c0-.617.5-1.113 1.113-1.113h11.739c.617 0 1.117.496 1.117 1.113v7.848c0 .613-.5 1.113-1.117 1.113zm5.844-3L12 6H4zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(OrientationLandscapeInverse)
export default ForwardRef