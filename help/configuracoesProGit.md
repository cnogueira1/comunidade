## Configure seu git para os commits mais rapidos e organizados ##

# No Terminal digite

<p> git config --local core.editor code </p>

<p> Logo após execute o seguinte comando </p>

<p> git config --local --edit </p>

<p> Agora cole as linhas que estão abaixo no arquivo,
alterando seu e-mail e nome de usuario </p>

<pre>
  <code>
  [core]
    repositoryformatversion = 0
    filemode = false
    bare = false
    logallrefupdates = true
    symlinks = false
    ignorecase = true
    hooksPath = .husky
    editor = code
  [user]
    email = SEU_EMAIL
    name = SEU_NOME
  [push]
    followTags = true
  [alias]
    c = !git add --all && git commit -m
    s = !git status -s
    l = !git log --pretty=format:'%C(blue)%h %C(red)%d %C(white)%s - %C(cyan)%cn - %C(green)%cr'
    amend = !git add --all && git commit --amend --no-edit
    count = !git shortlog -s --grep
  </code>
</pre>

<p>Recomendado ao fazer commit</p>

<pre>
  <code>
    yarn commit
  </code>
</pre>

<p>Examplo como ficaria com git no terminal:</p>

<pre>
  <code>
    git add . && git commit -m "feat: nova maneira de dar commit adicionado"
  </code>
</pre>



