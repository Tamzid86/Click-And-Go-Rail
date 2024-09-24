import json
from django.http import JsonResponse
from django.core import serializers
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from  .models import AvailableSeat, RunningTrain, Seat, Train, Trip


@csrf_exempt
def UploadTrainInfo(req):
    try:
        train_info =  json.loads(req.body)
        temp= Train.objects.create(
            # traveling_date=train_info['traveling_date'],
            # departure_time=train_info['departure_time'],
            # arrival_time=train_info['arrival_time'],
            destination=train_info['destination'],
            station=train_info['station'],
            train_name=train_info['train_name'],
            train_id=train_info['train_id']
        )
        temp2=RunningTrain.objects.create(
            day=train_info['day'],
            train_id=train_info['train_id'],
            forward= train_info['forward']
        )
        if(temp and temp2):
            return JsonResponse({"message":"Train information has been added successfully"}, status=201)
        else:
            return JsonResponse({"message":"error has been occurred"}, status=400)
    except Exception as e:
        return JsonResponse({"message":"internal server error", "error": str(e)}, status=500)
    
@csrf_exempt
def AddSeat(req):
    try:
        seat_info= json.loads(req.body)
        temp=Seat.objects.create(
            date=seat_info['date'],
            quantity=seat_info['quantity'],
            seat_class=seat_info['seat_class'],
            train_id= seat_info['train_id']
        )
        if(temp):
            return JsonResponse({"message":"Seat information has been added successfully"}, status=201)
        else:
            return JsonResponse({"message":"error has been occurred"}, status=400)
    except Exception as e:
        return JsonResponse({"message":"internal server error", "error": str(e)}, status=500)


# eta continue korbo

@csrf_exempt
def SearchTrain(req):
    try:
        train_info = json.loads(req.body)
        travelingFrom = train_info.get('station')
        travelingTo = train_info.get('destination')
        travelingDate = train_info.get('traveling_date')
        if not travelingDate or not travelingFrom or not travelingTo:
            return JsonResponse({"message": "Data missing!"}, status=401)
        train_ids = []
        trip_ids=[]
        
        trains = Train.objects.filter(station=travelingFrom, destination=travelingTo)
        for train in trains:
            tempid = train.train_id
            trips=Trip.objects.filter(train_id=tempid)
            train_ids.append(tempid)
            for trip in trips:
                trip_ids.append(trip.trip_id)
            # availableSeat = AvailableSeat.objects.filter(train_id=tempid)
            # if availableSeat.exists() and availableSeat[0].quantity > 0:
            #     print(tempid)                
        availableTrains = Trip.objects.filter(trip_id__in=trip_ids, traveling_date=travelingDate)
        availableTrains_json = serializers.serialize('json', availableTrains)
        return JsonResponse({"Available trains": availableTrains_json}, status=200)
    except Exception as e:
        return JsonResponse({"message": "internal server error", "error": str(e)}, status=500)



#train id parameter e pass kortesi but the problem is trainId pabo kibhabe while selecting a particular ticket?
#

@csrf_exempt
def PurchaseTickets(req, tripId): 
    try:
        ticket_info = json.loads(req.body)
        seat_classes = ticket_info.get('seat_classes', [])
         
        if not tripId:
            return JsonResponse({"message": "Data missing!"}, status=401)
        seats=AvailableSeat.objects.filter(trip_id__in=tripId)
        availabeSeats=[]
        for seat in seat_classes:
            bookedSeat =  AvailableSeat.objects.filter(seat_class=seat, trip_id=tripId)
            if bookedSeat[0].quantity == 0:
                return JsonResponse({"message": "Ticket is not available"}, status=402)
            bookedSeat[0].quantity-=1
            bookedSeat[0].save()
    except Exception as e:
        return JsonResponse({"message": "internal server error", "error": str(e)}, status=500)


@csrf_exempt
def generateTrip():
    try:
        
    except: