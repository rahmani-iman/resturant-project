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
            foods(first: 30) {
                cover {
                    url
                }
                name
                price
                rate
                details
                category
                id
            }
            drinks {
                cover {
                    url
                }
                name
                price
                category
                id
            }
        }
    }`
;


export { GET_RESTURANTS, GET_RESTURANT };