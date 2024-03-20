from django.db import models
from accounts.models import User

class Contact(models.Model):  
    '''
    user has the contact with email in their contacts list.
    '''
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    def __str__(self):
        return self.email