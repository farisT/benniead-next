import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import carouselImage1 from '../../static/images/carousel1.jpg';
import carouselImage2 from '../../static/images/carousel2.jpg';
import carouselImage3 from '../../static/images/carousel3.jpg';
import carouselImage4 from '../../static/images/carousel4.jpg';

const OurStoryCaption = (<a className="captionText" href="/about">The story</a>);

const items = [
  {
    src: carouselImage1,
    // altText: 'Slide 1',
    caption: OurStoryCaption
  },
  {
    src: carouselImage2,
    // altText: 'Slide 2',
    caption: OurStoryCaption
  },
  {
    src: carouselImage3,
    // altText: 'Slide 3',
    caption: OurStoryCaption
  },
  {
    src: carouselImage4,
    // altText: 'Slide 3',
    caption: OurStoryCaption
  },

];
class CarouselComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        > 
          <img className="carouselImages" src={item.src} alt={item.altText} />
          
          <CarouselCaption captionHeader={item.caption} >
          {/* <NavLink href="/about">Our story</NavLink> */}
          </CarouselCaption>
        </CarouselItem>
      );
    });

    return (
      <Carousel
        className="fade-in"
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default CarouselComponent;