# react-autocomplete-tags

A React component that build a Autocomplete with tags.

### Installation

```sh
npm install @celebryts/react-autocomplete-tags --save
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
| [`tags`](#tagsProp) | Array | [] | Visible tags in input. |
| [`limitTags`](#limitTagsProp) | Number | null | Maximum allowed tags. |
| [`allowCreateTag`](#allowCreateTagProp) | Boolean | true | If user can create tags without restritions. |
| [`saveOnBlur`](#saveOnBlurProp) | Boolean | false | If component must add current input value on blur. |
| [`delay`](#delayProp) | Number | null | Delay in onChange event after user changes. |
| [`onKeyUp`](#onKeyUpProps) | Function | ()=>{} | Callback for key up event. |
| [`onKeyDown`](#onKeyUpProps) | Function | ()=>{} | Callback for key down event. |
| [`onFocus`](#onFocusProps) | Function | ()=>{} | Callback for focus event. |
| [`onChange`](#onChangeProps) | Function | ()=>{} | Callback for changes in input. |


<a name="classNameProp"></a>
#### `className` : String

Css class to stylize the component:

```js
<Autocomplete className="my-css-class" />
```
This will be applied into ```<div>``` element that wrap the other Autocomplete elements.

You can style elements like this:
```css

.my-css-class{
  background-color: #f0f0f0;
}

.my-css-class > div{
  padding: 20px 0;
}

.my-css-class input{
  margin: 0 10px;
}

```


<a name="suggestionsProp"></a>
#### `suggestions` : Array

Array of suggestions to show. It needs to be an array of objects:

```js
<Autocomplete suggestions={
  [
    {
      label: 'Suggestion 1',
      value: 'IdOfSuggestion1'
    },
    {
      label: 'Suggestion 2',
      value: 'IdOfSuggestion2'
    }
  ]
} />
```

`label` is the text to be showed on suggestions area of the Autocomplete.

`value` is the value of the showed label.

It's similar to the label/value funcionality of [HTML `<option>` ](https://reactcommunity.org/react-autocomplete/).


<a name="tagsProp"></a>
#### `tags` : Array

Array of tags that are initially rendered on input. The usage is similar to [`suggestions`](#suggestionsProp).

```js
<Autocomplete tags={
  [
    {
      label: 'Tag 1',
      value: 'IdOfTag1'
    },
    {
      label: 'Tag 2',
      value: 'IdOfTag2'
    }
  ]
} />
```

<a name="limitTagsProp"></a>
#### `limitTags` : Number

You can set whether the input will have a limit amout.
```js
<Autocomplete
  limitTags={2}
  tags={
    [
      {
        label: 'Tag 1',
        value: 'IdOfTag1'
      }
    ]
  }
/>
```

In the above example, user will be able to add only 2 tags. (Or erase the first and write another 3).


<a name="allowCreateTagProp"></a>
#### `allowCreateTag` : Boolean

Its possible block the creation of tags, thus the user will be able to put only tags that were been suggesteds in input.

```js
<Autocomplete
  allowCreateTag={false}
  suggestions={
    [
      {
        label: 'Choose one option',
        value: 'IdOfSuggestion1'
      },
      {
        label: 'You cannot create tags',
        value: 'IdOfSuggestion1'
      },
      {
        label: 'Last chance',
        value: 'IdOfSuggestion2'
      }
    ]
  }
/>
```

<a name="saveOnBlurProp"></a>
#### `saveOnBlur` : Boolean

When the event blur occurs, the typed text (even if not sent) will be transformed into a tag.

```js
<Autocomplete saveOnBlur={true} />
```

<a name="delayProp"></a>
#### `delay` : Number

Sometimes we don't need the event onChange immediately after user action, so, we can add a delay (milliseconds) to this happen.

```js
<Autocomplete
  delay={300}
  onChange={this.handleChange}
/>
```

## Demos
Coming soon.

## Issues
You can report your issues [here](https://github.com/celebryts/react-autocomplete-tags/issues)

## Pull Requests
[Pull Requests](https://github.com/celebryts/react-autocomplete-tags/pulls) are always welcome! :)

Clone the repository: https://github.com/celebryts/react-autocomplete-tags, and run the command:

```sh
npm run dev
```

## Authors
Built by [Celebryts](https://github.com/celebryts)
