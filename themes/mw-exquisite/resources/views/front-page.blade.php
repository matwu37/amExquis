@extends('layouts.app')

@section('content')
  @while(have_posts()) @php the_post() @endphp
    @include('partials.page-header')
    @include('partials.content-page')

<div class="front-carousel">
    <img src="@asset('images/1024x450.png')">
    <img src="@asset('images/1024x450.png')">
    <img src="@asset('images/1024x450.png')">
</div>

  @endwhile
@endsection
