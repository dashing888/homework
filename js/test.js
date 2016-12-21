<!DOCTYPE html>

<html>

<body>

<meta charset='utf-8'>

<form>

輸入名字: <input type="text" id="name">

</form>

<button type="button" onclick="myFunc()">按下去</button>

<script>

function myFunc(){

alert("台東大學喜信社歡迎, " + document.getElementById("name").value);

}

</script>

</body>

</html>