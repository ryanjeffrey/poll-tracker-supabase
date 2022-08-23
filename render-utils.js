export function renderPoll(poll) {
    const container = document.createElement('div');
    const question = document.createElement('p');
    const optionA = document.createElement('p');
    const votesA = document.createElement('p');
    const optionB = document.createElement('p');
    const votesB = document.createElement('p');

    question.textContent = poll.question;
    optionA.textContent = poll.optionA;
    optionB.textContent = poll.optionB;
    votesA.textContent = poll.votesA;
    votesB.textContent = poll.votesB;

    // and append
    container.append(question, optionA, votesA, optionB, votesB);
    container.classList.add('poll');

    // return the DOM element
    return container;
}
