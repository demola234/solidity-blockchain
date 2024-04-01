async function main() {}


main.then = async function() {
    await main();
};