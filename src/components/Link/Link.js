import PropTypes from 'prop-types';
import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

import ExternalLink from 'src/components/Link/ExternalLink';

const Link = props => {
  const { children, className, href, onPress } = props;

  if (href.includes('http') || href.includes('https')) {
    return <ExternalLink {...props}>{children}</ExternalLink>;
  }

  return (
    <GatsbyLink className={className} onClick={onPress} to={href}>
      {children}
    </GatsbyLink>
  );
};

Link.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
  onPress: PropTypes.func,
};

export default Link;
