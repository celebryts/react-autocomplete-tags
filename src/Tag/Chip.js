import React from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';

const ChipComponent = (props) => (
  <Chip
    backgroundColor={props.backgroundColor}
    onRequestDelete={props.onRequestDelete}
    onClick={props.onClick}
    style={{
      margin: 4,
      overflow: 'hidden',
    }}
    labelColor={props.labelColor}
    labelStyle={{
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    }}
    deleteIconStyle={{
      minWidth: 20,
      width: 20,
    }}
  >
    {/* {props.icon && <Avatar color={props.iconColor} icon={props.icon} />} */}
    {/* {props.avatarSrc && <Avatar src={props.avatarSrc} size={32} style={{minWidth: 32}} />} */}
    {/* {props.avatarText && <Avatar size={32} style={{minWidth: 32}} color={props.avatarTextColor} backgroundColor={props.avatarTextBackgroundColor}>{props.avatarText}</Avatar>} */}
    {props.label}
  </Chip>
)

export default ChipComponent;