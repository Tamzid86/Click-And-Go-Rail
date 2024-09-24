from django.db import models


class Train(models.Model):
    train_id=models.AutoField(primary_key=True)
    train_name=models.CharField(max_length=50)
    station=models.CharField(max_length=50)
    destination=models.CharField(max_length=50)
    # forwardDays=[1, 5]
    # backwardDays=[2, 6]
    
    # arrival_time=models.TimeField()
    # departure_time=models.TimeField()
    # traveling_date=models.DateField()
    
class Seat(models.Model):
    trip_id=models.CharField(max_length=50)
    seat_class= models.CharField(max_length=50)
    quantity= models.IntegerField(default=0)
    # date = models.DateField()
    # TID -> DID 
    # 1 ->    2    
    # 2 ->    6
    # 3 ->    1
    # 15/2/2024 -> Saturday -> 6 -> 
    # 1 -> 2 -> 3 ->
    # 15/2/2024 + 0
    # 16/2
    # 17/2
    # class Meta:
    #     unique_together=('train_id', 'seat_class')
    
class Trip(models.Model):
    trip_id= models.AutoField(primary_key=True)
    train_id=models.IntegerField()
    # station=models.CharField(max_length=50)
    # destination=models.CharField(max_length=50)
    traveling_date=models.DateField()
    traveling_time=models.TimeField()
    
    #---Search Train---
    #train search er jonno station ar destination theke train_id niye then trip table e ashte hobe,
    #trip table theke oi train_id ar date match koraye dekhte hobe adou kuno trip ase ki na oi route e oi specific date e.
    
    
    #---Purchase Ticket---
    #trip id diye AvailableSeat table e search korbe then oi specific class er ticket er quantity minus kore dibe.
    
class AvailableSeat(models.Model):
    trip_id=models.AutoField(primary_key=True)
    # station=models.CharField(max_length=50)#
    # destination=models.CharField(max_length=50)#
    # traveling_date=models.DateField()#
    seat_class= models.CharField(max_length=50)
    quantity= models.IntegerField(default=0)
    
    
# 0 -> Friday
class RunningTrain(models.Model):
    day=models.IntegerField(default=0)
    train_id=models.IntegerField()
    forward=models.BooleanField(default=True)
    
#train add korar time e Train table er shob information add hobe, er por runningtrain table er field gulao add hobe okhane.