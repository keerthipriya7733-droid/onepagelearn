let currentLevel = "school";
let currentTopicIndex = 0;

/* =========================
   TOPIC LIST (50)
========================= */
const topicNames = [
 "Gravity","Algorithm","Photosynthesis","Energy","Motion","Force","Electricity",
 "Magnetism","Atoms","Molecules","Acids","Bases","Heat","Light","Sound",
 "Velocity","Acceleration","Friction","Work","Power",
 "Binary","Loops","Arrays","Functions","Variables","OOP",
 "Inheritance","Polymorphism","Encapsulation","Abstraction",
 "CPU","RAM","ROM","Operating System","Compiler","Interpreter",
 "Network","Internet","HTTP","HTTPS","DNS","Cloud Computing",
 "Artificial Intelligence","Machine Learning","Deep Learning","Data Science"
];

/* =========================
   TOPIC CATEGORIES
========================= */
const physics = ["Gravity","Energy","Motion","Force","Electricity","Magnetism","Heat","Light","Sound","Velocity","Acceleration","Friction","Work","Power"];
const biology = ["Photosynthesis"];
const chemistry = ["Atoms","Molecules","Acids","Bases"];
const programming = ["Algorithm","Binary","Loops","Arrays","Functions","Variables","OOP","Inheritance","Polymorphism","Encapsulation","Abstraction"];
const systems = ["CPU","RAM","ROM","Operating System","Compiler","Interpreter","Network","Internet","HTTP","HTTPS","DNS","Cloud Computing"];
const ai = ["Artificial Intelligence","Machine Learning","Deep Learning","Data Science"];

/* =========================
   EXPLANATION GENERATOR
========================= */
function generateExplanation(topic) {
  if (physics.includes(topic)) {
    return [
      `${topic} explains physical behavior of objects.`,
      `It is governed by physical laws.`,
      `Used in numerical problem solving.`,
      `Observed in real-world phenomena.`,
      `Measured using standard units.`,
      `Important for competitive exams.`,
      `Connected with other physics concepts.`,
      `Appears frequently in theory questions.`,
      `Used in engineering applications.`,
      `Forms base for advanced physics.`
    ];
  }

  if (biology.includes(topic)) {
    return [
      `${topic} is a vital biological process.`,
      `Occurs naturally in plants.`,
      `Involves energy conversion.`,
      `Supports life on Earth.`,
      `Uses specific raw materials.`,
      `Produces useful products.`,
      `Depends on environmental factors.`,
      `Explained in steps.`,
      `Important for biology exams.`,
      `Foundation for life sciences.`
    ];
  }

  if (chemistry.includes(topic)) {
    return [
      `${topic} relates to chemical structure.`,
      `Explains composition of matter.`,
      `Used in chemical reactions.`,
      `Important in laboratory analysis.`,
      `Has defined chemical properties.`,
      `Used in equations and formulas.`,
      `Connected to atomic theory.`,
      `Used in industries.`,
      `Asked in chemistry exams.`,
      `Base for advanced chemistry.`
    ];
  }

  if (programming.includes(topic)) {
    return [
      `${topic} is a core programming concept.`,
      `Used to write efficient code.`,
      `Improves logical thinking.`,
      `Essential for problem solving.`,
      `Frequently asked in interviews.`,
      `Used in algorithms.`,
      `Reduces complexity.`,
      `Language independent concept.`,
      `Used in real applications.`,
      `Important for placements.`
    ];
  }

  if (systems.includes(topic)) {
    return [
      `${topic} is part of computer systems.`,
      `Controls system behavior.`,
      `Works with hardware or networks.`,
      `Ensures efficiency.`,
      `Important for system design.`,
      `Used in real environments.`,
      `Critical for performance.`,
      `Frequently asked in interviews.`,
      `Used in operating systems.`,
      `Foundation for system roles.`
    ];
  }

  if (ai.includes(topic)) {
    return [
      `${topic} enables intelligent systems.`,
      `Uses data for learning.`,
      `Applied in automation.`,
      `Used in modern technology.`,
      `Requires mathematical models.`,
      `Improves decision making.`,
      `Used in industry products.`,
      `High demand skill.`,
      `Asked in AI interviews.`,
      `Future-oriented technology.`
    ];
  }
}

