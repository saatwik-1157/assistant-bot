function sendMessage() {
    let input = document.getElementById("user-input");
    let message = input.value.toLowerCase();
    let chatBox = document.getElementById("chat-box");

    if (message === "") return;

    // User message
    chatBox.innerHTML += `<div class="user">You: ${message}</div>`;

    // Bot response
    let reply = getBotReply(message);
    chatBox.innerHTML += `<div class="bot">Bot: ${reply}</div>`;

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
function getBotReply(msg){
    if (msg.includes("hello") || msg.includes("hi"))
        return "Hello! 👋 How can I help you today?";
    if (msg.includes("help"))
        return "Try: study, exam, syllabus, break, goal, html, css, javascript";
    if (msg.includes("study"))
        return "Study daily for 2 hours. Revise yesterday’s topic before learning new one.";

    // Exam tips
    if (msg.includes("exam"))
        return "Prepare a timetable, practice previous questions, and revise regularly.";
    if (msg.includes("syllabus"))
        return "Split your syllabus into small topics and finish one topic per day.";
    if (msg.includes("break"))
        return "Take a 5–10 minute break after every 30–40 minutes of study.";
    if (msg.includes("goal"))
        return "Set SMART goals: Specific, Measurable, Achievable, Relevant, Time-bound.";
    if (msg.includes("html"))
        return "Learn HTML tags, forms, tables, and semantic elements first.";
    if (msg.includes("css"))
        return "Focus on box model, flexbox, grid, and responsive design.";
    if (msg.includes("javascript"))
        return "Start with variables, loops, functions, then DOM manipulation.";
    if (msg.includes("bye"))
        return "Goodbye! 👋 Keep learning and stay consistent!";
    return "Sorry 😕 I don't understand. Type 'help' to see commands.";
}

