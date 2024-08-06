import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const NonStarred = (
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
      fillOpacity={0.349}
      d="M8 0a1 1 0 0 0-.95.684l-1.448 4.34-4.59-.016c-.438 0-.828.281-.961.695-.133.418.02.871.379 1.125l3.625 2.555-1.5 4.285a1.002 1.002 0 0 0 1.492 1.172l4.004-2.594 3.894 2.586a1 1 0 0 0 1.168-.043 1 1 0 0 0 .332-1.117l-1.504-4.29 3.645-2.577a.995.995 0 0 0 .371-1.114 1 1 0 0 0-.945-.699l-4.66-.015L8.949.69A1 1 0 0 0 8 0m-.008 4.188.684 2.097a1 1 0 0 0 .945.688l2.254.007-1.703 1.204c-.363.257-.512.726-.363 1.148l.765 2.191L8.61 10.22a1 1 0 0 0-1.097-.008L5.41 11.574l.785-2.242a1.01 1.01 0 0 0-.367-1.148L4.176 7.02l2.144.007c.43 0 .813-.277.95-.683zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(NonStarred)
export default ForwardRef