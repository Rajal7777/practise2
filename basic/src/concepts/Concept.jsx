
export default function Concept({ list }) {
 const {title, image, description} = list;
  return (
    <>
      <li  key={title} className="concept-li">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>

    </>


  );
}