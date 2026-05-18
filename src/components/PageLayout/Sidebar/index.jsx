import React from 'react';
import { Affix, Layout, Row, Col } from 'antd';
import FA from 'react-fontawesome';
import FeatherIcon from 'feather-icons-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { globalHistory } from '@reach/router';
import style from './sidebar.module.less';
import { useWindowSize } from '../../../utils/hooks';
import Config from '../../../../config';

const { Content } = Layout;
const {
  facebook,
  github,
  globe,
  tiktok,
  linkedin,
} = Config.social;

const DomContent = () => (
  <aside>
    <div
      className={`${style.profileAvatar} float-animation`}
      title="Nguyễn Hồng Tín (Nguyen Hong Tin) - Backend Developer & AI Engineer"
      aria-label="Nguyễn Hồng Tín (Nguyen Hong Tin) - Backend Developer & AI Engineer Profile Picture"
      role="img"
    >
      <span className="sr-only" style={{ display: 'none' }}>
        Nguyễn Hồng Tín (Nguyen Hong Tin) is a professional Backend Developer and AI Engineer specializing in Python, FastAPI, LangChain, and RAG systems.
      </span>
    </div>
    <div className={`${style.name} centerAlign`}>
      <div className={`${style.boxName} centerAlign`}>
        <h2>
          <span>Nguyễn Hồng Tín</span>
        </h2>
      </div>
      <div className={`${style.badge} ${style.badgeGray}`}>Backend Developer</div>
      <div className={`${style.badge} ${style.badgeGray}`}>AI Engineer</div>
      <div className="centerAlign box">
        <a href={globe} target="_blank" label="button" rel="noopener noreferrer" className="hover-grow" title="Nguyễn Hồng Tín Personal Portfolio Website" aria-label="Nguyễn Hồng Tín Personal Portfolio Website">
          <FA
            name="globe"
          />
        </a>
        <a href={github} target="_blank" label="button" rel="noopener noreferrer" className="hover-grow" title="Nguyễn Hồng Tín GitHub Profile" aria-label="Nguyễn Hồng Tín GitHub Profile">
          <FA
            name="github"
          />
        </a>
        <a href={facebook} target="_blank" label="button" rel="noopener noreferrer" title="Nguyễn Hồng Tín Facebook Profile" aria-label="Nguyễn Hồng Tín Facebook Profile">
          <FA
            name="facebook-f"
          />
        </a>
        <a href={linkedin} target="_blank" label="button" rel="noopener noreferrer" className="hover-grow" title="Nguyễn Hồng Tín LinkedIn Profile" aria-label="Nguyễn Hồng Tín LinkedIn Profile">
          <FA
            name="linkedin"
          />
        </a>
        <a href={tiktok} target="_blank" label="button" rel="noopener noreferrer" className="hover-grow" title="Nguyễn Hồng Tín TikTok Profile" aria-label="Nguyễn Hồng Tín TikTok Profile">
          <FA
            name="tiktok"
          />
        </a>
      </div>
      <ul className={`box ${style.badge} contactBlock`}>
        <li className={`${style.contactBlockItem}`}>
          <span><FeatherIcon size="19" icon="phone" /></span>
          {' '}
          &nbsp; &nbsp; 0363117685
        </li>
        <li className={`${style.contactBlockItem}`}>
          <span><FeatherIcon size="19" icon="map-pin" /></span>
          {' '}
          &nbsp; &nbsp; Ho Chi Minh City, Viet Nam
        </li>
        <li className={`${style.contactBlockItem}`}>
          <span><FeatherIcon size="19" icon="mail" /></span>
          <a
            href="mailto:hongtin2104@gmail.com"
            target="_top"
          >
            &nbsp; &nbsp; hongtin2104@gmail.com
          </a>
        </li>
      </ul>
      <div className={style.copyright} style={{ textAlign: 'center', marginTop: '20px', fontSize: '0.85rem', color: '#888' }}>
        © {new Date().getFullYear()} Nguyễn Hồng Tín
      </div>
    </div>
  </aside>
);

const Sidebar = (props) => {
  const [width] = useWindowSize();
  const { children } = props;
  const { pathname } = globalHistory.location;
  let domContent = <DomContent />;
  if (width > 997) {
    domContent = (
      <Affix offsetTop={0}>
        <DomContent />
      </Affix>
    );
  }
  if (width < 768) {
    domContent = <></>;
    if (pathname === '/') {
      domContent = <DomContent />;
    }
  }
  return (
    <>
      <Layout>
        <Content className={`${style.content} ${style.background}`}>
          <Row>
            <Col sm={24} md={9} lg={6} className={`${style.sidebarContent} animate-fade-in-up`} style={{ position: 'sticky', top: '20px', height: 'fit-content' }}>
              {domContent}
            </Col>
            <Col sm={24} md={15} lg={18} className={style.mainContent}>
              <Layout className={`${style.background} ${style.boxContent} borderRadiusSection`}>
                {children}
              </Layout>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export const Sidebar404 = (props) => {
  const { children } = props;
  return (
    <Layout>
      <Content className={`${style.content} ${style.background} `}>
        <Row>
          <Col sm={24} md={24} lg={24}>
            <Layout className={`${style.background} ${style.boxContent} ${style.sideBar404Radius}`}>
              {children}
            </Layout>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Sidebar;
