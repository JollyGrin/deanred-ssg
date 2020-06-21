import React, { Component, Fragment } from 'react';
import { filterText } from '../lib/filter';

export default class Container extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { snippet } = this.props.vid;
    const {
      description,
      thumbnails,
      title,
      publishedAt,
    } = this.props.vid.snippet;
    const url = `https://youtu.be/${snippet.resourceId.videoId}`;
    const thumb = thumbnails.high; // default, medium, high, standard, maxres

    const styles = {
      bgImg: {
        backgroundImage: `url(${thumb.url})`,
        // height: '130px',
        // width: '240px',
        // height: thumb.height,
        // width: thumb.width,
      },
    };

    return (
      <Fragment>
        {/* {console.log(snippet)} */}
        <div className='container'>
          <div className='video' style={styles.bgImg}>
            <a href={url}>
              <i className='fas fa-play'></i>
            </a>
          </div>
          <div className='text'>
            <h1>{filterText(title)}</h1>
          </div>
        </div>
      </Fragment>
    );
  }
}
