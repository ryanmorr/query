# query

Solution for leveraging the performance benefits of `getElementById`, `getElementsByTagName`, and `getElementsByClassName` for simple CSS selectors when querying the DOM. Please refer to [http://ryanmorr.com/abstract-away-the-performance-faults-of-queryselectorall](http://ryanmorr.com/abstract-away-the-performance-faults-of-queryselectorall) for more detailed information regarding this project.

## Usage

Usage mimics that of your standard selector engine, accepting any CSS selector to query the DOM. The context of the query can be limited by providing a DOM element as an optional second argument:

```javascript
query('#foo');
query('.foo');
query('.foo.bar');
query('div', element);
```

An array rather than a node list is returned, making available all the methods of the `Array` prototype.

## License

This project is dedicated to the public domain as described by the [Unlicense](http://unlicense.org/).
