# react-autocomplete-tags

A React component that build a Autocomplete with tags.

### Installation

```sh
npm install react-autocomplete-tags --save
```

## Basic Usage

```js
import React, { Component } from 'react'
import Autocomplete from 'react-autocomplete-tags'

class Example extends Component {

  constructor(props){
    super(props)
    this.state = {
      suggestions: [
        {
          label: 'Suggestions 1',
          value: '1'
        },
        {
          label: 'Suggestions 2',
          value: '2'
        },
        {
          label: 'Another suggestions',
          value: 'X'
        }
      ]
    }
  }

  onChange = (value) => {
    console.log('Value received from onChange: ' + value)
  }

  render(){
    return (
      <Autocomplete
        suggestions={this.state.suggestions}
        onChange={this.handleChange}
      />
    )
  }
}
```


## Props

| Prop | Type | Default | Description |
| :--- | :--- | :---: | :--- |
| [`className`](#classNameProp) | String | '' | Classname to style the root div. |
| [`suggestions`](#suggestionsProp) | Array | [] | Suggestions to show. |
| [`tags`](#tagsRequestedProp) | Array | [] | Visible tags in input. |
| [`limitTags`](#limitTagsProp) | Number | null | Maximum allowed tags. |
| [`allowCreateTag`](#allowCreateTagProp) | Boolean | true | If user can create tags without restritions. |
| [`delay`](#delayProp) | Number | null | Delay in onChange event after user changes. |
| [`onKeyUp`](#onKeyUpProps) | Function | ()=>{} | Callback for key up event. |
| [`onKeyDown`](#onKeyUpProps) | Function | ()=>{} | Callback for key down event. |
| [`onFocus`](#onFocusProps) | Function | ()=>{} | Callback for focus event. |
| [`onChange`](#onChangeProps) | Function | ()=>{} | Callback for changes in input. |