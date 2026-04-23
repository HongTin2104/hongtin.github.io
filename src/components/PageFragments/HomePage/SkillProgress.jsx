import React from 'react';
import { Row, Col } from 'antd';
import style from './skillprogress.module.less';

const SkillsProgress = () => (
  <div>
    <h2 className="titleSeparate">Skills Progress</h2>
    <div className={style.statsContainer}>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={12} lg={12}>
          <img
            src="https://github-profile-summary-cards.vercel.app/api/cards/stats?username=HongTin2104&theme=default"
            alt="GitHub Stats for Nguyễn Hồng Tín"
            className={style.statCard}
            loading="lazy"
            width="400"
            height="160"
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={12}>
          <img
            src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=HongTin2104&theme=default"
            alt="Most Used Languages by Nguyễn Hồng Tín"
            className={style.statCard}
            loading="lazy"
            width="400"
            height="160"
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={12}>
          <img
            src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=HongTin2104&theme=default"
            alt="Repos Per Language - Nguyễn Hồng Tín"
            className={style.statCard}
            loading="lazy"
            width="400"
            height="160"
          />
        </Col>
        <Col xs={24} sm={12} md={12} lg={12}>
          <img
            src="https://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=HongTin2104&theme=default"
            alt="Productive Time - Nguyễn Hồng Tín on GitHub"
            className={style.statCard}
            loading="lazy"
            width="400"
            height="160"
          />
        </Col>
        <Col xs={24}>
          <img
            src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=HongTin2104&theme=default"
            alt="GitHub Profile Details for Nguyễn Hồng Tín"
            className={style.statCardFull}
            loading="lazy"
            width="820"
            height="160"
          />
        </Col>
      </Row>
    </div>
  </div>
);

export default SkillsProgress;
