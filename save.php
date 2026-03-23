<?php
header('Content-Type: text/html; charset=UTF-8');

$conn = new mysqli("localhost", "root", "", "evaluation_db");

if ($conn->connect_error) {
    die("فشل الاتصال بقاعدة البيانات: " . $conn->connect_error);
}

$nom = $_POST['nom'];
$prenom = $_POST['prenom'];

$article = $_POST['article'];
$extra = $_POST['extraArticle'];
$book = $_POST['book'];

$intl = $_POST['intl'];
$nat = $_POST['nat'];

$same = $_POST['same'];
$other = $_POST['other'];

$diploma = $_POST['diploma']; // 🆕 تطابق الشهادة

$total = $_POST['total'];

$sql = "INSERT INTO candidats
(nom, prenom, article_type, extra_article, book,
 intl_conf, nat_conf, exp_same_sector, exp_other_sector,
 diploma_match, total_score)
VALUES
('$nom', '$prenom', '$article', '$extra', '$book',
 '$intl', '$nat', '$same', '$other',
 '$diploma', '$total')";

if ($conn->query($sql) === TRUE) {
    echo "تم حفظ البيانات بنجاح!";
} else {
    echo "خطأ: " . $conn->error;
}

$conn->close();
?>