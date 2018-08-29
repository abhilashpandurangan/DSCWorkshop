## Github
We recommend you follow along on the course with your own version of this git repo. The way this will work is that you will fork this git repo into your own account and then you will push your work to that repository when you finish it.


### 0. Github Desktop
You can install GitHub Desktop on Windows or Mac.
Warning: You must have a 64-bit operating system to run GitHub Desktop.

1. Visit the GitHub Desktop download page.
2. Choose Download for Windows/Mac.
3. In your computer's Downloads folder, double-click GitHub Desktop. In the pop-up window, click Install.
4. After the program has been installed, click Run.

### 1. Setting up Git, Github, and SSH keys
To start out you will need a Github account. Either log in or create a new one at https://github.com.

If you don't have git on your computer already, it can be installed with:
```sh
sudo apt-get install git
```

Lastly, follow [this guide](https://help.github.com/articles/generating-ssh-keys/) to set up SSH communication with Github. SSH is a communication protocol that ensures secure transfer of information but doesn't require you to enter your username and password every time you push.

### 2. Forking

"Forking" makes your own personal copy of a repository. The term is "forking" because you copy the entire history of the project, but from here on out, any changes you make to your new repository are distinct from those made in the original repository. It's totally fine to keep two repositories ongoing with the same history, it's just data!

Github makes this very easy. Do this:

![Imgur](https://i.imgur.com/K0u0M7L.png)

This will bring you to your own copy of this lesson. When you make changes to your version, it won't mess with anyone else's work.

### 3. Cloning
Now that you have your own copy of the repository, it's time to "clone" it, aka, download a copy to your computer. It's termed "cloning" because your downloaded copy and the version that exists on Github have a special relationship: you can "push", aka upload, all of your changes to the server with a single command.

Now, clone your copy of the Olin.js repository. You might have cloned with the remote URL which starts with `https` before; this time, we're asking you to clone with the one which starts with `ssh`. This is why you set up SSH keys in step 1 -- you'll be able to push your work without entering your username and password.

Replace the `_____` in the example below with your Github username. If you get an ssh error, refer to [this guide](https://help.github.com/articles/generating-ssh-keys/).

```sh
cd ~ # go to your home directory
git clone git@github.com:____/srmdsc.git
```

### 4. Adding a remote to the original
Now that you have a local copy, you need to add the original srmdsc repository as a remote. This will allow you to pull changes we make to the original repository into your own repository without overriding any of your work. To add a remote:

```sh
cd ~/srmdsc # go to your newly cloned repository
git remote add upstream git@github.com:srmdsc/srmdsc.git
```

### 5. Pulling from upstream
To pull any new additions from the upstream remote, simply run
```sh
git pull upstream master
```
If everything is going according to plan, there shouldn't be any conflicts, but if there are, you will have to resolve them.

## Git Best Practices

In the real world (and in this class), it's not good practice to commit directly to the `master` branch. If a real project is under version control, committing a bug to `master` could break live code. Usually, you'll work in a branch, test your code, then make a pull request to merge your work into the `master` branch.

Here's how to create a pull request:

1. Create a new branch on your `olinjs` repository.

  ```bash
  $ git checkout -b branchname
  ```
2. Commit something on the branch.
3. Follow [this procedure](https://help.github.com/articles/using-pull-requests/) to make a pull request from your new branch `branchname` into `master` on **your fork** of `srmdsc/DSCWorkshops-2829Aug2018` on GitHub (NOT the original repository, please!).

It's common to use pull requests to conduct code reviews. Developers discuss the changes in the comment thread on the pull request, iterate, and merge the changes once the discussion resolves. Conveniently, the merge button on a pull request lets you know whether the merge will result in any merge conflicts.

 (Optional: If you want a better high-level understanding of git pushing and pulling, I recommend [this video](https://www.youtube.com/watch?v=8KCQe9Pm1kg). If you want a better code-level understanding, I also recommend [this video](https://www.youtube.com/watch?v=Y9XZQO1n_7c).)
