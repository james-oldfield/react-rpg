react-rpg :camera: v2.0
===========================
## what
**react-rpg** is a lightweight, no-nonsense **responsive photo grid** component for reactjs.

# [DEMO](http://james-oldfield.github.io/react-rpg)

![react-rpg](./reactPhotoGrid.png)

The component renders an array of images in square aspect-ratio for the modern, fluid web. The **react-rpg** component takes 100% width of the parent container using dynamic inline styles.

**react-rpg** replicates a similar grid photo structure to that which Instagram implements with their webapp.

### v2.0

**N.B**: The `link` prop is depreciated - instead, pass a callback function to the `clickHandler` prop. This function receives the URL and React's synthetic event object for your disposal.

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
        <ReactRpg imagesArray={images} columns={3} padding={10} />
      </div>
    );
  }
}
```

### Props
- `imagesArray` (array, default [], required **YES**) - An Array of objects containing *url* property of the absolute url of the photos for the `img`'s `src` attribute. Can also pass an optional `clickHandler` callback function prop.
- `columns` (number, default 3, required **NO**) - Sets the number of columns for the photo grid.
- `padding` (number, default 0, required **NO**) - Sets the padding value in *px* around the images.

## why

There's a few react components that attempt a photo grid component but none seem to be responsive. **react-rpg** attempts to make this easy in a component.

Scaffolded with [Formidable Labs' component boilerplate](https://github.com/FormidableLabs/formidable-react-component-boilerplate), thanks!

