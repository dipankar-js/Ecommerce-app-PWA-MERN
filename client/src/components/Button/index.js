import React from 'react';
import { oneOfType, oneOf, func, node, string, bool } from 'prop-types';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import './style.scss';

function Button({ buttonType, buttonSize, buttonColor, buttonText, iconEnd, onClick, children, linkTo, icon: Icon, className, type, ...rest}) {
  const NodeName = linkTo ? Link : 'button';
  const attributes = linkTo ? {
    ...rest,
    pathname: linkTo
  } : null;
  function onClickButton(e) {
    if (typeof onClick === 'function') {
      onClick(e);
    }
  }
  return (
    <NodeName
      className={
        classnames(
          'custom-button',
          (`${buttonType}-button`),
          buttonColor, buttonSize,
          className )
      }
      onClick={onClickButton}
      type={type}
      to={attributes}
    >
      <div className={classnames('space-btn-icon', Icon && 'icon-button')}>{!iconEnd && children}
        <span className={classnames('btn-text')}>{buttonText}</span>
        {Icon && <Icon />}
        {(iconEnd && children) && <div>{iconEnd && children}</div>}
      </div>
    </NodeName>
  );
}

Button.propTypes = {
  buttonType: oneOfType([
    oneOf(['filled', 'text', 'outlined', 'tertiary', 'outline-transparent', 'no-outline', 'oultine-curved', 'text-outline', 'fav', 'dotted'])
  ]),
  buttonColor: string,
  type: string,
  buttonSize: oneOfType([
    oneOf(['large', 'medium', 'small', 'extra-small', 'search-btn'])
  ]),
  buttonText: string,
  className: string,
  children: node,
  onClick: func,
  iconEnd: bool,
  linkTo: string,
  icon: node,
};

export default Button;
