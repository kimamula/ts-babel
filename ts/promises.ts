function timeout(duration = 0) {
    return new Promise((resolve: () => void, reject: () => void) => {
        setTimeout(resolve, duration);
    })
}

var promise = timeout(1000).then(() => {
    return timeout(2000);
}).then((): {} => {
    throw new Error("hmm");
}).catch((err: any) => {
    return Promise.all([timeout(100), timeout(200)]);
})
