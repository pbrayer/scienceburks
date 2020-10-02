import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


const CardItem = ({ state, item }) => {
    // const author = state.source.author[item.author];
    // const date = new Date(item.date);
    const cardCategory = JSON.stringify(item.categories)
    const cardTag = JSON.stringify(item.tags)

      // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];

    const Log = () => {
      console.log(item.categories)
    }
    const Testing  = () => {
      state.frontity.tag = "";
      state.frontity.subject = cardCategory;
      console.log(cardCategory)
      console.log(cardTag)
    }
    const Back = () => {
      state.frontity.subject = "";
      state.frontity.tag = [1520];
    }
    
    if(item.categories == 705015958){
    return (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={item.jetpack_featured_media_url} />
  <Card.Body>
  {/* {item.link} */}
    <Card.Title><Link link= "/"> 
            <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
          </Link></Card.Title>
    <Card.Text>
    {item.excerpt && (
        <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
      )}
    </Card.Text>
    {/* <Link link = "/"></Link> */}
    <Button variant="primary" onClick={Testing}>Continue</Button>      
    <Button variant="primary" onClick={Back}>Back</Button>
  </Card.Body>
</Card>
);
    }
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.jetpack_featured_media_url} />
        <Card.Body>
        {/* {item.link} */}
          <Card.Title><Link link= "/"> 
                  <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                </Link></Card.Title>
          <Card.Text>
          {item.excerpt && (
              <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
            )}
          </Card.Text>
        </Card.Body>
      </Card>
      );


};

export default connect(CardItem);

const Title = styled.h1`
  font-size: 2rem;
  color: rgba(12, 17, 43);
  margin: 0;
  padding-top: 24px;
  padding-bottom: 8px;
  box-sizing: border-box;
`;

const Excerpt = styled.div`
  line-height: 1.6em;
  color: rgba(12, 17, 43, 0.8);
`;