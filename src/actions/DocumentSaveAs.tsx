import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const DocumentSaveAs = (
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
      d="M4.5 0c-.277 0-.5.223-.5.5v1c0 .277.223.5.5.5h1c.277 0 .5-.223.5-.5v-1c0-.277-.223-.5-.5-.5zm3 0c-.277 0-.5.223-.5.5v1c0 .277.223.5.5.5h1c.277 0 .5-.223.5-.5v-1c0-.277-.223-.5-.5-.5zm3 0c-.277 0-.5.223-.5.5v1c0 .277.223.5.5.5h1c.277 0 .5-.223.5-.5v-1c0-.277-.223-.5-.5-.5zM7 3v6.586L5.707 8.293a1 1 0 1 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 1 0-1.414-1.414L9 9.586V3zM1 14v2h14v-2zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(DocumentSaveAs)
export default ForwardRef