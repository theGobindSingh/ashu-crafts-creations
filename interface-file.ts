import { Document } from "@contentful/rich-text-types";

export interface SelfData {
  sdata: {
    aboutUs: string;
    data1: string;
    dataNumber1: number;
    data2: string;
    dataNumber2: number;
    data3: string;
    dataNumber3: number;
    data4: string;
    dataNumber4: number;
  };
}

export interface TestData {
  tdata: {
    author: string;
    feedback: string;
    picture: {
      url: string;
    };
  }[];
}

export interface PortfolioGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
  heading: string;
  subText: string;
}

export interface Process {
  pdata: {
    step: number;
    heading: string;
    subHeading: string;
  }[];
}

export interface Types {
  tdata: {
    price: number;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    title: string;
    whatsappText: string;
  }[];
}

export interface AboutArtistProps {
  selfdata: {
    aboutUs: string;
    data1: string;
    dataNumber1: number;
    data2: string;
    dataNumber2: number;
    data3: string;
    dataNumber3: number;
    data4: string;
    dataNumber4: number;
  };
  testidata: {
    author: string;
    feedback: string;
    picture: {
      url: string;
    };
  }[];
}

export interface HomePageProps {
  data: {
    heading: string;
    subHeading: string;
    tagline: {
      json: Document;
    };
    carouselCollection: {
      items: {
        url: string;
      }[];
    };
  }[];
}

export interface PortfolioProps {
  data: {
    title: string;
    bannerImage: {
      url: string;
    };
    heading: string;
    subHeading: string;
    galleryCollection: {
      items: {
        url: string;
      }[];
    };
  }[];
}

export interface ServiceTypes {
  typeData: {
    price: number;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
    title: string;
    whatsappText: string;
  }[];
  processData: {
    step: number;
    heading: string;
    subHeading: string;
  }[];
}

export interface FormDataType {
  subject: string;
  text: string;
}
