import React from 'react';
import moment from 'moment';
import Layout from '../../components/Layout';
import Article from '../../components/Article';
import s from './styles.css';

import config from '../../tools/config';

const title = '农业政策';

class DetailPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    const { policy } = this.props;

    let date = '';

    if (policy.postedAt) {
      date = moment(policy.postedAt).format(config.dateFormat);
    }

    return (
      <Layout className={s.content}>
        <Article
          title={policy.title}
          date={date}
          source={policy.source}
          content={policy.content}
        />
      </Layout>
    );
  }

}

export default DetailPage;
