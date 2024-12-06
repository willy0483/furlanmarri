import { CollectionsImageStyled } from "./CollectionsImage.Styled";

export const CollectionsImage = ({ src, alt, p1, p2 }) => {
  return (
    <CollectionsImageStyled>
      <figure>
        <div className="ImageContainer ">
          <img src={"src/assets/" + src} alt={alt} />
        </div>
        <figcaption>
          <article>
            <p>{p1}</p>
            <p>{p2}</p>
          </article>
        </figcaption>
      </figure>
    </CollectionsImageStyled>
  );
};
