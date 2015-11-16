react-rpg :camera:
===========================
## what
**react-rpg** is a lightweight, no-nonsense **responsive photo grid** component for reactjs.

# [DEMO](http://james-oldfield.github.io/react-rpg)

![react-rpg](./reactPhotoGrid.png)

The component renders an array of images in square aspect-ratio for the modern, fluid web. The **react-rpg** component takes 100% width of the parent container using dynamic inline styles.

**react-rpg** replicates a similar grid photo structure to that which Instagram implements with their webapp.

## how

To use in a react project, first, install via npm:

`npm i react-rpg --save`

Then require wherever you desire and pass it an array of image objects as props. See `./demo` for a more thorough example.

    ...
    import { ReactRpg } from 'react-rpg';

    const images = [
      {
        url: "absolute url to the src of the image",
        link: "absolute url of what to link to"
      },
      {
        url: "http://images.com/myimage.jpg",
        link: "http://images.com/go-to-me-on-click.html"
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

### Props
- `imagesArray` (array, default [], required **YES**) - An Array of objects containing *url* property of the absolute url of the photos. Can also pass an optional `link` property that will pass into an `<a href="link">` tag around the image.
- `columns` (number, default 3, required **NO**) - Sets the number of columns for the photo grid.
- `padding` (number, default 0, required **NO**) - Sets the padding value in *px* around the images.

## why

There's a few react components that attempt a photo grid component but none seem to be responsive. **react-rpg** attempts to make this easy in a component.

Scaffolded with [Formidable Labs' component boilerplate](https://github.com/FormidableLabs/formidable-react-component-boilerplate), thanks!

### COMING SOON:
- `shallowRender` tests
- Potentially to make column count a function of browser width for single column on small devices etc: Depending on computation cost of checking browser width all the time.
