from flask import Flask, render_template, request

app = Flask(__name__)

# تحويل القيم الفارغة إلى صفر
def to_float(value):
    if value is None or value.strip() == "":
        return 0.0
    return float(value)

@app.route("/", methods=["GET", "POST"])
def home():

    total = None

    if request.method == "POST":

        # ===== الأعمال العلمية =====
        a1 = to_float(request.form.get("a1"))  # 5
        a2 = to_float(request.form.get("a2"))  # 4
        a3 = to_float(request.form.get("a3"))  # 3
        a4 = to_float(request.form.get("a4"))  # 1
        book = to_float(request.form.get("book"))  # 1.5
        international = to_float(request.form.get("international"))  # 2
        national = to_float(request.form.get("national"))  # 1

        # ===== الخبرة =====
        same_field = to_float(request.form.get("same_field"))  # 3
        outside_field = to_float(request.form.get("outside_field"))  # 1.5
        other_field = to_float(request.form.get("other_field"))  # 1.5

        # ===== المقابلة =====
        analysis = to_float(request.form.get("analysis"))  # 1
        clarity = to_float(request.form.get("clarity"))  # 1
        communication = to_float(request.form.get("communication"))  # 1
        skills = to_float(request.form.get("skills"))  # 1

        # ===== الحساب النهائي =====
        total = (
            a1 + a2 + a3 + a4 +
            book + international + national +
            same_field + outside_field + other_field +
            analysis + clarity + communication + skills
        )

    return render_template("index.html", total=total)

if __name__ == "__main__":
    app.run(debug=True)
