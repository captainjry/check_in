const intialData = {
    tasks:{
        'task-1': {id: 'task-1', content: '11111111'},
        'task-2': {id: 'task-2', content: '22222222'},
        'task-3': {id: 'task-3', content: '33333333'},
        'task-4': {id: 'task-4', content: '44444444'},
    },
    columns:{
        'column-1':{
            id: 'column-1',
            title: 'Person',
            taskIds: ['task-1','task-2','task-3','task-4'],
        },
    },
    columnOrder:['column-1'],
};

export default intialData;