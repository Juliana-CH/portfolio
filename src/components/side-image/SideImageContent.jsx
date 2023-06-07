import PropTypes from "prop-types";
import "./side-image-content.scss";

export const SideImageContent = (props) => {
  const {
    children,
    imgAlt,
    imgSrc,
    alignImgRight,
    className = "",
    contentClassName = "",
    imgWrapperClassName = "",
  } = props;

  return (
    <section className={`side-image-content ${className}`}>
      <div
        className={`side-image-content__image-wrapper ${imgWrapperClassName} ${
          alignImgRight ? "side-image-content__image-wrapper--right" : ""
        }`}
      >
        <img className="side-image-content__image" src={imgSrc} alt={imgAlt} />
      </div>
      <div className={`side-image-content__content ${contentClassName}`}>
        {children}
      </div>
    </section>
  );
};

SideImageContent.propTypes = {
  imgAlt: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  children: PropTypes.node,
  alignImgRight: PropTypes.bool,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  imgWrapperClassName: PropTypes.string,
};