import * as React from "react"

export const CloseIcon = (props) => {
  return (
    <svg
      width={40}
      height={40}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.751 20L0 36.751 3.249 40 20 23.249 36.751 40 40 36.751 23.249 20 40 3.249 36.751 0 20 16.751 3.249 0 0 3.249 16.751 20z"
        fill="#070707"
      />
    </svg>
  )
}
