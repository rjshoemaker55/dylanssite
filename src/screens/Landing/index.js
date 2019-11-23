import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import SideNav from '../../components/SideNav';

import NewsCarousel from '../../components/NewsCarousel';
import RecentPosts from '../../components/RecentPosts';
import ShopDisplay from '../../components/ShopDisplay';

const Landing = () => {
  return (
    <Container fluid='true'>
      <Row>
        <Col style={{ padding: 0 }}>
          <NewsCarousel />
        </Col>
        <Col lg={3} style={{ padding: 0 }}>
          <RecentPosts />
        </Col>
      </Row>
      <Row>
        <ShopDisplay />
      </Row>
    </Container>
  );
};

export default Landing;
