interface HomeGalleryProps {
    /**
     * className: CSS classname optional.
     * children: The children content(s).
     * tag: The tag name. For e.g. Latest, New, Trending, etc.
     * image: image name. For e.g. '1.png' */
    className?: string;
    children?: JSX.Element;
    tag: string;
    title: string;
    image: string;
}