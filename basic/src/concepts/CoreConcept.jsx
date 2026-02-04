import Concept from "./Concept";
import Section from "./Section";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcept() {

    return (
        <Section title="Core Concept">

            <ul className="coreConcept-ul">
                {CORE_CONCEPTS.map((list) => (
                    <Concept key={list.title} list={list}/>
                ))}
            </ul>
        </Section>
    );
}