import React from 'react';
import { Layout } from 'antd';
import Header from '../components/PageLayout/Header';
import SidebarWrapper from '../components/PageLayout/Sidebar';
import SEO from '../components/Seo';

export default function Resume() {
  return (
    <Layout className="outerPadding">
      <Layout className="container">
        <SEO
          title="Resume"
          description="Nguyễn Hồng Tín's resume"
          path="/resume"
        />
        <Header />
        <SidebarWrapper>
          <div className="marginTopTitle">
            <h1 className="titleSeparate">Resume</h1>
          </div>
          <div style={{ paddingBottom: 24 }}>
            <a
              href="/resume.pdf"
              download="resume.pdf"
              style={{
                display: 'inline-block',
                marginBottom: 16,
                padding: '10px 16px',
                borderRadius: 8,
                background: '#ff8100',
                color: '#ffffff',
                fontWeight: 600,
              }}
            >
              Download Resume (PDF)
            </a>
            <iframe
              title="Resume PDF"
              src="/resume.pdf"
              width="100%"
              height="900"
              style={{ border: '1px solid #f0f0f0', borderRadius: 8, background: '#fff' }}
            />
          </div>
        </SidebarWrapper>
      </Layout>
    </Layout>
  );
}
