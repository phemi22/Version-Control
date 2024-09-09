// Whenever you are adding anything to an existing file, you are changing the version and creating new version. Version control is a version management system used to track the different versions of codes that is being born each time we work on the code on the code base.

let nyDetails = {
    userName : "phemi",
    age : 30,
    isMale : true
}

// Types of Version Control System
// 1. Centralised Version Control System : A copy is kept in a central server
// 2. Decentralised Version Control System : A copy is kept on each engineer's code base.

// GitHub is where we keep everything that is being managed using Git.

// git-init : To initialize git
// git status : To see the status of the project on the project folder
// git add . : To track the changes files in our project folder
// git commit : To commit our changes
// git commit -m : To let us know where we commit the new changes
// git log : will show us the history of our commit
// git push : To push everything saved on our local laptop storage to the remote repository on github. We have git push -u origin master or git push -u origin main
// git branch : To see the list of branches
// git branch femi : To create a branch. We will have two branches, femi and master. Wherever the * sign is shows where our changes are being committed.
// git checkout femi : To go out of master branch to femi branch
// git branch -d femi : To delete the branch
// P.S : Always create your own branch and work in it befor pushing to the master branch. Do not work in the master branch.
// git pull : To collect the most recent code another developer pushed to the file and merge it to my own code. git pull origin (the name of the file the change was made)
// git fetch : It will get the changes the other developers made to the code. This is more reasonable because it give us room to see the changes first before mergin it to our own code
// git merge : To merge everything into one branch e.g git merge master
// git clone : To download code to my own laptop. We can also push back to the folder