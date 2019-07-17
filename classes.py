# import neccessary functions
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import yaml
import io
import os
import math
from sympy.solvers import solve
from sympy import Symbol
import funcs
z = Symbol('x')

class maketrial(dict): #create trial class to easily store trials as dicts without passing around dicts
    def __init__(self, *args, **kwargs): #allows you to use x.y instead of x['y']
        super(maketrial, self).__init__(*args, **kwargs)
        self.__dict__ = self
    def add(self,attr,val): #add entry to the trial or dictionary
        self[attr] = val
class maketrials(dict): #create trials class to store all trials in a single dict for easy access and modification
    def __init__(self, filename, indicatorfilename): 
        super(maketrials, self).__init__() #allows you to use x.y instead of x['y']
        self.__dict__ = self
        initimport = pd.read_csv(filename,header = None) #below this is importing from the csv filename given
        initimport.columns = ['x','y']
        nums = list(initimport.loc[initimport['x'] == 0].index)
        nums.insert(0,0)
        fullrange = [t[1] for t in zip(nums, nums[1:]) if t[0]+1 != t[1]]
        fullrange.insert(0,0)
        fullranges = [list(t) for t in zip(fullrange, fullrange[1:])]
        #print(fullranges)
        ranges = [list(t) for t in zip(nums, nums[1:]) if t[0]+1 != t[1]]
        #print(ranges)
        ite = 0
        for i in range(len(ranges)):
            rangeiq = ranges[i]
            fullrangeiq = fullranges[i]
            ite += 1
            nozero = initimport.iloc[rangeiq[0]+1:rangeiq[1]-1]
            zero = initimport.iloc[fullrangeiq[0]+1:fullrangeiq[1]-1]
            self[f"{ite}"] = maketrial()
            self[f"{ite}"].add('raw',nozero) #add both the trial with and without 0 padding to each trial
            self[f"{ite}"].add('rawz',zero) #above this is importing from the csv filename given
        self.evalrules(indicatorfilename)
    def plot(self): #plot all the trials
        for item in self.keys():
            toplt = self[item].raw
            plt.plot(toplt['x'],toplt['y'])
            axes = plt.gca()
            axes.set_xlim([0,1500])
            axes.set_ylim([0,500])
        plt.show()
    def evalrules(self,filename, showq = False): #evaluate rules on all trials
       
        with open(filename, 'r') as stream: #open the rules from file and send it to a dataframe
            data_loaded = yaml.safe_load(stream)
        indicators = pd.DataFrame(data_loaded['rules']).T
        
        for item in self.keys(): #iterate through all items in keys
            trial = self[item]
            trial = funcs.linearity(trial, show = showq)
            trial['accel'] = funcs.takedev(trial['raw'],show = showq)
            trial['jerk'] = funcs.takedev(trial['accel'],show = showq)
            #print(trial['x'])
            leng = len(indicators)
            initalarray = np.zeros(leng)
            for i in range(leng): #evaluate the function on the function values if the bineval parameter is met and add the result into an array
                #print(i,type(i))
                func = eval(indicators.loc[indicators.index[i]]['action value'])
                funcval = eval(indicators.loc[indicators.index[i]]['action input'])
                bineval = eval(indicators.loc[indicators.index[i]]['action binary'])
                #print(funcval, type(funcval))
                if bineval:
                    initalarray[i] = func(funcval)
                else:
                    initalarray[i] = 0.0
            self[item].vec = initalarray
        


  