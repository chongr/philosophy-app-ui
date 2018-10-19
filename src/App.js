import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import './static/styles/App.css';
import logo from './logo.svg';
import { getPathToPhilosophy } from './components/util/requests';

import { Layout } from './components/layout';

import {
  ContentCard,
  ContentCover,
  ContentHeader,
  ContentCardLabel,
  ContentRecordList,
  ContentRecord,
  ContentInput
} from './components/content';

class App extends Component {
  WIKIPEDIA_URL = "https://en.wikipedia.org"
  WIKI_URL_RE = new RegExp(`${this.WIKIPEDIA_URL}/wiki/(.*)/?`)

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      linksToPhilosophy: [],
      errorMsg: null
    };

    this.verifyWikiURL = this.verifyWikiURL.bind(this);
    this.handleLinkSubmit = this.handleLinkSubmit.bind(this);
    this.fetchPathError = this.fetchPathError.bind(this);
    this.fetchPathSuccess = this.fetchPathSuccess.bind(this);
  }

  verifyWikiURL(checkLink) {
    return !!this.WIKI_URL_RE.exec(checkLink)
  }

  fetchPathSuccess(response) {
    this.setState({
      loading: false,
      linksToPhilosophy: response.path,
      errorMsg: null
    });
  }

  fetchPathError(err) {
    let errorMsg = "Server error, retry later"
    if (err.status == 404) {
      errorMsg = "Wikipedia page with the url does not exist";
    }
    this.setState({
      loading: false,
      errorMsg: errorMsg
    });
  }

  handleLinkSubmit(newLink) {
    this.setState({
      loading: true
    });
    const pageTopic = this.WIKI_URL_RE.exec(newLink)[1];
    getPathToPhilosophy(pageTopic, this.fetchPathSuccess, this.fetchPathError);
  }

  renderPhilosophyPath() {
    const { link, errorMsg, loading, linksToPhilosophy } = this.state;
    let pathToPhilosophyInfo = null;
    if (errorMsg) {
      pathToPhilosophyInfo = (
        <ContentCard>
          <ContentCardLabel>{errorMsg}</ContentCardLabel>
        </ContentCard>
      )
    } else if (linksToPhilosophy) {
      const recordItems = linksToPhilosophy.map((wikiLink, idx) => {
        const pageTopic = this.WIKI_URL_RE.exec(wikiLink)[1];
        return (<ContentRecord
          title={`Step ${idx + 1}`}
          caption={pageTopic}
          href={wikiLink}
          onClick={() => { }}
          key={pageTopic}
        />)
      });
      pathToPhilosophyInfo = (
        <ContentCard>
          <ContentCardLabel>Wikipedia Articles in Path</ContentCardLabel>
          <ContentRecordList>
            {recordItems}
          </ContentRecordList>
        </ContentCard>
      )
    } else {
      pathToPhilosophyInfo = (
        <ContentCard>
          <ContentCardLabel>Selected Article Does Not Reach Philosophy</ContentCardLabel>
        </ContentCard>
      )
    }
    return pathToPhilosophyInfo;
  }

  render() {
    const { link, errorMsg, loading, linksToPhilosophy } = this.state;
    let pathToPhilosophyInfo = null;
    if (loading) {
      pathToPhilosophyInfo = (
        <ContentCard>
          <div className="image-container">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </ContentCard>
      );
    } else {
      pathToPhilosophyInfo = this.renderPhilosophyPath();
    }
    return (
      <DocumentTitle title="Wikipedia Path to Philosophy">
        <Layout>
          <ContentCover
              imageUrl={'https://res.cloudinary.com/daon8xyhn/image/upload/v1539918944/philosophy_jmtqkn.jpg'}
          />
          <ContentCard>
            <ContentHeader title="Find the Wikipedia Path to Philosophy"></ContentHeader>
            <div className="content-header__body">
              Many paths lead to Philosophy on 
              <a href="https://en.wikipedia.org/"> wikipedia </a>
              input a wikipedia url to find out how it gets
              <a href="https://en.wikipedia.org/wiki/Wikipedia:Getting_to_Philosophy"> there</a>
            </div>
            <ContentInput handleSubmit={this.handleLinkSubmit} verifyInputOnSubmit={this.verifyWikiURL} invalidSubmitMsg="Invalid URL, Expects: https://en.wikipedia.org/wiki/Absolute_monarchy" initialValue="" inputName="Wikipedia URL"></ContentInput>
          </ContentCard>
          {pathToPhilosophyInfo}
        </Layout>
      </DocumentTitle>
    );
  }
}

export default App;
