import React from 'react';
import ReactRpgPhoto from 'src/components/react-rpg-photo';
import TestUtils from 'react-addons-test-utils';

const renderer = TestUtils.createRenderer();
renderer.render(
  <ReactRpgPhoto url={'http://im.vsco.co/1/52d992e43ad70287923/55fd92ce5668547a8473d1d9/vsco_091915.jpg?w=690&dpr=2'} padding={50} columns={3} />
);
const output = renderer.getRenderOutput();

describe('components/react-rpg-photo', () => {
  it('is of type div', () => {
    expect(output.type).to.equal('div');
  });

  it('has class imageGridItem', () => {
    expect(output.props.className).to.equal('imageGridItem');
  });
});
