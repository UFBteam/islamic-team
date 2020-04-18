from django.conf.urls import url,include
from django.contrib import admin
from django.contrib.auth import views as auth_views
from django.conf.urls.static import static
from django.conf import settings
from .views import(
    signup,
    login_view,
    home,
    logout_view,
    start_view
    )

urlpatterns = [

    
    url(r'^signup/', signup),
    url(r'^$',start_view),
    url(r'^login/', login_view),
    url(r'^home/', home),
    url(r'^logout/', logout_view),
    
]