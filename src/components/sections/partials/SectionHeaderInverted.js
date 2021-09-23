import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    paragraph: PropTypes.string
  }).isRequired,
  children: PropTypes.node,
  tag: PropTypes.oneOf(['h1', 'h2', 'h3'])
}

const defaultProps = {
  children: null,
  tag: 'h2'
}

const SectionHeaderInverted = ({
  className,
  data,
  children,
  tag,
  ...props
}) => {

  const classes = classNames(
    'section-header',
    className
  );

  const Component = tag;

  return (
    <>
      {(data.title || data.paragraph) &&
        <div
          {...props}
          className={classes}
        >
          <div className="container-xs">
            {children}
            {data.paragraph &&
              <p className="m-0">{data.paragraph}</p>
            }
            {data.title &&
              <Component className={
                classNames(
                  'mt-0',
                  data.paragraph ? 'mb-16' : 'mb-0',
                  data.paragraph2 ? 'mb-16' : 'mb-0'
                )}>{data.title}</Component>
            }
          </div>
        </div>
      }
    </>
  );
}

SectionHeaderInverted.propTypes = propTypes;
SectionHeaderInverted.defaultProps = defaultProps;

export default SectionHeaderInverted;