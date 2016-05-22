react-rpg :camera:
===========================
## what
**react-rpg** is a lightweight, stateless **responsive photo grid** component for reactjs. Quickly create instagram-esque responsive photo grids with no CSS dependencies.

# [DEMO](http://james-oldfield.github.io/react-rpg)

![react-rpg](./reactPhotoGrid.png)

The component renders an array of images in square aspect-ratio for the modern, fluid web. The **react-rpg** component takes 100% width of the parent container using dynamic inline styles.

Column count can be specified at 3 different breakpoints.

## how

To use in a react project, first, install via npm:

`npm i react-rpg --save`

Then require wherever you desire and pass it an array of image objects as props. See `./demo` for a more thorough example.

```js
...
import { ReactRpg } from 'react-rpg';

const images = [
  {
    url: "absolute url to the src of the image",
    clickHandler: (url, obj) => { console.log(url) }
  },
  {
    url: "http://images.com/myimage.jpg",
    clickHandler: (url, obj) => { console.log(obj) }
  }
];


class App extends React.Component {
  render() {
    return (
      <div className="myApp">
        <ReactRpg imagesArray={images} columns={[ 1, 2, 5 ]} padding={10} />
      </div>
    );
  }
}
```

### Props
- `imagesArray` (array, default [], required **YES**) - An Array of objects containing an `url` property of the absolute url of the photos for the `img`'s `src` attribute. Can also pass an optional `clickHandler` callback function property.
- `columns` (array, default [1, 2, 3], required **NO**) - Sets the number of columns for the photo grid. First array element is the column count on screens under `480px` wide. Second element is the desired column count at device widths above `480px` and below `992px`. Third array element is desired column count on devices with screen width `992px`+.
- `padding` (number, default 0, required **NO**) - Sets the padding value in `px` around the images.

Scaffolded with [Formidable Labs' component boilerplate](https://github.com/FormidableLabs/formidable-react-component-boilerplate), thanks!

### changelog

#### v1.0

- `link` prop is depreciated.
- Instead, pass a callback function to the `clickHandler` property in the `imagesArray` prop. This function receives the URL and React's synthetic event object for your disposal.

#### v2.0

- Pass an array of size 3 to the `columns` prop instead of just a single integer to specify column count at 3 breakpoints so that column count is a function of device width for varying screen sizes.

