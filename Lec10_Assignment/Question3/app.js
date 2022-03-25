const yargs = require("yargs");
const fs = require('fs');
const chalk = require('chalk');
const path = './todo.json';
const _ = require('lodash');
const todos = require('./todos.js');
let todosData;
yargs.command({
      command: "login",
      describe: "Enter your username and password",
    builder: {
        username: {
            describe: "Username",
            demandOption: true,
            type: "string",
        },
        password: {
            desribe: "Password",
            demandOption: true,
            type: "string",
            
        },
     
      },
    handler: function (argv) {
        // console.log(argv);
        if (argv.username === "windowXP" && argv.password === "secret") {
            console.log(`Login succesfully with username: ${argv.username}, password: ${argv.password} `);
        } else {
            console.log(chalk.red('Wrong Username or Password'));
        }

      },
})
    .command({
        command: "read",
        describe: "read from a file",
        builder: {
            filename: {
                describe: "Filename",
                demandOption: true,
                type: "string",
            },
          
        },
        handler: function (argv) {
            // console.log(argv);
            // try {
                var command = argv._[0];
                if (argv.filename === 'todo.json') {
                    // try {
                        var todosString = fs.readFileSync('todo.json', 'utf8')
                        todosData = JSON.parse(todosString);
                    todos1 = JSON.stringify(todosData)
                        console.log(todos1);
            
                    
                } else {
                    throw new Error('file not exists');
                }
    
          },

    })
    .command({
        command: "add",
        describe: "add a to-do item",
        builder: {
            title: {
                describe: "title name",
                demandOption: true,
                type: "string",
            },
            stat: {
                describe: "Not finish or finish",
                demandOption: true,
                type: "string",
            },
            description: {
                describe: "details",
                demandOption: false,
                type: "string",
            },
            time: {
                describe: "details",
                demandOption: true,
                type: "string",
            }
          
        },
        handler: function (argv) {
            var command = argv._[0];
            if (command === 'add') {
                todos.add(argv.title, argv.stat, argv.description, argv.time, argv.priority);
            }  else {
                console.log('invalid command');
            }
    
          },

    })
    .command({
        command: "delete",
        describe: "add a to-do item",
        builder: {
        
            title: {
                describe: "delete a title from data",
                demandOption: true,
                type: "string",
            },
          
        },
        handler: function (argv) {
            var command = argv._[0];
            if (command === 'delete') {
                var todoDeleted = todos.deleteT(argv.title);
                console.log(todoDeleted);
            } else {
                console.log('invalid command');
         }
    
          },

    })
    .command({
        command: "finish",
        describe: "change an item status",
        builder: {
        
            title: {
                describe: "delete a title from data",
                demandOption: true,
                type: "string",
            },
          
        },
        handler: function (argv) {
            var command = argv._[0];
            if (command === 'finish') {
                var todoFinish = todos.finishT(argv.title);
                // console.log(todoFinish);
            } else {
                console.log('invalid command');
         }
    
          },

    })
yargs.parse();
