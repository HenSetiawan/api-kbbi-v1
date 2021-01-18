| method | url                                | header                        | body    |
|--------|------------------------------------|-------------------------------|---------|
| POST   | https://api-kbbi.herokuapp.com/cari | Content-Type:application/json | keyword |


``` javascript
const data = { keyword:'makan'};
fetch('https://api-kbbi.herokuapp.com/cari', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});
```