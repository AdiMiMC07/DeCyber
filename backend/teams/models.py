from django.db import models
from uuid import uuid4
# Create your models here.

class Team(models.Model):
    GENDER_CHOICES = (
        ('Male', 'Male'),
        ('Female', 'Female'),
    )
    uid = models.UUIDField(primary_key=True, default=uuid4)
    team_name = models.CharField(max_length=25)
    username = models.CharField(max_length=25)
    login_pass = models.CharField(max_length=25)
    member1 = models.CharField(max_length=40)
    member2 = models.CharField(max_length=40,null=True,blank=True)
    email1 = models.EmailField()
    email2 = models.EmailField(null=True,blank=True)
    phone1 = models.CharField(max_length=10)
    phone2 = models.CharField(max_length=10,null=True,blank=True)
    gender1 = models.CharField(max_length=10, choices=GENDER_CHOICES)
    gender2 = models.CharField(max_length=10, choices=GENDER_CHOICES)
    college = models.CharField(max_length=100)
    reg_time = models.DateTimeField(auto_now_add=True)
    avatar = models.ImageField(upload_to='')

    def __str__(self):
        return self.team_name

class Score(models.Model):
    team = models.ForeignKey(Team,on_delete=models.CASCADE)

    def __str__(self):
        return self.team.team_name