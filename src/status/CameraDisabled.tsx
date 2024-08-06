import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const CameraDisabled = (
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
      d="M6.5 0a1 1 0 0 0-.707.293L4.086 2H3.063L1.53.469.47 1.53l14 14 1.062-1.062-.386-.387c.527-.539.855-1.277.855-2.082V5c0-1.645-1.355-3-3-3h-1.086L10.207.293A1 1 0 0 0 9.5 0zm.414 2h2.172l1.707 1.707A1 1 0 0 0 11.5 4H13c.57 0 1 .43 1 1v7c0 .27-.098.504-.258.68l-2.437-2.438C11.742 9.602 12 8.828 12 8c0-2.2-1.8-4-4-4-.828 0-1.602.258-2.242.695l-.809-.808a1 1 0 0 0 .258-.18zM.422 3.484A2.96 2.96 0 0 0 0 5v7c0 1.645 1.355 3 3 3h8.938l-2-2H3c-.57 0-1-.43-1-1V5.063zM8 6c1.117 0 2 .883 2 2 0 .277-.059.54-.156.781L7.219 6.156A2.1 2.1 0 0 1 8 6M4.094 7.156A4 4 0 0 0 4 8c0 2.2 1.8 4 4 4 .29 0 .57-.035.844-.094zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(CameraDisabled)
export default ForwardRef