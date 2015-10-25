react-rpg :camera:
===========================

## what
**react-rpg** is a lightweight, no-nonsense **responsive photo grid** component for reactjs.

![react-rpg](https://photos-6.dropbox.com/t/2/AACGe6Mt3fAYFnf9UNMT9Va64DArRSsOoRP_C81tzPhvbg/12/118529092/png/32x32/1/1445788800/0/2/reactPhotoGrid.png/CMS4wjggASACIAMgBSAHKAIoBw/vyrBxg4aUDu06H8FIX9h8fLs8gEq3siBGHyuf6JKEH0?size_mode=5)

The module renders an array of images in square aspect-ratio for the modern, fluid web. **react-rpg** module takes 100% width of the parent container.

### COMING SOON:
- Live demo
- `shallowRender` tests
- Potentially to make column count a function of browser width for single column on small devices etc: Depending on computation cost of checking browser width all the time.

## how

To use in a react project, first, install via npm:

`npm i react-rpg --save-dev`

Then require wherever you desire and pass it images as props. See `./demo` for a more thorough example.

    ...
    import ReactRpg from "react-rpg";

    const images = [
      {
        url: "url to my image",
        link: "url to the permalink if required"
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
- `imagesArray` (array, default [], required **YES**) - An Array of objects containing *url* property of the absolute url of the photos.
- `columns` (number, default 3, required **NO**) - Sets the number of columns for the photo grid.
- `padding` (number, default 0, required **NO**) - Sets the padding value in *px* around the images.

## why

There's a few react components that attempt a photo grid component but none seem to be responsive. **react-rpg** attempts to make this easy in a component.

Scaffolded with [Formidable Labs' component boilerplate](https://github.com/FormidableLabs/formidable-react-component-boilerplate), thanks!
