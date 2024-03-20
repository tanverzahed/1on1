from rest_framework import serializers
from contacts.models.Contact import Contact

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['name', 'email']
        read_only_fields = ['user']

class DeleteContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        email = ['email']
        read_only_fields = ['user']