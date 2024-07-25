import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const DialogInformation = (
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
      <path d="M7.996 0C5.16 0 2.703 2 2.125 4.777 1.598 7.313 2.813 9.813 5 11.105V12a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1l.004-.898c2.18-1.293 3.398-3.797 2.867-6.332A6.01 6.01 0 0 0 7.996 0m0 2a3.994 3.994 0 0 1 3.918 3.18 3.99 3.99 0 0 1-2.312 4.488 1 1 0 0 0-.602.914V11H7v-.418a1.01 1.01 0 0 0-.602-.914c-1.742-.762-2.703-2.625-2.316-4.484S6.098 2 7.996 2M6 14v1c0 .555.445 1 1 1h2c.555 0 1-.445 1-1v-1zm0 0" />
      <path
        fillOpacity={0.349}
        d="M6.645 6.145a.5.5 0 0 0 0 .707l1 1a.5.5 0 0 0 .707 0l1-1a.5.5 0 0 0 0-.707.507.507 0 0 0-.707 0l-.649.648-.644-.648a.507.507 0 0 0-.707 0m0 0"
      />
    </g>
  </svg>
)
const ForwardRef = forwardRef(DialogInformation)
export default ForwardRef