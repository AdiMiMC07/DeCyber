# Generated by Django 4.1.5 on 2023-02-01 12:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teams', '0007_team_img'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='team',
            name='img',
        ),
        migrations.AddField(
            model_name='team',
            name='file',
            field=models.FileField(default='backend\\media\\Screenshot_20221228_203047.png', upload_to=''),
            preserve_default=False,
        ),
    ]
