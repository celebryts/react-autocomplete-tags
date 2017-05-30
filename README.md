# react-autocomplete-tags

A React component that build a Autocomplete with tags.

### Installation

```sh
npm install react-autocomplete-tags --save
```

## Basic Usage

```js
  <Autocomplete
    suggestions={this.state.suggestions}
    onChange={this.handleChange}
  />
```


## Props

| Prop | Type | Default | Description |
| :--- | :--- | :---: | :--- |
| [`className`](#classNameProp) | String | '' | Classname to style the root div. |
| [`suggestions`](#suggestionsProp) | Array | [] | Suggestions to show. |
| [`tags`](#onSuggestionsFetchRequestedProp) | Array | [] | Visible tags in input. |
| [`allowCreateTag`](#allowCreateTagProp) | Boolean | If user can create tags without restritions. |