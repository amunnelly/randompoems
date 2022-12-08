---
layout: base.njk
title: Poems!
poet: " "
---

{% assign randomPost = collections.poems | getRandom %}

<div id='random'>
<a href="{{randomPost.url}}">Sing, Muse!</a>
</div>

