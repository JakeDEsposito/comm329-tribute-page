import React from 'react';
import logo from './logo.svg';
import './App.scss';

import { MainProposition } from './MainProposition';
import { ReasonList, ReasonListItem } from './ReasonList';
import { Reason } from './Reasons';
import { LearnMore } from './LearnMore';
import Footer from './Footer';

function App() {
  return (
    <>

      <MainProposition title={"Your Main Proposition"} body={"And A Clarifying Bit Here"} />

      <ReasonList>
        <ReasonListItem index={1} text={"A Reason"} />
        <ReasonListItem index={2} text={"B Reason"} />
        <ReasonListItem index={3} text={"C Reason"} />
      </ReasonList>

      <Reason imgsrc="https://picsum.photos/1920/1080" title="A Reason" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas diam in arcu cursus euismod quis viverra nibh. Ut sem viverra aliquet eget sit amet tellus. Ornare quam viverra orci sagittis eu volutpat odio facilisis mauris. Facilisis volutpat est velit egestas dui. Non enim praesent elementum facilisis leo vel fringilla est." />
      <Reason imgsrc="https://picsum.photos/1920/1080" title="B Reason" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas diam in arcu cursus euismod quis viverra nibh. Ut sem viverra aliquet eget sit amet tellus. Ornare quam viverra orci sagittis eu volutpat odio facilisis mauris. Facilisis volutpat est velit egestas dui. Non enim praesent elementum facilisis leo vel fringilla est." />
      <Reason imgsrc="https://picsum.photos/1920/1080" title="C Reason" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas diam in arcu cursus euismod quis viverra nibh. Ut sem viverra aliquet eget sit amet tellus. Ornare quam viverra orci sagittis eu volutpat odio facilisis mauris. Facilisis volutpat est velit egestas dui. Non enim praesent elementum facilisis leo vel fringilla est." />

      <LearnMore
        longText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi tristique senectus et netus et malesuada fames. Aliquam nulla facilisi cras fermentum odio. Semper viverra nam libero justo. Lorem donec massa sapien faucibus et molestie ac feugiat sed."
        list={["a diam maecenas sed enim ut sem viverra aliquet eget", "a diam maecenas sed enim ut sem viverra aliquet eget", "a diam maecenas sed enim ut sem viverra aliquet eget"]}
      />

      <Footer />

    </>
  );
}

export default App;
