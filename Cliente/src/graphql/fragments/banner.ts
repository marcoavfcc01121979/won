import { gql } from '@apollo/client';

export const BannerFragment = gql`
  fragment BannerFragment on Banner {
    banners {
      image {
        url
      }
      title
      subtitle
      button {
        label
        link
      }
      ribbon {
        text
        color
        size
      }
    }
  }
`
