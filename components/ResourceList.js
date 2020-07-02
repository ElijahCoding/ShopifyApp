import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'
import { Card, Button, ResourceList, Stack, TextStyle, Thumbnail } from '@shopify/polaris';
import store from 'store-js'

const GET_PRODUCTS_BY_ID = gql`
    query getProducts($ids: [ID!]!) {
        nodes(ids: $ids) {
            ... on Product {
                title
                handle
                id
                images(first: 1) {
                    edges {
                        node {
                            originalSrc
                            altText
                        }
                    }
                }
                variants(first: 1) {
                    edges {
                        node {
                            price
                            id
                        }
                    }
                }
            }
        }
    }
`;

function ProductList() {
    const { loading, error, data } = useQuery(GET_PRODUCTS_BY_ID, { variables: { ids: store.get('ids') } })

    if (loading) return <div>Loading...</div>
    if (error) return <div>{error.message}</div>

    return (
        <div>
            <h1>selected products:</h1>
            {
                data.nodes.map(item => {
                    return (
                        <p key={item.id}>{item.title}</p>
                    )
                })
            }
        </div>
    );
}

export default ProductList;