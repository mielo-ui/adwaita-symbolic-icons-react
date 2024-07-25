import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const EditFindReplace = (
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
      <path d="M12.55 3c-.488.004-.987.195-1.429.637l-7.625 7.625A1.7 1.7 0 0 0 3 12.46V15h2.54a1.7 1.7 0 0 0 1.198-.496l7.625-7.625c1.516-1.512.067-3.715-1.601-3.871C12.692 3 12.622 3 12.55 3m-1.503 3.055.898.898-5.98 5.98-.899-.898zM6.5 0C2.922 0 0 2.922 0 6.5c0 1.8.742 3.438 1.938 4.617l1.406-1.41A4.47 4.47 0 0 1 2 6.5C2 4.004 4.004 2 6.5 2c1.262 0 2.395.516 3.207 1.344l1.41-1.41A6.49 6.49 0 0 0 6.5 0m5.688 10.758L10.77 12.18l2.503 2.507c.957.938 2.364-.5 1.407-1.437zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(EditFindReplace)
export default ForwardRef