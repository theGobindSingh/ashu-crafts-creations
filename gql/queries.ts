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

export const aboutArtistItems = gql`
  query {
    aboutCollection {
      items {
        aboutUs
        data1
        dataNumber1
        data2
        dataNumber2
        data3
        dataNumber3
        data4
        dataNumber4
      }
    }
  }
`;

export const aboutTestimonialItems = gql`
  query {
    testimonialsCollection {
      items {
        author
        feedback
        picture {
          url
        }
      }
    }
  }
`;

export const aboutServiceTypeItems = gql`
  query {
    servicesCollection(order: price_ASC) {
      items {
        title
        step1
        step2
        step3
        step4
        price
        whatsappText
      }
    }
  }
`;

export const aboutServiceProcessItems = gql`
  query {
    processCollection(order: step_ASC) {
      items {
        step
        heading
        subHeading
      }
    }
  }
`;
