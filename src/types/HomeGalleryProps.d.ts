/**
 * HomeGallery Props
 */
interface HomeGalleryProps {
	/**
	 * className: CSS classname optional.
	 * children: The children content(s).
	 *
	 * */
	className?: string
	children?: JSX.Element
	// tag: The tag name. For e.g. Latest, New, Trending, etc.
	tag: string
	title: string
	image: string
}
