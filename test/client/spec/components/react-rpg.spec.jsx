import React from 'react';
import ReactRpg from 'src/components/react-rpg';
import ReactRpgPhoto from 'src/components/react-rpg-photo';
import TestUtils from 'react-addons-test-utils';

const renderer = TestUtils.createRenderer();
renderer.render(
  <ReactRpg imagesArray={[{ url: 'http://im.vsco.co/1/52d992e43ad70287923/55fd92ce5668547a8473d1d9/vsco_091915.jpg?w=690&dpr=2' }]} text="i am imagehover" padding={50} columns={3} />
);
const output = renderer.getRenderOutput();

describe('components/react-rpg', () => {
  it('is of type div', () => {
    expect(output.type).to.equal('div');
  });

  it('has class imageGrid', () => {
    expect(output.props.className).to.equal('imageGrid');
  });
});
