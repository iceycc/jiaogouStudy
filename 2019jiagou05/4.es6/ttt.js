let str = '';
with(obj){
str+=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    `
arr.forEach(item=>{
str+=`
        <li>${item.name}:${item.age}</li>
    `
})
str+=`
</body>
</html>`
} return str