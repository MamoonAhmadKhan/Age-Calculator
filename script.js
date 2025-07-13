"use strict";

const inputDate = document.getElementById('date');
const calculateButton = document.getElementById('calculate-btn');
inputDate.max = new Date().toISOString().split("T")[0];
const area = document.querySelector('.area');

function getDaysInMonth (year, month) {
    return new Date(year, month, 0).getDate();
}

const calculateAge = () => {
    let birthDate = new Date(inputDate.value);
    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let today = new Date();
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;
    y3 = y2 - y1;
    
    if (m2 >= m1) {
        m3 = m2 - m1;
    }
    else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    if (d2 >= d1) {
        d3 = d2 - d1;
    }
    else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    if (m3 < 0) {
        m2 = 11;
        y3--;
    }

    return [y3, m3, d3];
}

calculateButton.addEventListener('click', () => {
    const solvedDate = calculateAge();

    area.innerHTML = "";

    const p = document.createElement('p');
    p.classList.add('calculated-age');
    p.innerHTML = `You are <span>${solvedDate[0]} Years</span>, <span>${solvedDate[1]} Months</span>, and <span>${solvedDate[2]} Days</span> old.`;
    
    area.appendChild(p);
});