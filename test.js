const func1 = () => {
    const promise = new Promise((res, rej) => {
        setTimeout(() => {
            console.log('1');
            res('ok');
        }, 2000);
    });
    return promise;

}
const func2 = () => {
    console.log('2')
}

async function run() {
    await func1();
    func2();
};

run()