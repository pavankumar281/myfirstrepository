from django.db import models

# Create your models here.

class Student(models.Model):
    name = models.CharField(max_length=100)
    rollno = models.IntegerField() 
    slug=models.SlugField(unique=True,blank=True,null=True)
    image = models.ImageField(upload_to='images/', null=True)
    def _str_(self):
        return f" {self.name}-{self.rollno}-{self.grade}-{self.email}"

class csd(models.Model):
    name=models.CharField()
    marks=models.IntegerField()

    def __str__(self):
        return self.marks