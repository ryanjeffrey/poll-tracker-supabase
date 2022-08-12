// import functions and grab DOM elements
const newPollFormEl = document.getElementById('new-poll-form');

const currentPollQuestion = document.getElementById('current-poll-question');
const optionAEl = document.getElementById('option-a');
const optionASubtractButton = document.getElementById('option-a-subtract');
const optionAVoteCountEl = document.getElementById('option-a-vote-count');
const optionAAddButton = document.getElementById('option-a-add');
const optionBEl = document.getElementById('option-b');
const optionBSubtractButton = document.getElementById('option-b-subtract');
const optionBVoteCountEl = document.getElementById('option-b-vote-count');
const optionBAddButton = document.getElementById('option-b-add');

const closePollButton = document.getElementById('close-poll-button');

const pastPollsDivEl = document.getElementById('past-polls-div');

// let state
let currentPoll = {
    question: '-',
    optionA: '',
    optionB: '',
    votesA: 0,
    votesB: 0,
};

// set event listeners
newPollFormEl.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(newPollFormEl);

    // get user input
    const userQuestion = formData.get('user-question-input');
    const userOptionA = formData.get('option-a-input');
    const userOptionB = formData.get('option-b-input');

    // use user input to update state
    currentPoll.question = userQuestion;
    currentPoll.optionA = userOptionA;
    currentPoll.optionB = userOptionB;

    newPollFormEl.reset();

    // update DOM to reflect the new state
    displayCurrentPoll();
});

optionASubtractButton.addEventListener('click', () => {
    currentPoll.votesA--;
    optionAVoteCountEl.textContent = currentPoll.votesA;
});

optionAAddButton.addEventListener('click', () => {
    currentPoll.votesA++;
    optionAVoteCountEl.textContent = currentPoll.votesA;
});

optionBSubtractButton.addEventListener('click', () => {
    currentPoll.votesB--;
    optionBVoteCountEl.textContent = currentPoll.votesB;
});

optionBAddButton.addEventListener('click', () => {
    currentPoll.votesB++;
    optionBVoteCountEl.textContent = currentPoll.votesB;
});

function displayCurrentPoll() {
    currentPollQuestion.textContent = currentPoll.question;
    optionAEl.textContent = currentPoll.optionA;
    optionBEl.textContent = currentPoll.optionB;
    optionAVoteCountEl.textContent = currentPoll.votesA;
    optionBVoteCountEl.textContent = currentPoll.votesB;
}