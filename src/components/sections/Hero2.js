import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
// import ButtonGroup from '../elements/ButtonGroup';
// import Button from '../elements/Button';
import Image from '../elements/Image';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const sectionHeader = {
    title: "Misión",
    paragraph:
      "Crear un estándar de referencia para precios competitivos y ajustados al mercado para todo tipo de productos y vendedores.",
  };

  const sectionHeader2 = {
    title: "Visión",
    paragraph:
      "Desarrollar la herramienta predilecta de apoyo para definir precios y dar información de mercado de todo tipo de productos, siendo utilizada por todos los vendedores antes de cada publicación.",
  };

  const sectionHeader3 = {
    title: "Propósito",
    paragraph:
      "Ayudar a los vendedores a llegar a un precio de venta ajustado para sus productos y entregar información sobre el mercado de manera automatizada.",
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className="hero-content">
          <h1 className="mt-0 mb-16 reveal-from-bottom">
            <Image
              src={require('./../../assets/images/mission.png')}
              alt="Open"
              width={140}
              height={32} />
          </h1>
          <SectionHeader data={sectionHeader} className="center-content reveal-from-bottom" data-reveal-delay="100" />
          <h1 className="mt-0 mb-16 reveal-from-bottom">
            <Image
              src={require('./../../assets/images/vision.png')}
              alt="Open"
              width={110}
              height={32} />
          </h1>
          <SectionHeader data={sectionHeader2} className="center-content reveal-from-bottom" data-reveal-delay="100" />
          <h1 className="mt-0 mb-16 reveal-from-bottom">
            <Image
              src={require('./../../assets/images/purpose.png')}
              alt="Open"
              width={100}
              height={32} />
          </h1>
          <SectionHeader data={sectionHeader3} className="center-content reveal-from-bottom" data-reveal-delay="100" />
        </div>  
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;