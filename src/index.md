---
layout: base.njk
title: Poems!
poet: " "
---

{% assign pomes = collections.poems | sortByPubDate %}

{%- for poem in pomes %}
 - [{{ poem.data.title }}]({{ poem.url }})
 
{%- endfor %}

{% assign randomPost = collections.poems | getRandom %}

<div id='random'>
<a href="{{randomPost.url}}">Sing, Muse!</a>
</div>

