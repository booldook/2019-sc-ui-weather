<?
$conn = mysqli_connect("localhost", "booldook", "hero1122", "booldook");
mysqli_query($conn, "set names utf8");
$sql = " INSERT INTO score SET kor=95, eng=85, math=95, stdname='홍길순' ";
mysqli_query($conn, $sql);

echo '<h1>Hello World!</h1>';
?>
<meta charset="utf-8">
<script>
alert("성적이 저장되었습니다.");
</script>