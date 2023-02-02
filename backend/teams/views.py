from django.shortcuts import render
from .models import Team
from .serializers import TeamSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
# from rest_framework.parsers import MultiPartParser,FormParser
from rest_framework.decorators import api_view
# from django.http import JsonResponse

# Create your views here.

class TeamView(APIView):
  
    def get(self, request):
        detail = [ {"id": detail.uid,"team_name": detail.team_name,"leader": detail.member1,"file": detail.avatar.url}
        for detail in Team.objects.all()]
        return Response(detail)
  
    def post(self, request):
        serializer = TeamSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response({'status':"success"})
        return Response({'status':"failed"})


def teams(request):
    pass