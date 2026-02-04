import ExampleList from "./ExampleList";
import { EXAMPLES } from "../data";
import { useState } from "react";

export default function Example() {
    const [component, setcomponent] = useState();
    console.log(component);

    function handleSelect(prop) {
        setcomponent(prop);
    }

    return (
        <div className="example-list">
                <h2>EXAMPLES</h2>
            <div className="example-title">
                <ExampleList onHandleSelect={handleSelect} isSelected={component === "components"}>components</ExampleList>
                <ExampleList onHandleSelect={handleSelect} isSelected={component === "jsx"}>jsx</ExampleList>
                <ExampleList onHandleSelect={handleSelect} isSelected={component === "props"}>props</ExampleList>
                <ExampleList onHandleSelect={handleSelect} isSelected={component === "state"}>state</ExampleList>
            </div>
            <div className="examples">
                {component ?
                    <>
                        <h2>{EXAMPLES[component].title}</h2>
                        <p>{EXAMPLES[component].description}</p>
                        <pre>{EXAMPLES[component].code}</pre>
                    </> : <p>Select the topic</p>

                }
            </div>

        </div>
    );
}
