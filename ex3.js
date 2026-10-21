let family = {
    parents: {},
    children: [
        { name: "Ali" },
        { name: "Lea" },
        { name: "Mona" }
    ]
};

function ex3(family) {
    console.log('the third children: ', family.children[2].name)
    console.log('name children: ', family.children[0].name + ', ' + family.children[1].name + ', ' + family.children[2].name)
}
ex3(family)