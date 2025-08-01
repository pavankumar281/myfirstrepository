from django.http import HttpResponse
from django.shortcuts import render, redirect  # You missed 'redirect' import
from .models import Student
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth .forms import AuthenticationForm
from django.contrib.auth import login as auth_login, authenticate,logout

def contact(request):
    students = Student.objects.all()
    return render(request, 'contact.html', {'Student_list': students})

def details(request, slug):
    student = Student.objects.get(slug=slug)
    return render(request, 'details.html', {'Student': student})

def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("contact")  # Make sure you have this URL name in your urls.py
    else:
        form = UserCreationForm()  # You had a typo: 'from' instead of 'form' and misspelled 'UserCreationForm'
    
    return render(request, 'register.html', {'form': form})  # Keys in dicts must be strings

    def login(request):
     if request.method == 'POST':
          form = AuthenticationForm(data=request.POST)
          if form.is_valid():
               username = form.cleaned_data.get('username')
               password = form.cleaned_data.get('password')
               user = authenticate(username=username, password=password)
               if user is not None:
                    auth_login(request, user)
                    return redirect("contact")
     else:
          form = AuthenticationForm()
     
     return render(request, 'login.html', {'form': form})

def logout_view(request):
    logout(request)
    return redirect("contact")
