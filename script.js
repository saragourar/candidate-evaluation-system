function calculate() {
    let total = 0;

    // معلومات المترشح
    let nom = document.getElementById("nom").value.trim();
    let prenom = document.getElementById("prenom").value.trim();

    if (nom === "" || prenom === "") {
        alert("الرجاء إدخال الاسم واللقب");
        return;
    }

    /* ===== 1️⃣ الأعمال العلمية (/8) ===== */
    let article = parseFloat(document.getElementById("article").value);
    total += article;

    if (document.getElementById("extraArticle").checked && article >= 3) {
        total += 1;
    }

    if (document.getElementById("book").checked) {
        total += 1.5;
    }

    total = Math.min(8, total);

    /* ===== 2️⃣ المداخلات العلمية (/3) ===== */
    let intl = parseInt(document.getElementById("intl").value);
    let nat = parseInt(document.getElementById("nat").value);

    total += Math.min(2, intl * 0.5);
    total += Math.min(1, nat * 0.25);

    /* ===== 3️⃣ الخبرة المهنية (/3) ===== */
    let same = parseFloat(document.getElementById("same").value);
    let other = parseFloat(document.getElementById("other").value);

    let experience = Math.max(same, other); // ✅ الأعلى فقط
    total += experience;

    /* ===== 4️⃣ تطابق الشهادة (/2) ===== */
    let diploma = parseFloat(document.getElementById("diploma").value);
    total += diploma;

    /* ===== ✅ مجموع الملف (/16) ===== */
    let dossierTotal = total;

    /* ===== 5️⃣ المقابلة (/4) ===== */
    let analysis = parseFloat(document.getElementById("analysis").value);
    let clarity = parseFloat(document.getElementById("clarity").value);
    let communication = parseFloat(document.getElementById("communication").value);
    let scientific = parseFloat(document.getElementById("scientific").value);

    let interview = analysis + clarity + communication + scientific;

    /* ===== ✅ النتيجة النهائية (/20) ===== */
    let finalTotal = dossierTotal + interview;
    finalTotal = Math.min(20, finalTotal);

    document.getElementById("result").innerText = finalTotal.toFixed(2);

    /* ===== إرسال البيانات إلى PHP ===== */
    fetch("save.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body:
            "nom=" + encodeURIComponent(nom) +
            "&prenom=" + encodeURIComponent(prenom) +
            "&article=" + article +
            "&extraArticle=" + (document.getElementById("extraArticle").checked ? 1 : 0) +
            "&book=" + (document.getElementById("book").checked ? 1 : 0) +
            "&intl=" + intl +
            "&nat=" + nat +
            "&same=" + same +
            "&other=" + other +
            "&diploma=" + diploma +
            "&total=" + finalTotal
    })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error("خطأ في الحفظ:", error));
}