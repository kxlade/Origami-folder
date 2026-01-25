let summ = document.getElementById('sumar');
let para = document.getElementById('about');
let toggleLang = document.getElementById('toggleLang');

let text = `This website is designed to showcase the beauty, creativity, and
        educational value of origami through various designs, categories, and
        step-by-step instructions. <br> <br>
        &nbsp; The Origami Website serves as a complete guide for beginners,
        children, and advanced learners who are interested in learning paper
        folding techniques. It highlights different origami designs such as
        animals, birds, flowers, faces, and many more, while also providing
        easy-to-follow steps and images for each design. The website is
        structured in a user-friendly manner to help visitors explore origami 
        concepts and techniques with ease. Whether you are a novice or an
        experienced folder, this website has something for everyone who wants to
        delve into the fascinating world of origami.`;
            
summ.addEventListener("click", () => {
    para.innerHTML = text;
    para.style.fontFamily = "cursive";
    para.style.fontSize = "17px";
    
})


let readmore = document.getElementById('readmore');
let fullText = `Origami, the ancient Japanese art of paper folding, has captivated
        enthusiasts around the world for centuries. This website is dedicated to
        showcasing the beauty, creativity, and educational value of origami through
        various designs, categories, and step-by-step instructions. <br> <br>   
        &nbsp; The Origami Website serves as a complete guide for beginners,
        children, and advanced learners who are interested in learning paper
        folding techniques. It highlights different origami designs such as
        animals, birds, flowers, faces, and many more, while also providing
        easy-to-follow steps and images for each design. The website is
        structured in a user-friendly manner to help visitors explore origami
        concepts and techniques with ease. Whether you are a novice or an
        experienced folder, this website has something for everyone who wants to
        delve into the fascinating world of origami. <br> <br>
        &nbsp; Origami is not just a craft; it is a form of artistic expression
        that encourages creativity, patience, and precision. Through the process
        of folding paper, individuals can develop fine motor skills, enhance
        spatial awareness, and cultivate a sense of mindfulness. The website
        emphasizes these benefits and aims to inspire visitors to explore their
        artistic potential through origami. <br> <br>
        &nbsp; In addition to providing instructions for various origami designs,
        the website also delves into the history and cultural significance of
        origami. It explores the origins of this ancient art form, its evolution
        over time, and its impact on different cultures around the world. By
        understanding the rich heritage of origami, visitors can gain a deeper
        appreciation for this timeless craft. <br> <br>
        &nbsp; Overall, the Origami Website is a comprehensive resource for anyone
        interested in the art of paper folding. It combines educational content,
        creative inspiration, and practical instructions to help individuals of all
        ages and skill levels discover the joy of origami. Whether you are looking
        to create simple designs or intricate masterpieces, this website is your
        gateway to the wonderful world of origami. So grab a piece of paper and
        start folding your way to extraordinary possibilities.`;
readmore.addEventListener("click", () => {
    para.innerHTML = fullText;
    para.style.fontFamily = "cursive";
    para.style.fontSize = "17px";
})




// Japanese texts
let introJapanese = `折り紙は日本の伝統的な紙の折り方の芸術であり、一枚の紙を切ったり
糊を使ったりせずに美しい形に変えることができます。長い年月を経て、
折り紙は文化的な実践から世界中の人々に楽しまれる創造的な芸術へと進化しました。 <br> <br>
&nbsp; 折り紙の基本的な原則は、正方形の紙を折りたたむことに基づいており、
さまざまな形やデザインを作成するためにさまざまな折り方が使用されます。 折り紙の人気のあるデザインには、鶴、花、動物、幾何学的な形などがあります。 折り紙は、子供から大人まで、あらゆる年齢層の人々に楽しまれています。
折り紙を通じて、創造性、集中力、忍耐力を育むことができます。 <br> <br>
&nbsp; 折り紙は単なる趣味ではなく、数学、エンジニアリング、デザインなどの分野でも応用されています。 折り紙の技術は、折りたたみ式の構造、医療機器、宇宙工学など、さまざまな分野で革新的なソリューションを生み出すために使用されています。 <br> <br>
&nbsp; 折り紙の魅力は、そのシンプルさと無限の可能性にあります。 一枚の紙から始まり、折りたたむことで複雑で美しい形が生まれます。 折り紙は、創造性を刺激し、手先の器用さを向上させる素晴らしい方法です。 折り紙の世界に足を踏み入れ、紙を折りたたむことで驚くべき可能性を発見しましょう`;

let aboutJapanese = `折り紙は千年以上前に日本で生まれ、儀式的な実践であると同時に芸術的な表現でもありました。
「折り紙」という言葉は、日本語の「折る（ori）」と「紙（kami）」から来ています。`;

let isEnglish = true;

toggleLang.addEventListener("click", () => {
    if (isEnglish) {
        para.innerHTML = introJapanese + "<br><br>" + aboutJapanese;
        toggleLang.innerText = "Switch to English";
        isEnglish = false;
    } else {
        para.innerHTML = introEnglish;
        para.innerHTML = aboutEnglish;
        toggleLang.innerText = "日本語 / English";
        isEnglish = true;
    }
});

// So grab a piece of paper and start folding your way

