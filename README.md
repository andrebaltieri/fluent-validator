IMPORTANT: PLEASE DO NOT USE THIS LIB YET. IT'S STILL UNDER DEVELOPMENT

# Fluent Validator JS
Fluent Validator JS is a port from https://github.com/andrebaltieri/FluentValidator which is an implementation of design by contracts in C#.

## Design By Contracts
Creating contracts to validate your models or anything else is a good way to avoid cyclomatic complexity (Reducing the number of conditionals).
https://en.wikipedia.org/wiki/Design_by_contract

## Fail Fast Validations
Why expect Mongoose (And depends on it) to validate your model (Or Commands)? Fail Fast validations take place on validating your models as soon as possible, giving you chance to fail before it hits the database.

## Instalation and usage
### Instalation
```
npm install fluent-validator --save
```

### Basic usage
```
(()=>{
  'use strict';
  const customer = { name: '' };
  const contract = require('fluent-validator');
  
  contract.isRequired(customer.name, 'Customer name is required');
  
  console.log(contract.errors);
})();
```

### Async/Await Support
```
(()=>{
  'use strict';
  const customer = { name: '' };
  const contract = require('fluent-validator');
  
  await contract.isRequired(customer.name, 'Customer name is required');
  
  console.log(contract.errors);
})();
```

### Clear error list
```
(()=>{
  'use strict';
  const customer = { name: '' };
  const contract = require('fluent-validator');
  
  await contract.isRequired(customer.name, 'Customer name is required');
  
  await contract.clear();
  console.log(contract.errors);
})();
```

## Props and Methods

| Method/Prop | Desc | Test | Status |
|---|---|---|---|
| errors | Return a list of errors | OK | Ready |
| clear() | Clear the error list | OK | Ready |
| isRequired(value, message) | Check if a value is null or empty | OK | Ready |
| hasMinLen(value, min, message) |   | NOK |   |
| hasMaxLen(value, max, message) |   | NOK |   |
| isFixedLenght |   | NOK |   |
| isEmail |   | NOK |   |
| isUrl |   | NOK |   |
| isGreaterThan |   | NOK |   |
| isGreaterOrEqualsThan |   | NOK |   |
| isLowerThan |   | NOK |   |
| isLowerOrEqualsThan |   | NOK |   |
| isBetween |   | NOK |   |
| contains |   | NOK |   |
| isNull |   | NOK |   |
| isNotNull |   | NOK |   |
| areEquals |   | NOK |   |
| areNotEquals |   | NOK |   |
| isTrue |   | NOK |   |
| isFalse |   | NOK |   |
