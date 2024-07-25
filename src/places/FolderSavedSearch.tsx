import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const FolderSavedSearch = (
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
      d="M6.605.059c-3.578 0-6.5 2.921-6.5 6.5s2.922 6.496 6.5 6.496c1.43 0 2.754-.465 3.829-1.254l2.972 2.972c.957.942 2.364-.496 1.406-1.437l-2.957-2.957a6.48 6.48 0 0 0 1.25-3.82c0-3.579-2.925-6.5-6.5-6.5m0 2c2.497 0 4.5 2.004 4.5 4.5s-2.003 4.496-4.5 4.496c-2.5 0-4.5-2-4.5-4.496s2-4.5 4.5-4.5m0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(FolderSavedSearch)
export default ForwardRef