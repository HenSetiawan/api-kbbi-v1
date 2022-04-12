| method | url                                      | header                        |
| ------ | ---------------------------------------- | ----------------------------- |
| GET    | https://api-kbbi.herokuapp.com/{keyword} | Content-Type:application/json |

```javascript
const keyword = "makan";
fetch(`https://api-kbbi.herokuapp.com/${keyword}`, {
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Success:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```
