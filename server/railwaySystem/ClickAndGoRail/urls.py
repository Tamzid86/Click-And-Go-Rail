from django.urls import path
from . import views

urlpatterns=[
    
    path('train-info', views.UploadTrainInfo, name="train-info"),
    path('search-train', views.SearchTrain, name="search-train"),
    path('seat-info', views.AddSeat, name="seat-info"),
    path('buy-tickets/<int:trainId>', views.PurchaseTickets, name="buy-tickets")

]

    # "train_id":123213,
    # "train_name":"paharika",
    # "station":"Dhaka",
    # "destination":"Sylhet",
    # "arrival_time":"14:30:00",
    # "departure_time":"15:00:00",
    # "traveling_date":"2023-10-01"
    
 

