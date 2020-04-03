/* @flow */
import classNames from "classnames"

import * as React from "React"

import DropdownArrow from "../icons/DropdownArrow"

type Props = {|
  text?: string,
  icon?: React.Node,
  dropdown?: boolean,
  className?: string,
  disabled?: boolean,
  name?: string
|}

export default function ToolbarButton({
  text,
  icon,
  name,
  className,
  disabled,
  dropdown,
  ...rest
}: Props) {
  return (
    <div
      className={classNames("toolbar-button-wrapper", className, {disabled})}
    >
      <button className="toolbar-button" disabled={disabled} {...rest}>
        {!!icon && <span className="icon">{icon}</span>}
        {!!text && <span className="text">{text}</span>}
        {!!dropdown && <DropdownArrow />}
      </button>
      {!!name && <label>{name}</label>}
    </div>
  )
}
