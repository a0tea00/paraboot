{% extends "blog.html" %}

{% load static%}


{%block body%}
<section class="content-title-default">
	<h1>{%block headline%}{%endblock headline%}</h1>
</section>	


		<div class="top-wrap">
		<nav class="main-navtop navbar navbar-default" role="navigation">
		<div class="container">
		<!-- Brand and toggle get grouped for better mobile display -->
		<div class="navbar-header">
		<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
		<span class="sr-only">Toggle navigation</span>
		<span class="icon-bar"></span>
		<span class="icon-bar"></span>
		<span class="icon-bar"></span>
		</button>
		<a class="navbar-brand" href="/blog">/Blog</a>
		</div>

		<!-- Collect the nav links, forms, and other content for toggling -->
		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		<ul class="nav navbar-nav">
		<li><a href="{%url 'archive'%}">Archives</a></li>
		<li><a href="#">Categories</a></li>
		<li><a href="#">Tags</a></li>
		<li><a href="#">About</a></li>
		</ul>
		
		</div><!-- /.navbar-collapse -->
		</div><!-- /. -->
		</nav>
	</div><!-- top_wrap -->


<section class="content-section">
<div class="container">
	<div class="row">
	<div id="post-content" class = "post-content">
	<div class="row">
		<div class="post-body">
		{%block main%}{%endblock main%}
		</div> <!--post-body-->
	
		<div class="post-side">
		{%block side%}{%endblock side%}
		</div><!-- post-side-->
	</div><!-- row1 -->
	
<div><!-- container -->
</section>
{%endblock body%}

{%block onload%}
{{block.super}}
<script>
	toScrollFixedTop('.main-navtop', 0.33);
</script>
{%endblock onload%}
