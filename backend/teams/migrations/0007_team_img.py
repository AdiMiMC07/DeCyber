# Generated by Django 4.1.5 on 2023-02-01 12:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teams', '0006_remove_team_file'),
    ]

    operations = [
        migrations.AddField(
            model_name='team',
            name='img',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
