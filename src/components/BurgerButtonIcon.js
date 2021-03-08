import * as React from "react"

export const BurgerButtonIcon = (props) => {
  return (
    <svg
      width={40}
      height={40}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M40 7v4.444H0V7h40zM0 33.667h40v-4.445H0v4.445zm0-11.111h40V18.11H0v4.445z"
        fill="#070707"
      />
    </svg>
  )
}
