// Import & Export Module - Common JS

// Example - 1
// const nm = "Sonam";
// module.exports = nm;

// Example - 2
const nm = "Sonam";

const marks = (math, sci) => {
    console.log(math + sci);
}

module.exports = { nm, marks };