// NOTE: This test will only work if the piston engine is currently running on port 2000
const { executeCode } = require('../submit');

const jsCode = 'console.log("hello world!")';
const jsResponse = {
    language: 'javascript',
    run: { code: 0, output: 'hello world!\n', signal: null, stderr: '', stdout: 'hello world!\n' },
    version: '18.15.0',
};

executeCode(jsCode, 'javascript');

test('executeCode successfully connects to local piston instance', async () => {
    expect(await executeCode(jsCode, 'javascript')).toStrictEqual(jsResponse);
});
