import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    paragraph: 'Somos NeuraWorks, una pre-empresa de desarrollo de software compuesta por un equipo de estudiantes de Ingeniería Civil Informática de la Universidad Técnica Federico Santa María.'
  };
  const sectionHeader2 = {
    title: 'Nuestro Equipo'
  };


  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        
        <div className={innerClasses}>
        <div className="hero-content center-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom reveal-from-bottom" data-reveal-delay="200">
              <Image
                src={require('./../../assets/images/NeuraWorks.png')}
                alt="Open"
                width={575}
                height={32} />
            </h1>
          </div>
          <br/>
        
          <SectionHeader data={sectionHeader} className="center-content reveal-from-bottom" data-reveal-delay="400" />
          <SectionHeader data={sectionHeader2} className="center-content reveal-from-bottom" data-reveal-delay="600" />
          
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="600">
              <div className="tiles-item-inner">
                <a href="https://www.linkedin.com/in/javier-mart%C3%ADnez-sabathier/">
                  <Image
                  src={require('./../../assets/images/Javier.jpg')}
                  alt="Open"
                  width={300}
                  height={32} />
                </a>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Javier Martínez</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    Backend
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="600">
              <div className="tiles-item-inner">
                <a href="https://www.linkedin.com/in/ignacio-lizana/">
                  <Image
                  src={require('./../../assets/images/Ignacio.jpeg')}
                  alt="Open"
                  width={300}
                  height={32} />
                </a>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Ignacio Lizana</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    Comunicaciones
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="600">
              <div className="tiles-item-inner">
                <a href="https://www.linkedin.com/in/jtdocmac/">
                  <Image
                    src={require('./../../assets/images/JoseTomas.jpg')}
                    alt="Open"
                    width={300}
                    height={32} /> 
                </a>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">José Tomás Docmac</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    Frontend
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="800">
              <div className="tiles-item-inner">
                <a href="https://www.linkedin.com/in/nicol%C3%A1s-pino/">
                  <Image
                    src={require('./../../assets/images/Nicolas.jpeg')}
                    alt="Open"
                    width={300}
                    height={32} />
                </a>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">
                    Nicolás Pino</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    Data Scientist
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="800">
              <div className="tiles-item-inner tiles-item reveal-from-left">
                <a href="https://www.linkedin.com/in/gonzalo-larra%C3%ADn/">
                  <Image
                    src={require('./../../assets/images/Gonzalo.jpg')}
                    alt="Open"
                    width={300}
                    height={32} />
                  </a>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Gonzalo Larraín</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    Scrum Master
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="800">
              <div className="tiles-item-inner">
                <a href="https://www.linkedin.com/in/benjam%C3%ADn-camblor-b03220202/">
                  <Image
                    src={require('./../../assets/images/Benjamin.jpg')}
                    alt="Open"
                    width={300}
                    height={32} />
                  </a>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Benjamín Camblor</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    Product Owner
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;