/* =========================
   FLOWCHART GENERATOR
========================= */
function generateFlowchart(topic) {
  if (physics.includes(topic)) {
    return `
Object/System
      ↓
Apply ${topic} Principle
      ↓
Physical Interaction
      ↓
Observed Result
`;
  }

  if (biology.includes(topic)) {
    return `
Sunlight + CO₂ + Water
      ↓
Biological Process
      ↓
Energy Conversion
      ↓
Food Production
`;
  }

  if (programming.includes(topic)) {
    return `
Input Data
      ↓
Apply ${topic} Logic
      ↓
Processing
      ↓
Output
`;
  }

  if (systems.includes(topic)) {
    return `
System Component
      ↓
Processing
      ↓
Resource Management
      ↓
System Output
`;
  }

  if (ai.includes(topic)) {
    return `
Data Collection
      ↓
Model Training
      ↓
Prediction
      ↓
Decision
`;
  }

  return `
Input
      ↓
Process
      ↓
Output
`;
}

/* =========================
   QUIZ GENERATOR (RELEVANT)
========================= */
function generateQuiz(topic) {

  if (physics.includes(topic)) {
    return [
      { q: `${topic} is related to which branch?`, options: ["Physics","Chemistry","Biology","Math"], ans: 0 },
      { q: `${topic} mainly explains?`, options: ["Motion/Force","Life","Code","Networks"], ans: 0 },
      { q: `${topic} is measured using?`, options: ["Units","Loops","Cells","Packets"], ans: 0 },
      { q: `${topic} is governed by?`, options: ["Laws","Functions","DNA","Protocols"], ans: 0 },
      { q: `${topic} is used in?`, options: ["Numericals","Cooking","Painting","Music"], ans: 0 },
      { q: `${topic} acts on?`, options: ["Objects","Programs","Cells","Files"], ans: 0 },
      { q: `${topic} is important for?`, options: ["Exams","Games","Movies","Songs"], ans: 0 },
      { q: `${topic} belongs to?`, options: ["Science","Arts","Commerce","History"], ans: 0 },
      { q: `${topic} explains?`, options: ["Natural phenomena","Languages","Networks","Databases"], ans: 0 },
      { q: `${topic} is applied in?`, options: ["Engineering","Cooking","Painting","Dance"], ans: 0 }
    ];
  }

  if (programming.includes(topic)) {
    return [
      { q: `${topic} is used in?`, options: ["Programming","Biology","Physics","Chemistry"], ans: 0 },
      { q: `${topic} helps in?`, options: ["Problem solving","Sleeping","Eating","Drawing"], ans: 0 },
      { q: `${topic} improves?`, options: ["Code efficiency","Noise","Delay","Errors"], ans: 0 },
      { q: `${topic} is related to?`, options: ["Logic","Heat","Light","Sound"], ans: 0 },
      { q: `${topic} is required for?`, options: ["Placements","Sports","Music","Cooking"], ans: 0 },
      { q: `${topic} is part of?`, options: ["Software","Hardware","Plants","Atoms"], ans: 0 },
      { q: `${topic} reduces?`, options: ["Complexity","Speed","Memory","Noise"], ans: 0 },
      { q: `${topic} used in?`, options: ["Algorithms","Recipes","Songs","Paintings"], ans: 0 },
      { q: `${topic} is language?`, options: ["Independent","Dependent","Natural","Biological"], ans: 0 },
      { q: `${topic} is tested in?`, options: ["Interviews","Movies","Sports","Music"], ans: 0 }
    ];
  }

  if (systems.includes(topic)) {
    return [
      { q: `${topic} belongs to?`, options: ["Computer Systems","Biology","Physics","Chemistry"], ans: 0 },
      { q: `${topic} works with?`, options: ["Hardware","Plants","Atoms","Cells"], ans: 0 },
      { q: `${topic} improves?`, options: ["Performance","Noise","Heat","Delay"], ans: 0 },
      { q: `${topic} manages?`, options: ["Resources","Music","Food","Paintings"], ans: 0 },
      { q: `${topic} is used in?`, options: ["Computers","Farms","Labs","Hospitals"], ans: 0 },
      { q: `${topic} is important for?`, options: ["System design","Art","History","Geography"], ans: 0 },
      { q: `${topic} interacts with?`, options: ["Components","Cells","Plants","Liquids"], ans: 0 },
      { q: `${topic} ensures?`, options: ["Efficiency","Confusion","Delay","Errors"], ans: 0 },
      { q: `${topic} is asked in?`, options: ["Technical interviews","Songs","Movies","Games"], ans: 0 },
      { q: `${topic} is core of?`, options: ["Computing","Biology","Physics","Chemistry"], ans: 0 }
    ];
  }

  if (ai.includes(topic)) {
    return [
      { q: `${topic} is related to?`, options: ["Artificial Intelligence","Biology","Physics","Chemistry"], ans: 0 },
      { q: `${topic} uses?`, options: ["Data","Water","Heat","Sound"], ans: 0 },
      { q: `${topic} is used for?`, options: ["Prediction","Cooking","Drawing","Painting"], ans: 0 },
      { q: `${topic} improves?`, options: ["Decision making","Noise","Delay","Confusion"], ans: 0 },
      { q: `${topic} requires?`, options: ["Models","Plants","Atoms","Cells"], ans: 0 },
      { q: `${topic} applied in?`, options: ["Industry","Farming","Music","Dance"], ans: 0 },
      { q: `${topic} learns from?`, options: ["Data","Rules","Music","Paintings"], ans: 0 },
      { q: `${topic} is part of?`, options: ["Modern tech","Ancient history","Art","Literature"], ans: 0 },
      { q: `${topic} demand is?`, options: ["High","Low","None","Zero"], ans: 0 },
      { q: `${topic} tested in?`, options: ["AI interviews","Sports","Movies","Songs"], ans: 0 }
    ];
  }

  // Biology & Chemistry
  return [
    { q: `${topic} belongs to?`, options: ["Science","Arts","Commerce","History"], ans: 0 },
    { q: `${topic} is studied in?`, options: ["Biology/Chemistry","Programming","Math","Music"], ans: 0 },
    { q: `${topic} involves?`, options: ["Processes","Loops","Files","Packets"], ans: 0 },
    { q: `${topic} is important for?`, options: ["Life/Industry","Games","Music","Art"], ans: 0 },
    { q: `${topic} explained using?`, options: ["Steps","Code","Networks","Protocols"], ans: 0 },
    { q: `${topic} occurs in?`, options: ["Nature","Software","Hardware","Cloud"], ans: 0 },
    { q: `${topic} uses?`, options: ["Raw materials","Variables","Functions","Packets"], ans: 0 },
    { q: `${topic} produces?`, options: ["Output","Errors","Noise","Delay"], ans: 0 },
    { q: `${topic} asked in?`, options: ["Exams","Games","Movies","Songs"], ans: 0 },
    { q: `${topic} foundation for?`, options: ["Advanced study","Cooking","Dance","Painting"], ans: 0 }
  ];
}

