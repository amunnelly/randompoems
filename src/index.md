---
layout: base.njk
title: Poems!
poet: " "
---

{% for poem in collections.poems %}
 - [{{ poem.data.title }}]({{ poem.url }})
{%- endfor %}

{% assign randomPost = collections.poems | getRandom %}

<div id='random'>
<a href="{{randomPost.url}}">Sing, Muse!</a>
</div>


