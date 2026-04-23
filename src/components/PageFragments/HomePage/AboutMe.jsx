import React from 'react';
import { domHtml, stripTags } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne:
    'I am Nguyễn Hồng Tín, a backend developer with 2+ years of experience building reliable and scalable APIs for web applications using Python and FastAPI.',
  paraTwo: 'I have hands-on experience delivering product features, optimizing performance, and integrating third-party services. I also build AI-integrated systems with LLMs and LangChain for practical business use cases.',
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <div style={{ lineHeight: '180%' }}>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={[
            'Nguyen',
            'Hồng Tín',
            'Backend developer',
            'FastAPI',
            'Python',
            'LangChain',
            'LLM',
            'RAG',
          ]}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>{pageText.paraOne}</p>
        {/* eslint-disable-next-line react/no-danger */}
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
    </div>
  );
};
export default AboutMe;