/* =========================
   CREATE TOPIC
========================= */
function createTopic(topic) {
  return {
    intro: `${topic} is an important concept for exams and real-world understanding.`,
    explain: generateExplanation(topic),
    flowchart: generateFlowchart(topic),
    quiz: generateQuiz(topic)
  };
}

/* =========================
   BUILD TOPICS
========================= */
const topics = topicNames.map(t => createTopic(t));

/* =========================
   UI LOGIC
========================= */
const container = document.getElementById("topicsContainer");
topicNames.forEach((t,i)=>{
  const d=document.createElement("div");
  d.className="topic-item";
  d.innerText=t;
  d.onclick=()=>{currentTopicIndex=i;loadTopic();};
  container.appendChild(d);
});

function loadTopic() {
  const t = topics[currentTopicIndex];
  document.getElementById("title").innerText = topicNames[currentTopicIndex];
  document.getElementById("intro").innerText = t.intro;
  document.getElementById("explain").innerHTML = t.explain.map(e=>`<li>${e}</li>`).join("");
  document.getElementById("flowchart").innerText = t.flowchart;
  loadQuiz(t.quiz);
  document.getElementById("result").innerHTML="";
  document.getElementById("nextBtn").style.display="none";
}

function loadQuiz(quiz){
  const q=document.getElementById("questions");
  q.innerHTML="";
  quiz.forEach((x,i)=>{
    q.innerHTML+=`
      <div class="quiz-question">
        <p>${i+1}. ${x.q}</p>
        ${x.options.map((o,j)=>`<label><input type="radio" name="q${i}" value="${j}"> ${o}</label>`).join("<br>")}
      </div>`;
  });
}

function submitQuiz(){
  const quiz=topics[currentTopicIndex].quiz;
  let score=0;
  quiz.forEach((q,i)=>{
    const s=document.querySelector(`input[name="q${i}"]:checked`);
    if(s && Number(s.value)===q.ans) score++;
  });

  let emoji="💪📘";
  if(score===10) emoji="🏆🔥👑🎉";
  else if(score>=8) emoji="👏✨🎯";
  else if(score>=5) emoji="😊👍";

  document.getElementById("result").innerHTML =
    `<b>Score:</b> ${score}/10<br>${emoji}<br>Keep Learning!`;

  document.getElementById("nextBtn").style.display="block";
}

function nextTopic(){
  currentTopicIndex=(currentTopicIndex+1)%topics.length;
  loadTopic();
}
