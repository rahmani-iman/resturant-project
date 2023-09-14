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

const GET_RESTURANT = gql `
    query getResturant($slug: String!){
        resturant(where: {slug: $slug}) {
            category
            cover {
                url
            }
            deliveryfee
            endTime
            name
            rate
            startTime
            location {
                latitude
                longitude
            }
            foods {
                cover {
                    url
                }
                name
                price
                rate
                details
                category
            }
            drinks {
                cover {
                    url
                }
                name
                price
            }
        }
    }`
;


export { GET_RESTURANTS, GET_RESTURANT };