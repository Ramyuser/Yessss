function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/sSjb412_T/model.json', modelReady);
}

function modelReady() {
    classifier.classify(gotResults);

}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - ' + (results[0].confidence * 100).toFixed(2) + " %";
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_r + ")";
        img = document.getElementById('meow')
        img1 = document.getElementById('bark')
        img2 = document.getElementById('moow')
        img3 = document.getElementById('roar')

        if (results[0].label == "meow") {
            img.src = 'Felix.jpg'.style.widht.height = 400;
            img1.src = 'Dog.jpg'
            img2.src = 'moow';
            img3.src = 'roar';
        } else if (results[0].label == "bark") {
            img.src = 'Felix.jpg';
            img1.src = 'Dog.jpg'.style.widht.height = 400;
            img2.src = 'moow';
            img3.src = 'roar';
        } else if (results[0].label == "roar") {
            img.src = 'Felix.jpg';
            img1.src = 'Dog.jpg';
            img2.src = 'moow'
            img3.src = 'roar'.style.widht.height = 400;
        } else {
            img.src = 'Felix.jpg';
            img1.src = 'Dog.jpg';
            img2.src = 'moow'.style.widht.height = 400;
            img3.src = 'roar';
        }
    }
}