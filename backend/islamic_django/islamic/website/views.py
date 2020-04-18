from django.shortcuts import render
from .models import CustomUser
from django.shortcuts import render,redirect,get_object_or_404
from django.contrib.auth.models import AbstractUser

from django.contrib.auth import(

		authenticate,
		get_user_model,
		login,
		logout,


	)



# Create your views here.

def signup(request):
	User = get_user_model()
	error=""
	if request.method == 'POST':
		name=request.POST['u_name']
		email=request.POST['u_email']
		password=request.POST['u_pass']
		
		
		if User.objects.filter(email=email).exists():
			error="The email is already exist"

		else:
			user = User.objects.create_user(email,name,password)
			user.set_password(password)
			user.save()
			new_user =authenticate(email=email,password=password)
			login(request,new_user)
			print("\n\n\n",request.user,"\n\n\n")

			return redirect("/home/")

	context={'error':error,}
	return render(request,"sign-up.html",context)



def login_view(request):
	error=""
	if request.method == "POST":
		email=request.POST['email']
		password=request.POST['password']
		user=authenticate(email=email,password=password)
		print("\n\n\n",user,"\n\n\n")
		if user:
			login(request,user)
			return redirect("/home/")

		else:
			error="email or password is not correct"


	context={"error":error,}

	return render(request,"sign-in.html",context)

def home(request):
	context={"user":request.user,"email":request.user.email,"name":request.user.name}
	return render(request,"index.html",context)

def logout_view(request):
	logout(request)
	return redirect("/login/")

def start_view(request):
	return render(request,"start.html")
	



