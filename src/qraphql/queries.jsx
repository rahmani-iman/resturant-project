import { gql } from "@apollo/client";

const GET_RESTURANTS = gql `
    query {
        resturants {
        cover {
            url
        }
        category
        name
        rate
        slug
        startTime
        endTime
        deliveryfee
        }
    }`
;

export { GET_RESTURANTS };