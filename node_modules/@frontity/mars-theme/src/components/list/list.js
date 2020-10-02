import React from "react";
import { connect, styled, decode } from "frontity";
// import Item from "./list-item";
import CardItem from "./card-item";
import Pagination from "./pagination";
import CardColumns from "react-bootstrap/CardColumns"
import Container from "react-bootstrap/Container"

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  console.log(data)

  return (
    <Container>
    <CardColumns style = {{ marginTop: '100px' }}>
      {/* If the list is a taxonomy, we render a title. */}
      {data.isTaxonomy && (
        <Header>
          {data.taxonomy}:{" "}
          <b>{decode(state.source[data.taxonomy][data.id].name)}</b>
        </Header>
      )}

      {/* If the list is for a specific author, we render a title. */}
      {data.isAuthor && (
        <Header>
          Author: <b>{decode(state.source.author[data.id].name)}</b>
        </Header>
      )}

      {/* Iterate over the items of the list. */}
      {data.items.map(({ type, id }) => {
        const item = state.source[type][id];
        // const test = Object.values(item.tags)
        const cardTag = JSON.stringify(item.tags)
        const cardCategory = JSON.stringify(item.categories)
        const frontityTag = JSON.stringify(state.frontity.tag)
        const frontitySubject = state.frontity.subject

        // console.log(cardTag)
        // console.log(state.frontity.tag)
        // console.log(frontitySubject)
        // console.log(cardCategory)
        // console.log(item.categories)
        console.log(item)
        // Render one Item component for each one.
        if ((cardTag == frontityTag || cardCategory == frontitySubject) &&! (cardTag == "[1520]" && cardCategory == frontitySubject))
        {
        return <CardItem key={item.id} item={item} />;
        }
        // else if ((cardTag == "[]" && cardCategory != frontitySubject) && (frontityTag != "[1520]"))
        // {
        //   return <p>There are currently no lessons for this category. Coming soon!</p>
        // }
        })}
      <Pagination />
    </CardColumns>
    </Container>
  );
};

export default connect(List);

// const Container = styled.div`
//   width: 800px;
//   margin: 0;
//   padding: 24px;
//   list-style: none;
//   overflow: auto;
//   background-color: black;
// `;

const Header = styled.h3`
  font-weight: 300;
  text-transform: capitalize;
  color: rgba(12, 17, 43, 0.9);
`;
