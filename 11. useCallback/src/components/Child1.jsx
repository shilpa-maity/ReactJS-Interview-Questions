import React from 'react'

const Child1 = () => {
    console.log("Child1 renders");
  return (
    <div>
      <h2>useCallBack + useMemo Hooks Example :</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, amet earum excepturi, laudantium consectetur inventore ipsam veniam tempora, ex dolore nobis dicta! Fuga officia aliquid veniam ipsam. Vitae, sed recusandae!
      </p>
    </div>
  )
}

export default React.memo(Child1)