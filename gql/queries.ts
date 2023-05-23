import { gql } from "graphql-request";

export const categoryItems = gql`
  query {
    portfolioCategoriesCollection {
      items {
        title
        bannerImage {
          url
        }
        galleryCollection {
          items {
            url
          }
        }
        heading
        subHeading
      }
    }
  }
`;

export const homePageItems = gql`
  query {
    homePageCollection {
      items {
        tagline {
          json
        }
        heading
        subHeading
        carouselCollection {
          items {
            url
          }
        }
      }
    }
  }
`;
