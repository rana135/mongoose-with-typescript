<b>Post User: </b>
```cmd
http://localhost:5000/api/v1/user
```

<b>Get User: </b>
```cmd
http://localhost:5000/api/v1/user
```

<b>Get SIngle User: </b>
```cmd
http://localhost:5000/api/v1/user/88
```

<b>Get Admin: </b>
```cmd
http://localhost:5000/api/v1/user/admins
``` 

```cmd
{
   "id":"510",
   "role":"admin",
   "password":"Adrita",
   "name":{
      "firstName":"Mrs",
      "middleName":"Adrita",
      "lastName":"Ratri"
   },
   "dateOfBirth":"Twenty Three",
   "gender":"female",
   "email":"adrita@gmail.com",
   "contactNo":"01944452867",
   "emergencyContactNo":"01865478211",
   "presentAddress":"Hasnabad",
   "permanentAddress":"Bikrampur"
}
```






















#### 1. What is TypeScript, and how is it different from JavaScript?
<b>Answer:-</b> TypeScript is a superset of JavaScript that adds optional static typing and other features to the language. It allows developers to catch type-related errors at compile-time instead of runtime, which can improve code quality and reduce debugging time. TypeScript also supports the latest features of JavaScript and can be compiled into plain JavaScript code that can be run in any browser or JavaScript runtime.
#### 2. Can you explain the difference between "interface" and "type" in TypeScript?
<b>Answer:-</b> In TypeScript, both "interface" and "type" are used to define object shapes and types, but there are some differences between them. Interfaces can only describe object shapes, while types can describe many other things, such as union types, tuples, and aliases. Interfaces are also more extensible than types, as they can be augmented or merged with additional properties, while types can only be redefined in a new declaration.
#### 3. Can you give an example of how to use generics in TypeScript?
<b>Answer:-</b> Generics in TypeScript allow functions, classes, and interfaces to be parameterized by one or more types, which can make them more flexible and reusable. Here's an example of a generic function that takes an array of any type and returns a reversed copy of the array:
```cmd
function reverseArray<T>(arr: T[]): T[] {
  return arr.reverse();
}

let numbers = [1, 2, 3];
let reversed = reverseArray(numbers); // [3, 2, 1]
```
#### 4. What is the difference between an "unknown" and "any" type in TypeScript?
<b>Answer:-</b> The "unknown" and "any" types in TypeScript are both used to represent values of unknown or unpredictable type. However, they are used in different ways. The "any" type allows any type of value to be assigned to it, while the "unknown" type requires the type to be checked before it can be used in most cases. The "any" type can be convenient but can also lead to type-related errors, while the "unknown" type can help catch errors early and make code more robust.
#### 5. Can you give an example of how to use enums in TypeScript?
<b>Answer:-</b> Enums in TypeScript are used to define a set of named constants with associated values. Here's an example of an enum that defines the days of the week:
```cmd
enum DayOfWeek {
  Sunday = 0,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday
}

let today = DayOfWeek.Wednesday;
console.log(today); // Output: 3
```
#### 6. What is the "as" keyword used for in TypeScript?
<b>Answer:-</b> The "as" keyword in TypeScript is used for type assertions, which allow the developer to specify the type of a value that is not known by the TypeScript compiler. Here's an example of using the "as" keyword to cast a value to a specific type:
```cmd
let someValue: unknown = "hello world";
let strLength = (someValue as string).length;
console.log(strLength); // Output: 11
```

