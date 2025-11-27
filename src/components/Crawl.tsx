// FORKED from https://github.com/rdubrock/react-star-wars-crawl
// Didn't worked well, give me a proptypes error and others then forked 🤨
import React, { Component } from "react";
import "../styles/Crawl.css";
 
const TXT = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`;

const styles: Record<string, React.CSSProperties> = {
  container: {
    width: "80vw",
    maxWidth: "800px",
    height: "24vw",
    position: "absolute",
    background: "#0000000",
    overflow: "hidden",
    top: "7vw",
    left: '50%',
    transform: 'translate(-50%, 0%)',
  },
  fade: {
    position: "relative",
    width: "100%",
    minHeight: "30vh",
    top: "0px",
    zIndex: 1
  },
  textContainer: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    height: "800px",
    color: "#000000",
    fontFamily: "'Pathway Gothic One', sans-serif",
    fontSize: "600%",
    fontWeight: "600",
    letterSpacing: "6px",
    lineHeight: "150%",
    perspective: "400px",
    textAlign: "justify"
  },
  crawl: {
    position: "relative",
    transformOrigin: "50% 100%",
    animation: "crawl 45s linear"
  },
  title: {
    fontSize: "90%",
    textAlign: "center"
  },
  subTitle: {
    margin: "0 0 100px",
    textTransform: "uppercase"
  }
};

interface CrawlProps {
  children?: React.ReactNode;
  containerStyles?: React.CSSProperties;
  fadeStyles?: React.CSSProperties;
  textContainerStyles?: React.CSSProperties;
  crawlStyles?: React.CSSProperties;
  titleStyles?: React.CSSProperties;
  subTitleStyles?: React.CSSProperties;
  textStyles?: React.CSSProperties;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  text?: React.ReactNode;
}

class Crawl extends Component<CrawlProps> {
  mergeStyles(defaultStyle: React.CSSProperties, userStyle?: React.CSSProperties) {
    if (!userStyle) {
      return defaultStyle;
    }

    return Object.assign(defaultStyle, userStyle);
  }

  render() {
    const {
      children,
      containerStyles,
      fadeStyles,
      textContainerStyles,
      crawlStyles,
      titleStyles,
      subTitleStyles,
      textStyles,
      title,
      subTitle,

    } = this.props;

    return (
      <div
        className="crawler"
        style={this.mergeStyles(styles.container, containerStyles)}
      >
        <div style={this.mergeStyles(styles.fade, fadeStyles)}></div>
        <section
          style={this.mergeStyles(styles.textContainer, textContainerStyles)}
        >
          <div style={this.mergeStyles(styles.crawl, crawlStyles)}>
            <div style={this.mergeStyles(styles.title, titleStyles)}>
              <p className="title">{title}</p>
              <h1
                className="subTitle"
                style={this.mergeStyles(styles.subTitle, subTitleStyles)}
              >
                {subTitle}
              </h1>
            </div>
            <p className="text" style={textStyles}>
              {TXT}
            </p>
            {children}
          </div>
        </section>
      </div>
    );
  }
}

export default Crawl;
