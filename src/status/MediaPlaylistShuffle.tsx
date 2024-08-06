import * as React from "react"
import type { SVGProps } from "react"
import { Ref, forwardRef } from "react"
const MediaPlaylistShuffle = (
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
      d="M12 1v2H9c-.86 0-1.594.48-2.012 1.008-.418.523-.648 1.074-.883 1.543L6 5.76l-.105-.21c-.192-.383-.387-.817-.672-1.25C4.809 3.668 4.016 3 3 3H0v2h3c.297 0 .316.04.55.398.165.247.345.625.555 1.051L4.883 8l-.778 1.55c-.261.524-.476.97-.656 1.2-.183.227-.199.25-.449.25H0v2h3c.86 0 1.594-.48 2.012-1.008.418-.523.648-1.074.883-1.543L6 10.24l.105.21c.165.328.336.703.563 1.078C7.082 12.215 7.891 13 9 13h3v2h1v-.008a1 1 0 0 0 .707-.285l2-2a1 1 0 0 0 0-1.414l-2-2A1 1 0 0 0 13 9.008V9h-1v2H9c-.324 0-.352-.059-.617-.504-.149-.242-.305-.574-.488-.945L7.117 8l.778-1.55c.261-.524.476-.97.656-1.2C8.734 5.023 8.75 5 9 5h3v2h1v-.008a1 1 0 0 0 .707-.285l2-2a1 1 0 0 0 0-1.414l-2-2A1 1 0 0 0 13 1.008V1zm0 0"
    />
  </svg>
)
const ForwardRef = forwardRef(MediaPlaylistShuffle)
export default ForwardRef