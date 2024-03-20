from django.urls import path
from .views import Contacts

app_name = "contacts"
urlpatterns = [
    path('contacts/' , Contacts.as_view() , name="contacts"),

]
