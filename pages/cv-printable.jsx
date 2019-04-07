import React, { Component } from 'react';
import CustomMarkdown from '~/components/CustomMarkdown/CustomMarkdown';

const cvUrl = "/static/cv.md";

class CVPrintable extends Component {
  render() {
    return <CustomMarkdown mdUrl={cvUrl} />
  }
}

export default CVPrintable;
