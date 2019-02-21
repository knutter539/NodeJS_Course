
console.log('Starting notes.js');

module.exports.age = 29;

module.exports.addNote = () => {
    console.log('addNote');
    return 'New Note';
};

module.exports.add = ($A, $B) => {
    return $A + $B;
}