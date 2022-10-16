import * as React from 'react';

const InternalLinkRender: React.FC = ({ children }) => (
  <span>{children} 🔗</span>
);

export default {
  title: 'Internal link to another document',
  name: 'internalLink',
  type: 'reference',
  description: 'Locate a document you want to link to',
  to: [{ type: 'page' }],
  blockEditor: {
    icon: () => '🔗',
    render: InternalLinkRender,
  },
};
