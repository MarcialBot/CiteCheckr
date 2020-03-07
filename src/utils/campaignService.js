const BASE_URL = '/api/campaigns/';

function create(data) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: new Headers({'Content-type': 'Application/json'}),
        body: JSON.stringify(data)
    })
    .then(res => {
        if(res.ok) return res.json();
        throw new Error('Something went wrong');
    })
}

function index() {
    return fetch(BASE_URL).then(res => res.json());
}

function deleteOne(data) {
    return fetch(BASE_URL, {
        method: 'DELETE',
        headers: new Headers({'Content-type': 'Application/json'}),
        body: JSON.stringify(data)
    })
    .then(res => {
        console.log(res.json)
        if(res.ok) return res.json();
        throw new Error('Something went wrong');
    })
}

export default {
    create,
    index,
    deleteOne
}