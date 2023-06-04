const fetch = require('node-fetch');

const BASE_URL = 'http://localhost:2000';
const EXECUTE_ENDPOINT = '/api/v2/execute';

const executeCode = async (code, lang) => {
    const body = {
        language: lang,
        version: '18.15.0',
        files: [
            {
                name: 'sample_submission.js',
                content: code,
            },
        ],
        stdin: '',
        args: [],
        compile_timeout: 10000,
        run_timeout: 3000,
        compile_memory_limit: -1,
        run_memory_limit: -1,
    };

    const response = await fetch(BASE_URL + EXECUTE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });

    const data = await response.json();
    return data;
};

module.exports = { executeCode };
