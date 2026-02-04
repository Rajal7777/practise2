

export default function ExampleList({children,onHandleSelect, isSelected}) {
    return <>
        <button className={isSelected ? "active" : null}
         onClick={()=>onHandleSelect(children)}>{children}</button>
      
    </>
}