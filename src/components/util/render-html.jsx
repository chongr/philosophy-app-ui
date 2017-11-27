import React from 'react';
import HtmlToReact from 'html-to-react';

const HtmlToReactParser = HtmlToReact.Parser;
const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);
const htmlToReactParser = new HtmlToReactParser();

const isValidNode = () => {
  return true;
};

const validTags = ['b', 'i', 'em', 'u', 'span'];


function isTextNode(node) {
  return (node.type && node.type === 'text');
}

function isValidTagName(node) {
  return (
    node.type &&
    node.type === 'tag' &&
    node.name &&
    validTags.indexOf(node.name) > -1
  );
}


export default function renderHtml(htmlString) {
  const html = `<span>${htmlString}</span>`;

  const processingInstructions = [{
    replaceChildren: false,

    shouldProcessNode: (node) => {
      return (isTextNode(node) || isValidTagName(node));
    },

    processNode: processNodeDefinitions.processDefaultNode
  }];

  return htmlToReactParser.parseWithInstructions(
    html,
    isValidNode,
    processingInstructions
  );
}
