---
title: Connecting `git` to Github.com
sidebar_label: Git & Gitub
sidebar_position: 3
---

<!-- markdownlint-disable no-inline-html -->
<iframe src="https://drive.google.com/file/d/1ktQbf8JyOiXMG2K749ZmuaexfZhy54s9/preview" width="640" height="480" allow="autoplay"></iframe>

First things first, make sure that you have GitHub open on your computer. We're gonna be synchronizing our local Git repos with GitHub remotely. Those two don't inherently know about each other. Your machine doesn't know what's on GitHub and vice versa. Caveat to all of that is that GitHub has released a command line tool, GitHub desktop, that I have not used. You are more than welcome to experiment with it, and it does make some of these steps a little bit easier. But we're gonna do it the old school way.

Go to [GitHub.com](https://github.com), and when you're logged in, click on the repositories link. You get something that looks kind of like what I've got here on the screen. This is a list of all of my repositories. Yours will obviously, unless you've already done this, not have anything there. The button we want to do is click on new, because we're gonna create a new repository.  Yours will look a little different than mine because I belong to a bunch of different organizations. Your owner should just be your account. I've got all of these different organizations, but I'm gonna switch to me because I am the owner of this particular repository.

For my example, I'm gonna push up a `python_101` folder that I created. I would recommend that you name your repository the same as your local folder. This is a convention, not a requirement. It just makes things easier so you can find things.  In general, you'll save yourself a lot of headache if your repository name and your folder name are exactly the same. They don't have to be. You're going to make the connection regardless. They can be completely different, but you'll save yourself a lot of headache with that convention.

I would make your repositories public, not private. The primary reason for that is so that you can share them with each other without inviting people and go through the hoops of inviting people to a private repository. Also, when you are interviewing for jobs, you wanna make it as easy as possible for people to see your work. Now there are times where you will want. Every client I work with, all of their repositories are private. I don't have permission to share that code. So those are all private repositories and only myself and people with direct access have.

But for any assignment you do in class, including your projects, like your final projects, just leave it open, make it public. We're not gonna be doing anything that is super proprietary that you need to worry about protecting. We don't have any intellectual property and if you do...
that'll be a whole other thing and we'll get with a legal team at the end of the class to take care of that 😉.

Your default will be to go public for everything. We're not going to worry about a readme right now, we'll talk about that a little bit later. Next, you'l click on the Create Repository link. This page gives you all of the details that you need to connect your local folder to the remote.

In most cases, we're gonna go with this bottom option where it says push an existing repository from the command line.
Relevant part of this page that we want for what we're doing is that we've already got our local folders created if we were Starting completely from scratch and we wanted to go to github first which you absolutely can do But we often won't in this class then your you would go to the create a new Repository on the command line and go through these steps, but we already have our folder created We already have initialized a repo in that folder. We have initialized the repo in that folder, right?

If you haven't, type git init in that folder right now, and then we'll pick up on that when we switch to the terminal. So this is what we're going to want to do. We're literally gonna wanna copy and paste all of this stuff right here, where it says push an existing repo from the command line. We're not gonna do that just yet. We're not gonna copy and paste that stuff just yet. First thing we're gonna do is go to our terminal and make sure that our folder is set up for it. So in my terminal, I have this folder. I have my Python 101.
It's got HelloPy in it. I have initialized the repo. If I do git status, we can see it right there. I have not added any of these files to it. I'm gonna go through all of these steps. So A, we have them on the recording, and B, so y'all can see them if you haven't done it. So let me clear this out. Remember, if you have not initialized, if you type git status and it says fatal, not a repo, your next thing you wanna type is git init.

I think somebody asked the question yesterday regarding what happens if you type `git init` twice? You can and it'll just say that it's going to  re-initialize an existing git repository. It's not the end of the world to initialize another one. It creates a new folder in your folder that is hidden, and if you do `ls -al`, you'll see a folder named `.git`, and that has all the repository information in there.

I'm to run `git status` first. I have to add files, so I'm gonna run `git add`, and I have my one file, `hello.py`.  I don't normally recommend this, but you can do `git add` and then just a period, so `git add .` and hit enter. That will add every file that it has found that has not been tracked. I _don't_ recommend this in general, but for these initial things we're not changing a lot of the files, we're just saving things. When you work on a bigger project, you might edit a few things in one place and a few things in another place, and you don't want to just have these gigantic commits with a bunch of files.

A good practice is to have as few files per commit as possible, so if you have to go back in time to see when a change was made, you don't have a bunch of files to go through. Sometimes you can't help it. I've worked on bigger projects where there was one line change made, but that one line was changed in 52 files. No one is going to do 52 commits for that, but it's also gonna be a bit cumbersome to review. Sometimes you don't have a choice, but in general, you don't wanna do `git add .` and add everything. It's better to do it on a file by file basis. For our purposes, for what we're doing right here, it's totally fine.

Now we do another `git status`. You can see that I have a change to be committed, so I'm going to run `git commit`. This is my first commit, so I'm gonna make it the "initial commit." That is a convention. You can make your commit whatever you want. We're using the `-m` flag so that we can just pass the commit message as part of the commit. We can actually also go into any editor, such as `nano` to edit this commit message. However, I'm not gonna worry about that for now because it's our initial commit and it's pretty straightforward. For future commits, I would put more information in here, and I would try to make it more clear as to what happened. Again, you're communicating with your future self and or somebody else. Your commit messages are gonna let somebody else or you six months from now know what you did at this point in time. Remember, each commit is a flag put at a specific point in time as you're working on the timeline or your branch. It's keeping up with where you were at that point and so you want to try to communicate with yourself as much as possible.

(_Now, as I say all of that, I have plenty of commits that are simply "WTF?"" because something is broken and I'm frustrated. Future me will look at it and go, man, I was really annoyed with something there. I don't know why, but I was._)

I'm going to make that commit and then I'm going to `git status` again. It should say that we are on branch `main`, with nothing to commit and the working tree is clean. Once we've run our `git status`, we are ready to connect things.

If you want to know if a repository has a remote connection, there's actually a command for that. We know for a fact right now, these won't. But this is a handy command to know, `git remote -v`. I will often make a typo and type `git remove`. To the best of my knowledge, `git remove` is not a command. It won't do anything. It'll just tell you it didn't work. But because I'm typing `git remote -v` with the `v` flag, my brain will transpose and it'll just type `git remove`. If you type `git remote -v` and you get nothing, that means you are not connected to a remote at any point. You do not have a remote repository. This repository lives on your local machine and your local machine only. The default branch when you initialize this is gonna be your main branch. We're gonna go back over to the browser, go into GitHub, and we can see that we're gonna push this existing repository. You can literally just click this copy button or highlight it and do a `command c`, go back to your terminal, do a `command v`, or right click and paste, and it'll paste all of that.

I'm gonna take a minute to explain what this is actually doing. When you paste this, you are pasting _three individual commands_. The first one is that you are adding a remote. I just typed `git remote -v` to list out the remotes. So I was telling Git, tell me if you know that you have any remotes. Remote means it's an upstream connection. That's how you refer to it. That is something in the cloud that is storing your repository.

In this instance, we're going to be connecting it with GitHub. You could connect it with GitLab. You can connect it with Bitbucket. I don't think there's a Gitbucket, but now I kind of want to create it. What you're doing is you're adding an _origin_ point that is _upstream_. So it's `git remote add origin`, then you specify where it needs to live. That's where the `git@github.com:[your account]/[your repository].git` comes from.

These commands also bake in the ability to change the branch name to `main`. If you're on a branch that is not named `main`, it's going to rename that branch. This is primarily for the older versions of Git because the default branch wasn't named main. The command is assuming that you've got a brand new repository and that you're on that branch. These commands say: "If your branch isn't a main, we're just going to go ahead and rename it." and this will put you in sync with what GitHub's terminology is currently.

The last step  will push the code up to the `origin`. The `git push -u` is pushing code from your computer upstream. That's what the `-u` is to the origin, and it needs to be the main branch.

I'm mentioning all this about the branch naming because if you start a bunch of work on your local machine, and you have a bunch of different branches, make sure the very _first_ one you push up is your `main` branch. Otherwise, this command is gonna try to rename that and GitHub is gonna think _that_ branch is your main branch. That'll be a whole other kettle of fish that you do not wanna have to deal with. So make sure the first time you push anything up to GitHub that you're on the `main` branch.

I would do it as early in the process as possible before you have any other branches, and that the first branch you push up is your `main` branch. That will save you from having any future headaches. Later we'll get to pushing up other branches. You can push up as many branches as you would like. I've worked on repos that have well over 100 branches. They're kind of nasty to work with, but you can push up as many as you would like. But the first one you push up, when you make this initial connection to GitHub be on your main branch. It'll save you a lot of headache. We'll get to adding other branches later and those commands. Spoiler, it's `git push -u origin [whatever the branch name is]`.

We're gonna hit enter, and ideally everything should work. It should count the number of objects, there's not many in there. It will then say, `writing the objects to github.com`. It creates the new branch on github.com so that we have the `main` branch that got pushed up. Your local branch `main` is now set up to track `origin main`, meaning my local main branch and my remote branch are now synchronized together.

Once we've run that command and we've connected our remote, I can do a `git remote -v` and now it reports back that it has an origin, it has an upstream, and that is for pushing and pulling. So it's got the `fetch`, that's the top one, and then the `push`. `Fetch` is gonna be your `pull`, when you're gonna pull things down. `Push` is gonna be your `push`, that's when you're gonna send things up. So we can now push and pull from this repository.

Now I'm going to go back to the browser, reload the page, and what I should see is the file that I had in there, `hello.py`, is now in the remote repository.

Any changes that I want to make, including adding an additional file in here. I'm going to open this up with VS Code and I'm going to make a new file and call it `hellou.py`. And this one will just say, `print`, I'm going to keep this pretty simple.

Then I can go back to my terminal and if I do a `git status` I will see that I have a new file that is in there that is not tracked. I will go through the same steps again. I'll `git add hellou.py` (in this case I'm going to specify the new filename).

Then I'll do a `git commit -m  "added hello you script"` and now I can do a `git push`.

After you have done your initial push of _any_ branch, and this is true for whichever branch you're on after you've done your initial push, with any branch every _subsequent_ push is just a `git push` so you type git push it'll push up those changes.

I can do a `git status`, and it will tell me that I am synchronized, you're on branch `main` and your branch is up to date with `origin main`. This means `git` is now talking to GitHub and saying, "You don't have any changes remotely. You're all current locally, so you are all set. Nothing to commit. Working Tree is clean, so we're all good there."

One last thing that I want to show, what we just did was connecting and pushing. You can also `pull` things down. I shared these links yesterday, a link to this repository where I'm pulling stuff down. This is a repo that has already been created. It is public. If you wanted to pull it down, you can come over here and click on `Code`.

**Note**, this is something I didn't talk about that I meant to in the last section before reloading the page.

We set up SSH keys so anytime you are pushing and pulling from Git, you want to use the _SSH connection_. That's going to look like `git@github.com:` link preface. If you see anything with `https://github.com`, that's going to give you a problem trying to connect because they're actually phasing that out. That's why we went through setting up the keys. It used to be that you could just log in from the command line and it would send it all over HTTPS, but GitHub is gradually phasing that out. So eventually you'll only have SSH or the GitHub command line app.

I default to SSH for everything. On an existing repository you click on `Code`, make sure it's on SSH, click the `Copy URL to clipboard` icon. Now I can go back into my local machine and I'm going to make sure I'm not in a repository. I'll do `git status`, and it should say `Not a git repository`, which is exactly what I want. I'm gonna be cloning an existing git repository, so I type `git clone`, and I'm gonna paste that URL that I just copied: `git clone git@github.com/[some repo account]/[some repo name]`

What I'm going to do now is I'm going to now take a remote GitHub repository and make a local copy of it. The first steps we did connected a _local to a remote_. These last steps are taking an existing remote and bringing a _local copy down_. So now I'll hit enter and it'll say cloning into that folder. And now if I CD into CCS Python demos, do a git status.

I have pulled all that work down, I have a bunch of files in here, and I can also then say `git remote -v` and you'll see that it's already connected with `fetch` and `push` to that directory.

That's where we're just gonna pause with this step of `git`. We're gonna do a lot more as we continue, but this is where we need to be for the first week for the initial stuff with `git`.
