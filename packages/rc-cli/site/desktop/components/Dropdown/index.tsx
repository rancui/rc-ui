import clsx from 'classnames';
import React, { CSSProperties } from 'react';
import './index.less';

type DropdownProps = {
  overlay?: React.ReactNode[];
  arrow?: boolean;
  placement?: 'topCenter';
  offset?: [string, string];
  width?: CSSProperties['width'];
} & React.HTMLAttributes<HTMLDivElement>;

const Dropdown: React.FC<DropdownProps> = ({
  overlay,
  className,
  children,
  arrow = true,
  placement,
  width,
  offset: [offsetX, offsetY] = ['0px', '0px'],
  style,
  ...props
}) => {
  const computedStyle = React.useMemo(() => {
    return {
      ...style,
      '--rc-doc-dropdown-overlay-width': width,
      '--rc-doc-dropdown-offset-x': offsetX,
      '--rc-doc-dropdown-offset-y': offsetY,
    };
  }, []);
  return (
    <div
      className={clsx('doc-dropdown', className, {
        'doc-dropdown--overlay': overlay && arrow,
      })}
      style={computedStyle}
      {...props}
    >
      {children}
      {overlay && (
        <div className={clsx('doc-dropdown__child', placement)}>
          <div className="doc-dropdown__child_content">{overlay}</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
