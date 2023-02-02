from rest_framework import serializers
from .models import Team

class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ('team_name', 'username', 'login_pass', 'member1', 'member2', 'email1', 'email2', 'phone1', 'phone2', 'gender1', 'gender2', 'college','avatar')
