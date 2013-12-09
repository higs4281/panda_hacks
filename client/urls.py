#!/usr/bin/env python

from django.conf.urls.defaults import patterns, url

from client import views

urlpatterns = patterns('',
    url(r'^templates.js$', views.jst, name='jst'),
    url(r'^i18n.js$', 'django.views.i18n.javascript_catalog'),
    url(r'^dashboard/$', views.dashboard, name='dashboard'),
    url(r'^arrest_search/$', views.arrest_search, name='arrest_search'),
    url(r'^$', views.index, name='index')
)

