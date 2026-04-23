import React from 'react';
import { Document, Page } from 'react-pdf';
// eslint-disable-next-line import/no-unresolved
import { Layout } from 'antd';
import SEO from '../components/Seo';

export default function Resume() {
  return (
    <Layout className="outerPadding">
      <SEO
        title="Resume"
        description="Nguyễn Hồng Tín's resume"
        path="resume"
      />
      <Document
        style={{ marginTop: 100 }}
        file="../resume.pdf"
      >
        <div style={{
          paddingTop: 24,
          paddingBottom: 16,
        }}
        >
          <Page
            renderAnnotationLayer={false}
            pageNumber={1}
          />
        </div>
        <div style={{
          paddingBottom: 24,
        }}
        >
          <Page
            renderAnnotationLayer={false}
            pageNumber={2}
          />
        </div>

      </Document>
    </Layout>
  );
}
