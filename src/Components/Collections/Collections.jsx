import { CollectionsContainer } from "./Collections.Styled";

import { ImageContainer } from "../ImageContainer/ImageContainer.Styled";
import { CollectionsImage } from "../CollectionsImage/CollectionsImage";

export const Collections = () => {
  return (
    <CollectionsContainer>
      <header>
        <h3>DISCOVER</h3>
        <h2>OUR COLLECTIONS</h2>
      </header>

      <ImageContainer>
        <CollectionsImage
          src={"c03f9533dedd7f010422c1c12d316f2e943eed12-1664x2208.webp"}
          alt={"watch"}
          p1={"Disco volante"}
          p2={"Mechanical line"}
        />
        <CollectionsImage
          src={"6a87f12450279d11b45f52a0a083f408c9b43ffe-2832x4240.webp"}
          alt={"watch"}
          p1={"THREE HANDS "}
          p2={"MECHANICAL LINE"}
        />
        <CollectionsImage
          src={"80b1cb025b8f9cdefd859665ea04758aa7d6d10b-1080x1920.webp"}
          alt={"watch"}
          p1={"MECHAQUARTZ"}
          p2={"COLLECTION"}
        />
      </ImageContainer>

      <ImageContainer>
        <CollectionsImage
          src={"74e22e9f88ec05b6db4a50fa2c2f1b90f015abfe-1664x2208.webp"}
          alt={"watch"}
          p1={"THREE HANDS "}
          p2={"MECHANICAL LINE"}
        />
        <CollectionsImage
          src={"80b1cb025b8f9cdefd859665ea04758aa7d6d10b-1080x1920.webp"}
          alt={"watch"}
          p1={"MECHAQUARTZ"}
          p2={"COLLECTION"}
        />

        <CollectionsImage
          src={"c03f9533dedd7f010422c1c12d316f2e943eed12-1664x2208.webp"}
          alt={"watch"}
          p1={"Disco volante"}
          p2={"Mechanical line"}
        />
      </ImageContainer>
    </CollectionsContainer>
  );
};
