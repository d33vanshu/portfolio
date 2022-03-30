import React from 'react';
import PropTypes from 'prop-types';
import {
  IconAppStore,
  IconBookmark,
  IconCodepen,
  IconExternal,
  IconFolder,
  IconFork,
  IconGitHub,
  IconInstagram,
  IconLinkedin,
  IconLoader,
  IconLogo,
  IconPlayStore,
  IconStar,
  IconTwitter,
  IconReact,
  IconRedux,
  IconJavaScript,
  IconCSS,
  IconNode,
  IconMongo,
} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'AppStore':
      return <IconAppStore />;
    case 'Bookmark':
      return <IconBookmark />;
    case 'Codepen':
      return <IconCodepen />;
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'Fork':
      return <IconFork />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Loader':
      return <IconLoader />;
    case 'Logo':
      return <IconLogo />;
    case 'PlayStore':
      return <IconPlayStore />;
    case 'Star':
      return <IconStar />;
    case 'Twitter':
      return <IconTwitter />;
    case 'React':
      return <IconReact />;
    case 'Redux':
      return <IconRedux />;
    case 'JavaScript':
      return <IconJavaScript />;
    case 'CSS':
      return <IconCSS />;
    case 'Node':
      return <IconNode />;
    case 'Mongo':
      return <IconMongo />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
