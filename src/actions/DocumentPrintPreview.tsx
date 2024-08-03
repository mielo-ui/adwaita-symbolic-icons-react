import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const DocumentPrintPreview = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    ref={ref}
    {...props}
  >
    <g fill="currentColor">
      <path d="M11 7c-1.922 0-3.5 1.578-3.5 3.5S9.078 14 11 14c.602 0 1.168-.152 1.664-.426l1.629 1.633a1 1 0 1 0 1.414-1.414l-1.633-1.633c.27-.496.426-1.062.426-1.66C14.5 8.578 12.922 7 11 7m0 2c.84 0 1.5.66 1.5 1.5S11.84 12 11 12s-1.5-.66-1.5-1.5S10.16 9 11 9m0 0" />
      <path d="M5 1c-.55 0-1 .45-1 1v1h8V2c0-.55-.45-1-1-1zM2 4C.89 4 0 4.89 0 6v4c0 1.11.89 2 2 2v1c0 1.09.91 2 2 2h7c-1.54 0-2.914-.797-3.73-2H4v-3h2.531C6.781 7.77 8.707 6 11 6c2.46 0 4.5 2.04 4.5 4.5 0 .316-.035.629-.098.93.368-.364.598-.867.598-1.43V6c0-1.11-.89-2-2-2zm0 0" />
    </g>
  </svg>
)
const ForwardRef = forwardRef(DocumentPrintPreview)
export default ForwardRef