---
layout: base.njk
title: Poems!
poet: " "
---

{% poems = collections.poems | reverse %}

{% for poem in poems %}
 - [{{ poem.data.title }}]({{ poem.url }})
 
 {{ poem.data.published }}
 
 {{ poem.date }}

{%- endfor %}

{% assign randomPost = collections.poems | getRandom %}

<div id='random'>
<a href="{{randomPost.url}}">Sing, Muse!</a>
</div>

